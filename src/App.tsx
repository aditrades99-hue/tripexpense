/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeaderNav, NavTab } from './components/HeaderNav';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/screens/LoadingScreen';
import { DossierScreen } from './components/screens/DossierScreen';
import { ItineraryScreen } from './components/screens/ItineraryScreen';
import { WalletScreen } from './components/screens/WalletScreen';
import { TransfersScreen } from './components/screens/TransfersScreen';
import { ControlCenterScreen } from './components/screens/ControlCenterScreen';
import { AcknowledgementScreen } from './components/screens/AcknowledgementScreen';
import { OfflinePackModal } from './components/modals/OfflinePackModal';
import { SosTelemetryModal } from './components/modals/SosTelemetryModal';
import { DonationModal } from './components/modals/DonationModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('loading-experience');
  const [currentDayNum, setCurrentDayNum] = useState<number>(2); // Default to Day 2: Manang
  const [isOfflineModalOpen, setIsOfflineModalOpen] = useState<boolean>(false);
  const [isSosModalOpen, setIsSosModalOpen] = useState<boolean>(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState<boolean>(false);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleSelectDay = (day: number) => {
    setCurrentDayNum(day);
    setCurrentTab('day-by-day-itinerary');
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] flex flex-col font-['Inter'] selection:bg-[#006194] selection:text-white">
      {/* Top Header Navigation - Present on all tabs, with Loading tab active if on splash */}
      <HeaderNav
        currentTab={currentTab}
        onSelectTab={(tab) => setCurrentTab(tab)}
        onOpenOfflineModal={() => setIsOfflineModalOpen(true)}
        onOpenSosModal={() => setIsSosModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        {currentTab === 'loading-experience' && (
          <LoadingScreen onEnterExpedition={(tab) => setCurrentTab(tab)} />
        )}

        {currentTab === 'expedition-dossier' && (
          <DossierScreen
            onNavigateTab={(tab) => setCurrentTab(tab)}
            onSelectDay={handleSelectDay}
            onOpenOfflineModal={() => setIsOfflineModalOpen(true)}
          />
        )}

        {currentTab === 'day-by-day-itinerary' && (
          <ItineraryScreen
            currentDayNum={currentDayNum}
            onSelectDay={(day) => setCurrentDayNum(day)}
            onNavigateTab={(tab) => setCurrentTab(tab)}
            onOpenOfflineModal={() => setIsOfflineModalOpen(true)}
          />
        )}

        {currentTab === 'trip-wallet-accounts' && (
          <WalletScreen
            onOpenDonationModal={() => setIsDonationModalOpen(true)}
            onOpenOfflineModal={() => setIsOfflineModalOpen(true)}
          />
        )}

        {currentTab === 'transfers-logistics' && (
          <TransfersScreen
            onNavigateTab={(tab) => setCurrentTab(tab)}
            onOpenSosModal={() => setIsSosModalOpen(true)}
          />
        )}

        {currentTab === 'trip-control-center' && (
          <ControlCenterScreen
            onOpenSosModal={() => setIsSosModalOpen(true)}
            onOpenOfflineModal={() => setIsOfflineModalOpen(true)}
          />
        )}

        {currentTab === 'project-acknowledgement' && (
          <AcknowledgementScreen
            onNavigateTab={(tab) => setCurrentTab(tab)}
          />
        )}
      </main>

      {/* Footer rendered for all screens */}
      {currentTab !== 'loading-experience' && <Footer />}

      {/* Interactive Global Modals */}
      <OfflinePackModal
        isOpen={isOfflineModalOpen}
        onClose={() => setIsOfflineModalOpen(false)}
      />

      <SosTelemetryModal
        isOpen={isSosModalOpen}
        onClose={() => setIsSosModalOpen(false)}
      />

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </div>
  );
}
