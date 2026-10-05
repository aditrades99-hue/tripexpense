import React, { useState } from 'react';

interface ControlCenterScreenProps {
  onOpenSosModal: () => void;
  onOpenOfflineModal: () => void;
}

interface WeatherStation {
  name: string;
  alt: string;
  altMeters: number;
  temp: string;
  tempNum: number;
  condition: string;
  icon: string;
  wind: string;
  humidity: string;
  uvIndex: string;
  oxygenPercent: string;
  status: 'OPTIMAL' | 'COLD_CAUTION' | 'HIGH_EXPOSURE';
  statusColor: string;
}

const STATIONS: WeatherStation[] = [
  {
    name: "Kathmandu Valley Hub",
    alt: "1,400 m",
    altMeters: 1400,
    temp: "19°C",
    tempNum: 19,
    condition: "Hazy Sun & Morning Mist",
    icon: "filter_drama",
    wind: "8 km/h S",
    humidity: "62%",
    uvIndex: "5 Moderate",
    oxygenPercent: "86% Sea Level Equivalent",
    status: "OPTIMAL",
    statusColor: "bg-[#6ffbbe]/40 text-[#002113] border-[#006947]/30",
  },
  {
    name: "Besisahar Gateway",
    alt: "760 m",
    altMeters: 760,
    temp: "24°C",
    tempNum: 24,
    condition: "Subtropical Sunshine",
    icon: "wb_sunny",
    wind: "12 km/h SE",
    humidity: "71%",
    uvIndex: "7 High",
    oxygenPercent: "92% Sea Level Equivalent",
    status: "OPTIMAL",
    statusColor: "bg-[#6ffbbe]/40 text-[#002113] border-[#006947]/30",
  },
  {
    name: "Chame Gorge Headquarters",
    alt: "2,670 m",
    altMeters: 2670,
    temp: "9°C",
    tempNum: 9,
    condition: "Crisp Alpine Breezes & Clouds",
    icon: "cloud",
    wind: "19 km/h N",
    humidity: "48%",
    uvIndex: "8 Very High",
    oxygenPercent: "73% Sea Level Equivalent",
    status: "COLD_CAUTION",
    statusColor: "bg-[#ffd6fd] text-[#36003e] border-[#a200ba]/30",
  },
  {
    name: "Manang Alpine Plateau",
    alt: "3,519 m",
    altMeters: 3519,
    temp: "2°C (Feels like -4°C)",
    tempNum: 2,
    condition: "Sub-Zero Gusts & Direct Sunlight",
    icon: "ac_unit",
    wind: "28 km/h NW",
    humidity: "29%",
    uvIndex: "11+ Extreme Alpine",
    oxygenPercent: "67% Sea Level Equivalent",
    status: "HIGH_EXPOSURE",
    statusColor: "bg-[#ffdad6] text-[#93000a] border-[#ba1a1a]/30",
  },
  {
    name: "Ghandruk Annapurna Balcony",
    alt: "1,940 m",
    altMeters: 1940,
    temp: "14°C",
    tempNum: 14,
    condition: "Clear Afternoon Vistas",
    icon: "partly_cloudy_day",
    wind: "10 km/h W",
    humidity: "55%",
    uvIndex: "6 High",
    oxygenPercent: "80% Sea Level Equivalent",
    status: "OPTIMAL",
    statusColor: "bg-[#6ffbbe]/40 text-[#002113] border-[#006947]/30",
  },
];

interface ChecklistItem {
  id: string;
  category: 'thermal' | 'medical' | 'tech' | 'docs';
  name: string;
  notes: string;
  checked: boolean;
}

