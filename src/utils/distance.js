export function haversineDistance(p1, p2) {
  const R = 6371e3;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const φ1 = toRad(p1.lat),
    φ2 = toRad(p2.lat);
  const Δφ = toRad(p2.lat - p1.lat);
  const Δλ = toRad(p2.lng - p1.lng);
  const a = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
