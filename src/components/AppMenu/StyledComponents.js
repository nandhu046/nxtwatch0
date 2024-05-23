import styled from 'styled-components'

export const MenuContainer = styled.ul`
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${props => props.bgColor};
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    padding-top: 16px;
    width: 29%;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const MdDevices = styled.div`
  width: 100%;
`

export const MenuContainer1 = styled(MenuContainer)`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`
