import Context from '../../context'
import {
  GameVideo,
  VideoImg,
  LinkComponent,
  VideoInfo,
  Title,
  Views,
} from './StyledComponents'

const GamingVideo = props => {
  const {data} = props
  const newDataObj = {
    id: data.id,
    title: data.title,
    thumbnailUrl: data.thumbnail_url,
    viewCount: data.view_count,
  }
  const {id, title, thumbnailUrl, viewCount} = newDataObj

  return (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <LinkComponent to={`/videos/${id}`}>
            <GameVideo>
              <VideoImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoInfo>
                <Title color={isDarkTheme ? '#ffffff' : '#181818'}>
                  {title}
                </Title>
                <Views>{viewCount} Watching Worldwide</Views>
              </VideoInfo>
            </GameVideo>
          </LinkComponent>
        )
      }}
    </Context.Consumer>
  )
}

export default GamingVideo
