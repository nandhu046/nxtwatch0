import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoCloseSharp, IoSearchSharp} from 'react-icons/io5'
import Header from '../Header'
import AppMenu from '../AppMenu'
import Video from '../Video'
import LoaderView from '../Loader'
import NoVideosFound from '../NoVideosFound'
import FailureView from '../FailureView'

import {
  HomeContainer,
  MainContainer,
  ContentContainer,
  BannerContainer,
  AboutAd,
  WebLogo,
  AboutBanner,
  BuyButton,
  CloseBtn,
  Input,
  SearchContainer,
  SearchBtn,
  VideosContainer,
} from './StyledComponents'
import Context from '../../context'

class Home extends Component {
  state = {showBanner: true, searchText: '', apiStatus: 'loading', data: ''}

  componentDidMount() {
    this.getHomeTabVideos()
  }

  getHomeTabVideos = async () => {
    const {searchText} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const responseObj = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchText}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      },
    )
    const data = await responseObj.json()
    if (responseObj.ok === true) {
      this.setState({apiStatus: 'success', data: data.videos})
    } else {
      this.setState({apiStatus: 'fail'})
    }
  }

  onClickSearchIcon = () => {
    this.setState({apiStatus: 'loading'}, this.getHomeTabVideos)
  }

  onEnter = event => {
    if (event.key === 'Enter') {
      this.setState({apiStatus: 'loading'}, this.getHomeTabVideos)
    }
  }

  onRetry = () => {
    this.setState({apiStatus: 'loading'}, this.getHomeTabVideos)
  }

  renderOnApiStatus = () => {
    const {apiStatus, data} = this.state
    switch (apiStatus) {
      case 'loading':
        return <LoaderView />
      case 'success':
        return (
          <>
            {data.length === 0 ? (
              <NoVideosFound onRetryTab={this.onRetry} />
            ) : (
              <VideosContainer>
                {data.map(i => (
                  <Video key={i.id} data={i} />
                ))}
              </VideosContainer>
            )}
          </>
        )

      default:
        return <FailureView onRetryTab={this.onRetry} />
    }
  }

  render() {
    const {showBanner, searchText} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value

          const onCloseBanner = () => {
            this.setState({showBanner: false})
          }

          const onEnterSearch = event => {
            this.setState({searchText: event.target.value})
          }

          return (
            <HomeContainer>
              <Header />
              <MainContainer>
                <AppMenu />
                <ContentContainer
                  data-testid="home"
                  bgColor={isDarkTheme ? '#181818' : '#f9f9f9'}
                >
                  {showBanner && (
                    <BannerContainer data-testid="banner">
                      <AboutAd>
                        <WebLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <CloseBtn data-testid="close" onClick={onCloseBanner}>
                          <IoCloseSharp />
                        </CloseBtn>
                      </AboutAd>
                      <AboutBanner>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </AboutBanner>
                      <BuyButton>GET IT NOW</BuyButton>
                    </BannerContainer>
                  )}
                  <SearchContainer>
                    <Input
                      bColor={isDarkTheme ? '#475569' : '#7e858e'}
                      type="search"
                      color={isDarkTheme ? '#f9f9f9' : '#000000'}
                      placeholder="Search"
                      onChange={onEnterSearch}
                      value={searchText}
                      onKeyDown={this.onEnter}
                    />
                    <SearchBtn
                      onClick={this.onClickSearchIcon}
                      data-testid="searchButton"
                      bColor={isDarkTheme ? '#475569' : '#7e858e'}
                      bgColor={isDarkTheme ? '#383838' : '#d7dfe9'}
                    >
                      <IoSearchSharp fill="#7e858e" />
                    </SearchBtn>
                  </SearchContainer>
                  {this.renderOnApiStatus()}
                </ContentContainer>
              </MainContainer>
            </HomeContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home
