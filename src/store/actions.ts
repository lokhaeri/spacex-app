import { useDispatch } from "react-redux";
import { LaunchDataProps } from "../component/DataTable/types";
import {
  SET_API_ERROR,
  SET_LOADING,
  SET_DATA
} from "./actionTypes";

export const useAppActions = () => {
  const dispatch = useDispatch();
  const setLoading = (loading: boolean) => dispatch({type: SET_LOADING, payload: loading});
  const setApiError = (error: unknown) => dispatch({type: SET_API_ERROR, payload: error});
  const setData = (data: LaunchDataProps) => dispatch({type: SET_DATA, payload: data});

  return { setLoading, setApiError, setData };
}
