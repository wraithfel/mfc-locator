import { render, screen, waitFor } from '@testing-library/react'
import App from '../src/App'

// мок геолокации
beforeAll(()=>{
  global.navigator.geolocation = {
    getCurrentPosition: cb => cb({coords:{latitude:55.76,longitude:37.62}})
  }
})

test('рендерит заголовок и карточки', async () => {
  render(<App/>)
  expect(screen.getByText(/MFC Locator/i)).toBeInTheDocument()
  await waitFor(()=>expect(screen.getAllByTestId('office-card').length).toBeGreaterThan(0))
})
