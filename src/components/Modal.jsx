import { createPortal } from 'react-dom'
import styled from 'styled-components'

const Backdrop = styled.div`
  position:fixed;inset:0;background:rgba(0,0,0,.4);
  display:flex;align-items:center;justify-content:center;z-index:1000;
`
const Box = styled.div`
  background:#fff;padding:1.5rem;border-radius:${({theme})=>theme.radius};
  max-width:400px;width:90%;position:relative;
`
const Close = styled.button`
  position:absolute;top:8px;right:10px;border:none;background:none;
  font-size:1.5rem;cursor:pointer;color:#777;
`
export default function Modal({office,onClose}){
  const mapUrl=`https://yandex.ru/maps/?rtext=~${office.lat},${office.lng}`
  return createPortal(
    <Backdrop data-testid="modal" onClick={onClose}>
      <Box onClick={e=>e.stopPropagation()}>
        <Close aria-label="закрыть" onClick={onClose}>×</Close>
        <h2>{office.name}</h2>
        <p>{office.address}</p>
        <p>Округ: {office.district}</p>
        <a href={mapUrl} target="_blank" rel="noreferrer">Проложить маршрут</a>
      </Box>
    </Backdrop>,
    document.body
  )
}
