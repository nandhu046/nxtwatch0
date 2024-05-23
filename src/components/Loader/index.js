import Loader from 'react-loader-spinner'
import Context from '../../context'
import {Container} from './StyledComponents'

const LoaderView = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <Container content="center" data-testid="loader">
          <Loader
            type="ThreeDots"
            color={isDarkTheme ? '#ffffff' : '#000000'}
            height="50"
            width="50"
          />
        </Container>
      )
    }}
  </Context.Consumer>
)

export default LoaderView
