import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type TransactionUpdateInput = {
  giver?: string | null;
  item?: ItemWhereUniqueInput | null;
  receiver?: string | null;
  transactionDate?: Date | null;
};
