import React from 'react';
import { Appbar, Title } from 'react-native-paper';
import { View, Text } from 'react-native'

const Header = (props) => {

  return (
    <Appbar.Header
      theme={{
        colors: { 
          primary: "#00aaff"
        }
      }}

      style={{
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      <Title
        style={{
          color: 'white',
          fontWeight: 'bold'
        }}
      >
        {props.name}
        </Title>
    </Appbar.Header>
  );
};

export default Header;