# Solution Design

## Overview

Revenue Management Workbench is a web-based internal application that simulates the workflow used by pricing and revenue management teams within a vehicle rental organization.

The application focuses on future rental dates, future inventory availability, and pricing recommendations rather than historical reporting.

The solution is intentionally lightweight and optimized for rapid development and deployment.

---

## Architecture

### Frontend

Technology:

* React
* Vite
* TypeScript
* Tailwind CSS

Responsibilities:

* Dashboard rendering
* Pricing management screens
* Recommendation display
* Impact simulation views

---

### Backend

Technology:

* Netlify Functions

Responsibilities:

* CRUD operations
* Recommendation calculations
* Revenue impact calculations
* Data validation

---

### Database

Technology:

* Supabase PostgreSQL

Responsibilities:

* Store inventory information
* Store pricing information
* Store competitor pricing
* Store recommendation results

---

## Data Model

### Locations

| Field   | Type |
| ------- | ---- |
| id      | UUID |
| name    | Text |
| country | Text |

Examples:

* Munich Airport
* Berlin Airport
* Hamburg Airport

---

### Vehicle Classes

| Field | Type |
| ----- | ---- |
| id    | UUID |
| name  | Text |

Examples:

* Economy
* Compact
* SUV
* Premium

---

### Inventory Records

Represents inventory conditions for a specific rental date.

| Field                | Type    |
| -------------------- | ------- |
| id                   | UUID    |
| location_id          | UUID    |
| vehicle_class_id     | UUID    |
| rental_date          | Date    |
| fleet_size           | Integer |
| booked_vehicles      | Integer |
| available_vehicles   | Integer |
| utilization_forecast | Decimal |

Example:

Munich Airport

Compact

15-Jul-2026

Fleet Size: 100

Booked: 90

Available: 10

Utilization: 90%

---

### Pricing Records

Represents pricing for a specific rental date.

| Field            | Type    |
| ---------------- | ------- |
| id               | UUID    |
| location_id      | UUID    |
| vehicle_class_id | UUID    |
| rental_date      | Date    |
| internal_rate    | Decimal |
| competitor_rate  | Decimal |

---

## Recommendation Engine

### Increase Rate

Conditions:

* Utilization Forecast > 90%
* Available Vehicles < 15
* Internal Rate <= Competitor Rate

Recommendation:

Increase Rate

---

### Reduce Rate

Conditions:

* Utilization Forecast < 60%
* Internal Rate > Competitor Rate

Recommendation:

Reduce Rate

---

### Maintain Current Rate

Conditions:

* All other scenarios

Recommendation:

Maintain Current Rate

---

## Revenue Simulation

Current Revenue:

Current Revenue = Current Rate × Booked Vehicles

Projected Revenue:

Projected Revenue = Proposed Rate × Booked Vehicles

Revenue Difference:

Projected Revenue − Current Revenue

For MVP purposes, the simulation assumes booking volume remains constant.

Future versions may include demand elasticity modelling.

---

## User Interface

### Revenue Dashboard

Purpose:

Provide operational visibility into future rental dates.

Columns:

* Location
* Vehicle Class
* Rental Date
* Internal Rate
* Competitor Rate
* Rate Difference %
* Booked Vehicles
* Available Vehicles
* Utilization Forecast %
* Recommendation

---

### Rate Editor

Purpose:

Modify future rental pricing.

Fields:

* Location
* Vehicle Class
* Rental Date
* Internal Rate

---

### Impact Preview

Purpose:

Estimate financial impact before saving changes.

Displays:

* Current Revenue
* Projected Revenue
* Revenue Delta

---

## Security

MVP:

* Single-user application
* No authentication required

Future:

* Supabase Authentication
* Role-based access control

---

## Deployment

### Source Control

GitHub

### Hosting

Netlify

### Database

Supabase PostgreSQL

### CI/CD

GitHub → Netlify automatic deployment

---

## Out of Scope

The following capabilities are intentionally excluded from MVP:

* Real competitor integrations
* Demand forecasting models
* Dynamic fleet optimization
* Fleet repositioning
* Machine learning
* Multi-user collaboration
* Enterprise approval workflows

These capabilities may be considered for future releases.
