// src/components/MapView.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import styled from 'styled-components'
import markerIconPng from 'leaflet/dist/images/marker-icon.png'

const MapWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  height: 300px;
  margin: 1.5rem auto;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
`

export default function MapView({ center, offices }) {
  if (!center) return null

  const defaultIcon = new Icon({
    iconUrl: markerIconPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  })

  return (
    <MapWrapper>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={11}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Пользовательская позиция */}
        <Marker position={[center.lat, center.lng]} icon={defaultIcon}>
          <Popup>Вы здесь</Popup>
        </Marker>

        {/* Маркеры МФЦ */}
        {offices.map(o => (
          <Marker
            key={o.id}
            position={[o.lat, o.lng]}
            icon={defaultIcon}
          >
            <Popup>
              <strong>{o.name}</strong><br/>
              {o.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </MapWrapper>
  )
}
