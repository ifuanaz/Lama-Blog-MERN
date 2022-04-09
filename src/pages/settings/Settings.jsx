import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">
                    Update Your Account
                </span>
                <span className="settingsDeleteTitle">
                    Delete Account
                </span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsProfilePicture">
                    <img src="https://i2.wp.com/cms.babbel.news/wp-content/uploads/2020/09/CM_MagazineHeader_FallVsAutumn.png" alt="" />
                
                    <label htmlFor="profileInput">
                        <i className="profilePictureIcon fa-solid fa-user"></i>
                        <input type="file" id='profileInput' style={{display: 'none'}} />
                    </label>
                </div>
                <label>Username</label>
                <input type="text" placeholder='Rafik' />

                <label>Email</label>
                <input type="email" placeholder='rafik@gmail.com' />

                <label>Password</label>
                <input type="password" placeholder='Enter your new password...' />
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
