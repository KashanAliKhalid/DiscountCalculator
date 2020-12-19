import {Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

import React from 'react';
import Save from '../Components/save'
class Home extends React.Component {
    constructor() {
        super();
        this.state={
            finalprice:'',
            originalprice:'',
            discount:'',
            savedtext:'',
            previous:''
        }
        this.history=[];
    }

     refresh =check=>{
        this.history=check
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

        let discount=this.state.discount;
        let finalprice=this.state.finalprice;
        let originalprice=this.state.originalprice;
        let object={
            id:Math.random(),
            discount: discount,
            finall:finalprice,
            original:originalprice}
        this.history.push(object)
        this.setState({
            savedtext: "",
            finalprice: ''})

        this.setState({originalprice:''})
    }

    displayModal=()=>{
        this.setState({modalVisible: true})
    }



    render(): React$Node {

        const { navigation } = this.props;

        return(


            <View style={styles.container}>



                <Text style={styles.savedtext}>{this.state.savedtext}</Text>
                <Text style={styles.title}>DiscountAPP</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Original Price"
                    onChangeText={text => this.setState({originalprice:text, previous:text})}
                    keyboardType='number-pad'
                    value={this.state.previous}
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
                <Save
                Disabled={this.state.originalprice.length<=0}
                input={this.saved}
                />
                <TouchableOpacity onPress={()=>{this.calculateDiscount()}} style={styles.button2}><Text style={styles.buttontext}>CALCULATE</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('History',{history:this.history, refresh:this.refresh})}} style={styles.button3}><Text style={styles.buttontext}>HISTORY</Text></TouchableOpacity>

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




});

export default Home;
