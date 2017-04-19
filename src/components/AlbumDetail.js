import React from 'react';
import { View, Text } from 'react-native';

//This is going to be a functional component
  //because we do not need access to lifecycle methods
  //or state. We're just presenting info.

//Receive props from AlbumList
 const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
 };

 export default AlbumDetail; 
 