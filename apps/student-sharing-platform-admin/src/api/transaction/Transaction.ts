import { Item } from "../item/Item";

export type Transaction = {
  createdAt: Date;
  giver: string | null;
  id: string;
  item?: Item | null;
  receiver: string | null;
  transactionDate: Date | null;
  updatedAt: Date;
};
