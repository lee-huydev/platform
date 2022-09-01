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
                  <a href="">
                     <lord-icon
                        src="https://cdn.lordicon.com/wwbrugun.json"
                        trigger="hover"
                        colors="primary:#fff"
                        style={{width: '35px', height: '35px'}}
                     />
                     <div className={style.gr_text}>
                        <b>Overview</b>
                        <p>My Overview</p>
                     </div>
                  </a>
               </li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
            </ul>
         </div>
      </div>
   );
};

export default Menu;
