import style from './style.module.scss';
const Menu = () => {
   return (
      <div className={style.container}>
         <div className={style.infor_user}>
            <div className={style.user_pic}>
               <a href="">
                  <img
                     src="https://beta.huntgem.io/uploads/nsl_avatars/3726364c20251a624dd2001b3f6249b7.jpg"
                     alt=""
                  />
               </a>
            </div>
            <div className={style.user_detail}>
               <div className={style.user_name}>Le Huy</div>
               <div className={style.user_rank}>
                  <img
                     src="https://beta.huntgem.io/modules/huntgem/assets/icons/rank-diamond.svg"
                     alt=""
                  />
                  <p>Hunter</p>
               </div>
            </div>
         </div>
         <div className={style.infor_items}>
            <ul className={style.menu_item}>
               <li>
                  <a href="/my-account/overview/">
                     <lord-icon
                        src="https://cdn.lordicon.com/lsqbzprc.json"
                        target="li"
                        trigger="hover"
                        stroke="100"
                        colors="primary:#00FFFF"
                        style={{ width: '50px', height: '35px' }}
                     />
                     <div className={style.gr_text}>
                        <b>Overview</b>
                        <p>My Overview</p>
                     </div>
                  </a>
               </li>
               <li>
                  <a href="/my-account/profile/">
                     <lord-icon
                        src="https://cdn.lordicon.com/tdvuekwf.json"
                        target="li"
                        stroke="100"
                        trigger="hover"
                        colors="primary:#00FFFF"
                        style={{ width: '50px', height: '50px' }}
                     />
                     <div className={style.gr_text}>
                        <b>Profile</b>
                        <p>Account detail &amp; Security</p>
                     </div>
                  </a>
               </li>
               <li>
                  <a href="/my-account/history/">
                     <lord-icon
                        src="https://cdn.lordicon.com/kbtmbyzy.json"
                        target="li"
                        stroke="100"
                        trigger="hover"
                        colors="primary:#00FFFF"
                        style={{ width: '50px', height: '40px' }}
                     />
                     <div className={style.gr_text}>
                        <b>History</b>
                        <p>Transaction &amp; Trading</p>
                     </div>
                  </a>
               </li>
               <li>
                  <a href="/my-account/affiliate/">
                     <lord-icon
                        src="https://cdn.lordicon.com/vysznwyv.json"
                        target="li"
                        stroke="100"
                        trigger="hover"
                        colors="primary:#00FFFF"
                        style={{ width: '50px', height: '40px' }}
                     />
                     <div className={style.gr_text}>
                        <b>Affiliate</b>
                        <p>Affiliate</p>
                     </div>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Menu;
