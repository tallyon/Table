import React, { Component } from 'react';
import styled from 'styled-components';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Login from './Login';
import AdressList from './AdressList';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Scenes extends Component {
  state = {};
  render() {
    return (
      <AppWrapper>
        <Router history={history}>
          <Switch>
            <Route exact path="/login/" component={Login} />
            <Route exact path="/adress-list/" component={AdressList} />
          </Switch>
        </Router>
      </AppWrapper>
    );
  }
}

export default Scenes;