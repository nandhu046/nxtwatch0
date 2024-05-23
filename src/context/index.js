import React from 'react'

const Context = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  menu: false,
  openOrHideMenu: () => {},
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
