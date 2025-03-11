import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";

export default function Header({ 
  navigation, 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  isDarkMode,
  toggleTheme
}) {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">our YCompany</span>
            <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
            />
            </a>
        </div>
        <div className="flex lg:hidden">
            <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`${isDarkMode ? 'text-white' : 'text-gray-700'} -m-2.5 inline-flex items-center justify-center rounded-md p-2.5`}
            >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
            <a key={item.name} href={item.href} className={`text-sm/6 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {item.name}
            </a>
            ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className={`text-sm/6 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Войти
            </a>
            <button onClick={toggleTheme} className={`ml-4 text-sm/6 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            ☼
            </button>
        </div>
        </nav>

      <MobileMenu 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
        isDarkMode={isDarkMode}
      />
    </header>
  );
}