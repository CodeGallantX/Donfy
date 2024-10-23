import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RequestListRelationFilter } from "../request/RequestListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type ItemWhereInput = {
  description?: StringNullableFilter;
  donor?: StringNullableFilter;
  id?: StringFilter;
  itemName?: StringNullableFilter;
  requests?: RequestListRelationFilter;
  transactions?: TransactionListRelationFilter;
};
