import React, { useState, useEffect } from "react";
import ProjectForm from "./ProjectForm";
import head from "../constant/TableHead";

const Projects = () => {
  const [toggle, setToggle] = useState(false);

  const [data, setData] = useState([]);

  setTimeout(() => {
    const storedData = localStorage.getItem("myData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData.reverse());
    }
  }, 2000);

  useEffect(() => {
    const storedData = localStorage.getItem("myData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData.reverse());
    }
  }, []);

  // Delete particular data
  const deleteProject = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData.reverse());
    localStorage.setItem("myData", JSON.stringify(newData));
  };

  const handleOpen = () => {
    setToggle(true);
  };
  const handleClose = () => {
    setToggle(false);
  };

  return (
    <>
      <div className='w-full flex flex-col bg-[#ffffff] mt-[20px] p-[20px] rounded-[16px] shadow-project_shadow'>
        <div className='flex flex-row justify-between items-center overflow-hidden'>
          <span className='text-[1.1rem] font-Gilroy_Semibold text-[#1c1c28] italic'>
            Current Prjects
          </span>
          <div className='button-container'>
            <button
              onClick={handleOpen}
              className='py-[10px] px-[15px] border-none rounded-[10px] bg-[#1CD2AD] active:bg-[#1cd2c6] hover:bg-[#1cd2c6] text-[#ffffff] text-[1.1rem] font-Gilroy_Semibold cursor-pointer shadow-project_shadow'
            >
              Create
            </button>
          </div>
        </div>
        <div className='mt-[25px] overflow-x-auto'>
          <table className='border-collapse w-full table-auto'>
            <thead className='border-b-[#AAAAAA] border-b'>
              <tr className=''>
                {head.map((n, i) => (
                  <th
                    key={i}
                    className='border-none p-[15px] text-left font-Gilroy_Medium whitespace-nowrap'
                  >
                    {n.elment}
                  </th>
                ))}
                <th className='border-none p-[15px] text-left font-Gilroy_Medium ' />
              </tr>
            </thead>
            <tbody>
              {data?.map((d, i) => (
                <tr
                  key={i}
                  className={`${i % 2 === 0 ? "bg-white" : "bg-[#F9FBFB]"}`}
                >
                  <td className='border-none p-[15px] whitespace-nowrap text-left font-Gilroy_Semibold text-[#8E90A6] font-[1rem]'>
                    {d.projectName}
                  </td>
                  <td className='border-none p-[15px] whitespace-nowrap text-left font-Gilroy_Semibold text-[#8E90A6] font-[1rem]'>
                    {d.customer}
                  </td>
                  <td className='border-none p-[15px] whitespace-nowrap text-left font-Gilroy_Semibold text-[#8E90A6] font-[1rem]'>
                    {d.sentDate}
                  </td>
                  <td className='border-none p-[15px] whitespace-nowrap text-left font-Gilroy_Semibold text-[#8E90A6] font-[1rem]'>
                    $ {d.Amount}
                  </td>
                  <td className='border-none p-[15px] whitespace-nowrap text-left font-Gilroy_Semibold text-[#8E90A6] font-[1rem]'>
                    {d.status === "SENT" ? (
                      <span className='text-[#18C3D9] justify-center flex rounded-[20px] bg-[#E5F7FB] px-2 py-1 '>
                        {d.status}
                      </span>
                    ) : d.status === "DRAFT" ? (
                      <span className='text-[#AAAAAA] flex justify-center rounded-[20px] bg-[#aaaaaa33] px-2 py-1'>
                        {d.status}
                      </span>
                    ) : d.status === "PAID" ? (
                      <span className='text-[#1CD2AD] justify-center flex rounded-[20px] bg-[#1cd2ad33] px-2 py-1'>
                        {d.status}
                      </span>
                    ) : d.status === "REJECTED" ? (
                      <span className='text-[#EC4A4A] flex justify-center rounded-[20px] bg-[#FEDBDB] px-2 py-1'>
                        {d.status}
                      </span>
                    ) : null}
                  </td>
                  <td
                    onClick={() => deleteProject(i)}
                    className='border-none p-[15px] text-left font-Gilroy_Semibold text-[#8E90A6] font-[1rem]'
                  >
                    <svg
                      width='28'
                      height='28'
                      viewBox='0 0 30 34'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='hover:bg-pink-200 p-1 rounded-full'
                    >
                      <path
                        d='M20 0.333344H10C8.16167 0.333344 6.66667 1.82834 6.66667 3.66668V7.00001H0L0 10.3333H3.33333V30.3333C3.33333 32.1717 4.82833 33.6667 6.66667 33.6667H23.3333C25.1717 33.6667 26.6667 32.1717 26.6667 30.3333V10.3333H30V7.00001H23.3333V3.66668C23.3333 1.82834 21.8383 0.333344 20 0.333344ZM10 3.66668H20V7.00001H10V3.66668ZM23.3333 30.3333H6.66667V10.3333H23.3333V30.3333Z'
                        fill='#EC4A4A'
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {toggle && <ProjectForm handleClose={handleClose} />}
      </div>
    </>
  );
};

export default Projects;
