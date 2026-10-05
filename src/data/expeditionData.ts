export interface WaypointInfo {
  id: string;
  name: string;
  alt: string;
  altMeters: number;
  gradient: string;
  road: string;
  surfaceColor: string;
  status: string;
  caution: string;
  distance: string;
  transit: string;
  cx: number;
  cy: number;
}

export const WAYPOINTS: Record<string, WaypointInfo> = {
  ktm: {
    id: 'ktm',
    name: "Kathmandu Valley Hub",
    alt: "1,400 m",
    altMeters: 1400,
    gradient: "+0 m",
    road: "Paved Highway (Prithvi)",
    surfaceColor: "bg-[#6ffbbe]/40 text-[#002113] border border-[#006947]/30",
    status: "Base Outpost & Expedition Assembly",
    caution: "Urban congestion outbound; initiate roll-out prior to 06:00 AM.",
    distance: "0 km",
    transit: "Expedition Launchpad",
    cx: 80,
    cy: 265,
  },
  bes: {
    id: 'bes',
    name: "Besisahar Gateway",
    alt: "760 m",
    altMeters: 760,
    gradient: "-640 m",
    road: "Sub-Alpine Blacktop",
    surfaceColor: "bg-[#6ffbbe]/40 text-[#002113] border border-[#006947]/30",
    status: "4x4 / EV Transit Transfer Hub",
    caution: "Permit checkpoint entry point (ACAP/TIMS). Rig inspection mandatory.",
    distance: "178 km",
    transit: "4h 30m Micro-Coach",
    cx: 230,
    cy: 325,
  },
  cha: {
    id: 'cha',
    name: "Chame Gorge Headquarters",
    alt: "2,670 m",
    altMeters: 2670,
    gradient: "+1,910 m",
    road: "Rugged Waterfall Cliff Track",
    surfaceColor: "bg-[#ffdad6] text-[#93000a] border border-[#ba1a1a]/30",
    status: "Active Gorge Ascents & Hot Springs",
    caution: "Single-lane granite shelves, frequent cascading meltwater crossings.",
    distance: "244 km",
    transit: "5h 15m Mountain 4x4 / Bolero Rig",
    cx: 430,
    cy: 145,
  },
  man: {
    id: 'man',
    name: "Manang Alpine Plateau",
    alt: "3,519 m",
    altMeters: 3519,
    gradient: "+849 m (High Peak)",
    road: "Dry Riverbeds & High Scree",
    surfaceColor: "bg-[#ffd6fd] text-[#36003e] border border-[#a200ba]/30",
    status: "High Alpine Acclimatization Node",
    caution: "Thin atmospheric density. Oxygen saturation monitoring required. Hydrate 4L daily.",
    distance: "276 km",
    transit: "3h 45m Rugged Trail",
    cx: 580,
    cy: 68,
  },
  pok: {
    id: 'pok',
    name: "Pokhara Lakeside Basin",
    alt: "822 m",
    altMeters: 822,
    gradient: "-2,697 m descent",
    road: "Modern 4-Lane Express Highway",
    surfaceColor: "bg-[#cce5ff] text-[#001d31] border border-[#006194]/30",
    status: "Valley Tactical Re-supply Hub",
    caution: "High speed sector, monitor brake rotor temperatures on valley drops.",
    distance: "410 km",
    transit: "6h 20m Highway Transit",
    cx: 760,
    cy: 318,
  },
  gha: {
    id: 'gha',
    name: "Ghandruk Annapurna Balcony",
    alt: "1,940 m",
    altMeters: 1940,
    gradient: "+1,118 m",
    road: "Tiered Flagstone & Hill Pavement",
    surfaceColor: "bg-[#4edea3]/40 text-[#005236] border border-[#006947]/30",
    status: "Gurung Slate Foothill Citadel",
    caution: "Steep cobblestone terminal approach; foot porter transfers final 300m.",
    distance: "465 km",
    transit: "2h 40m Hill Drive",
    cx: 890,
    cy: 215,
  },
};

export interface HighlightCard {
  id: string;
  name: string;
  alt: string;
  waypoint: string;
  description: string;
  badge: string;
  badgeIcon: string;
  badgeColor: string;
  imageUrl: string;
  imageAlt: string;
}

