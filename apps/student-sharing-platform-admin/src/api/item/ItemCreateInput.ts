import { RequestCreateNestedManyWithoutItemsInput } from "./RequestCreateNestedManyWithoutItemsInput";
import { TransactionCreateNestedManyWithoutItemsInput } from "./TransactionCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  description?: string | null;
  donor?: string | null;
  itemName?: string | null;
  requests?: RequestCreateNestedManyWithoutItemsInput;
  transactions?: TransactionCreateNestedManyWithoutItemsInput;
};
