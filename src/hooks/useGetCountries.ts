import getCountries from "../api/getCountries";
import { useQuery } from "react-query";

const useGetCountries = () => {
  return useQuery<any, Error>('get-countries', async () => {
    return await getCountries();
  }, {cacheTime: 5 * 60 * 1000, staleTime: 1 * 60 * 1000});
};

export default useGetCountries;