import React, { useState } from 'react';
import { DAILY_LEDGERS, FOOD_JOURNAL } from '../../data/expeditionData';

interface WalletScreenProps {
  onOpenDonationModal: () => void;
  onOpenOfflineModal: () => void;
}

export const WalletScreen: React.FC<WalletScreenProps> = ({
  onOpenDonationModal,
  onOpenOfflineModal,
}) => {
  const [currency, setCurrency] = useState<'NPR' | 'USD'>('NPR');
  const [activeLedgerStage, setActiveLedgerStage] = useState<number>(1);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  // Conversion rate 1 USD = 133.5 NPR
  const formatAmount = (npr: number) => {
    if (currency === 'USD') {
      const usd = Math.round(npr / 133.5);
      return `$${usd.toLocaleString()}`;
    }
    return `NPR ${npr.toLocaleString()}`;
  };

  const handleExportLedger = () => {
    const reportText = `NEPAL ROAD EXPEDITION 2025 - RECONCILED FISCAL LEDGER
Total Cap: NPR 120,000
Total Expended: NPR 110,000 (91.6%)
Preserved Surplus: NPR 10,000 (8.4%) - Allocated to Himalayan Medical Legacy
Daily Operating Outlay: NPR 57,000
4-Night Lodging Total: NPR 30,900
Transit & 4WD: NPR 52,000
Status: Fully Verified & Reconciled without overruns.`;

    navigator.clipboard.writeText(reportText).then(() => {
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 3000);
    });
  };

  const currentLedgerGroup =
    DAILY_LEDGERS.find((g) => g.dayNum === activeLedgerStage) || DAILY_LEDGERS[0];

  return (
    <div className="w-full flex flex-col gap-8 pb-12">
      {/* HEADER SECTION */}
      <section className="w-full px-4 md:px-8 xl:px-12 pt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div className="space-y-1">
            <span className="font-['JetBrains_Mono'] text-xs text-[#006194] uppercase font-bold tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#006194]" />
              RECONCILED EXPEDITION LEDGER • 4 EXPLORERS • 5 STAGES
            </span>
            <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight">
              THE TRIP WALLET
            </h1>
            <p className="font-['Inter'] text-sm sm:text-base text-[#3f4850]">
              Every rupee planned. Every memory accounted for.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Currency Switcher */}
            <button
              onClick={() => setCurrency(currency === 'NPR' ? 'USD' : 'NPR')}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#eaedff] text-[#131b2e] font-['JetBrains_Mono'] text-xs font-bold border border-[#dae2fd]/80 shadow-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] text-[#006194]">sync_alt</span>
              <span>{currency === 'NPR' ? 'Switch to USD ($)' : 'Switch to NPR (Rs)'}</span>
            </button>

            {/* Export Button */}
            <button
              onClick={handleExportLedger}
              className="px-4 py-2.5 rounded-xl bg-[#006194] hover:bg-[#007bb9] text-white font-['Plus_Jakarta_Sans'] font-semibold text-xs transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">receipt_long</span>
              <span>{copiedNotification ? 'Ledger Copied!' : 'Export Verified Ledger'}</span>
            </button>
          </div>
        </div>

        {/* 3 TOP KPI FINANCIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Cap */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#dae2fd]/60 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#3f4850]">
              <span className="font-['JetBrains_Mono'] text-xs uppercase font-bold tracking-wider">
                TOTAL CAP ALLOCATION
              </span>
              <span className="material-symbols-outlined text-[20px] text-[#006194]">payments</span>
            </div>
            <div className="mt-4">
              <span className="font-['JetBrains_Mono'] text-3xl font-extrabold text-[#131b2e]">
                {formatAmount(120000)}
              </span>
              <p className="font-['JetBrains_Mono'] text-xs text-[#006194] font-semibold mt-1">
                {currency === 'NPR' ? 'NPR 30,000' : '$225'} per adventurer target
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#dae2fd]/50 flex items-center gap-1.5 text-[11px] font-['JetBrains_Mono'] text-[#707881]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#006194]" />
              AUTHORISED EXPEDITION CEILING
            </div>
          </div>

          {/* Planned Gross Outlay */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#dae2fd]/60 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#3f4850]">
              <span className="font-['JetBrains_Mono'] text-xs uppercase font-bold tracking-wider">
                PLANNED GROSS OUTLAY
              </span>
              <span className="material-symbols-outlined text-[20px] text-[#a200ba]">trending_up</span>
            </div>
            <div className="mt-4">
              <span className="font-['JetBrains_Mono'] text-3xl font-extrabold text-[#131b2e]">
                {formatAmount(110000)}
              </span>
              <p className="font-['JetBrains_Mono'] text-xs text-[#a200ba] font-semibold mt-1">
                91.6% COMMITTED • Permits, Lodges, 4WD Rig
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#dae2fd]/50 flex items-center gap-1.5 text-[11px] font-['JetBrains_Mono'] text-[#707881]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a200ba]" />
              ZERO DEBT • ALL BALANCES PRE-TIED
            </div>
          </div>

          {/* Retained Capital Surplus */}
          <div className="bg-[#6ffbbe]/20 rounded-2xl p-6 shadow-sm border border-[#006947]/30 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#005236]">
              <span className="font-['JetBrains_Mono'] text-xs uppercase font-bold tracking-wider">
                RETAINED CAPITAL SURPLUS
              </span>
              <span className="material-symbols-outlined text-[20px] text-[#006947]">volunteer_activism</span>
            </div>
            <div className="mt-4">
              <span className="font-['JetBrains_Mono'] text-3xl font-extrabold text-[#006947]">
                {formatAmount(10000)}
              </span>
              <p className="font-['JetBrains_Mono'] text-xs text-[#006947] font-bold mt-1">
                8.4% SURPLUS • Target Achieved &amp; Preserved
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#006947]/20 flex items-center gap-1.5 text-[11px] font-['JetBrains_Mono'] text-[#005236] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#006947] animate-pulse" />
              READY FOR SOCIAL LEGACY DONATION
            </div>
          </div>
        </div>

        {/* EXPEDITION BURN CALIBRATION BAR */}
        <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm border border-[#dae2fd]/60 space-y-3">
          <div className="flex flex-wrap items-center justify-between text-xs font-['JetBrains_Mono']">
            <span className="text-[#131b2e] font-bold">
              Expedition Burn Calibration —{' '}
              <span className="text-[#3f4850] font-normal">
                {formatAmount(110000)} OF {formatAmount(120000)} DRAWN
              </span>
            </span>
            <span className="px-2.5 py-0.5 rounded bg-[#6ffbbe]/30 text-[#005236] font-bold">
              BUDGET MARGIN: {formatAmount(10000)} SAVED
            </span>
          </div>

          {/* Progress track */}
          <div className="w-full h-3 bg-[#f2f3ff] rounded-full overflow-hidden flex border border-[#bfc7d2]/30">
            <div className="h-full bg-[#006194]" style={{ width: '91.6%' }} title="91.6% Expended" />
            <div className="h-full bg-[#006947]" style={{ width: '8.4%' }} title="8.4% Surplus Reserve" />
          </div>

          {/* Checkpoint milestone labels */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1 font-['JetBrains_Mono'] text-[11px] text-[#707881]">
            <div>
              <span className="block font-bold text-[#131b2e]">{formatAmount(0)}</span>
              <span>Kathmandu Departure</span>
            </div>
            <div>
              <span className="block font-bold text-[#131b2e]">{formatAmount(35300)}</span>
              <span>Marsyangdi &amp; Chame</span>
            </div>
            <div>
              <span className="block font-bold text-[#131b2e]">{formatAmount(75000)}</span>
              <span>Manang High Altitude Pass</span>
            </div>
            <div>
              <span className="block font-bold text-[#131b2e]">{formatAmount(110000)}</span>
              <span>Ghandruk Return Point</span>
            </div>
            <div className="text-right sm:text-right">
              <span className="block font-bold text-[#006947]">{formatAmount(120000)}</span>
              <span className="text-[#006947] font-semibold">Expedition Cap (Saved)</span>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIT ARCHIVE & VOUCHERS / ITEMIZED DAILY LEDGER */}
      <section className="w-full px-4 md:px-8 xl:px-12">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-['JetBrains_Mono'] text-xs text-[#006194] uppercase font-bold tracking-wider">
                AUDIT ARCHIVE &amp; VOUCHERS
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#131b2e]">
                Itemized Daily Ledger &amp; Core Allocations
              </h2>
            </div>
            <span className="font-['JetBrains_Mono'] text-xs text-[#707881]">
              MODE: ITEM-BY-ITEM DETAILED
            </span>
          </div>

          {/* Stage selection tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {DAILY_LEDGERS.map((group) => {
              const isSelected = activeLedgerStage === group.dayNum;
              return (
                <button
                  key={group.dayNum}
                  onClick={() => setActiveLedgerStage(group.dayNum)}
                  className={`px-4 py-2.5 rounded-xl font-['JetBrains_Mono'] text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#006194] text-white shadow-xs'
                      : 'bg-white hover:bg-[#eaedff] text-[#131b2e] border border-[#dae2fd]/60'
                  }`}
                >
                  <span>{group.daySub}</span>
                  <span className={`ml-2 text-[10px] ${isSelected ? 'text-[#cce5ff]' : 'text-[#707881]'}`}>
                    {formatAmount(group.dayTotalNpr)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Breakdown Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Ledger Column (Col 8) */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#dae2fd]/60 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-4 border-[#bfc7d2]/30">
                <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#006194]">
                  {currentLedgerGroup.dayTitle}
                </span>
                <span className="font-['JetBrains_Mono'] text-base font-extrabold text-[#006194]">
                  DAILY RECONCILIATION: {formatAmount(currentLedgerGroup.dayTotalNpr)}
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {currentLedgerGroup.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-[#f2f3ff] hover:bg-[#eaedff] transition-colors border border-[#dae2fd]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#006194] shrink-0 shadow-xs border border-[#dae2fd]">
                        <span className="material-symbols-outlined text-[20px]">
                          {item.categoryIcon}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#131b2e]">
                          {item.category}
                        </span>
                        <p className="font-['Inter'] text-xs text-[#3f4850] mt-0.5 leading-relaxed">
                          {item.title}
                        </p>
                        <span className="font-['Inter'] text-[11px] text-[#707881] mt-0.5">
                          {item.description}
                        </span>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-end justify-between sm:justify-center shrink-0">
                      <span className="font-['JetBrains_Mono'] text-base font-bold text-[#131b2e]">
                        {formatAmount(item.amountNpr)}
                      </span>
                      <span className="font-['JetBrains_Mono'] text-[10px] text-[#006947] font-semibold bg-[#6ffbbe]/30 px-2 py-0.5 rounded mt-0.5">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Offline Slip Verification Stamp */}
              <div className="p-3.5 rounded-xl bg-white border border-[#bfc7d2]/40 flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#3f4850]">
                <span className="flex items-center gap-1.5 text-[#006947] font-semibold">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  OFFLINE SLIP ID: {currentLedgerGroup.offlineSlipId}
                </span>
                <span className="font-bold text-[#006194]">DAY {activeLedgerStage} AUDIT MATCH: 100%</span>
              </div>
            </div>

            {/* Right Strategy & Photo Column (Col 4) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Photo */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-[#dae2fd]/60 group relative h-56">
                <img
                  src={currentLedgerGroup.strategyPhoto}
                  alt={currentLedgerGroup.strategyPhotoAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#93ccff] uppercase font-bold block">
                    CHAME ELEVATION: 2,670M
                  </span>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white">
                    {currentLedgerGroup.strategyTitle} Waypoint
                  </h4>
                </div>
              </div>

              {/* Note card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#dae2fd]/60 space-y-3">
                <div className="flex items-center gap-2 text-[#006194]">
                  <span className="material-symbols-outlined text-[20px]">psychology</span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#131b2e]">
                    {currentLedgerGroup.strategyTitle}
                  </h3>
                </div>
                <p className="font-['Inter'] text-xs text-[#3f4850] leading-relaxed">
                  {currentLedgerGroup.strategyNote}
                </p>

                <div className="pt-3 border-t border-[#dae2fd] flex items-center justify-between font-['JetBrains_Mono'] text-xs">
                  <span className="text-[#707881]">REMAINING AFTER DAY {activeLedgerStage}:</span>
                  <span className="text-[#006947] font-bold">
                    {formatAmount(currentLedgerGroup.remainingNpr)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE FOOD JOURNAL: NPR 2,400 / DAY */}
      <section className="w-full px-4 md:px-8 xl:px-12">
        <div className="bg-[#f2f3ff] rounded-2xl p-6 md:p-8 border border-[#dae2fd]/60 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-['JetBrains_Mono'] text-xs text-[#006194] uppercase font-bold tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">restaurant</span>
                NPR 12,000 POOLED SUSTENANCE LEDGER
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#131b2e] mt-1">
                The Food Journal: {formatAmount(2400)} / Day
              </h2>
              <p className="font-['Inter'] text-xs text-[#3f4850]">
                Precisely {currency === 'NPR' ? 'NPR 600' : '$4.50'} per adventurer every day across all 5 expedition days. Real mountain fuel.
              </p>
            </div>

            <div className="bg-white px-4 py-2 rounded-xl border border-[#dae2fd] font-['JetBrains_Mono'] text-xs text-[#006194] font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">group</span>
              <span>4 Adventurers × {currency === 'NPR' ? 'NPR 600' : '$4.50'} = {formatAmount(2400)}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {FOOD_JOURNAL.map((fj) => (
              <div
                key={fj.dayNum}
                className="bg-white rounded-xl p-4 shadow-xs border border-[#dae2fd]/60 flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between border-b pb-2 border-[#dae2fd]/60">
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#131b2e]">
                    {fj.dayName}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-[#006947]">
                    {formatAmount(2400)}
                  </span>
                </div>

                <div className="space-y-2 text-xs font-['Inter'] text-[#3f4850]">
                  <div className="flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-[#006194] shrink-0 mt-0.5">bakery_dining</span>
                    <span className="leading-tight">{fj.breakfast}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-[#a200ba] shrink-0 mt-0.5">soup_kitchen</span>
                    <span className="leading-tight">{fj.lunch}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-[#006947] shrink-0 mt-0.5">dinner_dining</span>
                    <span className="leading-tight">{fj.dinner}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#dae2fd]/50 text-[10px] font-['JetBrains_Mono'] text-[#707881] font-semibold">
                  {fj.hydrationNote}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLEEPING THE JOURNEY: 4 NIGHTS HIGH ALTITUDE */}
      <section className="w-full px-4 md:px-8 xl:px-12">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="font-['JetBrains_Mono'] text-xs text-[#006194] uppercase font-bold tracking-wider">
                REST STATIONS &amp; SHELTER
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#131b2e]">
                Sleeping the Journey: 4 Nights High Altitude
              </h2>
              <p className="font-['Inter'] text-xs text-[#3f4850]">
                Transparent lodge vouchers for all 4 overnight stays across alpine valleys and mountain ridges.
              </p>
            </div>
            <span className="font-['JetBrains_Mono'] text-xs text-[#006947] font-bold bg-[#6ffbbe]/25 px-3 py-1.5 rounded-lg border border-[#006947]/30">
              TOTAL LODGING: {formatAmount(30900)}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                night: 'NIGHT 01 • CHAME',
                name: 'Eagle Eye Hotel',
                rateNpr: 9000,
                desc: '2x Attached Deluxe Twin rooms with hot gas shower cylinders, electric mattresses, and river views.',
                alt: '2,670M',
                status: 'PAID & CONFIRMED',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlLenHBY0HwyH8KVffmP_hHbkbzhMSOQ6-YiI0K6ZfxlLGaav5FYmpr2rdVnyZ2IMVAeOfzfpy-awA3cmryewk20xMGPTn6Y9d1RBxVHUxc2DaUHpUcyfrxzlETCbwW_Cpgjqsz3rh9w03YKbU5kxV1KNeAm88T-s3oz5gLAEIwwNFO_QPv4xe-4xrHJQ12DLbc57n88rqfdKYusL95D2HeD-OPqCezN7q7XbNiWTptnGXqXxKiDIF',
              },
              {
                night: 'NIGHT 02 • MANANG',
                name: 'Hotel Shambhala',
                rateNpr: 7500,
                desc: 'Mountain stone sanctuary. High-altitude acclimatization center with heated communal hall and solar baths.',
                alt: '3,519M',
                status: 'PAID & CONFIRMED',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0sJSrReyxY5Ib2Zq7WJ2VqOlwnYLx7BmHxhqDgvtJAF6LC7b6QLwzo0nvGbXKRWbnkG7HIm7cxWYIXvbWpuFUFD4nbw3gMOA2krZV8kyZkVravi87dIUG0PbdiyHooi1EW6wHNePepbWGwHDD5I7ajqqZyAgX5fsFCgW4T_KcoEUJ9dKqqYH0Vx-EbnpY9YTmfvzqmV8PdG7Hq0744qBjAWg0_wVZsu-gBSBPP5UIA6cOmNSTSb7',
              },
              {
                night: 'NIGHT 03 • POKHARA',
                name: 'Hotel Mountain View',
                rateNpr: 6000,
                desc: 'Pokhara Lakeside comfort hotel. Clean king & twin quarters, high-speed fiber internet, full laundry service.',
                alt: '822M',
                status: 'PAID & CONFIRMED',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzfk0d3TKUE2SHvBX-yMql2sAvOuMrybZAyilz3Akj4fq4T0viknyhxeTaeKuCeK3ADHVcGEuAstt8m8RPaJFqraBQaWGpV3sup20RZuMIcvmpq7Nr2UfpoBR0lGUw-YJhP3w1t7Nwy1ZeM5powk70B77Xn52S96RxbbuH1vXDFdvZ6p4IwbAh90DZyk9VGA5IdwgQQ3ZfSnoU-S8AFfcnIMcqjKykl36RZVe_2nn391upOM6SHXcq',
              },
              {
                night: 'NIGHT 04 • GHANDRUK',
                name: 'Hill Top Lodge',
                rateNpr: 8400,
                desc: 'Traditional slate stone heritage stay with private panoramic terrace directly confronting Annapurna South.',
                alt: '1,940M',
                status: 'TARGET CONFIRMED',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClOWHQfWQw0TGQNdrW1attQjPKDMJlUfL8x4zh9NiWGUFOwuNGQGT-RDK8dV669_2DsHpnYTJ6Tt9LM2Yg77xCuCIttpmpq--yIgm83lksHfsP-j3rWAqaIR7xY47-Y2nAnlYgzRQpVnMU-X7XYHzssBEh0S9E59Uy4VLfrXlCgQFj3dfacvNstVBs3y5GsrukPyuww-b_FuLqAJEVL2H-up4ca4tTqXKVQhJ-dGgdamfVn7JSydz9',
              },
            ].map((lodge, lIdx) => (
              <div
                key={lIdx}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#dae2fd]/60 flex flex-col justify-between"
              >
                <div className="relative h-44 w-full">
                  <img
                    src={lodge.img}
                    alt={lodge.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded font-['JetBrains_Mono'] text-[10px] font-bold bg-black/60 text-white backdrop-blur-md">
                      {lodge.night}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#131b2e]">
                        {lodge.name}
                      </h4>
                      <span className="font-['JetBrains_Mono'] text-sm font-bold text-[#006947]">
                        {formatAmount(lodge.rateNpr)}
                      </span>
                    </div>
                    <p className="font-['Inter'] text-xs text-[#3f4850] mt-2 leading-relaxed">
                      {lodge.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#dae2fd]/60 flex items-center justify-between font-['JetBrains_Mono'] text-[11px]">
                    <span className="text-[#006947] font-semibold">{lodge.status}</span>
                    <span className="text-[#707881]">{lodge.alt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL LEGACY: NPR 10,000 DONATED */}
      <section className="w-full px-4 md:px-8 xl:px-12">
        <div className="relative rounded-2xl bg-[#283044] text-white p-6 md:p-10 shadow-xl overflow-hidden border border-white/10 space-y-6">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#006947]/30 blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-['JetBrains_Mono'] text-xs text-[#6ffbbe] uppercase font-bold tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#6ffbbe]" />
                10K UNDER BUDGET • A little less spent. A little more saved.
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-extrabold text-white">
                Social Legacy: NPR 10,000 Donated
              </h2>
              <p className="font-['Inter'] text-sm text-[#dae2fd] max-w-2xl leading-relaxed">
                Because our crew executed disciplined route logistics and negotiated group lodge rates, our surplus transforms into essential high-altitude medical equipment.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/15 shrink-0">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#6ffbbe] uppercase font-bold block">
                TRANSMUTATION RESULT
              </span>
              <span className="font-['JetBrains_Mono'] text-base font-extrabold text-white">
                NPR 10,000 SAVED ❤️ → NPR 10,000 DONATED
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Health Clinic Photo (Generated!) */}
            <div className="md:col-span-4 rounded-xl overflow-hidden shadow-md relative h-56 border border-white/15">
              <img
                src="/src/assets/images/nepal_medical_aid_1791213341017.jpg"
                alt="High altitude medical clinic in Annapurna Nepal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-white">
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#6ffbbe] uppercase font-bold block">
                  BENEFICIARY CAUSE
                </span>
                <span className="font-['Plus_Jakarta_Sans'] font-bold">
                  Himalayan Trail &amp; Medical Heritage Fund
                </span>
                <p className="text-[10px] text-white/80 mt-0.5">
                  Providing emergency portable oxygen canisters and altitude sickness supplies to remote rural clinics in Manang &amp; Annapurna circuits.
                </p>
              </div>
            </div>

            {/* Impact specs & Action */}
            <div className="md:col-span-8 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-[#6ffbbe]">
                    <span className="material-symbols-outlined text-[20px]">air</span>
                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-sm">2x Oxygen Cylinders</span>
                  </div>
                  <p className="font-['Inter'] text-xs text-[#dae2fd] mt-1">
                    Directly funded emergency refill cylinders stationed at Chame Base Health Unit.
                  </p>
                </div>

                <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-[#fbabff]">
                    <span className="material-symbols-outlined text-[20px]">medical_services</span>
                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-sm">Trail First-Aid Restock</span>
                  </div>
                  <p className="font-['Inter'] text-xs text-[#dae2fd] mt-1">
                    Provides thermal shock blankets and Diamox packs for passing local porters.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#dae2fd]">
                  <span className="material-symbols-outlined text-[18px] text-[#6ffbbe]">assignment_turned_in</span>
                  <span>Expedition Honor Roll Slip: Certificate registered under 4 Adventurers &amp; Addigen Agency.</span>
                </div>

                <button
                  onClick={onOpenDonationModal}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#006947] hover:bg-[#00855b] text-white font-['Plus_Jakarta_Sans'] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Confirm &amp; Celebrate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE FINAL FOOTNOTE */}
      <section className="w-full px-4 md:px-8 xl:px-12 text-center pt-6">
        <div className="max-w-xl mx-auto space-y-2">
          <div className="w-8 h-8 rounded-full bg-[#e2e7ff] text-[#006194] flex items-center justify-center mx-auto mb-2">
            <span className="material-symbols-outlined text-[18px]">terrain</span>
          </div>
          <span className="font-['JetBrains_Mono'] text-xs text-[#707881] uppercase tracking-wider font-semibold">
            EXPEDITION MANIFEST COMPLETE
          </span>
          <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#131b2e]">
            UNTIL THE NEXT ROAD.
          </h3>
          <p className="font-['Inter'] text-xs text-[#3f4850]">
            Five days. One unforgettable route. Thank you for travelling with Addigen Agency.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-xs font-['JetBrains_Mono'] text-[#006947] font-semibold">
            <span>✓ 4 EXPLORERS FULLY RECONCILED</span>
            <span>•</span>
            <span>▲ TOTAL DISTANCE: 580 KM RUGGED TERRAIN</span>
            <span>•</span>
            <span>⚡ ZERO EXPEDITION OVERRUNS</span>
          </div>
        </div>
      </section>
    </div>
  );
};
