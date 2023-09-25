import instance from "./httpServices";

export const getInvoice = (invoiceNum: string) =>
  instance.get(`/getInvoice/${invoiceNum}`);

  export const getProductById = (invoiceId: string) =>
  instance.get(`/getProductsByInvoiceId/${invoiceId}`);

  export const getCustomer = (name: string) =>
  instance.get(`/getCustomers/${name}`);
