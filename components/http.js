import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Logs } from 'expo'
import Button from './Button'

Logs.enableExpoCliLogging()
class HttpExample extends Component {
   state = {
      data: '333',
      AA:'BB'
   }
   componentDidMount = () => {
      fetch('http://192.168.0.180:8080/demo/json', {
         method: 'GET',
      })
      .then(response => response.json())
      .then(responsejson => {
         console.log('a',responsejson);
         this.setState({
            data: responsejson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
    console.log('b',this.state.data);
      return (
         <View>
            <Text>
                AA
            </Text>
            <Text>
               {(this.state.data===null)?"YOYOYO":JSON.stringify(this.state.data)}
            </Text>
            <Text>
                DD
            </Text>
         </View>
      )
   }
}
export default HttpExample