import instance from "./httpServices";

export const getInvoice = (invoiceNum: string) =>
  instance.get(`/getInvoice/${invoiceNum}`);
