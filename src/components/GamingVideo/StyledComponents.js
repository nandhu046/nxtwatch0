import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameVideo = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const VideoImg = styled.img`
  width: 100%;
  border-radius: 6px;
`

export const LinkComponent = styled(Link)`
  text-decoration: none;
  margin-top: 16px;
  margin-right: 15px;
  margin-bottom: 34px;
  width: 42%;
  @media screen and (min-width: 576px) {
    margin-right: 17px;
    width: 30%;
  }
  @media screen and (min-width: 768px) {
    margin-right: 16px;
    width: 30%;
  }
`

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Roboto';
  line-height: 1.7;
  margin-top: 12px;
`
export const Title = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-weight: 500;
  margin: 0px;
`

export const Views = styled.p`
  font-size: 13px;
  color: #64748b;
  margin: 0px;
`
