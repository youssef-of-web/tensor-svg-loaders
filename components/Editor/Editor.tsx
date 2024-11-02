"use client";

import { useState, useRef, ChangeEvent } from "react";

interface SVGControls {
    size: number;
    fillColor: string;
    strokeColor: string;
    strokeWidth: number;
    opacity: number;
    rotation: number;
    speed: number;
}

export default function Editor() {
    // SVG content states
    const [svgContent, setSvgContent] = useState<string>("");
    const [svgInput, setSvgInput] = useState<string>("");

    // SVG control states
    const [controls, setControls] = useState<SVGControls>({
        size: 0,
        fillColor: "",
        strokeColor: "",
        strokeWidth: 2,
        opacity: 1,
        rotation: 0,
        speed: 1
    });

    // UI states
    const [showReactCode, setShowReactCode] = useState<boolean>(false);
    const [showCopiedIndicator, setShowCopiedIndicator] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result as string;
                updateSvgAndControls(content);
            };
            reader.readAsText(file);
        }
    };

    const handleSvgInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const content = e.target.value;
        updateSvgAndControls(content);
    };

    const updateSvgAndControls = (content: string) => {
        setSvgInput(content);
        setSvgContent(content);

        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'image/svg+xml');
        const svgElement = doc.querySelector('svg');

        if (svgElement) {
            const newControls = { ...controls };

            // Get SVG size
            const width = svgElement.getAttribute('width');
            if (width) {
                newControls.size = parseInt(width);
            }

            // Get first fill color found in SVG
            const fillElement = svgElement.querySelector('[fill]');
            if (fillElement) {
                const fillColor = fillElement.getAttribute('fill');
                if (fillColor && fillColor !== 'none') {
                    newControls.fillColor = fillColor;
                }
            }

            // Get first stroke color found in SVG
            const strokeElement = svgElement.querySelector('[stroke]');
            if (strokeElement) {
                const strokeColor = strokeElement.getAttribute('stroke');
                if (strokeColor && strokeColor !== 'none') {
                    newControls.strokeColor = strokeColor;
                }
            }

            // Get stroke width
            const strokeWidthElement = svgElement.querySelector('[stroke-width]');
            if (strokeWidthElement) {
                const strokeWidthValue = strokeWidthElement.getAttribute('stroke-width');
                if (strokeWidthValue) {
                    newControls.strokeWidth = parseFloat(strokeWidthValue);
                }
            }

            // Get opacity
            const opacityElement = svgElement.querySelector('[opacity]');
            if (opacityElement) {
                const opacityValue = opacityElement.getAttribute('opacity');
                if (opacityValue) {
                    newControls.opacity = parseFloat(opacityValue);
                }
            }

            setControls(newControls);
        }
    };

    const updateSvg = () => {
        setSvgContent(svgInput);
    };

    const getModifiedSVG = () => {
        if (!svgContent) return '';

        const { size, fillColor, strokeColor, strokeWidth, opacity, rotation, speed } = controls;

        let modifiedSVG = svgContent
            .replace(/width="[^"]*"/, `width="${size}"`)
            .replace(/height="[^"]*"/, `height="${size}"`)
            .replace(/stroke-width="[^"]*"/g, `stroke-width="${strokeWidth}"`)
            .replace(/opacity="[^"]*"/g, `opacity="${opacity}"`);

        // Add speed control to any animations
        modifiedSVG = modifiedSVG.replace(
            /(<animate[^>]*dur=")([^"]*)/g,
            (match, p1, p2) => {
                const originalDuration = parseFloat(p2);
                const newDuration = originalDuration / speed;
                return `${p1}${newDuration}s`;
            }
        );

        if (fillColor) {
            modifiedSVG = modifiedSVG
                .replace(/(?<=fill=")#[0-9a-fA-F]{3,8}(?=")/g, fillColor) // Replace hex fill colors
                .replace(/(?<=fill=")[^#"][^"]*(?=")/g, fillColor); // Replace named fill colors
        }

        if (strokeColor) {
            modifiedSVG = modifiedSVG
                .replace(/(?<=stroke=")#[0-9a-fA-F]{3,8}(?=")/g, strokeColor) // Replace hex stroke colors
                .replace(/(?<=stroke=")[^#"][^"]*(?=")/g, strokeColor); // Replace named stroke colors
        }

        if (rotation !== 0) {
            modifiedSVG = modifiedSVG.replace(/<svg/, `<svg transform="rotate(${rotation})"`);
        }

        return modifiedSVG;
    };

    const getReactSVGCode = () => {
        const kebabToCamelMap: Record<string, string> = {
            'stroke-width': 'strokeWidth',
            'stroke-linecap': 'strokeLinecap',
            'stroke-linejoin': 'strokeLinejoin',
            'fill-rule': 'fillRule',
            'clip-rule': 'clipRule',
            'clip-path': 'clipPath',
            'font-family': 'fontFamily',
            'font-size': 'fontSize',
            'text-anchor': 'textAnchor'
        };

        let modifiedSVG = getModifiedSVG();

        // Convert kebab-case to camelCase
        Object.entries(kebabToCamelMap).forEach(([kebab, camel]) => {
            modifiedSVG = modifiedSVG.replace(new RegExp(kebab, 'g'), camel);
        });

        // Add {...props} to svg tag
        modifiedSVG = modifiedSVG.replace(/<svg/, '<svg {...props}');

        return `const SVGComponent = (props: any) => (
                  ${modifiedSVG}
                  );`;
    };

    const downloadSVG = () => {
        const modifiedSVG = getModifiedSVG();
        if (!modifiedSVG) return;

        const blob = new Blob([modifiedSVG], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'modified-svg.svg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };


    const showCopiedToast = () => {
        setShowCopiedIndicator(true);
        setTimeout(() => setShowCopiedIndicator(false), 2000);
    };

    const copySVG = () => {
        const modifiedSVG = getModifiedSVG();
        if (modifiedSVG) {
            navigator.clipboard.writeText(modifiedSVG);
            showCopiedToast();
        }
    };

    const copyReactSVG = () => {
        const reactCode = getReactSVGCode();
        navigator.clipboard.writeText(reactCode);
        showCopiedToast();
    };

    const handleControlChange = (key: keyof SVGControls, value: number | string) => {
        if (key === 'fillColor' || key === 'strokeColor') {
            // Validate hex code if entered manually
            if (typeof value === 'string' && value.startsWith('#')) {
                const isValidHex = /^#([0-9A-F]{3}){1,2}$/i.test(value) || /^#([0-9A-F]{4}){1,2}$/i.test(value);
                if (!isValidHex) return;
            }
        }

        setControls(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4 animate-fade-in bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                    SVG Scanner & Editor Pro
                </h1>
                <p className="text-lg sm:text-xl text-center text-gray-600 mb-8 animate-slide-up">
                    Upload, edit and customize your SVG files
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="mb-6">
                            <input
                                type="file"
                                accept=".svg"
                                onChange={handleFileUpload}
                                ref={fileInputRef}
                                className="hidden"
                            />
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                                Upload SVG File
                            </button>

                            <div className="mt-6">
                                <div className="flex items-center justify-between mb-3">
                                    <label className="text-base font-medium text-gray-700">SVG Code Input</label>
                                    <span className="text-sm text-gray-500">Paste or edit directly</span>
                                </div>
                                <textarea
                                    value={svgInput}
                                    onChange={handleSvgInputChange}
                                    className="w-full h-[calc(100vh-450px)] bg-gray-50 rounded-lg px-4 py-3 text-gray-800 font-mono text-sm border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                                    placeholder="<!-- Paste your SVG code here... -->"
                                />
                                <button
                                    onClick={updateSvg}
                                    className="mt-3 w-full py-2.5 px-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    Update Preview
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                        {svgContent ? (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Size (px)</label>
                                        <input
                                            type="number"
                                            value={controls.size}
                                            onChange={(e) => handleControlChange('size', Number(e.target.value))}
                                            className="w-full bg-gray-50 rounded-lg px-4 py-2 text-gray-800 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Fill Color</label>
                                        <div className="flex gap-2">
                                            <input
                                                type="color"
                                                value={controls.fillColor}
                                                onChange={(e) => handleControlChange('fillColor', e.target.value)}
                                                className="h-10 bg-gray-50 rounded-lg cursor-pointer border border-gray-200"
                                            />
                                            <input
                                                type="text"
                                                value={controls.fillColor}
                                                onChange={(e) => handleControlChange('fillColor', e.target.value)}
                                                placeholder="#000000 or color name"
                                                className="flex-1 bg-gray-50 rounded-lg px-4 text-gray-800 border border-gray-200"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Stroke Color</label>
                                        <div className="flex gap-2">
                                            <input
                                                type="color"
                                                value={controls.strokeColor}
                                                onChange={(e) => handleControlChange('strokeColor', e.target.value)}
                                                className="h-10 bg-gray-50 rounded-lg cursor-pointer border border-gray-200"
                                            />
                                            <input
                                                type="text"
                                                value={controls.strokeColor}
                                                onChange={(e) => handleControlChange('strokeColor', e.target.value)}
                                                placeholder="#000000 or color name"
                                                className="flex-1 bg-gray-50 rounded-lg px-4 text-gray-800 border border-gray-200"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Stroke Width</label>
                                        <input
                                            type="number"
                                            value={controls.strokeWidth}
                                            onChange={(e) => handleControlChange('strokeWidth', Number(e.target.value))}
                                            min="0"
                                            step="0.5"
                                            className="w-full bg-gray-50 rounded-lg px-4 py-2 text-gray-800 border border-gray-200 focus:border-purple-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Opacity</label>
                                        <input
                                            type="number"
                                            value={controls.opacity}
                                            onChange={(e) => handleControlChange('opacity', Number(e.target.value))}
                                            min="0"
                                            max="1"
                                            step="0.1"
                                            className="w-full bg-gray-50 rounded-lg px-4 py-2 text-gray-800 border border-gray-200 focus:border-purple-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Rotation (deg)</label>
                                        <input
                                            type="number"
                                            value={controls.rotation}
                                            onChange={(e) => handleControlChange('rotation', Number(e.target.value))}
                                            className="w-full bg-gray-50 rounded-lg px-4 py-2 text-gray-800 border border-gray-200 focus:border-purple-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Animation Speed</label>
                                        <input
                                            type="number"
                                            value={controls.speed}
                                            onChange={(e) => handleControlChange('speed', Number(e.target.value))}
                                            min="0.1"
                                            step="0.1"
                                            className="w-full bg-gray-50 rounded-lg px-4 py-2 text-gray-800 border border-gray-200 focus:border-purple-500"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col bg-gray-50 p-6 rounded-lg border border-gray-200">
                                    <div className="w-full overflow-auto flex items-center justify-center bg-[url('/grid.png')] rounded-lg" style={{ height: '300px', minHeight: '300px', maxHeight: '400px' }}>
                                        <div dangerouslySetInnerHTML={{
                                            __html: getModifiedSVG()
                                        }} />
                                    </div>
                                </div>

                                {showReactCode && (
                                    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 z-50">
                                        <div className="bg-white rounded-xl p-6 w-full max-w-4xl max-h-[85vh] overflow-auto">
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-xl font-semibold text-gray-800">React Component Code</h3>
                                                <button
                                                    onClick={() => setShowReactCode(false)}
                                                    className="text-gray-500 hover:text-gray-700"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="relative">
                                                <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                                                    <code className="text-sm font-mono whitespace-pre-wrap">
                                                        {getReactSVGCode()}
                                                    </code>
                                                </pre>
                                                <button
                                                    onClick={copyReactSVG}
                                                    className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={copySVG}
                                        className="flex-1 py-3 px-6 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                        </svg>
                                        Copy SVG
                                    </button>
                                    <button
                                        onClick={() => setShowReactCode(true)}
                                        className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                        View as React
                                    </button>
                                    <button
                                        onClick={downloadSVG}
                                        className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Download
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="h-[calc(100vh-250px)] flex flex-col items-center justify-center text-gray-500 space-y-4">
                                <svg className="w-16 h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p className="text-lg text-center">Upload or paste an SVG to start editing</p>
                                <p className="text-sm opacity-75 text-center">Supports all standard SVG formats</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Copied Indicator */}
            {showCopiedIndicator && (
                <div className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2.5 rounded-lg shadow-lg animate-fade-in-out flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied to clipboard
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
