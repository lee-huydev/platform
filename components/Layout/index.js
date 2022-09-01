import Header from '../Header';
import Footer from '../Footer';
import Menu from '../Menu';
import style from './style.module.scss';
const Layout = ({ children }) => {
   return (
      <div className={style.layout}>
         <Header />
         <div className={style.bg_img}></div>
            <div className={style.content}>
                <div className={style.slide_bar}>
                    <Menu />
                </div>
                <div className={style.main}>{children}</div>
            </div>
         <Footer />
      </div>
   );
};

export default Layout;
