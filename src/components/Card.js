import React from 'react';
import { View } from 'react-native';

//The sole purpose of this component is 
//to make something with some nice styling that looks like a card.
const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

//containerStyle is an arbitrary name. I can call it whatever I want.
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginTop: 10
  }
};

export default Card;
