import React, {useEffect} from "react";
import Button from "../Button/Button";
import "./FilterModule.scss";

const defaultProps = {};

const FilterModule = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="module">
      <div className="selectors">
        {props.movieGenres.map((genre) => (
          <Button genre={genre} />
        ))}
        <button onClick={props.handleClick} className="applyButton">
          APPLY
        </button>
      </div>
    </div>
  );
};

FilterModule.defaultProps = defaultProps;

export default FilterModule;