export const HIGHLIGHTS: HighlightCard[] = [
  {
    id: 'chame',
    name: "Chame Marshyangdi Gorge",
    alt: "2,670 m ALT",
    waypoint: "Waypoint 01 • Day 2",
    description: "Vertical rock amphitheater sliced by torrential glacial streams. Serves as administrative pivot before entering the Trans-Himalayan rain shadow.",
    badge: "Hot spring foot-soak recovery checkpoint",
    badgeIcon: "verified",
    badgeColor: "text-[#006194]",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCx5EzuD6t0-ZPzPb5QcLnKhU5vvzm-SrKH9BxHwge2MCAWjp4iHxiClbkaMQiP-XwivSkIoI1TLc_roDfSx_QoS0GnbYdWIYyEKnvtzkcLCXOJQT7PukKdD-xbRDt8hurkOwNHoy-wW5qfdAXvq6HLrrygC2CO-erm-h8bQQhngnvVs_XjITE-dPLDQB6vDV9mTnlrCf0WJ4pDJaMBl7N998YYU5WF9vcVksz-2jo9AtqIsasq1vHJ",
    imageAlt: "Towering dramatic cascading waterfall plunging over sheer granite cliffs in the lush Himalayan gorge of Chame Nepal, misty pine forests, turquoise river surging below, deep mountain ink shadows and bright crystal water highlights."
  },
  {
    id: 'braga',
    name: "Braga Cliff Monastery",
    alt: "3,450 m ALT",
    waypoint: "Waypoint 02 • Day 3",
    description: "A 900-year-old architectural sanctuary built directly into chalky sediment cliffs. Houses 108 gilded bronze statues and centuries-old wooden frescoes.",
    badge: "Mandatory spiritual blessing & acclimatization step",
    badgeIcon: "history_edu",
    badgeColor: "text-[#a200ba]",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwIe9INNpODTeJcxJni912ogS_piXwgT_q661nTZYSlxc1JehpZT5ra8FlsUlIXWf29txYVMqtwJHnO5CRDBlES55mNG1mVswJtqLvwqRA0Snk_ZRXcTPGOYY7susFG8nDNi_nYEMwmWLOUc6vLbmV9RkxXFosbUVbsmcv8MwA0c2qYJAlmMAxtubgrYaJ4QHqIChzed7J87C_dYPsvcQvNqB_5aKpNx3Y86MTrqsFbndKnJOD-X2b",
    imageAlt: "Ancient Tibetan style mud and stone monastery of Braga built into vertical eroded clay cliffs and hoodoos under a crisp dark blue high altitude sky in Manang Nepal, vibrant prayer flags fluttering in the alpine wind."
  },
  {
    id: 'gangapurna',
    name: "Gangapurna Glacial Ridge",
    alt: "3,519 m ALT",
    waypoint: "Waypoint 03 • Day 3",
    description: "Emerald terminal-moraine basin fed directly by Annapurna III icefalls. The pinnacle panoramic viewpoint for our high-altitude day turnaround.",
    badge: "Panoramic view: Annapurna II, IV, and Tilicho Peak",
    badgeIcon: "landscape",
    badgeColor: "text-[#006947]",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuADuvkwVENzPkMH5R1GL1nx-5oPOZdwYvMne95n6DzNlXGp_9x7kCH-OQQ2t51ajgblV1dvITzlyymgbVD0bLnJeXv2mw5Fa-cdfsRTqUAZoG78svaN-vuyHJyh7_vm1SRPEt_4JISpjvHYvCWb3c6kljaNwXSfKLe2MzgeLbm8iIUqbrEV3ZJFsZx2gN2hLk7KELTyqfEgB5bb2dLMdAp0sDFhdumAMky35yMJZYsycFz5-N-xRS50",
    imageAlt: "Turquoise alpine glacial lake of Gangapurna surrounded by moraine ridges and enormous snow covered peaks of Annapurna III, golden afternoon light hitting high Himalayan glaciers with crystalline reflections."
  },
  {
    id: 'ghandruk',
    name: "Slate Stone Ghandruk",
    alt: "1,940 m ALT",
    waypoint: "Waypoint 04 • Day 4",
    description: "Centuries-old Gurung settlement characterized by hand-chiseled slate steps, hanging dried corn, and unobstructed close-quarters vistas of Machapuchare (Fishtail).",
    badge: "Gurung homestay dinner & traditional hearth lodging",
    badgeIcon: "cottage",
    badgeColor: "text-[#006194]",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvYHF07tPONbIazGnksYQ9CHPL2AbNtCKXyhpIeVKe-9cOvIKh_I7iUyKYnUBt_xOUmk3rqRajBXEw6T5EO4vRyA0cunvNQ625Ghw086DfP2SVQU45FuC4bYgCS3ca6AAGbnVuVVkI36vtOB0jsB_DowEEH86CgY63kIPN2mpANyU1V30j_QDMTf6CXyH8WcZDPPi78Vgt0LS8-CFupoRzMgrE23l56NKlZiJyd8DSoWytryLjv856",
    imageAlt: "Picturesque stone Gurung village of Ghandruk Nepal with terraced hillsides, slate paved courtyards, traditional carved wooden windows, framed by towering majestic view of snowy Machapuchare Fishtail Mountain."
  },
];

export interface ChronoItem {
  time: string;
  title: string;
  description: string;
  isMilestone?: boolean;
}

export interface DayItinerary {
  dayNum: number;
  dayLabel: string;
  title: string;
  routeShort: string;
  altBadge: string;
  distance: string;
  driveTime: string;
  elevationNet: string;
  targetPeak: string;
  summary: string;
  tag: string;
  tagClass: string;
  subTag: string;
  chronology: ChronoItem[];
  lodgingName: string;
  lodgingType: string;
  roomsAllocated: string;
  nightlyTotalNpr: number;
  lodgingNote: string;
  lodgingStatus: string;
  roadSurface: string;
  telemetrySync: string;
  warningNotice?: string;
  heroImage: string;
  heroCaption: string;
  heroImageAlt: string;
  depArr: string;
  mosaicSummary: string;
  tacticalPoints: { icon: string; title: string; subtitle: string }[];
}

