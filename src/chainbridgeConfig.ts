// import ETHIcon from "./media/tokens/eth.svg";
// import WETHIcon from "./media/tokens/weth.svg";

// export type TokenConfig = {
//   address: string;
//   name?: string;
//   symbol?: string;
//   imageUri?: string;
//   resourceId: string;
//   isNativeWrappedToken?: boolean;
// };

// export type BridgeConfig = {
//   chainId: number;
//   networkId: number;
//   name: string;
//   bridgeAddress: string;
//   erc20HandlerAddress: string;
//   rpcUrl: string;
//   type: "Ethereum" | "Substrate";
//   tokens: TokenConfig[];
//   nativeTokenSymbol: string;
//   //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
//   blockExplorer?: string;
//   defaultGasPrice?: number;
//   deployedBlockNumber?: number;
// };

// export type ChainbridgeConfig = {
//   chains: BridgeConfig[];
// };

// import { ChainId, Token } from '@zeroexchange/sdk';

export type TokenConfig = {
  chainId?: string
  address: string
  decimals: number
  name?: string
  symbol?: string
  imageUri?: string
  resourceId: string
  isNativeWrappedToken?: boolean
  assetBase: string
  disableTransfer?: boolean;
}

export type BridgeConfig = {
  chainId: number
  networkId: number
  name: string
  bridgeAddress: string
  erc20HandlerAddress: string
  rpcUrl: string
  gasLimit?: number
  type: 'Ethereum' | 'Substrate'
  tokens: TokenConfig[]
  nativeTokenSymbol: string
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string
  defaultGasPrice?: number
}

export type ChainbridgeConfig = {
  chains: BridgeConfig[]
}

