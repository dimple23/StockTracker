import React from 'react';

const Card = props => {
  return (
    <div className='card'>
      {props.title ? (
        <h4 className='card-header'>{props.title}</h4>
      ) : ""}

      {props.image ? (
        <img src={props.image} alt={props.title} className="card-img" />
      ) : ""}

      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}

export default Card;
