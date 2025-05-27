import styled from 'styled-components'

const Bar = styled.header`
  display:flex;justify-content:center;align-items:center;
  padding:1.2rem 0 0.8rem;border-bottom:1px solid #e5e8ec;
  background:#fff;margin-bottom:1rem;
`
export default function Header(){ return <Bar><h1>MFC Locator</h1></Bar> }
