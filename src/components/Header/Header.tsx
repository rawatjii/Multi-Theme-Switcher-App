import { Link } from "react-router";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa6";


const HeaderWrapper = styled.header`
  background-color:#f8fafc;
`

const theme = [
  "Theme 1: Minimalist",
  "Theme 2: Dark",
  "Theme 3: Colorful",
]

const Header:React.FC = ()=>{
  return(
    <HeaderWrapper className="header py-3 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between">

          {/* logo */}
          <div className="logo text-2xl font-bold">
            <Link to="/">
              ThemeSwitcher
            </Link>
          </div>
          
          {/* theme switcher dropdown */}
          <div className="theme_switcher_dropdown relative">
            <button className="border border-gray-500 px-4 py-2 rounded-md flex items-center">Minimalistic <FaChevronDown size={10} className="ml-3" /></button>
            <ul className="dropdown_theme_menus absolute bg-[#f8fafc] border w-48 right-0 rounded-md top-[calc(100%+10px)]">
              {theme.map((theme, index)=>(
                <li className="px-2 py-2" key={index}>{theme}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </HeaderWrapper>
  )
} 

export default Header;