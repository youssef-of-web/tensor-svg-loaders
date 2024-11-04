"use client";

import { useState } from "react";
import {
  PulseLoader,
  SpinningDotsLoader,
  RippleLoader,
  WaveLoader,
  BouncingDotsLoader,
  CircularProgressLoader,
  InfinityLoader,
  GradientSpinnerLoader,
  DNALoader,
  SquaresGridLoader,
  RotatingSquareLoader,
  DotsCircleLoader,
  HourglassLoader,
  KaleidoscopeLoader,
  FractalTreeLoader,
  QuantumDotsLoader,
  ParticleFlowLoader,
  MatrixRainLoader,
  NeuralNetworkLoader,
  BinaryDataLoader,
  CircuitBoardLoader,
  OrbitalLoader,
  SpiralLoader,
  MolecularLoader,
  PulseRingLoader,
  ConfettiLoader,
  TextLoader,
  RotatingCubeLoader,
  ProgressBarLoader,
  LiquidBlobLoader,
  GeometricMorphLoader,
  PulseRingNetworkLoader,
  MinimalDotsFlowLoader,
  FuturisticGridLoader,
  NeonPulseLoader,
  MinimalSpinnerLoader,
  MorphingDotsLoader,
  GradientRingLoader,
  SpiralGalaxyLoader,
  DigitalRainLoader,
  QuantumWaveLoader,
  NeuralPulseLoader,
  NeuralMeshLoader,
  HolographicCubeLoader,
  CloudSyncLoader,
  ServerStatusLoader,
  ContainerDeployLoader,
  PipelineLoader,
  GlowingPulseLoader,
  CircularProgressPathLoader,
  SegmentedRingLoader,
  ProductLoadingLoader,
  SearchResultsLoader,
  WishlistUpdateLoader,
  AddToCartLoader,
  DeliveryStatusLoader,
  OrderConfirmationLoader,
  DataTransferLoader,
  DownloadProgressLoader,
  BufferLoader,
  DataProcessingLoader,
  FileSyncLoader,
  MolecularSpinLoader,
  DataStreamLoader,
  QuantumEntanglementLoader,
  BlockchainNetworkLoader,
  AIProcessingLoader,
  EdgeComputingLoader,
  CloudUploadLoader,
  ServerRackLoader,
  KubernetesPodLoader,
  CIPipelineLoader,
  ShoppingCartLoader,
  CheckoutLoader,
  PaymentLoader,
  InventoryLoader
} from "@/components/Loaders/Loaders";

