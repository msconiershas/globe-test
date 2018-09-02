import React, { Component } from "react"
import { render } from "react-dom"
import { Grid, Row, Col } from 'react-material-responsive-grid';

import Map from "./components/Map"

import fire from './fire'
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'

import * as routes from './assets/routes';
import "./styles.css"


class App extends Component {
  constructor() {
    super()
    this.state = { 
      center: [0, 0], 
      authUser: null
    }

    this.authListener = this.authListener.bind(this);
  }
  changeCenter = center => () => {
    this.setState({ center })
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
    console.log(this.state.authUser)
  }


  componentWillMount() {
    console.log("counteedssdsd")
    this.authListener();
  }

  authListener() {
    this.fireBaseListener = fire.auth().onAuthStateChanged((user) => {
      if (user) {

        console.log('user changed..', user);
         this.setState({
            loading: false,  // For the loader maybe
            user, // User Details
            isAuth: true
      });
      } else {
        console.log('user does not exist')
        console.log(this.props.isEmpty)
        this.setState({
          user
        })
      }
    });
    }

  componentWillUnmount() {
     this.fireBaseListener && this.fireBaseListener();
     this.authListener = undefined;
  }
  onLogout(e) {
      fire.auth().signOut();
      
    }
  render() {
    return (
      <div>

        <div>
         
            
         <Map />
          
          </div>
       
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.firebase.profile,
  isEmpty: state.firebase.profile.isEmpty
})

export default App;
