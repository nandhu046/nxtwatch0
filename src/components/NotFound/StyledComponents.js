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
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: 'Roboto';
  text-align: center;
`

export const NotFoundImg = styled.img`
  width: 100%;
  height: 260px;
  @media screen and (min-width: 768px) {
    width: 280px;
    height: 280px;
  }
`

export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: 22px;
  margin-top: 34px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 27px;
    margin-top: 23px;
  }
`

export const AboutPage = styled.p`
  color: #64748b;
`
