import { useEffect, useState } from "react";

export function useGeolocation() {
  const [pos, setPos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Геолокация не поддерживается браузером");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (p) => setPos({ lat: p.coords.latitude, lng: p.coords.longitude }),
      (err) => setError(err.message)
    );
  }, []);
  return { pos, error };
}
