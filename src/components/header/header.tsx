import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./style";
import { SearchBar, Icon, Header, Button } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


export default class HeaderTest extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Header containerStyle={styles.container}>
        <Button TouchableComponent={TouchableWithoutFeedback} icon={<Icon name={"menu"} color={"white"} />}buttonStyle={{backgroundColor: 'transparent'}} containerStyle={{backgroundColor: 'transparent'}} />
        <SearchBar
           searchIcon={
            <Icon name={"search"} color={"white"} />
           }
          containerStyle={{
            backgroundColor: "transparent",
            borderTopColor: "transparent",
            borderBottomColor: "transparent",
            width: "110%",
           // height: '50%',
            //marginBottom : '10%'
          }}
          placeholder="Buscar producto"
          placeholderTextColor={'white'}
          
          onChangeText={() => console.log("")}
          inputStyle={{fontSize: 13}}
          inputContainerStyle={{ borderRadius: 30, borderWidth: 1, borderBottomWidth: 1, borderColor: 'white', backgroundColor: 'transparent' }}
        />
        <Button TouchableComponent={TouchableWithoutFeedback} icon={<Icon name={"shopping-basket"} color={"white"} />}buttonStyle={{backgroundColor: 'transparent'}} containerStyle={{backgroundColor: 'transparent'}} />
      </Header>
    );
  }
}
