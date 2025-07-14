import { useEffect, useState } from 'react';
 
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar'; // ✅ Imported Topbar

import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Tickets from './pages/Tickets';
import Clients from './pages/Clients';
import Employees from './pages/Employees';
import Accounts from './pages/Accounts';
import Payroll from './pages/Payroll';
import Space from './pages/Space';
import OtherPage from './pages/OtherPage';
import UIComponents from './pages/UIComponents';
 
import './App.css';

function App() {
 
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setDark] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };
    handleResize();
  }, [location]);

 
    
  

  const handleDark = () => {
    setDark(!isDark);
  };

  return (
    <div className={`min-h-screen flex bg-gray-50 ${isDark ? 'dark' : ''}`}>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen w-20 bg-orange-500 dark:bg-orange-600 text-white transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <Sidebar
          closeSidebar={() => setSidebarOpen(false)}
          isDark={isDark}
          handleDark={handleDark}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col md:ml-20 dark:bg-primary-dark dark:text-white">
        {/* Header + Topbar */}
        <div className="fixed top-0 left-0 md:left-20 right-0 z-30 bg-white dark:bg-gray-900 shadow">
          <div className="h-16">
            <Header openSidebar={() => setSidebarOpen(true)} />
          </div>
          <Topbar />
        </div>

        {/* Page Content */}
        <main className="pt-28 overflow-y-auto flex-1 bg-gray-100 dark:bg-primary-dark dark:text-gray-500">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/space" element={<Space />} />
            <Route path="/other" element={<OtherPage />} />
            <Route path="/ui" element={<UIComponents />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
