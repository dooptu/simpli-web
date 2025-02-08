"use client"

import React from 'react';
import HomeLayout from './home/HomeLayout';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
        <HomeLayout></HomeLayout>
    </div>
  );
}
