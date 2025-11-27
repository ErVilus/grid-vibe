'use client';

import React from 'react';
// Assicurati di aver creato questo file nello Sprint 8!
import LiveStream from '@/components/live/LiveStream';

export default function LivePage() {
  return (
    <div className="w-full min-h-screen bg-black">
      <LiveStream />
    </div>
  );
}