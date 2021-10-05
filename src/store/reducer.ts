import {
  SET_API_ERROR,
  SET_LOADING,
  SET_DATA
} from "./actionTypes";
import { ActionProps } from "./types";

export let initialState = {
  loading: true,
  apiError: null,
  data: [],
};

export default function reducer(currentState = initialState, action: ActionProps) {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...currentState,
        loading: action.payload
      }
    case SET_API_ERROR:
      return {
        ...currentState,
        apiError: action.payload
      }
    case SET_DATA:
      return {
        ...currentState,
        data: action.payload
      }
    default:
      return currentState;
  }
}

export type RootState = ReturnType<typeof reducer>
