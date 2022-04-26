import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropsType from 'prop-types';

export default class News extends Component {

  static defaultProps ={
    country : 'in' ,
    pageSize : 9,
    category : 'general'
  }

  static PropsType ={
    country : PropsType.string,
    pageSize : PropsType.number,
    category : PropsType.string

  }

  constructor(){
    super();
    console.log("hellow i am constructor from News.js");
    this.state = {
      articles : [],
      loading : false,
      page : 1
    }
  }

  async componentDidMount(){
      console.log("CDM");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2de821f8e3e0423fbd8f140c881dd70d&page=1&pageSize=${this.props.pageSize}`;
      this.setState({laoding:true})
      let data = await fetch(url);
      let parsedData = await data.json(); 

      console.log(parsedData)
      this.setState({
               articles: parsedData.articles,
               totalResults: parsedData.totalResults,
               loading: false})
  }

  handlePreviousClick= async ()=>{
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2de821f8e3e0423fbd8f140c881dd70d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();

        console.log(parsedData)

        this.setState({
        page : this.state.page - 1,
        articles: parsedData.articles,
        loading:true
      })
      }
      
      handleNextClick= async ()=>{
    
      if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2de821f8e3e0423fbd8f140c881dd70d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
    
        this.setState({
        page : this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      })
      }
      
  }
  render() {
      console.log("render")
    return (
      <div className="container my-3">
        <h1 className='text-center'>NewsAPI - Top Headlines</h1>
        <hr />
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title?.slice(1,45)} description={element.description?.slice(1,88)} imageurl={element.urlToImage} newsURL={element.url} />
                   </div> 
        })}      
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div> 
    )
  }
}
