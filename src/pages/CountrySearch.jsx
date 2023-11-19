import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useFetchCountryQuery } from 'hooks/useFetchCountryQuery';

export const CountrySearch = () => {
  const {countries, loader, error, onHandleSubmit } = useFetchCountryQuery();

  return (
    <Section>
      <Container>
       <SearchForm
       onSubmit ={onHandleSubmit}/>
        {loader && <Loader/>}
        {error && <Heading
        textAlign ='center'>Something went wrong</Heading>}
        {countries.length > 0 && <CountryList
        countries={countries}/>}
      </Container>
    </Section>
  );
};
