import React, { useState } from 'react';
import { DAYS_ITINERARY, DayItinerary } from '../../data/expeditionData';
import { NavTab } from '../HeaderNav';

interface ItineraryScreenProps {
  currentDayNum: number;
  onSelectDay: (day: number) => void;
  onNavigateTab: (tab: NavTab) => void;
  onOpenOfflineModal: () => void;
}

type ItineraryViewMode = 'day-inspection' | 'full-mosaic';
type MosaicSubView = 'mosaic' | 'elevation' | 'nodes';

export const ItineraryScreen: React.FC<ItineraryScreenProps> = ({
  currentDayNum,
  onSelectDay,
  onNavigateTab,
  onOpenOfflineModal,
}) => {
  const [viewMode, setViewMode] = useState<ItineraryViewMode>('day-inspection');
  const [mosaicSubView, setMosaicSubView] = useState<MosaicSubView>('mosaic');
  const [activeWaypointTimeline, setActiveWaypointTimeline] = useState<number | null>(null);

  const activeDay: DayItinerary = DAYS_ITINERARY.find((d) => d.dayNum === currentDayNum) || DAYS_ITINERARY[0];

  const handlePrevDay = () => {
    if (activeDay.dayNum > 1) {
      onSelectDay(activeDay.dayNum - 1);
    }
  };

  const handleNextDay = () => {
    if (activeDay.dayNum < DAYS_ITINERARY.length) {
      onSelectDay(activeDay.dayNum + 1);
    }
  };

  return (
    <div className="w-full flex flex-col gap-6 pb-12">
      {/* TOP COMMAND STRIP */}
      <div className="w-full px-4 md:px-8 xl:px-12 pt-4">
        <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-[#dae2fd]/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-['JetBrains_Mono']">
            <span className="flex items-center gap-1.5 text-[#006194] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#006194]" />
              5-DAY TACTICAL DOSSIER
            </span>
            <span className="text-[#bfc7d2]">|</span>
            <span className="text-[#3f4850] hidden sm:inline">ANNAPURNA CIRCUIT HIGHWAY RUN</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#cce5ff] text-[#001d31] font-bold">
              4 TRAVELLERS • 4X4 RIG
            </span>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex items-center gap-2 bg-[#f2f3ff] p-1 rounded-xl">
            <button
              onClick={() => setViewMode('day-inspection')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-['Plus_Jakarta_Sans'] font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'day-inspection'
                  ? 'bg-white text-[#006194] shadow-xs'
                  : 'text-[#3f4850] hover:text-[#131b2e]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">calendar_view_day</span>
              <span>Day Inspection</span>
            </button>
            <button
              onClick={() => setViewMode('full-mosaic')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-['Plus_Jakarta_Sans'] font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'full-mosaic'
                  ? 'bg-white text-[#006194] shadow-xs'
                  : 'text-[#3f4850] hover:text-[#131b2e]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">grid_view</span>
              <span>Full Route Mosaic</span>
            </button>
          </div>
        </div>
      </div>

      {/* DAY INSPECTION MODE */}
      {viewMode === 'day-inspection' ? (
        <div className="w-full px-4 md:px-8 xl:px-12 flex flex-col gap-6">
          {/* Day Selector Pills Bar */}
          <div className="w-full flex items-center gap-2 overflow-x-auto pb-1">
            {DAYS_ITINERARY.map((day) => {
              const isSelected = day.dayNum === currentDayNum;
              return (
                <button
                  key={day.dayNum}
                  onClick={() => onSelectDay(day.dayNum)}
                  className={`px-4 py-3 rounded-xl transition-all flex items-center gap-3 shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#006194] text-white shadow-sm'
                      : 'bg-white hover:bg-[#eaedff] text-[#131b2e] border border-[#dae2fd]/60'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-['JetBrains_Mono'] text-xs font-bold ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-[#eaedff] text-[#006194]'
                    }`}
                  >
                    {String(day.dayNum).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold leading-tight">
                      {day.routeShort}
                    </span>
                    <span
                      className={`font-['JetBrains_Mono'] text-[10px] ${
                        isSelected ? 'text-[#cce5ff]' : 'text-[#707881]'
                      }`}
                    >
                      ▲ {day.altBadge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Day Inspection Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column (Col 7) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Day Header Box */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#dae2fd]/60 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#ffdad6] text-[#ba1a1a] font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider">
                    {activeDay.dayLabel}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#006947]">schedule</span>
                    {activeDay.driveTime}
                  </span>
                </div>

                <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#131b2e]">
                  {activeDay.title}
                </h2>

                <p className="font-['Inter'] text-sm md:text-base text-[#3f4850] leading-relaxed">
                  {activeDay.summary}
                </p>

                {/* Elevation Gain Sub-Widget */}
                <div className="pt-2">
                  <div className="p-4 rounded-xl bg-[#f2f3ff] flex items-center justify-between">
                    <div>
                      <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] uppercase">
                        Elevation Net Delta
                      </span>
                      <p className="font-['JetBrains_Mono'] text-xl font-bold text-[#006194]">
                        {activeDay.elevationNet}
                      </p>
                    </div>

                    {/* Mini SVG Gradient slope */}
                    <div className="w-32 h-10">
                      <svg viewBox="0 0 120 40" className="w-full h-full overflow-visible">
                        <path
                          d="M 5 32 Q 60 25 115 10"
                          fill="none"
                          stroke="#006194"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        <circle cx="115" cy="10" r="4.5" fill="#a200ba" />
                      </svg>
                    </div>

                    <div className="text-right">
                      <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] uppercase">
                        Target Peak
                      </span>
                      <p className="font-['JetBrains_Mono'] text-lg font-bold text-[#131b2e]">
                        {activeDay.targetPeak}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Waypoint Chronology */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#dae2fd]/60 space-y-6">
                <div className="flex items-center justify-between border-b pb-4 border-[#bfc7d2]/30">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006194] text-[22px]">
                      alt_route
                    </span>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#131b2e]">
                      Waypoint Chronology
                    </h3>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#006947] font-bold tracking-wider uppercase">
                    ALL TIMINGS HARD TARGETS
                  </span>
                </div>

                {/* Vertical timeline */}
                <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#dae2fd]">
                  {activeDay.chronology.map((step, idx) => {
                    const isExpanded = activeWaypointTimeline === idx;
                    return (
                      <div
                        key={idx}
                        className="relative group cursor-pointer"
                        onClick={() =>
                          setActiveWaypointTimeline(isExpanded ? null : idx)
                        }
                      >
                        {/* Timeline node */}
                        <div
                          className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full border-4 border-white transition-all ${
                            step.isMilestone ? 'bg-[#006194] scale-110 shadow-sm' : 'bg-[#bfc7d2]'
                          }`}
                        />
                        <div className="flex flex-col gap-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded font-['JetBrains_Mono'] text-xs font-bold bg-[#cce5ff] text-[#001d31]">
                              {step.time}
                            </span>
                            <h4 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#131b2e] group-hover:text-[#006194] transition-colors">
                              {step.title}
                            </h4>
                          </div>
                          <p className="font-['Inter'] text-sm text-[#3f4850] leading-relaxed pt-1">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column (Col 5) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Waypoint Landscape Visual */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#dae2fd]/60 group">
                <div className="relative h-72 w-full overflow-hidden">
                  <img
                    src={activeDay.heroImage}
                    alt={activeDay.heroImageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/90 via-[#131b2e]/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="font-['JetBrains_Mono'] text-xs uppercase text-[#93ccff] font-semibold tracking-wider block">
                      Waypoint Landscape Visual
                    </span>
                    <p className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white drop-shadow-sm">
                      {activeDay.heroCaption}
                    </p>
                  </div>
                </div>
              </div>

              {/* Lodging Deployment */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#dae2fd]/60 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#006194] uppercase font-bold tracking-wider">
                    Lodging Deployment
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#6ffbbe]/40 text-[#002113] font-['JetBrains_Mono'] text-xs font-bold">
                    {activeDay.lodgingStatus}
                  </span>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#131b2e]">
                  {activeDay.lodgingName}
                </h3>

                <p className="font-['Inter'] text-sm text-[#3f4850] leading-relaxed">
                  {activeDay.lodgingType}
                </p>

                <div className="p-4 rounded-xl bg-[#f2f3ff] flex items-center justify-between">
                  <div>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] uppercase">
                      Room Capacity
                    </span>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#131b2e] mt-0.5">
                      {activeDay.roomsAllocated}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] uppercase">
                      Nightly Rate Total
                    </span>
                    <p className="font-['JetBrains_Mono'] text-lg font-bold text-[#006947]">
                      NPR {activeDay.nightlyTotalNpr.toLocaleString()}
                    </p>
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#707881]">
                      {activeDay.lodgingNote}
                    </span>
                  </div>
                </div>
              </div>

              {/* Day Logistics Summary */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#dae2fd]/60 space-y-3">
                <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] uppercase font-bold tracking-wider">
                  Day {activeDay.dayNum} Logistics Summary
                </span>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-[#f2f3ff]">
                    <span className="font-['JetBrains_Mono'] text-[11px] text-[#3f4850] uppercase">
                      Road Surface
                    </span>
                    <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#131b2e] mt-1">
                      {activeDay.roadSurface}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f2f3ff]">
                    <span className="font-['JetBrains_Mono'] text-[11px] text-[#3f4850] uppercase">
                      Telemetry Sync
                    </span>
                    <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#006947] mt-1">
                      {activeDay.telemetrySync}
                    </p>
                  </div>
                </div>

                {activeDay.warningNotice && (
                  <div className="p-3.5 rounded-xl bg-[#ffdad6]/60 border border-[#ba1a1a]/30 flex items-start gap-2.5 text-xs text-[#93000a]">
                    <span className="material-symbols-outlined text-[18px] text-[#ba1a1a] shrink-0 mt-0.5">
                      warning
                    </span>
                    <span className="font-medium leading-relaxed">
                      {activeDay.warningNotice}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Day Pagination Bar */}
          <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-[#dae2fd]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handlePrevDay}
              disabled={activeDay.dayNum === 1}
              className={`px-5 py-2.5 rounded-xl text-sm font-['Plus_Jakarta_Sans'] font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeDay.dayNum === 1
                  ? 'opacity-40 cursor-not-allowed bg-[#f2f3ff] text-[#707881]'
                  : 'bg-[#eaedff] hover:bg-[#dae2fd] text-[#131b2e]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">west</span>
              <span>Previous Day</span>
            </button>

            <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] flex items-center gap-2">
              EXPEDITION PROTOCOL VERSION 4.2 •{' '}
              <span className="text-[#006947] font-bold">READY TO DEPLOY</span>
            </span>

            <button
              onClick={handleNextDay}
              disabled={activeDay.dayNum === DAYS_ITINERARY.length}
              className={`px-5 py-2.5 rounded-xl text-sm font-['Plus_Jakarta_Sans'] font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeDay.dayNum === DAYS_ITINERARY.length
                  ? 'opacity-40 cursor-not-allowed bg-[#f2f3ff] text-[#707881]'
                  : 'bg-[#006194] hover:bg-[#007bb9] text-white shadow-sm'
              }`}
            >
              <span>Next Day</span>
              <span className="material-symbols-outlined text-[18px]">east</span>
            </button>
          </div>
        </div>
      ) : (
        /* FULL ROUTE MOSAIC MODE */
        <div className="w-full px-4 md:px-8 xl:px-12 flex flex-col gap-6">
          {/* Editorial Banner */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-[#283044] text-[#eef0ff] p-6 md:p-10 shadow-xl flex flex-col lg:flex-row lg:items-end justify-between gap-6 border border-white/10">
            <div className="relative z-20 flex flex-col gap-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest bg-[#ffd6fd] text-[#36003e] px-3 py-1 rounded font-bold">
                  Annapurna Circuit &amp; Sanctuary Arc
                </span>
                <span className="font-['JetBrains_Mono'] text-xs text-[#dae2fd] tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">altitude</span>
                  TRANS-HIMALAYAN CORRIDOR
                </span>
              </div>
              <h1 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Full Route Mosaic: Kathmandu to Manang &amp; Ghandruk
              </h1>
              <p className="font-['Inter'] text-sm sm:text-base text-[#dae2fd]/90 max-w-2xl leading-relaxed">
                An unyielding 840 km road expedition tracing the Marsyangdi River Canyon into the high-altitude rain shadow of Manang, descending to subtropical Pokhara, and crossing the Modi Khola gorge to Ghandruk.
              </p>
            </div>

            <div className="relative z-20 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
              <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl flex items-center gap-4 border border-white/15">
                <div className="flex flex-col">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#dae2fd] uppercase">Total Window</span>
                  <span className="font-['JetBrains_Mono'] text-lg font-bold text-white">120 Hours</span>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="flex flex-col">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#dae2fd] uppercase">Odometer</span>
                  <span className="font-['JetBrains_Mono'] text-lg font-bold text-white">840+ km</span>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="flex flex-col">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#dae2fd] uppercase">Apex Altitude</span>
                  <span className="font-['JetBrains_Mono'] text-lg font-bold text-[#fbabff]">3,519m</span>
                </div>
              </div>
              <span className="font-['JetBrains_Mono'] text-xs text-[#dae2fd]/70 flex items-center gap-1 self-start lg:self-end">
                <span className="material-symbols-outlined text-[14px] text-[#6ffbbe]">lock_clock</span>
                ABSOLUTE D05 HARD DEADLINE: 04:30 AM KATHMANDU
              </span>
            </div>
          </div>

          {/* Interactive Sub-View Switcher & Telemetry Strip */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-3.5 rounded-2xl shadow-sm border border-[#dae2fd]/60">
            <div className="flex items-center gap-2 w-full md:w-auto">
              <button
                onClick={() => setMosaicSubView('mosaic')}
                className={`px-4 py-2 rounded-xl text-xs font-['Plus_Jakarta_Sans'] font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  mosaicSubView === 'mosaic'
                    ? 'bg-[#006194] text-white shadow-xs'
                    : 'text-[#3f4850] hover:bg-[#eaedff]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">grid_view</span>
                <span>Unified Mosaic (5 Days)</span>
              </button>
              <button
                onClick={() => setMosaicSubView('elevation')}
                className={`px-4 py-2 rounded-xl text-xs font-['Plus_Jakarta_Sans'] font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  mosaicSubView === 'elevation'
                    ? 'bg-[#006194] text-white shadow-xs'
                    : 'text-[#3f4850] hover:bg-[#eaedff]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">show_chart</span>
                <span>Elevation Telemetry</span>
              </button>
              <button
                onClick={() => setMosaicSubView('nodes')}
                className={`px-4 py-2 rounded-xl text-xs font-['Plus_Jakarta_Sans'] font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  mosaicSubView === 'nodes'
                    ? 'bg-[#006194] text-white shadow-xs'
                    : 'text-[#3f4850] hover:bg-[#eaedff]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">alt_route</span>
                <span>Geographic Nodes</span>
              </button>
            </div>

            {/* Quick Metrics Ribbon */}
            <div className="flex items-center gap-3 font-['JetBrains_Mono'] text-xs">
              <div className="flex items-center gap-2 bg-[#f2f3ff] px-3 py-1.5 rounded-lg border border-[#dae2fd]">
                <span className="material-symbols-outlined text-[16px] text-[#006194]">navigation</span>
                <span className="text-[#131b2e] font-semibold">SURFACE: 60% PAVED / 40% OFF-ROAD</span>
              </div>
              <div className="flex items-center gap-2 bg-[#6ffbbe]/25 px-3 py-1.5 rounded-lg border border-[#006947]/30">
                <span className="material-symbols-outlined text-[16px] text-[#006947]">monetization_on</span>
                <span className="text-[#006947] font-bold">LODGING TOTAL: NPR 30,900</span>
              </div>
            </div>
          </div>

          {/* Elevation Telemetry Panel */}
          {mosaicSubView === 'elevation' && (
            <div className="w-full bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#dae2fd]/60 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-4 border-[#bfc7d2]/30">
                <div>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#006194] uppercase font-bold tracking-wider">
                    Altitude Profile Telemetry
                  </span>
                  <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#131b2e]">
                    5-Day Vertical Cross-Section (1,400m → 3,519m → 822m)
                  </h2>
                </div>
                <div className="flex items-center gap-4 text-xs font-['JetBrains_Mono'] text-[#3f4850]">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#006194]" /> Ascent</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#a200ba]" /> Apex Checkpoint</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#006947]" /> Descent</span>
                </div>
              </div>

              {/* Chart */}
              <div className="w-full h-64 relative bg-[#f2f3ff]/50 rounded-xl p-4 border border-[#dae2fd]">
                <svg viewBox="0 0 1000 240" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="elevationGradMosaic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#006194" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <line x1="40" y1="30" x2="980" y2="30" stroke="#dae2fd" strokeDasharray="4 4" />
                  <text x="5" y="34" className="font-['JetBrains_Mono'] text-[10px]" fill="#707881">3,500m</text>

                  <line x1="40" y1="90" x2="980" y2="90" stroke="#dae2fd" strokeDasharray="4 4" />
                  <text x="5" y="94" className="font-['JetBrains_Mono'] text-[10px]" fill="#707881">2,500m</text>

                  <line x1="40" y1="150" x2="980" y2="150" stroke="#dae2fd" strokeDasharray="4 4" />
                  <text x="5" y="154" className="font-['JetBrains_Mono'] text-[10px]" fill="#707881">1,500m</text>

                  <line x1="40" y1="200" x2="980" y2="200" stroke="#dae2fd" strokeDasharray="4 4" />
                  <text x="5" y="204" className="font-['JetBrains_Mono'] text-[10px]" fill="#707881">800m</text>

                  <polygon fill="url(#elevationGradMosaic)" points="50,158 150,155 300,78 480,28 580,28 720,205 840,120 950,158 950,225 50,225" />
                  <polyline fill="none" points="50,158 150,155 300,78 480,28 580,28 720,205 840,120 950,158" stroke="#006194" strokeWidth="4" strokeLinecap="round" />

                  <circle cx="50" cy="158" r="6" fill="#006194" />
                  <text x="50" y="180" textAnchor="middle" className="font-['JetBrains_Mono'] text-[11px] font-bold" fill="#131b2e">KTM (1,400m)</text>

                  <circle cx="300" cy="78" r="5" fill="#006194" />
                  <text x="300" y="68" textAnchor="middle" className="font-['JetBrains_Mono'] text-[10px] font-bold" fill="#131b2e">Chame (2,670m)</text>

                  <circle cx="530" cy="28" r="8" fill="#a200ba" stroke="#ffffff" strokeWidth="2" />
                  <text x="530" y="18" textAnchor="middle" className="font-['JetBrains_Mono'] text-[11px] font-bold" fill="#a200ba">Manang Apex (3,519m)</text>

                  <circle cx="720" cy="205" r="6" fill="#006947" />
                  <text x="720" y="228" textAnchor="middle" className="font-['JetBrains_Mono'] text-[11px] font-bold" fill="#006947">Pokhara (822m)</text>

                  <circle cx="840" cy="120" r="5" fill="#006194" />
                  <text x="840" y="110" textAnchor="middle" className="font-['JetBrains_Mono'] text-[10px] font-bold" fill="#131b2e">Ghandruk (1,940m)</text>

                  <circle cx="950" cy="158" r="6" fill="#ba1a1a" />
                  <text x="950" y="180" textAnchor="middle" className="font-['JetBrains_Mono'] text-[11px] font-bold" fill="#ba1a1a">KTM Return</text>
                </svg>
              </div>

              {/* Day stats */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                <div className="p-3 bg-[#f2f3ff] rounded-xl">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] block">Day 01 Net</span>
                  <span className="font-['JetBrains_Mono'] text-base text-[#006194] font-bold">+1,270m</span>
                  <span className="block text-xs text-[#3f4850]">KTM → Chame</span>
                </div>
                <div className="p-3 bg-[#f2f3ff] rounded-xl">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] block">Day 02 Apex</span>
                  <span className="font-['JetBrains_Mono'] text-base text-[#a200ba] font-bold">+849m</span>
                  <span className="block text-xs text-[#3f4850]">Chame → Manang</span>
                </div>
                <div className="p-3 bg-[#f2f3ff] rounded-xl">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] block">Day 03 Radical</span>
                  <span className="font-['JetBrains_Mono'] text-base text-[#006947] font-bold">-2,697m</span>
                  <span className="block text-xs text-[#3f4850]">Manang → Pokhara</span>
                </div>
                <div className="p-3 bg-[#f2f3ff] rounded-xl">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] block">Day 04 Ascent</span>
                  <span className="font-['JetBrains_Mono'] text-base text-[#006194] font-bold">+1,118m</span>
                  <span className="block text-xs text-[#3f4850]">Pokhara → Ghandruk</span>
                </div>
                <div className="p-3 bg-[#f2f3ff] rounded-xl">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] block">Day 05 Sprint</span>
                  <span className="font-['JetBrains_Mono'] text-base text-[#ba1a1a] font-bold">-540m</span>
                  <span className="block text-xs text-[#3f4850]">Ghandruk → KTM</span>
                </div>
              </div>
            </div>
          )}

          {/* Geographic Nodes Panel */}
          {mosaicSubView === 'nodes' && (
            <div className="w-full bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#dae2fd]/60 space-y-6">
              <div className="border-b pb-4 border-[#bfc7d2]/30">
                <span className="font-['JetBrains_Mono'] text-xs text-[#006194] uppercase font-bold tracking-wider">
                  Critical Geographic Checkpoints
                </span>
                <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#131b2e]">
                  Transit Nodes &amp; Off-Road Choke Points
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 bg-[#f2f3ff] rounded-xl flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#006194] font-bold">NODE 01</span>
                    <span className="font-['JetBrains_Mono'] text-[11px] bg-white px-2 py-0.5 rounded font-semibold text-[#3f4850]">
                      KM 175
                    </span>
                  </div>
                  <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#131b2e]">
                    Besisahar Transfer Hub
                  </h4>
                  <p className="font-['Inter'] text-xs text-[#3f4850] leading-relaxed">
                    Permit checkpost, switch to high-clearance 4x4 Bolero. Blacktop ends, rocky Marsyangdi canyon starts.
                  </p>
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#707881] mt-auto">
                    Alt: 760m • TIMS / ACAP Check
                  </span>
                </div>

                <div className="p-4 bg-[#f2f3ff] rounded-xl flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#a200ba] font-bold">NODE 02</span>
                    <span className="font-['JetBrains_Mono'] text-[11px] bg-white px-2 py-0.5 rounded font-semibold text-[#3f4850]">
                      KM 250
                    </span>
                  </div>
                  <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#131b2e]">
                    Braga Historic Cliff
                  </h4>
                  <p className="font-['Inter'] text-xs text-[#3f4850] leading-relaxed">
                    Ancient 900-year Tibetan Buddhist cliffside gompa overlooking snow-draped Annapurna II &amp; IV peaks.
                  </p>
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#707881] mt-auto">
                    Alt: 3,450m • Acclimatization Node
                  </span>
                </div>

                <div className="p-4 bg-[#f2f3ff] rounded-xl flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#006947] font-bold">NODE 03</span>
                    <span className="font-['JetBrains_Mono'] text-[11px] bg-white px-2 py-0.5 rounded font-semibold text-[#3f4850]">
                      KM 515
                    </span>
                  </div>
                  <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#131b2e]">
                    Nayapul &amp; Kimche
                  </h4>
                  <p className="font-['Inter'] text-xs text-[#3f4850] leading-relaxed">
                    Transition off Pokhara highway into Modi Khola river basin; steep wet switchbacks ascending toward Ghandruk.
                  </p>
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#707881] mt-auto">
                    Alt: 1,070m to 1,640m Stone Track
                  </span>
                </div>

                <div className="p-4 bg-[#ffdad6]/60 border border-[#ba1a1a]/30 rounded-xl flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#ba1a1a] font-bold">NODE 04</span>
                    <span className="font-['JetBrains_Mono'] text-[11px] bg-[#ba1a1a] text-white px-2 py-0.5 rounded font-bold">
                      TIMED GATE
                    </span>
                  </div>
                  <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#131b2e]">
                    Malekhu / Naubise Pass
                  </h4>
                  <p className="font-['Inter'] text-xs text-[#3f4850] leading-relaxed">
                    Prithvi Highway bottleneck into Kathmandu Valley. Strict 03:00 AM traverse required to bypass freight jams.
                  </p>
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#ba1a1a] font-bold mt-auto">
                    Critical Exit: By 03:45 AM
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* MAIN 5-DAY MOSAIC CARDS */}
          <div className="flex flex-col gap-6">
            {DAYS_ITINERARY.map((day) => (
              <article
                key={day.dayNum}
                className="w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#dae2fd]/60"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
                  {/* Left Column (Col 3): Badge and stats */}
                  <div className="lg:col-span-3 bg-[#f2f3ff] p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#dae2fd]/60">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="w-10 h-10 rounded-full bg-[#006194] text-white font-['Plus_Jakarta_Sans'] text-base flex items-center justify-center font-bold">
                          {String(day.dayNum).padStart(2, '0')}
                        </span>
                        <span className="font-['JetBrains_Mono'] text-xs bg-[#e2e7ff] text-[#006194] font-bold px-2.5 py-1 rounded-full uppercase">
                          {day.dayLabel}
                        </span>
                      </div>
                      <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#131b2e] pt-2 leading-tight">
                        {day.title}
                      </h3>
                      <span className="font-['Inter'] text-xs text-[#3f4850]">
                        {day.subTag}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 py-4">
                      <div className="flex items-center justify-between text-xs font-['JetBrains_Mono']">
                        <span className="text-[#3f4850]">ALTITUDE DELTA</span>
                        <span className="text-[#131b2e] font-semibold">{day.altBadge}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-['JetBrains_Mono']">
                        <span className="text-[#3f4850]">DISTANCE</span>
                        <span className="text-[#131b2e] font-semibold">{day.distance.split(' ')[0]} km</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-['JetBrains_Mono']">
                        <span className="text-[#3f4850]">EST. DRIVE TIME</span>
                        <span className="text-[#006194] font-bold">{day.driveTime.split(' ')[0]} Hours</span>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl flex items-center justify-between shadow-xs border border-[#dae2fd]/60">
                      <div className="flex flex-col">
                        <span className="font-['JetBrains_Mono'] text-[10px] text-[#707881]">OVERNIGHT RETREAT</span>
                        <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#131b2e]">
                          {day.lodgingName.split('/')[0]}
                        </span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-['JetBrains_Mono'] text-[10px] text-[#006947]">ESTIMATE</span>
                        <span className="font-['JetBrains_Mono'] text-xs text-[#006947] font-bold">
                          NPR {day.nightlyTotalNpr.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column (Col 5): Narrative and Tactical points */}
                  <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <span className={`font-['JetBrains_Mono'] text-xs px-2.5 py-0.5 rounded font-semibold uppercase ${day.tagClass}`}>
                          {day.tag}
                        </span>
                        <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850]">
                          {day.subTag}
                        </span>
                      </div>
                      <p className="font-['Inter'] text-sm text-[#131b2e] leading-relaxed">
                        {day.mosaicSummary}
                      </p>
                    </div>

                    {/* Tactical points */}
                    <div className="grid grid-cols-2 gap-3 bg-[#f2f3ff]/60 p-3 rounded-xl border border-[#dae2fd]">
                      {day.tacticalPoints.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#006194] text-[18px]">
                            {pt.icon}
                          </span>
                          <div className="flex flex-col">
                            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#131b2e]">
                              {pt.title}
                            </span>
                            <span className="text-[11px] text-[#3f4850] leading-tight">
                              {pt.subtitle}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#3f4850] pt-2 border-t border-[#bfc7d2]/20">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-[#006947]">check_circle</span>
                        Coverage: {day.telemetrySync}
                      </span>
                      <span>{day.depArr}</span>
                    </div>
                  </div>

                  {/* Right Column (Col 4): Image */}
                  <div className="lg:col-span-4 relative min-h-[260px] lg:min-h-full">
                    <img
                      src={day.heroImage}
                      alt={day.heroImageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#dae2fd]">
                        Visual Checkpoint
                      </span>
                      <p className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white drop-shadow-sm">
                        {day.heroCaption}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ROAD SURFACE & EXPEDITION ENGINEERING MATRIX */}
          <div className="w-full bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#dae2fd]/60 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-['JetBrains_Mono'] text-xs text-[#006194] uppercase font-bold tracking-wider">
                  Expedition Engineering
                </span>
                <h2 className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl font-bold text-[#131b2e]">
                  Waypoint Inspector &amp; Road Surface Matrix
                </h2>
              </div>
              <div className="flex items-center gap-4 text-xs font-['JetBrains_Mono']">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-[#006194]" />
                  <span>Paved Highway (60%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-[#a200ba]" />
                  <span>Alpine Scree &amp; Off-Road (40%)</span>
                </div>
              </div>
            </div>

            {/* Segmented bar */}
            <div className="w-full flex flex-col gap-2">
              <div className="w-full h-3.5 bg-[#f2f3ff] rounded-full overflow-hidden flex border border-[#bfc7d2]/30">
                <div className="h-full bg-[#006194]" style={{ width: '60%' }} title="Paved Highway 60%" />
                <div className="h-full bg-[#a200ba]" style={{ width: '40%' }} title="Alpine Scree 40%" />
              </div>
              <div className="flex justify-between font-['JetBrains_Mono'] text-xs text-[#707881]">
                <span>Kathmandu → Besisahar • Pokhara Corridor (504 km)</span>
                <span>Besisahar → Manang • Kimche Switchbacks (336 km)</span>
              </div>
            </div>

            {/* 4 Cards Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-[#f2f3ff] rounded-xl flex flex-col gap-2">
                <span className="font-['JetBrains_Mono'] text-xs text-[#006194] font-bold">VEHICLE CLASS MANDATE</span>
                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#131b2e]">Mahindra 4WD Scorpio / Bolero</h4>
                <p className="font-['Inter'] text-xs text-[#3f4850]">
                  Minimum 210mm ground clearance mandatory. High/low range gearbox required between Chamje and Pisang.
                </p>
              </div>
              <div className="p-4 bg-[#f2f3ff] rounded-xl flex flex-col gap-2">
                <span className="font-['JetBrains_Mono'] text-xs text-[#006194] font-bold">PERMIT REGISTRY</span>
                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#131b2e]">ACAP + TIMS Cards</h4>
                <p className="font-['Inter'] text-xs text-[#3f4850]">
                  Annapurna Conservation Area Permit verified at Besisahar, Dharapani, and Nayapul checkpoints.
                </p>
              </div>
              <div className="p-4 bg-[#f2f3ff] rounded-xl flex flex-col gap-2">
                <span className="font-['JetBrains_Mono'] text-xs text-[#006194] font-bold">MEDEVAC PROTOCOL</span>
                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#131b2e]">Simrik Air Heli-Rescue</h4>
                <p className="font-['Inter'] text-xs text-[#3f4850]">
                  Designated helipad operational at Manang Military Base (3,519m) for immediate altitude stabilization.
                </p>
              </div>
              <div className="p-4 bg-[#f2f3ff] rounded-xl flex flex-col gap-2">
                <span className="font-['JetBrains_Mono'] text-xs text-[#006194] font-bold">FUEL SECURITY</span>
                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#131b2e]">Last Pump: Besisahar</h4>
                <p className="font-['Inter'] text-xs text-[#3f4850]">
                  Zero petrol pumps in upper Manang valley. Carry 20L auxiliary diesel jerrycan from Besisahar junction.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="w-full bg-gradient-to-r from-[#006194] via-[#007bb9] to-[#006194] text-white rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-['JetBrains_Mono'] text-xs text-[#ffd6fd] uppercase font-bold tracking-wider">
                Financial Transparency
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">
                Complete Expedition Cost Ledger &amp; Wallet
              </h2>
              <p className="font-['Inter'] text-sm md:text-base text-white/90">
                Review itemized accounts for all 4 travellers under the strictly guarded NPR 120,000 budget cap, including fuel reserves, 4-night lodge allocations, and checkpoint permits.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigateTab('trip-wallet-accounts')}
                className="px-6 py-3 rounded-xl bg-white text-[#006194] font-['Plus_Jakarta_Sans'] font-bold text-sm hover:bg-[#f2f3ff] transition-all flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
                <span>Open Trip Ledger</span>
              </button>
              <button
                onClick={onOpenOfflineModal}
                className="px-5 py-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-['Plus_Jakarta_Sans'] font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>Export Summary</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
