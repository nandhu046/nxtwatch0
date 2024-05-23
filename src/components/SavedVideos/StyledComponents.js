import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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

export const EmptyContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding-left: 12px;
  flex-wrap: wrap;
  margin: 0px;
  @media screen and (min-width: 768px) {
    padding-left: 35px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`

export const TabName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${props => props.bgColor};
  flex-wrap: wrap;
`

export const HeadingBtn = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background-color: ${props => props.bgColor};
  border-width: 0px;
  font-size: 19px;
  text-align: center;
  margin-right: 12px;
  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 25px;
  }
`

export const Heading = styled.h1`
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const NoVideosImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 45%;
  }
`

export const WarnHeading = styled.h1`
  color: ${props => props.color};
  font-size: 22px;
  margin-top: 34px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 27px;
    margin-top: 33px;
  }
`

export const AboutPage = styled.p`
  color: #64748b;
  font-family: 'Roboto';
`
