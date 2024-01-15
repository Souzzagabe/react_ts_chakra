import { Center, VStack } from "@chakra-ui/react";
import { Header } from "./components/commons/Header";
import HorizontalCard from "./components/card/HorizontalCard";

import { Card } from "./components/card/Card";
import { horizontal_cards, cards } from "./compontents-mock.json";

function App() {
  return (
    <>
      <div>
        <Header/>
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
      </div>
    </>
  );
}

export default App;
