import styled from 'styled-components'

export const MenuContainer = styled.ul`
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${props => props.bgColor};
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    padding-top: 16px;
    width: 29%;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const FooterContainer = styled(MenuContainer)`
  display: flex;
  background-color: ${props => props.bgColor};
  flex-direction: column;
  justify-content: flex-start;
  font-family: 'Roboto';
  font-weight: 500;
  padding-top: 10px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    width: 100%;
    padding-left: 22px;
  }
`

export const FHeading = styled.p`
  font-weight: 500;
  margin-bottom: 7px;
  color: ${props => props.color};
  font-size: 16px;
`

export const ContactSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 6px;
`
export const SocialMediaLogo = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 10px;
`

export const TagLine = styled.p`
  color: ${props => props.color};
  font-size: 15px;
`
