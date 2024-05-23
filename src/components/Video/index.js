import {withRouter} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Context from '../../context'
import {
  VideoContainer,
  ChannelVideoDetails,
  ThumbnailImg,
  Profile,
  VideoInfo,
  Title,
  VideoStats,
  LinkComponent,
  Break,
  Span,
} from './StyledComponents'

const Video = props => {
  const {data} = props
  const newDataObj = {
    id: data.id,
    name: data.channel.name,
    profileImageUrl: data.channel.profile_image_url,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  }
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = newDataObj
  const pubDate = publishedAt.split(',')
  const monthDay = pubDate[0].split(' ')
  const date = new Date(`${monthDay[0]} ${monthDay[1]} ${pubDate[1]}`)
  const fromPublishedDateToNow = formatDistanceToNow(
    new Date(date.getFullYear(), date.getMonth(), date.getDay()),
  )
  const {location} = props
  const path = location.pathname

  return (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LinkComponent
            width={path !== '/' ? '100%' : null}
            to={`/videos/${id}`}
          >
            <VideoContainer direction={path !== '/' ? 'row' : 'column'}>
              <ThumbnailImg
                width={path !== '/' ? '50%' : null}
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <ChannelVideoDetails>
                <Profile
                  dH={path !== '/' ? 'none' : 'inline-block'}
                  src={profileImageUrl}
                  alt={name}
                />
                <VideoInfo space={path !== '/' ? '18px' : '0px'}>
                  <Title
                    fontSize={path !== '/' ? '18px' : '14px'}
                    color={isDarkTheme ? '#ffffff' : '#181818'}
                  >
                    {title}
                  </Title>
                  <VideoStats>
                    {name}
                    <Break />
                    <Span> .</Span> {viewCount} . {fromPublishedDateToNow}
                  </VideoStats>
                </VideoInfo>
              </ChannelVideoDetails>
            </VideoContainer>
          </LinkComponent>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(Video)