export const DAYS_ITINERARY: DayItinerary[] = [
  {
    dayNum: 1,
    dayLabel: "Day 01 of 05",
    title: "Kathmandu to Chame Escalation",
    routeShort: "KTM → Chame",
    altBadge: "2,670m",
    distance: "220 km (Approx 240 km run)",
    driveTime: "11-13 Hours Transit",
    elevationNet: "+1,270m NET",
    targetPeak: "2,670m",
    summary: "Pre-dawn breakout leaving the Kathmandu bowl via Prithvi Highway. Rigorous 4x4 transition at Besisahar entering the Marshyangdi river gorge, ending at high-altitude district headquarters Chame.",
    tag: "Off-Road Transition",
    tagClass: "bg-[#dae2fd] text-[#004b73]",
    subTag: "Waterfalls & Granite Cliffs",
    chronology: [
      {
        time: "04:30 AM",
        title: "Kathmandu Zero Hour Hard Departure",
        description: "Full crew muster at Balaju bypass point. Zero delays tolerated to clear Thankot / Nagdhunga bottleneck before commercial truck pileup.",
        isMilestone: true,
      },
      {
        time: "10:30 AM",
        title: "Besisahar Transfer & Rig Handover",
        description: "Transition to iCAR V23 rugged 4x4 spec. Check-in ACAP permit counter & TIMS stamps. Rapid 45-min fuel and carb loading.",
      },
      {
        time: "02:30 PM",
        title: "Tal Waterfall Incline Checkpoint",
        description: "Border gate separating Lamjung & Manang districts. Steep cliffside suspension bridges and continuous rock surface driving.",
      },
      {
        time: "06:00 PM",
        title: "Evening Arrival: Chame Outpost",
        description: "Engine cooldown, vehicle tie-down check. Immediate check-in at Eagle Eye Hotel, warm garlic soup ingestion for preliminary acclimatization.",
        isMilestone: true,
      }
    ],
    lodgingName: "Eagle Eye Hotel / White Rock",
    lodgingType: "Twin-sharing alpine lodge with internal heating and hot shower backup system. Centrally located near the natural hot spring run.",
    roomsAllocated: "3 Rooms Allocated",
    nightlyTotalNpr: 9000,
    lodgingNote: "3 × NPR 3,000 / night",
    lodgingStatus: "LOCKED",
    roadSurface: "60% Paved / 40% Off-Road",
    telemetrySync: "4G Ncell / NTC Active",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlLenHBY0HwyH8KVffmP_hHbkbzhMSOQ6-YiI0K6ZfxlLGaav5FYmpr2rdVnyZ2IMVAeOfzfpy-awA3cmryewk20xMGPTn6Y9d1RBxVHUxc2DaUHpUcyfrxzlETCbwW_Cpgjqsz3rh9w03YKbU5kxV1KNeAm88T-s3oz5gLAEIwwNFO_QPv4xe-4xrHJQ12DLbc57n88rqfdKYusL95D2HeD-OPqCezN7q7XbNiWTptnGXqXxKiDIF",
    heroCaption: "Chame River Canyon Gateway (2,670m)",
    heroImageAlt: "Rugged Marsyangdi River gorge in Nepal with dramatic sheer rock cliffs, gushing turquoise glacial river waters below, narrow unpaved Himalayan mountain shelf road, pine forests clinging to granite slopes.",
    depArr: "DEP: 06:00 • ARR: 17:00",
    mosaicSummary: "Early 06:00 AM roll from the valley across the Prithvi Highway to Dumre, turning north into Besisahar. Here, the paved highway terminates abruptly. Switch telemetry to off-road 4x4 mode as the vehicle claws along the sheer Marsyangdi riverbed cliffs, crossing roaring glacial cascades at Chamje and Dharapani.",
    tacticalPoints: [
      { icon: "flag", title: "Besisahar", subtitle: "ACAP & TIMS Vehicle Inspection" },
      { icon: "waterfall_chart", title: "Chamje Falls", subtitle: "Rock overhang & wet riverbed" }
    ]
  },
  {
    dayNum: 2,
    dayLabel: "Day 02 of 05",
    title: "Chame to Manang Apex Climb",
    routeShort: "Chame → Manang",
    altBadge: "3,519m (Apex)",
    distance: "48 km (Rigorous Off-Road)",
    driveTime: "5.5 Hours Expedition Pacing",
    elevationNet: "+849m NET",
    targetPeak: "3,519m",
    summary: "Ascent past the great curved rock face of Paungda Danda into the Tibetan rain shadow. Exploring ancient 900-year Braga Monastery and acclimatizing by Gangapurna Glacial Lake.",
    tag: "ALTITUDE REST MODE ACTIVE",
    tagClass: "bg-[#ffd6fd] text-[#36003e]",
    subTag: "APEX: 3,519 METERS",
    chronology: [
      {
        time: "07:00 AM",
        title: "Chame Natural Thermal Checkpoint",
        description: "Hydration check (minimum 1L boiled ginger water) and battery temperature insulation audit.",
        isMilestone: true,
      },
      {
        time: "09:30 AM",
        title: "Pisang Pine Ridge & Paungda Danda Wall",
        description: "First optical contact with the dramatic sweep of Paungda Danda (Swargadwari). Transition from moist pine valley to dry arid high steppe.",
      },
      {
        time: "11:45 AM",
        title: "Braga Historic Cliffside Monastery",
        description: "Acclimatization stair ascent to the 900-year-old gompa. Monk blessings, incense offerings, and slow deliberate respiration cadence.",
      },
      {
        time: "01:00 PM",
        title: "Arrival: Manang Plateau Settlement",
        description: "Rig parked in lower staging lot. Check-in Shambhala Lodge. Rest, pulse oximeter check, and afternoon acclimatization stroll to Gangapurna viewpoint.",
        isMilestone: true,
      }
    ],
    lodgingName: "Hotel Shambhala / Yeti Lodge",
    lodgingType: "Classic Tibetan-style stone lodge with heated solar sun-room dining and wood-fire metal stove. Spectacular panoramas of Annapurna III.",
    roomsAllocated: "3 Rooms Allocated",
    nightlyTotalNpr: 7500,
    lodgingNote: "3 × NPR 2,500 / night",
    lodgingStatus: "LOCKED",
    roadSurface: "10% Dirt Road / 90% High Scree Track",
    telemetrySync: "Ncell 3G Stable / NTC Intermittent",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0sJSrReyxY5Ib2Zq7WJ2VqOlwnYLx7BmHxhqDgvtJAF6LC7b6QLwzo0nvGbXKRWbnkG7HIm7cxWYIXvbWpuFUFD4nbw3gMOA2krZV8kyZkVravi87dIUG0PbdiyHooi1EW6wHNePepbWGwHDD5I7ajqqZyAgX5fsFCgW4T_KcoEUJ9dKqqYH0Vx-EbnpY9YTmfvzqmV8PdG7Hq0744qBjAWg0_wVZsu-gBSBPP5UIA6cOmNSTSb7",
    heroCaption: "Manang Valley & Gangapurna Glacier (3,519m)",
    heroImageAlt: "Breathtaking panoramic view of Manang village Nepal in the Annapurna range with snow-covered peaks, ancient stone houses, and turquoise Gangapurna lake.",
    depArr: "DEP: 07:30 • ARR: 13:00",
    mosaicSummary: "As the dense pine canopy of Pisang recedes, the terrain transforms into a sweeping, arid amphitheater guarded by the soaring rock wall of Paungda Danda. Stop at the 900-year-old cliffside Braga Monastery before entering Manang. Mandatory hydration protocol is in effect; slow deliberate pacing is required to manage barometric pressure shifts.",
    tacticalPoints: [
      { icon: "temple_buddhist", title: "Braga Gompa", subtitle: "Ancient clay Buddha statuary & 360° view" },
      { icon: "waves", title: "Gangapurna Lake", subtitle: "Turquoise glacial melt lagoon at town rim" }
    ]
  },
  {
    dayNum: 3,
    dayLabel: "Day 03 of 05",
    title: "Manang to Pokhara High-Speed Descent",
    routeShort: "Manang → Pokhara",
    altBadge: "822m (Descent)",
    distance: "235 km",
    driveTime: "12 - 14 Hours Longest Leg",
    elevationNet: "-2,697m RADICAL DROP",
    targetPeak: "822m (Descent)",
    summary: "The most grueling driving endurance shift of the entire expedition. Retracing Marsyangdi canyon downward from freezing 3,500m scree to the subtropical lakeside breeze of Pokhara.",
    tag: "ENDURANCE PUSH",
    tagClass: "bg-[#006194] text-white",
    subTag: "Oxygen Levels Returning to 100%",
    chronology: [
      {
        time: "05:30 AM",
        title: "Sub-Zero Engine Pre-Heat & Departure",
        description: "Rig start at -4°C. Check brake fluid viscosity and tire inflation. Pre-dawn descent roll down through Humde airstrip corridor.",
        isMilestone: true,
      },
      {
        time: "09:30 AM",
        title: "Dharapani Permit Clearance & Checkpoint",
        description: "ACAP exit stamp verification. Suspension and differential inspection before the steep rocky drop through Tal gorge.",
      },
      {
        time: "01:30 PM",
        title: "Besisahar Gateway Re-entry & Lunch Pitstop",
        description: "Transition off high-clearance 4x4 back to express highway coach. Hot dal bhat feast and tire pressure adjustment for asphalt.",
        isMilestone: true,
      },
      {
        time: "07:30 PM",
        title: "Lakeside Pokhara Nightfall Arrival",
        description: "Check-in Hotel Mountain View near Phewa Lake. Transition from sub-zero mountain shell jackets to warm evening stroll on lakeside boulevard.",
      }
    ],
    lodgingName: "Hotel Mountain View / Lakeside Grand",
    lodgingType: "Comfortable lakeside hotel with hot pressurized showers, high-speed Wi-Fi, balconies overlooking Phewa lake, and full laundry service.",
    roomsAllocated: "3 Rooms Allocated",
    nightlyTotalNpr: 6000,
    lodgingNote: "3 × NPR 2,000 / night",
    lodgingStatus: "LOCKED",
    roadSurface: "40% Mountain Scree / 60% Paved Highway",
    telemetrySync: "High-Speed 4G LTE Active",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzfk0d3TKUE2SHvBX-yMql2sAvOuMrybZAyilz3Akj4fq4T0viknyhxeTaeKuCeK3ADHVcGEuAstt8m8RPaJFqraBQaWGpV3sup20RZuMIcvmpq7Nr2UfpoBR0lGUw-YJhP3w1t7Nwy1ZeM5powk70B77Xn52S96RxbbuH1vXDFdvZ6p4IwbAh90DZyk9VGA5IdwgQQ3ZfSnoU-S8AFfcnIMcqjKykl36RZVe_2nn391upOM6SHXcq",
    heroCaption: "Phewa Lake & Pokhara Valley (822m)",
    heroImageAlt: "Serene twilight over Phewa Lake in Pokhara Nepal with colorful wooden rowboats moored in foreground and Machapuchare peak in ambient twilight.",
    depArr: "DEP: 06:00 • ARR: 19:30",
    mosaicSummary: "The most demanding driving shift of the expedition. Wheels roll at dawn from freezing Manang. Retrace the rocky scree tracks through Dharapani, reaching the Besisahar transfer junction by early afternoon. Transition back onto blacktop tarmac and accelerate westward along the Marsyangdi and Trishuli riverbeds to the subtropical warmth of Lakeside Pokhara.",
    tacticalPoints: [
      { icon: "directions_car", title: "Besisahar Pitstop", subtitle: "Vehicle undercarriage check & fuel top-up" },
      { icon: "nightlife", title: "Lakeside Rest", subtitle: "Phewa lake promenade dinner & debrief" }
    ]
  },
  {
    dayNum: 4,
    dayLabel: "Day 04 of 05",
    title: "Pokhara to Ghandruk Annapurna South Ascent",
    routeShort: "Pokhara → Ghandruk",
    altBadge: "1,940m",
    distance: "60 km",
    driveTime: "3.5 Hours Hill Transit",
    elevationNet: "+1,118m NET",
    targetPeak: "1,940m",
    summary: "Departing Pokhara across Modi Khola river gorge, driving up the steep Kimche switchbacks and walking the ancient stone flagstone stairways of Ghandruk beneath Fishtail and Annapurna South.",
    tag: "SANCTUARY GATE",
    tagClass: "bg-[#e2e7ff] text-[#006194]",
    subTag: "Gurung Slate Ridge & Annapurna South",
    warningNotice: "CONFIRM BEFORE BOOKING: Strict vehicle parking at Kimche lower lot. 45-minute stone stairway walk to upper Gurung village.",
    chronology: [
      {
        time: "08:30 AM",
        title: "Pokhara Lakeside Fuel & Bakery Staging",
        description: "Fresh French roast, pastry fueling, and camera gear battery full charge check before heading into Modi Khola valley.",
      },
      {
        time: "10:30 AM",
        title: "Nayapul & Birethanti River Confluence",
        description: "ACAP checkpoint re-stamp. Entering the Annapurna Sanctuary western corridor over towering suspension footbridges.",
      },
      {
        time: "12:00 PM",
        title: "Kimche Terminal Parking & Foot Trek",
        description: "Vehicle securely parked in Kimche lot. 45-minute ascent over 1,800 stone steps into the heart of upper Ghandruk village.",
        isMilestone: true,
      },
      {
        time: "05:45 PM",
        title: "Ghandruk Golden Hour Machapuchare Vigil",
        description: "Unobstructed direct line of sight to the sacred Fishtail peak turning blazing orange and gold. Evening hearthside Gurung dinner.",
        isMilestone: true,
      }
    ],
    lodgingName: "Hill Top Lodge & Cultural Heritage Home",
    lodgingType: "Premium traditional Gurung stone architecture with hand-chiseled slate courtyards, unobstructed Annapurna South views, and traditional wood hearth dining.",
    roomsAllocated: "3 Rooms Allocated",
    nightlyTotalNpr: 8400,
    lodgingNote: "3 × NPR 2,800 / night",
    lodgingStatus: "LOCKED",
    roadSurface: "70% Asphalt / 30% Steep Switchback Gravel",
    telemetrySync: "4G Ncell / NTC High Signal",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuClOWHQfWQw0TGQNdrW1attQjPKDMJlUfL8x4zh9NiWGUFOwuNGQGT-RDK8dV669_2DsHpnYTJ6Tt9LM2Yg77xCuCIttpmpq--yIgm83lksHfsP-j3rWAqaIR7xY47-Y2nAnlYgzRQpVnMU-X7XYHzssBEh0S9E59Uy4VLfrXlCgQFj3dfacvNstVBs3y5GsrukPyuww-b_FuLqAJEVL2H-up4ca4tTqXKVQhJ-dGgdamfVn7JSydz9",
    heroCaption: "Ghandruk Slate Terraces & Annapurna South (1,940m)",
    heroImageAlt: "Traditional Gurung stone village of Ghandruk Nepal with slate roofs, stone paved courtyards, and a massive towering snow peak of Annapurna South glowing orange-gold.",
    depArr: "DEP: 09:30 • ARR: 13:00",
    mosaicSummary: "Depart Pokhara over the high suspension ridges of Nayapul, tracking upstream beside the Modi Khola river. Turn uphill toward Kimche on steep switchback gravel. Park vehicles securely at Kimche lot and complete a 45-minute stone stairway walk to the traditional Gurung settlement of Ghandruk, basking directly beneath the sheer south face of Annapurna South and Hiunchuli.",
    tacticalPoints: [
      { icon: "wb_twilight", title: "Sunset Golden Hour", subtitle: "17:45 optimal direct optical line on Machapuchare" },
      { icon: "alarm", title: "Early Sleep Mandate", subtitle: "Lights out 20:30 sharp (01:45 AM wake up call)" }
    ]
  },
  {
    dayNum: 5,
    dayLabel: "Day 05 of 05",
    title: "Ghandruk to Kathmandu Pre-Dawn Sprint",
    routeShort: "Ghandruk → KTM",
    altBadge: "1,400m (Return)",
    distance: "260 km",
    driveTime: "8 - 9 Hours Non-Stop",
    elevationNet: "-540m NET",
    targetPeak: "1,400m (Valley)",
    summary: "Absolute zero-delay tactical sprint. 01:45 AM alarm, 02:15 AM departure from Kimche to pass Malekhu and Naubise choke points before commercial freight jams form.",
    tag: "TACTICAL RETURN",
    tagClass: "bg-[#ffdad6] text-[#93000a]",
    subTag: "ABSOLUTE HARD DEADLINE: 04:30 AM KTM",
    warningNotice: "ZERO SIGHTSEEING RUN: Strict protocol to beat Prithvi Highway bottleneck. +120 Min safety contingency buffer built-in.",
    chronology: [
      {
        time: "01:45 AM",
        title: "Night Alarm & Silent Headlamp Pack",
        description: "Zero noise protocol in Gurung homestay. Thermal flask fill, headlamps active, descend stone steps to Kimche parking lot.",
        isMilestone: true,
      },
      {
        time: "02:15 AM",
        title: "Hard Wheels Roll Downhill to Pokhara Bypass",
        description: "Early morning mountain downhill run with clear roads. Bypassing Pokhara downtown directly onto Prithvi Highway eastbound.",
        isMilestone: true,
      },
      {
        time: "03:15 AM",
        title: "Malekhu River Valley Velocity Sprint",
        description: "Passing the river bends and industrial fish stalls before morning vegetable freight lorries clog the two-lane tarmac.",
      },
      {
        time: "04:30 AM",
        title: "Kathmandu Valley Inbound Checkpoint Clear",
        description: "Nagdhunga pass cleared without queue. Re-entry into Kathmandu bowl. Full mission telemetry closed with zero budget overrun.",
        isMilestone: true,
      }
    ],
    lodgingName: "Home / Airport Flight Connection",
    lodgingType: "Return completed to base in Kathmandu Valley (Zero hotel cost). All 4 expedition crew safe and fully reconciled.",
    roomsAllocated: "Zero Hotel Outlay",
    nightlyTotalNpr: 0,
    lodgingNote: "NPR 0 Outlay",
    lodgingStatus: "COMPLETED",
    roadSurface: "85% Paved Highway / 15% Cobblestone",
    telemetrySync: "Full Cellular Telemetry Active",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUZzxNLXtYOpMBxhPwU_BFSHNm0KQqO7EgsjCsUUWF6mAaMechcAZ83o_MNDK5rejrux53Wk2FTYc6AJBPfXwh_TYeGUIpYRbgXdcXL42ROJHqI_RVfBkeGPLZSC6o9HiU1_dk0uxhn_J64eyoQDXAL9TQCaq9jvrR7BmsX0240_g2wDuhFRbnq5rxfFVfK-ZALa67Lt4Jj0U0bx-F99IoUEQtOrmPkWSYj65c3bQ7Qwhy0oIllIg3",
    heroCaption: "Prithvi Highway Night Corridor (1,400m)",
    heroImageAlt: "High altitude night road highway leading toward distant valley lights of Kathmandu Nepal, dynamic motion blur of vehicle headlights slicing through pre-dawn darkness.",
    depArr: "DEP: 02:15 • ARR: KTM 04:30 AM",
    mosaicSummary: "Zero recreational stops permitted. Strict protocol: 01:45 AM wake up, 02:15 AM vehicle departure down from Kimche. Crucial early morning Prithvi Highway sprint to bypass notorious freight choke points at Malekhu and Naubise gorge before industrial truck queues form. Full safety buffer allocated to ensure reliable international flight or mission connection in Kathmandu.",
    tacticalPoints: [
      { icon: "alarm", title: "01:45 AM Alarm", subtitle: "Pack and headlamp descend to Kimche" },
      { icon: "speed", title: "02:15 AM Roll", subtitle: "Non-stop velocity sprint across Prithvi corridor" }
    ]
  }
];

