import { pricingData } from "../data/mockData";
import { KpiCards } from "./KpiCards";
import {
    calculateRateDifference,
    calculateRevenue,
    getRecommendation,
    calculatePriorityScore,
} from "../logic/recommendations";


function getRecommendationStyle(recommendation: string) {
    switch (recommendation) {
        case "Increase Rate":
            return "bg-green-100 text-green-800";

        case "Reduce Rate":
            return "bg-red-100 text-red-800";

        default:
            return "bg-slate-100 text-slate-700";
    }
}

function getUtilizationStyle(utilization: number) {
    if (utilization >= 90) {
        return "text-green-700 font-semibold";
    }

    if (utilization >= 70) {
        return "text-amber-600 font-semibold";
    }

    return "text-red-600 font-semibold";
}


export function RevenueDashboard() {
    return (
        <main className="min-h-screen bg-slate-100 p-8">
            <div className="mx-auto max-w-7xl">
                <h1 className="text-3xl font-bold text-slate-900">
                    Revenue Management Workbench
                </h1>



                <p className="mt-2 text-slate-600">
                    Monitor future rental pricing, competitor rates, inventory position,
                    and revenue opportunities.
                </p>

                <KpiCards records={pricingData} />

                <div className="mt-8 overflow-hidden rounded-xl bg-white shadow">
                    <table className="w-full border-collapse text-left text-sm">
                        <thead className="bg-slate-900 text-white">
                            <tr>
                                <th className="p-4">Location</th>
                                <th className="p-4">Class</th>
                                <th className="p-4">Rental Date</th>
                                <th className="p-4">Our Rate</th>
                                <th className="p-4">Competitor</th>
                                <th className="p-4">Diff</th>
                                <th className="p-4">Booked</th>
                                <th className="p-4">Available</th>
                                <th className="p-4">Utilization</th>
                                <th className="p-4">Revenue</th>
                                <th className="p-4">Priority</th>
                                <th className="p-4">Recommendation</th>
                            </tr>
                        </thead>

                        <tbody>
                            {[...pricingData]
  .sort(
    (a, b) =>
      calculatePriorityScore(b) -
      calculatePriorityScore(a)
  )
  .map((record) => {
                                const recommendation = getRecommendation(record);
                                const rateDifference = calculateRateDifference(record);
                                const revenue = calculateRevenue(record);
                                const priorityScore = calculatePriorityScore(record);

                                return (
                                    <tr key={record.id} className="border-b">
                                        <td className="p-4 font-medium">{record.location}</td>
                                        <td className="p-4">{record.vehicleClass}</td>
                                        <td className="p-4">{record.rentalDate}</td>
                                        <td className="p-4">€{record.internalRate}</td>
                                        <td className="p-4">€{record.competitorRate}</td>
                                        <td className="p-4">{rateDifference.toFixed(1)}%</td>
                                        <td className="p-4">{record.bookedVehicles}</td>
                                        <td className="p-4">{record.availableVehicles}</td>
                                        <td className={`p-4 ${getUtilizationStyle(record.utilizationForecast
                                            )}`} >{record.utilizationForecast}%</td>                                        
                                        <td className="p-4">€{revenue.toLocaleString()}</td>
                                        <td className="p-4 font-semibold">{priorityScore}</td>
                                        <td className="p-4"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${getRecommendationStyle(
                                                    recommendation )}`} >  {recommendation}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}