import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MenuItem = styled.li`
  list-style-type: none;
  color: ${props => props.color};
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  flex-wrap: wrap;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 22px;
  padding-right: 22px;
  border-radius: 40px;
  @media screen and (min-width: 768px) {
    width: 100%;
    margin-bottom: 2px;
    border-radius: 0px;
  }
`

export const OptionText = styled.p`
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  margin: 0px;
  font-family: 'roboto';
  margin-left: 15px;
`

export const SelectedTab = styled(MenuItem)`
  background-color: ${props => props.stBgColor};
`

export const LinkRoute = styled(Link)`
  text-decoration: none;
`
