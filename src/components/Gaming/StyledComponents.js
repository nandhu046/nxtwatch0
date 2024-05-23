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

export const VideosContainer = styled.ul`
  margin: 0px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding-left: 15px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-top: 30px;
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
