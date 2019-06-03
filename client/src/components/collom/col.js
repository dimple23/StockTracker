import React from 'react';

const Col = props => {
  return (
    <div
      className={`
        mb-4
        col-${props.xs || '12'} 
        ${props.sm ? `col-sm-${props.sm}` : ''}
        ${props.md ? `col-md-${props.md}` : ''}
      `}>
      {props.children}
    </div>
  );
};

export default Col;
