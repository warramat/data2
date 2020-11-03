import { Fetch } from "../tools/fecth";
import { apiV1 } from "../config/ApiServer";

export const GET_DATA_RESIDANCE = async (data) => {
  const res = await Fetch("GET", `${apiV1}/dropdown/question/1`, data);

  return res;
};

////////////////////////////////////USER GROUP///////////////////////////
