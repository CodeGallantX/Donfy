import { RequestUpdateManyWithoutItemsInput } from "./RequestUpdateManyWithoutItemsInput";
import { TransactionUpdateManyWithoutItemsInput } from "./TransactionUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  description?: string | null;
  donor?: string | null;
  itemName?: string | null;
  requests?: RequestUpdateManyWithoutItemsInput;
  transactions?: TransactionUpdateManyWithoutItemsInput;
};
