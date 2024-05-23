import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Context from './context'
import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    menu: false,
    activeTab: 1,
    savedVideos: [],
    likedVideos: [],
    disLikedVideos: [],
  }

  updateTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  appMenu = () => {
    this.setState(prevState => ({menu: !prevState.menu}))
  }

  onchangeActiveTab = id => {
    this.setState({activeTab: id})
  }

  onChangeLikeState = id => {
    const {disLikedVideos} = this.state
    const remDisLikeList = disLikedVideos.filter(i => i !== id)
    this.setState(prevState => ({
      likedVideos: [...prevState.likedVideos, id],
      disLikedVideos: remDisLikeList,
    }))
  }

  onChangeDisLikeState = id => {
    const {likedVideos} = this.state
    const remLikedList = likedVideos.filter(i => i !== id)
    this.setState(prevState => ({
      disLikedVideos: [...prevState.disLikedVideos, id],
      likedVideos: remLikedList,
    }))
  }

  onClickSaveIcon = videoData => {
    const {id} = videoData
    const {savedVideos} = this.state
    const filterItem = savedVideos.filter(i => i.id === id)
    if (filterItem.length === 0) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, videoData],
      }))
    } else {
      const remainingVideos = savedVideos.filter(i => i.id !== id)
      this.setState({savedVideos: remainingVideos})
    }
  }

  render() {
    const {
      isDarkTheme,
      menu,
      activeTab,
      savedVideos,
      likedVideos,
      disLikedVideos,
    } = this.state
    return (
      <Context.Provider
        value={{
          isDarkTheme,
          changeTheme: this.updateTheme,
          menu,
          openOrHideMenu: this.appMenu,
          activeTab,
          changeActiveTab: this.onchangeActiveTab,
          savedVideos,
          saveOrUnSaveFromSavedVideos: this.onClickSaveIcon,
          likedVideos,
          changeLikeState: this.onChangeLikeState,
          disLikedVideos,
          changeDisLikeState: this.onChangeDisLikeState,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute component={NotFound} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
