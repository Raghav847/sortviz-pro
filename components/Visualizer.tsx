'use client';


export function Visualizer({
array,
currentStep,
sortedIndices,
sorting,
currentTheme
}: {
array: number[];
currentStep: number[];
sortedIndices: number[];
sorting: boolean;
currentTheme: any;
}) {
const getBarColor = (index: number) => {
if (sortedIndices.includes(index)) return `bg-gradient-to-t ${currentTheme.sortedBar}`;
if (currentStep.includes(index)) return `bg-gradient-to-t ${currentTheme.comparingBar}`;
return `bg-gradient-to-t ${currentTheme.unsortedBar}`;
};


const maxVal = Math.max(...array, 1);


return (
<div className={`${currentTheme.glassEffect} rounded-2xl p-8 border shadow-2xl`}>
<div className="flex items-center justify-between mb-6">
<h3 className={`text-xl font-semibold ${currentTheme.text}`}>Live Visualization</h3>
{sorting && (
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className={`text-sm ${currentTheme.textMuted}`}>Sorting in progress...</span>
</div>
)}
</div>


<div className="flex items-end justify-center h-96 gap-1 overflow-hidden p-4 rounded-xl bg-black/10">
{array.map((value, index) => (
<div
key={index}
className={`transition-all duration-300 ease-out ${getBarColor(index)} rounded-t-lg shadow-lg hover:shadow-xl`}
style={{
height: `${(value / maxVal) * 100}%`,
width: `${Math.max(800 / array.length, 3)}px`,
minWidth: '3px',
transform: currentStep.includes(index) ? 'scale(1.1)' : 'scale(1)'
}}
/>
))}
</div>


<div className="flex justify-center gap-8 mt-6">
<div className="flex items-center gap-3">
<div className={`w-4 h-4 bg-gradient-to-t ${currentTheme.unsortedBar} rounded-full shadow-md`}></div>
<span className={`${currentTheme.textSecondary} font-medium`}>Unsorted</span>
</div>
<div className="flex items-center gap-3">
<div className={`w-4 h-4 bg-gradient-to-t ${currentTheme.comparingBar} rounded-full shadow-md animate-pulse`}></div>
<span className={`${currentTheme.textSecondary} font-medium`}>Comparing</span>
</div>
<div className="flex items-center gap-3">
<div className={`w-4 h-4 bg-gradient-to-t ${currentTheme.sortedBar} rounded-full shadow-md`}></div>
<span className={`${currentTheme.textSecondary} font-medium`}>Sorted</span>
</div>
</div>
</div>
);
}