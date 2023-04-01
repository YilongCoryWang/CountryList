import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer: CountrySearchReducer } = createSlice({
  name: "country",
  initialState: { countrySearch: "" },
  reducers: {
    updateCountrySearch(state, action) {
      state.countrySearch = action.payload;
    },
  },
});

export const { updateCountrySearch } = actions;
export default CountrySearchReducer;
