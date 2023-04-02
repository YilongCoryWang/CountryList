import { ICountry } from "../ts/interfaces";

async function getCountries(): Promise<ICountry> {
  const result = await fetch(process.env.REACT_APP_COUNTRY_LIST_URL as string);
  const data = await result.json();
  if (!result.ok) throw Error(data.message);
  return data;
}

export default getCountries;
