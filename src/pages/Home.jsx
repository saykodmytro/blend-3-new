import { Container, CountryList, Heading, Loader, Section } from "components";
import { useFetchCountries } from "hooks";

export const Home = () => {
  const { countries, loader, error } = useFetchCountries();
  console.log("countries: ", countries);

  return (
    <Section>
      <Container>
        <h2>Home</h2>
      </Container>
    </Section>
  );
};
