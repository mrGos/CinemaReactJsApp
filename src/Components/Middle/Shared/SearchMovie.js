import React, { Component } from 'react'
import { searchMovie } from './../../../Api/Movie/movieApi'
import TabContentItem from './../Home/TabContentItem'
export default class SearchMovie extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pageMovies: {
        Results: [],
        CurrentPage: 1,
        PageCount: 1,
        PageSize: 100,
        RowCount: 1
      }
    }
  }
  searchMovie = (keyword) => {
    searchMovie(keyword, 1, 100)
      .then(res => {
        this.setState({
          pageMovies: res
        }, () => { console.log(res) })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.searchMovie(this.props.match.params.name)
  }

  renderItem = (item) => {

  }

  render() {
    const { name } = this.props.match.params

    let ItemElm = this.state.pageMovies.Results.map(
      (item, index) => {
        return <TabContentItem
          item={item}
          key={index}
          setMovieItem={this.props.setMovieItem}

        />
      }
    )
    return (
      <div className="container search-container">
        <h2>Kết quả tìm kiếm phim: {name} </h2>
        <div className='row mt-5'>
          {ItemElm}
        </div>

      </div>

    )
  }
}
