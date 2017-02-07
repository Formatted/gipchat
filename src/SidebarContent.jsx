import React from 'react';
import MaterialTitlePanel from './MaterialTitlePanel';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: 'black',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: '#80B3DA',
  },
};

const SidebarContent = (props) => {
  const style = props.style ? { ...styles.sidebar, ...props.style } : styles.sidebar;

  const links = [
    <a key={1} href="https://github.com/Giphy/GiphyAPI" style={styles.sidebarLink} target="_blank" rel="noopener noreferrer">Giphy API</a>,
    <a key={2} href="http://responsivevoice.org/" style={styles.sidebarLink} target="_blank" rel="noopener noreferrer">ResponsiveVoice</a>,
    <a key={3} href="https://cleverbot.io/" style={styles.sidebarLink} target="_blank" rel="noopener noreferrer">cleverbot.io</a>,

  ];


  return (
    <MaterialTitlePanel title="What is this..?.." style={style}>
      <div style={styles.content}>
        <p style={styles.sidebarLink}>
          Here you can talk to a robot, who tries to reply, in writing,
           with a giphy and if your browser supports it, it even talks!
        </p>
        <div style={styles.divider} />
        {links}
        <a href="https://github.com/Formatted/gipchat" target="_blank" rel="noopener noreferrer"><svg href="https://github.com/Formatted/gipchat" aria-hidden="true" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" /></svg></a>
      </div>
    </MaterialTitlePanel>
  );
};

export default SidebarContent;
