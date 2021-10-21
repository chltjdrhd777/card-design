import React from "react";
import { Main, Container, CardsContainer } from "components/styled/Home.styled";
import Card from "components/Home/Card";

const cardInfo = [
  {
    id: 1,
    title: "Twitter",
    subTitle: "Twitter",
    description:
      "It is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card options",
    className: "twitter",
  },
  {
    id: 2,
    title: "instagram",
    subTitle: "instagram",
    description:
      "It is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card options",
    className: "instagram",
  },
  {
    id: 3,
    title: "facebook",
    subTitle: "facebook",
    description:
      "It is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionstest card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionstest card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card options",
    className: "facebook",
  },
  {
    id: 4,
    title: "youtube",
    subTitle: "youtube",
    description:
      "It is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card optionsIt is test card options",
    className: "youtube",
  },
];

function App() {
  return (
    <div className="App">
      <Main>
        <Container>
          <CardsContainer>
            {cardInfo.map(({ id, title, subTitle, description, className }) => (
              <Card
                key={id}
                title={title}
                subTitle={subTitle}
                description={description}
                className={className}
              />
            ))}
          </CardsContainer>
        </Container>
      </Main>
    </div>
  );
}

export default App;
