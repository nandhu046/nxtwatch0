import {
  FooterContainer,
  FHeading,
  ContactSocialMedia,
  SocialMediaLogo,
  TagLine,
} from './StyledComponents'

import Context from '../../context'

const FooterSection = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
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
    }}
  </Context.Consumer>
)

export default FooterSection
