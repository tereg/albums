// We are getting the React library and the Component class from it.
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
  //We want to pass the album down to AlbumDetail as a prop.
  //Inside of AlbumDetail, I will have a prop called props.album and that will be equal to my album.
  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
