import { apiKey } from '../../api-secret'
import api from './api'

export interface SongRank {
  art: ArtistDefault
  id: string
  name: string
  rank: string
  uniques: string
  url: string
  views: string
}

export interface ArtistRank {
  id: string
  name: string
  rank: string
  uniques: string
  url: string
  views: string
  pic_medium: string
  pic_small: string
}

export interface AlbumRank {
  art: ArtistDefault
  cover: string
  id: string
  name: string
  published: string
  uniques: string
  url: string
  views: string
}

interface ArtistDefault {
  id: string
  name: string
  pic_medium: string
  pic_small: string
  url: string
}

export const getSongs = async (limit: string = '5'): Promise<SongRank[]> => {
  const resp = await api.get(
    `/rank.php?type=mus&period=month&scope=all&limit=${limit}&apikey=${apiKey}`,
  )
  return resp.data.mus.month.all
}

export const getArtists = async (
  limit: string = '5',
): Promise<ArtistRank[]> => {
  const resp = await api.get(
    `/rank.php?type=art&period=month&scope=all&limit=${limit}&apikey=${apiKey}`,
  )
  return resp.data.art.month.all
}

export const getAlbum = async (limit: string = '5'): Promise<AlbumRank[]> => {
  const resp = await api.get(
    `/rank.php?type=alb&period=month&scope=all&limit=${limit}&apikey=${apiKey}`,
  )
  return resp.data.alb.month.all
}

export const searchTerm = async (query: string) => {
  api.get(`/search.excerpt?q=${query}&limit=5`)
}
