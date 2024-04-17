import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SutradharForm from "sutradhar-app-library";
import SutradharCounter from "sutradhar-second-library";
import IconApp from "sutradhar-dynamic-icons-library";
import { VoiceText } from "sutradhar-voice-text";
import { VoiceForm } from "sutradhar-voice-form";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SutradharForm" component={SutradharForm} />
        <Stack.Screen name="SutradharCounter" component={SutradharCounter} />
        <Stack.Screen name="IconApp" component={IconApp} />
        <Stack.Screen name="VoiceText" component={VoiceText} />
        <Stack.Screen name="VoiceForm" component={VoiceForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const handleAppStart = (appName) => {
    navigation.navigate(appName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.button1]}
        onPress={() => handleAppStart('SutradharForm')}>
        <Text style={styles.buttonText}>Sutradhar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.button2]}
        onPress={() => handleAppStart('SutradharCounter')}>
        <Text style={styles.buttonText}>Counter App</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.button3]}
        onPress={() => handleAppStart('IconApp')}>
        <Text style={styles.buttonText}>Change Icon</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.button4]}
        onPress={() => handleAppStart('VoiceText')}>
        <Text style={styles.buttonText}>Voice to text</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.button5]}
        onPress={() => handleAppStart('VoiceForm')}>
        <Text style={styles.buttonText}>Voice Form</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  button1: {
    backgroundColor: '#ff6f61',
  },
  button2: {
    backgroundColor: '#6fbfff',
  },
  button3: {
    backgroundColor: '#61ff6f',
  },
  button4: {
    backgroundColor: '#fdc100',
  },
  button5: {
    backgroundColor: '#001524',
  },
});

export default App;
