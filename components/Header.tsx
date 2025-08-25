'use client';
import React from 'react';
import { Settings } from 'lucide-react';
import { ThemeSelector } from './ThemeSelector';
import type { ThemeKey } from '@/types';


export function Header({ theme, setTheme, currentTheme }: {
theme: ThemeKey;
setTheme: (k: ThemeKey) => void;
currentTheme: any;
}) {
const [showSettings, setShowSettings] = React.useState(false);
return (
<div className="flex justify-between items-start mb-12">
<div>
<h1 className={`text-5xl font-bold mb-4 bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`}>
SortViz Pro
</h1>
<p className={`${currentTheme.textMuted} text-lg`}>Experience sorting algorithms in stunning visual detail</p>
</div>
<div className="relative">
<button
onClick={() => setShowSettings(!showSettings)}
className={`p-3 rounded-xl ${currentTheme.glassEffect} border hover:scale-105 transition-all duration-200 shadow-lg`}
>
<Settings size={20} />
</button>
{showSettings && (
<ThemeSelector theme={theme} setTheme={setTheme} currentTheme={currentTheme} />
)}
</div>
</div>
);
}