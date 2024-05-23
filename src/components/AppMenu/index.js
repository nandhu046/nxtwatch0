import {MenuContainer1, MdDevices} from './StyledComponents'
import Context from '../../context'
import TabOption from '../TabOption'
import FooterSection from '../FooterSection'

const menuOptionsList = [
  {id: 1, text: 'Home'},
  {id: 2, text: 'Trending'},
  {id: 3, text: 'Gaming'},
  {id: 4, text: 'Saved videos'},
]

const AppMenu = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme, activeTab} = value

      return (
        <>
          <MenuContainer1 bgColor={isDarkTheme ? '#181818' : '#ffffff'}>
            <MdDevices>
              {menuOptionsList.map(e => (
                <TabOption key={e.id} data={e} liveActiveTab={activeTab} />
              ))}
            </MdDevices>
            <FooterSection />
          </MenuContainer1>
        </>
      )
    }}
  </Context.Consumer>
)

export default AppMenu
