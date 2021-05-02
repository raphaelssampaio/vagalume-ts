import React from 'react'
import { Image, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import styles from '../../styles'

interface SongCardProps extends RectButtonProps {
  name: string
  artist: string
  photo: string
}

const SongCard = ({ name, artist, photo, ...rest }: SongCardProps) => {
  return (
    <RectButton style={styles.buttonComponent} {...rest}>
      <Image source={{ uri: photo }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{artist}</Text>
    </RectButton>
  )
}

export default SongCard
