import { createSlice } from "@reduxjs/toolkit";
import getCountryByName from "../helpers/getCountryByName"
import { ICountry } from "../ts/interfaces";

const { actions, reducer: CountryReducer } = createSlice({
  name: "country",
  initialState: { countryAll: [] as ICountry[], filter: {keyword: "", countryFiltered: [] as ICountry[]} },
  reducers: {
    getCountryFullList(state, action) {
      state.countryAll = action.payload;
      state.filter.countryFiltered = action.payload;
    },
    doCountrySearch(state, action) {
      const searchKeyword = action.payload;
      state.filter.keyword = searchKeyword;
      state.filter.countryFiltered = getCountryByName(state.countryAll, searchKeyword);
    },
  },
});

export const { getCountryFullList, doCountrySearch } = actions;
export default CountryReducer;
