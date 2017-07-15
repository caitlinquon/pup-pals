import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import SideBar from './SideBar.jsx'
import Navbar from './Navbar.jsx'
import Map from './Map.jsx'

class App extends React.Component {
  componentDidMount() {
    this.socket = io();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Map />
        <SideBar />
        <SearchBar />
      </div>
    );
  }
}

export default App;