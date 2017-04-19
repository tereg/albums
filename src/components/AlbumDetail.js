import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//This is going to be a functional component
  //because we do not need access to lifecycle methods
  //or state. We're just presenting info.

//Receive props from AlbumList
 const AlbumDetail = ({ album }) => {

  //We are going to destructure. We want our title, title, and thumbnail_image
  //to come from the album object. This is a good approach
  //whenever you start making multiple references to your props object. 

  const { title, artist, thumbnail_image, image } = album;
  const { 
    thumbnailStyle, 
    headerContentStyle,
    thumbnailContainerStyle, 
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image 
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }} 
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image 
          style={imageStyle} 
          source={{ uri: image }} 
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => console.log(title)} />
      </CardSection>
    </Card>
  );
 };
//onPress above needs to be wired up inside of the Button


 const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  }, 
  thumbnailStyle: {
    height: 50, 
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center', 
    marginLeft: 10,
    marginRight: 10
  },
  //flex:1 and width:null makes image fill the whole width
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
 };

export default AlbumDetail; 
