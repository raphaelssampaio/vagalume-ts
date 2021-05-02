import React from 'react'
import { useRoute } from '@react-navigation/core'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, SafeAreaView, Image, View, Linking } from 'react-native'
import { SongRank } from '../../services/ranking'

import styles from '../../styles'

export default function SongDetails() {
  interface Params {
    song: SongRank
  }

  const route = useRoute()
  const { song } = route.params as Params

  const renderData = () => {
    return (
      <View style={styles.contentDetails}>
        <Image
          source={{ uri: song.art.pic_medium }}
          style={styles.imageDetails}
        />
        <Text style={styles.title}>Song: {song.name}</Text>
        <Text style={styles.subtitle}>Artist: {song.art.name}</Text>
        <Text style={styles.subtitle}>Total views: {song.views}</Text>
        <Text style={styles.subtitle}>Unique views: {song.uniques}</Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => Linking.openURL(song.url)}>
          <Text style={styles.white}>See</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return <SafeAreaView style={styles.container}>{renderData()}</SafeAreaView>
}
