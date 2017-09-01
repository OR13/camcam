import * as React from 'react';

import { Particle } from '../Common/Particle/Particle';
import './HomePage.css';

import AppBar from '../Common/AppBar/AppBar';

export default class HomePage extends React.Component<any, any> {
  render() {
    return (
      <Particle>
        <AppBar/>
      </Particle>
    );
  }
}
