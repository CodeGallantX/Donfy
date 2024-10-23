import { SortOrder } from "../../util/SortOrder";

export type RequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  requestDate?: SortOrder;
  requester?: SortOrder;
  updatedAt?: SortOrder;
};
