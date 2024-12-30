import XTRADE_ABI from "../assets/abi/xrade.json";
// This is the configuration for the Blockchain network.
const config = {
    prod: {
        56: {
            contractAddress: "",
        },
    },
    dev: {
        97: {
            XRADE_ADDRESS: "0xF99bba3bD4aeEf41504998a26545035a078A1025",
            XTRADE_ABI: XTRADE_ABI,
        },
    },
};

export const blockConfig = config[import.meta.env.VITE_ENV];
