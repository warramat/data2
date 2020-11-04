import { apiURL } from "../config/ApiServer";
import { _isEmpty } from "../tools/util"
// import * as btoa from 'btoa'
export const Fetch = async (
  method = "POST",
  path,
  data = {},
) => {
  try {
    const url = `${apiURL}${path}`;
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("TOKEN"),
      },
      method: method || "POST",
      body: method === "POST" ? JSON.stringify(data) : null,
    });
    const datas = await res.json();
    return datas;
  } catch (err) {
    return err;
  }
};

export const convertSearchParams = (param = {}) => {
  if (!param) return "";
  const newParam = new URLSearchParams(Object.entries(param)).toString();
  return !_isEmpty(param) ? "?" + newParam : "";
};

export const defultFunction = (res) => {
};
