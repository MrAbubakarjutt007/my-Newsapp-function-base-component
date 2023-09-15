import React from 'react'
const NewsItem =(props)=>{
  
    const { title, description, imgurl, newdata, arther, date, source } = props;
    return (
      <div className='container-fluid'>
        <div className="card my-3 img-thumbnail">
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
          <img src={!imgurl ? "https://assets2.cbsnewsstatic.com/hub/i/r/2023/06/05/0d2e3f0f-bef3-4c36-b923-3fb9a4ad8d19/thumbnail/1200x630/24712d094c69c630b799c5248d2543a5/cbsn-fusion-gop-candidates-spend-weekend-in-iowa-without-trump-thumbnail-2024041-640x360.jpg " : imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">creater-{!arther ? 'noauther' : arther}- by{date}</p>
            <a href={newdata} target="_blank"  className="btn btn-dark">NEWS PAGE</a>
          </div>
        </div>
      </div>
    )
  }
export default NewsItem
