import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Moment from 'moment'
const img = require('../assets/back.png');

const UserDetails = ({route, navigation}) => {
  const {imgurl, age, dob, doj, city, state, country, postcode, email, name} =
    route.params;

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'column', backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#ccc',

            height: 60,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={img}
              style={{width: 15, marginLeft: 10, height: 15}}></Image>
          </TouchableOpacity>

          <Text
            style={{alignItems: 'center', fontWeight: 'bold', marginLeft: 10}}>
            {name}
          </Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={{uri: imgurl}}
            style={{width: 150, marginLeft: 10, height: 150}}></Image>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: 'yellow',
              marginTop: -10,
              alignContent: 'flex-end',
            }}>
            <Text>{age}</Text>
          </View>
          <View
            style={{
              height: 2,
              backgroundColor: 'gray',
              width: '100%',
              marginTop: 10,
            }}></View>
          <Text style={{padding: 10, fontWeight: 'bold'}}>Email:- {email}</Text>
          <Text style={{padding: 10, fontWeight: 'bold'}}>
         
            Date of Joining:- {Moment(doj).format('DD MMM YYYY')}
          </Text>
          <Text style={{padding: 10, fontWeight: 'bold'}}>
            Date of Birth:- {Moment(dob).format('DD MMM YYYY')}
          </Text>
          <Text style={{fontWeight: 'bold', marginTop: 20}}>Location</Text>
          <View
            style={{height: 2, backgroundColor: 'gray', width: '100%'}}></View>
          <Text style={{padding: 10, fontWeight: 'bold'}}>Email:- {city}</Text>
          <Text style={{padding: 10, fontWeight: 'bold'}}>State:- {state}</Text>
          <Text style={{padding: 10, fontWeight: 'bold'}}>
            Country:- {country}
          </Text>
          <Text style={{padding: 10, fontWeight: 'bold'}}>
            Postcode:- {postcode}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserDetails;
