import { StyleSheet } from 'react-native'
import fonts from './fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    flexGrow: 1,
  },
  contentDetails: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    flexDirection: 'row',
    margin: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleHome: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'flex-end',
    fontFamily: fonts.text,
  },
  subtitleHome: {
    color: 'green',
    fontSize: 18,
    fontFamily: fonts.text,
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 19,
    marginBottom: 3,
    fontFamily: fonts.text,
  },
  subtitle: {
    color: '#535353',
    fontSize: 12,
    lineHeight: 14,
    fontFamily: fonts.text,
  },
  imageDetails: {
    width: 240,
    height: 360,
    marginBottom: 5,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#535353',
    padding: 16,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonComponent: {
    marginHorizontal: 16,
    width: 120,
  },
  white: {
    color: 'white',
  },
  black: {
    color: '#121212',
  },
  image: {
    width: 120,
    height: 180,
    marginBottom: 5,
  },
  headerButton: {
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerSafe: {
    minHeight: 64,
    backgroundColor: '#121212',
    width: '100%',
    flex: 0,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: 64,
  },
  rankText: {
    fontSize: 34,
    color: '#6AD491',
    marginHorizontal: 16,
    fontFamily: fonts.text,
  },
  textCenter: { textAlign: 'center' },
  card: {
    width: 240,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
})
