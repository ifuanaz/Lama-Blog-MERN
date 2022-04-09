import './post.css'

export default function Post() {
  return (
    <article className='post'>
        <img className='postImage' src="https://thumbs.dreamstime.com/b/santa-hat-new-year-s-soft-toy-bench-winter-forest-against-background-village-house-lantern-christma-christmas-156787504.jpg" alt="" />
        <div className="postInfo">
            <div className="postCategories">
                <span className="postCategory">Music</span>
                <span className="postCategory">Life</span>
            </div>
            <h2 className='postTitle'>
                Abole, provident quite.
            </h2>
            <hr />
            <span className="postDate">
                1 hour ago
            </span>
        </div>
        <p className='postText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tenetur velit facilis iure. 
            Quo quos dignissimos, sequi minima maxime ipsum totam!

            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Numquam rerum deserunt nobis mollitia deleniti vitae cum consequatur 
            fuga assumenda error aut magni sed, temporibus non illo incidunt. 
            Nam dignissimos porro maiores, deleniti a laborum tempore ipsa sint, 
            fuga itaque eveniet repellendus doloribus iure consequuntur nobis 
            doloremque ut voluptatibus commodi temporibus?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Numquam rerum deserunt nobis mollitia deleniti vitae cum consequatur 
            fuga assumenda error aut magni sed, temporibus non illo incidunt. 
            Nam dignissimos porro maiores, deleniti a laborum tempore ipsa sint, 
            fuga itaque eveniet repellendus doloribus iure consequuntur nobis 
            doloremque ut voluptatibus commodi temporibus?
        </p>
    </article>
  )
}
