import React from 'react';
import { STUDENT_TEAM, RESEARCH_DISCOVERIES } from '../../data/expeditionData';
import { NavTab } from '../HeaderNav';

interface AcknowledgementScreenProps {
  onNavigateTab: (tab: NavTab) => void;
}

export const AcknowledgementScreen: React.FC<AcknowledgementScreenProps> = ({
  onNavigateTab,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-12">
      {/* Top Academic Banner */}
      <div className="bg-gradient-to-r from-[#006194] to-[#004b73] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold font-['JetBrains_Mono'] bg-white/20 backdrop-blur-md text-white border border-white/30">
              GRADE XI ENGLISH CURRICULUM PORTFOLIO
            </span>
            <span className="text-xs font-['JetBrains_Mono'] text-[#cce5ff]">
              // PROJECT CAPSTONE • AUTUMN 2025
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight leading-tight">
            High-Altitude Field Travelogue &amp; Technical Expedition Dossier
          </h1>

          <p className="text-sm md:text-base text-[#e2e7ff] leading-relaxed">
            A comprehensive multidisciplinary portfolio synthesizing descriptive travel writing, field logistics management, high-altitude acclimatization science, and cultural documentation across the Annapurna and Manang corridors of Nepal.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/20 text-xs font-['JetBrains_Mono']">
              <span className="material-symbols-outlined text-sm text-[#4edea3]">school</span>
              <span>Institution: Senior Secondary Faculty</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/20 text-xs font-['JetBrains_Mono']">
              <span className="material-symbols-outlined text-sm text-[#ffd6fd]">verified</span>
              <span>Presentation Grade: Grade XI Distinction</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/20 text-xs font-['JetBrains_Mono']">
              <span className="material-symbols-outlined text-sm text-[#cce5ff]">group</span>
              <span>Cohort: 4 Student Explorers</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: STUDENT COHORT RESEARCH TEAM */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold font-['JetBrains_Mono'] text-[#006194] uppercase tracking-wider block">
              Student Explorers Cohort
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#131b2e] font-['Plus_Jakarta_Sans']">
              Authors, Logisticians &amp; Field Navigators
            </h2>
          </div>
          <span className="text-xs text-[#3f4850] font-['JetBrains_Mono']">
            Individual Research Leads &amp; Shared Responsibilities
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDENT_TEAM.map((student, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-[#dae2fd] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo & Role */}
                <div className="relative mb-5">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#f2f3ff] border border-[#dae2fd]/60 shadow-inner">
                    <img
                      src={student.photoUrl}
                      alt={student.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span
                    className={`absolute bottom-3 left-3 text-[10px] font-bold font-['JetBrains_Mono'] px-2.5 py-1 rounded-full shadow-md ${student.badgeColor}`}
                  >
                    {student.role}
                  </span>
                </div>

                <h3 className="text-lg font-black text-[#131b2e] font-['Plus_Jakarta_Sans']">
                  {student.name}
                </h3>
                <p className="text-xs font-bold text-[#006194] font-['JetBrains_Mono'] mt-0.5">
                  {student.roleType}
                </p>

                <p className="text-xs text-[#3f4850] mt-3 leading-relaxed">
                  {student.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#dae2fd]/60">
                <span className="text-[10px] font-['JetBrains_Mono'] font-bold text-[#3f4850] uppercase block">
                  Curricular Deliverable
                </span>
                <p className="text-xs font-semibold text-[#131b2e] mt-0.5">
                  {student.curricularOutput}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: RESEARCH DISCOVERIES & FIELD MEMOS */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-[#dae2fd] shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold font-['JetBrains_Mono'] text-[#a200ba] uppercase tracking-wider block">
            Academic Synthesis
          </span>
          <h2 className="text-2xl font-black text-[#131b2e] font-['Plus_Jakarta_Sans']">
            Key Curricular Discoveries &amp; Epiphanies
          </h2>
          <p className="text-xs md:text-sm text-[#3f4850] mt-1">
            Excerpts from the collaborative expedition journal, reflecting language acquisition, fieldwork resilience, and rhetorical craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESEARCH_DISCOVERIES.map((disc) => (
            <div
              key={disc.id}
              className="p-6 rounded-2xl bg-[#faf8ff] border border-[#dae2fd]/80 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold font-['JetBrains_Mono'] text-[#006194]">
                    {disc.title}
                  </span>
                  <span className="material-symbols-outlined text-[#006194] text-lg">
                    {disc.icon}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-[#131b2e] italic leading-relaxed">
                  "{disc.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#dae2fd]/60 text-[11px] font-['JetBrains_Mono'] text-[#3f4850]">
                {disc.source}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: CURRICULAR ENGLISH RUBRIC & EVALUATION */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-[#dae2fd] shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold font-['JetBrains_Mono'] text-[#006947] uppercase tracking-wider block">
            Curricular Assessment
          </span>
          <h2 className="text-2xl font-black text-[#131b2e] font-['Plus_Jakarta_Sans']">
            Grade XI English Evaluation Matrix
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#f2f3ff] border border-[#dae2fd] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#006194]">CRITERION 1</span>
              <span className="text-xs font-bold text-[#006947] bg-[#6ffbbe]/40 px-2 py-0.5 rounded-full">EXCELLENT</span>
            </div>
            <h4 className="font-bold text-[#131b2e] text-sm">Sensory Travel Writing</h4>
            <p className="text-xs text-[#3f4850] leading-relaxed">
              Use of evocative imagery, tactile alpine metaphors, and authentic emotional resonance under high-altitude conditions.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f2f3ff] border border-[#dae2fd] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#006194]">CRITERION 2</span>
              <span className="text-xs font-bold text-[#006947] bg-[#6ffbbe]/40 px-2 py-0.5 rounded-full">EXCELLENT</span>
            </div>
            <h4 className="font-bold text-[#131b2e] text-sm">Technical Documentation</h4>
            <p className="text-xs text-[#3f4850] leading-relaxed">
              Precision in telemetry logging, Lake Louise AMS classification, road surface taxonomy, and strict fiscal ledger reconciliation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f2f3ff] border border-[#dae2fd] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#006194]">CRITERION 3</span>
              <span className="text-xs font-bold text-[#006947] bg-[#6ffbbe]/40 px-2 py-0.5 rounded-full">EXCELLENT</span>
            </div>
            <h4 className="font-bold text-[#131b2e] text-sm">Intercultural Empathy</h4>
            <p className="text-xs text-[#3f4850] leading-relaxed">
              Respectful portrayal of Manangi and Gurung heritage, culinary traditions, religious sanctuaries, and local community contributions.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f2f3ff] border border-[#dae2fd] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#006194]">CRITERION 4</span>
              <span className="text-xs font-bold text-[#006947] bg-[#6ffbbe]/40 px-2 py-0.5 rounded-full">EXCELLENT</span>
            </div>
            <h4 className="font-bold text-[#131b2e] text-sm">Collaborative Governance</h4>
            <p className="text-xs text-[#3f4850] leading-relaxed">
              Demonstrated accountability across 4 student co-leads, budget self-discipline, and collective execution without external aid.
            </p>
          </div>
        </div>
      </section>

      {/* NAVIGATION ACTION BAR */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-3xl bg-[#f2f3ff] border border-[#dae2fd]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#006194] shadow-sm">
            <span className="material-symbols-outlined">restart_alt</span>
          </div>
          <div>
            <h4 className="font-bold text-[#131b2e] text-sm">Review Full Expedition Archive</h4>
            <p className="text-xs text-[#3f4850]">Switch between executive overview, daily mosaic, and financial ledger.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateTab('expedition-dossier')}
            className="px-4 py-2 rounded-xl bg-white border border-[#dae2fd] text-xs font-bold text-[#131b2e] hover:bg-[#faf8ff] transition-all"
          >
            ← Expedition Dossier
          </button>
          <button
            onClick={() => onNavigateTab('trip-wallet-accounts')}
            className="px-4 py-2 rounded-xl bg-[#006194] text-white text-xs font-bold hover:bg-[#004b73] transition-all shadow-sm"
          >
            Trip Wallet &amp; Accounts →
          </button>
        </div>
      </div>
    </div>
  );
};
