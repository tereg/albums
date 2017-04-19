// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
// The View tag is used to position elements, or wrap elements, or style elements inside of app. 


// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// Make a new object for styles for this component,
// and add styles in that object

// justifyContent property: used to position elements in the vertical direction.
  // justifyContent: 'flex-end' will push content to the bottom
  // justifyContent: 'center' will push it to the center
  // justifyContent: 'flex-start' will push it to the top 
// alignItems: used to position elements horizontally.
  // alignItems: 'flex-start' will align items on the left
  // alignItems: 'center' will align items in the center
  // alignItems: 'flex-end' will align items on the right

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    // The following line says how tall & wide we want shadow to be:
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export default Header;
