import { spaceXApi } from "../config/api";
import { getRequest } from "./request";

export const getAllLaunches = () => {
  return getRequest(`${spaceXApi}/v3/launches?limit=50`);
};
