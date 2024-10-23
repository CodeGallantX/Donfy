import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  createdAt?: SortOrder;
  giver?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  receiver?: SortOrder;
  transactionDate?: SortOrder;
  updatedAt?: SortOrder;
};
