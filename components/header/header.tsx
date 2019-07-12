import React  from "react";
import { View, Text, } from 'react-native'
import styles from './style'
import { SearchBar, Icon, Header  } from 'react-native-elements'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
export default class HeaderTest extends React.Component<any,any>{
    constructor(props:any){
        super(props);

        
    }
     
    render(){
        return (
            <Header containerStyle={styles.container} >
                <Text>HOLA</Text>
                <SearchBar
                    containerStyle = {{backgroundColor: 'transparent',borderTopColor: 'transparent', width: '100%', borderBottomColor: 'transparent'}}
                    placeholder="Buscar..."
                    onChangeText={() => console.log('')}
                    value={''}
                />
            </Header>
        )
    }
}