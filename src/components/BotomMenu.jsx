import React, { useState } from "react";
import { Link } from "react-router-dom";

const BotomMenu = () => {
  const [isHovered, setHovered] = useState(false);
  const [hovered, setIshovered] = useState(false);
  return (
    <>
      <div className='px-[12px] pt-[25px] pb-[20px] border-t border-b-border_color'>
        <ul className='list-group'>
          <li>
            <Link
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(null)}
              to={"/settings"}
              className='flex items-center gap-[8px] no-underline py-[12px] pl-[24px] font-Gilroy_Medium text-[#767676] rounded-[8px] hover:text-[#1cd2ad] hover:bg-hover_color'
            >
              {isHovered ? (
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <mask
                    id='mask0_1_2864'
                    style={{ maskType: "alpha" }}
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width='40'
                    height='40'
                  >
                    <rect width='40' height='40' fill='#D9D9D9' />
                  </mask>
                  <g mask='url(#mask0_1_2864)'>
                    <path
                      d='M22.958 36.958H17.042C16.6527 36.958 16.3123 36.826 16.021 36.562C15.729 36.2987 15.5553 35.9723 15.5 35.583L14.875 31.583C14.4583 31.4163 14.0207 31.2013 13.562 30.938C13.104 30.674 12.6943 30.403 12.333 30.125L8.583 31.792C8.22234 31.9587 7.84734 31.9793 7.458 31.854C7.06934 31.7293 6.77767 31.4863 6.583 31.125L3.625 25.917C3.43034 25.5837 3.37467 25.2223 3.458 24.833C3.54134 24.4443 3.74967 24.125 4.083 23.875L7.417 21.375C7.389 21.1803 7.368 20.958 7.354 20.708C7.34 20.458 7.333 20.222 7.333 20C7.333 19.778 7.34 19.542 7.354 19.292C7.368 19.042 7.389 18.8197 7.417 18.625L4.083 16.125C3.74967 15.875 3.54134 15.5557 3.458 15.167C3.37467 14.7777 3.43034 14.4163 3.625 14.083L6.583 8.87499C6.77767 8.51366 7.06934 8.27766 7.458 8.16699C7.84734 8.05566 8.22234 8.06933 8.583 8.20799L12.333 9.87499C12.6943 9.59699 13.104 9.32633 13.562 9.06299C14.0207 8.79899 14.4583 8.59733 14.875 8.45799L15.5 4.37499C15.5553 3.98633 15.729 3.66699 16.021 3.41699C16.3123 3.16699 16.6527 3.04199 17.042 3.04199H22.958C23.3473 3.04199 23.6877 3.16699 23.979 3.41699C24.271 3.66699 24.4447 3.98633 24.5 4.37499L25.125 8.41699C25.5417 8.58366 25.986 8.79899 26.458 9.06299C26.9307 9.32633 27.3337 9.59699 27.667 9.87499L31.417 8.20799C31.7777 8.06933 32.1527 8.05566 32.542 8.16699C32.9307 8.27766 33.2223 8.51366 33.417 8.87499L36.375 14.042C36.597 14.4027 36.6593 14.7777 36.562 15.167C36.4653 15.5557 36.2503 15.875 35.917 16.125L32.542 18.583C32.5973 18.8057 32.632 19.042 32.646 19.292C32.66 19.542 32.667 19.778 32.667 20C32.667 20.222 32.66 20.458 32.646 20.708C32.632 20.958 32.5973 21.1943 32.542 21.417L35.917 23.875C36.2223 24.125 36.4237 24.4443 36.521 24.833C36.6183 25.2223 36.5697 25.5837 36.375 25.917L33.417 31.083C33.1943 31.4723 32.8957 31.7293 32.521 31.854C32.1457 31.9793 31.7637 31.9587 31.375 31.792L27.667 30.125C27.3057 30.403 26.9027 30.6807 26.458 30.958C26.014 31.236 25.5697 31.4443 25.125 31.583L24.5 35.583C24.4447 35.9723 24.271 36.2987 23.979 36.562C23.6877 36.826 23.3473 36.958 22.958 36.958ZM20 25.542C21.528 25.542 22.8337 25.0003 23.917 23.917C25.0003 22.8337 25.542 21.528 25.542 20C25.542 18.472 25.0003 17.1663 23.917 16.083C22.8337 14.9997 21.528 14.458 20 14.458C18.472 14.458 17.1663 14.9997 16.083 16.083C14.9997 17.1663 14.458 18.472 14.458 20C14.458 21.528 14.9997 22.8337 16.083 23.917C17.1663 25.0003 18.472 25.542 20 25.542Z'
                      fill='#1CD2AD'
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className=''
                >
                  <mask
                    id='mask0_1634_75'
                    style={{ maskType: "alpha" }}
                    maskUnits='userSpaceOnUse'
                    x={0}
                    y={0}
                    width={24}
                    height={24}
                  >
                    <rect width={24} height={24} fill='#D9D9D9' />
                  </mask>
                  <g mask='url(#mask0_1634_75)'>
                    <path
                      d='M13.925 22.2H10.075C9.79165 22.2 9.54598 22.1043 9.33798 21.913C9.12931 21.721 8.99998 21.4833 8.94998 21.2L8.67498 18.95C8.47498 18.8667 8.29565 18.775 8.13698 18.675C7.97898 18.575 7.81665 18.4667 7.64998 18.35L5.52498 19.25C5.25831 19.35 4.99165 19.3583 4.72498 19.275C4.45831 19.1917 4.24998 19.025 4.09998 18.775L2.19998 15.45C2.04998 15.2 2.00398 14.9333 2.06198 14.65C2.12065 14.3667 2.25831 14.1417 2.47498 13.975L4.29998 12.575V11.425L2.47498 10.025C2.25831 9.85832 2.12065 9.63332 2.06198 9.34999C2.00398 9.06666 2.04998 8.79999 2.19998 8.54999L4.09998 5.22499C4.23331 4.97499 4.43765 4.81232 4.71298 4.73699C4.98765 4.66232 5.25831 4.67499 5.52498 4.77499L7.67498 5.64999C7.82498 5.53332 7.98331 5.42499 8.14998 5.32499C8.31665 5.22499 8.49165 5.14165 8.67498 5.07499L8.94998 2.79999C8.99998 2.49999 9.12931 2.25832 9.33798 2.07499C9.54598 1.89165 9.79165 1.79999 10.075 1.79999H13.925C14.2083 1.79999 14.4543 1.89165 14.663 2.07499C14.871 2.25832 15 2.49999 15.05 2.79999L15.325 5.07499C15.525 5.14165 15.7043 5.22499 15.863 5.32499C16.021 5.42499 16.1833 5.53332 16.35 5.64999L18.475 4.77499C18.7416 4.67499 19.0083 4.66232 19.275 4.73699C19.5416 4.81232 19.75 4.97499 19.9 5.22499L21.8 8.54999C21.95 8.79999 22 9.06666 21.95 9.34999C21.9 9.63332 21.7583 9.85832 21.525 10.025L19.675 11.425C19.6916 11.525 19.7 11.6207 19.7 11.712V12.287C19.7 12.379 19.6833 12.475 19.65 12.575L21.5 13.975C21.7166 14.1417 21.8543 14.3667 21.913 14.65C21.971 14.9333 21.925 15.2 21.775 15.45L19.875 18.75C19.725 19 19.5126 19.1707 19.238 19.262C18.9626 19.354 18.6916 19.35 18.425 19.25L16.325 18.35C16.175 18.4667 16.0166 18.575 15.85 18.675C15.6833 18.775 15.5083 18.8667 15.325 18.95L15.05 21.2C15 21.4833 14.871 21.721 14.663 21.913C14.4543 22.1043 14.2083 22.2 13.925 22.2ZM12.025 15.5C12.9916 15.5 13.8166 15.1583 14.5 14.475C15.1833 13.7917 15.525 12.9667 15.525 12C15.525 11.0333 15.1833 10.2083 14.5 9.52499C13.8166 8.84165 12.9916 8.49999 12.025 8.49999C11.0583 8.49999 10.2333 8.84165 9.54998 9.52499C8.86665 10.2083 8.52498 11.0333 8.52498 12C8.52498 12.9667 8.86665 13.7917 9.54998 14.475C10.2333 15.1583 11.0583 15.5 12.025 15.5ZM12.025 13.5C11.6083 13.5 11.2543 13.354 10.963 13.062C10.671 12.7707 10.525 12.4167 10.525 12C10.525 11.5833 10.671 11.2293 10.963 10.938C11.2543 10.646 11.6083 10.5 12.025 10.5C12.4416 10.5 12.796 10.646 13.088 10.938C13.3793 11.2293 13.525 11.5833 13.525 12C13.525 12.4167 13.3793 12.7707 13.088 13.062C12.796 13.354 12.4416 13.5 12.025 13.5ZM11.075 19.925H12.9L13.25 17.3C13.7833 17.1667 14.275 16.9667 14.725 16.7C15.175 16.4333 15.5833 16.1083 15.95 15.725L18.425 16.75L19.325 15.175L17.175 13.55C17.2583 13.3167 17.321 13.0667 17.363 12.8C17.4043 12.5333 17.425 12.2667 17.425 12C17.425 11.7333 17.4043 11.4667 17.363 11.2C17.321 10.9333 17.2583 10.6833 17.175 10.45L19.325 8.82499L18.425 7.24999L15.95 8.29999C15.5833 7.89999 15.175 7.56666 14.725 7.29999C14.275 7.03332 13.7833 6.83332 13.25 6.69999L12.925 4.07499H11.075L10.75 6.69999C10.2166 6.83332 9.72498 7.03332 9.27498 7.29999C8.82498 7.56666 8.40831 7.89165 8.02498 8.27499L5.57498 7.24999L4.67498 8.82499L6.79998 10.425C6.71665 10.675 6.65431 10.9293 6.61298 11.188C6.57098 11.446 6.54998 11.7167 6.54998 12C6.54998 12.2667 6.57098 12.529 6.61298 12.787C6.65431 13.0457 6.71665 13.3083 6.79998 13.575L4.67498 15.175L5.57498 16.75L8.02498 15.725C8.40831 16.1083 8.82498 16.4333 9.27498 16.7C9.72498 16.9667 10.2166 17.1667 10.75 17.3L11.075 19.925Z'
                      fill='#767676'
                    />
                  </g>
                </svg>
              )}
              Settings
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={() => setIshovered(true)}
              onMouseLeave={() => setIshovered(null)}
              className='flex items-center gap-[8px] no-underline py-[12px] pl-[24px] font-Gilroy_Medium text-[#767676] rounded-[8px] hover:text-[#1cd2ad] hover:bg-hover_color'
            >
              {hovered ? (
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <mask
                    id='mask0_1_2856'
                    style={{ maskType: "alpha" }}
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width='40'
                    height='40'
                  >
                    <rect width='40' height='40' fill='#D9D9D9' />
                  </mask>
                  <g mask='url(#mask0_1_2856)'>
                    <path
                      d='M25.375 27.4584C25.0139 27.0417 24.8334 26.5761 24.8334 26.0617C24.8334 25.5484 25.0139 25.1111 25.375 24.75L28.25 21.9167H16.7084C16.1806 21.9167 15.7361 21.7289 15.375 21.3534C15.0139 20.9789 14.8334 20.5278 14.8334 20C14.8334 19.4722 15.0139 19.0211 15.375 18.6467C15.7361 18.2711 16.1806 18.0834 16.7084 18.0834H28.25L25.375 15.25C24.9861 14.8611 24.7984 14.4095 24.8117 13.895C24.8261 13.3817 25.0139 12.9306 25.375 12.5417C25.7361 12.1806 26.1739 12 26.6884 12C27.2017 12 27.6389 12.1806 28 12.5417L34.1667 18.6667C34.3334 18.8611 34.4584 19.0695 34.5417 19.2917C34.625 19.5139 34.6667 19.75 34.6667 20C34.6667 20.25 34.625 20.4861 34.5417 20.7084C34.4584 20.9306 34.3334 21.1389 34.1667 21.3334L28 27.5C27.5834 27.8889 27.1322 28.0622 26.6467 28.02C26.16 27.9789 25.7361 27.7917 25.375 27.4584ZM8.33335 35.3334C7.2778 35.3334 6.38224 34.9656 5.64669 34.23C4.91002 33.4934 4.54169 32.5972 4.54169 31.5417V8.45835C4.54169 7.4028 4.91002 6.50669 5.64669 5.77002C6.38224 5.03446 7.2778 4.66669 8.33335 4.66669H18.1667C18.7222 4.66669 19.1806 4.84724 19.5417 5.20835C19.9028 5.56946 20.0834 6.01391 20.0834 6.54169C20.0834 7.09724 19.9028 7.55558 19.5417 7.91669C19.1806 8.2778 18.7222 8.45835 18.1667 8.45835H8.33335V31.5417H18.1667C18.7222 31.5417 19.1806 31.7222 19.5417 32.0834C19.9028 32.4445 20.0834 32.9028 20.0834 33.4584C20.0834 33.9861 19.9028 34.4306 19.5417 34.7917C19.1806 35.1528 18.7222 35.3334 18.1667 35.3334H8.33335Z'
                      fill='#1CD2AD'
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 19 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M13.225 14.475C13.0083 14.225 12.9 13.9457 12.9 13.637C12.9 13.329 13.0083 13.0667 13.225 12.85L14.95 11.15H8.02498C7.70831 11.15 7.44164 11.0373 7.22498 10.812C7.00831 10.5873 6.89998 10.3167 6.89998 9.99999C6.89998 9.68332 7.00831 9.41265 7.22498 9.18799C7.44164 8.96266 7.70831 8.84999 8.02498 8.84999H14.95L13.225 7.14999C12.9916 6.91665 12.879 6.64565 12.887 6.33699C12.8956 6.02899 13.0083 5.75832 13.225 5.52499C13.4416 5.30832 13.7043 5.19999 14.013 5.19999C14.321 5.19999 14.5833 5.30832 14.8 5.52499L18.5 9.19999C18.6 9.31666 18.675 9.44166 18.725 9.57499C18.775 9.70832 18.8 9.84999 18.8 9.99999C18.8 10.15 18.775 10.2917 18.725 10.425C18.675 10.5583 18.6 10.6833 18.5 10.8L14.8 14.5C14.55 14.7333 14.2793 14.8373 13.988 14.812C13.696 14.7873 13.4416 14.675 13.225 14.475ZM2.99998 19.2C2.36664 19.2 1.82931 18.9793 1.38798 18.538C0.945976 18.096 0.724976 17.5583 0.724976 16.925V3.07499C0.724976 2.44165 0.945976 1.90399 1.38798 1.46199C1.82931 1.02065 2.36664 0.799988 2.99998 0.799988H8.89997C9.23331 0.799988 9.50831 0.908321 9.72498 1.12499C9.94164 1.34165 10.05 1.60832 10.05 1.92499C10.05 2.25832 9.94164 2.53332 9.72498 2.74999C9.50831 2.96665 9.23331 3.07499 8.89997 3.07499H2.99998V16.925H8.89997C9.23331 16.925 9.50831 17.0333 9.72498 17.25C9.94164 17.4667 10.05 17.7417 10.05 18.075C10.05 18.3917 9.94164 18.6583 9.72498 18.875C9.50831 19.0917 9.23331 19.2 8.89997 19.2H2.99998Z'
                    fill='#767676'
                  />
                </svg>
              )}
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BotomMenu;