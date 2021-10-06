import React, {useContext} from "react";
import Button from "../Button/Button";
import "./FilterModule.scss";
import { MovieContext } from '../../App';

const defaultProps = {};

const FilterModule = (props) => {
  return (
    <div className="module">
      <div className="selectors">
        {props.movieGenres.map((genre) => (
          <Button genre={genre} />
        ))}
              <button onClick={props.handleClick} className='applyButton'>APPLY</button>

      </div>
    </div>
  );
};

FilterModule.defaultProps = defaultProps;

export default FilterModule;
