import React,{useEffect,useState} from 'react';
import NewsItem from './NewsItem';
import Spdata from './Spdata';


const News =(props)=>{
  const[articles, setArticles]=useState([])
  const[loading, setLoading]=useState(true)
  const[page, setPage]=useState(1)
  const[totalResults,changetotalResults ]=useState(0)
   
   const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


 
 
    
  
  const newsupdate=async()=>
  {
    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b9eac570049b4253a75bebe7b945d132 &page=${page}&pageSize=${props.pageSize}`;
    let data= await fetch(url);
    let getdata = await data.json()
    setArticles(getdata.articles)
    setLoading(false)
    changetotalResults(getdata.totalResults)
     props.setProgress(100) 
  }
  
   useEffect(()=>
  {
    document.title=`${capitalizeFirstLetter(props.category)}-NEWS HADLINES`;
  
    newsupdate()
    // eslint-disable-next-line
  },[]);
  
 const enterPreviousData=async()=>
  {
   
    setPage(page-1);
    newsupdate()
  }
 const enterNextData=async()=>
  {
    setPage(page+1);
     newsupdate()
  }
 


  
    return (
      
      <div className='container my-3'>
        <h2 className='text-center'>NEWS HEDLINES-FOR PUBLIC {capitalizeFirstLetter(props.category)}</h2>
        {loading && <Spdata/>}    
         <div className="row">
         {!loading && articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              <NewsItem  title={element.title?element.title : ""} description={element.description?element.description :""} arther={element.author} date={element.publishedAt} imgurl={element.urlToImage}  newdata={element.url} source={element.source.name}/>
              </div>
         })}   
         </div>
         <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className='btn btn-dark' onClick={enterPreviousData}>&larr;previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className='btn btn-dark' onClick={enterNextData}>Next &rarr;</button>

         </div>
        
      </div>
    )
}
 News.defaultProps = 
{
 country:'in',
 pageSize:6,
 category: 'general' 
}
export default News
