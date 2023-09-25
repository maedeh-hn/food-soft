import React from 'react'
type propTypes={
    products:any
  }
const InvoiceTable = ({products}:propTypes) => {
  return (
    <div className="w-full w-full overflow-x-auto pt-[50px]">
    <table className="w-full border-collapse border border-[#B9B4C7] ">
 
      <thead className="">
        <tr className="bg-[#E84545]">
          <th className="border border-[#B9B4C7] px-4 py-2 ">نام محصول</th>
          
          <th className="border border-[#B9B4C7] px-4 py-2">قیمت</th>
          <th className="border border-[#B9B4C7] px-4 py-2">تعداد</th>
          <th className="border border-[#B9B4C7] px-4 py-2">قیمت کل</th>
        </tr>
      </thead>
      <tbody className="">
        {products?.map((product:any, index:any) => (
          <tr key={index} className={(index % 2 === 0) ? '' : 'bg-[#FAF0E6]'}>
            <td className="border border-[#B9B4C7] px-4 py-2">{product.productName}</td>
           
            <td className="border border-[#B9B4C7] px-4 py-2">{product.price}</td>
            <td className="border border-[#B9B4C7] px-4 py-2">{product.count}</td>
            <td className="border border-[#B9B4C7] px-4 py-2">{product.totalPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default InvoiceTable