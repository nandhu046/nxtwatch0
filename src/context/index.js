import React from 'react'

const Context = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  activeTab: 1,
  changeActiveTab: () => {},
  savedVideos: [],
  saveOrUnSaveFromSavedVideos: () => {},
  likedVideos: [],
  disLikedVideos: [],
  changeLikeState: () => {},
  changeDisLikeState: () => {},
})

export default Context
