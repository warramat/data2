import ExhibitorsTH from "./view/questionnaireformsTh/ExhibitorsTH"
import SatisfactionTH from "./view/questionnaireformsTh/SatisfactionTH"
import ExhibitorsEN from "./view/questionnaireformsEn/ExhibitorsEN"
import SatisfactionEN from "./view/questionnaireformsEn/SatisfactionEN"

export const routes = [
  { path: "/", exact: true, name: "Exhibitors", component: ExhibitorsTH  },
  { path: "/exhibitorsTh", name: "Exhibitors", component: ExhibitorsTH, exact: true },
  { path: "/satisfactionTh", name: "Satisfaction", component: SatisfactionTH, exact: true },
  { path: "/exhibitorsEN", name: "Satisfaction", component: ExhibitorsEN, exact: true },
  { path: "/satisfactionEN", name: "Satisfaction", component: SatisfactionEN, exact: true },
];

