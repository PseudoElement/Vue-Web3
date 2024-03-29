import { BLOCKCHAIN_NAMES } from '../../../../constants/blockchain-names';
import { UniswapV2SupportedChain } from './uniswap-v2-supported-blockchains';

export const UNISWAP_V2_CONTRACT_ADDRESS: Record<UniswapV2SupportedChain, string> = {
    [BLOCKCHAIN_NAMES.ETHEREUM]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
    // [BLOCKCHAIN_NAMES.POLYGON]: '0xa5e0829caced8ffdd4de3c43696c57f7d7a678ff',
    // [BLOCKCHAIN_NAMES.BNB]: '0xb971ef87ede563556b2ed4b1c0b0019111dd85d2'
};
