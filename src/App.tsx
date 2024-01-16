import { Box, Center, VStack } from "@chakra-ui/react";
import { Header } from "./components/commons/Header";
import HorizontalCard from "./components/card/HorizontalCard";
import { Card } from "./components/card/Card/"
import { CardSlider } from "./components/carrousels/CardCarrousel";

import { horizontal_cards, cards, cards_carrousel } from "./compontents-mock.json";

function App() {

  return (
    <>
      <div>
        <Header />
        <Center background={"#31658B"} w="100vw">
          <Box maxW="1280px" overflow="hidden">
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
              {cards_carrousel && <CardSlider cards={cards_carrousel}/>}
          </Box>
        </Center>
      </div>
    </>
  );
}

export default App;
