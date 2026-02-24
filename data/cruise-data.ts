import type { CruisePackageData } from './types';
import { heroData } from './sections/hero-data';
import { tripInfoData } from './sections/trip-info-data';
import { introData } from './sections/intro-data';
import { featuresData } from './sections/features-data';
import { detailsData } from './sections/details-data';
import { scheduleLabelsData, scheduleMeta } from './sections/schedule-labels-data';
import { scheduleDaysData } from './sections/schedule-days-data';
import { scheduleModalsData } from './sections/schedule-modals-data';
import { pricingData } from './sections/pricing-data';
import { productInfoData } from './sections/product-info-data';
import { tripSummaryData } from './sections/trip-summary-data';
import { checklistData, headerData, footerData, mobileBottomBarData } from './sections/static-data';

export const cruiseData: CruisePackageData = {
  hero: heroData,
  tripInfo: tripInfoData,
  intro: introData,
  features: featuresData,
  details: detailsData,
  schedule: {
    labels: scheduleLabelsData,
    days: scheduleDaysData,
    modals: scheduleModalsData,
    dateRange: scheduleMeta.dateRange,
    durationLabel: scheduleMeta.durationLabel,
  },
  pricing: pricingData,
  productInfo: productInfoData,
  tripSummary: tripSummaryData,
  checklist: checklistData,
  header: headerData,
  footer: footerData,
  mobileBottomBar: mobileBottomBarData,
};
