import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import {
  Polygon,
  DAppProvider,
  Config,
} from "@usedapp/core";

const config: Config = {
  readOnlyChainId: Polygon.chainId,
  readOnlyUrls: {
    [Polygon.chainId]:
      "https://rpc-mainnet.maticvigil.com",
  },
};

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
