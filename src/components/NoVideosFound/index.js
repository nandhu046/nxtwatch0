import Context from '../../context'
import {
  FailImg,
  FailReason,
  FailPara,
  RetryBtn,
  Container,
} from './StyledComponents'

const NoVideosFound = props => {
  const {onRetryTab} = props

  return (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value

        const onRetry = () => {
          onRetryTab()
        }

        return (
          <Container content="flex-start">
            <FailImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailReason color={isDarkTheme ? '#ffffff' : '#000000'}>
              No Search results found
            </FailReason>
            <FailPara>Try different key words or remove search filter</FailPara>
            <RetryBtn onClick={onRetry}>Retry</RetryBtn>
          </Container>
        )
      }}
    </Context.Consumer>
  )
}

export default NoVideosFound
