import { badgeUrl } from '../data/employees';

const dotColors = ['bg-yellow-400', 'bg-red-400', 'bg-blue-400', 'bg-green-400'];

export function EmployeeCard({ name, role, avatar, badgeIcon }) {
  return (
    <div
      className="flex flex-col items-center p-4 sm:p-6 rounded-3xl bg-white cursor-pointer hover:shadow-md transition-shadow w-full border border-[#E5E5E4]"
    >
      {/* Avatar with badge */}
      <div className="relative mb-4">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        {/* Badge overlay */}
        <div
          className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
        >
          <img
            src={badgeIcon || badgeUrl}
            alt="badge"
            className="w-7 h-7 sm:w-9 sm:h-9"
          />
        </div>
      </div>

      {/* Name */}
      <p
        className="text-sm sm:text-base font-semibold tracking-tight text-center mb-1 text-[#3D3936] font-sans"
      >
        {name}
      </p>

      {/* Role */}
      <p
        className="text-xs sm:text-sm mb-3 text-center text-[#947550] font-sans"
      >
        {role}
      </p>

      {/* Color dots */}
      <div className="flex gap-1.5">
        {dotColors.map((c, i) => (
          <span key={i} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${c}`} />
        ))}
      </div>
    </div>
  );
}
