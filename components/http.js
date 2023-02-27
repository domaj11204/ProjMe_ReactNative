import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Logs } from 'expo'

Logs.enableExpoCliLogging()
class HttpExample extends Component {
   state = {
      data: '333'
   }
   componentDidMount = () => {
      fetch('http://192.168.0.180:8080/demo/json', {
         method: 'GET',
         headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         }
      })
      .then(response => response.json())
      .then(response => {
         console.log('a',response);
         this.setState({
            data: response
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         <View>
            <Text>
               {this.state.data.body}
            </Text>
         </View>
      )
   }
}
export default HttpExample