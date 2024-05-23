import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import TabOption from '../TabOption'
import FooterSection from '../FooterSection'
import Context from '../../context'

import {
  Navbar,
  WebLogo,
  NavItemsContainer,
  IconButton,
  ProfileImg,
  IconButton1,
  LogOutBtn,
  PopupContent,
  NotifyUser,
  BtnContainer,
  LogoutChoice,
  PopupContainer,
  MenuContent,
  Cancel,
} from './StyledComponents'

const menuOptionsList = [
  {id: 1, text: 'Home'},
  {id: 2, text: 'Trending'},
  {id: 3, text: 'Gaming'},
  {id: 4, text: 'Saved videos'},
]

const Header = props => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme, changeTheme, activeTab} = value
      const {history} = props
      const changingTheme = () => {
        changeTheme()
      }

      const onLogOut = () => {
        Cookies.remove('jwt_token')
        history.replace('/login')
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
              <PopupContainer>
                <Popup
                  modal
                  trigger={
                    <IconButton1>
                      <GiHamburgerMenu
                        fill={isDarkTheme ? 'white' : 'currentColor'}
                      />
                    </IconButton1>
                  }
                >
                  <>
                    <MenuContent bgColor={isDarkTheme ? '#181818' : '#ffffff'}>
                      {menuOptionsList.map(e => (
                        <TabOption
                          key={e.id}
                          data={e}
                          liveActiveTab={activeTab}
                        />
                      ))}
                      <FooterSection />
                    </MenuContent>
                  </>
                </Popup>
              </PopupContainer>

              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <PopupContainer>
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
              </PopupContainer>

              <PopupContainer>
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
              </PopupContainer>
            </NavItemsContainer>
          </Navbar>
        </>
      )
    }}
  </Context.Consumer>
)

export default withRouter(Header)
