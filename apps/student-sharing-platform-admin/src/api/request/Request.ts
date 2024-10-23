import { Item } from "../item/Item";

export type Request = {
  createdAt: Date;
  id: string;
  item?: Item | null;
  requestDate: Date | null;
  requester: string | null;
  updatedAt: Date;
};
