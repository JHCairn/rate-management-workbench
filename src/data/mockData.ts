import type { PricingRecord } from "../types/pricing";

export const pricingData: PricingRecord[] = [
  {
    id: 1,
    location: "Munich Airport",
    vehicleClass: "Compact",
    rentalDate: "2026-07-15",
    internalRate: 85,
    competitorRate: 80,
    bookedVehicles: 90,
    availableVehicles: 10,
    utilizationForecast: 90,
  },
  {
    id: 2,
    location: "Munich Airport",
    vehicleClass: "SUV",
    rentalDate: "2026-07-15",
    internalRate: 120,
    competitorRate: 125,
    bookedVehicles: 40,
    availableVehicles: 40,
    utilizationForecast: 50,
  },
  {
    id: 3,
    location: "Berlin Airport",
    vehicleClass: "Compact",
    rentalDate: "2026-07-15",
    internalRate: 55,
    competitorRate: 70,
    bookedVehicles: 70,
    availableVehicles: 130,
    utilizationForecast: 35,
  },
];