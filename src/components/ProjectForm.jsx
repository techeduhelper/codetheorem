import React, { useState } from "react";

const ProjectForm = ({ handleClose }) => {
  const [projectName, setProjectName] = useState("");
  const [customer, setCustomer] = useState("");
  const [Amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  // Use localStorage to store data
  let data = JSON.parse(localStorage.getItem("myData")) || [];
  let updateData = (newData) => {
    data.push(newData);
    localStorage.setItem("myData", JSON.stringify(data));
  };

  // Function for creating Data
  const handleClick = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const newData = {
      projectName: projectName,
      customer: customer,
      sentDate: currentDate,
      Amount: Amount,
      status: status,
    };
    updateData(newData);
    setAmount("");
    setCustomer("");
    setProjectName("");
    handleClose();
  };

  return (
    <>
      <div className='fixed flex z-50 top-0 left-0 w-full h-full bg-[#000000b3]  justify-center  items-center'>
        <div className='bg-white p-[20px] rounded-[8px] lg:w-1/2 w-full lg:mx-0 mx-4 flex gap-[10px] flex-col'>
          <div className='flex flex-row items-center justify-between'>
            <span className='font-Gilroy_Semibold text-[1.4rem]'>
              Create New Project
            </span>
            <span
              className='cursor-pointer text-[2rem] font-Gilroy_bold text-[#767676] right-0 bg-[#f5f5f5] flex  items-center active:bg-slate-100 hover:bg-slate-200 justify-center w-[40px] h-[40px] rounded-full'
              onClick={handleClose}
            >
              ×
            </span>
          </div>
          <h3 />
          <form onSubmit={handleClick}>
            <div className='flex flex-col gap-[4px] mb-[10px]'>
              <label htmlFor='name'>Project Name:</label>
              <input
                required
                type='text'
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                id='projectName'
                name='Project Name'
              />
            </div>
            <div className='flex flex-col gap-[4px] mb-[10px]'>
              <label htmlFor='email'>Customer:</label>
              <input
                required
                type='text'
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                id='customer'
                name='customer'
              />
            </div>
            <div className='flex flex-col gap-[4px] mb-[10px]'>
              <label htmlFor='email'>Amount:</label>
              <input
                required
                type='number'
                value={Amount}
                onChange={(e) => setAmount(e.target.value)}
                id='amount'
                name='Amount'
              />
            </div>
            <div className='flex flex-col gap-[4px] mb-[10px]'>
              <label htmlFor='email'>Status:</label>
              <select
                required
                onChange={(e) => setStatus(e.target.value)}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:out  line-none focus:shadow-outline'
                id='status'
              >
                <option>Select</option>
                <option value='SENT'>Sent</option>
                <option value='PAID'>Paid</option>
                <option value='REJECTED'>Rejected</option>
                <option value='DRAFT'>Draft</option>
              </select>
            </div>
            <br />
            <input
              className='py-[10px] px-[15px] text-[1.1rem] border-none rounded-[10px] cursor-pointer active:bg-green-600 bg-green-700 hover:bg-green-700 text-[#ffffff] font-Gilroy_Semibold'
              type='submit'
              defaultValue='Submit'
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ProjectForm;
