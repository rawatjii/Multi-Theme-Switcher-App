import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import classes from './layout.module.css';

function Layout() {

  return (
    <>
      <div className={`theme_wrapper ${classes.theme1}`}>
        <Header />
        <Outlet/>
      </div>
    </>
  )
}

export default Layout;