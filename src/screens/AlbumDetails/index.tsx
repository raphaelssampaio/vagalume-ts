import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/core'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, SafeAreaView, Image, View, Linking } from 'react-native'
import { AlbumRank } from '../../services/ranking'

import styles from '../../styles'

export default function AlbumDetails() {
  interface Params {
    album: AlbumRank
  }

  const route = useRoute()
  const { album } = route.params as Params

  const renderData = () => {
    return (
      <View style={styles.contentDetails}>
        <Image
          source={{ uri: album.art.pic_medium }}
          style={styles.imageDetails}
        />
        <Text style={styles.title}>Song: {album.name}</Text>
        <Text style={styles.subtitle}>Artist: {album.art.name}</Text>
        <Text style={styles.subtitle}>Total views: {album.views}</Text>
        <Text style={styles.subtitle}>Unique views: {album.uniques}</Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => Linking.openURL(album.url)}>
          <Text style={styles.white}>See</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return <SafeAreaView style={styles.container}>{renderData()}</SafeAreaView>
}
