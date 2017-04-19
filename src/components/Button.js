import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//The onPress in the line below is equal to the onPress in the 
//fat arrow function in AlbumDetail. It's not the same as the one
//in TouchableOpacity below.
const Button = ({ onPress }) => {
  const { textStyle, buttonStyle } = styles;

//onPress handler is called whenever the user presses the button
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        Click me!!!
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
