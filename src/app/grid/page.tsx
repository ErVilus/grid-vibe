'use client';

import React from 'react';
// Assicurati di aver creato questi file nello Sprint 2!
import DriverGrid from '@/components/drivers/DriverGrid';
import TeamSelector from '@/components/teams/TeamSelector';

export default function GridPage() {
  return (
    <div className="pt-24 pb-32 px-4">
      <h1 className="text-3xl font-black text-white italic tracking-tighter mb-6">THE GRID</h1>
      <TeamSelector />
      <DriverGrid />
    </div>
  );
}