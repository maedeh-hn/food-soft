import { getInvoice, getProductById } from "@/services/requestList.ts";
import InvoiceDetail from "@/src/components/invoice/InvoiceDetail";
import InvoiceTable from "@/src/components/invoice/InvoiceTable";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [invoiceNum, setInvoiceNum] = useState<string>();
  const [invoiceData, setInvoiceData] = useState<any>();
  const [invoceLoading, setInvoiceLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<any>();
  useEffect(() => {
    const handleProduct = async () => {
      // setInvoiceLoading(true);

      const responceProduct = await getProductById(invoiceData.id);
      if (responceProduct.status === 204 || responceProduct.status === 200) {
        console.log(responceProduct.data);
        setProducts(responceProduct.data);
        // setInvoiceLoading(false);
        // setInvoiceData(responce);
        // console.log(responce);
      }
    };
    if (invoiceData) {
      handleProduct();
    }
  }, [invoiceData]);
  const handleInvoic = async () => {
    setInvoiceLoading(true);
    if (invoiceNum) {
      const responce = await getInvoice(invoiceNum);
      if (responce.status === 204 || responce.status === 200) {
        setInvoiceLoading(false);
        setInvoiceData(responce?.data);
        console.log(responce);
      }
    }
  };
  return (
    <div
      className={` min-h-screen flex-col items-center justify-between py-24 max-w-[800px] bg-[#fff] w-full mx-auto px-[25px]`}
    >
      <div className="flex w-full  items-center gap-[15px] mb-[50px]">
        <p className="text-[18px] font-[700] text-[#2B2E4A] ">شماره فاکتور:</p>
        <input
          className="border-[1px] rounded-[10px] py-[10px] px-[10px]"
          onChange={(e) => {
            setInvoiceNum(e.target.value);
          }}
        />
        <button
          onClick={handleInvoic}
          className="border-[1px] border-[#53354A] bg-[#53354A] py-[10px] px-[10px] rounded-[10px] text-[#fff]"
        >
          جستجو
        </button>
      </div>

      {invoiceData ? (
        <div>
          <InvoiceDetail invoiceData={invoiceData} />
          <InvoiceTable products={products} />
        </div>
      ) : (
        <div className="text-center bg-[#FAF0E6] p-[20px] rounded-[10px] text-[#53354A]">
          {" "}
          {invoceLoading
            ? "لطفا منتظر بمانید..."
            : "مقداری برای نمایش وجود ندارد"}
        </div>
      )}
    </div>
  );
};

export default Index;
