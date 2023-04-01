import React from "react";
import CountryList from "../components/CountryList";
import SearchBox from "../components/SearchBox";
import { updateCountrySearch } from "../store/countrySearch.slice";
import store from "../store";

const Home: React.FC = () => {
  const handleSearch = (e: any) => {
    store.dispatch(updateCountrySearch(e.target!.value.trim()));
    e.target!.value = "";
  };

  return (
    <>
      <SearchBox handleSearch={handleSearch}></SearchBox>
      <CountryList></CountryList>
    </>
  );
};

export default Home;
