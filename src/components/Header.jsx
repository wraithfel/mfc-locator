import styled from 'styled-components'
import logo from '../assets/logo.svg'

const Bar = styled.header`
  background: linear-gradient(90deg, ${({theme})=>theme.colors.headerGrad1} 0%, ${({theme})=>theme.colors.headerGrad2} 100%);
  padding: .9rem 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,.05);
  margin-bottom: 1.2rem;
`

const Inner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: .75rem;
  color: #fff;
  h1 {
    font-size: 1.35rem;
  }
  img {
    width: 36px;
    height: 36px;
  }
`

export default function Header() {
  return (
    <Bar>
      <Inner>
        <img src={logo} alt="MFC logo" />
        <h1>MFC Locator</h1>
      </Inner>
    </Bar>
  )
}
