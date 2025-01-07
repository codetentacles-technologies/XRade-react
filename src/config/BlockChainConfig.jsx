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
            XRADE_ADDRESS: "0x1a73449fdDbB9cbEE1916940118BC6A76dd8e6E5",
            XRADE_ABI: XRADE_ABI,
            USDT_TOKEN_ADDRESS: "0x821FfF7ea6Aa91A4303BaaFBBA205E37a072CF4D",
            USDT_TOKEN_ABI: USDT_TOKEN_ABI,
        },
    },
};

export const blockConfig = config[import.meta.env.VITE_ENV];
