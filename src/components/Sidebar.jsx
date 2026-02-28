import { useState } from 'react';
import { Home, Users, Settings, ChevronRight, ChevronLeft, Menu } from 'lucide-react';

const navItems = [
  { label: "Home", icon: Home, active: false, chevron: false },
  { label: "My Info", icon: Users, active: false, chevron: true },
  { label: "People", icon: Users, active: true, chevron: false },
  { label: "Team Management", icon: Users, active: false, chevron: true },
  { label: "Project Setup", icon: Users, active: false, chevron: true },
  { label: "Hiring", icon: Users, active: false, chevron: false },
  { label: "Report", icon: Users, active: false, chevron: false },
];

function NavItem({ label, active, chevron, opacity }) {
  return (
    <div
      className={`relative flex items-center px-4 ${opacity ? "opacity-60" : "opacity-100"}`}
    >
      {active && (
        <div className="absolute left-0 w-1 h-8 rounded-full bg-[#947550]" />
      )}
      <div
        className={`flex items-center justify-between w-full px-4 py-4 rounded-xl cursor-pointer transition-colors ${
          active ? "bg-white" : "hover:bg-white/10"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 flex items-center justify-center">
            {label === "Home" && (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M7.5 1L1 6.5V14h5v-4h3v4h5V6.5L7.5 1z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            )}
            {label === "My Info" && (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle
                  cx="7.5"
                  cy="5"
                  r="3"
                  stroke="#fff"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M2 14c0-3 2-5 5.5-5s5.5 2 5.5 5"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            )}
            {label === "People" && (
              <img
                src="https://cdn.codia.ai/figma/DePpmENkOZKjPqaaNjYGwO/img-de3ffafb7171d2b1.svg"
                alt=""
                className="w-4 h-4"
              />
            )}
            {label === "Team Management" && (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle
                  cx="5"
                  cy="5"
                  r="2.5"
                  stroke="#fff"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M1 13c0-2.5 1.8-4 4-4"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle
                  cx="11"
                  cy="5"
                  r="2"
                  stroke="#fff"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M9 13c0-2 1.3-3 3-3"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            )}
            {label === "Project Setup" && (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <rect
                  x="2"
                  y="1"
                  width="11"
                  height="13"
                  rx="2"
                  stroke="#fff"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M5 5h5M5 8h5M5 11h3"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
            {label === "Hiring" && (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle
                  cx="6"
                  cy="5"
                  r="2.5"
                  stroke="#fff"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M1 13c0-2.5 1.8-4 4.5-4"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M12 8v5M9.5 10.5h5"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
            {label === "Report" && (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <rect
                  x="1"
                  y="1"
                  width="13"
                  height="13"
                  rx="2"
                  stroke="#fff"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M4 10l2.5-3 2.5 2 2.5-4"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <span
            className={`text-sm font-normal tracking-tight font-sans ${active ? "text-[#947550]" : "text-white"}`}
          >
            {label}
          </span>
        </div>
        {chevron && <ChevronRight className="w-4 h-4 text-white/60" />}
      </div>
    </div>
  );
}

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-6 md:top-8 left-6 z-50 w-12 h-12 flex items-center justify-center rounded-xl bg-[#3D3936] lg:hidden text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          flex flex-col h-full rounded-[20px] py-4 w-70 bg-[#3D3936]
          fixed lg:relative lg:translate-x-0 z-40 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo area */}
        <div className="px-6 py-6 mb-2">
          <div className="flex items-center justify-between">
            <img
              src="/logo/logo.svg"
              alt="CORE"
              className="h-10 object-contain max-w-25"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col gap-1 flex-1">
          <NavItem label="Home" opacity={true} />
          <NavItem label="My Info" opacity={true} chevron={true} />
          <NavItem label="People" active={true} />
          <NavItem label="Team Management" opacity={true} chevron={true} />
          <NavItem label="Project Setup" opacity={true} chevron={true} />
          <NavItem label="Hiring" opacity={true} />
          <NavItem label="Report" opacity={true} />
        </nav>

        <div className="px-4 mt-auto">
          <div className="flex items-center gap-3 px-4 py-4 rounded-xl cursor-pointer border border-white/10">
            <Settings className="w-5 h-5 text-white" />
            <span className="text-sm text-white tracking-tight">Settings</span>
          </div>
        </div>
      </div>
    </>
  );
}
