// We are getting the React library and the Component class from it.
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// We are borrowing functionality from Component class.
class AlbumList extends Component {
  //From ReactNative documentation: 
    //ComponentWillMount() is invoked immediately before mounting occurs. 
    //It is called before render(), therefore setting state in this method will not trigger a re-rendering. 
    //Avoid introducing any side-effects or subscriptions in this method.
  
  //componentWillMount initiates some loading of data or HTTP request.   
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
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
