import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {IconHome,IconUser,IconFitness,IconHomeAktif,IconFitnessAktif,IconUserAktif} from '../../assets'
import { WARNA_UTAMA } from '../../utils/constants'
const TabItem = ({label,isFocused,onLongPress,onPress}) => {
   
    const Icon = () => {
        if(label === "Home") {
            return <IconHome/>
        }
        if(label === "HomeAktif") {
            return <IconHomeAktif/>
        }
        if(label === "Fitness") {
            return <IconFitness/>
        }
        if(label === "FitnessAktif") {
            return <IconFitnessAktif/>
        }
        if(label === "User") {
            return <IconUser/>
        }
        if(label === "UserAktif") {
            return <IconUserAktif/>
        }
    }
   
    return (
        <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.container}
      >
          <Icon />
        <Text style={styles.Text}>
          {label}
        </Text>
      </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container:{
        alignContent:'center',
        padding : 5
    },
    text: {
        color: WARNA_UTAMA

    }
})
