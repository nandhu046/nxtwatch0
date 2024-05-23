import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import AppMenu from '../AppMenu'
import LoaderView from '../Loader'
import FailureView from '../FailureView'
import VideoPLayer from '../VideoPlayer'

import {
  HomeContainer,
  MainContainer,
  ContentContainer,
  VideosContainer,
} from './StyledComponents'

import Context from '../../context'

class VideoItemDetails extends Component {
  state = {apiStatus: 'loading', data: ''}

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const responseObj = await fetch(`https://apis.ccbp.in/videos/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    const data = await responseObj.json()
    if (responseObj.ok === true) {
      this.setState({apiStatus: 'success', data: data.video_details})
    } else {
      this.setState({apiStatus: 'fail'})
    }
  }

  onRetry = () => {
    this.setState({apiStatus: 'loading'}, this.getVideoItemDetails)
  }

  renderOnApiStatus = () => {
    const {apiStatus, data} = this.state
    switch (apiStatus) {
      case 'loading':
        return <LoaderView />
      case 'success':
        return (
          <VideosContainer>
            <VideoPLayer data={data} />
          </VideosContainer>
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
                  data-testid="videoItemDetails"
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

export default VideoItemDetails
