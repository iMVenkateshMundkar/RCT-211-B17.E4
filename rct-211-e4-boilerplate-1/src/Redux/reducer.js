import * as actionTypes from "./actionTypes";

const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_COUNTRIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case actionTypes.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: payload,
        isLoading: false,
        isError: false,
      };

    case actionTypes.GET_COUNTRIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.UPDATE_COUNTRY_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case actionTypes.UPDATE_COUNTRY_SUCCESS:
      let newUpdatedCountries = state.countries.map((item) =>
        item.id === payload.id ? payload : item
      );

      return {
        ...state,
        countries: newUpdatedCountries,
        isLoading: false,
        isError: false,
      };

    case actionTypes.UPDATE_COUNTRY_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.DELETE_COUNTRY_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case actionTypes.DELETE_COUNTRY_SUCCESS:
      let newDeletedCountries = state.countries.filter(
        (item) => item.id !== payload
      );

      return {
        ...state,
        countries: newDeletedCountries,
        isLoading: false,
        isError: false,
      };

    case actionTypes.DELETE_COUNTRY_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
