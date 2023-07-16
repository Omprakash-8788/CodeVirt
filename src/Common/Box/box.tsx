import React from 'react';

const Box = () => {
  const boxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'red', // You can customize the background color
    margin: '5px' // You can adjust the spacing between boxes
  };

  return <div style={boxStyle}></div>;
};

const FiveBoxes = () => {
  return (
    <div>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
};

export default FiveBoxes;
