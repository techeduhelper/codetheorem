import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuData from "../constant/MenuData";
import BotomMenu from "./BotomMenu";

const Sidebar = ({ handleClose }) => {
  const [isHovered, setHovered] = useState();

  return (
    <>
      <div className='min-h-[100vh] w-[243px] flex  bg-[#ffffff] flex-col justify-between shadow-sidebar_shadow'>
        <div>
          <div className='flex justify-end md:hidden'>
            <span
              onClick={handleClose}
              className='bg-slate-100 px-3 py-1 rounded-l-lg text-lg'
            >
              {" "}
              ×
            </span>
          </div>
          <Link
            to={"/"}
            className='w-full flex justify-center py-[40px] mb-[px] hover:cursor-pointer border-b border-b-border_color'
          >
            <div>
              <svg
                width={121}
                height={30}
                viewBox='0 0 121 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.5247 16.1105H6.3451V24.5345C6.3451 25.3013 6.49175 25.8504 6.78505 26.182C7.0993 26.4929 7.57068 26.6587 8.19919 26.6794C8.82769 26.6794 9.60285 26.6586 10.5247 26.6172V29.0418C8.13634 29.3527 6.387 29.1662 5.27664 28.4823C4.16628 27.7777 3.6111 26.4618 3.6111 24.5345V16.1105H0.5V13.4993H3.6111V9.95566L6.3451 9.14745V13.4993H10.5247V16.1105Z'
                  fill='#121E48'
                />
                <path
                  d='M16.5875 16.1105C17.4884 14.1832 19.1225 13.2196 21.4899 13.2196V16.0483C20.1491 15.9861 18.9968 16.3384 18.0331 17.1052C17.0694 17.872 16.5875 19.105 16.5875 20.8043V29.0418H13.8535V13.4993H16.5875V16.1105Z'
                  fill='#121E48'
                />
                <path
                  d='M36.3157 13.4993H39.0497V29.0418H36.3157V26.3685C34.9539 28.4201 32.9742 29.4459 30.3763 29.4459C28.1766 29.4459 26.3015 28.6585 24.7512 27.0835C23.2009 25.4878 22.4257 23.5502 22.4257 21.2706C22.4257 18.991 23.2009 17.0638 24.7512 15.4888C26.3015 13.8931 28.1766 13.0952 30.3763 13.0952C32.9742 13.0952 34.9539 14.121 36.3157 16.1727V13.4993ZM30.722 26.8348C32.3142 26.8348 33.6446 26.3064 34.713 25.2495C35.7815 24.1719 36.3157 22.8456 36.3157 21.2706C36.3157 19.6956 35.7815 18.3797 34.713 17.3228C33.6446 16.2452 32.3142 15.7064 30.722 15.7064C29.1508 15.7064 27.8309 16.2452 26.7624 17.3228C25.694 18.3797 25.1597 19.6956 25.1597 21.2706C25.1597 22.8456 25.694 24.1719 26.7624 25.2495C27.8309 26.3064 29.1508 26.8348 30.722 26.8348Z'
                  fill='#121E48'
                />
                <path
                  d='M50.5769 29.4459C48.2095 29.4459 46.2402 28.6688 44.6689 27.1146C43.0977 25.5396 42.312 23.5916 42.312 21.2706C42.312 18.9496 43.0977 17.0119 44.6689 15.4577C46.2402 13.8827 48.2095 13.0952 50.5769 13.0952C52.1272 13.0952 53.5204 13.4683 54.7564 14.2143C55.9925 14.9396 56.9143 15.924 57.5219 17.1674L55.2278 18.4729C54.8298 17.644 54.2117 16.9809 53.3737 16.4835C52.5567 15.9861 51.6244 15.7375 50.5769 15.7375C49.0056 15.7375 47.6858 16.2659 46.6173 17.3228C45.5698 18.3797 45.046 19.6956 45.046 21.2706C45.046 22.8248 45.5698 24.1304 46.6173 25.1873C47.6858 26.2442 49.0056 26.7726 50.5769 26.7726C51.6244 26.7726 52.5672 26.5343 53.4052 26.0577C54.2432 25.5603 54.8821 24.8972 55.3221 24.0682L57.6476 25.4049C56.9772 26.6276 56.0135 27.6119 54.7564 28.358C53.4994 29.0833 52.1063 29.4459 50.5769 29.4459Z'
                  fill='#121E48'
                />
                <path
                  d='M73.6398 29.0418H70.2459L63.081 21.6747V29.0418H60.347V7.28235H63.081V20.3691L69.8688 13.4993H73.3884L65.8778 21.0219L73.6398 29.0418Z'
                  fill='#121E48'
                />
                <path
                  d='M80.9222 4.11609H83.8466V29.0409H80.9222V4.11609Z'
                  fill='#121E48'
                />
                <path
                  d='M96.1155 13.0579C97.9603 13.0579 99.4383 13.6394 100.549 14.8026C101.66 15.945 102.216 17.5028 102.216 19.476V29.0409H99.4802V19.6318C99.4802 18.3648 99.1343 17.3885 98.4425 16.7031C97.7507 15.9969 96.7968 15.6438 95.5809 15.6438C94.2183 15.6438 93.1177 16.0696 92.2792 16.9212C91.4406 17.752 91.0213 19.0398 91.0213 20.7845V29.0409H88.2856V13.4629H91.0213V15.7061C92.1324 13.9406 93.8305 13.0579 96.1155 13.0579Z'
                  fill='#121E48'
                />
                <path
                  d='M113.425 29.4459C111.056 29.4459 109.085 28.667 107.513 27.1092C105.941 25.5306 105.155 23.5782 105.155 21.2519C105.155 18.9256 105.941 16.9835 107.513 15.4257C109.085 13.8471 111.056 13.0579 113.425 13.0579C114.976 13.0579 116.37 13.4317 117.607 14.1795C118.844 14.9064 119.766 15.8931 120.374 17.1393L118.079 18.4478C117.68 17.617 117.062 16.9524 116.223 16.4539C115.406 15.9554 114.473 15.7061 113.425 15.7061C111.853 15.7061 110.532 16.2358 109.463 17.2951C108.414 18.3544 107.89 19.6733 107.89 21.2519C107.89 22.8097 108.414 24.1182 109.463 25.1775C110.532 26.2368 111.853 26.7665 113.425 26.7665C114.473 26.7665 115.416 26.5276 116.255 26.0499C117.093 25.5514 117.733 24.8867 118.173 24.0559L120.5 25.3956C119.829 26.6211 118.865 27.6077 117.607 28.3554C116.349 29.0824 114.955 29.4459 113.425 29.4459Z'
                  fill='#121E48'
                />
                <path
                  d='M92.6372 9.91961L90.4462 12.0317L82.3469 4.22415L74.2477 12.0317L72.0567 9.91961L82.3469 1.52588e-05L92.6372 9.91961Z'
                  fill='#1CD2AD'
                />
              </svg>
            </div>
          </Link>
          <nav className='mt-[40px] mx-[12px]'>
            <ul className='list-none'>
              {menuData.map((item) => (
                <li key={item.id}>
                  <Link
                    onClick={handleClose}
                    onMouseEnter={() => setHovered(item.id)}
                    onMouseLeave={() => setHovered(null)}
                    to={item.linkTo}
                    className='flex items-center active:text-[#049175] gap-[8px] no-underline py-[12px] pl-[24px] font-Gilroy_Medium text-[#767676] rounded-[8px] hover:text-[#1cd2ad] hover:bg-hover_color'
                  >
                    {isHovered === item.id ? item.altSvgFile : item.svgFile}
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <BotomMenu />
      </div>
    </>
  );
};

export default Sidebar;