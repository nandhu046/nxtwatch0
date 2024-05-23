import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import Context from '../../context'
import {MenuItem, OptionText, SelectedTab, LinkRoute} from './StyledComponents'

const idAndPathList = [
  {
    id: 1,
    path: '/',
  },
  {
    id: 2,
    path: '/trending',
  },
  {
    id: 3,
    path: '/gaming',
  },
  {
    id: 4,
    path: '/saved-videos',
  },
]

const TabOption = props => {
  const {data} = props
  const {id, text} = data

  return (
    <Context.Consumer>
      {value => {
        const {isDarkTheme, changeActiveTab} = value

        const {location} = props
        const currentPath = location.pathname
        const idForPresentPath = idAndPathList.filter(i => {
          if (i.path === currentPath) {
            return i
          }
          return null
        })
        let wantedTab = idForPresentPath[0]
        if (idForPresentPath.length === 0) {
          wantedTab = {
            id: 5,
            path: ':/id',
          }
        }

        let path
        if (id === 1) {
          path = '/'
        } else if (id === 2) {
          path = '/trending'
        } else if (id === 3) {
          path = '/gaming'
        } else {
          path = '/saved-videos'
        }

        const onClickOption = () => {
          changeActiveTab(id)
        }

        const tabText = () => (
          <OptionText
            color={isDarkTheme ? '#f9f9f9' : '#212121'}
            fontWeight={wantedTab.id === id ? 500 : 400}
          >
            {text}
          </OptionText>
        )

        const renderIcon = () => {
          let icon
          if (id === 1) {
            icon =
              idForPresentPath.length === 0 ? (
                <AiFillHome fill="#7e858e" />
              ) : (
                <AiFillHome
                  fill={wantedTab.id === id ? '#ff0000' : '#7e858e'}
                />
              )
          } else if (id === 2) {
            icon =
              idForPresentPath.length === 0 ? (
                <FaFire fill="#7e858e" />
              ) : (
                <FaFire fill={wantedTab.id === id ? '#ff0000' : '#7e858e'} />
              )
          } else if (id === 3) {
            icon =
              idForPresentPath.length === 0 ? (
                <SiYoutubegaming fill="#7e858e" />
              ) : (
                <SiYoutubegaming
                  fill={wantedTab.id === id ? '#ff0000' : '#7e858e'}
                />
              )
          } else {
            icon =
              idForPresentPath.length === 0 ? (
                <MdPlaylistAdd fill="#7e858e" />
              ) : (
                <MdPlaylistAdd
                  fill={wantedTab.id === id ? '#ff0000' : '#7e858e'}
                />
              )
          }
          return (
            <>
              {wantedTab.id === id ? (
                <LinkRoute to={path} onClick={onClickOption}>
                  <SelectedTab stBgColor={isDarkTheme ? '#383838' : '#d7dfe9'}>
                    {icon}
                    {tabText()}
                  </SelectedTab>
                </LinkRoute>
              ) : (
                <LinkRoute to={path} onClick={onClickOption}>
                  <MenuItem>
                    {icon}
                    {tabText()}
                  </MenuItem>
                </LinkRoute>
              )}
            </>
          )
        }

        return <>{renderIcon()}</>
      }}
    </Context.Consumer>
  )
}

export default withRouter(TabOption)
