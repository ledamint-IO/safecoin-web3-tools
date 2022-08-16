import { Commitment, Connection } from '@safecoin/web3.js';
export declare const getSlotAndCurrentBlockHash: (connection: Connection, commitment: Commitment) => Promise<[number, {
    blockhash: string;
    lastValidBlockHeight: number;
}]>;
