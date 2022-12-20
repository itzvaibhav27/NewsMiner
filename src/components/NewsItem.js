import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props
        return (
            <div>
                <div className="card my-2">
                    <img src={imageUrl?imageUrl:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/11/breaking-news-template-1-1667263372.jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <span className="badge text-bg-dark my-1" >{source}</span>
                            <h5 className="card-title">{title?title:" "}</h5>
                            <p className="card-text">{description?description:" "}</p>
                            <h6 className="card-subtitle mb-2 text-muted">By {author? author: "Unknown"} on {new Date(date).toGMTString()}</h6>
                            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-outline-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
