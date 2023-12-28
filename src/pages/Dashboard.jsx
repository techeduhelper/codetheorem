import React, { useState } from "react";
import profileimg from "./../assets/Ellipse3.png";
import Card from "../components/Card";
import Projects from "../components/Projects";
import Events from "../components/Events";

const Dashboard = ({ handleClose }) => {
  return (
    <>
      <div className='body-container flex flex-col relative bg-[#F5F5F5]'>
        <div className='bg-[#121E48] h-[245px]'>
          <div className='flex lg:flex-row flex-col-reverse lg:gap-0 gap-3 justify-between mt-[32px] px-[20px]'>
            <div className='text-[1.5rem] font-Gilroy_Medium'>
              <span className='text-[#ffffff]'>
                Hi, Welcome back <span className='text-[#1CD2AD]'>Robert!</span>
              </span>
            </div>
            <div className='flex gap-[8px] justify-between h-[40px]'>
              <div className='flex flex-row gap-3 items-center cursor-pointer'>
                <div className=' z-10 lg:min-w-[214px] min-w-full bg-[#ffffff1a] px-[10px] rounded-[100px] text-[#fff] text-[14px] flex flex-row  items-center gap-[8px] relative'>
                  <div className='flex flex-row items-center'>
                    <svg
                      width={15}
                      height={15}
                      viewBox='0 0 31 31'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M27.3334 30.0417L18.0834 20.7917C17.25 21.4306 16.2917 21.9444 15.2084 22.3333C14.125 22.7222 12.9723 22.9167 11.75 22.9167C8.66671 22.9167 6.0556 21.84 3.91671 19.6867C1.77782 17.5344 0.708374 14.9167 0.708374 11.8333C0.708374 8.75 1.77782 6.13167 3.91671 3.97833C6.0556 1.82611 8.66671 0.75 11.75 0.75C14.8334 0.75 17.4517 1.82611 19.605 3.97833C21.7573 6.13167 22.8334 8.75 22.8334 11.8333C22.8334 13.0556 22.6462 14.2083 22.2717 15.2917C21.8962 16.375 21.3889 17.3194 20.75 18.125L30.0417 27.4583C30.375 27.7917 30.5417 28.2156 30.5417 28.73C30.5417 29.2433 30.3611 29.6806 30 30.0417C29.6389 30.4028 29.1878 30.5833 28.6467 30.5833C28.1045 30.5833 27.6667 30.4028 27.3334 30.0417ZM11.75 19.0833C13.7778 19.0833 15.5 18.3817 16.9167 16.9783C18.3334 15.5761 19.0417 13.8611 19.0417 11.8333C19.0417 9.80556 18.3334 8.09 16.9167 6.68667C15.5 5.28444 13.7778 4.58333 11.75 4.58333C9.72226 4.58333 8.00726 5.28444 6.60504 6.68667C5.20171 8.09 4.50004 9.80556 4.50004 11.8333C4.50004 13.8611 5.20171 15.5761 6.60504 16.9783C8.00726 18.3817 9.72226 19.0833 11.75 19.0833Z'
                        fill='#AAAAAA'
                      />
                    </svg>
                    <input
                      type='text'
                      placeholder='Search...'
                      className=' outline-none text-[1rem] bg-transparent border-none text-white'
                    />
                  </div>
                </div>
              </div>

              <div className='flex flex-row gap-[8px]'>
                <div className='w-[40px] h-[40px] bg-[#ffffff1a] flex items-center cursor-pointer z-10 active:bg-[#ffffff12] active:rounded-full justify-center rounded-full relative'>
                  <div>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <mask
                        id='mask0_1_143'
                        style={{ maskType: "alpha" }}
                        maskUnits='userSpaceOnUse'
                        x={0}
                        y={0}
                        width={24}
                        height={24}
                      >
                        <rect width={24} height={24} fill='#D9D9D9' />
                      </mask>
                      <g mask='url(#mask0_1_143)'>
                        <path
                          d='M4.80002 19.175C4.48336 19.175 4.21269 19.0667 3.98802 18.85C3.76269 18.6334 3.65002 18.3584 3.65002 18.025C3.65002 17.7084 3.76269 17.4417 3.98802 17.225C4.21269 17.0084 4.48336 16.9 4.80002 16.9H5.72502V10.125C5.72502 8.67502 6.15436 7.39169 7.01302 6.27502C7.87102 5.15836 8.98336 4.42502 10.35 4.07502V3.40002C10.35 2.95002 10.5127 2.56669 10.838 2.25002C11.1627 1.93336 11.55 1.77502 12 1.77502C12.45 1.77502 12.8377 1.93336 13.163 2.25002C13.4877 2.56669 13.65 2.95002 13.65 3.40002V4.07502C15.0334 4.42502 16.15 5.15836 17 6.27502C17.85 7.39169 18.275 8.67502 18.275 10.125V16.9H19.2C19.5334 16.9 19.8084 17.0084 20.025 17.225C20.2417 17.4417 20.35 17.7084 20.35 18.025C20.35 18.3584 20.2417 18.6334 20.025 18.85C19.8084 19.0667 19.5334 19.175 19.2 19.175H4.80002ZM12 22.2C11.4334 22.2 10.946 22 10.538 21.6C10.1294 21.2 9.92502 20.7167 9.92502 20.15H14.075C14.075 20.7167 13.871 21.2 13.463 21.6C13.0544 22 12.5667 22.2 12 22.2ZM8.00002 16.9H16V10.125C16 9.02502 15.6084 8.08336 14.825 7.30002C14.0417 6.51669 13.1 6.12502 12 6.12502C10.9 6.12502 9.95836 6.51669 9.17502 7.30002C8.39169 8.08336 8.00002 9.02502 8.00002 10.125V16.9Z'
                          fill='white'
                        />
                      </g>
                    </svg>
                    <div
                      style={{
                        height: 8,
                        width: 8,
                        backgroundColor: "brown",
                        position: "absolute",
                        top: 0,
                        right: 0,
                        borderRadius: "100%",
                      }}
                    />
                  </div>
                </div>
                <div className='w-[40px] h-[40px] cursor-pointer z-10 active:bg-slate-50 active:rounded-full'>
                  <img
                    src={profileimg}
                    alt='avatar'
                    className='brightness-150'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute px-[20px] w-full' onClick={handleClose}>
          <div>
            <h1 className='text-white mt-[125px] font-Gilroy_bold text-[1.5rem]'>
              Finance Overview
            </h1>
          </div>
          <Card />
          <Projects />
          <Events />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
