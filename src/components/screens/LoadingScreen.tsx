import React, { useState, useEffect } from 'react';
import { NavTab } from '../HeaderNav';

interface LoadingScreenProps {
  onEnterExpedition: (tab: NavTab) => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onEnterExpedition }) => {
  const [syncProgress, setSyncProgress] = useState(0);
  const [activeNode, setActiveNode] = useState<string>('man');

  useEffect(() => {
    const timer = setInterval(() => {
      setSyncProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 20;
      });
    }, 150);
    return () => clearInterval(timer);
  }, []);

  const routeNodes = [
    { id: 'ktm', label: 'KTM (1,400m)', x: 100, y: 155, alt: '1,400m' },
    { id: 'cha', label: 'CHAME (2,670m)', x: 260, y: 125, alt: '2,670m' },
    { id: 'man', label: 'MANANG (3,519m)', x: 420, y: 80, alt: '3,519m', isApex: true },
    { id: 'pok', label: 'POKHARA (822m)', x: 580, y: 140, alt: '822m' },
    { id: 'gha', label: 'GHANDRUK (1,940m)', x: 740, y: 110, alt: '1,940m' },
    { id: 'ret', label: 'RETURN KTM', x: 880, y: 150, alt: '1,400m' },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full bg-[#131b2e] text-[#faf8ff] flex flex-col justify-between p-4 sm:p-8 lg:p-12 overflow-hidden select-none">
      {/* Background Himalayan Silhouette and ambient glow */}
      <div 
        className="absolute inset-0 opacity-25 bg-cover bg-center pointer-events-none mix-blend-luminosity"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0sJSrReyxY5Ib2Zq7WJ2VqOlwnYLx7BmHxhqDgvtJAF6LC7b6QLwzo0nvGbXKRWbnkG7HIm7cxWYIXvbWpuFUFD4nbw3gMOA2krZV8kyZkVravi87dIUG0PbdiyHooi1EW6wHNePepbWGwHDD5I7ajqqZyAgX5fsFCgW4T_KcoEUJ9dKqqYH0Vx-EbnpY9YTmfvzqmV8PdG7Hq0744qBjAWg0_wVZsu-gBSBPP5UIA6cOmNSTSb7")`,
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#006194]/20 via-[#a200ba]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Top Protocol Status Bar */}
      <div className="relative z-10 w-full flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-['JetBrains_Mono']">
        <div className="bg-[#283044]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-[#6ffbbe]">
          <span className="w-2 h-2 rounded-full bg-[#6ffbbe] animate-ping" />
          <span>DOSSIER v2.4 ONLINE</span>
        </div>
        <div className="bg-[#283044]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-[#eef0ff]">
          <span className="material-symbols-outlined text-[16px] text-[#93ccff]">devices</span>
          <span>PC • SMART BOARDS • MOBILE</span>
        </div>
        <div className="bg-[#283044]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-[#fbabff]">
          <span className="material-symbols-outlined text-[16px] text-[#ea57ff]">altitude</span>
          <span>3,519M SUMMIT CORRIDOR</span>
        </div>
      </div>

      {/* Centerpiece Container */}
      <div className="relative z-10 max-w-4xl mx-auto my-auto w-full flex flex-col items-center text-center pt-8 pb-6">
        {/* Iridescent Glowing Addigen Agency Brand Crest */}
        <div className="relative mb-6 group cursor-pointer" onClick={() => onEnterExpedition('project-acknowledgement')}>
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#ea57ff] to-[#6ffbbe] opacity-75 blur-md group-hover:opacity-100 transition-opacity animate-pulse" />
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white flex flex-col items-center justify-center p-3 shadow-2xl border-2 border-white/80">
            {/* Custom SVG Monogram */}
            <div className="flex flex-col items-center justify-center">
              <svg viewBox="0 0 100 80" className="w-16 h-12">
                <path
                  d="M15,65 Q35,15 50,12 Q65,15 85,65"
                  fill="none"
                  stroke="#006194"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M30,48 Q55,42 75,55"
                  fill="none"
                  stroke="#a200ba"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
                <circle cx="50" cy="12" r="3" fill="#ea57ff" />
              </svg>
              <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[12px] tracking-wider text-[#131b2e] uppercase -mt-1">
                ADDIGEN
              </span>
              <span className="font-['JetBrains_Mono'] text-[7px] text-[#707881] uppercase tracking-widest font-semibold">
                — AGENCY —
              </span>
              <span className="text-[5.5px] text-[#707881] scale-90 whitespace-nowrap mt-0.5">
                Digital Marketing • Websites • Creative &amp; More
              </span>
            </div>
          </div>
        </div>

        {/* Operational Lead Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#6ffbbe] animate-pulse" />
          <span className="font-['JetBrains_Mono'] text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#6ffbbe]">
            EXECUTIVE EXPEDITION PROTOCOL
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-3xl drop-shadow-md">
          Five Days. One Road. A Thousand Himalayan Memories.
        </h1>

        {/* Subtitle */}
        <div className="mt-4 space-y-1">
          <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#dae2fd] font-medium">
            Official Expedition Dossier &amp; Smart Trip Management System
          </p>
          <p className="font-['JetBrains_Mono'] text-xs sm:text-sm text-[#93ccff]">
            Grade XI English Presentation Edition • Annapurna Trans-Himalayan Arc
          </p>
        </div>

        {/* Route Synchronization Progress Bar */}
        <div className="w-full max-w-2xl mt-8 bg-[#283044]/60 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 shadow-xl">
          <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] font-bold mb-2">
            <span className="flex items-center gap-2 text-[#93ccff]">
              <span className="material-symbols-outlined text-[16px]">sync_alt</span>
              ROUTE SYNCHRONIZATION
            </span>
            <span className="text-[#6ffbbe]">{syncProgress}% READY</span>
          </div>

          {/* Glowing bar */}
          <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-[#6ffbbe] via-[#93ccff] to-[#ea57ff] rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(111,251,190,0.6)]"
              style={{ width: `${syncProgress}%` }}
            />
          </div>

          <div className="flex items-center justify-between mt-3 text-[11px] font-['JetBrains_Mono'] text-[#dae2fd]/80">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ffbbe]" />
              Telemetry Synchronized
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#93ccff]" />
              Lodges Verified
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea57ff]" />
              Safety Checkpoints Active
            </span>
          </div>

          {/* Interactive Micro Route Profile SVG */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <svg viewBox="0 0 1000 200" className="w-full h-20 overflow-visible">
              <defs>
                <linearGradient id="routeCurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#006194" />
                  <stop offset="40%" stopColor="#a200ba" />
                  <stop offset="70%" stopColor="#00855b" />
                  <stop offset="100%" stopColor="#6ffbbe" />
                </linearGradient>
              </defs>
              <path
                d="M 100 155 Q 180 145 260 125 T 420 80 T 580 140 T 740 110 T 880 150"
                fill="none"
                stroke="url(#routeCurveGrad)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {routeNodes.map((node) => {
                const isSelected = activeNode === node.id;
                return (
                  <g
                    key={node.id}
                    className="cursor-pointer group"
                    onClick={() => setActiveNode(node.id)}
                  >
                    {node.isApex && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="14"
                        fill="#ea57ff"
                        className="animate-ping opacity-30"
                      />
                    )}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? 7 : 5}
                      fill={isSelected ? '#ea57ff' : '#ffffff'}
                      stroke={isSelected ? '#ffffff' : '#006194'}
                      strokeWidth={isSelected ? 3 : 2}
                      className="transition-all"
                    />
                    <text
                      x={node.x}
                      y={node.y - 12}
                      textAnchor="middle"
                      fill={isSelected ? '#fbabff' : '#bfc7d2'}
                      fontSize="11"
                      fontFamily="JetBrains Mono"
                      fontWeight="bold"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Main Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            onClick={() => onEnterExpedition('expedition-dossier')}
            className="px-8 py-3.5 rounded-xl bg-[#007bb9] hover:bg-[#006194] text-white font-['Plus_Jakarta_Sans'] font-bold text-base shadow-lg shadow-[#007bb9]/30 hover:shadow-xl transition-all flex items-center gap-3 cursor-pointer group"
          >
            <span className="material-symbols-outlined text-[22px] group-hover:rotate-45 transition-transform">
              explore
            </span>
            <span>ENTER EXPEDITION</span>
            <span className="material-symbols-outlined text-[20px]">bar_chart</span>
          </button>

          <button
            onClick={() => onEnterExpedition('project-acknowledgement')}
            className="px-6 py-3.5 rounded-xl bg-[#283044]/90 hover:bg-[#283044] text-[#dae2fd] hover:text-white font-['Plus_Jakarta_Sans'] font-semibold text-base border border-white/15 transition-all flex items-center gap-2.5 cursor-pointer shadow-md"
          >
            <span className="material-symbols-outlined text-[20px] text-[#93ccff]">verified_user</span>
            <span>Briefing Dossier</span>
          </button>
        </div>
      </div>

      {/* Footer Status Metadata */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between text-xs font-['JetBrains_Mono'] text-[#bfc7d2]/70 pt-4 border-t border-white/10 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#6ffbbe]" />
          <span>OFFLINE CACHE READY</span>
          <span>•</span>
          <span className="text-[#6ffbbe]">4X4 FLEET DISPATCH: CONFIRMED</span>
        </div>
        <div>
          <span>CURATED BY ADDIGEN AGENCY</span>
          <span className="mx-2">|</span>
          <span className="text-[#dae2fd] font-semibold">CLASS OF 2025</span>
        </div>
      </div>
    </div>
  );
};
