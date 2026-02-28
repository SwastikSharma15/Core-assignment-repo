import { useState, useEffect } from "react";
import { Bell } from "lucide-react";

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="#3D3936"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M12 7v5l3 3"
        stroke="#3D3936"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TopBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-between px-4 md:px-6 py-4 rounded-[20px] bg-white min-h-20">
      {/* Page title */}
      <h1 className="text-lg font-semibold tracking-tight ml-16 lg:ml-0 text-[#3D3936] font-sans">
        People
      </h1>

      {/* Right side */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* MST timezone */}
        <div className="hidden md:flex items-center px-4 py-2 rounded-full text-sm font-medium border border-[#E5E5E4] text-black font-sans">
          MST
        </div>

        {/* Clock + time */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5E5E4]">
          <div className="flex items-center gap-2 pr-2 border-r border-[#E5E5E4]">
            <ClockIcon />
            <span className="text-base md:text-lg font-semibold tracking-tight text-[#3D3936] font-sans min-w-15">
              {time}
            </span>
          </div>
          {/* Profile icon button */}
          <div className="w-9 h-9 rounded-full flex items-center justify-center ml-1 bg-[#F7F7F7]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle
                cx="9"
                cy="6.5"
                r="3.5"
                stroke="#3D3936"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M2 16c0-3.5 3-6 7-6s7 2.5 7 6"
                stroke="#3D3936"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Notification bell */}
        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center relative border border-[#E5E5E4]">
          <Bell className="w-4 h-4 md:w-5 md:h-5 text-[#3D3936]" />
          <span className="absolute top-2 right-2.5 md:top-2.5 md:right-3 w-2 h-2 rounded-full bg-red-500 border border-white" />
        </button>

        {/* Avatar */}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
          <img
            src="https://cdn.codia.ai/figma/DePpmENkOZKjPqaaNjYGwO/img-91c205ca9ab98879.svg"
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
