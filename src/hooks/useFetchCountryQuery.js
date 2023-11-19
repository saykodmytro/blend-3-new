import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const useFetchCountryQuery = () => {
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(null);
	const [countries, setCountries] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("q");

	useEffect(() => {
		if(!query) return;
		setLoader(true);
		const fetchData = async () => {
		  try {
			const data = await fetchByRegion(query);
			setCountries(data);
		  } catch (error) {
			setError(error);
		  } finally {
			setLoader(false);
		  }
		};
		fetchData();
	  }, [query]);
	  const onHandleSubmit =(value) =>{
		setSearchParams({q: value})
	  }
  return ({ countries, loader, error, onHandleSubmit });
}
