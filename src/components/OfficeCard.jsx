import styled from 'styled-components'

const Card = styled.article`
  background: ${({theme})=>theme.colors.card};
  padding: 1rem 1.1rem;
  border-radius: ${({theme})=>theme.radius};
  box-shadow: 0 1px 4px rgba(0,0,0,.06);
  transition: .18s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0,0,0,.12);
  }
  h3 {
    font-size: 1rem;
    margin-bottom: .35rem;
  }
  p:last-child {
    font-weight: 600;
    color: ${({theme})=>theme.colors.accent};
  }
`

export default function OfficeCard({ office, onClick }) {
  return (
    <Card onClick={onClick} data-testid="office-card">
      <h3>{office.name}</h3>
      <p>{office.address}</p>
      <p>{(office.distance / 1000).toFixed(1)} км</p>
    </Card>
  )
}