export default function Home() {
  const [selectedLoader, setSelectedLoader] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState("#60A5FA");
  const [hexInput, setHexInput] = useState("#60A5FA");

  //@typescript-eslint/no-explicit-any
  const downloadAsSVG = (Component: React.ComponentType<any>, name: string) => {
    const svgString = document.getElementById(`loader-${name}`)?.innerHTML;
    if (!svgString) return;

    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${name.toLowerCase().replace(/\s+/g, '-')}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copySVGCode = (name: string) => {
    const svgString = document.getElementById(`loader-${name}`)?.innerHTML;
    if (svgString) {
      navigator.clipboard.writeText(svgString);
    }
  };

  const handleHexInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHexInput(value);
    if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
      setSelectedColor(value);
    }
  };

  const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedColor(value);
    setHexInput(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4 animate-fade-in bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
          Tensor SVG Loaders
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Beautiful, customizable SVG loading animations for your web projects
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 max-w-4xl mx-auto bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <div className="flex flex-row items-center gap-6 w-full md:w-auto">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <label className="text-gray-700 font-medium">Color:</label>
              <input
                type="color"
                value={selectedColor}
                onChange={handleColorPickerChange}
                className="w-14 h-10 rounded-lg cursor-pointer border-2 border-gray-200 hover:border-blue-400 transition-colors"
              />
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <label className="text-gray-700 font-medium">Hex:</label>
              <input
                type="text"
                value={hexInput}
                onChange={handleHexInputChange}
                placeholder="#000000"
                className="w-32 px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all"
              />
            </div>
          </div>
          <button
            onClick={() => window.location.href = '/editor'}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
          >
            <span>Open in Editor</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { component: PulseLoader, name: "Pulse Loader" },
            { component: SpinningDotsLoader, name: "Spinning Dots" },
            { component: RippleLoader, name: "Ripple Effect" },
            { component: WaveLoader, name: "Wave Animation" },
            { component: BouncingDotsLoader, name: "Bouncing Dots" },
            { component: CircularProgressLoader, name: "Circular Progress" },
            { component: InfinityLoader, name: "Infinity Loop" },
            { component: GradientSpinnerLoader, name: "Gradient Spinner" },
            { component: DNALoader, name: "DNA Helix" },
            { component: SquaresGridLoader, name: "Squares Grid" },
            { component: RotatingSquareLoader, name: "Rotating Square" },
            { component: DotsCircleLoader, name: "Dots Circle" },
            { component: HourglassLoader, name: "Hourglass" },
            { component: KaleidoscopeLoader, name: "Kaleidoscope" },
            { component: FractalTreeLoader, name: "Fractal Tree" },
            { component: QuantumDotsLoader, name: "Quantum Dots" },
            { component: ParticleFlowLoader, name: "Particle Flow" },
            { component: MatrixRainLoader, name: "Matrix Rain" },
            { component: NeuralNetworkLoader, name: "Neural Network" },
            { component: BinaryDataLoader, name: "Binary Data" },
            { component: CircuitBoardLoader, name: "Circuit Board" },
            { component: OrbitalLoader, name: "Orbital" },
            { component: SpiralLoader, name: "Spiral" },
            { component: MolecularLoader, name: "Molecular" },
            { component: PulseRingLoader, name: "Pulse Ring" },
            { component: ConfettiLoader, name: "Confetti" },
            { component: TextLoader, name: "Text" },
            { component: RotatingCubeLoader, name: "Rotating Cube" },
            { component: ProgressBarLoader, name: "Progress Bar" },
            { component: LiquidBlobLoader, name: "Liquid Blob" },
            { component: GeometricMorphLoader, name: "Geometric Morph" },
            { component: PulseRingNetworkLoader, name: "Pulse Ring Network" },
            { component: MinimalDotsFlowLoader, name: "Minimal Dots Flow" },
            { component: FuturisticGridLoader, name: "Futuristic Grid" },
            { component: NeonPulseLoader, name: "Neon Pulse" },
            { component: MinimalSpinnerLoader, name: "Minimal Spinner" },
            { component: MorphingDotsLoader, name: "Morphing Dots" },
            { component: GradientRingLoader, name: "Gradient Ring" },
            { component: SpiralGalaxyLoader, name: "Spiral Galaxy" },
            { component: DigitalRainLoader, name: "Digital Rain" },
            { component: QuantumWaveLoader, name: "Quantum Wave" },
            { component: NeuralPulseLoader, name: "Neural Pulse" },
            { component: NeuralMeshLoader, name: "Neural Mesh" },
            { component: HolographicCubeLoader, name: "Holographic Cube" },
            { component: CloudSyncLoader, name: "Cloud Sync" },
            { component: ServerStatusLoader, name: "Server Status" },
            { component: ContainerDeployLoader, name: "Container Deploy" },
            { component: PipelineLoader, name: "Pipeline" },
            { component: GlowingPulseLoader, name: "Glowing Pulse" },
            { component: CircularProgressPathLoader, name: "Circular Progress Path" },
            { component: SegmentedRingLoader, name: "Segmented Ring" },
            { component: ProductLoadingLoader, name: "Product Loading" },
            { component: SearchResultsLoader, name: "Search Results" },
            { component: WishlistUpdateLoader, name: "Wishlist Update" },
            { component: AddToCartLoader, name: "Add to Cart" },
            { component: DeliveryStatusLoader, name: "Delivery Status" },
            { component: OrderConfirmationLoader, name: "Order Confirmation" },
            { component: DataTransferLoader, name: "Data Transfer" },
            { component: DownloadProgressLoader, name: "Download Progress" },
            { component: BufferLoader, name: "Buffer" },
            { component: DataProcessingLoader, name: "Data Processing" },
            { component: FileSyncLoader, name: "File Sync" },
            { component: MolecularSpinLoader, name: "Molecular Spin" },
            { component: DataStreamLoader, name: "Data Stream" },
            { component: QuantumEntanglementLoader, name: "Quantum Entanglement" },
            { component: AIProcessingLoader, name: "AI Processing" },
            { component: EdgeComputingLoader, name: "Edge Computing" },
            { component: BlockchainNetworkLoader, name: "Blockchain Network" },
            { component: CloudUploadLoader, name: "Cloud Upload" },
            { component: ServerRackLoader, name: "Server Rack" },
            { component: KubernetesPodLoader, name: "Kubernetes Pod" },
            { component: CIPipelineLoader, name: "CI Pipeline" },
            { component: ShoppingCartLoader, name: "Shopping Cart" },
            { component: CheckoutLoader, name: "Checkout" },
            { component: PaymentLoader, name: "Payment" },
            { component: InventoryLoader, name: "Inventory" }
          ].map((loader, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <div
                className="flex justify-center mb-4 cursor-pointer"
                id={`loader-${loader.name}`}
                onClick={() => setSelectedLoader(loader.name)}
              >
                <loader.component size={60} primaryColor={selectedColor} />
              </div>
              <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
                {loader.name}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {selectedLoader && (
        <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg max-w-md w-full border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Download or Copy SVG</h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  copySVGCode(selectedLoader);
                  setSelectedLoader(null);
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Copy SVG Code
              </button>
              <button
                onClick={() => {
                  downloadAsSVG(
                    [
                      { component: PulseLoader, name: "Pulse Loader" },
                      // ... other loaders
                    ].find(l => l.name === selectedLoader)?.component!,
                    selectedLoader
                  ) as any
                  setSelectedLoader(null);
                }}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                Download SVG
              </button>
              <button
                onClick={() => setSelectedLoader(null)}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
      `}</style>
    </div>
  );
}
