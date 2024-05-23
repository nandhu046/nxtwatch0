import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: 'Roboto';
  text-align: center;
`

export const FailImg = styled.img`
  height: 150px;
  @media screen and (min-width: 768px) {
    height: 200px;
  }
`

export const FailReason = styled.h1`
  color: ${props => props.color};
  margin: 10px;
  font-weight: 500;
  font-size: 21px;
`

export const FailPara = styled.p`
  color: #64748b;
  margin: 2px;
`

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  border-width: 0px;
  border-radius: 4px;
  padding-top: 8px;
  padding-left: 22px;
  padding-right: 22px;
  padding-bottom: 8px;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;
`
