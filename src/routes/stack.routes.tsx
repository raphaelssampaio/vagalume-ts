import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import SongDetails from '../screens/SongDetails'
import ArtistDetails from '../screens/ArtistDetails'
import AlbumDetails from '../screens/AlbumDetails'

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator headerMode="none">
    <stackRoutes.Screen name="Home" component={Home} />
    <stackRoutes.Screen name="SongDetails" component={SongDetails} />
    <stackRoutes.Screen name="ArtistDetails" component={ArtistDetails} />
    <stackRoutes.Screen name="AlbumDetails" component={AlbumDetails} />
  </stackRoutes.Navigator>
)

export default AppRoutes
