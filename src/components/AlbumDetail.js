import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

//This is going to be a functional component
  //because we do not need access to lifecycle methods
  //or state. We're just presenting info.

//Receive props from AlbumList
 const AlbumDetail = (props) => {
  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  );
 };

export default AlbumDetail; 
