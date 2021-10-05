import { LaunchDataEntryProps } from "../services/spaceXApi.types";
import {
  SET_API_ERROR,
  SET_LOADING,
  SET_DATA
} from "./actionTypes";
import { initialState } from "./reducer";

interface ActionPayloadProps {
  loading: boolean;
  apiError: null | string;
  data: LaunchDataEntryProps[] | []
}

export interface ActionProps {
  type: typeof SET_LOADING | typeof SET_API_ERROR | typeof SET_DATA,
  payload: any
}
