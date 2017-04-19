import React from 'react';
import { Text, View } from 'react-native';
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
        <View></View>
        <View style={styles.headerContentStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
 };

 const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
 };

export default AlbumDetail; 