export const chainbridgeConfig: ChainbridgeConfig = {
  // Goerli - Kotti Bridge
  // chains: [
  //   {
  //     chainId: 1,
  //     networkId: 5,
  //     name: "Ethereum - Goerli",
  //     bridgeAddress: "0x2524d71D163f60747630c4EBeB077a9832329646",
  //     erc20HandlerAddress: "0xDc26320258ADfd806d125223Fb0F94e54D13FA51",
  //     rpcUrl: "https://goerli.prylabs.net",
  //     type: "Ethereum",
  //     blockExplorer: "https://goerli.etherscan.io/tx",
  //     nativeTokenSymbol: "ETH",
  //     deployedBlockNumber: 3554182,
  //     tokens: [
  //       {
  //         address: "0x735B895bCb37cBba5812154f4F34480EcE1B672C",
  //         name: "Wrapped ETC",
  //         symbol: "wETC",
  //         imageUri: WETHIcon,
  //         resourceId:
  //           "0x000000000000000000000023A9FD05ef0c5fb9dDE964C4d4191A169Fd221f802",
  //       },
  //       {
  //         address: "0x14dD060dB55c0E7cc072BD3ab4709d55583119c0",
  //         name: "An ERC20",
  //         symbol: "ERC20",
  //         imageUri: ETHIcon,
  //         resourceId:
  //           "0x000000000000000000000014dD060dB55c0E7cc072BD3ab4709d55583119c001",
  //       },
  //     ],
  //   },
  //   {
  //     chainId: 2,
  //     networkId: 6,
  //     name: "Ethereum Classic - Kotti",
  //     bridgeAddress: "0x2524d71D163f60747630c4EBeB077a9832329646",
  //     erc20HandlerAddress: "0xDc26320258ADfd806d125223Fb0F94e54D13FA51",
  //     rpcUrl: "https://www.ethercluster.com/kotti",
  //     type: "Ethereum",
  //     blockExplorer: "https://blockscout.com/etc/kotti/tx",
  //     nativeTokenSymbol: "ETC",
  //     deployedBlockNumber: 0,
  //     tokens: [
  //       {
  //         address: "0x23A9FD05ef0c5fb9dDE964C4d4191A169Fd221f8",
  //         name: "Wrapped ETC",
  //         symbol: "wETC",
  //         imageUri: WETHIcon,
  //         resourceId:
  //           "0x000000000000000000000023A9FD05ef0c5fb9dDE964C4d4191A169Fd221f802",
  //         isNativeWrappedToken: true,
  //       },
  //       {
  //         address: "0x14dD060dB55c0E7cc072BD3ab4709d55583119c0",
  //         name: "An ERC20",
  //         symbol: "ERC20",
  //         imageUri: ETHIcon,
  //         resourceId:
  //           "0x000000000000000000000014dD060dB55c0E7cc072BD3ab4709d55583119c001",
  //       },
  //     ],
  //   },
  // ],


  chains: [
    {
      chainId: 4,
      networkId: 4,
      name: "Rinkeby",
      bridgeAddress: "0x06E4d0FCd55eacb617dFCd0C5e75D8b005894bD2",
      erc20HandlerAddress: "0x754977d76601b473474Ba8FBac0Fa2A20Aa84694",
      rpcUrl: "https://rinkeby.infura.io/v3/45174a29359d4b07ade01676259bc47a",
      type: "Ethereum",
      blockExplorer: "https://ropsten.etherscan.io/tx",
      nativeTokenSymbol: "ETH",
      tokens: [
        {
          address: "0x6Cfe8eA9cb32dcf1Cd7188fA68366c099a8FfC7E",
          name: "wETH",
          symbol: "wETH",
          assetBase: 'ETH',
          decimals: 18,
          resourceId:
            "0x00000000000000000000006Cfe8eA9cb32dcf1Cd7188fA68366c099a8FfC7E00",
        },
        {
          address: "0x86d646e76806dcd652a5afa7aaa20d428b76a356",
          name: "USDT",
          symbol: "USDT",
          assetBase: 'USDT',
          decimals: 18,
          resourceId:
            "0x000000000000000000000086D646e76806DCD652a5aFA7AaA20D428B76A35600",
        },
        {
          address: "0xA49992e58b3242852DE6D6c8c5B01e3f16Ec1c0a",
          name: "wBTC",
          symbol: "wBTC",
          assetBase: 'wBTC',
          decimals: 18,
          resourceId:
            "0x0000000000000000000000A49992e58b3242852DE6D6c8c5B01e3f16Ec1c0a00",
        },
        {
          address: "0x790Bdb1d44EcE3e6b45F3D4307C08e4636365D24",
          name: "wUSDC",
          symbol: "wUSDC",
          assetBase: 'wUSDC',
          decimals: 18,
          resourceId:
            "0x0000000000000000000000790Bdb1d44EcE3e6b45F3D4307C08e4636365D2400",
        },
      ],
    },
    {
      chainId: 5,
      networkId: 43113,
      name: "Avalanche",
      bridgeAddress: "0xeef5d5C87cDD5F1c2ec89AC6c7B86EeB76299603",
      erc20HandlerAddress: "0x267d83dD863cbc4E7926CbF776E392a937C65533",
      rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
      type: "Ethereum",
      blockExplorer: "https://blockscout.com/etc/kotti/tx",
      nativeTokenSymbol: "AVAX",
      defaultGasPrice: 225,
      tokens: [
        {
          address: "0xbe113Dc920b8774c3f03195D6b3445F9B7884C2D",
          name: "zETH",
          symbol: "zETH",
          assetBase: 'ETH',
          decimals: 18,
          resourceId:
            "0x0000000000000000000000be113Dc920b8774c3f03195D6b3445F9B7884C2D01",
        },
        {
          address: "0x1569c1edc28F7141Cf5FdE18f27e5E4db6E85a34",
          name: "zUSDT",
          symbol: "zUSDT",
          assetBase: 'USDT',
          decimals: 18,
          resourceId:
            "0x00000000000000000000001569c1edc28F7141Cf5FdE18f27e5E4db6E85a3401",
        },
        {
          address: "0xBdc570Df37814c873C3a9bCF3751E52A36758d2f",
          name: "zBTC",
          symbol: "zBTC",
          assetBase: 'BTC',
          decimals: 18,
          resourceId:
            "0x0000000000000000000000Bdc570Df37814c873C3a9bCF3751E52A36758d2f01",
        },
        {
          address: "0x961b714a7d2c4B263fcB91b26a5CFd6268b874ec",
          name: "zUSDC",
          symbol: "zUSDC",
          assetBase: 'USDC',
          decimals: 18,
          resourceId:
            "0x0000000000000000000000961b714a7d2c4B263fcB91b26a5CFd6268b874ec01",
        },
      ],
    }
  ],
};

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
// };
