import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


//This is going to be a functional component
  //because we do not need access to lifecycle methods
  //or state. We're just presenting info.

//Receive props from AlbumList
 const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
 };

export default AlbumDetail; 
