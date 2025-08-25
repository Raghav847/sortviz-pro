'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { Header } from '@/components/Header';
import { ControlPanel } from '@/components/ControlPanel';
import { StatsPanel } from '@/components/StatsPanel';
import { Visualizer } from '@/components/Visualizer';
import { sortingAlgorithms } from '@/lib/sorting';
import { themes } from '@/lib/themes';
import { sleep } from '@/lib/sleep';
import type { AlgorithmKey, ThemeKey } from '@/types';

export default function Home() {
  const [array, setArray] = useState<number[]>([]);
  const [algorithm, setAlgorithm] = useState<AlgorithmKey>('bubbleSort');
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(50);
  const [sorting, setSorting] = useState(false);
  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);
  const [currentStep, setCurrentStep] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [theme, setTheme] = useState<ThemeKey>('dark');

  const currentTheme = themes[theme];

  const generateRandomArray = useCallback(() => {
    const newArray = Array.from({ length: arraySize }, () => 
      Math.floor(Math.random() * 300) + 10
    );
    setArray(newArray);
    setComparisons(0);
    setSwaps(0);
    setCurrentStep([]);
    setSortedIndices([]);
  }, [arraySize]);

  useEffect(() => { 
    generateRandomArray(); 
  }, [generateRandomArray]);

  const updateVisualization = async (
    arr: number[],
    comparing: number[] = [],
    swapping: number[] = [],
    sorted: number[] = []
  ) => {
    setArray([...arr]);
    setCurrentStep(comparing);
    setSortedIndices(prev => Array.from(new Set([...prev, ...sorted])));
    await sleep(101 - speed);
    };

  const startSorting = async () => {
    if (sorting) return;
    setSorting(true);
    setComparisons(0); 
    setSwaps(0); 
    setSortedIndices([]);
    const copy = [...array];
    try { 
      await sortingAlgorithms[algorithm](copy, updateVisualization, setComparisons, setSwaps); 
    }
    catch (e) { 
      console.error('Sorting interrupted:', e); 
    }
    setSorting(false); 
    setCurrentStep([]);
  };

  const resetArray = () => { 
    if (!sorting) generateRandomArray(); 
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${currentTheme.bg} ${currentTheme.text}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${currentTheme.accent} rounded-full opacity-10 blur-3xl animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr ${currentTheme.accent} rounded-full opacity-10 blur-3xl animate-pulse`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-6">
        <Header theme={theme} setTheme={setTheme} currentTheme={currentTheme} />

        <ControlPanel
          algorithm={algorithm}
          setAlgorithm={setAlgorithm}
          arraySize={arraySize}
          setArraySize={setArraySize}
          speed={speed}
          setSpeed={setSpeed}
          sorting={sorting}
          startSorting={startSorting}
          resetArray={resetArray}
          currentTheme={currentTheme}
        />

        <StatsPanel algorithm={algorithm} comparisons={comparisons} swaps={swaps} currentTheme={currentTheme} />

        <Visualizer
          array={array}
          currentStep={currentStep}
          sortedIndices={sortedIndices}
          sorting={sorting}
          currentTheme={currentTheme}
        />
      </div>
    </div>
  );
}