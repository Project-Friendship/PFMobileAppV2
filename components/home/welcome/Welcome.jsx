import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../enum'

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View stlye={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect Job</Text>
      </View>

      <View stlye={styles.searchContainer}>
        <View stlye={styles.searchWrapper}>
          <TextInput
            placeholder='What are you looking for?'
            stlye={styles.searchInput}
            value=""
            onChange={() => { }}
          />
        </View>
        
        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image
            style={styles.searchBtnImage}
            source={icons.search}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Welcome