const INITIAL_CHECKLIST: ChecklistItem[] = [
  { id: 'c1', category: 'thermal', name: 'GORE-TEX / 3-Layer Windproof Hard Shell', notes: 'Essential for Manang winds & waterfall splashes', checked: true },
  { id: 'c2', category: 'thermal', name: '800-Fill Goose Down Jacket (-10°C rated)', notes: 'Chame & Manang nightfall insulation', checked: true },
  { id: 'c3', category: 'thermal', name: 'Merino Wool Thermal Base Layer (Top & Bottom)', notes: 'Moisture wicking & anti-microbial for 5 days', checked: true },
  { id: 'c4', category: 'thermal', name: 'Fleece-lined Thermal Beanie & Neck Gaiter', notes: 'Prevents cranial heat dissipation at 3,500m', checked: true },
  { id: 'c5', category: 'medical', name: 'Fingertip Pulse Oximeter & Extra AAA Batteries', notes: 'Monitor SpO2 twice daily; threshold is 80%', checked: true },
  { id: 'c6', category: 'medical', name: 'Acetazolamide (Diamox 250mg) x 16 tablets', notes: 'Prophylactic 125mg BID starting at Besisahar', checked: true },
  { id: 'c7', category: 'medical', name: 'Oral Rehydration Salts (ORS) & Hydration Tablets', notes: 'Mandatory 4L fluid consumption daily protocol', checked: true },
  { id: 'c8', category: 'medical', name: 'Water Purification Tablets (Aquatabs / Iodine)', notes: 'Eliminate Giardia risk in natural glacial streams', checked: true },
  { id: 'c9', category: 'tech', name: '20,000 mAh Cold-Resistant Power Banks (x2 per crew)', notes: 'Batteries degrade 40% faster in sub-zero Manang', checked: true },
  { id: 'c10', category: 'tech', name: 'Offline Topo Maps pre-cached (OsmAnd / Maps.me)', notes: 'Zero cellular coverage between Tal and Timang', checked: true },
  { id: 'c11', category: 'tech', name: 'USB-C Rechargeable 450-Lumen Headlamps', notes: 'Essential for Day 5 (01:45 AM pre-dawn sprint)', checked: true },
  { id: 'c12', category: 'docs', name: 'Hard Copies: ACAP Entry Permits & TIMS Cards', notes: 'Laminated cards kept in waterproof chest pouch', checked: true },
  { id: 'c13', category: 'docs', name: 'Physical Nepali Cash Reserves (NPR 120,000 cash pool)', notes: 'Zero functioning ATMs in Chame or Manang', checked: true },
  { id: 'c14', category: 'docs', name: 'Student Academic ID Cards & Field Authorization Letters', notes: 'Rapid checkpoint clearing with district police', checked: true },
];

