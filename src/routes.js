import ExhibitorsTH from "./view/questionnaireformsTh/ExhibitorsTH"
import SatisfactionTH from "./view/questionnaireformsTh/SatisfactionTH"
import ExhibitorsEN from "./view/questionnaireformsEn/ExhibitorsEN"
import SatisfactionEN from "./view/questionnaireformsEn/SatisfactionEN"

export const routes = [
  { path: "/", exact: true, name: "ExhibitorsTH", component: ExhibitorsTH  },
  { path: "/exhibitorsTh", name: "ExhibitorsTH", component: ExhibitorsTH, exact: true },
  { path: "/satisfactionTh", name: "SatisfactionTH", component: SatisfactionTH, exact: true },
  { path: "/exhibitorsEN", name: "ExhibitorsEN", component: ExhibitorsEN, exact: true },
  { path: "/satisfactionEN", name: "SatisfactionEN", component: SatisfactionEN, exact: true },
];

