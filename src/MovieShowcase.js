import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(movie => {
      // console.log(movie)
      // return <MovieCard movie={movie} key={movie.title}/>
      return <MovieCard key={movie.title} title={movie.title} poster={movie.poster} genres={movie.genres} IMDBRating={movie.IMDBRating} />
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}

      </div>
    )
  }
}