export const ControlCenterScreen: React.FC<ControlCenterScreenProps> = ({
  onOpenSosModal,
  onOpenOfflineModal,
}) => {
  // Weather state
  const [selectedStation, setSelectedStation] = useState<number>(3); // Manang default

  // AMS Calculator State
  const [targetAlt, setTargetAlt] = useState<number>(3519);
  const [ascentRate, setAscentRate] = useState<number>(900); // meters per day
  const [waterIntake, setWaterIntake] = useState<number>(3.5); // Liters
  const [headache, setHeadache] = useState<number>(1); // 0 none, 1 mild, 2 mod, 3 severe
  const [gastro, setGastro] = useState<number>(0);
  const [fatigue, setFatigue] = useState<number>(1);
  const [dizziness, setDizziness] = useState<number>(0);
  const [sleepScore, setSleepScore] = useState<number>(1);

  // Packing Checklist State
  const [checklist, setChecklist] = useState<ChecklistItem[]>(INITIAL_CHECKLIST);
  const [activeCategory, setActiveCategory] = useState<'all' | 'thermal' | 'medical' | 'tech' | 'docs'>('all');

  // AMS Lake Louise Score Calculation
  const lakeLouiseScore = headache + gastro + fatigue + dizziness + sleepScore;
  const amsRiskLevel = (() => {
    if (lakeLouiseScore >= 6 || targetAlt > 4000) return { label: 'CRITICAL SEVERE RISK', color: 'text-[#ba1a1a]', bg: 'bg-[#ffdad6]', advice: 'Immediate emergency descent of at least 500-1,000 meters. Administer high-flow O2 and contact Himalayan Rescue Association post.' };
    if (lakeLouiseScore >= 3 || targetAlt >= 3000) return { label: 'MODERATE AMS ELEVATION', color: 'text-[#a200ba]', bg: 'bg-[#ffd6fd]', advice: 'Do not ascend further. Rest 24 hours at current elevation. Maintain 4L hydration, take garlic broth, consider Diamox 125mg BID.' };
    return { label: 'NORMAL PHYSIOLOGICAL BUFFER', color: 'text-[#006947]', bg: 'bg-[#6ffbbe]/40', advice: 'Physiological acclimatization stable. Proceed with scheduled ascent profile while monitoring hydration and SpO2 levels.' };
  })();

  const toggleCheck = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const completedCount = checklist.filter((c) => c.checked).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  const filteredChecklist = activeCategory === 'all'
    ? checklist
    : checklist.filter((c) => c.category === activeCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold font-['JetBrains_Mono'] bg-[#dae2fd] text-[#004b73]">
              MISSION CONTROL v2.4
            </span>
            <span className="text-[#3f4850] text-xs font-['JetBrains_Mono']">
              // TELEMETRY • WEATHER • AMS INDEX • GEAR AUDIT
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#131b2e] font-['Plus_Jakarta_Sans'] tracking-tight">
            Trip Control Center &amp; Health Telemetry
          </h1>
          <p className="text-sm md:text-base text-[#3f4850] mt-1 max-w-3xl">
            Real-time altitude atmospheric conditions, Lake Louise Acute Mountain Sickness (AMS) clinical index calculator, and field-readiness equipment audits.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenOfflineModal}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#dae2fd] bg-white hover:bg-[#f2f3ff] text-[#131b2e] text-xs font-bold transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            <span>Download Offline Pack</span>
          </button>
          <button
            onClick={onOpenSosModal}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#ba1a1a] hover:bg-[#93000a] text-white text-xs font-bold transition-all shadow-[0_4px_12px_rgba(186,26,26,0.25)]"
          >
            <span className="material-symbols-outlined text-sm animate-pulse">sos</span>
            <span>Emergency SOS Beacon</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: LIVE WEATHER & ALTITUDE TELEMETRY GRID */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-[#dae2fd] shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#dae2fd]/60">
          <div>
            <span className="text-xs font-bold font-['JetBrains_Mono'] text-[#006194] uppercase tracking-wider block">
              Atmospheric Sensor Network
            </span>
            <h2 className="text-xl font-extrabold text-[#131b2e] font-['Plus_Jakarta_Sans']">
              Waypoint Meteorological &amp; Barometric Telemetry
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#006947] bg-[#f2f3ff] px-3 py-1.5 rounded-full border border-[#dae2fd]">
            <span className="w-2 h-2 rounded-full bg-[#006947] animate-ping" />
            <span>5 SENSORS ACTIVE • 15 MIN SYNC</span>
          </div>
        </div>

        {/* Station Selector Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {STATIONS.map((station, i) => (
            <div
              key={i}
              onClick={() => setSelectedStation(i)}
              className={`p-3.5 rounded-2xl cursor-pointer border transition-all ${
                selectedStation === i
                  ? 'bg-[#e2e7ff]/50 border-[#006194] shadow-sm ring-2 ring-[#006194]/20'
                  : 'bg-[#faf8ff] border-[#dae2fd]/70 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-['JetBrains_Mono'] font-bold text-[#006194]">
                  {station.alt}
                </span>
                <span className="material-symbols-outlined text-sm text-[#006194]">
                  {station.icon}
                </span>
              </div>
              <h3 className="font-bold text-[#131b2e] text-xs truncate">{station.name.split(' ')[0]}</h3>
              <p className="text-lg font-black text-[#131b2e] mt-1 font-['Plus_Jakarta_Sans']">
                {station.temp}
              </p>
              <p className="text-[10px] text-[#3f4850] truncate mt-0.5">{station.condition}</p>
            </div>
          ))}
        </div>

        {/* Detailed Station View */}
        {(() => {
          const st = STATIONS[selectedStation];
          return (
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#f2f3ff] to-[#faf8ff] border border-[#dae2fd] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-[#131b2e] font-['Plus_Jakarta_Sans']">
                      {st.name} ({st.alt})
                    </h3>
                    <span className={`text-[10px] font-bold font-['JetBrains_Mono'] px-2 py-0.5 rounded-full border ${st.statusColor}`}>
                      {st.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#3f4850] mt-0.5">{st.condition}</p>
                </div>

                <div className="text-right">
                  <span className="text-3xl font-black text-[#131b2e] font-['Plus_Jakarta_Sans']">
                    {st.temp}
                  </span>
                  <span className="text-xs text-[#3f4850] block font-['JetBrains_Mono']">Ambient Thermal</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#dae2fd]/60 text-xs font-['JetBrains_Mono']">
                <div className="p-3 bg-white rounded-xl border border-[#dae2fd]/60">
                  <span className="text-[10px] text-[#3f4850] uppercase block">Wind Vector</span>
                  <span className="font-bold text-[#131b2e] text-sm">{st.wind}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#dae2fd]/60">
                  <span className="text-[10px] text-[#3f4850] uppercase block">Relative Humidity</span>
                  <span className="font-bold text-[#131b2e] text-sm">{st.humidity}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#dae2fd]/60">
                  <span className="text-[10px] text-[#3f4850] uppercase block">Solar UV Index</span>
                  <span className="font-bold text-[#ba1a1a] text-sm">{st.uvIndex}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#dae2fd]/60">
                  <span className="text-[10px] text-[#3f4850] uppercase block">Atmospheric O2 Density</span>
                  <span className="font-bold text-[#006194] text-sm">{st.oxygenPercent}</span>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* SECTION 2: INTERACTIVE AMS RISK CALCULATOR & CLINICAL LAKE LOUISE INDEX */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-[#dae2fd] shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#dae2fd]/60">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold font-['JetBrains_Mono'] text-[#a200ba] uppercase tracking-wider">
                Himalayan Clinical Protocol
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#ffd6fd] text-[#a200ba]">
                LAKE LOUISE AMS SCORE
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-[#131b2e] font-['Plus_Jakarta_Sans']">
              High-Altitude Hypoxia &amp; AMS Risk Assessment
            </h2>
          </div>
          <span className="text-xs text-[#3f4850] font-['JetBrains_Mono']">
            Based on HRA (Himalayan Rescue Association) Clinical Diagnostic Criteria
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sliders and Selectors */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <div className="flex justify-between text-xs font-bold font-['JetBrains_Mono'] mb-1.5">
                <span className="text-[#131b2e]">Current / Target Altitude: {targetAlt} m</span>
                <span className="text-[#006194]">
                  {targetAlt >= 3500 ? 'Extreme Hypoxic Threshold' : targetAlt >= 2500 ? 'High Altitude' : 'Standard'}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="4500"
                step="50"
                value={targetAlt}
                onChange={(e) => setTargetAlt(Number(e.target.value))}
                className="w-full h-2 bg-[#f2f3ff] rounded-lg appearance-none cursor-pointer accent-[#006194]"
              />
              <div className="flex justify-between text-[10px] text-[#3f4850] mt-1 font-['JetBrains_Mono']">
                <span>1,000m (Valley)</span>
                <span>2,670m (Chame)</span>
                <span>3,519m (Manang)</span>
                <span>4,500m (Thorong Phedi)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold font-['JetBrains_Mono'] mb-1.5">
                <span className="text-[#131b2e]">Daily Fluid &amp; Electrolyte Hydration: {waterIntake} L</span>
                <span className={waterIntake >= 3.5 ? 'text-[#006947]' : 'text-[#ba1a1a]'}>
                  {waterIntake >= 3.5 ? 'Target Met (3.5 - 4.5L/day)' : 'Deficit Risk (<3.5L)'}
                </span>
              </div>
              <input
                type="range"
                min="1.0"
                max="6.0"
                step="0.5"
                value={waterIntake}
                onChange={(e) => setWaterIntake(Number(e.target.value))}
                className="w-full h-2 bg-[#f2f3ff] rounded-lg appearance-none cursor-pointer accent-[#006947]"
              />
            </div>

            {/* Lake Louise Symptom Self-Audit Matrix */}
            <div className="space-y-3 pt-3 border-t border-[#dae2fd]/60">
              <span className="text-xs font-bold font-['JetBrains_Mono'] text-[#3f4850] uppercase block">
                Lake Louise Self-Reported Symptom Audit
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Headache */}
                <div className="p-3 rounded-xl bg-[#faf8ff] border border-[#dae2fd]/60">
                  <label className="text-xs font-bold text-[#131b2e] block mb-1">Headache Severity</label>
                  <select
                    value={headache}
                    onChange={(e) => setHeadache(Number(e.target.value))}
                    className="w-full p-1.5 text-xs rounded-lg border border-[#dae2fd] bg-white text-[#131b2e]"
                  >
                    <option value={0}>0: None</option>
                    <option value={1}>1: Mild headache</option>
                    <option value={2}>2: Moderate headache</option>
                    <option value={3}>3: Severe, incapacitating</option>
                  </select>
                </div>

                {/* Gastrointestinal */}
                <div className="p-3 rounded-xl bg-[#faf8ff] border border-[#dae2fd]/60">
                  <label className="text-xs font-bold text-[#131b2e] block mb-1">Gastrointestinal / Nausea</label>
                  <select
                    value={gastro}
                    onChange={(e) => setGastro(Number(e.target.value))}
                    className="w-full p-1.5 text-xs rounded-lg border border-[#dae2fd] bg-white text-[#131b2e]"
                  >
                    <option value={0}>0: Good appetite</option>
                    <option value={1}>1: Poor appetite or nausea</option>
                    <option value={2}>2: Moderate nausea or vomiting</option>
                    <option value={3}>3: Severe, persistent vomiting</option>
                  </select>
                </div>

                {/* Fatigue / Weakness */}
                <div className="p-3 rounded-xl bg-[#faf8ff] border border-[#dae2fd]/60">
                  <label className="text-xs font-bold text-[#131b2e] block mb-1">Fatigue or Weakness</label>
                  <select
                    value={fatigue}
                    onChange={(e) => setFatigue(Number(e.target.value))}
                    className="w-full p-1.5 text-xs rounded-lg border border-[#dae2fd] bg-white text-[#131b2e]"
                  >
                    <option value={0}>0: Normal energy</option>
                    <option value={1}>1: Mild fatigue</option>
                    <option value={2}>2: Moderate fatigue</option>
                    <option value={3}>3: Severe exhaustion / bedridden</option>
                  </select>
                </div>

                {/* Dizziness / Lightheadedness */}
                <div className="p-3 rounded-xl bg-[#faf8ff] border border-[#dae2fd]/60">
                  <label className="text-xs font-bold text-[#131b2e] block mb-1">Dizziness or Ataxia</label>
                  <select
                    value={dizziness}
                    onChange={(e) => setDizziness(Number(e.target.value))}
                    className="w-full p-1.5 text-xs rounded-lg border border-[#dae2fd] bg-white text-[#131b2e]"
                  >
                    <option value={0}>0: None</option>
                    <option value={1}>1: Mild dizziness</option>
                    <option value={2}>2: Moderate dizziness</option>
                    <option value={3}>3: Severe, loss of balance</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Outcome Card */}
          <div className="p-6 rounded-2xl bg-[#faf8ff] border border-[#dae2fd] flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] uppercase font-bold">
                  Lake Louise Index
                </span>
                <span className="text-2xl font-black font-['JetBrains_Mono'] text-[#131b2e]">
                  {lakeLouiseScore} / 12
                </span>
              </div>

              <div className={`p-3 rounded-xl ${amsRiskLevel.bg} border mb-4`}>
                <span className={`text-xs font-black font-['JetBrains_Mono'] block ${amsRiskLevel.color}`}>
                  {amsRiskLevel.label}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <span className="font-bold text-[#131b2e] uppercase font-['JetBrains_Mono'] text-[11px] block">
                  Mandatory Medical Protocol
                </span>
                <p className="text-[#3f4850] leading-relaxed">
                  {amsRiskLevel.advice}
                </p>
              </div>

              <div className="mt-4 p-3 bg-white rounded-xl border border-[#dae2fd]/60 text-xs space-y-1.5">
                <span className="font-bold text-[#131b2e] text-[11px] font-['JetBrains_Mono'] block">
                  Standard High-Altitude Medical Kit:
                </span>
                <p className="text-[11px] text-[#3f4850]">• Acetazolamide 125mg BID</p>
                <p className="text-[11px] text-[#3f4850]">• Paracetamol 500mg for headache</p>
                <p className="text-[11px] text-[#3f4850]">• Ginger tea &amp; garlic broth nightly</p>
              </div>
            </div>

            <button
              onClick={onOpenSosModal}
              className="w-full py-2.5 rounded-xl bg-white hover:bg-[#ffdad6]/40 border border-[#dae2fd] text-xs font-bold text-[#ba1a1a] transition-all flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">sos</span>
              <span>Transmit Medical Telemetry</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: FIELD GEAR READINESS AUDIT */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-[#dae2fd] shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#dae2fd]/60">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold font-['JetBrains_Mono'] text-[#006947] uppercase tracking-wider">
                Expedition Readiness Audit
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#6ffbbe]/40 text-[#006947]">
                {progressPercent}% VERIFIED
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-[#131b2e] font-['Plus_Jakarta_Sans']">
              Equipment &amp; Packing Checklist (4 Crew Shared Rigs)
            </h2>
          </div>

          {/* Progress Bar */}
          <div className="w-full md:w-64 bg-[#f2f3ff] rounded-full h-3 overflow-hidden border border-[#dae2fd]">
            <div
              className="bg-gradient-to-r from-[#006194] to-[#006947] h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {(['all', 'thermal', 'medical', 'tech', 'docs'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-['JetBrains_Mono'] uppercase transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#131b2e] text-white shadow-sm'
                  : 'bg-[#f2f3ff] text-[#3f4850] hover:text-[#131b2e]'
              }`}
            >
              {cat === 'all' ? 'All Items (14)' : cat}
            </button>
          ))}
        </div>

        {/* Checklist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredChecklist.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                item.checked
                  ? 'bg-[#faf8ff] border-[#dae2fd]/70 hover:bg-white'
                  : 'bg-white border-[#ffdad6] hover:bg-[#fff8f7]'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  item.checked
                    ? 'bg-[#006947] text-white'
                    : 'border-2 border-[#ba1a1a]/60 bg-white'
                }`}
              >
                {item.checked && (
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                )}
              </div>

              <div className="flex-1">
                <span className={`text-xs font-bold block ${item.checked ? 'text-[#131b2e]' : 'text-[#ba1a1a]'}`}>
                  {item.name}
                </span>
                <span className="text-[11px] text-[#3f4850] block mt-0.5">
                  {item.notes}
                </span>
              </div>

              <span className="text-[9px] font-['JetBrains_Mono'] uppercase font-bold px-2 py-0.5 rounded bg-[#f2f3ff] text-[#006194]">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
