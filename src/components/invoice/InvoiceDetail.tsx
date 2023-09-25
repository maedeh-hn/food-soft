import React from 'react'

type propTypes={
  invoiceData:any
}

const InvoiceDetail = ({invoiceData}:propTypes) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[50px] gap-y-4  border-[1px] border-[#B9B4C7] rounded-[10px] p-[20px]">
    <div className="text-right">
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          شماره رسید:
        </div>
        <div>{invoiceData?.receiptNumber}</div>
      </div>
    </div>
    <div>
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          نام مشتری:
        </div>
        <div>{invoiceData?.customerName}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          شماره موبایل:
        </div>
        <div>{invoiceData?.mobile}</div>
      </div>
    </div>
    <div>
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          آدرس:
        </div>
        <div>{invoiceData?.address}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          زمان تحویل پیک:
        </div>
        <div>{invoiceData?.courierDeliverTime}</div>
      </div>
    </div>
    <div>
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          توضیحات:
        </div>
        <div>{invoiceData?.description}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          وضعیت تسویه حساب:
        </div>
        <div>
          {invoiceData?.completeSettlement === true && "بله"}
          {invoiceData?.completeSettlement === false && "خیر"}
        </div>
      </div>
    </div>
    <div>
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          مبلغ تسویه حساب:
        </div>
        <div>{invoiceData?.settlementAmount}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          مبلغ مالیات:
        </div>
        <div>{invoiceData?.taxFee}</div>
      </div>
    </div>
    <div>
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          مقدار تخفیف:
        </div>
        <div>{invoiceData?.discountAmount}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          مبلغ کل:
        </div>
        <div>{invoiceData?.totalAmount}</div>
      </div>
    </div>
    <div>
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          نام پیک:
        </div>
        <div>{invoiceData?.courierName}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          دستمزد پیک:
        </div>
        <div>{invoiceData?.courierWage}</div>
      </div>
    </div>
    <div>
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          هزینه پیک:
        </div>
        <div>{invoiceData?.courierFee}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          نوع موجودی:
        </div>
        <div>{invoiceData?.balanceType}</div>
      </div>
    </div>
    <div>
      {" "}
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          نوع شیفت:
        </div>
        <div>{invoiceData?.shiftType}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          نوع فاکتور:
        </div>
        <div>{invoiceData?.invoiceType}</div>
      </div>
    </div>
    <div>
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          زمان سفارش:
        </div>
        <div>{invoiceData?.time}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          تاریخ سفارش:
        </div>
        <div>{invoiceData?.persianDate}</div>
      </div>
    </div>
    <div>
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          نام صندوقدار:
        </div>
        <div>{invoiceData?.cashierName}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          نام Pos:
        </div>
        <div>{invoiceData?.posName}</div>
      </div>
    </div>
    <div>
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          مقدار نقدی:
        </div>
        <div>{invoiceData?.cashAmount}</div>
      </div>
    </div>
    <div>
      <div className="flex gap-2">
        <div className="whitespace-nowrap font-[600] text-[#903749]">
          مقدار Pos:
        </div>
        <div>{invoiceData?.posAmount}</div>
      </div>
    </div>
  </div>
  )
}

export default InvoiceDetail