import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, ScrollView } from 'react-native'
import {
  SongRank,
  AlbumRank,
  ArtistRank,
  getAlbum,
  getArtists,
  getSongs,
} from '../../services/ranking'
import { useNavigation, useRoute } from '@react-navigation/core'
import styles from '../../styles'

interface Params {
  detail: string
}

export default function More() {
  const route = useRoute()
  const navigation = useNavigation()
  const [dataRank, setDataRank] = useState<
    SongRank[] | ArtistRank[] | AlbumRank[]
  >([])

  const { detail } = route.params as Params

  useEffect(() => {
    switch (detail) {
      case 'song':
        fetchSongData()
        return
      case 'artist':
        fetchArtistData()
        return
      default:
        fetchAlbumData()
        return
    }
  }, [])

  const fetchAlbumData = async () => {
    try {
      const albumsData = await getAlbum('100')
      setDataRank(albumsData)
    } catch {}
  }

  const fetchSongData = async () => {
    try {
      const songsData = await getSongs('100')
      setDataRank(songsData)
    } catch {}
  }

  const fetchArtistData = async () => {
    try {
      const artistsData = await getArtists('100')
      setDataRank(artistsData)
    } catch {}
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.rankText}>Top songs</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
