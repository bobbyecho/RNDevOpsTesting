          
          
          
import React, { Component } from 'react';
import {Text, View} from 'react-native';

class App extends Component {

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {
    
  }

  exampleFoo() {
    return "foo"
  }

  exampleBar() {
    return "bar"
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> to React Native asdas</Text>
        <Text style={styles.instructions}>To get stated, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}

export default App


