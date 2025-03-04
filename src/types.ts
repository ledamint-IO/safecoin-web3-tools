import { Signer, TransactionInstruction } from '@safecoin/web3.js';

export interface InstructionSet {
  signers: Signer[];
  instructions: TransactionInstruction[];
}
