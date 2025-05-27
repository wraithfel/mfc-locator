import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/styles/theme'
import OfficeCard from '../src/components/OfficeCard'

const sample = { id:1,name:'Test',address:'addr',distance:1234 }

test('click triggers callback',()=>{
  const cb = jest.fn()
  render(
    <ThemeProvider theme={theme}>
      <OfficeCard office={sample} onClick={cb}/>
    </ThemeProvider>
  )
  fireEvent.click(screen.getByTestId('office-card'))
  expect(cb).toHaveBeenCalledTimes(1)
})
