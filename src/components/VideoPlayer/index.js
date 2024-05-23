import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import {
  PlayerContainer,
  VideoDetails,
  VideoThumbnail,
  VideoStats,
  LikeDislike,
  Button,
  Button3,
  BtnText,
  AboutVideo,
  ChannelVideoDetails,
  Profile,
  VideoInfo,
  Title,
  SubsCount,
  Description,
  Line,
} from './StyledComponents'
import Context from '../../context'

const VideoPLayer = props => {
  const {data} = props
  const newDataObj = {
    id: data.id,
    title: data.title,
    videoUrl: data.video_url,
    thumbnailUrl: data.thumbnail_url,
    name: data.channel.name,
    profileImageUrl: data.channel.profile_image_url,
    subscriberCount: data.channel.subscriber_count,
    viewCount: data.view_count,
    publishedAt: data.published_at,
    description: data.description,
  }
  const {
    id,
    title,
    videoUrl,
    thumbnailUrl,
    name,
    profileImageUrl,
    subscriberCount,
    viewCount,
    publishedAt,
    description,
  } = newDataObj

  const pubDate = publishedAt.split(',')
  const monthDay = pubDate[0].split(' ')
  const date = new Date(`${monthDay[0]} ${monthDay[1]} ${pubDate[1]}`)
  const fromPublishedDateToNow = formatDistanceToNow(
    new Date(date.getFullYear(), date.getMonth(), date.getDay()),
  )

  return (
    <Context.Consumer>
      {value => {
        const {
          isDarkTheme,
          saveOrUnSaveFromSavedVideos,
          savedVideos,
          likedVideos,
          disLikedVideos,
          changeLikeState,
          changeDisLikeState,
        } = value

        const onSaveIcon = () => {
          saveOrUnSaveFromSavedVideos(data)
        }

        const changeLikeStateFun = () => {
          changeLikeState(id)
        }

        const changeDisLikeStateFun = () => {
          changeDisLikeState(id)
        }

        const savedOrNot = savedVideos.filter(i => i.id === id)
        const videoSavedOrNot = savedOrNot.length

        const isLikedVideo = likedVideos.filter(i => i === id)
        const likedVideo = isLikedVideo.length

        const isDisLikedVideo = disLikedVideos.filter(i => i === id)
        const disLikedVideo = isDisLikedVideo.length

        return (
          <>
            <PlayerContainer>
              <ReactPlayer
                url={videoUrl}
                stopOnUnmount={false}
                controls
                height="100%"
                width="100%"
              />
            </PlayerContainer>
            <VideoDetails>
              <VideoThumbnail color={isDarkTheme ? '#ffffff' : '#181818'}>
                {title}
              </VideoThumbnail>
              <AboutVideo>
                <VideoStats>
                  {viewCount} . {fromPublishedDateToNow}
                </VideoStats>
                <LikeDislike>
                  <Button onClick={changeLikeStateFun}>
                    <BiLike fill={likedVideo === 0 ? ' #64748b' : '#2563eb'} />
                    <BtnText color={likedVideo === 0 ? ' #64748b' : '#2563eb'}>
                      Like
                    </BtnText>
                  </Button>
                  <Button onClick={changeDisLikeStateFun}>
                    <BiDislike
                      fill={disLikedVideo === 0 ? ' #64748b' : '#2563eb'}
                    />
                    <BtnText
                      color={disLikedVideo === 0 ? ' #64748b' : '#2563eb'}
                    >
                      Dislike
                    </BtnText>
                  </Button>
                  <Button3 onClick={onSaveIcon}>
                    <MdPlaylistAdd
                      fill={videoSavedOrNot === 0 ? ' #64748b' : '#2563eb'}
                    />
                    <BtnText
                      color={videoSavedOrNot === 0 ? ' #64748b' : '#2563eb'}
                    >
                      {videoSavedOrNot === 0 ? 'Save' : 'Saved'}
                    </BtnText>
                  </Button3>
                </LikeDislike>
              </AboutVideo>
              <Line />
              <ChannelVideoDetails>
                <Profile src={profileImageUrl} alt="channel logo" />
                <VideoInfo>
                  <Title color={isDarkTheme ? '#ffffff' : '#181818'}>
                    {name}
                  </Title>
                  <SubsCount>{subscriberCount} subscribers</SubsCount>
                  <Description color={isDarkTheme ? '#ffffff' : '#181818'}>
                    {description}
                  </Description>
                </VideoInfo>
              </ChannelVideoDetails>
            </VideoDetails>
          </>
        )
      }}
    </Context.Consumer>
  )
}

export default VideoPLayer
