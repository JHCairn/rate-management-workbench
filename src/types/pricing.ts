export interface PricingRecord {
  id: number;
  location: string;
  vehicleClass: string;
  rentalDate: string;
  internalRate: number;
  competitorRate: number;
  bookedVehicles: number;
  availableVehicles: number;
  utilizationForecast: number;
}

export type Recommendation = "Increase Rate" | "Reduce Rate" | "Maintain Rate";