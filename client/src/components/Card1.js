import React from 'react';

const Card = props => {
  return (
    <div className='card'>
      {props.article ? (
        <h4 className='card-header'>{props.article}</h4>
      ) : ""}

      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}

export default Card;