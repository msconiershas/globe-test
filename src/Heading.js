import React, { Component } from 'react';

import './Heading.css';


// var App = React.createClass({
//   render() {
//     return (
//       <div>
//         <NavBar />
//         <div>Other Content</div>
//         {this.props.children}
//       </div>
//     )
//   }
// });

// <Router>
//   <Route path="/" component={App}>
//     <Route path="page1"  />
//     <Route path="page2"  />
//   </Route>
//   <Route path="/login" component={Login} />
// </Router>

class Heading extends Component{
  render() {
    return (
      <div id="banner" className="Heading">
        <header>
          <img />
          <h1 className="Heading-title">McKinley's Travel Blog</h1>
        </header>
        <h3 className="Heading-sub">
          
        </h3>
      </div>
    )
  }
};

/// var NavBar = React.createClass({
//   render() {
//     return (
//       <div>
//         <ul>
          
//         </ul>
//       </div>
//     )
//   }
// });

export default Heading;
