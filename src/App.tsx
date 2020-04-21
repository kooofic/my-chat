import React, { Component } from 'react';
import { Login } from './Login'
import { Main } from './Main'
import { proxy } from './Proxy';
export default class App extends Component {

  lin = false;

  render() {
    return (
      <div className="app">

        {this.lin ? <Main /> : <Login />}

      </div>
    );
  }

  componentDidMount() {
    proxy.addEventListener("login", c => {this.lin = true; this.forceUpdate();}, this);
  }
  componentWillUnmount() {
    proxy.removeAllEventListener(this);
  }
}
