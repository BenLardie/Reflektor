import React, { useState, useContext } from 'react';
import { MovieContext } from '../../App';
import './Button.scss';

const defaultProps = {};

const Button = (props) => {
  const genreName = props.genre.name
  const [open, setOpen] = useState('')
  const {selectedGenres, setSelectedGenres} = useContext(MovieContext)

  const genreList = (genre) => {
    const tempList = [...selectedGenres];
    if (tempList.includes(genre)) {
      const item = tempList.indexOf(genre);
      tempList.splice(item, 1);
      setSelectedGenres(tempList);
    } else {
      tempList.push(genre);
      setSelectedGenres(tempList);
    }
  };

  const classChange = () => {
    if (open === '') {
      setOpen('open')
    } else {
      setOpen('')
    }
  }



  return (
    <button className={`Button ${open}`} onClick={() => {classChange(); genreList(props.genre)}}>
      {genreName}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
