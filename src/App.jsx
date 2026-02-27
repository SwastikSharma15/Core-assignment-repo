import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { PeopleGrid } from './components/PeopleGrid';

export default function App() {
  return (
      <div className="h-screen bg-[#F7F7F7]">
          <div className="flex flex-col lg:flex-row gap-4 p-2 sm:p-4 h-full">
              {/* Sidebar */}
              <Sidebar />
              {/* Main */}
              <div className="flex flex-col flex-1 gap-4 min-h-0">
                  <TopBar />
                  <div className="flex-1 rounded-[20px] bg-white overflow-auto">
                      <PeopleGrid />
                  </div>
              </div>
          </div>
      </div>

  );
}
