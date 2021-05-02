import { StyleSheet } from 'react-native'

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
    fontSize: 17,
    alignSelf: 'flex-end',
  },
  subtitleHome: {
    color: 'green',
    fontSize: 15,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
    marginBottom: 3,
  },
  subtitle: {
    color: '#535353',
    fontSize: 12,
    lineHeight: 14,
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
    width: 120,
    alignItems: 'center',
  },
  buttonComponent: {
    marginHorizontal: 16,
    width: 120,
  },
  white: {
    color: 'white',
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
})
