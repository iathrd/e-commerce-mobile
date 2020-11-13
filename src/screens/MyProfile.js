import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import {Text, Container, Content, Card, Thumbnail} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function MyProfile({navigation}) {
  return (
      <>
    <Container>
      <Content
        style={{backgroundColor: '#f5f5f5', paddingLeft: 10, paddingRight: 10}}>
        <Text style={{fontSize: 35, fontWeight: 'bold'}}>My profile</Text>
      
        <Card
          style={{
            elevation: 0,
            borderColor: '#f5f5f5',
            backgroundColor: '#f5f5f5',
            marginTop: 20,
            marginBottom:50
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Thumbnail
              large
              source={require('../assets/img/Realme-3-Pro-3.jpg')}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Metilda Brows
              </Text>
              <Text style={{color: 'grey'}}>matildabrown@mail.com</Text>
            </View>
          </View>
        </Card>
         
        <TouchableOpacity onPress={()=>navigation.navigate('Myorders')}>
        <Card
          style={{
            elevation: 0,
            borderColor: '#f5f5f5',
            backgroundColor: '#f5f5f5',
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginBottom:40
            
            
          }}>
              <View>
                  <Text style={{fontSize:25,fontWeight:"bold"}}>My orders</Text>
                  <Text style={{color:"grey"}}>Already have 12 orders</Text>
              </View>
               
              <Icon name="keyboard-arrow-right" style={{color:"grey"}} size={35}/>
          </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('ProfileAdress')}>
          <Card
          style={{
            elevation: 0,
            borderColor: '#f5f5f5',
            backgroundColor: '#f5f5f5',
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginBottom:40
          }}>
              <View>
                  <Text style={{fontSize:25,fontWeight:"bold"}}>Shipping adress</Text>
                  <Text style={{color:"grey"}}>3 adress</Text>
              </View>
              <Icon name="keyboard-arrow-right" style={{color:"grey"}} size={35}/>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
          <Card
          style={{
            elevation: 0,
            borderColor: '#f5f5f5',
            backgroundColor: '#f5f5f5',
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginBottom:40
          }}>
              <View>
                  <Text style={{fontSize:25,fontWeight:"bold"}}>Settings</Text>
                  <Text style={{color:"grey"}}>Notifications passoword</Text>
              </View>
              <Icon name="keyboard-arrow-right" style={{color:"grey"}} size={35}/>
          </Card>
          </TouchableOpacity>
      </Content>
    </Container>
    </>
  );
}
