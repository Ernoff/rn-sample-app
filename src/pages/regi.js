import React, { Component } from 'react';
import { Container, Header, H2, H1,H3, Left, Button, 
  Icon, Right, Text, Body, Content, Footer,
  Item, Input, ListItem, CheckBox } from 'native-base';

export default class RegiScreen extends Component {
  render(){
    return(
      <Container  style={{flex:1}} >
        <Header androidStatusBarColor="#000"  style={{backgroundColor: 'rgb(0, 0, 0)'}}>
          <Left><Button transparent >
          <Icon name="menu" style={{color: 'white'}} />
      </Button></Left>
          <Body ><Text style={{color: 'red', textAlign: 'center', alignSelf:'center', fontWeight:'bold'}}>NETFLIX</Text></Body>
          <Right>
            <Text style={{color: 'white'}}>Sign in</Text>
          </Right>
        </Header>
      <Content padder >
        <Text >STEP <Text style={{fontWeight: 'bold'}}>2</Text> OF <Text style={{fontWeight: 'bold'}}>3</Text> </Text>
        <H3 style={{fontWeight: 'bold'}}>Sign up to start your free month</H3>
        <Text style={{marginTop: 5}}>Just two more steps and you're done! {"\n"}We hate paperwork too.</Text>
        <H3 style={{marginTop: 5, marginBottom:10, fontWeight: 'bold'}}>Create your account.</H3>
        <Item style={{marginTop: 5}} regular >
          <Input style={{backgroundColor: '#fff'}} placeholder='Email'/>
        </Item>
        <Item regular style={{marginTop:10}}>
         <Input style={{backgroundColor: '#fff'}} placeholder='Password'/>
      </Item>
        <ListItem style={{marginLeft: 0, borderBottomWidth:0,marginTop:10,backgroundColor:'transparent'}} >
          <CheckBox style={{backgroundColor:'#fff'}} checked={false}/>
          <Body><Text>Please do not email me Netflix special offers</Text></Body>
        </ListItem>
        <ListItem style={{marginLeft: 0, paddingTop: 0, backgroundColor:'transparent'}}>
        <CheckBox style={{backgroundColor:'#fff'}} checked={false}/>
        <Body><Text note>I am over 18, and I agree to the Terms of use and Privacy Statement.</Text></Body>
      </ListItem>
      <Button full danger onPress={()=> this.props.navigation.navigate('gallery')}>
      <Text>CONTINUE</Text>
    </Button>
      </Content>
      </Container>
    )
  }
}
