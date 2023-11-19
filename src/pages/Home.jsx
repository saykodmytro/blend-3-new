import { Container, CountryList, Heading, Loader, Section } from "components";
import { useFetchCountries } from "hooks";

export const Home = () => {
  const { countries, loader, error } = useFetchCountries();
  
  return (
    <Section>
      <Container>
        {loader && <Loader/>}
        {error && <Heading
        textAlign ='center'>Something went wrong</Heading>}
        {countries.length > 0 && <CountryList
        countries={countries}/>}

      </Container>
    </Section>
  );
};
