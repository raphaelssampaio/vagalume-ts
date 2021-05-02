import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, SafeAreaView, Image, View, Linking } from 'react-native'
import { AlbumRank } from '../../services/ranking'
import TopNavigation from '../../components/TopNavigation'

import styles from '../../styles'

interface Params {
  album: AlbumRank
}

export default function AlbumDetails() {
  const route = useRoute()
  const navigation = useNavigation()
  const { album } = route.params as Params

  const renderData = () => {
    return (
      <>
        <TopNavigation onPress={() => navigation.goBack()} />
        <Text style={[styles.rankText, styles.textCenter]}>Album Details</Text>
        <View style={styles.contentDetails}>
          <Image
            source={{ uri: album.art.pic_medium }}
            style={styles.imageDetails}
          />
          <View style={styles.card}>
            <Text style={[styles.title, styles.black]}>Song: {album.name}</Text>
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
        </View>
      </>
    )
  }

  return <SafeAreaView style={styles.container}>{renderData()}</SafeAreaView>
}
