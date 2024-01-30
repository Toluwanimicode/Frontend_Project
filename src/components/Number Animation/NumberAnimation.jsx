import React from 'react';
import { useSpring, animated } from 'react-spring';

const NumberAnimation = () => {
  const numbers = [
    { id: 1, value: 2004, title: 'Year Founded' },
    { id: 2, value: 150, title: 'Graduated-Students' },
    { id: 3, value: 20, title: 'Awards' },
    { id: 4, value: 100, title: 'Teachers' },
  ];

  const numberSprings = numbers.map((number) =>
    useSpring({
      from: { number: 0 },
      to: { number: number.value },
      config: { duration: 3000 },
    })
  );

  return (
    <div style={{ display: 'flex' }}>
      {numbers.map((number, index) => (
        <div key={number.id} style={{ margin: '0 20px' }}>
          <div style={{ marginBottom: '10px', fontSize: '20px', color: '#666' }}><b>{number.title}</b></div>
          <animated.div style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>
            {numberSprings[index].number.interpolate((value) => Math.floor(value))}
          </animated.div>
        </div>
      ))}
    </div>
  );
};

export default NumberAnimation;