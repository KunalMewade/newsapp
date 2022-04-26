import React, { Component } from 'react'

export default class NewsItem extends Component {
 
  render() {
    let { title, description, imageurl, newsURL} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <img src={imageurl==null ? 'https://cdn.kalingatv.com/wp-content/uploads/2022/03/check-fake-news-on-WhatsApp.jpg' :imageurl } className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsURL} target='_blank' rel='noreferrer noopener' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
