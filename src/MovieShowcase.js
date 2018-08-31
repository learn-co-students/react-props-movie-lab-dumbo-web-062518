import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    movieData.map(movie => {
      return (
        <div>
          < MovieCard
          title={movie.title}
          poster={movie.poster}
          genres={movie.genres}
          IMDBRating={movie.IMDBRating}
          />
        </div>
      )
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        {/*this.generateMovieCards()*/}
        {movieData.map(movie => {
          return (
            <div>
              < MovieCard
              title={movie.title}
              poster={movie.poster}
              genres={movie.genres}
              IMDBRating={movie.IMDBRating}
              />
            </div>
          )
        })}
      </div>
    )
  }
}
