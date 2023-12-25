/*import { FaStar } from "react-icons/fa";

import React from "react";


function Star(props){
    retturn(
        <div>
            
        </div>
    )
}

export default Star;*/

import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
const Stars = (props) => {
    const{fullN,halfN,noN} = props;

    console.log(fullN,halfN,noN);
  const stars = Array.from({ length: fullN }).map((_, index) => (
    <FaStar key={index} /> 
  ));
  const starsH = Array.from({ length: halfN }).map((_, index) => (
    <FaStarHalfAlt key={index} /> 
  ));
  const starsE = Array.from({ length: noN }).map((_, index) => (
    <FaRegStar key={index} /> 
  ));

  return (
    <div>
      {/* Render the stars array containing FaStar components */}
      {stars}
      {starsH}
      {starsE}
    </div>
  );
};

export default Stars;