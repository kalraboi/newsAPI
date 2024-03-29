import React from "react";

const NewsItem=(props)=> {
    let {title,description,imageurl,newsurl,author,date}=props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageurl?"https://img.etimg.com/thumb/msid-96022092,width-1070,height-580,imgsize-60058,overlay-economictimes/photo.jpg":imageurl}className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span class="badge bg-secondary">New</span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel ="noreferrer" href={newsurl} target ="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
