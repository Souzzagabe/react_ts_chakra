import { Center, VStack } from "@chakra-ui/react";
import { Header } from "./components/commons/Header";
import HorizontalCard from "./components/card/HorizontalCard";
import { horizontal_cards, cards } from "./compontents-mock.json";
import { Card } from "./components/card/Card/Card";

import { Slider, Slide, SliderProps } from "./components/commons/slider"

function App() {

  const settings: SliderProps = {
    spaceBetween: 5,
    slidesPerView: 2,
    slidesPerGroup: 2,
    navigation: true,
    pagination: {
      clickable: true,
    },
    loop: true,
  }

  return (
    <>
      <div>
        <Header />
        <Center background={"#31658B"} w="100vw">
          <VStack gap={"64px"}>
            {horizontal_cards.map((horizontal_card) => (
              <HorizontalCard
                key={horizontal_card.title}
                card={horizontal_card}
              />
            ))}
            {cards.map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </VStack>
        </Center>
        
        <Slider settings={settings}>
              <Slide>
                <h1>Teste1</h1>
              </Slide>
              <Slide>
                <h1>Teste2</h1>
              </Slide>
              <Slide>
                <h1>Teste3</h1>
              </Slide>
        </Slider>
      </div>
    </>
  );
}

export default App;
