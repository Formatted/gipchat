import React from 'react';
import styles from './Styles';

const MaterialTitlePanel = (props) => {
  const rootStyle = props.style ? { ...styles.root, ...props.style } : styles.root;

  return (
    <div style={rootStyle}>
      <div style={styles.header}>{props.title}</div>
      {props.children}
    </div>
  );
};

export default MaterialTitlePanel;
