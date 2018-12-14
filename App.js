import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Button, SectionList } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Enter here"
            value= {this.state.placeName}
            onChangeText={(val) => this.setState({placeName: val})}
          />
          <Button
            onPress={this.onPressAdd}
            title="Add"
            color="#841584"
            accessibilityLabel="Add new places"
          />
        </View>
        <FlatList 
        data={this.state.places}
        renderItem={({item}) => <Text>{item}</Text>}
        />
      </View>
    );
  }


  onPressAdd = () =>{

    this.setState(prevState => {
      return{
        places: prevState.places.concat(prevState.placeName),
        placeName: ''
      }
    })
    
  };
  

}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingLeft: 20
  },
  searchBar:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around" 
  }
});
