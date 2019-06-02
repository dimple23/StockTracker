import React from 'react';

const Row = (props) => {
  return (
    <div
      className={`
        row 
        justify-content-${props.justify || 'start'}
        align-items-${props.align || 'stretch'}
      `}
    >
      {props.children}
    </div>
  )
}

export default Row;
