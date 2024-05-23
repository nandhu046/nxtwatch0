import Context from '../../context'
import {
  FailImg,
  FailReason,
  FailPara,
  RetryBtn,
  Container,
} from './StyledComponents'

const FailureView = props => {
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
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailReason color={isDarkTheme ? '#ffffff' : '#000000'}>
              Oops! Something Went Wrong
            </FailReason>
            <FailPara>
              We are having some trouble to complete your request.
              <br /> Please try again.
            </FailPara>
            <RetryBtn onClick={onRetry}>Retry</RetryBtn>
          </Container>
        )
      }}
    </Context.Consumer>
  )
}

export default FailureView
