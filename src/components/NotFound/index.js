import Header from '../Header'
import AppMenu from '../AppMenu'

import {
  HomeContainer,
  MainContainer,
  ContentContainer,
  NotFoundImg,
  Heading,
  AboutPage,
} from './StyledComponents'

import Context from '../../context'

const NotFound = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <HomeContainer>
          <Header />
          <MainContainer>
            <AppMenu />
            <ContentContainer bgColor={isDarkTheme ? '#0f0f0f' : '#f9f9f9'}>
              <NotFoundImg
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <Heading color={isDarkTheme ? '#ffffff' : '#000000'}>
                Page Not Found
              </Heading>
              <AboutPage>
                We are sorry, the page you requested could not be found.
              </AboutPage>
            </ContentContainer>
          </MainContainer>
        </HomeContainer>
      )
    }}
  </Context.Consumer>
)

export default NotFound
