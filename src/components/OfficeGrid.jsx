import styled from 'styled-components'
import OfficeCard from './OfficeCard'

const Grid = styled.section`
  display:grid;gap:1rem;margin:0 auto;max-width:960px;padding:0 1rem;
  grid-template-columns:repeat(auto-fill,minmax(260px,1fr));
`
export default function OfficeGrid({ list, onSelect }) {
  if(!list.length) return <p style={{textAlign:'center'}}>Определяем местоположение…</p>
  return (
    <Grid>
      {list.map(o=> <OfficeCard key={o.id} office={o} onClick={()=>onSelect(o)}/>)}
    </Grid>
  )
}
