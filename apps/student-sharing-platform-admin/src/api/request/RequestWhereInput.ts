import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RequestWhereInput = {
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  requestDate?: DateTimeNullableFilter;
  requester?: StringNullableFilter;
};
