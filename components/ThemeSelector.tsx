'use client';
import React from 'react';
import { Palette } from 'lucide-react';
import { themes } from '@/lib/themes';
import type { ThemeKey } from '@/types';


export function ThemeSelector({ theme, setTheme, currentTheme }: {
theme: ThemeKey;
setTheme: (k: ThemeKey) => void;
currentTheme: any;
}) {
return (
<div className={`absolute top-16 right-0 z-50 ${currentTheme.glassEffect} rounded-xl p-4 shadow-2xl border min-w-48`}>
<h3 className={`font-semibold mb-3 ${currentTheme.text} flex items-center gap-2`}>
<Palette size={16} />
Choose Theme
</h3>
<div className="grid grid-cols-2 gap-2">
{Object.entries(themes).map(([key, themeData]) => (
<button
key={key}
onClick={() => setTheme(key as ThemeKey)}
className={`p-3 rounded-lg transition-all duration-200 hover:scale-105 ${
theme === (key as ThemeKey)
? `${currentTheme.button} text-white shadow-lg`
: `${currentTheme.buttonSecondary} ${currentTheme.textSecondary} border`
}`}
>
{themeData.name}
</button>
))}
</div>
</div>
);
}