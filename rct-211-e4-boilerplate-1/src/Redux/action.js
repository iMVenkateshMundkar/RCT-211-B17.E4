import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getAllCountries = (params) => (dispatch) => {
  dispatch({ type: actionTypes.GET_COUNTRIES_REQUEST });
  axios
    .get("/countries", params)
    .then((r) =>
      dispatch({ type: actionTypes.GET_COUNTRIES_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: actionTypes.GET_COUNTRIES_FAILURE }));
};

export const updateCountry = (id, updatedCountryData) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_COUNTRY_REQUEST });
  axios
    .patch(`/countries/${id}`, updatedCountryData)
    .then((r) =>
      dispatch({
        type: actionTypes.UPDATE_COUNTRY_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: actionTypes.UPDATE_COUNTRY_FAILURE }));
};

export const deleteCountry = (id) => (dispatch) => {
  dispatch({ type: actionTypes.DELETE_COUNTRY_REQUEST });
  axios
    .delete(`/countries/${id}`)
    .then((r) =>
      dispatch({ type: actionTypes.DELETE_COUNTRY_REQUEST, payload: r.data })
    )
    .catch((e) => dispatch({ type: actionTypes.DELETE_COUNTRY_FAILURE }));
};
