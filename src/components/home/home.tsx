import React from 'react'
import HeaderTest from '../header/header'
import {View} from 'react-native'
import SvgComponent from '../svg/guayabalIcon'

export default class Home extends React.Component<any,any>{
    constructor(props:any){
        super(props)
    }
    render(){
        return(
            <View>
                <HeaderTest/>
                <SvgComponent></SvgComponent>
            </View>
            
        )
    }
}