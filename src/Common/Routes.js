import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './../Components/Middle/Home/Home'
import MovieDetail from './../Components/Middle/MovieDetail/index'

import TrailerModal from './../Components/Modal/TrailerModal'

export default class Routes extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     isShown: false,
  //     mItem:{}
  //   }
  // }

  // setHideModal = () => {
  //   this.setState({ isShown: false })
  // }
  // setMovieItem = (item) => {
  //   this.setState({ mItem: item, isShown: true })
  // }


  render() {
    //console.log(this.props.isShown)
    return (
      <div>
      <Switch>
        <Route
          path="/"
          exact
          render={({ match, history }) => <Home setMovieItem={this.props.setMovieItem} />}
        />
        <Route
          path="/movie/:id"
          exact
          render={({ match, history }) => <MovieDetail
          showTrailer={this.props.showTrailer}
          setMovieItem={this.props.setMovieItem}
            match={match}
            history={history}
          />}
        />
      </Switch>
      {/* <TrailerModal movieItem={this.props.mItem} isShown={this.props.isShown} setHideModal={this.props.setHideModal}/> */}
      </div>
    )
  }
}
