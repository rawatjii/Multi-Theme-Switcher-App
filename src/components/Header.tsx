import { Link } from "react-router";

const Header = ()=>{
  return(
    <div className="header">
      <div className="row">
        <div className="logo">
          <Link to="/">
            ThemeSwitcher
          </Link>
        </div>
      </div>
    </div>
  )
} 

export default Header;