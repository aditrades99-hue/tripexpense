import React, { useState } from 'react';
import { NavTab } from '../HeaderNav';

interface TransfersScreenProps {
  onNavigateTab: (tab: NavTab) => void;
  onOpenSosModal: () => void;
}

export const TransfersScreen: React.FC<TransfersScreenProps> = ({
  onNavigateTab,
  onOpenSosModal,
}) => {
  const [selectedSegment, setSelectedSegment] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'vehicles' | 'routes' | 'permits' | 'safety'>('routes');

  const segments = [
    {
      id: 1,
      title: "Leg 01: Kathmandu → Besisahar",
      distance: "178 km",
      time: "4h 30m",
      vehicle: "High-roof 14-Seat Micro-Coach",
      terrain: "Paved Highway (Prithvi Highway)",
      grade: "Sub-Alpine River Basin (-640m)",
      surfaceGrade: "Class 1: Asphalt 90% / Roadworks 10%",
      bottlenecks: "Nagdhunga pass queue, Mugling junction merge",
      passProtocol: "Roll out by 04:30 AM before commercial trucks",
      fuelCheckpoint: "Malekhu Expressway Depot (100% full)",
      permitStation: "None (District Transit)",
      color: "border-[#006194]",
    },
    {
      id: 2,
      title: "Leg 02: Besisahar → Chame",
      distance: "66 km",
      time: "5h 15m",
      vehicle: "High-Clearance 4x4 Bolero / iCAR Offroad Rig",
      terrain: "Extreme Granite Gorge & Scree Track",
      grade: "High Ascent (+1,910m)",
      surfaceGrade: "Class 4: Raw Boulders, Waterfall Crossings, Mud",
      bottlenecks: "Tal Gorge single-lane waterfall shelf, Dharapani rock cut",
      passProtocol: "Downhill traffic yields to uphill climber. Low range 4WD engaged",
      fuelCheckpoint: "Besisahar Gateway Depot (Mandatory +15L Jerrycan)",
      permitStation: "Besisahar ACAP Entry & Police Registration",
      color: "border-[#ba1a1a]",
    },
    {
      id: 3,
      title: "Leg 03: Chame → Pisang → Manang",
      distance: "32 km",
      time: "3h 45m",
      vehicle: "High-Clearance 4x4 Rig (Low-Gear Locked)",
      terrain: "High-Altitude Glacial Valley & Pine Plateaus",
      grade: "Sub-Summit Ascent (+849m, reaching 3,519m)",
      surfaceGrade: "Class 3: Dry Riverbeds, High Alpine Scree, Frost",
      bottlenecks: "Paungda Danda curved granite slab, Braga terminal bridge",
      passProtocol: "Tire pressure lowered to 24 PSI. Monitor coolant vaporization",
      fuelCheckpoint: "Chame Army Depot (Emergency reserve only)",
      permitStation: "Chame Tourist Police & Manang Town Entrance",
      color: "border-[#a200ba]",
    },
    {
      id: 4,
      title: "Leg 04: Manang → Besisahar → Pokhara",
      distance: "230 km",
      time: "11h 00m",
      vehicle: "4x4 Descent to Besisahar, then Highway Express",
      terrain: "Extreme Descent followed by Smooth Valley Highway",
      grade: "Major Drop (-2,697m to Pokhara 822m)",
      surfaceGrade: "Class 4 (Morning) → Class 1 (Afternoon)",
      bottlenecks: "Timang waterfall slipway, Besisahar transfer junction",
      passProtocol: "Engine compression braking used on descents; avoid brake fading",
      fuelCheckpoint: "Dumre Highway Station (Full top-up)",
      permitStation: "Dharapani ACAP Exit Stamp & Besisahar Checkout",
      color: "border-[#006947]",
    },
    {
      id: 5,
      title: "Leg 05: Pokhara → Nayapul → Ghandruk",
      distance: "55 km",
      time: "3h 30m + 45m Hike",
      vehicle: "Mountain Hill Taxi to Kimche + 1,800 Slate Stairway Trek",
      terrain: "Winding Hillside Switchbacks & Foot Trail",
      grade: "Moderate Foothill (+1,118m to Ghandruk 1,940m)",
      surfaceGrade: "Class 2: Narrow Hill Asphalt 70% / Steep Gravel 30%",
      bottlenecks: "Nayapul bridge bottleneck, Kimche parking turn-bay",
      passProtocol: "Vehicle parked at Kimche terminal lot; foot porters for baggage",
      fuelCheckpoint: "Pokhara North Outpost (Full tank)",
      permitStation: "Birethanti ACAP Checkpoint & Ghandruk Sanctuary Gate",
      color: "border-[#006194]",
    },
    {
      id: 6,
      title: "Leg 06: Ghandruk → Pokhara → Kathmandu Return",
      distance: "260 km",
      time: "8h 30m Tactical Sprint",
      vehicle: "Express Highway Comfort Coach",
      terrain: "Interstate Artery (Prithvi Corridor)",
      grade: "Valley Transit (-540m net into KTM 1,400m)",
      surfaceGrade: "Class 1: High Velocity Highway",
      bottlenecks: "Naubise gorge freight crawl, Thankot checkpoint",
      passProtocol: "Strict 02:15 AM roll-out to bypass freight before 06:00 AM",
      fuelCheckpoint: "Mugling Junction 24h Pitstop",
      permitStation: "Nagdhunga Valley Police Inbound Clearance",
      color: "border-[#3f4850]",
    },
  ];

  const vehicles = [
    {
      name: "Mahindra Bolero Camper 4x4 High-Clearance Spec",
      role: "Primary Off-Road Expedition Rig (Besisahar ↔ Manang)",
      capacity: "4 Passengers + Full Technical Pack & Spares",
      specs: [
        { label: "Ground Clearance", val: "215 mm with Underbody Steel Armor Plate" },
        { label: "Drivetrain", val: "4WD Low-Range Transfer Case with Mechanical Differential Lock" },
        { label: "Suspension", val: "Heavy-Duty Leaf Spring with Heavy-load Gas Shocks" },
        { label: "Tire Configuration", val: "235/75 R15 All-Terrain with Reinforced Sidewalls" },
        { label: "Fording Depth", val: "650 mm (Marshyangdi Waterfall Run Capable)" },
        { label: "Auxiliary Kit", val: "15L Steel Jerrycan, Heavy Tow Strap, High-Lift Jack, 12V Air Compressor" },
      ],
      tag: "VETTED OFF-ROAD ASSET",
      badgeColor: "bg-[#ffdad6] text-[#93000a]",
      icon: "rv_hookup",
    },
    {
      name: "iCAR V23 Smart EV / 4WD Alpine Prototype",
      role: "Tactical Route Topography & Range Optimization Scout",
      capacity: "Technical Support / Environmental Monitoring",
      specs: [
        { label: "Battery Pack", val: "65 kWh LFP with Thermal Pre-Conditioning Heater" },
        { label: "AWD Twin Motor", val: "Dual Electric Axles delivering 380 Nm Instant Torque" },
        { label: "Clearance & Angle", val: "212 mm / 43° Approach / 41° Departure Angle" },
        { label: "Altitude Calibration", val: "Zero combustion power loss at 3,519m Manang plateau" },
        { label: "Regenerative Braking", val: "32% Energy recuperation during 2,697m Manang descent" },
        { label: "Telemetry", val: "Satellite GPS logging & on-board oxygen sensor array" },
      ],
      tag: "FUTURE TRANSIT TESTBED",
      badgeColor: "bg-[#cce5ff] text-[#006194]",
      icon: "electric_car",
    },
    {
      name: "Toyota HiAce 4WD Super GL Micro-Coach",
      role: "High-Efficiency Highway Transit (Kathmandu ↔ Besisahar / Pokhara)",
      capacity: "14 Passengers (Expedition Crew Allocated 4 Individual Window Seats)",
      specs: [
        { label: "Engine", val: "3.0L 1KD-FTV Turbo Diesel with Intercooler" },
        { label: "Comfort", val: "Individual reclining captain chairs, dual overhead AC/Heating" },
        { label: "Power & Charging", val: "Onboard 220V inverter & quad USB-C charging banks" },
        { label: "Luggage Pod", val: "Enclosed waterproof roof pod for four 75L expedition duffels" },
        { label: "Highway Range", val: "680 km per 70L tank with Prithvi Highway gearing" },
        { label: "Safety Kit", val: "ABS, EBD, Dual Front Airbags, Fire Extinguisher, First Aid Level 3" },
      ],
      tag: "HIGHWAY CORRIDOR CARRIER",
      badgeColor: "bg-[#6ffbbe]/40 text-[#002113]",
      icon: "directions_bus",
    },
  ];

  const permits = [
    {
      title: "ACAP (Annapurna Conservation Area Project) Entry Permit",
      authority: "National Trust for Nature Conservation (NTNC), Government of Nepal",
      requiredFor: "Manang Valley, Chame, Pisang, and Ghandruk Village clusters",
      costPerPerson: "NPR 1,000 (SAARC Nationals) / NPR 3,000 (Foreign Nationals) / NPR 100 (Nepali Citizen Research)",
      totalGroupCost: "NPR 400 (Vetted Student Research Rate)",
      validity: "Single Entry, 30-Day Window across all ACAP Checkpoints",
      checkpoints: [
        "Checkpoint 01: Besisahar Gate (Inbound Verification & Passport/ID Stamp)",
        "Checkpoint 02: Tal Waterfall Police Station (District Crossing Log)",
        "Checkpoint 03: Dharapani National Park Post (Mandatory Registration)",
        "Checkpoint 04: Chame Headquarters (Safety & Telemetry Register)",
        "Checkpoint 05: Nayapul Sanctuary Gate (Ghandruk Corridor Entry)",
        "Checkpoint 06: Birethanti Outpost (Final Ghandruk Permit Verification)",
      ],
      status: "ISSUED & STAMPED",
      statusColor: "bg-[#6ffbbe]/40 text-[#006947] border border-[#006947]/30",
    },
    {
      title: "TIMS (Trekkers' Information Management System) Registration",
      authority: "Nepal Tourism Board (NTB) & TAAN",
      requiredFor: "Expedition tracking, search and rescue coordination, and mountain safety census",
      costPerPerson: "NPR 1,000 (SAARC Group) / Free for Official Academic Field Research Units",
      totalGroupCost: "NPR 0 (Expedition Student Waiver Authorized)",
      validity: "Registered for Annapurna Circuit & Sanctuary Sectors",
      checkpoints: [
        "Besisahar TIMS Desk (QR Card Assignment)",
        "Manang Town Tourist Desk (Acclimatization Check-in)",
        "Nayapul TIMS Return Registry (Safe Exit Confirmation)",
      ],
      status: "DIGITALLY SYNCED",
      statusColor: "bg-[#cce5ff] text-[#006194] border border-[#006194]/30",
    },
    {
      title: "Local Government Environmental & Parking Pass",
      authority: "Manang Disyang Rural Municipality & Annapurna Rural Municipality (Kaski)",
      requiredFor: "Commercial 4x4 parking at Chame, Manang airstrip lot, and Kimche vehicle terminal",
      costPerPerson: "Included in pooled transit budget",
      totalGroupCost: "NPR 1,800 Total across 5 Days",
      validity: "Full 5-Day Expedition Duration",
      checkpoints: ["Kimche Guard Post", "Chame River Bridge", "Manang Lower Square"],
      status: "PRE-ALLOCATED IN WALLET",
      statusColor: "bg-[#ffd6fd] text-[#a200ba] border border-[#a200ba]/30",
    },
  ];

  const emergencyEvac = [
    {
      zone: "Manang Sector (3,519m)",
      helipad: "Humde Regional Airstrip (3,300m) / Manang Military Camp Helipad (3,550m)",
      flightTimeKTM: "45 Minutes Direct Helicopter Evacuation",
      flightTimePKR: "28 Minutes to Pokhara Western Regional Hospital",
      weatherWindow: "06:30 AM - 11:30 AM (Valley winds exceed 35 knots after 12:00 PM)",
      groundDescent: "Besisahar 4x4 Emergency Drop (6 hours downwards to 760m)",
      clinic: "Himalayan Rescue Association (HRA) Aid Post Manang (Staffed by Volunteer Doctors)",
    },
    {
      zone: "Chame Gorge Sector (2,670m)",
      helipad: "Chame District Police Headquarters Helipad",
      flightTimeKTM: "40 Minutes Direct",
      flightTimePKR: "22 Minutes to Pokhara Heliport",
      weatherWindow: "07:00 AM - 01:00 PM (Gorge fog clears by 07:30 AM)",
      groundDescent: "Besisahar Hospital (4.5 hours down via 4WD)",
      clinic: "Chame District Hospital & Medical First Aid Center",
    },
    {
      zone: "Ghandruk Annapurna Balcony (1,940m)",
      helipad: "Ghandruk Primary School Ground Helipad / Nayapul Riverbank Clear Zone",
      flightTimeKTM: "50 Minutes Direct",
      flightTimePKR: "12 Minutes to Gandaki Medical College Heli-pad",
      weatherWindow: "All-day daylight visual flight rules (VFR) subject to cloud ceiling",
      groundDescent: "Nayapul Highway Ambulance (1.5 hours to Pokhara)",
      clinic: "Ghandruk Sub-Health Post & Modi Khola Clinic",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Breadcrumb & Screen Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold font-['JetBrains_Mono'] bg-[#dae2fd] text-[#004b73]">
              LOGISTICAL ARTERY v3.1
            </span>
            <span className="text-[#3f4850] text-xs font-['JetBrains_Mono']">
              // VEHICLES • PERMITS • ROAD SHELVES
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#131b2e] font-['Plus_Jakarta_Sans'] tracking-tight">
            Transfers, Fleet &amp; Mountain Logistics
          </h1>
          <p className="text-sm md:text-base text-[#3f4850] mt-1 max-w-3xl">
            Vetted mountain 4x4 specs, Marsyangdi cliff road engineering, ACAP/TIMS permit matrices, and tactical descent protocols across 465+ km of rugged Himalayan terrain.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateTab('day-by-day-itinerary')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#dae2fd] bg-white hover:bg-[#f2f3ff] text-[#131b2e] text-xs font-bold transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            <span>View 5-Day Chronology</span>
          </button>
          <button
            onClick={onOpenSosModal}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#ba1a1a] hover:bg-[#93000a] text-white text-xs font-bold transition-all shadow-[0_4px_12px_rgba(186,26,26,0.25)]"
          >
            <span className="material-symbols-outlined text-sm animate-pulse">sos</span>
            <span>Emergency Evac Telemetry</span>
          </button>
        </div>
      </div>

      {/* Module Navigation Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-[#f2f3ff] rounded-2xl border border-[#dae2fd]/60 mb-8 overflow-x-auto">
        <button
          onClick={() => setActiveTab('routes')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
            activeTab === 'routes'
              ? 'bg-white text-[#006194] shadow-sm border border-[#dae2fd]'
              : 'text-[#3f4850] hover:text-[#131b2e]'
          }`}
        >
          <span className="material-symbols-outlined text-base">alt_route</span>
          <span>6-Leg Route Matrix</span>
        </button>
        <button
          onClick={() => setActiveTab('vehicles')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
            activeTab === 'vehicles'
              ? 'bg-white text-[#006194] shadow-sm border border-[#dae2fd]'
              : 'text-[#3f4850] hover:text-[#131b2e]'
          }`}
        >
          <span className="material-symbols-outlined text-base">directions_car</span>
          <span>Fleet &amp; Rig Specifications</span>
        </button>
        <button
          onClick={() => setActiveTab('permits')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
            activeTab === 'permits'
              ? 'bg-white text-[#006194] shadow-sm border border-[#dae2fd]'
              : 'text-[#3f4850] hover:text-[#131b2e]'
          }`}
        >
          <span className="material-symbols-outlined text-base">badge</span>
          <span>Permits &amp; Checkpoints</span>
        </button>
        <button
          onClick={() => setActiveTab('safety')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
            activeTab === 'safety'
              ? 'bg-white text-[#006194] shadow-sm border border-[#dae2fd]'
              : 'text-[#3f4850] hover:text-[#131b2e]'
          }`}
        >
          <span className="material-symbols-outlined text-base">medical_services</span>
          <span>Heli-Evacuation &amp; Helipads</span>
        </button>
      </div>

      {/* TAB CONTENT: 6-LEG ROUTE MATRIX */}
      {activeTab === 'routes' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Segments List */}
            <div className="lg:col-span-1 space-y-3">
              <span className="text-xs font-bold font-['JetBrains_Mono'] text-[#3f4850] uppercase tracking-wider block mb-2">
                Route Segments ({segments.length})
              </span>
              {segments.map((seg, idx) => (
                <div
                  key={seg.id}
                  onClick={() => setSelectedSegment(idx)}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all ${
                    selectedSegment === idx
                      ? 'bg-white border-[#006194] shadow-[0_4px_20px_rgba(0,97,148,0.12)] ring-2 ring-[#006194]/20'
                      : 'bg-white/60 border-[#dae2fd] hover:bg-white hover:border-[#b8c8d8]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#006194]">
                      LEG 0{seg.id}
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#3f4850] font-semibold">
                      {seg.distance} • {seg.time}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#131b2e] text-sm leading-snug">
                    {seg.title.replace(`Leg 0${seg.id}: `, '')}
                  </h3>
                  <div className="mt-2 flex items-center justify-between text-xs text-[#3f4850]">
                    <span className="truncate max-w-[180px]">{seg.vehicle.split('/')[0]}</span>
                    <span className="text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded bg-[#f2f3ff] text-[#006194] font-semibold">
                      {seg.grade.split(' ')[0]}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Detailed Inspector */}
            <div className="lg:col-span-2">
              {(() => {
                const seg = segments[selectedSegment];
                return (
                  <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#dae2fd] shadow-sm space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#dae2fd]/60">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-['JetBrains_Mono'] bg-[#e2e7ff] text-[#006194]">
                            SEGMENT 0{seg.id} DEEP DIVE
                          </span>
                          <span className="text-xs font-semibold text-[#006947] font-['JetBrains_Mono']">
                            VERIFIED TRANSIT
                          </span>
                        </div>
                        <h2 className="text-2xl font-black text-[#131b2e] font-['Plus_Jakarta_Sans']">
                          {seg.title}
                        </h2>
                      </div>

                      <div className="flex items-center gap-4 bg-[#f2f3ff] px-4 py-2.5 rounded-2xl border border-[#dae2fd]/60 font-['JetBrains_Mono'] text-xs">
                        <div>
                          <span className="text-[#3f4850] block text-[10px]">DISTANCE</span>
                          <span className="font-bold text-[#131b2e] text-sm">{seg.distance}</span>
                        </div>
                        <div className="h-6 w-px bg-[#dae2fd]" />
                        <div>
                          <span className="text-[#3f4850] block text-[10px]">TRANSIT TIME</span>
                          <span className="font-bold text-[#131b2e] text-sm">{seg.time}</span>
                        </div>
                      </div>
                    </div>

                    {/* Technical Parameter Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-[#faf8ff] border border-[#dae2fd]/60">
                        <span className="flex items-center gap-1.5 text-xs font-bold font-['JetBrains_Mono'] text-[#006194] uppercase mb-1">
                          <span className="material-symbols-outlined text-sm">directions_car</span>
                          Assigned Vehicle Class
                        </span>
                        <p className="text-sm font-semibold text-[#131b2e]">{seg.vehicle}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#faf8ff] border border-[#dae2fd]/60">
                        <span className="flex items-center gap-1.5 text-xs font-bold font-['JetBrains_Mono'] text-[#a200ba] uppercase mb-1">
                          <span className="material-symbols-outlined text-sm">landscape</span>
                          Terrain Profile
                        </span>
                        <p className="text-sm font-semibold text-[#131b2e]">{seg.terrain}</p>
                        <p className="text-xs text-[#3f4850] mt-0.5">{seg.grade}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#faf8ff] border border-[#dae2fd]/60">
                        <span className="flex items-center gap-1.5 text-xs font-bold font-['JetBrains_Mono'] text-[#ba1a1a] uppercase mb-1">
                          <span className="material-symbols-outlined text-sm">warning</span>
                          Primary Bottlenecks &amp; Hazards
                        </span>
                        <p className="text-sm font-semibold text-[#131b2e]">{seg.bottlenecks}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#faf8ff] border border-[#dae2fd]/60">
                        <span className="flex items-center gap-1.5 text-xs font-bold font-['JetBrains_Mono'] text-[#006947] uppercase mb-1">
                          <span className="material-symbols-outlined text-sm">verified_user</span>
                          Tactical Passing Protocol
                        </span>
                        <p className="text-sm font-semibold text-[#131b2e]">{seg.passProtocol}</p>
                      </div>
                    </div>

                    {/* Operational Stations */}
                    <div className="p-5 rounded-2xl bg-[#f2f3ff] border border-[#dae2fd] space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-['JetBrains_Mono'] font-bold text-[#3f4850] uppercase flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-[#006194]">local_gas_station</span>
                          Fuel &amp; Energy Top-Up Station
                        </span>
                        <span className="font-semibold text-[#131b2e]">{seg.fuelCheckpoint}</span>
                      </div>
                      <div className="h-px bg-[#dae2fd]/60" />
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-['JetBrains_Mono'] font-bold text-[#3f4850] uppercase flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-[#a200ba]">how_to_reg</span>
                          Permits &amp; Checkpoint Station
                        </span>
                        <span className="font-semibold text-[#131b2e]">{seg.permitStation}</span>
                      </div>
                    </div>

                    {/* Road Surface Specification Box */}
                    <div className="p-5 rounded-2xl border border-[#dae2fd]/70 bg-gradient-to-r from-[#e2e7ff]/30 to-[#d2d9f4]/20 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#006194] shadow-sm shrink-0">
                        <span className="material-symbols-outlined">analytics</span>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold font-['JetBrains_Mono'] text-[#006194] uppercase">
                          Road Surface Classification
                        </h4>
                        <p className="text-sm font-bold text-[#131b2e] mt-0.5">{seg.surfaceGrade}</p>
                        <p className="text-xs text-[#3f4850] mt-1">
                          Calculated for low-center-of-gravity handling, suspension travel demands, and tire thermal durability on single-lane granite shelves.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: FLEET & RIG SPECIFICATIONS */}
      {activeTab === 'vehicles' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vehicles.map((v, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-[#dae2fd] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-bold font-['JetBrains_Mono'] px-2.5 py-1 rounded-full ${v.badgeColor}`}>
                    {v.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#f2f3ff] flex items-center justify-center text-[#006194]">
                    <span className="material-symbols-outlined text-lg">{v.icon}</span>
                  </div>
                </div>

                <h3 className="font-extrabold text-[#131b2e] text-lg leading-tight font-['Plus_Jakarta_Sans']">
                  {v.name}
                </h3>
                <p className="text-xs text-[#006194] font-semibold mt-1">{v.role}</p>
                <p className="text-xs text-[#3f4850] mt-0.5">{v.capacity}</p>

                <div className="mt-5 space-y-2.5 pt-4 border-t border-[#dae2fd]/60">
                  {v.specs.map((s, si) => (
                    <div key={si} className="text-xs">
                      <span className="font-['JetBrains_Mono'] text-[10px] text-[#3f4850] block font-semibold uppercase">
                        {s.label}
                      </span>
                      <span className="font-semibold text-[#131b2e]">{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#dae2fd]/60">
                <div className="flex items-center justify-between text-xs text-[#006947] font-semibold font-['JetBrains_Mono']">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Operational Readiness
                  </span>
                  <span>100% PASS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB CONTENT: PERMITS & CHECKPOINTS */}
      {activeTab === 'permits' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {permits.map((p, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border border-[#dae2fd] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[10px] font-bold font-['JetBrains_Mono'] px-2 py-0.5 rounded-full ${p.statusColor}`}>
                      {p.status}
                    </span>
                    <span className="material-symbols-outlined text-[#006194] text-lg">verified</span>
                  </div>

                  <h3 className="font-extrabold text-[#131b2e] text-base font-['Plus_Jakarta_Sans'] leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#3f4850] mt-1 font-['JetBrains_Mono']">{p.authority}</p>

                  <div className="mt-4 space-y-3 pt-3 border-t border-[#dae2fd]/60 text-xs">
                    <div>
                      <span className="font-['JetBrains_Mono'] text-[10px] text-[#3f4850] font-bold uppercase block">
                        Cost Per Person
                      </span>
                      <span className="font-semibold text-[#131b2e]">{p.costPerPerson}</span>
                    </div>
                    <div>
                      <span className="font-['JetBrains_Mono'] text-[10px] text-[#3f4850] font-bold uppercase block">
                        Expedition Total
                      </span>
                      <span className="font-bold text-[#006194] font-['JetBrains_Mono']">{p.totalGroupCost}</span>
                    </div>
                    <div>
                      <span className="font-['JetBrains_Mono'] text-[10px] text-[#3f4850] font-bold uppercase block">
                        Enforced Checkpoints
                      </span>
                      <ul className="mt-1 space-y-1">
                        {p.checkpoints.map((cp, ci) => (
                          <li key={ci} className="text-[11px] text-[#3f4850] flex items-start gap-1.5">
                            <span className="text-[#006194] font-bold">•</span>
                            <span>{cp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#dae2fd]/60 text-[11px] text-[#3f4850] font-['JetBrains_Mono']">
                  Validity: <span className="font-bold text-[#131b2e]">{p.validity}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Permit Guidelines Banner */}
          <div className="p-6 rounded-3xl bg-[#f2f3ff] border border-[#dae2fd] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#e2e7ff] text-[#006194] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">document_scanner</span>
              </div>
              <div>
                <h4 className="font-bold text-[#131b2e] text-sm">Physical Permit Documentation Mandatory</h4>
                <p className="text-xs text-[#3f4850] mt-0.5">
                  Carry 4 hard copies of student citizen IDs, 2 passport-sized photos per traveler, and official school authorization letter for rapid checkpoint clearing.
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigateTab('trip-wallet-accounts')}
              className="shrink-0 px-4 py-2.5 rounded-xl bg-white border border-[#dae2fd] text-xs font-bold text-[#006194] hover:bg-[#faf8ff] transition-all shadow-sm"
            >
              Check Wallet Allocations →
            </button>
          </div>
        </div>
      )}

      {/* TAB CONTENT: HELI-EVACUATION & SAFETY */}
      {activeTab === 'safety' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyEvac.map((ev, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border border-[#dae2fd] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-['JetBrains_Mono'] bg-[#ffdad6] text-[#93000a]">
                      AIR CORRIDOR 0{i + 1}
                    </span>
                    <span className="material-symbols-outlined text-[#ba1a1a]">medical_services</span>
                  </div>

                  <h3 className="font-extrabold text-[#131b2e] text-lg font-['Plus_Jakarta_Sans']">
                    {ev.zone}
                  </h3>
                  <p className="text-xs text-[#3f4850] mt-1 font-['JetBrains_Mono']">{ev.helipad}</p>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#dae2fd]/60 text-xs">
                    <div>
                      <span className="font-['JetBrains_Mono'] text-[10px] text-[#3f4850] font-bold uppercase block">
                        Heli Transit Flight Time
                      </span>
                      <p className="font-semibold text-[#131b2e]">{ev.flightTimePKR}</p>
                      <p className="text-[11px] text-[#3f4850]">{ev.flightTimeKTM}</p>
                    </div>

                    <div>
                      <span className="font-['JetBrains_Mono'] text-[10px] text-[#3f4850] font-bold uppercase block">
                        Weather Window
                      </span>
                      <p className="font-semibold text-[#ba1a1a]">{ev.weatherWindow}</p>
                    </div>

                    <div>
                      <span className="font-['JetBrains_Mono'] text-[10px] text-[#3f4850] font-bold uppercase block">
                        Ground Alternative Descent
                      </span>
                      <p className="font-semibold text-[#131b2e]">{ev.groundDescent}</p>
                    </div>

                    <div>
                      <span className="font-['JetBrains_Mono'] text-[10px] text-[#3f4850] font-bold uppercase block">
                        Stationed Medical Aid Post
                      </span>
                      <p className="font-semibold text-[#006947]">{ev.clinic}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#dae2fd]/60">
                  <button
                    onClick={onOpenSosModal}
                    className="w-full py-2.5 rounded-xl bg-[#faf8ff] hover:bg-[#ffdad6]/50 border border-[#dae2fd] text-xs font-bold text-[#ba1a1a] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-sm">emergency</span>
                    <span>Test Emergency SOS Packet</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
