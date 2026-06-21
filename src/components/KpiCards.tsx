import type { PricingRecord } from "../types/pricing";
import { calculateRevenue, getRecommendation } from "../logic/recommendations";

interface KpiCardsProps {
  records: PricingRecord[];
}

export function KpiCards({ records }: KpiCardsProps) {
  const totalRevenue = records.reduce(
    (sum, record) => sum + calculateRevenue(record),
    0
  );

  const averageUtilization =
    records.reduce((sum, record) => sum + record.utilizationForecast, 0) /
    records.length;

  const uniqueLocations = new Set(records.map((record) => record.location)).size;

  const pricingAlerts = records.filter(
    (record) => getRecommendation(record) !== "Maintain Rate"
  ).length;

  const cards = [
    {
    label: "Projected Revenue",
    value: `€${totalRevenue.toLocaleString()}`,
    helper: "For visible opportunities",
    },
    {
      label: "Avg. Utilization",
      value: `${averageUtilization.toFixed(1)}%`,
      helper: "Across visible records",
    },
    {
      label: "Locations",
      value: uniqueLocations.toString(),
      helper: "Markets in view",
    },
    {
    label: "Pricing Actions",
    value: pricingAlerts.toString(),
    helper: "Recommended adjustments",
    },
  ];

  return (
    <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div key={card.label} className="rounded-xl bg-white p-5 shadow">
          <p className="text-sm font-medium text-slate-500">{card.label}</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">
            {card.value}
          </p>
          <p className="mt-1 text-sm text-slate-500">{card.helper}</p>
        </div>
      ))}
    </section>
  );
}