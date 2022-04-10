import './create.css'

export default function Create() {
  return (
    <div className='create'>
        <img className='createImage' src="https://metro.co.uk/wp-content/uploads/2021/09/PRI_173163214-bddc.jpg?quality=90&strip=all" alt="" />
        <form className='createForm'>
            <div className="createFormGroup">
                <label htmlFor="fileInput">
                    <i className="createIcon fa-solid fa-arrow-up-from-bracket"></i>
                </label>
                <input type="file" id='fileInput' style={{display: 'none'}} />
                <input type="text" placeholder='Title'
                className='createInput' autoFocus={true} />
            </div>
            <div className="createFormGroup">
                <textarea className='createInput createText' placeholder='Tell your story...'></textarea>
            </div>
            <button className='createSubmit'>Publish</button>
        </form>
    </div>
  )
}
