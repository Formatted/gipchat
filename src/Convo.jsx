import React from 'react';
import Lines from './Lines';

const Convo = (props) => {
  const rows = [];
  props.history.forEach((item, index) => {
    rows.unshift(<Lines key={index} question={item[0]} ans={item[1]} />);
  });
  if (props.history.length === 0) {
    return <p>Ask away!</p>;
  }
  return (
    <div>{ rows }</div>
  );
};

export default Convo;
