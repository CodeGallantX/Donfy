import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  donor?: SortOrder;
  id?: SortOrder;
  itemName?: SortOrder;
  updatedAt?: SortOrder;
};
