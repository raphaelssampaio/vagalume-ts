import React from 'react'
import { View, SafeAreaView } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import Close from '../../assets/Close'
import styles from '../../styles'

interface Props {
  onPress: Function
}

function TopNavigation(props: Props) {
  const { onPress } = props
  return (
    <SafeAreaView style={styles.headerSafe}>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => onPress()}
          activeOpacity={0.5}>
          <Close />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

TopNavigation.displayName = 'TopNavigation'

export default TopNavigation
