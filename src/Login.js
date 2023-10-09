import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

import React, { useState } from "react";





const Login = ({ navigation, registeredUsers }) => {



  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const [loggedIn, setLoggedIn] = useState(false);



  const handleLogin = () => {

    // Check if the entered username and password match registered data

    const user = registeredUsers.find((u) => u.username === username && u.password === password);

    if (user) {

      setLoggedIn(true);

      // Perform actions after successful login

      navigation.navigate('UsersList');

    } else {

      Alert.alert(

        "Password",

        "Wrong UserName or Password",


        [

          {

            text: "Cancel",

          },

          {

            text: "OK",

          }

        ]

      );

    }

  };

  return (



    <View style={styles.container}>



      <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20, backgroundColor: 'cyan', justifyContent: 'center', alignItems: 'center', position: "absolute", top: 15, padding: 25, borderRadius: 50 }}>Login Page</Text>





      <View style={{ marginBottom: 15 }}>

        <TextInput placeholder='Enter UserName' onChangeText={(text) => setUsername(text)} style={styles.second} />

        <TextInput placeholder='Enter Password' onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={styles.second} />



      </View>

      <View style={{ marginBottom: 15, }}>

        <Button title='Login NOW' onPress={handleLogin} />

      </View>

      <View>

        <Button title="Don't Have Account - Signup" onPress={() => navigation.navigate("Registration")} />

      </View>









    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    padding: 20,

    flexDirection: 'column',

    flex: 1,

    backgroundColor: '#fff',

    borderWidth: 5,

    borderColor: 'blue',

    alignItems: 'center',

    justifyContent: 'center',

    margin: 20,

    paddingBottom: 5,

    borderRadius: 50,

  },



  second: {

    padding: 15,

    backgroundColor: '#ccff90',

    borderColor: 'green',

    borderWidth: 4,

    position: 'relative',

    top: 15,

    width: 200,

    height: 50,

    margin: 15,

    justifyContent: 'space-between',

    borderRadius: 50,

  }



});

export default Login;