import { Box, Center, VStack } from "@chakra-ui/react";
import { Header } from "./components/commons/Header";
import Footer from "./components/commons/footer/Footer";
import HorizontalCard from "./components/card/Card/HorizontalCard/HorizontalCard";
import { Card } from "./components/card/Card/";
import { CardSlider } from "./components/carrousels/CardCarrousel";
import {
  horizontal_cards,
  cards,
  cards_carrousel,
} from "./components-mock.json";
import { MappedRoutes } from "./routes";

function App() {
  return (
    <>
      <div>
        <MappedRoutes />
        <Header />
        <Center background={"#14151E"} w="100vw">
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
            {cards_carrousel && <CardSlider cards={cards_carrousel} />}
          </Box>
        </Center>
        <Footer />
      </div>
    </>
  );
}

export default App;
