import styled from 'styled-components'

export const PlayerContainer = styled.div`
  height: 220px;
  width: 100%;
  margin-bottom: 0px;
  @media screen and (min-width: 576px) {
    height: 360px;
  }
`

export const VideoDetails = styled.div`
  width: 100%;
  padding-top: 15px;
  padding-left: 12px;
  padding-right: 12px;
  font-family: 'Roboto';
  @media screen and (min-width: 576px) {
    padding-top: 18px;
    padding-left: 0px;
    padding-right: 0px;
  }
`

export const VideoThumbnail = styled.p`
  color: ${props => props.color};
  font-weight: 500;
  line-height: 1.5;
  margin-top: 0px;
  font-size: 16px;
`

export const VideoStats = styled.p`
  margin-top: 7px;
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
    margin-bottom: 4px;
  }
`

export const LikeDislike = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 48%;
    justify-content: flex-end;
  }
`

export const Button = styled.button`
  height: 21px;
  background-color: transparent;
  border-width: 0px;
  font-size: 21px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  margin-right: 7px;
  cursor: pointer;
  padding-left: 0px;
`

export const Button3 = styled.button`
  height: 21px;
  background-color: transparent;
  border-width: 0px;
  font-size: 21px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  margin-left: 10px;
  cursor: pointer;
`

export const BtnText = styled.p`
  margin: 0px;
  padding-left: 4px;
  color: ${props => props.color};
  font-size: 14px;
`

export const AboutVideo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 18px;
`

export const ChannelVideoDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 12px;
  padding-bottom: 24px;
  @media screen and (min-width: 576px) {
    padding-left: 0px;
    padding-top: 11px;
    padding-bottom: 16px;
  }
`

export const Profile = styled.img`
  height: 38px;
  width: 38px;
  border-radius: 40px;
  margin-right: 11px;
`

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Roboto';
`

export const Title = styled.p`
  margin: 0px;
  font-size: 12px;
  color: ${props => props.color};
  line-height: 1.3;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    line-height: 1.4;
  }
`

export const SubsCount = styled(VideoStats)`
  font-size: 12px;
`

export const Description = styled.p`
  color: ${props => props.color};
  font-size: 12px;
`

export const Line = styled.hr`
  border-color: #64748b;
`
