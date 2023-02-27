
import { Component } from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import Button from './Button';


class Input extends Component{
    state = {
        name: '',
        score: ''
    }
    handleName = (text) => {
        console.log('Name!?',text);
        this.setState({name:text})
    }
    handleScore = (text) => {
        this.setState({score:text})
    }
    update = () => {
        fetch('http://192.168.0.180:8080/demo/score', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name: this.state.name,
            score: this.state.score,
         }),
        })

        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.textInputContainer}>
                    <Text style={{flex:0.5}}>
                        名稱：
                    </Text>
                    <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "名稱"
                        autoCapitalize='none'
                        onChangeText={this.handleName}
                    />
                    <Button style={styles.button}>
                        AD
                    </Button>
                </View>
                
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "分數"
                    autoCapitalize='none'
                    onChangeText={this.handleScore}
                />
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.update()
                    }>
                    <Text style = {styles.submitButtonText}>
                        上傳
                    </Text>
                </TouchableOpacity>
            </View>
        )
    } 
}

export default Input

const styles = StyleSheet.create({
    container:{
        padding:20,
        flex:1
    },
    input:{
        flex:2,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
     },
     button: {
        backgroundColor: '#2f4',
        padding: 10,
        margin: 15,
        height: 40,
     },
     submitButtonText:{
        color: 'white'
     },
     textInputContainer:{
        flexDirection: 'row',
        flex: 0.5,
        alignItems:'center',
        justifyContent: 'space-between',
        borderWidth:1,
     }
})