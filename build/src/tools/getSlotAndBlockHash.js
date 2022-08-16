"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSlotAndCurrentBlockHash = void 0;
const getSlotAndCurrentBlockHash = (connection, commitment) => Promise.all([
    connection.getSlot(commitment),
    connection.getLatestBlockhash(commitment),
]);
exports.getSlotAndCurrentBlockHash = getSlotAndCurrentBlockHash;
