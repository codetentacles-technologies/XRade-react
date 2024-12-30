import { createPublicClient, http } from "viem";
import { useAccount } from "wagmi";
import { bsc, bscTestnet } from "viem/chains";
import { chains } from "../utils/RainbowKitConfig";

const networkList = {
    97: bscTestnet,
    56 : bsc,
};

function useWaitForTransaction() {
    const { chainId, isConnected } = useAccount();

    if (isConnected && chainId === chains[0].id) {
        var publicClient = createPublicClient({
            chain: networkList[chainId],
            transport: http(),
        });
    }

    const waitForTransaction = async (hash, delayMs = 7000) => {
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        try {
            const result = await publicClient.waitForTransactionReceipt({
                hash: hash,
            });
            await delay(delayMs);
            return result;
        } catch (error) {
            throw error;
        }
    };

    return {
        waitForTransaction,
        publicClient,
    };
}

export default useWaitForTransaction;
