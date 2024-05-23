import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const VideoContainer = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  @media screen and (min-width: 576px) {
    flex-direction: ${props => props.direction};
  }
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

export const ThumbnailImg = styled.img`
  @media screen and (max-width: 576px) {
    width: 100%;
  }
  @media screen and (min-width: 576px) {
    width: ${props => {
      if (props.width === '50%') {
        return '50%'
      }
      return '100%'
    }};
  }
`

export const Profile = styled.img`
  height: 26px;
  width: 26px;
  border-radius: 40px;
  margin-right: 11px;
  @media screen and (min-width: 567px) {
    display: ${props => props.dH};
  }
`

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Roboto';
  @media screen and (min-width: 576px) {
    margin-left: ${props => props.space};
  }
`

export const Title = styled.p`
  margin: 0px;
  font-size: 13px;
  color: ${props => props.color};
  line-height: 1.3;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 15px;
    line-height: 1.4;
  }
  @media screen and (min-width: 768px) {
    font-size: ${props => props.fontSize};
  }
`

export const VideoStats = styled.p`
  margin-top: 6px;
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
  line-height: 1.3;
  @media screen and (min-width: 576px) {
    line-height: 1.7;
    margin-top: 2px;
    font-size: 13px;
  }
`

export const LinkComponent = styled(Link)`
  text-decoration: none;
  @media screen and (min-width: 576px) {
    margin-top: 15px;
    width: ${props => {
      if (props.width === '100%') {
        return '100%'
      }
      return '47%'
    }};
    margin-bottom: 15px;
    margin-right: 15px;
  }
  @media screen and (min-width: 768px) {
    width: ${props => {
      if (props.width === '100%') {
        return '100%'
      }
      return '30%'
    }};
    margin-top: 15px;
    margin-bottom: 15px;
    margin-right: 15px;
  }
`

export const Break = styled.br`
  display: none;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`
export const Span = styled.span`
  display: inline-block;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
