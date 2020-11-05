import { Fetch, convertSearchParams } from "../tools/fecth";
import { apiV1 } from "../config/ApiServer";

export const GET_RESPONDENT = async (queryObj) => {
  const param = convertSearchParams(queryObj);
  const res = await Fetch("GET", `${apiV1}/dashboard/evaluation${param}`);
  return res;
};

export const GET_SATISFACTION = async (queryObj) => {
  const param = convertSearchParams(queryObj);
  const res = await Fetch("GET", `${apiV1}/dashboard/satisfaction${param}`);
  return res;
};


export const GET_ECONOMICVALUE = async (queryObj) => {
  const param = convertSearchParams(queryObj);
  const res = await Fetch("GET", `${apiV1}/dashboard/economicValue${param}`);
  return res;
};

