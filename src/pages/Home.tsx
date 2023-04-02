import React, { useEffect } from "react";
import CountryList from "../components/CountryList";
import SearchBox from "../components/SearchBox";
import {
  getCountryFullList,
  doCountrySearch,
} from "../store/country.slice";
import store from "../store";
import Loading from "../components/share/Loading";
import ErrorMessage from "../components/share/ErrorMessage";
import useGetCountries from "../hooks/useGetCountries";

const Home: React.FC = () => {
  const {
    data: countryList,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetCountries();

  useEffect(() => {
    if (isSuccess) {
      store.dispatch(getCountryFullList(countryList));
    }
  }, [countryList, isSuccess]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <ErrorMessage
        error={`Opps, countries could not be retrieved: ${error.message}`}
      />
    );
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(doCountrySearch(e.target!.value.trim()));
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
