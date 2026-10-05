import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#ffffff] border-t border-[#dae2fd]/70 shadow-[0_-1px_8px_rgba(0,0,0,0.03)] py-6 mt-16">
      <div className="w-full px-4 md:px-8 xl:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] uppercase tracking-wider font-semibold">
            High-Altitude Himalayan Expedition Shell
          </span>
          <span className="text-[#bfc7d2] font-['JetBrains_Mono'] text-xs">•</span>
          <span className="font-['JetBrains_Mono'] text-xs text-[#006947] font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#006947] animate-pulse"></span>
            TELEMETRY SYNCED
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#3f4850]">
          <span>Route Segments: Kathmandu • Besisahar • Manang • Pokhara • Ghandruk</span>
          <span className="font-['JetBrains_Mono'] text-[#707881] font-semibold">EST. 2025</span>
        </div>
      </div>
    </footer>
  );
};
