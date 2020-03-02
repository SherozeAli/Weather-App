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
        <Card
          style={{
            height: "100%",
            width: "100%"
          }}
        >
          <ImageBackground
            resizeMode="cover"
            source={require("../../assets/img3.jpg")}
            style={{
              width: "100%",
              height: "100%",
              flex: 1
            }}
          >
            <Title style={styles.name}>{this.props.name}</Title>
            <Image
              style={{ width: 120, height: 100, alignItems: "center" }}
              source={{
                uri:
                  "http://openweathermap.org/img/w/" + this.props.icon + ".png"
              }}
            />
            <Title style={styles.temp}>{this.props.temp}°</Title>
            <Title style={styles.desc}>{this.props.desc}</Title>
          </ImageBackground>
        </Card>
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
  name: {
    flex: 1,
    color: "white",
    textAlign: "center",
    fontSize: 30,
    paddingTop: 40,
    marginTop: 10
  },
  img: {
    flex: 3,
    alignItems: "center",
    alignSelf: "center"
  },
  temp: {
    flex: 1,
    color: "white",
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    paddingTop: 50,
    marginTop: 10
  },
  desc: {
    flex: 1,
    color: "white",
    fontSize: 30,
    textAlign: "center",
    paddingTop: 40
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
