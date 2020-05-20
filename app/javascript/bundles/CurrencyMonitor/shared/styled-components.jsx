import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  position: relative;
  padding: 40px;
  width: 100vw;
  height: 100vh;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled(Row)`
  padding: 20px;
  background-color: #eee;
`
export const Container = styled(Row)`
  flex-grow: 2;
  padding: 20px;
`
export const Footer = styled(Row)`
  padding: 20px;
`
