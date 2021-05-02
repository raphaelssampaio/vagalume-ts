import React from 'react'
import { Image, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import styles from '../../styles'

interface ArtistCardProps extends RectButtonProps {
  name: string
  photo: string
}

const ArtistCard = ({ name, photo, ...rest }: ArtistCardProps) => {
  return (
    <RectButton style={styles.buttonComponent} {...rest}>
      <Image source={{ uri: photo }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
    </RectButton>
  )
}

export default ArtistCard
