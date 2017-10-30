import React, {Component} from 'react';
import {
  ScrollView,
  View,
  
  Image,
  Dimensions
} from 'react-native';
import {H3,Text, Button} from 'native-base';

var targetHeight = Dimensions.get('window').height/2.5+10;
var targetWidth = Dimensions.get('window').width;
var newWidth = targetWidth/2;
var textHeight = targetHeight * 0.2;

export default class Roller extends Component {
  render(){
    return(
      <View style={{flex:2, alignItems:'center', justifyContent: 'center'}}>
      <View style={{backgroundColor: '#000', marginLeft:0}}>
        <Image source={require('./jay.jpeg')} style={{resizeMode: 'cover',height:targetHeight}}>
       <View style={{marginTop: targetHeight-30, justifyContent: 'flex-start',flexDirection:'row'}}><Button small danger><Text>NEW EPISODE</Text></Button>
        <Button small light style={{marginLeft:0}}><Text>WEEKLY</Text></Button></View></Image>
      
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{backgroundColor: '#000', width: targetWidth, height: targetHeight,  flexDirection: 'row', }}>
          <View styleName="sm-gutter-vertical">
          <H3 style={{height: textHeight, color:'#fff', paddingTop:20}}> Top Picks for Mary</H3>
        <ScrollView directionalLockEnabled={false} horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image source={require('./brave.jpeg')} style={{resizeMode: 'center', width: newWidth, height: targetHeight-40}}/>
            <Image source={require('./galaxy.jpeg')} style={{resizeMode: 'center', width: newWidth, height: targetHeight-40}}/>
            <Image source={require('./kill.jpeg')} style={{resizeMode: 'center', width: newWidth, height: targetHeight-40}}/>
        </ScrollView>
        </View>
        </View>
        <View style={{backgroundColor: '#000', width: targetWidth, height: targetHeight}}>
        
          <H3 style={{height: textHeight, color:'#fff', paddingTop:20}}> Trending Now</H3>
          
         <ScrollView directionalLockEnabled={false} horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:0}}>
           <Image source={require('./gun.jpeg')} style={{resizeMode: 'center', width: newWidth, height: targetHeight-40}}/>
            <Image source={require('./lion.jpeg')} style={{resizeMode: 'center', width: newWidth, height: targetHeight-40}}/>
            <Image source={require('./stars.jpeg')} style={{resizeMode: 'center', width: newWidth, height: targetHeight-40}}/>
        </ScrollView>
        </View>
        <View style={{width: targetWidth, height: targetHeight, backgroundColor: '#000'}}>
         <View>
          <H3 style={{height: textHeight,  color:'#fff', paddingTop:20}}> My List</H3>
          </View>
         <ScrollView directionalLockEnabled={false} horizontal={true} showsHorizontalScrollIndicator={false}>
           <Image source={require('./swan.jpeg')} style={{resizeMode: 'center', width: newWidth, height: targetHeight-40}}/>
            <Image source={require('./stranger.jpeg')} style={{resizeMode: 'center', width: newWidth, height: targetHeight-40}}/>
            <Image source={require('./wolf.jpeg')} style={{resizeMode: 'center', width: newWidth, height: targetHeight-40}}/>
        </ScrollView>
        </View>
        </ScrollView>
        </View>
    )
  }
}