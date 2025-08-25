export type ThemeKey = 'dark' | 'light' | 'cyber' | 'nature';


export type Theme = {
name: string;
bg: string;
cardBg: string;
text: string;
textSecondary: string;
textMuted: string;
border: string;
accent: string;
glassEffect: string;
button: string;
buttonSecondary: string;
unsortedBar: string;
comparingBar: string;
sortedBar: string;
swappingBar: string;
};


export type AlgorithmKey =
| 'bubbleSort'
| 'selectionSort'
| 'insertionSort'
| 'quickSort'
| 'mergeSort'
| 'heapSort';