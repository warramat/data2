import { Fetch } from "../tools/fecth";
import { apiV1 } from "../config/ApiServer";

export const GET_DATA_SPORTMAN = async (data) => {
  const res = await Fetch("GET", `${apiV1}/dropdown/question/1`, data);

  return res;
};
export const GET_DATA_TYPERACE = async (data) => {
  const res = await Fetch("GET", `${apiV1}/dropdown/question/2`, data);

  return res;
};

export const GET_DATA_AGE = async (data) => {
  const res = await Fetch("GET", `${apiV1}/dropdown/question/4`, data);

  return res;
};

export const GET_DATA_WORK = async (data) => {
  const res = await Fetch("GET", `${apiV1}/dropdown/question/5`, data);

  return res;
};
export const GET_DATA_SPORTMAN_SECTOR = async (data) => {
  const res = await Fetch("GET", `${apiV1}/dropdown/question/12`, data);

  return res;
};
export const GET_DATA_SPORTMAN_LANDMASS = async (data) => {
  const res = await Fetch("GET", `${apiV1}/dropdown/question/13`, data);

  return res;
};
export const GET_DATA_PAYRANGE = async (data) => {
  const res = await Fetch("GET", `${apiV1}/dropdown/question/8`, data);

  return res;
};
export const GET_DATA_BUDGET = async (data) => {
  const res = await Fetch("GET", `${apiV1}/dropdown/question/10`, data);

  return res;
};
export const GET_DATA_RELAX = async (data) => {
  const res = await Fetch("GET", `${apiV1}/dropdown/question/7`, data);

  return res;
};
export const POST_EVALUTION = async (data) => {
  const res = await Fetch("POST", `${apiV1}/evaluation`, data);

  return res;
};
export const POST_SATISFACTION = async (data) => {
  const res = await Fetch("POST", `${apiV1}/satisfaction`, data);

  return res;
};

////////////////////////////////////USER GROUP///////////////////////////
