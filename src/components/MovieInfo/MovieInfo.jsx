import React from 'react';
import './MovieInfo.scss';
import getMoviePosterURL from "../../utils/get-movie-poster-url";
import moment from 'moment'

const defaultProps = {};

const MovieInfo = (props) => {
  const {poster_path, title, overview, release_date} = props.movie;

  // An example
  const posterURL = getMoviePosterURL(poster_path)

  return (
    <div className="MovieInfo">
      <img src={posterURL} className='poster' />
      <h1 className='title'>{title}</h1>
      <h2 className='date'>{moment(release_date).format('YYYY')}</h2>
      <p className='overview'>{overview}</p>
    </div>
  );
};

MovieInfo.defaultProps = defaultProps;

export default MovieInfo;
