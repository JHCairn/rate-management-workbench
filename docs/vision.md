# Revenue Management Workbench

## Vision

Revenue Management Workbench is a prototype internal business application designed to help pricing and revenue management teams make informed decisions about future vehicle rental pricing.

The application provides a consolidated view of rental rates, competitor pricing, fleet availability, booking activity, and revenue opportunities across multiple locations and vehicle classes.

Rather than focusing solely on price management, the application helps users understand how future demand and remaining inventory interact to influence pricing decisions.

The project is inspired by the operational challenges faced by large vehicle rental organizations where pricing decisions are made continuously against future inventory availability.

---

## Problem Statement

Rental vehicle inventory is a perishable asset.

Once a rental day passes, any unsold inventory for that day can never be recovered. Revenue management teams must continuously balance:

* Fleet utilization
* Revenue optimization
* Market competitiveness
* Future inventory availability
* Booking pace
* Demand fluctuations

Pricing decisions are rarely made against inventory that is already booked. Instead, analysts focus on the remaining inventory for future rental dates and determine whether pricing should be adjusted based on current booking activity and expected demand.

Many of these decisions require analysts to combine information from multiple systems before deciding whether rates should be increased, decreased, or maintained.

This prototype aims to consolidate those decision inputs into a single workspace.

---

## Target Users

### Pricing Analyst

Monitors future rental dates, competitor pricing, fleet availability, and booking activity to identify pricing opportunities.

### Revenue Manager

Evaluates pricing strategies across multiple locations and vehicle classes to maximize revenue performance.

### Commercial Manager

Reviews pricing recommendations and approves significant pricing changes.

---

## Product Goals

The application will:

* Present future pricing information in a single dashboard
* Display competitor pricing alongside internal pricing
* Surface fleet utilization indicators
* Highlight inventory shortages and surpluses
* Allow users to adjust future pricing
* Provide simple impact simulations before committing changes
* Demonstrate a realistic revenue management workflow

---

## Key Concepts

### Fleet Utilization

The percentage of vehicles expected to be rented for a specific rental date.

### Competitor Pricing

Average market pricing obtained from competing rental providers.

### Booking Pace

The rate at which reservations are being made for a future rental date.

Booking pace helps analysts determine whether demand is stronger or weaker than expected.

### Revenue Management

The process of balancing pricing and inventory availability to maximize revenue.

### Pricing Recommendation

A system-generated suggestion based on business rules and current inventory conditions.

---

## MVP Scope

### Revenue Dashboard

View:

* Location
* Vehicle Class
* Rental Date
* Internal Rate
* Competitor Rate
* Booked Vehicles
* Available Vehicles
* Utilization Forecast
* Recommendation

### Rate Editor

Modify:

* Rental Rate
* Effective Rental Date

### Recommendation Engine

Generate recommendations based on:

* Utilization Forecast
* Remaining Inventory
* Competitor Pricing Position

Example recommendations:

* Increase Rate
* Reduce Rate
* Maintain Current Rate

### Impact Preview

Display:

* Current Revenue Estimate
* Projected Revenue Estimate
* Revenue Difference

---

## Success Criteria

A user can:

1. Review future inventory conditions.
2. Compare internal and competitor pricing.
3. Identify pricing opportunities.
4. Update a future rental rate.
5. View the projected impact of a pricing change.
6. Complete the workflow without leaving the application.

---

## Future Enhancements

Potential future capabilities include:

* Booking curve visualization
* Demand forecasting
* Approval workflows
* Audit history
* Fleet repositioning recommendations
* AI-generated pricing insights
* Competitor data imports
* Scenario planning
* Machine learning pricing recommendations
