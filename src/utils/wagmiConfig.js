import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { baseSepolia } from 'viem/chains';

export const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: "81a7a2db0f28777045791dbfda807b9b",
  chains: [baseSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
