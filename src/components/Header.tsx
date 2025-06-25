
import React, { useRef } from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentUser: string;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, currentUser }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const tabs = [
    'All',
    'Mathematics', 
    'Science',
    'Social',
    'Telugu',
    'English',
    'Computer Science'
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Logo Section */}
      <div className="px-4 py-4 border-b border-gray-100">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-between w-full sm:justify-center sm:space-x-3 mb-1">
            <div className="flex-shrink-0 p-2">
              <img 
                src="/lovable-uploads/4ccc7f7c-5669-4a9c-9fea-01fea4519188.png" 
                alt="Government Degree College Logo"
                className="h-16 w-16 object-contain rounded-full border-2 border-gray-200"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Government Degree College, Morthad
              </h1>
              <p className="text-sm text-gray-600 font-medium leading-tight">
                (Affiliated to Telangana University)
              </p>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-600 mt-2 text-left pl-4">
          Welcome!
        </div>
      </div>

      {/* Tabs Section */}
      <div className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div 
          ref={scrollRef}
          className="flex space-x-1 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-white text-indigo-600 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30 shadow-sm'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
