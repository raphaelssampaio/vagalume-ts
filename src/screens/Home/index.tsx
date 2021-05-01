import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import {
  SongRank,
  AlbumRank,
  ArtistRank,
  getAlbum,
  getArtists,
  getSongs,
} from '../../services/ranking'
import styles from './styles'

export default function Home() {
  const [songs, setSongs] = useState<SongRank[]>([])
  const [artists, setArtists] = useState<ArtistRank[]>([])
  const [albuns, setAlbuns] = useState<AlbumRank[]>([])

  useEffect(() => {
    Promise.all<AlbumRank[], ArtistRank[], SongRank[]>([
      getAlbum(),
      getArtists(),
      getSongs(),
    ]).then(async ([respAlbum, respArtist, respSongs]) => {
      setAlbuns(respAlbum)
      setArtists(respArtist)
      setSongs(respSongs)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.bold}>oie</Text>
    </View>
  )
}
