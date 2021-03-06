import React from 'react';

import Home from './components/Home.js';
import Chat from './components/Chat.js';

import {
    Platform,
} from 'react-native';

import {
    Router,
    Scene,
} from 'react-native-router-flux';

export default class App extends React.Component {
    render() {
        return (
          <Router>
            <Scene key='root' style={{paddingTop: Platform.OS === 'android' ? 54 : 64}}>
              <Scene key='home' component={Home} title='Home' />
              <Scene key='chat' component={Chat} title='Chat' />
            </Scene>
          </Router>
        );
    }
}
