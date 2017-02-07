/* eslint-env browser*/
/* eslint-env jquery*/

import React from 'react';
import ReactDOM from 'react-dom';
import MaterialTitlePanel from './MaterialTitlePanel';
import SidebarContent from './SidebarContent';
import Sidebar from './Sidebar';
import InputBox from './InputBox';
import styles from './Styles';

const $ = require('jquery');

const App = React.createClass({
  getInitialState() {
    return { docked: false, open: false, sizze: $(window).width() };
  },

  componentWillMount() {
    const mql = window.matchMedia('(min-width: 800px)');
    mql.addListener(this.mediaQueryChanged);
    this.setState({ mql, docked: mql.matches, width: $(window).width() });
  },

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  },

  onSetOpen(open) {
    this.setState({ open });
  },

  mediaQueryChanged() {
    this.setState({ docked: this.state.mql.matches && $(window).width() > 799,
      width: $(window).width() });
  },

  toggleOpen(ev) {
    this.setState({ open: !this.state.open });

    if (ev) {
      ev.preventDefault();
    }
  },

  render() {
    const sidebar = <SidebarContent />;

    const contentHeader = (
      <span>
        {!this.state.docked &&
        <a onClick={this.toggleOpen} href="#" style={styles.contentHeaderMenuLink}>=</a>}
        <span> GipChat w/ AI</span>
      </span>);

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen,
    };

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div style={styles.content}>
            <InputBox />
          </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  },
});

export default App;
