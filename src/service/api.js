import { Fetch } from "../tools/fecth";
import { apiV1 } from "../config/ApiServer";

export const GET_DATA_TYPE_PEOPLE = async (data) => {
  const res = await Fetch("GET", `${apiV1}/dashboard/evaluation/demo`, data);

  return res;
};


