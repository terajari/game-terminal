import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem bg={"green.500"} area={"aside"}>
            aside
          </GridItem>
        </Show>
        <GridItem bg={"blue.500"} area={"main"}>
          main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
