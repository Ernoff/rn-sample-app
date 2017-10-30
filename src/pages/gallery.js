import React, { Component } from 'react';
import {Header, Container, Content, Icon, Button, Right,
  Left, Body, Text} from 'native-base';
import { View } from 'react-native';
import Roller from './roller.js';

export default class GalleryScreen extends Component {
  render(){
    return(
      <Container>
      <Header androidStatusBarColor="#000"  style={{backgroundColor: 'rgb(0, 0, 0)'}}>
      <Left><Button transparent onPress={()=> this.props.navigation.navigate('registration')}><Icon name="arrow-back" style={{color: 'white'}} /></Button>
      </Left>
      <Body><Text style={{color: 'red', textAlign: 'center', alignSelf:'center', fontWeight:'bold'}}>NETFLIX</Text></Body>
      <Right><Button transparent><Icon name="search" style={{color: 'white'}} /></Button>
      </Right>
    </Header>
        <Content>
        <Roller />
        </Content>
        </Container>
    )
  }
}