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

export const getSongs = async (): Promise<SongRank[]> => {
  const resp = await api.get(
    '/rank.php?type=mus&period=month&scope=all&limit=5&apikey=9f0178c76a3d568b3727a1cdc2627ffd',
  )
  return resp.data.mus.month.all
}

export const getArtists = async (): Promise<ArtistRank[]> => {
  const resp = await api.get(
    '/rank.php?type=art&period=month&scope=all&limit=5&apikey=9f0178c76a3d568b3727a1cdc2627ffd',
  )
  return resp.data.art.month.all
}

export const getAlbum = async (): Promise<AlbumRank[]> => {
  const resp = await api.get(
    '/rank.php?type=alb&period=month&scope=all&limit=5&apikey=9f0178c76a3d568b3727a1cdc2627ffd',
  )
  return resp.data.alb.month.all
}

export const searchTerm = async (query: string) => {
  api.get(`/search.excerpt?q=${query}&limit=5`)
}
