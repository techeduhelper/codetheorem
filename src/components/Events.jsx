import React from "react";
import event1pic from "./../assets/Ellipse44.png";
import event2pic from "./../assets/Ellipse1.png";
import event3pic from "./../assets/Ellipse2.png";

const Events = () => {
  return (
    <>
      <div className='bg-[#ffffff] my-[20px] py-[20px] px-[24px] lg:w-2/5 md:w-2/3 sm:w-full font-Gilroy_Semibold  rounded-[8px] shadow-project_shadow flex flex-col'>
        <div>
          <span className='text-[1.1rem] italic'>Events</span>
        </div>
        <div className='flex flex-col gap-[15px]'>
          <div className='flex flex-row items-center justify-between '>
            <div className='flex flex-row mt-[20px] gap-[20px] items-center'>
              <div>
                <img src={event1pic} alt='' className='brightness-125' />
              </div>
              <div className='flex flex-col'>
                <span className='text-[1rem]'>Wade Warren</span>
                <div className='flex flex-row items-center gap-1 lg:gap-2 text-[#1E88E5] text-[14px]'>
                  🎂 Birthday
                  <div className='w-[4px] h-[4px] bg-[#C7C8D9] rounded-full'></div>
                  <span className='text-[#555770]'>Today</span>
                </div>
              </div>
            </div>
            <div>
              <button className='bg-[#1E88E5] px-[8px] py-[4px] text-white rounded-[8px]'>
                Wish
              </button>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center justify-center mt-[20px] gap-[15px]'>
              <div>
                <img src={event2pic} alt='' className='brightness-125' />
              </div>
              <div className='flex flex-col justify-center'>
                <span className='lg:text-[1rem]'>Wade Warren</span>
                <div className='flex lg:flex-row items-center justify-center gap-1 lg:gap-2 text-[#1E88E5] text-[14px]'>
                  <span>🎉Joining Us</span>
                  <div className='w-[4px] h-[4px] bg-[#C7C8D9] rounded-full'></div>
                  <span className='text-[#555770]'>Today</span>
                </div>
              </div>
            </div>
            <div className='bg-[#1E88E5] px-[6px] lg:px-[] py-[4px] text-white rounded-[8px]'>
              Congratulations
            </div>
          </div>

          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center mt-[20px] gap-[15px]'>
              <div>
                <img src={event3pic} alt='' className='brightness-125' />
              </div>
              <div className='flex flex-col'>
                <span className='text-[1rem]'>Wade Warren</span>
                <div className='flex flex-row items-center gap-2 text-[#1E88E5] text-[14px]'>
                  💼 Work Anniversary
                  <div className='w-[4px] h-[4px] bg-[#C7C8D9] rounded-full'></div>{" "}
                  <span className='text-[#555770]'>Today</span>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
