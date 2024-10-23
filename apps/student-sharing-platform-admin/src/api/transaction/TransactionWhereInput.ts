import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  giver?: StringNullableFilter;
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  receiver?: StringNullableFilter;
  transactionDate?: DateTimeNullableFilter;
};
