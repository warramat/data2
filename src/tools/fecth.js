import { apiURL } from "../config/ApiServer";
// import * as btoa from 'btoa'
export const Fetch = async (
  method = "POST",
  path,
  data = {},
  // Basic = null,
  // token
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

export const FetchFormData = async (
  method = "POST",
  path,
  data = {},
  token
) => {
  try {
    const url = `${apiURL}${path}`;
    const res = await fetch(url, {
      headers: {
        Authorization: token !== "" ? "Bearer " + token : "",
      },
      method: method || "POST",
      body: method === "POST" ? data : null,
    });
    const datas = await res.json();
    return datas;
  } catch (err) {
    return err;
  }
};

