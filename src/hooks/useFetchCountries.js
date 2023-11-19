import { useEffect, useState } from "react";
import { getCountries } from "service/country-service";

export const useFetchCountries = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, []);

  return { countries, loader, error };
};
