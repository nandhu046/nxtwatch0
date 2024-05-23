import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Context from '../../context'
import Header from '../Header'
import AppMenu from '../AppMenu'
import GamingVideo from '../GamingVideo'
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

class Gaming extends Component {
  state = {apiStatus: 'loading', data: ''}

  componentDidMount() {
    this.getGamingTabVideos()
  }

  getGamingTabVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const responseObj = await fetch('https://apis.ccbp.in/videos/gaming', {
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
    this.setState({apiStatus: 'loading'}, this.getGamingTabVideos)
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
                <SiYoutubegaming fill="#ff0000" />
              </HeadingBtn>
              <Heading color={theme ? '#ffffff' : '#000000'}>Gaming</Heading>
            </TabName>
            <VideosContainer>
              {data.map(i => (
                <GamingVideo key={i.id} data={i} />
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
                  data-testid="gaming"
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

export default Gaming
