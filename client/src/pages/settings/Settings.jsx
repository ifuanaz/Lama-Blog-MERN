import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context';
import http from '../../utils/axios'
import './settings.css'

export default function Settings() {
    const publicFolder = 'http://localhost:5000/images/profiles/';
    const navigate = useNavigate();
    const [profilePreview, setProfilePreview] = useState('');
    const { user, dispatch } = useContext(Context);
    const { register, setValue, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        setValue('email', user.email);
    }, []);

    const renderProfilePicture = () => {
        if (profilePreview) {
            return <img src={URL.createObjectURL(profilePreview)} alt="Profile" />
        } else if (user.profileImage) {
            return <img src={publicFolder + user.profileImage} alt="Profile" />
        }
        return <img src="/images/profile.png" alt="Profile" />
    }

    const onSelectProfile = (event) => {
        const file = event.target.files[0];

        setProfilePreview(file);
        setValue('profile', file);
    }

    const onDeleteAccount = async () => {
        const isConfirmed = window.confirm(`
            Are you sure you want to delete your account. 
            In this case all your created posts will be removed as well. 
            Do you want to proceed?
        `)

        if (isConfirmed) {
            await http.delete(`/user/${user._id}`, {
                data: {userId: user._id}
            });
            dispatch({ type: 'LOGOUT' });
            navigate('/');
        }
    }

    const onSubmit = async (formData) => {
        // console.log(formData);

        const body = {
            email: formData.email
        };

        if (formData.profile?.size) {
            const file = formData.profile;
            const data = new FormData();
            const filename = Date.now() + file.name;

            data.append('directory', 'images/profiles');
            data.append('name', filename);
            data.append('file', file);

            body.profileImage = filename;

            try {
                await http.post('/upload', data);
            } catch (error) {
                console.error(error);
            }
        }

        if (formData.password) {
            body.password = formData.password;
        }

        const response = await http.put(`/user/${user._id}`, {
            userId: user._id,
            ...body
        });

        dispatch({ type: 'UPDATE_PROFILE', payload: response.data });
        navigate('/');
    }

    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDeleteTitle" onClick={onDeleteAccount}>
                        Delete Account
                    </span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit(onSubmit)}>
                    <label>Profile Picture</label>
                    <div className="settingsProfilePicture">
                        {renderProfilePicture()}
                        
                        <label htmlFor="profileInput">
                            <i className="profilePictureIcon fa-solid fa-image"></i>
                            <input
                                type="file"
                                id='profileInput'
                                style={{ display: 'none' }}
                                {...register('profile')}
                                onChange={onSelectProfile}
                            />
                        </label>
                    </div>
                    <label>Username</label>
                    <input type="text" value={user.username} readOnly={true} />

                    <label>Email</label>
                    <input
                        type="email"
                        placeholder='rafik@gmail.com'
                        {...register('email', { required: true, pattern: '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/' })}
                    />
                    {
                        errors.email?.type === 'required' &&
                        <div className='error'>Email is required</div>
                    }
                    {
                        errors.email?.type === 'pattern' &&
                        <div className='error'>Email must be correct</div>
                    }
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder='Enter your new password...'
                        {...register('password', { minLength: 5 })}
                    />
                    {
                        errors.password?.type === 'minLength' &&
                        <div className='error'>Password must be longer than 4 symbols</div>
                    }
                    <button className='settingsSubmit' type='submit'>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
