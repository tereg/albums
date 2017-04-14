// Import a library to help create a component.
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component.
const App = () => (
  <Text>Some Text</Text>
);


// Render it to the device.
// For every React Native application we create, we must register at least one component.
// In the code below, we are telling React Native, 
  // "hey React Native, you're about to render an application called 'albums'." 
  // The name of the string in the code below must match the name of the application. 
// When we use a fat arrow function without placing any curly braces, 
  //there is an implicit return of App. 
  //When we run this function, 
  //it will return App even though we don't have the return keyword in there.
AppRegistry.registerComponent('albums', () => App);
