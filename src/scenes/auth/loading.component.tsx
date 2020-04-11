import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Linking,
} from 'react-native';
import {
  Input,
  InputElement,
  InputProps,
  Button,
  CheckBox,
  Layout,
  LayoutElement,
  Text,
  Autocomplete,
} from '@ui-kitten/components';
import { checkLoginScreenProps } from '../../navigation/auth.navigator';
import { AppRoute } from '../../navigation/app-routes';
import { forSlideLeft } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';


export const LoadingScreen = (props: checkLoginScreenProps): LayoutElement => {
  
  return (
    <View style = {styles.container}>
        <ImageBackground source={require('../../assets/brooke-lark--F_5g8EEHYE-unsplash.jpg')} style = {styles.picture}>
          <View style = {{flex:1,
          //alignItems: 'center', 
          alignSelf: 'stretch', 
          backgroundColor: 'rgba(0,0,0,0.6)'}}>
            <View style = {styles.Box}>
              <View style = {styles.AllLogo}>
                <Text style = {styles.Slogan}>편하게 요리하자</Text>
                <Text style = {styles.Logo}>DO COOK!</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    height: '100%',
  },
  picture: {
    height: '100%',
    alignItems: 'center',
  },
  Box: {
    alignItems: 'center',
  },
  AllLogo: {
    paddingTop: 200,
  },
  Slogan: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'normal',
    paddingTop: 4,
  },
  Logo: {
    color: '#ffffff',
    paddingTop: 24,
    fontSize: 44,
    fontWeight: 'bold',
  }
});