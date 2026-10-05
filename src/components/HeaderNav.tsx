import React, { useState } from 'react';

export type NavTab = 
  | 'loading-experience'
  | 'expedition-dossier'
  | 'day-by-day-itinerary'
  | 'trip-wallet-accounts'
  | 'transfers-logistics'
  | 'trip-control-center'
  | 'project-acknowledgement';

interface HeaderNavProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenOfflineModal: () => void;
  onOpenSosModal: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentTab,
  onSelectTab,
  onOpenOfflineModal,
  onOpenSosModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'loading-experience', label: 'Loading Experience' },
    { id: 'expedition-dossier', label: 'Expedition Dossier' },
    { id: 'day-by-day-itinerary', label: 'Day-by-Day Itinerary' },
    { id: 'trip-wallet-accounts', label: 'Trip Wallet & Accounts' },
    { id: 'transfers-logistics', label: 'Transfers & Logistics' },
    { id: 'trip-control-center', label: 'Trip Control Center' },
    { id: 'project-acknowledgement', label: 'Project Acknowledgement' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#ffffff]/90 backdrop-blur-xl border-b border-[#dae2fd]/60 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full px-4 md:px-8 xl:px-12 flex items-center justify-between gap-4">
        {/* Brand logo & title */}
        <div 
          onClick={() => onSelectTab('expedition-dossier')}
          className="flex items-center gap-3 shrink-0 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#e2e7ff] flex items-center justify-center text-[#006194] group-hover:bg-[#cce5ff] transition-colors">
            <span className="material-symbols-outlined text-[24px]">explore</span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Plus_Jakarta_Sans'] font-semibold text-lg text-[#131b2e] tracking-tight leading-tight">
              Nepal Road Expedition
            </span>
            <span className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#3f4850] uppercase tracking-wider">
              Manang &amp; Ghandruk Dossier
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`px-3 py-2 rounded-lg text-sm transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#007bb9] text-[#fdfcff] font-semibold shadow-sm'
                    : 'text-[#3f4850] hover:bg-[#e2e7ff]/70 hover:text-[#131b2e]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons & Badges */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick telemetry badge */}
          <div className="hidden 2xl:flex items-center gap-2 bg-[#f2f3ff] px-3 py-1.5 rounded-lg border border-[#bfc7d2]/40 text-xs font-['JetBrains_Mono']">
            <span className="inline-flex items-center gap-1.5 text-[#3f4850] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#006947] animate-pulse"></span>
              5 DAYS
            </span>
            <span className="text-[#bfc7d2]">•</span>
            <span className="text-[#3f4850] font-semibold">4 TRAVELLERS</span>
            <span className="text-[#bfc7d2]">•</span>
            <span className="text-[#006194] font-bold">NPR 120K CAP</span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={onOpenOfflineModal}
              title="Offline Field Pack"
              className="p-2 rounded-lg bg-[#eaedff] text-[#3f4850] hover:bg-[#dae2fd] hover:text-[#131b2e] transition-colors flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">download_for_offline</span>
            </button>
            <button
              onClick={onOpenSosModal}
              title="SOS Telemetry"
              className="p-2 rounded-lg bg-[#ffdad6] text-[#ba1a1a] hover:bg-[#ba1a1a] hover:text-white transition-colors flex items-center justify-center cursor-pointer font-bold text-xs"
            >
              <span className="material-symbols-outlined text-[20px]">sos</span>
            </button>
          </div>

          {/* Profile / Grade XI badge avatar */}
          <button
            onClick={() => onSelectTab('project-acknowledgement')}
            title="Grade XI Student Cohort"
            className="w-9 h-9 rounded-full bg-[#006194] text-white flex items-center justify-center shrink-0 hover:ring-2 hover:ring-[#93ccff] transition-all cursor-pointer font-semibold text-xs"
          >
            <span className="material-symbols-outlined text-[18px]">school</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#eaedff] text-[#131b2e] hover:bg-[#dae2fd]"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#dae2fd] px-4 py-3 shadow-lg">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm text-left transition-all ${
                    isActive
                      ? 'bg-[#007bb9] text-[#fdfcff] font-semibold'
                      : 'text-[#3f4850] hover:bg-[#e2e7ff]/70 hover:text-[#131b2e]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="mt-3 pt-3 border-t border-[#eaedff] flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#3f4850]">
            <span>5 DAYS • 4 TRAVELLERS</span>
            <span className="font-bold text-[#006194]">NPR 120K CEILING</span>
          </div>
        </div>
      )}
    </header>
  );
};
