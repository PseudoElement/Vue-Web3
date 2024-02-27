import { BLOCKCHAIN_NAMES } from '../../../../core/constants/blockchain-names';
import { PancakeSwapV2SupportedChain } from './pancakeswap-v2-supported-chains';

export const PANCAKESWAP_V2_CONTRACT_ADDRESS: Record<PancakeSwapV2SupportedChain, string> = {
    [BLOCKCHAIN_NAMES.ETHEREUM]: '0xEfF92A263d31888d860bD50809A8D171709b7b1c',
    [BLOCKCHAIN_NAMES.BNB]: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    [BLOCKCHAIN_NAMES.ARBITRUM]: '0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb',
    [BLOCKCHAIN_NAMES.LINEA]: '0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb',
    [BLOCKCHAIN_NAMES.BASE]: '0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb'
};
