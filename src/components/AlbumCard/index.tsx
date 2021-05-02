import React from 'react'
import { Image, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import styles from '../../styles'

interface AlbumCardProps extends RectButtonProps {
  album: string
  cover: string
  artist: string
}

const AlbumCard = ({ album, artist, cover, ...rest }: AlbumCardProps) => {
  return (
    <RectButton style={styles.buttonComponent} {...rest}>
      <Image source={{ uri: cover }} style={styles.image} />
      <Text style={styles.title}>{album}</Text>
      <Text style={styles.subtitle}>{artist}</Text>
    </RectButton>
  )
}

export default AlbumCard
