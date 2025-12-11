import Link from "next/link";

export default function DiscoveryQuestions() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-slate-900 dark:text-white overflow-x-hidden antialiased">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 pb-2 justify-between">
          <Link href="/topic-selection" className="flex size-10 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-gray-900 dark:text-white" style={{ fontSize: '24px' }}>arrow_back_ios_new</span>
          </Link>
          <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Discovery Phase</h2>
        </div>
        {/* Context Chips (Scrollable) */}
        <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar items-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mr-1 shrink-0">Context:</span>
          <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 dark:bg-primary/20 pl-3 pr-3 border border-primary/20">
            <p className="text-primary dark:text-blue-400 text-xs font-medium">Cybersecurity</p>
          </div>
          <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 dark:bg-primary/20 pl-3 pr-3 border border-primary/20">
            <p className="text-primary dark:text-blue-400 text-xs font-medium">Enterprise</p>
          </div>
          <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 dark:bg-primary/20 pl-3 pr-3 border border-primary/20">
            <p className="text-primary dark:text-blue-400 text-xs font-medium">Cloud Migration</p>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-6 p-4 pb-28">
        {/* Strategic Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>lightbulb</span>
            <h2 className="text-gray-900 dark:text-white tracking-tight text-xl font-bold">Strategic Insight</h2>
          </div>
          {/* Question Card 1 (Active) */}
          <div className="flex flex-col bg-white dark:bg-[#1C2333] rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-800 mb-4">
            <div className="flex justify-between items-start gap-4 mb-3">
              <p className="text-gray-900 dark:text-white text-lg font-semibold leading-snug">How does your current infrastructure handle sudden peak load times?</p>
              <button className="text-gray-400 hover:text-primary transition-colors shrink-0">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>content_copy</span>
              </button>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal mb-6">Focus on scalability, elasticity, and performance metrics during high traffic.</p>
            <div className="flex items-center justify-end">
              <button className="flex items-center justify-center gap-2 rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:bg-blue-600 transition-all active:scale-95">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>check</span>
                <span>Mark Asked</span>
              </button>
            </div>
          </div>
          {/* Question Card 2 (Active) */}
          <div className="flex flex-col bg-white dark:bg-[#1C2333] rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="flex justify-between items-start gap-4 mb-3">
              <p className="text-gray-900 dark:text-white text-lg font-semibold leading-snug">What is your long-term vision for data sovereignty across regions?</p>
              <button className="text-gray-400 hover:text-primary transition-colors shrink-0">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>content_copy</span>
              </button>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal mb-6">Listen for compliance concerns like GDPR or local data residency laws.</p>
            <div className="flex items-center justify-end">
              <button className="flex items-center justify-center gap-2 rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:bg-blue-600 transition-all active:scale-95">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>check</span>
                <span>Mark Asked</span>
              </button>
            </div>
          </div>
        </div>
        {/* Pain Points Section */}
        <div>
          <div className="flex items-center gap-2 mb-3 mt-2">
            <span className="material-symbols-outlined text-orange-500" style={{ fontSize: '20px' }}>warning</span>
            <h2 className="text-gray-900 dark:text-white tracking-tight text-xl font-bold">Pain Points</h2>
          </div>
          {/* Question Card 3 (Asked/Dimmed) */}
          <div className="relative flex flex-col bg-gray-50 dark:bg-[#161b26] rounded-xl p-5 border border-gray-200 dark:border-gray-800 opacity-70">
            {/* Overlay for "Asked" state */}
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-1 rounded text-xs font-bold border border-green-500/20">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>check_circle</span>
              ASKED
            </div>
            <div className="flex justify-between items-start gap-4 mb-3">
              <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold leading-snug">What is the biggest bottleneck your team faces during deployment?</p>
            </div>
            <p className="text-gray-400 dark:text-gray-500 text-sm font-medium leading-normal mb-6">Identify specific friction points in CI/CD pipelines.</p>
            <div className="flex items-center justify-end">
              <button className="flex items-center justify-center gap-2 rounded-lg h-9 px-4 bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm font-bold hover:bg-gray-300 dark:hover:bg-gray-700 transition-all">
                <span>Undo</span>
              </button>
            </div>
          </div>
          {/* Question Card 4 */}
          <div className="flex flex-col bg-white dark:bg-[#1C2333] rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-800 mt-4">
            <div className="flex justify-between items-start gap-4 mb-3">
              <p className="text-gray-900 dark:text-white text-lg font-semibold leading-snug">Where do you see the most friction in your current security stack?</p>
              <button className="text-gray-400 hover:text-primary transition-colors shrink-0">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>content_copy</span>
              </button>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal mb-6">Target tool sprawl or lack of integration.</p>
            <div className="flex items-center justify-end">
              <button className="flex items-center justify-center gap-2 rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:bg-blue-600 transition-all active:scale-95">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>check</span>
                <span>Mark Asked</span>
              </button>
            </div>
          </div>
        </div>
        {/* Budget Section */}
        <div>
          <div className="flex items-center gap-2 mb-3 mt-2">
            <span className="material-symbols-outlined text-green-500" style={{ fontSize: '20px' }}>attach_money</span>
            <h2 className="text-gray-900 dark:text-white tracking-tight text-xl font-bold">Budget &amp; Timeline</h2>
          </div>
          {/* Question Card 5 */}
          <div className="flex flex-col bg-white dark:bg-[#1C2333] rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="flex justify-between items-start gap-4 mb-3">
              <p className="text-gray-900 dark:text-white text-lg font-semibold leading-snug">Have you allocated budget for a multi-cloud strategy this fiscal year?</p>
              <button className="text-gray-400 hover:text-primary transition-colors shrink-0">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>content_copy</span>
              </button>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal mb-6">Qualify the opportunity size and timeline immediately.</p>
            <div className="flex items-center justify-end">
              <button className="flex items-center justify-center gap-2 rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:bg-blue-600 transition-all active:scale-95">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>check</span>
                <span>Mark Asked</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 w-full bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 p-4 pb-8 z-40">
        <div className="absolute inset-0 bg-gradient-to-t from-background-light to-transparent dark:from-background-dark pointer-events-none"></div>
        <div className="relative flex gap-3">
          <button className="flex-1 flex items-center justify-center h-12 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-bold text-sm hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
            Reset Filters
          </button>
          <button className="flex-[2] flex items-center justify-center h-12 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/40 hover:bg-blue-600 transition-transform active:scale-[0.98]">
            View Solutions (3)
            <span className="material-symbols-outlined ml-2" style={{ fontSize: '20px' }}>arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  )
}
