import React, { useState } from 'react';

interface OfflinePackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfflinePackModal: React.FC<OfflinePackModalProps> = ({ isOpen, onClose }) => {
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);
  const [downloaded, setDownloaded] = useState<boolean>(false);

  if (!isOpen) return null;

  const startDownload = () => {
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev === null) return 10;
        if (prev >= 100) {
          clearInterval(interval);
          setDownloaded(true);
          return 100;
        }
        return prev + 25;
      });
    }, 250);
  };

  const handlePrint = () => {
    window.print();
  };

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
          <div className="w-12 h-12 rounded-2xl bg-[#e2e7ff] text-[#006194] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-2xl">download</span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold font-['JetBrains_Mono'] bg-[#dae2fd] text-[#004b73]">
                OFFLINE CACHE v2.4
              </span>
              <span className="text-[10px] font-bold text-[#006947] font-['JetBrains_Mono']">
                READY FOR OFF-GRID
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-[#131b2e] font-['Plus_Jakarta_Sans']">
              Download Tactical Offline Field Pack
            </h3>
            <p className="text-xs text-[#3f4850] mt-0.5">
              Self-contained offline dossier package for complete disconnected operation between Besisahar, Tal, and Manang.
            </p>
          </div>
        </div>

        {/* Contents Checklist */}
        <div className="space-y-2 p-4 bg-[#faf8ff] rounded-2xl border border-[#dae2fd]/60 text-xs">
          <span className="font-bold text-[#131b2e] uppercase font-['JetBrains_Mono'] text-[10px] block mb-2">
            Pack Contents (Total Payload: 18.4 MB)
          </span>
          <div className="flex items-center gap-2 text-[#131b2e]">
            <span className="material-symbols-outlined text-sm text-[#006947]">check_circle</span>
            <span>Vector Topo Maps: Kathmandu → Chame → Manang → Pokhara → Ghandruk</span>
          </div>
          <div className="flex items-center gap-2 text-[#131b2e]">
            <span className="material-symbols-outlined text-sm text-[#006947]">check_circle</span>
            <span>ACAP &amp; TIMS Offline Checkpoint Vouchers + Emergency Permit IDs</span>
          </div>
          <div className="flex items-center gap-2 text-[#131b2e]">
            <span className="material-symbols-outlined text-sm text-[#006947]">check_circle</span>
            <span>Acute Mountain Sickness (AMS) Lake Louise Diagnostic Charts &amp; First Aid</span>
          </div>
          <div className="flex items-center gap-2 text-[#131b2e]">
            <span className="material-symbols-outlined text-sm text-[#006947]">check_circle</span>
            <span>Full 5-Day Financial Expense Ledger &amp; Cash Pool Reconciliations</span>
          </div>
          <div className="flex items-center gap-2 text-[#131b2e]">
            <span className="material-symbols-outlined text-sm text-[#006947]">check_circle</span>
            <span>High-Resolution Lodging Confirmation Slips (Eagle Eye, Shambhala, Hill Top)</span>
          </div>
        </div>

        {/* Download Action & Progress */}
        <div className="space-y-3">
          {downloadProgress !== null && downloadProgress < 100 && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-['JetBrains_Mono']">
                <span className="text-[#3f4850]">Caching vector tiles &amp; ledgers...</span>
                <span className="font-bold text-[#006194]">{downloadProgress}%</span>
              </div>
              <div className="w-full bg-[#f2f3ff] rounded-full h-2 overflow-hidden">
                <div
                  className="bg-[#006194] h-full transition-all duration-200"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>
            </div>
          )}

          {downloaded && (
            <div className="p-3 rounded-xl bg-[#6ffbbe]/30 border border-[#006947]/30 text-xs text-[#006947] font-semibold flex items-center gap-2 font-['JetBrains_Mono']">
              <span className="material-symbols-outlined text-sm">offline_pin</span>
              <span>Tactical Pack Saved to Browser Cache &amp; Local Storage. Accessible 100% Offline!</span>
            </div>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={startDownload}
              disabled={downloaded || downloadProgress !== null}
              className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                downloaded
                  ? 'bg-[#006947] text-white cursor-default'
                  : 'bg-[#006194] hover:bg-[#004b73] text-white shadow-md'
              }`}
            >
              <span className="material-symbols-outlined text-sm">
                {downloaded ? 'done_all' : 'download_for_offline'}
              </span>
              <span>{downloaded ? 'Offline Pack Synced' : 'Sync Offline Pack (18.4 MB)'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-3 rounded-xl border border-[#dae2fd] bg-white hover:bg-[#f2f3ff] text-[#131b2e] text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              <span>Print Brief</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
