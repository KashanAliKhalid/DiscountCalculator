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
    Alert,
    Modal
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
            modalVisible: false


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


    saved= ()=>{
        let history=this.state.history
        let discount=this.state.discount;
        let finalprice=this.state.finalprice;
        let originalprice=this.state.originalprice;
         let object={
             discount: discount,
         finall:finalprice,
         original:originalprice}
         history.push(object)
        this.setState({history: history,
        savedtext: "",
        finalprice: ''})
    }

    displayModal=()=>{
        this.setState({modalVisible: true})
    }

  render(): React$Node {
    return(


        <View style={styles.container}>

            <Modal visible={this.state.modalVisible}>
                <View style={styles.modal}>
                <View style={styles.Table}>
                    <View style={styles.headview} >
                        <Text style={styles.tablehead}>ORIGINAL</Text>
                        <Text style={styles.tablehead}>DISCOUNT</Text>
                        <Text style={styles.tablehead}>FINAL</Text>

                    </View>
                    {
                        this.state.history.map(item=> {

                            return(
                            <View style={styles.contentview}>
                                <Text style={styles.tablecontent}> {item.original}</Text>
                                <Text style={styles.tablecontent}>{item.discount}</Text>
                                <Text style={styles.tablecontent}>{item.finall}</Text>
                            </View>
                            )
                        })
                    }
                </View>
                </View>
            </Modal>

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

          <TouchableOpacity onPress={()=>{this.saved()}} style={styles.button}><Text style={styles.buttontext}>SAVE</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.calculateDiscount()}} style={styles.button2}><Text style={styles.buttontext}>CALCULATE</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.displayModal()}} style={styles.button3}><Text style={styles.buttontext}>HISTORY</Text></TouchableOpacity>

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
        borderColor:'transparent',
        backgroundColor: 'transparent',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
      },

    button3:
        {
            width:'85%',
            height: '7%',
            borderWidth:1,
            borderRadius:50,
            borderColor:'black',
            backgroundColor: 'black',
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
        },

        Table:
            {
                display:'flex',
                alignSelf: 'stretch',
                flexDirection: 'column',
                width:'85%',
                marginLeft:'7%',
                marginTop:'7%',
            },
    tablehead:
        {
            fontSize:20,
            fontWeight: "bold",

            color:'white'


        },


    tablecontent:
        {
            fontSize:18,
            color:'white',
        },

    contentview:{
        display: 'flex', justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth:2, borderBottomColor:'#f05a5a',
        borderRightWidth:2, borderRightColor:'#f05a5a',
        borderLeftWidth:2, borderLeftColor:'#f05a5a',
        padding:4,
        height:'15%',
        alignItems:'center'
    },

    headview:
        {
            display:'flex', justifyContent:'space-between', flexDirection:'row',
            borderWidth:2,
            borderColor:'#f05a5a',
            padding:4,
            height:'20%',
            alignItems:'center'

        },
    modal:
        {
            backgroundColor:'#465881',
            width:'100%',
            height:'100%'
        }



});

export default App;
