'use client';
import React from 'react';
import { BarChart3, Zap, Play, Shuffle, Settings } from 'lucide-react';
import { algorithms } from '@/lib/algorithmsMeta';
import type { AlgorithmKey, Theme } from '@/types';

interface ControlPanelProps {
  algorithm: AlgorithmKey;
  setAlgorithm: (algorithm: AlgorithmKey) => void;
  arraySize: number;
  setArraySize: (size: number) => void;
  speed: number;
  setSpeed: (speed: number) => void;
  sorting: boolean;
  startSorting: () => void;
  resetArray: () => void;
  currentTheme: Theme;
}

export function ControlPanel({
  algorithm,
  setAlgorithm,
  arraySize,
  setArraySize,
  speed,
  setSpeed,
  sorting,
  startSorting,
  resetArray,
  currentTheme
}: ControlPanelProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Algorithm Selection */}
      <div className={`${currentTheme.glassEffect} rounded-2xl p-6 border shadow-xl hover:shadow-2xl transition-all duration-300`}>
        <div className="flex items-center gap-3 mb-4">
          <Settings size={20} />
          <h3 className={`font-semibold ${currentTheme.text}`}>Algorithm</h3>
        </div>
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value as AlgorithmKey)}
          disabled={sorting}
          className={`w-full p-3 rounded-xl border ${currentTheme.cardBg} ${currentTheme.text} ${currentTheme.border} focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50`}
        >
          {Object.entries(algorithms).map(([key, algo]) => (
            <option key={key} value={key}>{algo.name}</option>
          ))}
        </select>
      </div>

      {/* Array Size */}
      <div className={`${currentTheme.glassEffect} rounded-2xl p-6 border shadow-xl hover:shadow-2xl transition-all duration-300`}>
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 size={20} />
          <h3 className={`font-semibold ${currentTheme.text}`}>Array Size</h3>
        </div>
        <div className="space-y-3">
          <div className={`text-2xl font-bold ${currentTheme.text}`}>{arraySize}</div>
          <input
            type="range"
            min={10}
            max={100}
            value={arraySize}
            onChange={(e) => setArraySize(parseInt(e.target.value))}
            disabled={sorting}
            className="w-full accent-blue-500"
          />
        </div>
      </div>

      {/* Speed */}
      <div className={`${currentTheme.glassEffect} rounded-2xl p-6 border shadow-xl hover:shadow-2xl transition-all duration-300`}>
        <div className="flex items-center gap-3 mb-4">
          <Zap size={20} />
          <h3 className={`font-semibold ${currentTheme.text}`}>Speed</h3>
        </div>
        <div className="space-y-3">
          <div className={`text-2xl font-bold ${currentTheme.text}`}>{speed}%</div>
          <input
            type="range"
            min={1}
            max={100}
            value={speed}
            onChange={(e) => setSpeed(parseInt(e.target.value))}
            className="w-full accent-purple-500"
          />
        </div>
      </div>

      {/* Controls */}
      <div className={`${currentTheme.glassEffect} rounded-2xl p-6 border shadow-xl hover:shadow-2xl transition-all duration-300`}>
        <h3 className={`font-semibold ${currentTheme.text} mb-4`}>Controls</h3>
        <div className="flex gap-3">
          <button
            onClick={startSorting}
            disabled={sorting}
            className={`flex-1 ${currentTheme.button} text-white rounded-xl px-4 py-3 font-medium flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 shadow-lg`}
          >
            <Play size={16} />
            Sort
          </button>
          <button
            onClick={resetArray}
            disabled={sorting}
            className={`flex-1 ${currentTheme.buttonSecondary} ${currentTheme.textSecondary} border rounded-xl px-4 py-3 font-medium flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100`}
          >
            <Shuffle size={16} />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}