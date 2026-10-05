import React, { useState } from 'react';

interface SosTelemetryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SosTelemetryModal: React.FC<SosTelemetryModalProps> = ({ isOpen, onClose }) => {
  const [transmitting, setTransmitting] = useState<boolean>(false);
  const [transmitted, setTransmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const triggerDistressBroadcast = () => {
    setTransmitting(true);
    setTimeout(() => {
      setTransmitting(false);
      setTransmitted(true);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 border border-[#ffdad6] shadow-2xl relative space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f2f3ff] hover:bg-[#e2e7ff] text-[#131b2e] flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-2xl animate-pulse">sos</span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-['JetBrains_Mono'] bg-[#ffdad6] text-[#93000a]">
                EMERGENCY SOS DISPATCH
              </span>
              <span className="text-[10px] font-bold text-[#ba1a1a] font-['JetBrains_Mono']">
                HIGH-ALTITUDE EVACUATION
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-[#131b2e] font-['Plus_Jakarta_Sans']">
              Himalayan Search &amp; Rescue Telemetry
            </h3>
            <p className="text-xs text-[#3f4850] mt-0.5">
              Instant satellite distress beacon broadcast to Himalayan Rescue Association (HRA) Manang &amp; Annapurna Conservation Area Command.
            </p>
          </div>
        </div>

        {/* Live Coordinates Card */}
        <div className="p-4 rounded-2xl bg-[#faf8ff] border border-[#dae2fd] space-y-2 font-['JetBrains_Mono'] text-xs">
          <div className="flex justify-between text-[#3f4850]">
            <span>Telemetry Coordinates:</span>
            <span className="font-bold text-[#131b2e]">28.6603° N, 84.0242° E</span>
          </div>
          <div className="flex justify-between text-[#3f4850]">
            <span>Current Barometric Altitude:</span>
            <span className="font-bold text-[#ba1a1a]">3,519 m (Manang Valley)</span>
          </div>
          <div className="flex justify-between text-[#3f4850]">
            <span>Radio Frequency Reserve:</span>
            <span className="font-bold text-[#006194]">144.500 MHz (VHF Ch 12)</span>
          </div>
          <div className="flex justify-between text-[#3f4850]">
            <span>Nearest Verified Helipad:</span>
            <span className="font-bold text-[#006947]">Humde Airstrip / Manang Army Post</span>
          </div>
        </div>

        {/* Direct Contacts Hotlines */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold font-['JetBrains_Mono'] text-[#3f4850] uppercase block">
            Emergency Hotlines &amp; Rescue Dispatch:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-3 bg-[#f2f3ff] rounded-xl border border-[#dae2fd]/60 flex items-center justify-between">
              <div>
                <span className="font-bold text-[#131b2e] block">HRA Manang Post</span>
                <span className="text-[10px] text-[#3f4850]">Altitude Sickness Aid</span>
              </div>
              <span className="font-bold font-['JetBrains_Mono'] text-[#006194]">+977-985-602-0402</span>
            </div>

            <div className="p-3 bg-[#f2f3ff] rounded-xl border border-[#dae2fd]/60 flex items-center justify-between">
              <div>
                <span className="font-bold text-[#131b2e] block">Nepal Tourist Police</span>
                <span className="text-[10px] text-[#3f4850]">Toll-Free 24/7</span>
              </div>
              <span className="font-bold font-['JetBrains_Mono'] text-[#006194]">1144 / +977-1-4247041</span>
            </div>

            <div className="p-3 bg-[#f2f3ff] rounded-xl border border-[#dae2fd]/60 flex items-center justify-between">
              <div>
                <span className="font-bold text-[#131b2e] block">Heli Rescue Dispatch</span>
                <span className="text-[10px] text-[#3f4850]">Air Dynasty / Simrik</span>
              </div>
              <span className="font-bold font-['JetBrains_Mono'] text-[#ba1a1a]">+977-1-4467000</span>
            </div>

            <div className="p-3 bg-[#f2f3ff] rounded-xl border border-[#dae2fd]/60 flex items-center justify-between">
              <div>
                <span className="font-bold text-[#131b2e] block">Chame Police Station</span>
                <span className="text-[10px] text-[#3f4850]">District Headquarters</span>
              </div>
              <span className="font-bold font-['JetBrains_Mono'] text-[#006194]">+977-66-440199</span>
            </div>
          </div>
        </div>

        {/* Action Button & Confirmation */}
        <div className="space-y-3 pt-2">
          {transmitted && (
            <div className="p-3 rounded-xl bg-[#ffdad6] border border-[#ba1a1a]/30 text-xs text-[#93000a] font-bold flex items-center gap-2 font-['JetBrains_Mono']">
              <span className="material-symbols-outlined text-sm">satellite_alt</span>
              <span>EMERGENCY DISTRESS BEACON BROADCAST CONFIRMED. Coordinates packet queued to HRA &amp; NTNC Dispatch!</span>
            </div>
          )}

          <button
            onClick={triggerDistressBroadcast}
            disabled={transmitting}
            className={`w-full py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 ${
              transmitting
                ? 'bg-[#ba1a1a]/70 text-white cursor-wait'
                : 'bg-[#ba1a1a] hover:bg-[#93000a] text-white shadow-[0_4px_16px_rgba(186,26,26,0.35)]'
            }`}
          >
            <span className="material-symbols-outlined text-base">
              {transmitting ? 'sync' : 'emergency'}
            </span>
            <span>
              {transmitting
                ? 'Broadcasting Satellite Packet to 144.500 MHz...'
                : transmitted
                ? 'Re-broadcast Emergency Distress Ping'
                : 'TRIGGER SIMULATED SOS DISTRESS BEACON'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
