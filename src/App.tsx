import { Center } from "@chakra-ui/react"
import { Header } from "./components/commons/Header"
import VerticalCard from "./components/card/VerticalCard"

import { vertical_cards } from './compontents-mock.json'


function App() {

  return (
    <>
      <div>
        <Header />
        <Center>
          {vertical_cards.map((vertical_card) => (
            <VerticalCard
              key={vertical_card.title}
              title={vertical_card.title}
              content={vertical_card.content}
              image={vertical_card.image}
              publishDate={vertical_card.publish_date}
            />
          ))}
        </Center>
      </div>
    </>
  )
}

export default App
