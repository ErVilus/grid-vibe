'use client';

import React from 'react';
// Assicurati di aver creato questo file nello Sprint 1
import AuthForm from '@/components/auth/AuthForm';

export default function ProfilePage() {
  return (
    <div className="w-full min-h-screen bg-background-deep flex flex-col items-center justify-center p-4 pb-32">
      <div className="mb-8 text-center">
         <div className="w-24 h-24 bg-white/5 rounded-full mx-auto mb-4 border-2 border-primary-neon flex items-center justify-center">
            <span className="text-3xl">👤</span>
         </div>
         <h1 className="text-2xl font-black text-white italic">DRIVER PROFILE</h1>
      </div>
      
      <AuthForm />
    </div>
  );
}