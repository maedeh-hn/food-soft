import { getCustomer } from "@/services/requestList.ts";
import React, { useEffect, useState } from "react";
import moment from "jalali-moment";

// form

// @mui
import {TextField} from '@mui/material';

import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';


import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromDate,setFromDate]= useState();
  const [customerId,setCustomerId]=useState()
  const [filteredData, setFilteredData] = useState([]);
  const [customerLoading, setCustomerLoading] = useState(false);
  const [customerNames, setCustomerNames] = useState();
  
 const fDateTimeToUTC=(date)=> {
    try {
      let result = moment(date, 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DDTHH:mm:ss.sssZ');
      return result === 'Invalid date' ? '' : result
    } catch (e) {
      return null
    }
  }
  // const handleInvoic = async (e:any) => {
  //     setCustomerLoading(true);
  //     if (invoiceNum) {
  //       const responce = await getInvoice(invoiceNum);
  //       if (responce.status === 204 || responce.status === 200) {
  //         setCustomerLoading(false);
  //         setInvoiceData(responce?.data);
  //         console.log(responce);
  //       }
  //     }
  //   };
  useEffect(() => {
    const handleCustomersName = async () => {
      setCustomerLoading(true);

      const responce = await getCustomer(inputValue);
      if (responce.status === 204 || responce.status === 200) {
        setCustomerLoading(false);
        setCustomerNames(responce?.data);
        console.log(responce?.data);
      }
    };
    if (inputValue) {
      handleCustomersName();
    }
  }, [inputValue]);
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

  };
  const handleSelectCustomer=(item)=>{
    setInputValue(item.name)
    setCustomerId(item.id)
  }

  console.log(fromDate);
  return (
    <div className="min-h-screen flex-col items-center justify-between py-24 max-w-[800px] bg-[#fff] w-full mx-auto px-[25px]">
        <div className="flex">

      <div className="items-center gap-[15px] relative max-w-[200px] w-full">
        <p className="text-[18px] font-[700] text-[#2B2E4A] ">نام مشترک:</p>
        <input
          className="border-[1px] rounded-[10px] py-[10px] px-[10px] w-full"
          onChange={handleInputChange}
          value={inputValue}
        />
      {inputValue && (
        <ul className="absolute  z-10 bg-white border border-gray-300 left-0 righ-0 w-full max-h-[200px] overflow-y-auto rounded-[10px] shadow-lg max-w-[200px]">
          {customerNames?.map((item, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectCustomer(item)} // Set the input value when a name is clicked
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
      </div>
      <div>
    
          
            
                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}   >
                    <DatePicker
                       
              
                        mask="____/__/__"
                      
                        onChange={(e) => {
                          setFromDate( fDateTimeToUTC(e));
                        }}
                       
                        renderInput={(params) => <TextField {...params} error={!!error}
                                                            helperText={helperText ? helperText : error?.message} />}
                    />
                </LocalizationProvider>
           
    
      </div>
        </div>
    
      </div>

  );
};

export default Index;