export interface LedgerItem {
  id: string;
  category: string;
  categoryIcon: string;
  title: string;
  description: string;
  tag: string;
  amountNpr: number;
}

export interface DayLedgerGroup {
  dayNum: number;
  dayTitle: string;
  daySub: string;
  dayTotalNpr: number;
  items: LedgerItem[];
  strategyNote: string;
  strategyTitle: string;
  strategyPhoto: string;
  strategyPhotoAlt: string;
  remainingNpr: number;
  offlineSlipId: string;
}

export const DAILY_LEDGERS: DayLedgerGroup[] = [
  {
    dayNum: 1,
    dayTitle: "Segment Dossier 01: Kathmandu → Besisahar → Chame",
    daySub: "Day 1: Chame",
    dayTotalNpr: 15600,
    remainingNpr: 94400,
    offlineSlipId: "#CHM-2025-091 • CHECKPOINT MARSYANGDI PASSED",
    strategyTitle: "Operational Audit",
    strategyNote: "The Besisahar to Chame stretch is raw 4WD terrain. Transit budget was calibrated to shield against surge pricing at the gate. NPR 1,000 incidental slush cleared without overrun.",
    strategyPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlLenHBY0HwyH8KVffmP_hHbkbzhMSOQ6-YiI0K6ZfxlLGaav5FYmpr2rdVnyZ2IMVAeOfzfpy-awA3cmryewk20xMGPTn6Y9d1RBxVHUxc2DaUHpUcyfrxzlETCbwW_Cpgjqsz3rh9w03YKbU5kxV1KNeAm88T-s3oz5gLAEIwwNFO_QPv4xe-4xrHJQ12DLbc57n88rqfdKYusL95D2HeD-OPqCezN7q7XbNiWTptnGXqXxKiDIF",
    strategyPhotoAlt: "Chame river gorge rocky track and suspension bridge",
    items: [
      {
        id: "d1-1",
        category: "Connecting Transit Express",
        categoryIcon: "directions_bus",
        title: "Early morning Kathmandu to Besisahar high-axle mountain transit.",
        description: "Shared express bus for 4 passengers with roof rack luggage.",
        tag: "Verified Ticket",
        amountNpr: 3200,
      },
      {
        id: "d1-2",
        category: "Eagle Eye Hotel & Alpine Lodge",
        categoryIcon: "hotel",
        title: "Chame Riverside 2x Deluxe Twin rooms, heated blankets & power.",
        description: "3 rooms reserved with hot shower solar supplement.",
        tag: "Night 1 Accom.",
        amountNpr: 9000,
      },
      {
        id: "d1-3",
        category: "Pooled Expedition Nourishment",
        categoryIcon: "restaurant",
        title: "NPR 600/person allowance for lunch, dinner, dal bhat & ginger tea.",
        description: "Warm high-carb fuel stops at Dumre, Besisahar, and Chame.",
        tag: "4 Explorers Pool",
        amountNpr: 2400,
      },
      {
        id: "d1-4",
        category: "Mountain Flask Refills & Checkpoint Tolls",
        categoryIcon: "local_drink",
        title: "Boiled spring water canisters, highway bridge pass & tea stops.",
        description: "Hydration thermos top-up and municipal bridge passage fee.",
        tag: "Incidental Trail Pool",
        amountNpr: 1000,
      }
    ]
  },
  {
    dayNum: 2,
    dayTitle: "Segment Dossier 02: Chame → Pisang → Manang",
    daySub: "Day 2: Manang",
    dayTotalNpr: 10500,
    remainingNpr: 83900,
    offlineSlipId: "#MNG-2025-104 • SHAMBHALA RECEIPT STAMPED",
    strategyTitle: "Altitude Strategy",
    strategyNote: "Rig remained parked in lower lot. Cost savings realized by grouping food orders into unified hot-pot portions at Shambhala.",
    strategyPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0sJSrReyxY5Ib2Zq7WJ2VqOlwnYLx7BmHxhqDgvtJAF6LC7b6QLwzo0nvGbXKRWbnkG7HIm7cxWYIXvbWpuFUFD4nbw3gMOA2krZV8kyZkVravi87dIUG0PbdiyHooi1EW6wHNePepbWGwHDD5I7ajqqZyAgX5fsFCgW4T_KcoEUJ9dKqqYH0Vx-EbnpY9YTmfvzqmV8PdG7Hq0744qBjAWg0_wVZsu-gBSBPP5UIA6cOmNSTSb7",
    strategyPhotoAlt: "Shambhala lodge in snowy Manang valley",
    items: [
      {
        id: "d2-1",
        category: "Hotel Shambhala (Manang Town)",
        categoryIcon: "hotel",
        title: "Classic Tibetan-style lodge with sun-room dining & wood-fire stove.",
        description: "3 twin rooms facing Annapurna III glacier wall.",
        tag: "Night 2 Accom.",
        amountNpr: 7500,
      },
      {
        id: "d2-2",
        category: "Acclimatization Fuel & High-Altitude Diet",
        categoryIcon: "restaurant",
        title: "High-carb garlic noodle soups, yak cheese toast, energy fuel.",
        description: "Strict medicinal garlic soup intake to stimulate capillary flow.",
        tag: "4 Explorers Pool",
        amountNpr: 2400,
      },
      {
        id: "d2-3",
        category: "High-Altitude Electrolytes & Teahouse Misc",
        categoryIcon: "coffee",
        title: "Thermal herbal infusions and hydration tablets for the group.",
        description: "Ginger lemon honey pots + monastery lamp oil donation.",
        tag: "Acclimatization Slush",
        amountNpr: 600,
      }
    ]
  },
  {
    dayNum: 3,
    dayTitle: "Segment Dossier 03: Manang → Besisahar → Pokhara",
    daySub: "Day 3: Pokhara",
    dayTotalNpr: 9600,
    remainingNpr: 74300,
    offlineSlipId: "#PKR-2025-412 • LAKESIDE DESK RECONCILED",
    strategyTitle: "Descent Economics",
    strategyNote: "Descent from Manang was completed safely within daylight. Negotiated off-peak rate of NPR 6,000 at Hotel Mountain View yielded significant savings.",
    strategyPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzfk0d3TKUE2SHvBX-yMql2sAvOuMrybZAyilz3Akj4fq4T0viknyhxeTaeKuCeK3ADHVcGEuAstt8m8RPaJFqraBQaWGpV3sup20RZuMIcvmpq7Nr2UfpoBR0lGUw-YJhP3w1t7Nwy1ZeM5powk70B77Xn52S96RxbbuH1vXDFdvZ6p4IwbAh90DZyk9VGA5IdwgQQ3ZfSnoU-S8AFfcnIMcqjKykl36RZVe_2nn391upOM6SHXcq",
    strategyPhotoAlt: "Phewa lake boats and lakeside hotels",
    items: [
      {
        id: "d3-1",
        category: "Hotel Mountain View (Pokhara Lakeside)",
        categoryIcon: "hotel",
        title: "Central lakeside rooms with hot pressure showers, balcony, and WiFi.",
        description: "3 double ensuite rooms with panoramic lake breeze.",
        tag: "Night 3 Accom.",
        amountNpr: 6000,
      },
      {
        id: "d3-2",
        category: "Lakeside Sustenance & Post-Trail Meals",
        categoryIcon: "restaurant",
        title: "Fresh lake trout, wood-fired bread, and fresh fruit replenishment.",
        description: "Celebratory protein dinner after 12-hour high altitude descent.",
        tag: "4 Explorers Pool",
        amountNpr: 2400,
      },
      {
        id: "d3-3",
        category: "Highway Tolls & Auxiliary Fuel Top-Up",
        categoryIcon: "local_gas_station",
        title: "Prithvi Highway bridge pass and emergency auxiliary canister fuel.",
        description: "15L backup canister check and toll tokens.",
        tag: "Tolls & Transit",
        amountNpr: 1200,
      }
    ]
  },
  {
    dayNum: 4,
    dayTitle: "Segment Dossier 04: Pokhara → Nayapul → Ghandruk",
    daySub: "Day 4: Ghandruk",
    dayTotalNpr: 11600,
    remainingNpr: 62700,
    offlineSlipId: "#GHD-2025-883 • HILL TOP LODGE VERIFIED",
    strategyTitle: "Cultural Inhabitation",
    strategyNote: "Pre-locking Hill Top Lodge at NPR 8,400 guaranteed prime vantage rooms facing Annapurna South without walk-in broker surcharges.",
    strategyPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuClOWHQfWQw0TGQNdrW1attQjPKDMJlUfL8x4zh9NiWGUFOwuNGQGT-RDK8dV669_2DsHpnYTJ6Tt9LM2Yg77xCuCIttpmpq--yIgm83lksHfsP-j3rWAqaIR7xY47-Y2nAnlYgzRQpVnMU-X7XYHzssBEh0S9E59Uy4VLfrXlCgQFj3dfacvNstVBs3y5GsrukPyuww-b_FuLqAJEVL2H-up4ca4tTqXKVQhJ-dGgdamfVn7JSydz9",
    strategyPhotoAlt: "Traditional stone courtyard in Ghandruk",
    items: [
      {
        id: "d4-1",
        category: "Hill Top Lodge & Cultural Heritage Home",
        categoryIcon: "hotel",
        title: "Premium Gurung stone architecture, unobstructed Annapurna South panoramas.",
        description: "3 slate-terrace rooms reserved in upper village cluster.",
        tag: "Night 4 Target Book",
        amountNpr: 8400,
      },
      {
        id: "d4-2",
        category: "Traditional Gurung Dinner & Hearthside Meals",
        categoryIcon: "restaurant",
        title: "Local organic millet rotis, mountain greens, fermented pickles, local honey.",
        description: "Homestyle wood hearth dining cooked fresh by Gurung hosts.",
        tag: "4 Explorers Pool",
        amountNpr: 2400,
      },
      {
        id: "d4-3",
        category: "Ghandruk Upper Terminal Parking & Local Porter",
        categoryIcon: "local_parking",
        title: "Secure vehicle bay fee and village entry support.",
        description: "Guarded gravel parking lot at Kimche road head.",
        tag: "Local Community Fee",
        amountNpr: 800,
      }
    ]
  },
  {
    dayNum: 5,
    dayTitle: "Segment Dossier 05: Ghandruk → Pokhara → Kathmandu Return",
    daySub: "Day 5: Kathmandu",
    dayTotalNpr: 7900,
    remainingNpr: 54800,
    offlineSlipId: "#KTM-2025-998 • METROPOLITAN DE-BRIEF COMPLETE",
    strategyTitle: "Final Clearance",
    strategyNote: "All 5 daily operating segments completed cleanly inside target. Zero baggage damage, zero mechanical tow expenses incurred.",
    strategyPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUZzxNLXtYOpMBxhPwU_BFSHNm0KQqO7EgsjCsUUWF6mAaMechcAZ83o_MNDK5rejrux53Wk2FTYc6AJBPfXwh_TYeGUIpYRbgXdcXL42ROJHqI_RVfBkeGPLZSC6o9HiU1_dk0uxhn_J64eyoQDXAL9TQCaq9jvrR7BmsX0240_g2wDuhFRbnq5rxfFVfK-ZALa67Lt4Jj0U0bx-F99IoUEQtOrmPkWSYj65c3bQ7Qwhy0oIllIg3",
    strategyPhotoAlt: "Kathmandu valley pre-dawn entry highway",
    items: [
      {
        id: "d5-1",
        category: "Pokhara to Kathmandu Deluxe Transit Express",
        categoryIcon: "directions_bus",
        title: "Comfort coach return with AC, onboard charging, and rest stops.",
        description: "4 reserved seats arriving in Kathmandu before morning jam.",
        tag: "4 Travelers Paid",
        amountNpr: 5000,
      },
      {
        id: "d5-2",
        category: "Early Transit Highway Breakfast & Riverside Meals",
        categoryIcon: "restaurant",
        title: "Malekhu river fish snacks, highway thali meal, and hydration.",
        description: "Quick roadside recharge meals.",
        tag: "4 Explorers Pool",
        amountNpr: 2400,
      },
      {
        id: "d5-3",
        category: "Mugling Corridor Highway Tolls & Terminal Surcharge",
        categoryIcon: "toll",
        title: "Interstate roadway infrastructure tax and terminal clearing.",
        description: "Highway transit pass and toll receipts.",
        tag: "Highway Receipt",
        amountNpr: 500,
      },
      {
        id: "d5-4",
        category: "Night 5 Hotel Accommodation",
        categoryIcon: "home",
        title: "Return completed to home base in Kathmandu valley (Zero cost).",
        description: "No hotel booking required on return day.",
        tag: "Zero Outlay",
        amountNpr: 0,
      }
    ]
  }
];

