import { getCountryFullList, doCountrySearch } from "../../store/country.slice";
import store from "../../store";
import { barbados } from "../__components__/Barbados";

describe("countrySlice", () => {
  it("should get todo items correctly", () => {
    const mockCountryList = [barbados];
    store.dispatch(getCountryFullList(mockCountryList));

    expect(store.getState().country.countryAll).toEqual(mockCountryList);
  });

  it("should search country correctly", () => {
    const mockCountryListInitState = [barbados];
    store.dispatch(getCountryFullList(mockCountryListInitState));

    store.dispatch(doCountrySearch("Some Random Name"));
    expect(store.getState().country.filter.countryFiltered).toEqual([]);

    store.dispatch(doCountrySearch(barbados.name.common));
    expect(store.getState().country.filter.countryFiltered).toEqual(mockCountryListInitState);
  });
});
