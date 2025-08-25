# 🎯 SortViz Pro

A beautiful, interactive sorting algorithm visualizer built with Next.js 15, TypeScript, and Tailwind CSS. Watch sorting algorithms come to life with smooth animations, real-time statistics, and multiple theme options.

![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

## ✨ Features

### 🔄 Sorting Algorithms
- **🫧 Bubble Sort** - Simple comparison-based algorithm (O(n²))
- **🎯 Selection Sort** - In-place comparison sorting (O(n²))
- **📝 Insertion Sort** - Efficient for small datasets (O(n²))
- **⚡ Quick Sort** - Divide-and-conquer algorithm (O(n log n))
- **🔀 Merge Sort** - Stable divide-and-conquer sorting (O(n log n))
- **🏔️ Heap Sort** - Binary heap-based sorting (O(n log n))

### 🎨 Visual Features
- **Real-time Animation** - Watch elements move and compare in real-time
- **Color-coded States** - Different colors for comparing, swapping, and sorted elements
- **Smooth Transitions** - Beautiful CSS animations with glass morphism effects
- **Responsive Design** - Works perfectly on desktop and mobile devices

### ⚙️ Customization Options
- **Array Size Control** - Adjust from 10 to 100 elements
- **Speed Control** - Variable animation speed (1-100%)
- **Multiple Themes** - Dark, light, cyber, and nature themes
- **Live Statistics** - Track comparisons and swaps in real-time
- **Algorithm Information** - Detailed complexity analysis for each algorithm

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended), npm, or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/sortviz-pro.git
cd sortviz-pro
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Run the development server**
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
sortviz-pro/
├── src/
│   └── app/
│       ├── globals.css          # Global styles and Tailwind imports
│       ├── layout.tsx           # Root layout component
│       ├── page.tsx             # Main page component
│       └── favicon.ico          # Application favicon
├── components/
│   ├── ControlPanel.tsx         # Algorithm and settings controls
│   ├── Header.tsx               # App header with theme switcher
│   ├── StatsPanel.tsx           # Statistics and complexity display
│   ├── ThemeSelector.tsx        # Theme selection component
│   └── Visualizer.tsx           # Main visualization component
├── lib/
│   ├── sorting/
│   │   └── index.ts             # Sorting algorithm implementations
│   ├── algorithmsMeta.ts        # Algorithm metadata and complexity info
│   ├── sleep.ts                 # Animation delay utility
│   └── themes.ts                # Theme configurations
├── types/
│   └── index.ts                 # TypeScript type definitions
├── public/                      # Static assets and icons
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## 🔧 Key Components

### ControlPanel
Interactive controls featuring:
- **Algorithm Selector** - Choose from 6 sorting algorithms
- **Array Size Slider** - Adjust size from 10-100 elements
- **Speed Control** - Animation speed from 1-100%
- **Action Buttons** - Start sorting and reset array

### Visualizer
Main visualization area with:
- **Animated Bar Chart** - Real-time visual representation
- **Color-coded States** - Visual feedback for different operations
- **Smooth Animations** - Fluid transitions and movements
- **Responsive Layout** - Adapts to different screen sizes

### StatsPanel
Comprehensive statistics display:
- **Algorithm Information** - Name, description, and complexity
- **Live Counters** - Real-time comparisons and swaps
- **Performance Metrics** - Time and space complexity analysis

## 🎨 Themes

SortViz Pro includes multiple beautiful themes:

- **🌙 Dark Theme** - Sleek dark interface with blue/purple gradients
- **☀️ Light Theme** - Clean light interface with soft colors
- **🚀 Cyber Theme** - Futuristic neon-inspired design
- **🌿 Nature Theme** - Earth-toned natural color palette

Each theme includes:
- Glass morphism effects
- Gradient backgrounds
- Consistent color schemes
- Smooth transitions

## 📊 Supported Algorithms

| Algorithm | Time Complexity | Space Complexity | Stable | In-Place |
|-----------|----------------|------------------|--------|----------|
| Bubble Sort | O(n²) | O(1) | ✅ | ✅ |
| Selection Sort | O(n²) | O(1) | ❌ | ✅ |
| Insertion Sort | O(n²) | O(1) | ✅ | ✅ |
| Quick Sort | O(n log n) avg | O(log n) | ❌ | ✅ |
| Merge Sort | O(n log n) | O(n) | ✅ | ❌ |
| Heap Sort | O(n log n) | O(1) | ❌ | ✅ |

## 🛠️ Technologies Used

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[React 19](https://reactjs.org/)** - Latest React with modern features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful, customizable icons
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

## 🎮 Usage

1. **Select an Algorithm** - Choose from the dropdown in the control panel
2. **Adjust Array Size** - Use the slider to set array size (10-100)
3. **Set Animation Speed** - Control how fast the visualization runs
4. **Start Sorting** - Click the "Sort" button to begin visualization
5. **Watch the Magic** - See the algorithm work in real-time
6. **Reset & Repeat** - Generate a new random array and try again

## 📱 Responsive Design

SortViz Pro is fully responsive and optimized for:
- 🖥️ Desktop computers (1920px+)
- 💻 Laptops (1024px+)
- 📱 Tablets (768px+)
- 📱 Mobile devices (320px+)

### Manual Deployment

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Ideas for Contributions
- 🆕 Add new sorting algorithms (Radix Sort, Counting Sort, etc.)
- 🎨 Create new themes and color schemes
- 📱 Enhance mobile user experience
- 📚 Add algorithm explanations and tutorials
- ⚡ Performance optimizations
- 🔊 Add sound effects for operations
- 📊 Add more statistical analysis
- 🎯 Improve accessibility features

## 📝 Scripts

```bash
# Development with Turbopack
pnpm dev

# Production build with Turbopack
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## 🐛 Known Issues

- None currently! If you find any issues, please [open an issue](https://github.com/yourusername/sortviz-pro/issues).

## 📋 Roadmap

- [ ] Add more sorting algorithms
- [ ] Implement algorithm explanations
- [ ] Add sound effects
- [ ] Create algorithm comparison mode
- [ ] Add data structure visualizations
- [ ] Implement custom array input
- [ ] Add algorithm racing mode


## 🙏 Acknowledgments

- Inspired by various sorting visualizers across the web
- Built with modern React and Next.js best practices
- Icons provided by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Special thanks to the open-source community


---

<div align="center">
  <strong>⭐ Star this repository if you found it helpful! ⭐</strong>
  <br>
  <sub>Built with ❤️ using Next.js 15 and TypeScript</sub>
</div>
