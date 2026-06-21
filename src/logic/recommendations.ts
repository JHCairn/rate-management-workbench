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
export function calculatePriorityScore(record: PricingRecord): number {
  const recommendation = getRecommendation(record);

  if (recommendation === "Maintain Rate") {
    return 0;
  }

  let score = 0;

  if (record.utilizationForecast >= 90) {
    score += 40;
  }

  if (record.availableVehicles <= 10) {
    score += 30;
  }

  if (calculateRevenue(record) >= 10000) {
    score += 20;
  }

  if (
    recommendation === "Increase Rate" &&
    record.internalRate < record.competitorRate
  ) {
    score += 10;
  }

  if (
    recommendation === "Reduce Rate" &&
    record.internalRate > record.competitorRate
  ) {
    score += 10;
  }

  return score;
}