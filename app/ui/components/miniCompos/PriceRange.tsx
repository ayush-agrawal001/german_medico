'use client'

import { useState } from "react";
import "@/app/PriceRange.css"

export default function PriceRange(props : {label : string, min : string,max : string, unit : string }){
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(15);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxPrice - 1);
    setMinPrice(value);
  };
  
  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minPrice + 1);
    setMaxPrice(value);
  };  
  return(
      <div className="price-slider">
      <label className="price-label">{props.label}</label>
      <div className="slider-container">
        <input
          type="range"
          min={Number(props.min)}
          max={Number(props.max)}
          value={minPrice}
          onChange={handleMinChange}
          className="slider"
        />
        <input
          type="range"
          min={Number(props.min)}
          max={Number(props.max)}
          value={maxPrice}
          onChange={handleMaxChange}
          className="slider"
        />
        <div className="slider-track"></div>
      </div>
      <div className="price-display">
        <span>{minPrice} {props.unit}</span>
        <a>-</a>
        <span>{maxPrice} {props.unit}</span>
      </div>
    </div>
    )
}