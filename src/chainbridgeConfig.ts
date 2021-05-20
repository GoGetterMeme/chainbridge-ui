import ETHIcon from "./media/tokens/eth.svg";
import WETHIcon from "./media/tokens/weth.svg";

export type TokenConfig = {
  address: string;
  name?: string;
  symbol?: string;
  imageUri?: string;
  resourceId: string;
  isNativeWrappedToken?: boolean;
};

export type BridgeConfig = {
  chainId: number;
  networkId: number;
  name: string;
  bridgeAddress: string;
  erc20HandlerAddress: string;
  rpcUrl: string;
  type: "Ethereum" | "Substrate";
  tokens: TokenConfig[];
  nativeTokenSymbol: string;
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string;
  defaultGasPrice?: number;
  deployedBlockNumber?: number;
};

export type ChainbridgeConfig = {
  chains: BridgeConfig[];
};

export const chainbridgeConfig: ChainbridgeConfig = {
  // Goerli - Kotti Bridge
  chains: [
    {
      chainId: 1,
      networkId: 5,
      name: "Ethereum - Goerli",
      bridgeAddress: "0x2524d71D163f60747630c4EBeB077a9832329646",
      erc20HandlerAddress: "0xDc26320258ADfd806d125223Fb0F94e54D13FA51",
      rpcUrl: "https://goerli.prylabs.net",
      type: "Ethereum",
      blockExplorer: "https://goerli.etherscan.io/tx",
      nativeTokenSymbol: "ETH",
      deployedBlockNumber: 3554182,
      tokens: [
        {
          address: "0x735B895bCb37cBba5812154f4F34480EcE1B672C",
          name: "Wrapped ETC",
          symbol: "wETC",
          imageUri: WETHIcon,
          resourceId:
            "0x000000000000000000000023A9FD05ef0c5fb9dDE964C4d4191A169Fd221f802",
        },
        {
          address: "0x8e769778a900dafebcd309408263f85f5941c299",
          name: "Xerxes",
          symbol: "XRX",
          imageUri: ETHIcon,
          resourceId:
            "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00",
        },
      ],
    },
    {
      chainId: 4,
      networkId: 4,
      name: "Ethereum - Rinkeby",
      bridgeAddress: "0x2524d71D163f60747630c4EBeB077a9832329646",
      erc20HandlerAddress: "0xDc26320258ADfd806d125223Fb0F94e54D13FA51",
      rpcUrl: "https://rinkeby.infura.io/v3/undefined",
      type: "Ethereum",
      blockExplorer: "https://rinkeby.etherscan.io",
      nativeTokenSymbol: "ETH",
      deployedBlockNumber: 0,
      tokens: [
        {
          address: "0x23A9FD05ef0c5fb9dDE964C4d4191A169Fd221f8",
          name: "Wrapped ETC",
          symbol: "wETC",
          imageUri: WETHIcon,
          resourceId:
            "0x000000000000000000000023A9FD05ef0c5fb9dDE964C4d4191A169Fd221f802",
          isNativeWrappedToken: true,
        },
        {
          address: "0x1847846a2f532e07255079050bdeaa10d1e5913a",
          name: "Xerxes",
          symbol: "XRX",
          imageUri: ETHIcon,
          resourceId:
            "0x000000000000000000000014dD060dB55c0E7cc072BD3ab4709d55583119c001",
          isNativeWrappedToken: false,
        },
      ],
    },
  ],

  // DEVNET
  //   erc20ResourceId:
  //   "0x00000000000000000000000021605f71845f372A9ed84253d2D024B7B10999f4",
  // chains: [
  // {
  //   chainId: 1,
  //   networkId: 5,
  //   name: "Ethereum - A",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8545",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthA",
  //       symbol: "TESTA",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // {
  //   chainId: 2,
  //   networkId: 6,
  //   name: "Ethereum - B",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8546",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthB",
  //       symbol: "TESTB",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // ]
};
