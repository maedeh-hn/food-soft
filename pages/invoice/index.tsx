import { getInvoice } from "@/services/requestList.ts";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [invoiceNum, setInvoiceNum] = useState<string>();
  // useEffect(() => {

  //   }, [invoiceNum]);
  const handleInvoic = async () => {
    if (invoiceNum) {
      const responce = await getInvoice(invoiceNum);
      console.log(responce);
    }
  };
  return (
    <div
      className={` min-h-screen flex-col items-center justify-between pt-24 max-w-[800px] bg-[#fff] w-full mx-auto`}
    >
      <div className="flex w-full px-[25px] items-center gap-[15px]">
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
    </div>
  );
};

export default Index;
