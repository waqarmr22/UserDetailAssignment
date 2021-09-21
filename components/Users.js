import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const img = require('../assets/back.png');

import axios from 'axios';

const Users = ({navigation}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getWorkHistoryList();
  }, []);

  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     getWorkHistoryList();
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  getWorkHistoryList = async () => {
    axios
      .get('https://randomuser.me/api/?results=100')
      .then(function (response) {
        const result = response.data.results;
        setList(result);
        // console.log('---------------------------', this.state.list);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  const renderUserItem = item => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('UserDetails', {
              imgurl: item.picture.large,
              age: item.registered.age,
              dob: item.dob.date,
              doj: item.registered.date,
              city: item.location.city,
              state: item.location.state,
              country: item.location.country,
              postcode: item.location.postcode,
              name: item.name.first + ' ' + item.name.last,
              email: item.email,
            })
          }>
          <View
            style={{
              margin: 10,
              flexDirection: 'row',
            }}>
            <Image
              source={{uri: item.picture.thumbnail}}
              style={{height: 50, width: 50}}></Image>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{marginLeft: 10, fontWeight: 'bold', color: 'black'}}>
                {item.name.first} {item.name.last}
              </Text>
              <Text style={{marginLeft: 10}}>{item.email}</Text>
              <Text style={{marginLeft: 10}}>
                Country | {item.location.country}
              </Text>
            </View>
          </View>
          <View
            style={{height: 2, backgroundColor: 'gray', width: '100%'}}></View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#ccc',
            height: 60,
            alignItems: 'center',
          }}>
          <Text
            style={{alignItems: 'center', fontWeight: 'bold', marginLeft: 10}}>
            Users
          </Text>
        </View>
        <FlatList
          data={list}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => renderUserItem(item)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Users;
