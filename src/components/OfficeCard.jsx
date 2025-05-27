import styled from 'styled-components'

const Card = styled.article`
  background:${({theme})=>theme.colors.card};padding:1rem;border-radius:${({theme})=>theme.radius};
  box-shadow:0 2px 6px rgba(0,0,0,.06);cursor:pointer;
  transition:transform .18s,box-shadow .18s;
  &:hover{transform:translateY(-4px);box-shadow:0 6px 14px rgba(0,0,0,.1)}
`
export default function OfficeCard({ office, onClick }) {
  return (
    <Card onClick={onClick} data-testid="office-card">
      <h3>{office.name}</h3>
      <p>{office.address}</p>
      <p>{(office.distance/1000).toFixed(1)} км</p>
    </Card>
  )
}
