async function getCountries(): Promise<any> {
  const result = await fetch(process.env.REACT_APP_COUNTRY_LIST_URL as string);
  const data = await result.json();
  if (!result.ok) throw Error(data.message);
  return data;
}

export default getCountries;
