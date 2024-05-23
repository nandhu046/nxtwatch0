import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 16px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 16px;
  background-color: ${props => props.bgColor};
  flex-wrap: wrap;
  height: 10vh;
  @media screen and (min-width: 768px) {
    padding-left: 35px;
    padding-right: 35px;
  }
`

export const WebLogo = styled.img`
  height: 25px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: 25px;
  }
`

export const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  justify-content: space-around;
  @media screen and (min-width: 576px) {
    width: 22%;
  }
  @media screen and (min-width: 768px) {
    width: 24%;
    justify-content: space-between;
  }
`

export const IconButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  height: 20px;
  width: 20px;
  cursor: pointer;
  font-size: 25px;
  @media screen and (min-width: 768px) {
    height: 30px;
    width: 30px;
  }
`

export const ProfileImg = styled.img`
  height: 26px;
  width: 26px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const IconButton1 = styled(IconButton)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogOutBtn = styled.button`
    border: 1.5px solid #ffffff;
    border-color: ${props => props.bColor};
    color: ${props => props.color};
    font-family: 'Roboto'
    font-size: 500px;
    background-color: transparent;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const Alert = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PopupContent = styled.div`
  background-color: ${props => props.bgColor};
  padding-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 30px;
  border-radius: 8px;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    padding-top: 27px;
    padding-bottom: 27px;
  }
`

export const NotifyUser = styled.p`
  color: ${props => props.color};
  margin-top: 0px;
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 27px;
  text-align: center;
`

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`

export const Cancel = styled.button`
  background-color: transparent;
  border: 1.5px solid #64748b;
  color: #64748b;
  border-radius: 2px;
  padding: 8.5px;
  font-size: 15px;
  text-align: center;
  width: 80px;
  cursor: pointer;
`

export const LogoutChoice = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border-width: 0px;
  border-radius: 2px;
  padding: 10px;
  font-size: 15px;
  text-align: center;
  width: 80px;
  cursor: pointer;
`
