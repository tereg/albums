// We are getting the React library and the Component class from it.
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// We are borrowing functionality from Component class.
class AlbumList extends Component {
  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
