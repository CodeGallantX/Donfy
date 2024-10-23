import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type RequestCreateInput = {
  item?: ItemWhereUniqueInput | null;
  requestDate?: Date | null;
  requester?: string | null;
};
