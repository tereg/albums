// We are getting the React library and the Component class from it.
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// We are borrowing functionality from Component class.
class AlbumList extends Component {
  //setting the initial state to empty
  state = { albums: [] };

  //From ReactNative documentation: 
    //ComponentWillMount() is invoked immediately before mounting occurs. 
    //It is called before render(), therefore setting state in this method will not trigger a re-rendering. 
    //Avoid introducing any side-effects or subscriptions in this method.
  
  //componentWillMount initiates some loading of data or HTTP request.   
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }
  //After doing the http request, we set the state to be the response that we get from the api.
  //To modify state, you need to use this.setState

  //Helper method to generate list of albums
  renderAlbums() {
    return this.state.albums.map(album => 
      <Text key={album.title}>{album.title}</Text>
    );
  }

  render() {
    console.log(this.state);
    
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
