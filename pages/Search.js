import React from 'react';
import Header from './Header';
import { View, Text, FlatList } from 'react-native'
import { TextInput, Button, Card } from 'react-native-paper';


const Search = () => {
  const [city, setCity] = React.useState('')
  const [cities, setCities] = React.useState([]);
  const fetchCities = (text) => {
    setCity(text)
    fetch("https://api.weather.com/v3/location/search?apiKey=6532d6454b8aa370768e63d6ba5a832e&language=en-US&query=" + text + "&locationType=city&format=json")
    .then(items => items.json())
    .then(cityData => {
      console.log(cityData.location ,"Hello")
      setCities(cityData.location)
    })
  }
  return (
    <View style={{ flex: 1 }}>
      <Header name="Weather App" />
      <View style={{ marginHorizontal: 10, marginTop: 5 }}>
        <TextInput
          label="City Name"
          theme={{ colors: { primary: '#00aaff' } }}
          style={{ backgroundColor: 'transparent' }}
          value={city}
          keyboardType="default"
          onChangeText={(text) => fetchCities(text)}
        />
        <Button icon="search-web" mode="contained" onPress={() => console.log('Pressed')} style={{marginTop: 10, backgroundColor: '#00aaff', marginHorizontal: 40}}>
         <Text style={{color:'white', fontSize: 15, fontWeight: 'bold'}}>Search</Text>
        </Button>
      </View>
     <View style={{marginHorizontal: 5 , marginTop: 10}}>
     <FlatList
        data={cities}
        renderItem={({item}) => {
          console.log(item,"render")
          return (
            <Card
              style={{ 
                marginBottom: 5, 
                padding: 10,

              }}
            >
              <Text>{item.city}</Text>
            </Card>
          )
        }
        }
      />
     </View>
    </View>
  );
};

export default Search;