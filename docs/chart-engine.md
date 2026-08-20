# Chart Engine Interface Documentation

## Overview
The chart engine standardizes astronomical and astrological calculations across all features in AstroLive. All downstream feature agents (AI Assistant, Daily Dashboard, Profile Calculators, Family Circle) MUST utilize this standard calculation interface and module structure rather than hand-rolling calculations.

## Module Structure

### Data Models & Types (`src/lib/types/astrology.ts` - proposed interface contract)
```typescript
export interface BirthDetails {
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  day: string; // DD
  month: string; // MM
  year: string; // YYYY
  hour: string; // HH
  minute: string; // MM
  amPm: 'AM' | 'PM';
  city: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
}

export interface PlanetaryPosition {
  planet: string;
  sign: string;
  degree: string;
  house: string;
  nakshatra: string;
  isRetrograde?: boolean;
}

export interface VimshottariDashaPeriod {
  planet: string;
  startDate: string;
  endDate: string;
  status: 'Completed' | 'Active (Current Dasha)' | 'Upcoming';
}

export interface PanchangDetails {
  varna: string;
  vashya: string;
  yoni: string;
  gana: string;
  nadi: string;
  rashi: string;
  lagna: string;
  manglikDosha: {
    hasDosha: boolean;
    description: string;
  };
  kalsarpYoga: {
    present: boolean;
    type: string;
  };
  sadeSati: {
    phase: string;
  };
}

export interface KundliReport {
  birthDetails: BirthDetails;
  panchang: PanchangDetails;
  planets: PlanetaryPosition[];
  dashaPeriods: VimshottariDashaPeriod[];
  lagnaChartSvgData?: any;
}
```

## Calculation API Functions

1. `calculateKundli(details: BirthDetails): KundliReport`
   - Generates full Janam Kundli, Vimshottari Dasha, planetary positions, and Panchang parameters.

2. `calculateCompatibility(personA: BirthDetails, personB: BirthDetails)`
   - Computes 36-Guna Ashtakoota matching score and detailed category breakdown (Varna, Vashya, Tara, Yoni, Maitri, Gana, Bhakoot, Nadi).

3. `calculateDailyTransitReport(details: BirthDetails, date: Date)`
   - Computes daily transit interactions between current planetary movements and the user's natal birth chart.

## Existing Reference Implementation Locations
- Kundli UI & calculations reference: `src/app/free-kundli/page.tsx`
- Kundli matching reference: `src/app/kundli-matching/page.tsx`
- Panchang reference: `src/app/panchang/page.tsx`
