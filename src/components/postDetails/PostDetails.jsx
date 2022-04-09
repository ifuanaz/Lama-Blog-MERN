import './postDetails.css'

export default function PostDetails() {
  return (
    <div className='postDetails'>
        <div className="postDetailsWrapper">
            <img className='postDetailsImage' src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="" />
            <h1 className='postDetailsTitle'>
                Lorem, ipsum dolor.
                <span className='postDetailsEdit'>
                    <i className="postDetailsIcon fa-solid fa-pen-to-square"></i>
                    <i className="postDetailsIcon fa-solid fa-trash-can"></i>
                </span>
            </h1>
            <div className="postDetailsInfo">
                <span className='postDetailsAuthor'>Author: <b>Rafik</b></span>
                <span className='postDetailsDate'>1 hour ago</span>
            </div>
            <p className='postDetailsText'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore veritatis quas, tempore nobis expedita ipsam. Quasi, animi ab ullam quis porro tempore ducimus iusto quam commodi neque beatae architecto sequi repellat ad aperiam qui sint exercitationem dolorem ut corporis debitis cumque modi quos eos? Possimus amet beatae distinctio esse inventore minima ipsam vero eaque vel error, explicabo nobis architecto dolore odio magni quis aliquid soluta culpa voluptas iusto est ad fugit dicta assumenda! Ipsa quaerat at repudiandae aperiam aliquid aliquam nam delectus ad, blanditiis amet quam cupiditate excepturi quidem adipisci porro numquam assumenda laudantium, dignissimos eligendi vitae est quia accusamus. Animi ullam a saepe officia quas sunt, excepturi et veritatis odio cupiditate hic tenetur porro. Assumenda quod, mollitia doloremque autem similique praesentium deleniti impedit eum nisi labore eaque deserunt veniam. Suscipit ut repellendus laboriosam consequuntur, adipisci, illum ex iure rem totam officiis tenetur, numquam ipsum labore obcaecati laudantium reprehenderit earum maiores rerum nobis veniam! Enim porro eos, accusantium velit impedit vero neque corporis quas a magni rerum consequuntur harum beatae odit. In inventore ipsam et adipisci fuga reprehenderit exercitationem neque perferendis, veniam dolorum odio! Facere sed blanditiis alias, minus, quae quod aperiam at recusandae debitis assumenda porro, eos labore.
            </p>
        </div>
    </div>
  )
}
