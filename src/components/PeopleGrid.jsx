import { useState } from 'react';
import { Search, Download, Filter, Plus, LayoutGrid, List, GitBranch, ChevronLeft, ChevronRight } from 'lucide-react';
import { EmployeeCard } from './EmployeeCard';
import { employees } from '../data/employees';

export function PeopleGrid() {
  const [search, setSearch] = useState("");
  const [rowsPerPage] = useState(100);

  const filtered = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.role.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col h-full p-4 md:p-6 gap-4">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-full border border-[#E5E5E4] flex-1 max-w-87.5">
          <Search className="w-4 h-4 shrink-0 text-[#3D3936]" />
          <input
            type="text"
            placeholder="Search by Employee Name or Number"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 text-sm outline-none bg-transparent text-[#3D3936]/60 font-sans"
          />
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between sm:justify-end gap-4">
          <div className="flex items-center gap-2">
            {/* Download */}
            <button className="w-12 h-12 flex items-center justify-center rounded-[14px] border border-[#E5E5E4]">
              <Download className="w-5 h-5 text-[#3D3936]" />
            </button>
            {/* Filter */}
            <button className="w-12 h-12 flex items-center justify-center rounded-[14px] border border-[#E5E5E4]">
              <Filter className="w-5 h-5 text-[#3D3936]" />
            </button>
          </div>

          {/* Add button */}
          <button className="w-12 h-12 flex items-center justify-center rounded-[14px] bg-[#3D3936]">
            <Plus className="w-5 h-5 text-white" />
          </button>

          {/* View toggle */}
          <div className="flex items-center gap-1 p-1 rounded-[14px] border border-[#E5E5E4]">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#3D3936]">
              <LayoutGrid className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50">
              <List className="w-5 h-5 text-[#3D3936]" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50">
              <GitBranch className="w-5 h-5 text-[#3D3936]" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((emp) => (
            <EmployeeCard
              key={emp.id}
              name={emp.name}
              role={emp.role}
              avatar={emp.avatar}
              badgeIcon={emp.badge}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap items-center gap-2 md:gap-4 pt-2 text-sm text-[#3D3936] font-sans">
        <div className="flex items-center gap-2">
          <span className="font-medium hidden sm:inline">Rows per page:</span>
          <div className="flex items-center gap-1 px-3 py-1 rounded-md cursor-pointer border border-[#E5E5E4]">
            <span>{rowsPerPage}</span>
            <ChevronRight className="w-3 h-3 rotate-90" />
          </div>
        </div>
        <span className="text-xs sm:text-sm text-[#3D3936]/60">
          1-100 of 500
        </span>
        <div className="flex items-center gap-1 ml-auto">
          <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100">
            <ChevronLeft className="w-4 h-4 text-[#3D3936]" />
          </button>
          <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100">
            <ChevronRight className="w-4 h-4 text-[#3D3936]" />
          </button>
        </div>
      </div>
    </div>
  );
}
