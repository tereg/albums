// We are getting the React library and the Component class from it.
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// We are borrowing functionality from Component class.
class AlbumList extends Component {
  //From ReactNative documentation: 
    //ComponentWillMount() is invoked immediately before mounting occurs. 
    //It is called before render(), therefore setting state in this method will not trigger a re-rendering. 
    //Avoid introducing any side-effects or subscriptions in this method.
  
  //componentWillMount initiates some loading of data or HTTP request.   
  componentWillMount() {
    console.log('hello');
  }
  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
