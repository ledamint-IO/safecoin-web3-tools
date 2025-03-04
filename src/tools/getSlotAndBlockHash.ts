import { Commitment, Connection } from '@safecoin/web3.js';

export const getSlotAndCurrentBlockHash = (
  connection: Connection,
  commitment: Commitment,
) =>
  Promise.all([
    connection.getSlot(commitment),
    connection.getLatestBlockhash(commitment),
  ]);
