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
      let newUpdatedCountry = state.countries.map((item) =>
        item.id === payload.id ? payload : item
      );

      return {
        ...state,
        countries: newUpdatedCountry,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
  return state;
};
