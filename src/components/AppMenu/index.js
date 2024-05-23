import {
  MenuContainer,
  MenuContainer1,
  FooterContainer,
  FHeading,
  ContactSocialMedia,
  SocialMediaLogo,
  TagLine,
  MdDevices,
} from './StyledComponents'
import Context from '../../context'
import TabOption from '../TabOption'

const menuOptionsList = [
  {id: 1, text: 'Home'},
  {id: 2, text: 'Trending'},
  {id: 3, text: 'Gaming'},
  {id: 4, text: 'Saved videos'},
]

const AppMenu = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme, menu, activeTab} = value

      const footerSection = () => (
        <FooterContainer bgColor={isDarkTheme ? '#181818' : '#ffffff'}>
          <FHeading color={isDarkTheme ? '#f9f9f9' : '#212121'}>
            CONTACT Us
          </FHeading>
          <ContactSocialMedia>
            <SocialMediaLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <SocialMediaLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <SocialMediaLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </ContactSocialMedia>
          <TagLine color={isDarkTheme ? '#f9f9f9' : '#212121'}>
            Enjoy! Now to see your channels and recommendations!
          </TagLine>
        </FooterContainer>
      )

      return (
        <>
          {menu && (
            <MenuContainer bgColor={isDarkTheme ? '#181818' : '#ffffff'}>
              {menuOptionsList.map(e => (
                <TabOption key={e.id} data={e} liveActiveTab={activeTab} />
              ))}
              {footerSection()}
            </MenuContainer>
          )}

          <MenuContainer1 bgColor={isDarkTheme ? '#181818' : '#ffffff'}>
            <MdDevices>
              {menuOptionsList.map(e => (
                <TabOption key={e.id} data={e} liveActiveTab={activeTab} />
              ))}
            </MdDevices>
            {footerSection()}
          </MenuContainer1>
        </>
      )
    }}
  </Context.Consumer>
)

export default AppMenu
