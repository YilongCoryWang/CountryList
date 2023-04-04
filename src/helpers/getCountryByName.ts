import { ICountry } from "../ts/interfaces";

const getCountryByName = (countryList: ICountry[], searchKeyword: string) => {
  const countryName = searchKeyword.replace(/\s/g, "").trim()
  if (countryList.length === 0 || !countryName || !/^[a-zA-Z]{2,50}$/.test(countryName)) {
    return [];
  }

  if (countryName === "") {
    return countryList;
  }

  return countryList.filter(
    ({ name: { common, official }, cca2, cca3 }: ICountry) => {
      return (
        common.toUpperCase() === countryName.toUpperCase() ||
        official.toUpperCase() === countryName.toUpperCase() ||
        cca2.toUpperCase() === countryName.toUpperCase() ||
        cca3.toUpperCase() === countryName.toUpperCase()
      );
    }
  );
};

export default getCountryByName;
