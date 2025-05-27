import { useMemo } from "react";
import { haversineDistance } from "../utils/distance";
import data from "../data/offices.json";

export function useNearestOffices(userPos, onlyCenter) {
  return useMemo(() => {
    if (!userPos) return [];
    const list = data
      .filter((o) => !onlyCenter || o.district === "ЦАО")
      .map((o) => ({ ...o, distance: haversineDistance(userPos, o) }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5);
    return list;
  }, [userPos, onlyCenter]);
}
