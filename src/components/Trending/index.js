import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import Header from '../Header'
import AppMenu from '../AppMenu'
import Video from '../Video'
import LoaderView from '../Loader'
import FailureView from '../FailureView'

import {
  HomeContainer,
  MainContainer,
  ContentContainer,
  VideosContainer,
  TabName,
  HeadingBtn,
  Heading,
} from './StyledComponents'
import Context from '../../context'

class Trending extends Component {
  state = {apiStatus: 'loading', data: ''}

  componentDidMount() {
    this.getTrendingTabVideos()
  }

  getTrendingTabVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const responseObj = await fetch('https://apis.ccbp.in/videos/trending', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    const data = await responseObj.json()
    if (responseObj.ok === true) {
      this.setState({apiStatus: 'success', data: data.videos})
    } else {
      this.setState({apiStatus: 'fail'})
    }
  }

  onRetry = () => {
    this.setState({apiStatus: 'loading'}, this.getTrendingTabVideos)
  }

  renderOnApiStatus = theme => {
    const {apiStatus, data} = this.state
    switch (apiStatus) {
      case 'loading':
        return <LoaderView />
      case 'success':
        return (
          <>
            <TabName bgColor={theme ? '#212121' : '#ebebeb'}>
              <HeadingBtn bgColor={theme ? '#000000' : '#e2e8f0'}>
                <FaFire fill="#ff0000" />
              </HeadingBtn>
              <Heading color={theme ? '#ffffff' : '#000000'}>Trending</Heading>
            </TabName>
            <VideosContainer>
              {data.map(i => (
                <Video key={i.id} data={i} />
              ))}
            </VideosContainer>
          </>
        )
      default:
        return <FailureView onRetryTab={this.onRetry} />
    }
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomeContainer>
              <Header />
              <MainContainer>
                <AppMenu />
                <ContentContainer
                  data-testid="trending"
                  bgColor={isDarkTheme ? '#0f0f0f' : '#f9f9f9'}
                >
                  {this.renderOnApiStatus(isDarkTheme)}
                </ContentContainer>
              </MainContainer>
            </HomeContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Trending
