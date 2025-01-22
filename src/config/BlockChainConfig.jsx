import XRADE_ABI from "../assets/abi/xrade.json";
import USDT_TOKEN_ABI from "../assets/abi/usdt-token.json";
// This is the configuration for the Blockchain network.
const config = {
    prod: {
        56: {
            XRADE_ADDRESS: "0xDe33610B195A3200143415eddCaf6c6baFD54Ec4",
            XRADE_ABI: XRADE_ABI,
            USDT_TOKEN_ADDRESS: "0x55d398326f99059fF775485246999027B3197955",
            USDT_TOKEN_ABI: USDT_TOKEN_ABI,
            ADMIN_ADDRESS: "0xd5D5dDc96C7204a589f6C8b59fF2dd4b8eb07061",
        },
    },
    dev: {
        97: {
            XRADE_ADDRESS: "0x1c2E5c3780C734AFf50D70E23577CC63FE3B9c99",
            XRADE_ABI: XRADE_ABI,
            USDT_TOKEN_ADDRESS: "0x821FfF7ea6Aa91A4303BaaFBBA205E37a072CF4D",
            USDT_TOKEN_ABI: USDT_TOKEN_ABI,
            ADMIN_ADDRESS: "0xA8655F82b083407D1567dc848D6f28C48E3D77FB",
        },
    },
};

export const blockConfig = config[import.meta.env.VITE_ENV];
