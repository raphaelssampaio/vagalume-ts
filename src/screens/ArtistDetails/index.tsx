import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, SafeAreaView, Image, View, Linking } from 'react-native'
import { ArtistRank } from '../../services/ranking'
import TopNavigation from '../../components/TopNavigation'

import styles from '../../styles'

interface Params {
  artist: ArtistRank
}

export default function ArtistDetails() {
  const route = useRoute()
  const navigation = useNavigation()
  const { artist } = route.params as Params

  const renderData = () => {
    return (
      <>
        <TopNavigation onPress={() => navigation.goBack()} />
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
      </>
    )
  }

  return <SafeAreaView style={styles.container}>{renderData()}</SafeAreaView>
}