export interface MealDay {
  dayNum: number;
  dayName: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  hydrationNote: string;
}

export const FOOD_JOURNAL: MealDay[] = [
  {
    dayNum: 1,
    dayName: "Day 1: Chame",
    breakfast: "Tibetan fry bread & milk tea at Dumre",
    lunch: "River Dal Bhat with organic saag at Besisahar",
    dinner: "Hot ginger lemon soup & Thukpa at Eagle Eye",
    hydrationNote: "Hydration: 3L Herbal Boil",
  },
  {
    dayNum: 2,
    dayName: "Day 2: Manang",
    breakfast: "Hot porridge, yak butter & wild honey",
    lunch: "Sherpa stew with hand-pulled noodles",
    dinner: "Baked yak cheese pizza & garlic soup (3,519m)",
    hydrationNote: "Altitude Sickness Remedy",
  },
  {
    dayNum: 3,
    dayName: "Day 3: Pokhara",
    breakfast: "Mountain toast & fresh French roast",
    lunch: "Marsyangdi trail thali box on highway transit",
    dinner: "Lakeside freshwater fish grill & fresh salads",
    hydrationNote: "Post-Descent Celebration",
  },
  {
    dayNum: 4,
    dayName: "Day 4: Ghandruk",
    breakfast: "Himalayan eggs, roasted corn & masala tea",
    lunch: "Nayapul trail wrap with local curd & potatoes",
    dinner: "Authentic Gurung feast: buckwheat dhido & mutton",
    hydrationNote: "Heritage Hearth Cooking",
  },
  {
    dayNum: 5,
    dayName: "Day 5: Kathmandu",
    breakfast: "Ghandruk sunrise bakery rolls & coffee",
    lunch: "Mugling highway fresh vegetable momos & chai",
    dinner: "Kathmandu return debrief drinks & Newari bites",
    hydrationNote: "Expedition Concluded",
  },
];

