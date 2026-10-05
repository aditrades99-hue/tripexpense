import React, { useState } from 'react';
import { WAYPOINTS, HIGHLIGHTS } from '../../data/expeditionData';
import { NavTab } from '../HeaderNav';

interface DossierScreenProps {
  onNavigateTab: (tab: NavTab) => void;
  onSelectDay: (dayNum: number) => void;
  onOpenOfflineModal: () => void;
}

export const DossierScreen: React.FC<DossierScreenProps> = ({
  onNavigateTab,
  onSelectDay,
  onOpenOfflineModal,
}) => {
  const [selectedWaypointId, setSelectedWaypointId] = useState<string>('man');
  const [syncedGps, setSyncedGps] = useState<boolean>(false);

  const activeWaypoint = WAYPOINTS[selectedWaypointId] || WAYPOINTS['man'];

  const handleSyncGps = () => {
    setSyncedGps(true);
    setTimeout(() => setSyncedGps(false), 3000);
  };

  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 pb-12">
      {/* SECTION 1: HERO PRESENTATION HEADER & STRATEGIC MATRIX */}
      <section className="w-full px-4 md:px-8 xl:px-12 pt-6">
        <div className="relative overflow-hidden rounded-2xl bg-white p-6 md:p-10 shadow-sm border border-[#dae2fd]/60">
          {/* Ambient gradient blobs */}
          <div className="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-[#006194]/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-24 w-80 h-80 rounded-full bg-[#a200ba]/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-end justify-between gap-6">
            <div className="space-y-3 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#cce5ff] text-[#001d31] font-['JetBrains_Mono'] text-xs font-bold tracking-wider uppercase">
                  Official Dossier
                </span>
                <span className="px-3 py-1 rounded-full bg-[#6ffbbe]/50 text-[#002113] font-['JetBrains_Mono'] text-xs font-bold tracking-wider uppercase">
                  Verified Transits
                </span>
                <span className="px-3 py-1 rounded-full bg-[#eaedff] text-[#3f4850] font-['JetBrains_Mono'] text-xs font-bold tracking-wider uppercase">
                  Autumn High-Visibility
                </span>
              </div>

              <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight leading-tight">
                MANANG + GHANDRUK:{' '}
                <span className="text-[#006194]">5-DAY NEPAL ROAD EXPEDITION</span>
              </h1>

              <div className="flex items-center gap-2 pt-1 text-xs sm:text-sm font-['JetBrains_Mono'] text-[#3f4850]">
                <span className="material-symbols-outlined text-[#006194] text-[18px]">near_me</span>
                <p className="uppercase tracking-wider font-semibold">
                  Kathmandu <span className="text-[#a200ba] font-bold">→</span> Besisahar{' '}
                  <span className="text-[#a200ba] font-bold">→</span> Chame{' '}
                  <span className="text-[#a200ba] font-bold">→</span> Manang{' '}
                  <span className="text-[#a200ba] font-bold">→</span> Pokhara{' '}
                  <span className="text-[#a200ba] font-bold">→</span> Ghandruk{' '}
                  <span className="text-[#a200ba] font-bold">→</span> Kathmandu
                </p>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setSelectedWaypointId('man')}
                className="px-5 py-3 rounded-xl bg-[#006194] hover:bg-[#007bb9] text-white font-['Plus_Jakarta_Sans'] font-semibold text-sm transition-all flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">mountain_flag</span>
                <span>Focus Peak Target</span>
              </button>
              <a
                href="#strategic-assets"
                className="px-5 py-3 rounded-xl bg-[#e2e7ff] hover:bg-[#dae2fd] text-[#131b2e] font-['Plus_Jakarta_Sans'] font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">grid_view</span>
                <span>Visual Index</span>
              </a>
            </div>
          </div>

          {/* High-Impact Telemetry Metrics Ribbon */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-[#f2f3ff] border border-[#dae2fd]/50 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[#3f4850]">
                <span className="font-['JetBrains_Mono'] text-xs uppercase font-semibold">
                  Operational Run
                </span>
                <span className="material-symbols-outlined text-[18px] text-[#006194]">timelapse</span>
              </div>
              <div className="mt-2">
                <span className="font-['JetBrains_Mono'] text-xl text-[#131b2e] font-bold">5 DAYS</span>
                <p className="text-xs text-[#3f4850]">120-Hour Target Window</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#f2f3ff] border border-[#dae2fd]/50 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[#3f4850]">
                <span className="font-['JetBrains_Mono'] text-xs uppercase font-semibold">
                  Crew Roster
                </span>
                <span className="material-symbols-outlined text-[18px] text-[#006947]">groups</span>
              </div>
              <div className="mt-2">
                <span className="font-['JetBrains_Mono'] text-xl text-[#131b2e] font-bold">
                  4 TRAVELLERS
                </span>
                <p className="text-xs text-[#3f4850]">Self-Supported Unit</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#f2f3ff] border border-[#dae2fd]/50 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[#3f4850]">
                <span className="font-['JetBrains_Mono'] text-xs uppercase font-semibold">
                  Lodge Lodging
                </span>
                <span className="material-symbols-outlined text-[18px] text-[#a200ba]">bedroom_parent</span>
              </div>
              <div className="mt-2">
                <span className="font-['JetBrains_Mono'] text-xl text-[#131b2e] font-bold">
                  3 ROOMS / NT
                </span>
                <p className="text-xs text-[#3f4850]">Private Twin + En-Suite</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#f2f3ff] border border-[#dae2fd]/50 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[#3f4850]">
                <span className="font-['JetBrains_Mono'] text-xs uppercase font-semibold">
                  Transport Fleet
                </span>
                <span className="material-symbols-outlined text-[18px] text-[#006194]">electric_car</span>
              </div>
              <div className="mt-2">
                <span className="font-['JetBrains_Mono'] text-xl text-[#131b2e] font-bold">
                  HYBRID + EV
                </span>
                <p className="text-xs text-[#3f4850]">Private iCAR V23 + Coach</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#6ffbbe]/25 border border-[#006947]/20 col-span-2 md:col-span-3 lg:col-span-1 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[#005236]">
                <span className="font-['JetBrains_Mono'] text-xs uppercase font-bold">
                  Fiscal Ceiling
                </span>
                <span className="material-symbols-outlined text-[18px] text-[#006947]">payments</span>
              </div>
              <div className="mt-2">
                <span className="font-['JetBrains_Mono'] text-xl text-[#131b2e] font-bold">
                  NPR 120,000
                </span>
                <p className="text-xs text-[#006947] font-semibold">
                  NPR 110K Planned (NPR 10K Reserve)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SMART-BOARD SPLIT SCREEN OVERVIEW */}
      <section className="w-full px-4 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Interactive Altitude & Elevation Profiler (Col 8) */}
          <div className="lg:col-span-8 flex flex-col bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#dae2fd]/60">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="font-['JetBrains_Mono'] text-xs text-[#006194] uppercase font-bold tracking-widest">
                  Terrain Telemetry &amp; Cross-Section
                </span>
                <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#131b2e] tracking-tight">
                  Elevation Gradient Profile
                </h2>
              </div>
              <div className="flex items-center gap-2 bg-[#f2f3ff] px-3 py-1.5 rounded-xl text-[#3f4850] font-['JetBrains_Mono'] text-xs font-semibold">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#a200ba] animate-pulse" />
                <span>CLICK NODE TO INSPECT SURFACE</span>
              </div>
            </div>

            {/* SVG Altitude Profile Graphic */}
            <div className="w-full bg-[#f2f3ff]/60 rounded-xl p-4 relative overflow-hidden border border-[#bfc7d2]/20">
              <svg
                viewBox="0 0 1000 420"
                className="w-full h-auto max-h-[380px] drop-shadow-sm select-none"
              >
                <defs>
                  <linearGradient id="altitudeGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#006194" stopOpacity="0.32" />
                    <stop offset="60%" stopColor="#93ccff" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="screePath" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="#006194" />
                    <stop offset="40%" stopColor="#a200ba" />
                    <stop offset="60%" stopColor="#006194" />
                    <stop offset="100%" stopColor="#006947" />
                  </linearGradient>
                </defs>

                {/* Guidelines */}
                <line x1="60" y1="60" x2="960" y2="60" stroke="#bfc7d2" strokeDasharray="4,4" opacity="0.45" />
                <text x="25" y="65" fill="#707881" className="font-['JetBrains_Mono'] text-[11px] font-semibold">3,600m</text>

                <line x1="60" y1="140" x2="960" y2="140" stroke="#bfc7d2" strokeDasharray="4,4" opacity="0.45" />
                <text x="25" y="145" fill="#707881" className="font-['JetBrains_Mono'] text-[11px] font-semibold">2,700m</text>

                <line x1="60" y1="220" x2="960" y2="220" stroke="#bfc7d2" strokeDasharray="4,4" opacity="0.45" />
                <text x="25" y="225" fill="#707881" className="font-['JetBrains_Mono'] text-[11px] font-semibold">1,900m</text>

                <line x1="60" y1="300" x2="960" y2="300" stroke="#bfc7d2" strokeDasharray="4,4" opacity="0.45" />
                <text x="25" y="305" fill="#707881" className="font-['JetBrains_Mono'] text-[11px] font-semibold">1,000m</text>

                {/* Gradient area */}
                <polygon
                  fill="url(#altitudeGrad)"
                  points="80,265 230,325 430,145 580,68 760,318 890,215 890,380 80,380"
                />

                {/* Profile line */}
                <polyline
                  fill="none"
                  stroke="url(#screePath)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="80,265 230,325 430,145 580,68 760,318 890,215"
                />

                {/* Interactive Waypoints */}
                {Object.values(WAYPOINTS).map((wp) => {
                  const isSelected = selectedWaypointId === wp.id;
                  const isApex = wp.id === 'man';
                  return (
                    <g
                      key={wp.id}
                      className="cursor-pointer group"
                      onClick={() => setSelectedWaypointId(wp.id)}
                    >
                      {isApex && (
                        <circle
                          cx={wp.cx}
                          cy={wp.cy}
                          r="22"
                          fill="#a200ba"
                          fillOpacity="0.2"
                          className="animate-ping origin-center"
                        />
                      )}
                      <circle
                        cx={wp.cx}
                        cy={wp.cy}
                        r="16"
                        fill="#006194"
                        fillOpacity="0.12"
                        className="group-hover:scale-150 transition-all origin-center"
                      />
                      <circle
                        cx={wp.cx}
                        cy={wp.cy}
                        r={isSelected ? 8 : 6.5}
                        fill="#ffffff"
                        stroke={isSelected ? '#a200ba' : '#006194'}
                        strokeWidth={isSelected ? 4 : 3}
                        className="transition-transform"
                      />
                      <text
                        x={wp.cx}
                        y={wp.cy - 16}
                        textAnchor="middle"
                        fill={isSelected ? '#a200ba' : '#131b2e'}
                        className="font-['JetBrains_Mono'] text-[11px] font-bold"
                      >
                        {wp.id.toUpperCase()} ({wp.alt})
                      </text>
                      <text
                        x={wp.cx}
                        y={396}
                        textAnchor="middle"
                        fill="#707881"
                        className="font-['JetBrains_Mono'] text-[10px]"
                      >
                        {wp.distance}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Quick Waypoint Selector Buttons */}
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-2">
              {[
                { id: 'ktm', label: '01. KTM' },
                { id: 'bes', label: '02. Besisahar' },
                { id: 'cha', label: '03. Chame' },
                { id: 'man', label: '04. Manang' },
                { id: 'pok', label: '05. Pokhara' },
                { id: 'gha', label: '06. Ghandruk' },
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedWaypointId(b.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-['JetBrains_Mono'] font-bold text-center transition-all cursor-pointer ${
                    selectedWaypointId === b.id
                      ? 'bg-[#a200ba] text-white shadow-sm'
                      : 'bg-[#eaedff] hover:bg-[#dae2fd] text-[#131b2e]'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Tactical Mission Telemetry & Waypoint Monitor (Col 4) */}
          <div className="lg:col-span-4 flex flex-col bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#dae2fd]/60">
            <div className="flex items-center justify-between border-b pb-3 border-[#bfc7d2]/30">
              <div>
                <span className="font-['JetBrains_Mono'] text-xs text-[#006947] uppercase font-bold tracking-wider">
                  Live Checkpoint Inspector
                </span>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#131b2e]">
                  {activeWaypoint.name}
                </h3>
              </div>
              <span className="w-3 h-3 rounded-full bg-[#006947] animate-pulse" />
            </div>

            <div className="mt-6 space-y-4">
              {/* Altitude & Delta */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#f2f3ff]">
                <div>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] uppercase">
                    Current Altitude
                  </span>
                  <p className="font-['JetBrains_Mono'] text-2xl text-[#006194] font-bold">
                    {activeWaypoint.alt}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] uppercase">
                    Stage Ascent
                  </span>
                  <p className="font-['JetBrains_Mono'] text-xs text-[#a200ba] font-bold">
                    {activeWaypoint.gradient}
                  </p>
                </div>
              </div>

              {/* Surface Classification */}
              <div className="p-4 rounded-xl bg-[#f2f3ff] space-y-2">
                <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] uppercase">
                  Terrain Classification
                </span>
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full font-['JetBrains_Mono'] text-xs font-bold ${activeWaypoint.surfaceColor}`}>
                    {activeWaypoint.road}
                  </span>
                </div>
                <p className="font-['Inter'] text-sm text-[#131b2e] font-medium pt-1">
                  {activeWaypoint.status}
                </p>
              </div>

              {/* Segment & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#f2f3ff]">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] uppercase">
                    Segment Log
                  </span>
                  <p className="font-['JetBrains_Mono'] text-sm text-[#131b2e] font-bold mt-1">
                    {activeWaypoint.distance}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f2f3ff]">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] uppercase">
                    Transit Time
                  </span>
                  <p className="font-['JetBrains_Mono'] text-sm text-[#131b2e] font-bold mt-1">
                    {activeWaypoint.transit}
                  </p>
                </div>
              </div>

              {/* Critical Advisory */}
              <div className="p-4 rounded-xl bg-[#ffdad6]/60 border border-[#ba1a1a]/20 text-[#131b2e] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] shrink-0 mt-0.5">
                  warning
                </span>
                <div>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#ba1a1a] font-bold uppercase tracking-wider block">
                    Critical Advisory
                  </span>
                  <p className="font-['Inter'] text-xs text-[#3f4850] mt-0.5 leading-relaxed">
                    {activeWaypoint.caution}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleSyncGps}
                className="w-full py-3.5 rounded-xl bg-[#e2e7ff] hover:bg-[#dae2fd] text-[#131b2e] font-['Plus_Jakarta_Sans'] font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span className="material-symbols-outlined text-[18px] text-[#006194]">
                  {syncedGps ? 'check_circle' : 'satellite_alt'}
                </span>
                <span>{syncedGps ? 'GPS Offline Track Synchronized' : 'Sync GPS Offline Vector Track'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY EXPEDITION WAYPOINTS / STRATEGIC ASSETS */}
      <section className="w-full px-4 md:px-8 xl:px-12 py-4" id="strategic-assets">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
          <div>
            <span className="font-['JetBrains_Mono'] text-xs text-[#a200ba] uppercase font-bold tracking-widest">
              Key Expedition Waypoints
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#131b2e] tracking-tight">
              Expedition Highlights &amp; Strategic Assets
            </h2>
          </div>
          <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850]">
            4 PRIMARY HIGH-ELEVATION THEATRES
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#dae2fd]/60"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/85 via-[#131b2e]/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#131b2e] font-['JetBrains_Mono'] text-xs font-bold shadow-sm">
                    {item.alt}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#93ccff] uppercase tracking-wider font-semibold">
                    {item.waypoint}
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white drop-shadow-sm">
                    {item.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="font-['Inter'] text-sm text-[#3f4850] leading-relaxed">
                  {item.description}
                </p>
                <div className="p-3 rounded-xl bg-[#f2f3ff] flex items-center gap-2.5">
                  <span className={`material-symbols-outlined text-[18px] ${item.badgeColor} shrink-0`}>
                    {item.badgeIcon}
                  </span>
                  <span className="font-['Inter'] text-xs font-medium text-[#131b2e]">
                    {item.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE JUMP CONSOLE */}
      <section className="w-full px-4 md:px-8 xl:px-12 pt-2">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#dae2fd]/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="font-['JetBrains_Mono'] text-xs text-[#006194] uppercase font-bold tracking-wider">
                Interactive Jump Console
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl font-bold text-[#131b2e]">
                Expedition Route &amp; Fiscal Matrix Direct Access
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] uppercase">Current Sync:</span>
              <span className="px-3 py-1 rounded-full bg-[#6ffbbe]/40 text-[#002113] font-['JetBrains_Mono'] text-xs font-bold border border-[#006947]/30">
                READY FOR MARCH
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {[
              { day: 1, label: 'Day 01', route: 'KTM → Besisahar', info: '178 km • Micro-Bus' },
              { day: 2, label: 'Day 02', route: 'Besisahar → Chame', info: '66 km • 4x4 Off-Road' },
              { day: 3, label: 'Day 03', route: 'Chame → Manang', info: '32 km • Peak Glacial Rim' },
              { day: 4, label: 'Day 04', route: 'Manang → Pokhara', info: '166 km • Descent Leg' },
              { day: 5, label: 'Day 05', route: 'Ghandruk → KTM', info: '260 km • Homeward Express' },
            ].map((d) => (
              <div
                key={d.day}
                onClick={() => {
                  onSelectDay(d.day);
                  onNavigateTab('day-by-day-itinerary');
                }}
                className="group p-4 rounded-xl bg-[#eaedff] hover:bg-[#006194] hover:text-white transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="font-['JetBrains_Mono'] text-xs uppercase text-[#3f4850] group-hover:text-[#93ccff] font-bold">
                    {d.label}
                  </span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    east
                  </span>
                </div>
                <div className="mt-3">
                  <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#131b2e] group-hover:text-white">
                    {d.route}
                  </h4>
                  <p className="text-xs text-[#3f4850] group-hover:text-white/80 mt-1 font-['JetBrains_Mono']">
                    {d.info}
                  </p>
                </div>
              </div>
            ))}

            {/* Ledger Jump Card */}
            <div
              onClick={() => onNavigateTab('trip-wallet-accounts')}
              className="group p-4 rounded-xl bg-[#6ffbbe]/25 hover:bg-[#006947] hover:text-white transition-all cursor-pointer flex flex-col justify-between border border-[#006947]/30"
            >
              <div className="flex items-center justify-between">
                <span className="font-['JetBrains_Mono'] text-xs uppercase text-[#006947] group-hover:text-[#6ffbbe] font-bold">
                  Ledger
                </span>
                <span className="material-symbols-outlined text-[18px] text-[#006947] group-hover:text-white">
                  account_balance_wallet
                </span>
              </div>
              <div className="mt-3">
                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#131b2e] group-hover:text-white">
                  Fiscal Accounts
                </h4>
                <p className="text-xs text-[#3f4850] group-hover:text-white/80 mt-1 font-['JetBrains_Mono']">
                  NPR 110K vs 120K Cap
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
