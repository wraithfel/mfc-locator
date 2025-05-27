import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  margin: 0 auto 1.2rem;
  max-width: 960px;
  padding: 0 1rem;

  input[type=checkbox] {
    accent-color: ${({theme})=>theme.colors.accent};
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`

export default function FilterBar({ onlyCenter, setOnlyCenter }) {
  return (
    <Wrap>
      <input
        id="center"
        type="checkbox"
        checked={onlyCenter}
        onChange={e => setOnlyCenter(e.target.checked)}
      />
      <label htmlFor="center">Показывать только ЦАО</label>
    </Wrap>
  )
}