export interface StudentProfile {
  name: string;
  role: string;
  roleType: string;
  badgeColor: string;
  photoUrl: string;
  description: string;
  curricularOutput: string;
}

export const STUDENT_TEAM: StudentProfile[] = [
  {
    name: "Aayush Sharma",
    role: "Co-Lead A",
    roleType: "Navigation & 4WD Transfers",
    badgeColor: "bg-[#006194] text-white",
    photoUrl: "/src/assets/images/student_aayush_sharma_1791213294831.jpg",
    description: "Conducted route topography analyses, vehicle clearance benchmarks for Besisahar-Chame, and road safety check timings.",
    curricularOutput: "Detailed 5-day route elevation charts & daily transit hour logs."
  },
  {
    name: "Prashant K.C.",
    role: "Co-Lead B",
    roleType: "Lodging & ACAP Protocols",
    badgeColor: "bg-[#a200ba] text-white",
    photoUrl: "/src/assets/images/student_prashant_kc_1791213305345.jpg",
    description: "Directly vetted high-altitude teahouse insulation in Manang, verified solar charging accessibility, and structured Annapurna Conservation Area (ACAP) permits.",
    curricularOutput: "Ghandruk heritage community staging guide & permit dossier."
  },
  {
    name: "Rohan Shrestha",
    role: "Treasurer",
    roleType: "Group Accounts & Treasury",
    badgeColor: "bg-[#006947] text-white",
    photoUrl: "/src/assets/images/student_rohan_shrestha_1791213317552.jpg",
    description: "Enforced strict allocation of the NPR 120,000 ceiling, monitored cash-only off-grid requirements, and preserved an emergency trail reserve.",
    curricularOutput: "Itemized ledger audit with 8.4% contingency surplus."
  },
  {
    name: "Samir Thapa",
    role: "Safety / Media",
    roleType: "Field Media & Emergency SOS",
    badgeColor: "bg-[#006194] text-white",
    photoUrl: "/src/assets/images/student_samir_thapa_1791213329188.jpg",
    description: "Curated visual narrative archives, drafted high-altitude pulse-oximetry check logs, and established emergency descent protocols for Manang.",
    curricularOutput: "Emergency telecommunications plan & travelogue photography."
  }
];

export const RESEARCH_DISCOVERIES = [
  {
    id: 1,
    title: "RESEARCH DISCOVERY #1",
    quote: "Researching Manang's thin air taught us that descriptive English writing relies on visceral, sensory detail: the bite of alpine wind, the rhythmic drone of prayer flags, and the mechanical roar of 4WD gears along the Marsyangdi River.",
    source: "Collaborative Journal Entry, Day 2",
    icon: "psychology"
  },
  {
    id: 2,
    title: "RESEARCH DISCOVERY #2",
    quote: "In Ghandruk, we discovered how language preserves heritage. Our travelogue required capturing the hospitality, slate-roof architecture, and centuries-old customs of the Gurung people with dignity, accuracy, and literary empathy.",
    source: "Cultural Synthesis Memo, Day 4",
    icon: "menu_book"
  },
  {
    id: 3,
    title: "RESEARCH DISCOVERY #3",
    quote: "The greatest lesson wasn't geography or mathematics — it was mutual accountability. Four friends debating schedules, compromising gracefully, and proving that collective student effort can produce professional-grade work.",
    source: "Expedition Post-Mortem Note",
    icon: "handshake"
  }
];
