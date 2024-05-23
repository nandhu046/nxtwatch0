import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
`

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //   height: 100%;
  padding-top: 22px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    padding-left: 18px;
    padding-right: 18px;
    flex-wrap: wrap;
  }
`
