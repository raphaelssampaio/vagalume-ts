import React from 'react'
import { useRoute } from '@react-navigation/core'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, SafeAreaView, Image, View, Linking } from 'react-native'
import { ArtistRank } from '../../services/ranking'

import styles from '../../styles'

export default function ArtistDetails() {
  interface Params {
    artist: ArtistRank
  }

  const route = useRoute()
  const { artist } = route.params as Params

  const renderData = () => {
    return (
      <View style={styles.contentDetails}>
        <Image
          source={{ uri: artist.pic_medium }}
          style={styles.imageDetails}
        />
        <Text style={styles.title}>Artist: {artist.name}</Text>
        <Text style={styles.subtitle}>Rank: {artist.rank}</Text>
        <Text style={styles.subtitle}>Total views: {artist.views}</Text>
        <Text style={styles.subtitle}>Unique views: {artist.uniques}</Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => Linking.openURL(artist.url)}>
          <Text style={styles.white}>See</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return <SafeAreaView style={styles.container}>{renderData()}</SafeAreaView>
}
