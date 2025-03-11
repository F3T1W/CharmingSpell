import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function MobileMenu({ 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  navigation, 
  isDarkMode 
}) {
  return (
    <Dialog 
      open={mobileMenuOpen} 
      onClose={setMobileMenuOpen} 
      className="lg:hidden"
    >
      <div className="fixed inset-0 z-50" />
      <DialogPanel 
        className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" alt="Логотип" />
          </a>
          <button 
            onClick={() => setMobileMenuOpen(false)} 
            className={`${isDarkMode ? 'text-white' : 'text-gray-700'} -m-2.5 p-2.5`}
          >
            <XMarkIcon className="size-6" />
          </button>
        </div>
        <div className="mt-6">
          <div className="divide-y">
            <div className="space-y-2 py-6 flex flex-col items-center">
              {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className={`block px-3 py-2 rounded-lg ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-50'}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6 flex flex-col items-center">
              <a 
                href="#" 
                className={`block px-3 py-2.5 rounded-lg ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-50'}`}
              >
                Войти
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}