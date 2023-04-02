import { ICountry } from "../ts/interfaces";

const getCountryByName = (countryList: ICountry[], searchKeyword: string) => {
  if (countryList.length === 0 || !searchKeyword) {
    return [];
  }

  if (searchKeyword === "") {
    return countryList;
  }

  return countryList.filter(
    ({ name: { common, official }, cca2, cca3 }: ICountry) => {
      return (
        common.toUpperCase() === searchKeyword.toUpperCase() ||
        official.toUpperCase() === searchKeyword.toUpperCase() ||
        cca2.toUpperCase() === searchKeyword.toUpperCase() ||
        cca3.toUpperCase() === searchKeyword.toUpperCase()
      );
    }
  );
};

export default getCountryByName;
