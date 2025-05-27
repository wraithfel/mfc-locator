import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/globalStyles'
import { useState } from 'react'

import { useGeolocation } from './hooks/useGeolocation'
import { useNearestOffices } from './hooks/useNearestOffices'

import Header     from './components/Header'
import FilterBar  from './components/FilterBar'
import OfficeGrid from './components/OfficeGrid'
import Modal      from './components/Modal'
import MapView    from './components/MapView'   // если вы добавляли карту

export default function App () {
  /** Координаты центра Москвы («нулевой километр», Лубянская площадь) */
  const MOSCOW_CENTER = { lat: 55.7539, lng: 37.6208 }

  /** Позиция пользователя (или null) и возможная ошибка */
  const { pos: geoPos, error: geoError } = useGeolocation()

  /** Итогово-активная позиция: гео > fallback-центр */
  const userPos = geoPos || MOSCOW_CENTER

  /** Флаг «только ЦАО» */
  const [onlyCenter, setOnlyCenter] = useState(false)

  /** Массив 5 ближайших офисов от текущей позиции */
  const offices = useNearestOffices(userPos, onlyCenter)

  /** Для модалки */
  const [selected, setSelected] = useState(null)

  /** Текст об ошибке геолокации */
  const geoMessage = geoError
    ? 'Не удалось получить ваше местоположение — показываем ближайшие офисы от центра Москвы.'
    : null

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />

      {geoMessage && (
        <p style={{ textAlign: 'center', color: 'crimson', margin: '1rem 0' }}>
          {geoMessage}
        </p>
      )}

      <FilterBar
        onlyCenter={onlyCenter}
        setOnlyCenter={setOnlyCenter}
      />

      <OfficeGrid
        list={offices}
        onSelect={setSelected}
      />

      {/* Если подключена карта */}
      <MapView center={userPos} offices={offices} />

      {selected && (
        <Modal
          office={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </ThemeProvider>
  )
}
