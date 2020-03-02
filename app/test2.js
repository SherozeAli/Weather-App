//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground
} from "react-native";
import { Input } from "../components/Input";
import _, { debounce } from "lodash";
import { connect } from "react-redux";
import { fetchCity, setName } from "../actions/FetchCity";
import { Header } from "../components/Header";
import { MyButton } from "../components/Button";
import { Card, List } from "react-native-paper";

class SearchCity extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", cities: [] };
    this.handleTextInput.bind(this);
    this.getCityDebounced = _.debounce(this.handleTextInput, 1000);
  }
  handleTextInput = () => {
    this.props.setCityname(this.state.text);
    fetch(`http://autocomplete.wunderground.com/aq?query=${this.state.text}`)
      .then(data => data.json())
      .then(city => {
        this.setState({
          cities: city.RESULTS.slice(0, 9)
        });
        // console.log(this.state.cities)
      });
  };
  render() {
    let renderCity = (
      <Card>
        <List.Item title="No City" />
      </Card>
    );
    if (this.state.cities.length > 0) {
      renderCity = this.state.cities.map((city, index) => {
        return (
          <Card
            style={{ margin: 10 }}
            key={index}
            onPress={() => {
              this.props.setCityname(city.name);
              this.props.navigation.navigate("Current City");
            }}
          >
            <List.Item title={city.name} />
          </Card>
        );
      });
    }
    return (
      <View style={styles.container}>
        <Header subtitle="Select City" />
        <View style={styles.innerContainer}>
          <Input
            onChangeText={text => {
              this.setState({ text });
              this.getCityDebounced(text);
            }}
            value={this.state.text}
          />

          <ScrollView>
            <ImageBackground
              resizeMode="cover"
              source={require("../../assets/img3.jpg")}
              style={{ width: "100%", height: "100%" }}
            >
              {renderCity}
            </ImageBackground>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  innerContainer: {
    flex: 1
  }
});

mapStateToProps = state => {
  return {
    getCityname: state.cityname,
    getInfo: state.info
  };
};
mapDispatchToProp = dispatch => {
  return {
    setCityname: name => dispatch(setName(name)),
    setInfo: info => dispatch(setInfo())
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(SearchCity);
