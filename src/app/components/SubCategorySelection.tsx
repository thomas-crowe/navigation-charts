import Link from "next/link";

export default function SubCategorySelection() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-20">
      {/* TopAppBar */}
      <div className="sticky top-0 z-20 flex items-center bg-white dark:bg-[#101622] p-4 pb-2 justify-between border-b border-gray-100 dark:border-white/5 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
        <Link href="/" className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-start rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors -ml-2 pl-2">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </Link>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center truncate px-2">Select Technology</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center text-slate-900 dark:text-white rounded-full size-10 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-[24px]">tune</span>
          </button>
        </div>
      </div>
      {/* MetaText (Breadcrumb Context) */}
      <div className="px-4 py-3 bg-background-light dark:bg-background-dark">
        <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-[#9da6b9]">
          <span className="cursor-pointer hover:text-primary transition-colors">Cybersecurity</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-semibold">Discovery Area</span>
        </div>
      </div>
      {/* SearchBar */}
      <div className="px-4 pb-2 bg-background-light dark:bg-background-dark sticky top-[65px] z-10">
        <label className="flex flex-col w-full group/search">
          <div className="flex w-full items-stretch rounded-xl h-12 bg-white dark:bg-[#282e39] shadow-sm border border-transparent dark:border-white/5 transition-all focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary/50">
            <div className="text-slate-400 dark:text-[#9da6b9] flex items-center justify-center pl-4 pr-3 group-focus-within/search:text-primary transition-colors">
              <span className="material-symbols-outlined text-[24px]">search</span>
            </div>
            <input className="flex w-full min-w-0 flex-1 bg-transparent border-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#9da6b9] focus:outline-0 focus:ring-0 text-base font-normal leading-normal h-full rounded-r-xl" placeholder="Search sub-categories..." value="" />
          </div>
        </label>
      </div>
      {/* Main Content: Technology Grid */}
      <div className="flex-1 bg-background-light dark:bg-background-dark">
        {/* Grid of Selection Cards (Large Buttons) */}
        <div className="grid grid-cols-2 gap-4 p-4">
          <Link href="/topic-selection" className="group relative flex flex-col justify-between aspect-[4/3] rounded-2xl p-5 cursor-pointer overflow-hidden bg-white dark:bg-[#1c2333] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-primary/50 transition-all active:scale-[0.98] text-left">
            {/* Gradient decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-100 dark:opacity-40"></div>
            {/* Icon */}
            <div className="z-10 bg-blue-100 dark:bg-primary/20 w-11 h-11 rounded-xl flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-[24px]">verified_user</span>
            </div>
            {/* Text Content */}
            <div className="z-10 w-full">
              <p className="text-slate-900 dark:text-white text-[15px] font-bold leading-tight">Zero Trust</p>
              <p className="text-slate-500 dark:text-slate-400 text-[11px] font-medium mt-1 leading-tight">Network Access</p>
            </div>
            {/* Action Indicator */}
            <div className="absolute right-4 top-4 text-slate-300 dark:text-slate-600 group-hover:text-primary dark:group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </div>
          </Link>
          <Link href="/topic-selection" className="group relative flex flex-col justify-between aspect-[4/3] rounded-2xl p-5 cursor-pointer overflow-hidden bg-white dark:bg-[#1c2333] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-primary/50 transition-all active:scale-[0.98] text-left">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-100 dark:opacity-40"></div>
            <div className="z-10 bg-indigo-100 dark:bg-indigo-500/20 w-11 h-11 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-[24px]">cloud_sync</span>
            </div>
            <div className="z-10 w-full">
              <p className="text-slate-900 dark:text-white text-[15px] font-bold leading-tight">Hybrid Cloud</p>
              <p className="text-slate-500 dark:text-slate-400 text-[11px] font-medium mt-1 leading-tight">Infrastructure</p>
            </div>
            <div className="absolute right-4 top-4 text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </div>
          </Link>
          <Link href="/topic-selection" className="group relative flex flex-col justify-between aspect-[4/3] rounded-2xl p-5 cursor-pointer overflow-hidden bg-white dark:bg-[#1c2333] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-primary/50 transition-all active:scale-[0.98] text-left">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-100 dark:opacity-40"></div>
            <div className="z-10 bg-emerald-100 dark:bg-emerald-500/20 w-11 h-11 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-[24px]">support_agent</span>
            </div>
            <div className="z-10 w-full">
              <p className="text-slate-900 dark:text-white text-[15px] font-bold leading-tight">Managed Services</p>
              <p className="text-slate-500 dark:text-slate-400 text-[11px] font-medium mt-1 leading-tight">IT Operations</p>
            </div>
            <div className="absolute right-4 top-4 text-slate-300 dark:text-slate-600 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </div>
          </Link>
          <Link href="/topic-selection" className="group relative flex flex-col justify-between aspect-[4/3] rounded-2xl p-5 cursor-pointer overflow-hidden bg-white dark:bg-[#1c2333] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-primary/50 transition-all active:scale-[0.98] text-left">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-100 dark:opacity-40"></div>
            <div className="z-10 bg-orange-100 dark:bg-orange-500/20 w-11 h-11 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 mb-3 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-[24px]">hub</span>
            </div>
            <div className="z-10 w-full">
              <p className="text-slate-900 dark:text-white text-[15px] font-bold leading-tight">SD-WAN</p>
              <p className="text-slate-500 dark:text-slate-400 text-[11px] font-medium mt-1 leading-tight">Connectivity</p>
            </div>
            <div className="absolute right-4 top-4 text-slate-300 dark:text-slate-600 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </div>
          </Link>
          <Link href="/topic-selection" className="group relative flex flex-col justify-between aspect-[4/3] rounded-2xl p-5 cursor-pointer overflow-hidden bg-white dark:bg-[#1c2333] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-primary/50 transition-all active:scale-[0.98] text-left">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-100 dark:opacity-40"></div>
            <div className="z-10 bg-red-100 dark:bg-red-500/20 w-11 h-11 rounded-xl flex items-center justify-center text-red-600 dark:text-red-400 mb-3 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-[24px]">devices_other</span>
            </div>
            <div className="z-10 w-full">
              <p className="text-slate-900 dark:text-white text-[15px] font-bold leading-tight">Endpoint Security</p>
              <p className="text-slate-500 dark:text-slate-400 text-[11px] font-medium mt-1 leading-tight">Device Protection</p>
            </div>
            <div className="absolute right-4 top-4 text-slate-300 dark:text-slate-600 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </div>
          </Link>
          <Link href="/topic-selection" className="group relative flex flex-col justify-between aspect-[4/3] rounded-2xl p-5 cursor-pointer overflow-hidden bg-white dark:bg-[#1c2333] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-primary/50 transition-all active:scale-[0.98] text-left">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-100 dark:opacity-40"></div>
            <div className="z-10 bg-purple-100 dark:bg-purple-500/20 w-11 h-11 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-[24px]">fingerprint</span>
            </div>
            <div className="z-10 w-full">
              <p className="text-slate-900 dark:text-white text-[15px] font-bold leading-tight">Identity Mgmt</p>
              <p className="text-slate-500 dark:text-slate-400 text-[11px] font-medium mt-1 leading-tight">Access Control</p>
            </div>
            <div className="absolute right-4 top-4 text-slate-300 dark:text-slate-600 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </div>
          </Link>
        </div>
        {/* Extra info section to fill space nicely */}
        <div className="p-6 text-center">
          <p className="text-xs text-slate-400 dark:text-slate-600">Selecting a category will start a new discovery session.</p>
        </div>
      </div>
      {/* BottomNavBar */}
      <div className="fixed bottom-0 w-full z-30 border-t border-gray-200 dark:border-[#282e39] bg-white dark:bg-[#1c1f27] px-4 pb-6 pt-2">
        <div className="flex gap-2">
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-[#9da6b9] hover:text-primary transition-colors py-1" href="#">
            <span className="material-symbols-outlined text-[24px]">home</span>
            <p className="text-[10px] font-medium leading-normal tracking-[0.015em]">Home</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-primary" href="#">
            <div className="relative">
              <span className="material-symbols-outlined fill text-[24px]">explore</span>
              <div className="absolute -top-1 -right-1 size-2 rounded-full bg-primary border border-white dark:border-[#1c1f27]"></div>
            </div>
            <p className="text-[10px] font-medium leading-normal tracking-[0.015em]">Discovery</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-[#9da6b9] hover:text-primary transition-colors py-1" href="#">
            <span className="material-symbols-outlined text-[24px]">library_books</span>
            <p className="text-[10px] font-medium leading-normal tracking-[0.015em]">Resources</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-[#9da6b9] hover:text-primary transition-colors py-1" href="#">
            <span className="material-symbols-outlined text-[24px]">person</span>
            <p className="text-[10px] font-medium leading-normal tracking-[0.015em]">Profile</p>
          </a>
        </div>
      </div>
    </div>
  )
}
