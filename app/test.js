import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { connect } from "react-redux";
import { Title, Card, List } from "react-native-paper";
import { Header } from "../components/Header";
import {
  setInfo,
  setIcon,
  setName,
  setTemp,
  setDesc,
  setHumidity
} from "../actions/FetchCity";

import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet
} from "react-native-size-matters";

class ShowWeather extends Component {
  componentDidMount() {
    this.getCityInfo();
  }

  getCityInfo = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.props.name}&units=metric&APPID=067f7547452906e8eaca75810a779fe7`
    )
      .then(res => res.json())
      .then(data => {
        console.log("naaam shaehar ka" + data.name);
        // dispatch(setWeatherInformation(data))

        this.props.setInfo(data.name);
        this.props.setIcon(data.weather[0].icon),
          this.props.setDesc(data.weather[0].description),
          this.props.setTemp(data.main.temp),
          this.props.setHumidity(data.main.humidity);
      })
      .catch(err => {
        console.log("maslaaaa " + err);
      });
  };
  render() {
    this.getCityInfo();
    return (
      <View>
        <Header subtitle="Current City" />
        <View style={{ alignItems: "center" }}>
          <Card
            style={{
              height: "100%",
              width: "100%"
            }}
          >
            <ImageBackground
              resizeMode="cover"
              source={require("../../assets/img3.jpg")}
              style={{ width: "100%", height: "100%" }}
            >
              <View style={{ padding: 20, alignItems: "center" }}>
                <View style={styles.row}>
                  <Title style={styles.text}>{this.props.name}</Title>
                </View>
                <View style={styles.row}>
                  <Title style={styles.text}>Temp :</Title>
                  <Title style={styles.text}>{this.props.temp}°</Title>
                </View>
                <View style={styles.row}>
                  <Title style={styles.text}>Humidity :</Title>
                  <Title style={styles.text}>{this.props.humidity}</Title>
                </View>
                <View style={styles.row}>
                  <Title style={styles.text}>Description :</Title>
                  <Title style={styles.text}>{this.props.desc}</Title>
                </View>
                <Image
                  style={{ width: 120, height: 100, alignItems: "center" }}
                  source={{
                    uri:
                      "http://openweathermap.org/img/w/" +
                      this.props.icon +
                      ".png"
                  }}
                />
              </View>
            </ImageBackground>
          </Card>
        </View>
      </View>
    );
  }
}
//<Image style={{width:120,height:100,alignItems:'center' }} source={{uri:'http://openweathermap.org/img/w/'+this.state.info.icon+'.png'}  }/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 30
  },
  row: {
    flexDirection: "row"
  }
});
mapDispatchToProp = dispatch => {
  return {
    setCityname: cityname => dispatch(fetchCity(cityname)),
    setInfo: info => dispatch(setInfo(info)),
    setName: name => dispatch(setName(name)),
    setTemp: temp => dispatch(setTemp(temp)),
    setDesc: desc => dispatch(setDesc(desc)),
    setIcon: icon => dispatch(setIcon(icon)),
    setHumidity: humidity => dispatch(setHumidity(humidity))
  };
};

mapStateToProps = state => {
  return {
    getInfo: state.info,
    temp: state.temp,
    desc: state.desc,
    name: state.name,
    icon: state.icon,
    humidity: state.humidity
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(ShowWeather);
