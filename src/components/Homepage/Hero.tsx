const Hero:React.FC = ()=>{
    return(
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-4 py-10 text-center">
            <h1 className="text-center font-medium">Welcome to ThemeSwitcher</h1>
            <p className="mt-2">This is the Theme Switcher application. You can observe the theme changes by selecting a different option from the dropdown menu.</p>
            <button className="bg-black text-white rounded-md px-5 py-3 text-md mt-8">Know More</button>
        </div>
    )   
}

export default Hero;