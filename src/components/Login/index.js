import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Context from '../../context'

import {
  LoginContainer,
  FormElement,
  WebLogo,
  Label,
  Input,
  ShowPass,
  ShowPassLabel,
  CInput,
  Button,
  ErrorMsg,
} from './StyledComponents'

class Login extends Component {
  state = {username: '', password: '', showPass: false, errMsg: ''}

  onSubmitForm = async event => {
    const {username, password} = this.state
    event.preventDefault()
    const userData = JSON.stringify({
      username,
      password,
    })
    const responseObj = await fetch('https://apis.ccbp.in/login', {
      method: 'POST',
      body: userData,
    })
    const data = await responseObj.json()
    if (responseObj.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 1})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errMsg: data.error_msg})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPass: !prevState.showPass}))
  }

  render() {
    const {username, password, showPass, errMsg} = this.state
    const isLoggedInUser = Cookies.get('jwt_token')
    if (isLoggedInUser !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <LoginContainer bgColor={isDarkTheme ? '#212121' : '#f1f1f1'}>
              <FormElement
                bgColor={isDarkTheme ? '#0f0f0f' : '#ffffff'}
                onSubmit={this.onSubmitForm}
              >
                <WebLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <Label
                  htmlFor="username"
                  color={isDarkTheme ? '#ffffff' : '#7e858e'}
                >
                  USERNAME
                </Label>
                <Input
                  bColor={isDarkTheme ? '#475569' : '#7e858e'}
                  type="text"
                  color={isDarkTheme ? '#f9f9f9' : '#7e858e'}
                  placeholder="Username"
                  id="username"
                  onChange={this.onChangeUsername}
                  value={username}
                />
                <Label
                  htmlFor="password"
                  color={isDarkTheme ? '#ffffff' : '#7e858e'}
                >
                  PASSWORD
                </Label>
                <Input
                  bColor={isDarkTheme ? '#475569' : '#7e858e'}
                  color={isDarkTheme ? '#f9f9f9' : '#7e858e'}
                  type={showPass ? 'text' : 'password'}
                  placeholder="Password"
                  id="password"
                  onChange={this.onChangePassword}
                  value={password}
                />
                <ShowPass>
                  <CInput
                    type="checkbox"
                    id="showPass"
                    onChange={this.onShowPassword}
                  />
                  <ShowPassLabel
                    htmlFor="showPass"
                    color={isDarkTheme ? '#ffffff' : '#0f0f0f'}
                  >
                    Show Password
                  </ShowPassLabel>
                </ShowPass>
                <Button onClick={this.onSubmitForm}>Login</Button>
                {errMsg !== '' && <ErrorMsg>*{errMsg}</ErrorMsg>}
              </FormElement>
            </LoginContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Login
