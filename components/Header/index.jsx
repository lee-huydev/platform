import Image from 'next/image';
import style from './style.module.scss';
const Header = () => {
   return (
      <div className={style.container_fluid}>
         <div className={style.row}>
            <div className={style.column_left}></div>
            <div className={style.column_center}>
               <img
                  src="https://beta.huntgem.io/uploads/2022/07/Logo-Huntgem.png"
                  alt="image"
               />
            </div>
            <div className={style.column_right}>
               <div className={style.wrapper}>
                  <div className={style.left}>
                     <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M21 18.0233C21 18.5113 20.6043 18.907 20.1163 18.907H3.88372C3.39565 18.907 3 18.5113 3 18.0233V18.0233C3 17.5352 3.39566 17.1395 3.88372 17.1395H3.9V10.9809C3.9 6.57288 7.527 3 12 3C16.473 3 20.1 6.57288 20.1 10.9809V17.1395H20.1163C20.6043 17.1395 21 17.5352 21 18.0233V18.0233ZM5.7 17.1395H18.3V10.9809C18.3 7.5494 15.4794 4.76744 12 4.76744C8.5206 4.76744 5.7 7.5494 5.7 10.9809V17.1395ZM9.97604 20.7558C9.73121 20.2608 10.1977 19.7907 10.75 19.7907H13.25C13.8023 19.7907 14.2688 20.2608 14.024 20.7558C13.9155 20.9751 13.7699 21.1773 13.591 21.3529C13.169 21.7672 12.5967 22 12 22C11.4033 22 10.831 21.7672 10.409 21.3529C10.2301 21.1773 10.0845 20.9751 9.97604 20.7558Z"
                           fill="#777E91"
                        ></path>
                     </svg>
                  </div>
                  <div className={style.center}>
                     <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M21.6389 14.3962H17.5906C16.1042 14.3953 14.8993 13.1914 14.8984 11.7049C14.8984 10.2185 16.1042 9.01458 17.5906 9.01367H21.6389"
                           stroke="#777E91"
                           strokeWidth="1.75"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        ></path>
                        <path
                           d="M18.0485 11.6432H17.7369"
                           stroke="#777E91"
                           strokeWidth="1.75"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        ></path>
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M7.74766 3H16.3911C19.2892 3 21.6388 5.34951 21.6388 8.24766V15.4247C21.6388 18.3229 19.2892 20.6724 16.3911 20.6724H7.74766C4.84951 20.6724 2.5 18.3229 2.5 15.4247V8.24766C2.5 5.34951 4.84951 3 7.74766 3Z"
                           stroke="#777E91"
                           strokeWidth="1.75"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        ></path>
                        <path
                           d="M7.03564 7.53772H12.4346"
                           stroke="#777E91"
                           strokeWidth="1.75"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        ></path>
                     </svg>
                  </div>
                  <div className={style.right}>
                     <a>
                        <div className={style.img_wrapper}>
                           <img
                              src="https://beta.huntgem.io/uploads/nsl_avatars/3726364c20251a624dd2001b3f6249b7.jpg"
                              alt="image"
                           />
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Header;
