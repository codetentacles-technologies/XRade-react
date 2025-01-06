import XRADE_ABI from "../assets/abi/xrade.json";
import USDT_TOKEN_ABI from "../assets/abi/usdt-token.json";
// This is the configuration for the Blockchain network.
const config = {
    prod: {
        56: {
            contractAddress: "",
        },
    },
    dev: {
        97: {
            XRADE_ADDRESS: "0x5b306E712bB547831Ed07b5DC17b670810fA0238",
            XRADE_ABI: XRADE_ABI,
            USDT_TOKEN_ADDRESS: "0x821FfF7ea6Aa91A4303BaaFBBA205E37a072CF4D",
            USDT_TOKEN_ABI: USDT_TOKEN_ABI,
        },
    },
};

export const blockConfig = config[import.meta.env.VITE_ENV];
