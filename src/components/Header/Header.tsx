import { Link } from "react-router";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import classes from './header.module.css'

const UlContainer = styled.ul`
  top:calc(90%);
  visibility:hidden;
  opacity:0;
  transition:0.15s all ease-in-out;

  &.show{
    top:calc(100% + 10px);
    visibility:visible;
    opacity:1;
  }
`

const theme = [
  {
    key:'Theme 1',
    value:'Theme 1: Minimalist'
  },
  {
    key:'Theme 2',
    value:'Theme 2: Dark'
  },
  {
    key:'Theme 3',
    value:'Theme 3: Colorful'
  },
]

const Header:React.FC = ()=>{
  const[showThemeDropdown, setShowThemeDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
    const handleClickOutside = (e:MouseEvent)=>{
      if(dropdownRef.current && !dropdownRef.current.contains(e.target as Node)){
        setShowThemeDropdown(false);
      }
    }

    document.addEventListener('mousedown',handleClickOutside);

    return()=>document.removeEventListener('mousedown',handleClickOutside);
  }, [])

  return(
    <header className={`${classes.header} py-3 border-b border-gray-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between">

          {/* logo */}
          <div className="logo text-2xl font-bold">
            <Link to="/">
              ThemeSwitcher
            </Link>
          </div>

          <ul className="flex gap-10 items-center">
            <li>
              Home
            </li>

            <li>
              About Us
            </li>

            <li>
              Contact Us
            </li>
          </ul>
          
          {/* theme switcher dropdown */}
          <div className={`${classes.theme_switcher_dropdown} relative`} ref={dropdownRef}>
            <button  className="theme_btn border border-gray-500 px-4 py-2 rounded-md flex items-center" onClick={()=>setShowThemeDropdown(!showThemeDropdown)}>Minimalistic <FaChevronDown size={10} className="ml-3" /></button>
            <UlContainer className={`dropdown_theme_menus absolute bg-[#f8fafc] border w-48 right-0 rounded-md  ${showThemeDropdown ? "show" : ''}`}>
              {theme.map((theme, index)=>(
                <li className="px-2 py-2 cursor-pointer" key={index}>{theme.value}</li>
              ))}
            </UlContainer>
          </div>

        </div>
      </div>
    </header>
  )
} 

export default Header;