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
            XRADE_ADDRESS: "0xC847583DA1496BB5993146Dc28A375895478451B",
            XRADE_ABI: XRADE_ABI,
            USDT_TOKEN_ADDRESS: "0x821FfF7ea6Aa91A4303BaaFBBA205E37a072CF4D",
            USDT_TOKEN_ABI: USDT_TOKEN_ABI,
            ADMIN_ADDRESS: "0xA8655F82b083407D1567dc848D6f28C48E3D77FB",
        },
    },
};

export const blockConfig = config[import.meta.env.VITE_ENV];
