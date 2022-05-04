import React from 'react'

const NewsItem =(props)=> {

  
    let { title, description, imageurl, newsURL, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position:'absolute',
                        right:'0'
                   }}>
            <span className=' badge rounded-pill bg-danger' >{source}</span>

          </div>
          <img src={imageurl == null ? 'https://cdn.kalingatv.com/wp-content/uploads/2022/03/check-fake-news-on-WhatsApp.jpg' : imageurl} className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsURL} target='_blank' rel='noreferrer noopener' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem