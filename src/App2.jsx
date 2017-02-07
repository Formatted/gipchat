// /* eslint-env browser*/

// import React, { Component } from 'react';
// import InputBox from './InputBox';
// import MaterialTitlePanel from './MaterialTitlePanel';
// import SidebarContent from './SidebarContent';
// import Sidebar from './Sidebar';

// // const Sidebar = require('react-sidebar');

// const styles = {
//   contentHeaderMenuLink: {
//     textDecoration: 'none',
//     color: 'white',
//     padding: 8,
//   },
//   content: {
//     padding: '16px',
//   },
// };

// class App extends Component {
//   constructor() {
//     super();
//     this.state = { open: false, docker: false };
//     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
//     // this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
//     this.toggleOpen = this.toggleOpen.bind(this);
//   }

//   componentWillMount() {
//     const mql = window.matchMedia('(min-width: 800px)');
//     mql.addListener(this.mediaQueryChanged);
//     this.setState({ mql, docker: mql.matches });
//   }

//   componentWillUnmount() {
//     this.state.mql.removeListener(this.mediaQueryChanged);
//   }

//   onSetSidebarOpen(open) {
//     this.setState({ open });
//   }

//   mediaQueryChanged() {
//     this.setState({ docker: this.state.mql.matches });
//   }

//   toggleOpen(ev) {
//     this.setState({ open: !this.state.open });

//     if (ev) {
//       ev.preventDefault();
//     }
//   }

//   render() {
//     // const sidebarContent = <b>Sidebar content</b>;
//     const sidebar = <SidebarContent />;
//     const contentHeader = (
//       <span>
//         {!this.state.docked &&
//         <a onClick={this.toggleOpen} href="#" style={styles.contentHeaderMenuLink}>=</a>}
//         <span> GipChat w/ AI</span>
//       </span>);

//     const sidebarProps = {
//       sidebar,
//       docked: this.state.docked,
//       open: this.state.open,
//       onSetOpen: this.onSetOpen,
//     };
//     return (
//       <div className="App">
//         <Sidebar {...sidebarProps}>
//           <MaterialTitlePanel title={contentHeader}>
//             <div style={styles.content}>
//               <p>
//                 This example will automatically dock the sidebar if the page
//                 width is above 800px (which is currently {`${this.state.docked}`}).
//               </p>
//               <p>
//                 This functionality should live in the component that renders the sidebar.
//                 This way you're able to modify the sidebar and main content based on the
//                 responsiveness data. For example, the menu button in the header of the
//                 content is now {this.state.docked ? 'hidden' : 'shown'} because the sidebar
//                 is {!this.state.docked && 'not'} visible.
//               </p>
//               <InputBox />
//             </div>
//           </MaterialTitlePanel>
//         </Sidebar>
//       </div>
//     );
//   }
// }

// export default App;
