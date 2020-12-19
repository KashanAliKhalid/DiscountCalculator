import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";

class Save extends React.Component
{

    constructor(props) {
        super(props);
        this.state={
            red:'#f05a5a',
            gray:'gray'
        }
    }

    render(): React$Node {

        var color='#f05a5a'
        if(this.props.Disabled)
        {
            color='gray'
        }
        else
        {
            color='#f05a5a'
        }
        return(
<TouchableOpacity disabled={this.props.Disabled} onPress={()=>{this.props.input()}} style={{...styles.button,backgroundColor:color, borderColor: color}}><Text style={styles.buttontext}>SAVE</Text></TouchableOpacity>

)
}
}
const styles = StyleSheet.create({
    button:
        {
            width: '85%',
            height: '7%',
            borderWidth: 1,
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
        },

    buttontext:
        {
            color: 'white',
            fontSize: 17,
            textAlign: 'center',
            letterSpacing: 8
        },
})

export default Save

