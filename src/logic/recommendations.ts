import type { PricingRecord, Recommendation } from "../types/pricing";

export function getRecommendation(record: PricingRecord): Recommendation {
  if (
    record.utilizationForecast >= 90 &&
    record.availableVehicles <= 15 &&
    record.internalRate <= record.competitorRate
  ) {
    return "Increase Rate";
  }

  if (
    record.utilizationForecast < 60 &&
    record.internalRate > record.competitorRate
  ) {
    return "Reduce Rate";
  }

  return "Maintain Rate";
}

export function calculateRateDifference(record: PricingRecord): number {
  return ((record.internalRate - record.competitorRate) / record.competitorRate) * 100;
}

export function calculateRevenue(record: PricingRecord): number {
  return record.internalRate * record.bookedVehicles;
}