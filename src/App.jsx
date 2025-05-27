import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/globalStyles'
import { useState } from 'react'
import { useGeolocation } from './hooks/useGeolocation'
import { useNearestOffices } from './hooks/useNearestOffices'

import Header from './components/Header'
import FilterBar from './components/FilterBar'
import OfficeGrid from './components/OfficeGrid'
import Modal from './components/Modal'

export default function App(){
  const { pos, error } = useGeolocation()
  const [onlyCenter,setOnlyCenter]=useState(false)
  const offices = useNearestOffices(pos, onlyCenter)
  const [selected,setSelected]=useState(null)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header/>
      <FilterBar onlyCenter={onlyCenter} setOnlyCenter={setOnlyCenter}/>
      {error && <p style={{textAlign:'center',color:'red'}}>{error}</p>}
      <OfficeGrid list={offices} onSelect={setSelected}/>
      {selected && <Modal office={selected} onClose={()=>setSelected(null)}/>}
    </ThemeProvider>
  )
}
