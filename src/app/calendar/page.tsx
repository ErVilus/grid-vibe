'use client';

import React from 'react';
// Assicurati di aver creato questo file nello Sprint 3
import RaceCalendar from '@/components/calendar/RaceCalendar';

export default function CalendarPage() {
  return (
    <div className="w-full min-h-screen bg-background-deep pt-10 pb-32">
       <RaceCalendar />
    </div>
  );
}