import BigNumber from 'bignumber.js';
import { TokenOption } from '../../../features/swap/components/swap-form/models/swap-form-types';
import { BlockchainName } from '../../constants/blockchain-names';
import { SwapFormState } from './model';

export const SwapFormMutations = {
    setFromToken(state: SwapFormState, token: Partial<TokenOption>): void {
        state.from = { ...state.from, address: token.address!, symbol: token.value! };
    },
    setToToken(state: SwapFormState, token: Partial<TokenOption>): void {
        state.to = { ...state.to, address: token.address!, symbol: token.value! };
    },
    setFromDecimals(state: SwapFormState, decimals: number): void {
        state.from = { ...state.from, decimals };
    },
    setToDecimals(state: SwapFormState, decimals: number): void {
        state.to = { ...state.to, decimals };
    },
    setFromBlockchain(state: SwapFormState, blockchain: BlockchainName): void {
        state.from = { ...state.from, blockchain };
    },
    setToBlockchain(state: SwapFormState, blockchain: BlockchainName): void {
        state.to = { ...state.to, blockchain };
    },
    setFromAmount(state: SwapFormState, amount: BigNumber): void {
        state.from.amount = amount;
    }
};

export type SwapFormMutationsType = keyof typeof SwapFormMutations;
