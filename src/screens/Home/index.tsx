import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ArtistCard from '../../components/ArtistCard'
import SongCard from '../../components/SongCard'
import AlbumCard from '../../components/AlbumCard'
import logo from '../../assets/logo.png'
import {
  SongRank,
  AlbumRank,
  ArtistRank,
  getAlbum,
  getArtists,
  getSongs,
} from '../../services/ranking'
import { useNavigation } from '@react-navigation/core'
import styles from '../../styles'

export default function Home() {
  const [songs, setSongs] = useState<SongRank[]>([])
  const [artists, setArtists] = useState<ArtistRank[]>([])
  const [albuns, setAlbuns] = useState<AlbumRank[]>([])
  const navigation = useNavigation()

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
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={logo} />
        <View style={styles.textView}>
          <Text style={styles.titleHome}>Top Songs</Text>
          <TouchableOpacity>
            <Text style={styles.subtitleHome}>See more</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={songs}
          renderItem={data => (
            <SongCard
              name={data.item.name}
              artist={data.item.art.name}
              photo={data.item.art.pic_medium}
              onPress={() =>
                navigation.navigate('SongDetails', { song: data.item })
              }
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.textView}>
          <Text style={styles.titleHome}>Top Artists</Text>
          <TouchableOpacity>
            <Text style={styles.subtitleHome}>See more</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={artists}
          renderItem={data => (
            <ArtistCard
              name={data.item.name}
              photo={data.item.pic_medium}
              onPress={() =>
                navigation.navigate('ArtistDetails', { artist: data.item })
              }
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.textView}>
          <Text style={styles.titleHome}>Top Albuns</Text>
          <TouchableOpacity>
            <Text style={styles.subtitleHome}>See more</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={albuns}
          renderItem={data => (
            <AlbumCard
              album={data.item.name}
              artist={data.item.art.name}
              cover={data.item.art.pic_medium}
              onPress={() =>
                navigation.navigate('AlbumDetails', { album: data.item })
              }
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
