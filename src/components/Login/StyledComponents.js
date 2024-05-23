import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  height: 100vh;
  overflow-y: auto;
  justify-content: center;
  align-items: center;
  padding: 12px;
`

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.bgColor};
  box-shadow: 4px;
  padding: 35px;
  font-family: 'Roboto';
  border-radius: 8px;
  padding-left: 23px;
  padding-right: 23px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const WebLogo = styled.img`
  height: 32px;
  width: 150px;
  align-self: center;
  margin-bottom: 13px;
`

export const Label = styled.label`
  color: ${props => props.color};
  font-size: 14px;
  margin-bottom: 5px;
  margin-top: 26px;
  font-weight: 500;
`

export const Input = styled.input`
  border: 1px solid ${props => props.bColor};
  border-radius: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  outline: none;
  font-size: 16px;
  background-color: transparent;
  color: ${props => props.color};
`
export const ShowPass = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  font-family: 'Roboto'
  font-weight: 500;
  margin-bottom: 25px;
`

export const ShowPassLabel = styled(Label)`
  margin-top: 0px;
  color: ${props => props.color}
  font-size: 16px;
  margin-left: 6px;
  margin-top: 4px;
  cursor: pointer;
`

export const CInput = styled.input`
  height: 20px;
  width: 15px;
  cursor: pointer;
`

export const Button = styled.button`
  background-color: #3b82f6;
  border-radius: 8px;
  border-width: 0px;
  color: #ffffff;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  width: 100%:
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 16px;
`
