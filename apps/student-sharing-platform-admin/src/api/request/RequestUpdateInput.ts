import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type RequestUpdateInput = {
  item?: ItemWhereUniqueInput | null;
  requestDate?: Date | null;
  requester?: string | null;
};
