import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "giver";

export const TransactionTitle = (record: TTransaction): string => {
  return record.giver?.toString() || String(record.id);
};
