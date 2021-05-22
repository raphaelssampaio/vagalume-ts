import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'
import {
  SongRank,
  AlbumRank,
  ArtistRank,
  getAlbum,
  getArtists,
  getSongs,
} from '../../services/ranking'
import { useRoute } from '@react-navigation/core'
import styles from '../../styles'

interface Params {
  detail: string
}

export default function More() {
  const route = useRoute()
  const [title, setTitle] = useState('songs')
  const [loading, setLoading] = useState(false)
  const [dataRank, setDataRank] = useState<
    SongRank[] | ArtistRank[] | AlbumRank[]
  >([])

  const { detail } = route.params as Params

  useEffect(() => {
    setLoading(true)
    switch (detail) {
      case 'song':
        setTitle('songs')
        fetchSongData()
        return
      case 'artist':
        setTitle('artists')
        fetchArtistData()
        return
      default:
        setTitle('albums')
        fetchAlbumData()
        return
    }
  }, [])

  const fetchAlbumData = async () => {
    if (dataRank) return
    try {
      const albumsData = await getAlbum('100')
      setDataRank(albumsData)
      setLoading(false)
    } catch {
      setLoading(false)
    }
  }

  const fetchSongData = async () => {
    if (dataRank) return
    try {
      const songsData = await getSongs('100')
      setDataRank(songsData)
      setLoading(false)
    } catch {
      setLoading(false)
    }
  }

  const fetchArtistData = async () => {
    if (dataRank) return
    try {
      const artistsData = await getArtists('100')
      setDataRank(artistsData)
      setLoading(false)
    } catch {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.rankText}>Top {title}</Text>
        {loading && (
          <ActivityIndicator color={styles.rankText.color} size="large" />
        )}
      </ScrollView>
    </SafeAreaView>
  )
}
