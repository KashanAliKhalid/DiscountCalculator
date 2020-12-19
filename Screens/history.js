import {Modal, StyleSheet, Text, TextInput, TouchableOpacity, View,Alert, Image} from "react-native";
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
class History extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            history:this.props.route.params.history

        }
    }


    historyset(id)
    {
        const {navigation}=this.props;
        const {route}=this.props;
     let hist= this.state.history;
     hist=hist.filter(item=>{ return  item.id != id
     })
        alert(hist)
        navigation.setParams({history:hist})
        this.setState({history:hist})

    }

    navigationreset()
    { const {navigation}=this.props;

    this.props.route.params.refresh(this.state.history)
        navigation.navigate('Home')
    }

    render(): React$Node {

        const {route}=this.props;

        const history=route.params.history;
        return (
            <View>

                <TouchableOpacity onPress={()=>{this.navigationreset()}} style={{backgroundColor:'#465881'}}><Image
                    style={styles.tinyLogo}
                    source={{uri: 'https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767531-1502435.png'}}
                /></TouchableOpacity>

                <View style={styles.modal}>
                    <View style={styles.Table}>
                        <View style={styles.headview} >
                            <Text style={styles.tablehead}>ORIGINAL</Text>
                            <Text style={styles.tablehead}>DISCOUNT</Text>
                            <Text style={styles.tablehead}>FINAL</Text>
                            <Text style={styles.tablehead}> </Text>

                        </View>
                        {
                            history.map(item=> {

                                return(
                                    <View key={item.id} style={styles.contentview}>
                                        <Text style={styles.tablecontent}> {item.original}</Text>
                                        <Text style={styles.tablecontent}>               {item.discount}</Text>
                                        <Text style={styles.tablecontent}>     {item.finall}</Text>

                                            <TouchableOpacity onPress={()=>{this.historyset(item.id)}} style={styles.cross}><Text style={styles.crosstext}>X</Text></TouchableOpacity>

                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
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
        },
    cross:
        {
           backgroundColor: '#AB0006',
            borderWidth: 0,
            borderRadius:50,
            width:20,
        },
    crosstext:
        {

            textAlign:'center',
            fontWeight: 'bold'
        },
    tinyLogo: {
        width: 50,
        height: 50,
    },

})

export default History
