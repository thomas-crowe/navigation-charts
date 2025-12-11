import Link from "next/link";

export default function CategorySelection() {
  return (
    <div className="relative flex min-h-screen w-full flex-col pb-24 overflow-x-hidden">
      {/* TopAppBar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800/50">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-[24px]">business_center</span>
          </div>
        </div>
        <h1 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">Discovery</h1>
        <button className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
          <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">account_circle</span>
        </button>
      </header>
      {/* Main Content Scroll Area */}
      <main className="flex-1 px-4 pt-6">
        {/* Greeting */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">Good morning, Alex</h2>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">Choose a technology area to begin your discovery session.</p>
        </div>
        {/* SearchBar */}
        <div className="mb-8">
          <div className="relative group">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
            </div>
            <input className="block w-full rounded-xl border-0 bg-white dark:bg-card-dark py-4 pl-12 pr-4 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-base transition-all" placeholder="Search products (e.g., OpenShift)" type="text" />
          </div>
        </div>
        {/* Categories Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Technology Areas</h3>
          <button className="text-primary text-sm font-semibold hover:text-primary/80">View All</button>
        </div>
        {/* ImageGrid / Category Cards */}
        <div className="grid grid-cols-2 gap-4 pb-6">
          <Link href="/sub-category" className="group relative flex flex-col overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all active:scale-[0.98]">
            <div className="relative h-32 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCL3t3UFQpflqBkPG2F5YPTvFi5ukjtvS1pEkJG3lEWT1j_zNfSof31DKTG1AxifVGAvJUH6U8R6fU80Vh7oR-SytMar9L8o9qRTNXCj7vQjGa6o5ucwk9sjtakW3wyEG2iLmKvEEWcKbVy2lx3fuW9qxS1oCa6tp7FVdekYc0A-gwi2wCJmq4S1dZAUN29t6xklHrSrACPE6zz7nhH7rlmxJtTgM2bE4CvetGH4OCfxsXOWyYYRaWx-E-h8r9iHj-iD52ltH_1nk4')" }}>
              </div>
              <div className="absolute bottom-2 left-3 z-20">
                <span className="material-symbols-outlined text-white mb-1">shield</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-3 text-left">
              <h4 className="font-bold text-gray-900 dark:text-white text-base">Cybersecurity</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">Secure enterprise assets and identity.</p>
            </div>
          </Link>
          <Link href="/sub-category" className="group relative flex flex-col overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all active:scale-[0.98]">
            <div className="relative h-32 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdVOoH0VQEL94n1TpnKdIYjgG0N40azYLn1BSHiDI8lfKAJfaUSJ6O3o3UsffAQqBPM83k80dE-3gEb_74gur0x5gZgzAq3NevMpQ26n8KiwGwJ4ZmpqJ0XQs3bslwf2yaPK32rW5BTJO8sCzwIu7ECm6Jwah9noC3DWIX0CJjTz-LWJNr_czt7M5aacJhos3LXHIh9oPKqgBLlCsSdr2RqxhvN6asuNgWxjmkVT2hMYF9txtp-7xnv6Y4Y8QkOkaZrePni5DefnI')" }}>
              </div>
              <div className="absolute bottom-2 left-3 z-20">
                <span className="material-symbols-outlined text-white mb-1">cloud</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-3 text-left">
              <h4 className="font-bold text-gray-900 dark:text-white text-base">Cloud</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">Hybrid cloud &amp; infrastructure solutions.</p>
            </div>
          </Link>
          <Link href="/sub-category" className="group relative flex flex-col overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all active:scale-[0.98]">
            <div className="relative h-32 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgQtrGR5AVq2bVKqwife_SPa1rx7YJTJY4NxiLQvfzZKGnKvNOy4NviKX6tCYO9P9W_cTPXgv4Tz6CSZf0ZFoGcxgkcluVS4hxwiPvz0Grd_8KHM2NZ2A81XHDOymei9Jjomb5oJdlw0KAz992TXGwVdXcYa-ONxP8oastC3VADGXWk0-LvI9dd6jRGdQ4_qL3uICwWeX4TGygYmuBpi35I_KF60PcQtT-FzQjuYfS3fwRmdZ7GXGGaCQFBebi9z9UM28t_YHcOZc')" }}>
              </div>
              <div className="absolute bottom-2 left-3 z-20">
                <span className="material-symbols-outlined text-white mb-1">psychology</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-3 text-left">
              <h4 className="font-bold text-gray-900 dark:text-white text-base">Data &amp; AI</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">Intelligence, analytics and automation.</p>
            </div>
          </Link>
          <Link href="/sub-category" className="group relative flex flex-col overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all active:scale-[0.98]">
            <div className="relative h-32 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmdFUTCqfmHbWEzSZILWBDgFpAEmwEhhCFu0gmnjRrGknQkHKTXa5xmZdiCKgT_LYLytZPztjE1m4Xs1VKuOO0FfwYlTy2sMNr9WLLL-03Qj6opFRK5WYkfcQum2Rp1Dtx-CqV37wnsmpnnNZSNXbgFCCh0MIAZJaPReG0m-d4tct-oJbys9iIk-IDn6wjWwKtACJybIAG6cGwh1c0TQKu4fu4QWe9EHFW3jzZf3XdtwB0RAIXQkre52BaeCNYFNiQRWuRekufqZg')" }}>
              </div>
              <div className="absolute bottom-2 left-3 z-20">
                <span className="material-symbols-outlined text-white mb-1">terminal</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-3 text-left">
              <h4 className="font-bold text-gray-900 dark:text-white text-base">Red Hat</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">Open source enterprise platforms.</p>
            </div>
          </Link>
          <Link href="/sub-category" className="group relative flex flex-col overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all active:scale-[0.98]">
            <div className="relative h-32 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSFzWupeYL70aV5PPU0oZQimuQWgJEOI2X6zHUvacn2j65EEr6n_KoIyVLlYfK1Il7g5tGCJY229zf8KGmxKoBkkOmDscXHJ9o_arIo9WkSPUw-p8YQV_AcW3SNPaAk9RlTOB0ceaoOx5cpovBq8620kiZDfClZ7oU9EMOK3fdpq8pQQHe4y7VbJ6YXt7_NB0NOYvELfH62wdBvJZGnGZkuCT6mcZ9U3nsAbuivjZmYLEPj5Bf6-cnOy3p21-bHONge4eGgLExu_c')" }}>
              </div>
              <div className="absolute bottom-2 left-3 z-20">
                <span className="material-symbols-outlined text-white mb-1">devices</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-3 text-left">
              <h4 className="font-bold text-gray-900 dark:text-white text-base">Workplace</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">Collaboration and productivity tools.</p>
            </div>
          </Link>
          <Link href="/sub-category" className="group relative flex flex-col overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all active:scale-[0.98]">
            <div className="relative h-32 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBm-4jfC9HIkU_g2Bt-w1HM6Ss1KAqA3O0IIiHc-QP84-XkXuXFD26kZhQbq2WYMEM2C2Ym6ez-LhIUqC33kXfC3RAlKkxh8zwLLk3_EW9gJlKm1jPDh3orL8MFoDNM6jwcsHZJeGmzKG-H299BD22aQus0-IFn3Qu0CMCcRqN7pBOwziSM9fHSMevGgaBLKE6JaULarZ-_DEk8YoFPIfEiIQcduTQi0B1UYEcAUqOhaJTxwPslylvcjvR9jMRzSxa9jYBfU_oWZ34')" }}>
              </div>
              <div className="absolute bottom-2 left-3 z-20">
                <span className="material-symbols-outlined text-white mb-1">settings_suggest</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-3 text-left">
              <h4 className="font-bold text-gray-900 dark:text-white text-base">Automation</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">Workflow efficiency and logic.</p>
            </div>
          </Link>
        </div>
      </main>
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 dark:border-gray-800 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl safe-area-bottom">
        <div className="flex h-16 items-center justify-around px-2">
          <button className="flex flex-1 flex-col items-center justify-center gap-1 p-2 text-primary">
            <span className="material-symbols-outlined text-[26px]">home</span>
            <span className="text-[10px] font-medium">Home</span>
          </button>
          <button className="flex flex-1 flex-col items-center justify-center gap-1 p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[26px]">history</span>
            <span className="text-[10px] font-medium">Recent</span>
          </button>
          <button className="flex flex-1 flex-col items-center justify-center gap-1 p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[26px]">bookmark</span>
            <span className="text-[10px] font-medium">Saved</span>
          </button>
          <button className="flex flex-1 flex-col items-center justify-center gap-1 p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[26px]">person</span>
            <span className="text-[10px] font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
