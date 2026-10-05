import React, { useState } from 'react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [pledged, setPledged] = useState<boolean>(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 border border-[#dae2fd] shadow-2xl relative space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f2f3ff] hover:bg-[#e2e7ff] text-[#131b2e] flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#ffd6fd] text-[#a200ba] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-['JetBrains_Mono'] bg-[#ffd6fd] text-[#a200ba]">
                SOCIAL LEGACY &amp; GIVING
              </span>
              <span className="text-[10px] font-bold text-[#006947] font-['JetBrains_Mono']">
                VERIFIED IMPACT
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-[#131b2e] font-['Plus_Jakarta_Sans']">
              Himalayan Community Health Post Contribution
            </h3>
            <p className="text-xs text-[#3f4850] mt-0.5">
              Expedition surplus funding dedicated directly to medical aid and high-altitude emergency oxygen equipment.
            </p>
          </div>
        </div>

        {/* Photo and Details */}
        <div className="rounded-2xl overflow-hidden border border-[#dae2fd]/60 bg-[#faf8ff]">
          <img
            src="/src/assets/images/nepal_medical_aid_1791213341017.jpg"
            alt="Annapurna Nepal community health clinic"
            className="w-full h-44 object-cover"
          />
          <div className="p-4 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#131b2e] text-sm font-['Plus_Jakarta_Sans']">
                Manang &amp; Annapurna Foothill Community Health Post
              </span>
              <span className="font-['JetBrains_Mono'] font-black text-[#a200ba] text-base">
                NPR 10,000.00
              </span>
            </div>
            <p className="text-[#3f4850] leading-relaxed">
              Saved from rigorous negotiation, off-peak accommodation contracts, and zero mechanical tow overheads across the 5 days.
            </p>
          </div>
        </div>

        {/* Allocation Breakdown */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs font-['JetBrains_Mono']">
          <div className="p-3 bg-[#f2f3ff] rounded-xl border border-[#dae2fd]/60">
            <span className="text-[10px] text-[#3f4850] block font-bold uppercase">Oxygen Supply</span>
            <span className="font-bold text-[#006194]">NPR 5,000</span>
          </div>
          <div className="p-3 bg-[#f2f3ff] rounded-xl border border-[#dae2fd]/60">
            <span className="text-[10px] text-[#3f4850] block font-bold uppercase">First Aid Restock</span>
            <span className="font-bold text-[#006947]">NPR 3,500</span>
          </div>
          <div className="p-3 bg-[#f2f3ff] rounded-xl border border-[#dae2fd]/60">
            <span className="text-[10px] text-[#3f4850] block font-bold uppercase">Honor Roll</span>
            <span className="font-bold text-[#a200ba]">NPR 1,500</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          {pledged ? (
            <div className="p-3 rounded-xl bg-[#6ffbbe]/40 border border-[#006947]/30 text-xs text-[#006947] font-bold text-center font-['JetBrains_Mono']">
              ✓ Expedition Honor Roll Certificate Registered to Aayush, Prashant, Rohan, and Samir!
            </div>
          ) : (
            <button
              onClick={() => setPledged(true)}
              className="w-full py-3.5 rounded-xl bg-[#a200ba] hover:bg-[#850099] text-white text-xs font-black transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span className="material-symbols-outlined text-base">celebration</span>
              <span>Confirm &amp; Register Expedition Honor Roll (NPR 10,000)</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
