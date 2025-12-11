import Link from "next/link";

export default function TopicSelection() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden font-display">
      {/* Top App Bar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <Link href="/sub-category" className="text-[#111318] dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </Link>
        <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Select Solution</h2>
        <div className="flex w-12 items-center justify-end cursor-pointer">
          <p className="text-[#637588] dark:text-[#9da6b9] text-base font-bold leading-normal tracking-[0.015em] shrink-0">Help</p>
        </div>
      </div>
      {/* Page Indicators */}
      <div className="flex w-full flex-row items-center justify-center gap-3 py-4">
        <div className="h-1.5 w-1.5 rounded-full bg-[#d1d5db] dark:bg-[#3b4354]"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-[#d1d5db] dark:bg-[#3b4354]"></div>
        <div className="h-1.5 w-8 rounded-full bg-primary"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-[#d1d5db] dark:bg-[#3b4354]"></div>
      </div>
      {/* Headline */}
      <div className="px-4 pt-2 pb-4">
        <h2 className="text-[#111318] dark:text-white tracking-tight text-[28px] font-extrabold leading-tight text-left mb-2">What solution are you discussing?</h2>
        <p className="text-[#637588] dark:text-[#9da6b9] text-base font-normal leading-normal">Choose a specific product to see relevant discovery questions.</p>
      </div>
      {/* Search Bar */}
      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
            <div className="text-[#637588] dark:text-[#9da6b9] flex border-none bg-white dark:bg-[#282e39] items-center justify-center pl-4 rounded-l-xl border-r-0">
              <span className="material-symbols-outlined text-[24px]">search</span>
            </div>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111318] dark:text-white focus:outline-0 focus:ring-0 border-none bg-white dark:bg-[#282e39] focus:border-none h-full placeholder:text-[#637588] dark:placeholder:text-[#9da6b9] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search products (e.g., Z-Scaler)" value="" />
          </div>
        </label>
      </div>
      {/* General / Quick Start Option */}
      <div className="px-4 py-2">
        <Link href="/discovery-questions" className="flex items-center gap-4 rounded-xl bg-white dark:bg-[#1E1E1E] p-4 shadow-sm cursor-pointer border border-transparent hover:border-primary/50 transition-colors group">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined">lightbulb</span>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#111318] dark:text-white text-base font-bold leading-tight">General Discovery</p>
            <p className="text-[#637588] dark:text-[#9da6b9] text-sm font-normal leading-normal">Not sure? Start here.</p>
          </div>
          <div className="ml-auto text-[#637588] dark:text-[#9da6b9]">
            <span className="material-symbols-outlined">chevron_right</span>
          </div>
        </Link>
      </div>
      {/* Section Title */}
      <div className="px-4 pt-4 pb-2">
        <h3 className="text-[#111318] dark:text-white text-base font-bold leading-tight">Popular Solutions</h3>
      </div>
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-3 p-4">
        <Link href="/discovery-questions" className="relative flex flex-col gap-3 rounded-xl justify-end p-4 aspect-[4/3] overflow-hidden cursor-pointer group shadow-sm">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCu24BJuP39JlxJR3g6GjL6f1yVmbD27kDb75ZIu7qPmPJ4a0tqoz2vKC_bbqBD60e0iLtB2Ntln8lDfEAzX82HSgLB4_PlQ69OhwHzs7V1hs5FvVcXEan_S90sW9NIGGoG8PEwpHnn9o3sbTFYbPyZtrsSt871aC-tdMnpA9CnbZWC8qnMyXz03UpUZd2rNSQJ6NRYZuuCjxWBHf2UmyK9lrWkOivlwTVC7TTZfWCtz7VJohAf9VGeKEwGai81wK_ssUrAzrwFsTI')" }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 flex items-center justify-between w-full">
            <p className="text-white text-lg font-bold leading-tight line-clamp-2">Z-Scaler</p>
            <span className="material-symbols-outlined text-white/80">arrow_forward</span>
          </div>
        </Link>
        <Link href="/discovery-questions" className="relative flex flex-col gap-3 rounded-xl justify-end p-4 aspect-[4/3] overflow-hidden cursor-pointer group shadow-sm">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuATgSNjXU_tr2t-2nDHlxY5-pHF8RWp7gl0gVon5hR_Y3Mo_tj-WbuPXVuAJfIKQhHt8gB46OY1JGMkF4AfLz0sHx1-mptknlqwDT8yEJVtWoy1oUsTlRa1SNSCpWCwj2I2KCG21EOn9hU8V4DAONB4KliZVE_y_DN-H7RC1BGk3ihVK3AjM2m-q3dwmOH6sFnUE51PEzJDKWZtKMng_A6X5XnHJNCbyq1Qhic3hCfBi0NuYWnU14u4gQMJRj0drCAszoRotFTK4d0')" }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 flex items-center justify-between w-full">
            <p className="text-white text-lg font-bold leading-tight line-clamp-2">OpenShift</p>
            <span className="material-symbols-outlined text-white/80">arrow_forward</span>
          </div>
        </Link>
        <Link href="/discovery-questions" className="relative flex flex-col gap-3 rounded-xl justify-end p-4 aspect-[4/3] overflow-hidden cursor-pointer group shadow-sm">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAonaIN-JCkqPvVzhUTjlPgHaqszFY0HI3Z3vCHb_CqTZbFoPcCUBe0yk7km46TKRmAnBw6lM7PYBGvTUiDIC2aFEy7rJdPuiB_hsJXmztbEf7yMrHEWU5x-OqcMExVL3DehcLggBGwDxzql7v-e361c4o3n_wMxanktNtAB12fgeBPk4b7o8nynLSLr0E1LkaXXE_-b86pJmCQhUiR5n9lvx__zadV60YwUW1gnh4xSYB9Qr-Ze296QscKRWdPkQM_prfe7loLpWU')" }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 flex items-center justify-between w-full">
            <p className="text-white text-lg font-bold leading-tight line-clamp-2">Kubernetes</p>
            <span className="material-symbols-outlined text-white/80">arrow_forward</span>
          </div>
        </Link>
        <Link href="/discovery-questions" className="relative flex flex-col gap-3 rounded-xl justify-end p-4 aspect-[4/3] overflow-hidden cursor-pointer group shadow-sm">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIy7waNIm_sjXJKTNVXWtK2I-Ecv1P1v4qWzYezD5br7ggKYb317SjIAysvMMfSa6NhFHg_Gf95XDTgH32EOn6ACsyoBR_USKpGKth08GM1EkWE_yHBLwwui6xtdOghsSS97a5l0Iv3AdDPz1WA2O7xkWVtawFNHUd7PBB57ycNogsfpgfqo8lN7xJJSx7pJrjPwybcQ7m6O9MzNm0duPQLyD_7V9A1Q3Vbg-hdehR9X5W2no3fWM1oau2csdzKsSOCG9Gik1dnBY')" }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 flex items-center justify-between w-full">
            <p className="text-white text-lg font-bold leading-tight line-clamp-2">Azure DevOps</p>
            <span className="material-symbols-outlined text-white/80">arrow_forward</span>
          </div>
        </Link>
        <Link href="/discovery-questions" className="relative flex flex-col gap-3 rounded-xl justify-end p-4 aspect-[4/3] overflow-hidden cursor-pointer group shadow-sm">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrO-ib5duq33e42epOQvQvi4TGseGEdzQRXFh3-BzIA-9f76puuERGHmGGSaB9UhIsyAeYWXyuy1Qig4BvqpOv-SXs8ssfA-WrXJrHRTXsXEexzKoEjcTD6GxEzsj6KQo0oURDS_ahDZ3BZvj1iBkYU69IZnzHdCEKTLrNKvQI3WpKoGpq7jcFDc0t9SRfws_Q8e2u9T7LL622fYuUKVfWeXzwQayukWGtyLTkrpQmYsExQpL3g8gEQXCq7tYk_Lk8VKoBoV8x2bc')" }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 flex items-center justify-between w-full">
            <p className="text-white text-lg font-bold leading-tight line-clamp-2">Splunk</p>
            <span className="material-symbols-outlined text-white/80">arrow_forward</span>
          </div>
        </Link>
        <Link href="/discovery-questions" className="relative flex flex-col gap-3 rounded-xl justify-end p-4 aspect-[4/3] overflow-hidden cursor-pointer group shadow-sm">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDuiWVNN6Y0z8a2bu8HnWm--BcPZoq6bm-lvGYY6tSmnFXBC0R4HiA3DWu2OviwxeRClpD0LkHdEm-dKF37e_X3PQ09l_KOziv7ODqtpTOoCtCTIQuV9wrzjzGclL0SKtFLgGGlk695BYlKdNxtzQMR-A6YMXpXys3DshBfmVqFM8yctK0WRyGXsbBlMBosPQ1brP5UrwlOa2XN-QZIGaHmwL8kpCjkdJ5vqDBukIoHw5HjrjVL5EAUbASdhnttRgRk9_H5XxhGrIw')" }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 flex items-center justify-between w-full">
            <p className="text-white text-lg font-bold leading-tight line-clamp-2">AWS</p>
            <span className="material-symbols-outlined text-white/80">arrow_forward</span>
          </div>
        </Link>
      </div>
      {/* Bottom Spacer */}
      <div className="h-12 bg-transparent"></div>
    </div>
  )
}
