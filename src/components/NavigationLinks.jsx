export default function NavigationLinks({ navigation, isDarkMode }) {
    return (
      <div>
        {navigation.map((item) => (
          <a 
            key={item.name} 
            href={item.href} 
            className={`text-sm/6 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            {item.name}
          </a>
        ))}
      </div>
    );
}