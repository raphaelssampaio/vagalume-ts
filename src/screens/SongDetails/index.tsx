import React from 'react'
import { useRoute } from '@react-navigation/core'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, SafeAreaView, Image, View } from 'react-native'
import { SongRank } from '../../services/ranking'

import styles from '../../styles'

export default function SongDetails() {
  interface Params {
    item: SongRank
  }

  const route = useRoute()
  const { item } = route.params as Params

  const renderData = () => {
    return (
      <View style={styles.contentDetails}>
        <Image
          source={{ uri: item.art.pic_medium }}
          style={styles.imageDetails}
        />
        <Text style={styles.title}>Song: {item.name}</Text>
        <Text style={styles.subtitle}>Artist: {item.art.name}</Text>
        <Text style={styles.subtitle}>Total views: {item.views}</Text>
        <Text style={styles.subtitle}>Unique views: {item.uniques}</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.white}>See</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return <SafeAreaView style={styles.container}>{renderData()}</SafeAreaView>
}
