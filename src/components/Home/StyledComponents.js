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

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  font-family: 'Roboto';
  padding: 30px;
  padding-top: 22px;
  padding-left: 25px;
  padding-right: 27px;
  @media screen and (min-width: 768px) {
    padding-top: 17px;
  }
`

export const AboutAd = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const WebLogo = styled.img`
  height: 30px;
  width: 140px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 140px;
    height: 30px;
  }
`

export const AboutBanner = styled.p`
  color: #1e293b;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    width: 45%;
  }
`

export const BuyButton = styled.button`
  color: #1e293b;
  border: 1.5px solid #1e293b;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 9px;
  padding-right: 9px;
  font-weight: 500;
  background-color: transparent;
  cursor: pointer;
  width: 93px;
  margin-top: 3px;
  font-size: 12px;
`

export const CloseBtn = styled(BuyButton)`
  width: 25px;
  border-width: 0px;
  padding: 0px;
  margin-top: 0px;
  font-size: 23px;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 18px;
  align-items: center;
  width: 100%;
`

export const Input = styled.input`
  width: 80%;
  border: 1px solid ${props => props.bColor};
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  outline: none;
  font-size: 16px;
  background-color: transparent;
  color: ${props => props.color};
  @media screen and (min-width: 576px) {
    width: 70%;
  }
  @media screen and (min-width: 768px) {
    width: 45%;
  }
`

export const SearchBtn = styled(CloseBtn)`
  padding-top: 9px;
  padding-bottom: 6px;
  font-size: 16px;
  border: 1px solid ${props => props.bColor};
  border-left: 0px;
  width: 20%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 576px) {
    width: 10%;
  }
  @media screen and (min-width: 768px) {
    width: 10%;
    font-size: 15.5px;
  }
`

export const VideosContainer = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    padding-left: 18px;
    flex-wrap: wrap;
  }
`
