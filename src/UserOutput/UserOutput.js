import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className='UserOutput'>
      <p> UserName: {props.userName} </p>
      <p> I'll hope it'll be overwritten..!</p>
    </div>
  );
};

export default userOutput;