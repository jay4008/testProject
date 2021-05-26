import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import axios from 'axios';
const {width} = Dimensions.get('window').width;
const TestCom = () => {
  const [apiData, setApiData] = useState([]);
  const _apiCall = () => {
    axios
      .get(
        'https://google-search3.p.rapidapi.com/api/v1/search/q=[keyword]&num=100',
        {
          headers: {
            'x-rapidapi-key':
              '30a79d49e4msh60149164f98a8a5p16accdjsn3726a274f766',
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
          },
        },
      )
      .then(function (response) {
        console.log(response.data.results);
        setApiData(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    _apiCall();
    console.log('called');
  }, []);
//width of next 2nd text == width -  (margin + padding + first text )
  const RowWisetext = ({txt1, txt2}) => {
    return (
      <View style={{flexDirection: 'row' , marginTop:  15,}}>
        <Text style={{width: "40%"}}>{txt1}:</Text>
        
        <Text style={{width: "60%"}}> {txt2}</Text>
      </View>
    );
  };
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator = {false}>
        {apiData.map((item, index) => (
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 10,
              padding: 7,
              backgroundColor: '#fff',
              borderRadius: 5,
            }}
            key = {index}
            >
            <Text style={{borderBottomWidth: 1, borderBottomColor: '#000'}}>
              {' '}
              index : {index + 1}
            </Text>
            <RowWisetext txt1={'title'} txt2={item.title} />
            <RowWisetext txt1={'description'} txt2={item.description} />
            <RowWisetext txt1={'link'} txt2={item.link} />
            <RowWisetext txt1={'google stars'} txt2={item.g_review_stars} />
          </View>
        ))}
      </ScrollView>
      {/* <ScrollView style={styles.ScrollViewContainer}>
        <Text> jay shah</Text>
      </ScrollView> */}
    </View>
  );
};

export default TestCom;

const styles = StyleSheet.create({
  ScrollViewContainer: {},
  ViewContainer: {
    flex: 1,
  },
});
