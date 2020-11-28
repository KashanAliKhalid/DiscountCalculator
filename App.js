/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
    TouchableOpacity
} from 'react-native';



class App extends React.Component {
    constructor() {
        super();
        this.state={

        }
    }

  render(): React$Node {
    return(
        <View style={styles.container}>
          <Text style={styles.title}>DiscountAPP</Text>

          <TextInput
              style={styles.input}
              placeholder="Original Price"
          />

          <TextInput
              style={styles.input}
              placeholder="Discount Percentage"
          />

          <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>SAVE</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button2}><Text style={styles.buttontext}>CALCULATE</Text></TouchableOpacity>

        </View>
        )

  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#003f5c',
    width:'100%',
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  input:
      {
        width:'85%',
        height: '7%',
        borderWidth:1,
        borderRadius:50,
        textAlign:'center',
        borderColor:'#465881',
        backgroundColor: '#465881',
        color:'white',
        fontSize:20,
        marginTop:20,
      },

  title:
      {
        color:'#f05a5a',
        fontSize: 50,
        marginBottom:20,
        fontWeight: 'bold',
        fontFamily: 'notoserif'
      },

  button:
      {
        width:'85%',
        height: '7%',
        borderWidth:1,
        borderRadius:50,
        borderColor:'#f05a5a',
        backgroundColor: '#f05a5a',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
      },

  buttontext:
{
  color:'white',
  fontSize:17,
  textAlign:'center',
  letterSpacing:8
},

  button2:
      {
        width:'85%',
        height: '7%',
        borderWidth:1,
        borderRadius:50,
        borderColor:'#f05a5a',
        backgroundColor: 'transparent',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
      },

});

export default App;
