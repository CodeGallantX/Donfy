import { Request } from "../request/Request";
import { Transaction } from "../transaction/Transaction";

export type Item = {
  createdAt: Date;
  description: string | null;
  donor: string | null;
  id: string;
  itemName: string | null;
  requests?: Array<Request>;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
