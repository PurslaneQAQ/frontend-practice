import TimeTrackingDashboardStyle from './TimeTrackingDashboard/_export.modules.scss';
import TipCalculatorStyle from './TipCalculator/_export.modules.scss';
import TipCalculator from './TipCalculator';
import TimeTrackingDashbaord from './TimeTrackingDashboard';
import SunnysideAgencyLandingPage from './SunnysideAgencyLandingPage';

import { PageProps } from './components/page';

const routerConfig:(PageProps&{path:string})[] = [
  {
    title: 'Tip calculator',
    path: '/tip-calculator',
    Comp: TipCalculator,
    bodyStyle: TipCalculatorStyle,
  },
  {
    title: 'Time Tracking Dashboard',
    path: '/time-tracking-dashboard',
    Comp: TimeTrackingDashbaord,
    bodyStyle: TimeTrackingDashboardStyle,
  },
  {
    title: 'Sunnyside Agency Landing Page',
    path: '/sunnyside-agency-landing-page',
    Comp: SunnysideAgencyLandingPage,
    // bodyStyle: TimeTrackingDashboardStyle,
  },
];

export default routerConfig;
