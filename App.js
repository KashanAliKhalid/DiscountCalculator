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
    TouchableOpacity,
    Alert
} from 'react-native';



class App extends React.Component {
    constructor() {
        super();
        this.state={
            finalprice:'',
            originalprice:'',
            discount:'',
            savedtext:'',
            history:[],
            current:{}


        }
    }

    calculateDiscount= ()=>{
        let discount=parseInt(this.state.discount);
        if(discount>100)
        {
            this.setState({savedtext: 'DISCOUNT CANNOT BE GREATER THAN ZERO'})
            return;
        }
        let originalprice=parseInt(this.state.originalprice);
        if(originalprice<0)
        {
            this.setState({savedtext: 'PRICE CANNOT BE LESS THAN ZERO'})
            return;
        }
        let final=(discount/100)*originalprice;
        let saved=final;
        final=originalprice-final;
        final= final.toString();
        this.setState({finalprice: final,
            savedtext: `You saved $${saved.toString()} `
        })


    }

  render(): React$Node {
    return(

        <View style={styles.container}>
            <Text style={styles.savedtext}>{this.state.savedtext}</Text>
          <Text style={styles.title}>DiscountAPP</Text>

          <TextInput
              style={styles.input}
              placeholder="Original Price"
              onChangeText={text => this.setState({originalprice:text})}
              keyboardType='number-pad'
          />

          <TextInput
              style={styles.input}
              placeholder="Discount Percentage"
              onChangeText={text => this.setState({discount:text})}
              keyboardType='number-pad'
          />

            <TextInput
                style={styles.input}
                placeholder="Final Price"
                value={this.state.finalprice}
            />

          <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>SAVE</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.calculateDiscount()}} style={styles.button2}><Text style={styles.buttontext}>CALCULATE</Text></TouchableOpacity>

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

    savedtext:
        {
            color:'white',
            textAlign:'center',
            fontSize:20,
        }

});

export default App;
