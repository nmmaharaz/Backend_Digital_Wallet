import { Types } from "mongoose";

export interface WalletStatus {
   ACTIVE : "ACTIVE",
   BLOCKED : "BLOCKED"
}

export interface IWallet {
  _id: Types.ObjectId;
  user: Types.ObjectId; // Reference to User
  balance: number;
  status: WalletStatus;
  lastTransactionAt?: Date;

  totalAdded?: number;
  totalWithdraw?: number;
  totalSent?: number;
  totalReceived?: number;
  transactionCount?: number;
  totalCashIn?: number;
  totalCashOut?: number;

  commissionRate?: number;
  totalCommissionEarned?: number;
}
