import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import Context from '../../context'

import {
  Navbar,
  WebLogo,
  NavItemsContainer,
  IconButton,
  ProfileImg,
  IconButton1,
  LogOutBtn,
  Alert,
  PopupContent,
  NotifyUser,
  BtnContainer,
  LogoutChoice,
  Cancel,
} from './StyledComponents'

const Header = props => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme, changeTheme, openOrHideMenu} = value
      const {history} = props
      const changingTheme = () => {
        changeTheme()
      }

      const onLogOut = () => {
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onHamburger = () => {
        openOrHideMenu()
      }

      return (
        <>
          <Navbar bgColor={isDarkTheme ? '#181818' : '#ffffff'}>
            <Link to="/">
              <WebLogo
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <NavItemsContainer>
              <IconButton onClick={changingTheme} data-testid="theme">
                {isDarkTheme ? (
                  <FiSun height="100%" stroke="white" />
                ) : (
                  <FaMoon />
                )}
              </IconButton>
              <IconButton1 onClick={onHamburger}>
                <GiHamburgerMenu
                  fill={isDarkTheme ? 'white' : 'currentColor'}
                />
              </IconButton1>
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Alert>
                <Popup
                  modal
                  trigger={
                    <IconButton1>
                      <FiLogOut
                        stroke={isDarkTheme ? 'white' : 'currentColor'}
                      />
                    </IconButton1>
                  }
                >
                  {close => (
                    <PopupContent bgColor={isDarkTheme ? '#181818' : '#ffffff'}>
                      <NotifyUser color={isDarkTheme ? '#ffffff' : '#00306e'}>
                        Are you sure, you want to logout?
                      </NotifyUser>
                      <BtnContainer>
                        <Cancel
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          Close
                        </Cancel>
                        <LogoutChoice onClick={onLogOut}>Confirm</LogoutChoice>
                      </BtnContainer>
                    </PopupContent>
                  )}
                </Popup>
              </Alert>

              <Alert>
                <Popup
                  modal
                  trigger={
                    <LogOutBtn
                      onClick={onLogOut}
                      bColor={isDarkTheme ? '#ffffff' : '#3b82f6'}
                      color={isDarkTheme ? '#ffffff' : '#3b82f6'}
                    >
                      Logout
                    </LogOutBtn>
                  }
                >
                  {close => (
                    <PopupContent bgColor={isDarkTheme ? '#181818' : '#ffffff'}>
                      <NotifyUser color={isDarkTheme ? '#ffffff' : '#00306e'}>
                        Are you sure, you want to logout?
                      </NotifyUser>
                      <BtnContainer>
                        <Cancel
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          Close
                        </Cancel>
                        <LogoutChoice onClick={onLogOut}>Confirm</LogoutChoice>
                      </BtnContainer>
                    </PopupContent>
                  )}
                </Popup>
              </Alert>
            </NavItemsContainer>
          </Navbar>
        </>
      )
    }}
  </Context.Consumer>
)

export default withRouter(Header)
