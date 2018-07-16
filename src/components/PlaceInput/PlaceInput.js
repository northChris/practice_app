import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class PlaceInput extends Component{
  state = {
    placeName: ''
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };
  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === ""){
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return(
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="an Awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}/>
        <Button title="add"
          styles={styles.placeButton}
          onPress={this.placeSubmitHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput:{
    width: "70%"
  },
  placeButton:{
    width: "30%"
  },
});

export default PlaceInput;
