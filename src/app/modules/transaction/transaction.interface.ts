import { Types } from "mongoose";



export interface TransactionType {
    ADD: "ADD",
    WITHDRAW: "WITHDRAW",
    SEND: "SEND"
}

export interface TransactionStatus {
    PENDING: "PENDING",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED"
}

export interface ITransaction {
    _id: Types.ObjectId;
    from: Types.ObjectId; // Sender Wallet/User ID
    to: Types.ObjectId;   // Receiver Wallet/User ID
    type: TransactionType;
    amount: number;
    fee: number;
    status: TransactionStatus;
}
