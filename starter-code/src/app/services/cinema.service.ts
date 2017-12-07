import { Injectable } from '@angular/core';
import { movies } from '../../sample-movies';

@Injectable()
export class CinemaService {

  movie: any[] = [
    {
      id: Number,
      title: String,
      poster: String,
      synopsis: String,
      genres: [String],
      year: Number,
      director: String,
      actors: [String],
      hours: [String],
      room: Number
    }
  ];

  constructor() { }

  getMovies() {
    return this.movie;
  }

  getMovie(movieId: number|string) {
    movieId = Number(movieId);

    let movieInfo;

    this.movie.forEach((oneMovie) => {
      if (oneMovie.id === movieId) {
        movieInfo = oneMovie;
      }
      console.log(movieInfo);
    });
    return movieInfo;
  }
}
