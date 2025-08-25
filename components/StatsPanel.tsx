'use client';
import React from 'react';
import { algorithms } from '@/lib/algorithmsMeta';
import type { AlgorithmKey, Theme } from '@/types';

export function StatsPanel({ algorithm, comparisons, swaps, currentTheme }: {
  algorithm: AlgorithmKey;
  comparisons: number;
  swaps: number;
  currentTheme: Theme;
}) {
return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className={`${currentTheme.glassEffect} rounded-2xl p-6 border shadow-xl`}>
<h3 className={`font-semibold mb-3 ${currentTheme.text}`}>Current Algorithm</h3>
<p className={`text-xl font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent mb-2`}>
{algorithms[algorithm].name}
</p>
<p className={`${currentTheme.textMuted} text-sm`}>{algorithms[algorithm].description}</p>
</div>


<div className={`${currentTheme.glassEffect} rounded-2xl p-6 border shadow-xl`}>
<h3 className={`font-semibold mb-3 ${currentTheme.text}`}>Complexity Analysis</h3>
<div className="space-y-2">
<div className="flex justify-between">
<span className={`${currentTheme.textSecondary}`}>Time:</span>
<span className="font-mono font-bold text-orange-400">{algorithms[algorithm].timeComplexity}</span>
</div>
<div className="flex justify-between">
<span className={`${currentTheme.textSecondary}`}>Space:</span>
<span className="font-mono font-bold text-purple-400">{algorithms[algorithm].spaceComplexity}</span>
</div>
</div>
</div>


<div className={`${currentTheme.glassEffect} rounded-2xl p-6 border shadow-xl`}>
<h3 className={`font-semibold mb-3 ${currentTheme.text}`}>Live Statistics</h3>
<div className="space-y-2">
<div className="flex justify-between">
<span className={`${currentTheme.textSecondary}`}>Comparisons:</span>
<span className="font-mono font-bold text-red-400">{comparisons.toLocaleString()}</span>
</div>
<div className="flex justify-between">
<span className={`${currentTheme.textSecondary}`}>Swaps:</span>
<span className="font-mono font-bold text-yellow-400">{swaps.toLocaleString()}</span>
</div>
</div>
</div>
</div>
);
}