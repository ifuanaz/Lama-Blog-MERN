import './edit.css'
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import http from '../../utils/axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function Edit() {
    const publicFolder = 'http://localhost:5000/images/';
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState('');
    const [filePreview, setFilePreview] = useState('');
    const { user } = useContext(Context);
    const { register, setValue, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await http.get(`/post/${postId}`);
            const post = response.data;

            setPost(post);
            setValue('title', post.title);
            setValue('description', post.description);
        }

        fetchPost();
    }, []);

    const onSelectFile = (event) => {
        const file = event.target.files[0];

        setFilePreview(file);
        setValue('file', file);
    }

    const onSubmit = async (formData) => {
        console.log('SUBMIT / EDIT', formData);
        console.log(formData.file);

        const body = {
            title: formData.title,
            description: formData.description,
            author: user.username
        };

        if (formData.file?.size) {
            const file = formData.file;
            const data = new FormData();
            const filename = Date.now() + file.name;

            data.append('name', filename);
            data.append('file', file);

            body.image = filename;

            try {
                await http.post('/upload', data);
            } catch (error) {
                console.error(error);
            }
        }

        await http.put(`/post/${postId}`, body);
        navigate(`/post/${postId}`);
    }

    return (
        <div className='edit'>
            {filePreview ?
                <img className='createImage' src={URL.createObjectURL(filePreview)} alt="Image" />
                :
                post.image && <img className='editImage' src={publicFolder + post.image} alt="Image" />
            }
            <form className='editForm' onSubmit={handleSubmit(onSubmit)}>
                <div className="editFormGroup">
                    <label htmlFor="fileInput">
                        <i className="editIcon fa-solid fa-arrow-up-from-bracket"></i>
                    </label>
                    <input type="file" id='fileInput'
                        style={{ display: 'none' }}
                        {...register('file')}
                        onChange={onSelectFile}
                    />
                    <input type="text" placeholder='Title'
                        className='editInput' autoFocus={true}
                        {...register('title', { required: true, minLength: 5 })}
                    />
                </div>
                <div className='editFormGroup error'>
                    {errors.title?.type === 'required' && <span>This field is required</span>}
                    {errors.title?.type === 'minLength' && <span>This field should be more than 4 symbols</span>}
                </div>
                <div className="editFormGroup">
                    <textarea
                        className='editInput editText'
                        placeholder='Tell your story...'
                        rows={12}
                        {...register('description', { required: true })}
                    ></textarea>
                </div>
                <div className='editFormGroup error'>
                    {errors.description?.type === 'required' && <span>This field is required</span>}
                </div>
                <button className='editSubmit' type='submit'>Update</button>
            </form>
        </div>
    )
}
