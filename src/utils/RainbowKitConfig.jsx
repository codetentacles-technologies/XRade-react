import "@rainbow-me/rainbowkit/styles.css";
import {
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { createConfig, http } from "wagmi";
import { QueryClient } from "@tanstack/react-query";
import {
  walletConnectWallet,
  metaMaskWallet,
  trustWallet,
} from "@rainbow-me/rainbowkit/wallets";
import {  bsc, bscTestnet } from "viem/chains";


// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "86203b1826ce3273c5d9478876b27a53";  

const testNetworks = [bscTestnet];
const mainNetworks = [bsc];

const transportstest = {
  [bscTestnet.id]: http(),
};
const transportMain = {
  [bsc.id]: http(),
};

export const chains = import.meta.env.VITE_ENV === "dev" ? testNetworks : mainNetworks;
const transports = import.meta.env.VITE_ENV === "dev" ? transportstest : transportMain

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [metaMaskWallet, walletConnectWallet, trustWallet],
    },
  ],
  {
    appName: "My RainbowKit App",
    projectId: projectId,
  }
);

export const configRead = createConfig({
  connectors,
  chains: chains,
  transports: transports,
});


export const queryClient = new QueryClient();
