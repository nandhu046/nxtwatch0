import {FaFire} from 'react-icons/fa'
import Header from '../Header'
import AppMenu from '../AppMenu'
import Video from '../Video'
import Context from '../../context'
import {
  HomeContainer,
  MainContainer,
  ContentContainer,
  TabName,
  HeadingBtn,
  Heading,
  VideosContainer,
  EmptyContainer,
  NoVideosImg,
  AboutPage,
  WarnHeading,
} from './StyledComponents'

const SavedVideos = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value

      const renderSavedVideos = () => {
        if (savedVideos.length === 0) {
          return (
            <EmptyContainer>
              <NoVideosImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                alt="no saved videos"
              />
              <WarnHeading color={isDarkTheme ? '#ffffff' : '#000000'}>
                No saved videos found
              </WarnHeading>
              <AboutPage>
                You can save your videos while watching them
              </AboutPage>
            </EmptyContainer>
          )
        }
        return (
          <VideosContainer>
            {savedVideos.map(i => (
              <Video key={i.id} data={i} />
            ))}
          </VideosContainer>
        )
      }

      return (
        <HomeContainer>
          <Header />
          <MainContainer>
            <AppMenu />
            <ContentContainer
              data-testid="savedVideos"
              bgColor={isDarkTheme ? '#0f0f0f' : '#f9f9f9'}
            >
              <TabName bgColor={isDarkTheme ? '#212121' : '#ebebeb'}>
                <HeadingBtn bgColor={isDarkTheme ? '#000000' : '#e2e8f0'}>
                  <FaFire fill="#ff0000" />
                </HeadingBtn>
                <Heading color={isDarkTheme ? '#ffffff' : '#000000'}>
                  Saved Videos
                </Heading>
              </TabName>
              {renderSavedVideos()}
            </ContentContainer>
          </MainContainer>
        </HomeContainer>
      )
    }}
  </Context.Consumer>
)

export default SavedVideos
