"use client";
import { motion } from "framer-motion";
import confetti from 'canvas-confetti';
import { useState } from "react";
export default function Confetti() {
    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log('Text copied to clipboard');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const ConfettiButton = ({
        config,
        className,
        children
    }: {
        config: any,
        className: string,
        children: React.ReactNode
    }) => {
        const [showCode, setShowCode] = useState<boolean>(false);
        const [showCopyMessage, setShowCopyMessage] = useState<boolean>(false);
        const codeString = `confetti(${JSON.stringify(config, null, 2)})`;

        const handleCopy = async () => {
            await copyToClipboard(codeString);
            setShowCopyMessage(true);
            setTimeout(() => setShowCopyMessage(false), 2000);
        };

        return (
            <div className="relative group">
                <div className="flex gap-2">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                            const canvas = document.createElement('canvas');
                            canvas.style.position = 'fixed';
                            canvas.style.inset = '0';
                            canvas.style.width = '100vw';
                            canvas.style.height = '100vh';
                            canvas.style.pointerEvents = 'none';
                            document.body.appendChild(canvas);

                            const myConfetti = confetti.create(canvas, {
                                resize: true,
                                useWorker: true
                            });

                            myConfetti(config);

                            setTimeout(() => {
                                canvas.remove();
                            }, 5000);
                        }}
                        className={`flex-1 cursor-pointer p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
                    >
                        <div className="flex flex-col items-center gap-4">
                            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">{children}</div>
                            <div className="text-sm text-gray-600 font-medium">Click for animation</div>
                            <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-white rounded-lg flex items-center justify-center border border-gray-200 group-hover:border-gray-300 transition-all">
                                <div className="relative w-full h-full">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="animate-bounce text-3xl filter drop-shadow-lg">✨</div>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {children?.toString().includes('Love') && (
                                            <div className="animate-float-particles">
                                                <span className="text-red-500">❤️</span>
                                                <span className="text-pink-500">💝</span>
                                            </div>
                                        )}
                                        {children?.toString().includes('Rain') && (
                                            <div className="animate-fall">
                                                <span>🌧️</span>
                                                <span>✨</span>
                                            </div>
                                        )}
                                        {children?.toString().includes('Side') && (
                                            <div className="animate-slide-right">
                                                <span>⭐</span>
                                                <span>✨</span>
                                            </div>
                                        )}
                                        {children?.toString().includes('Burst') && (
                                            <div className="animate-explode">
                                                <span>💥</span>
                                                <span>✨</span>
                                            </div>
                                        )}
                                        {children?.toString().includes('Gold') && (
                                            <div className="animate-sparkle">
                                                <span className="text-yellow-500">⭐</span>
                                                <span className="text-amber-500">✨</span>
                                            </div>
                                        )}
                                        {children?.toString().includes('Fast') && (
                                            <div className="animate-zoom">
                                                <span>🚀</span>
                                                <span>✨</span>
                                            </div>
                                        )}
                                        {children?.toString().includes('Long') && (
                                            <div className="animate-rainbow">
                                                <span>🌈</span>
                                                <span>✨</span>
                                            </div>
                                        )}
                                        {children?.toString().includes('Big') && (
                                            <div className="animate-scale">
                                                <span>🎪</span>
                                                <span>✨</span>
                                            </div>
                                        )}
                                        {children?.toString().includes('Circle') && (
                                            <div className="animate-spin-slow">
                                                <span>⭕</span>
                                                <span>✨</span>
                                            </div>
                                        )}
                                        {children?.toString().includes('Heavy') && (
                                            <div className="animate-bounce-slow">
                                                <span>🪨</span>
                                                <span>✨</span>
                                            </div>
                                        )}
                                        {children?.toString().includes('Snow') && (
                                            <div className="animate-snow">
                                                <span>❄️</span>
                                                <span>✨</span>
                                            </div>
                                        )}
                                        {children?.toString().includes('Bubbles') && (
                                            <div className="animate-float-particles">
                                                <span>🫧</span>
                                                <span>✨</span>
                                            </div>
                                        )}
                                        {children?.toString().includes('Neon') && (
                                            <div className="animate-float-particles">
                                                <span>🎪</span>
                                                <span>✨</span>
                                            </div>
                                        )}
                                        {children?.toString().includes('Pixel') && (
                                            <div className="animate-float-particles">
                                                <span>👾</span>
                                                <span>✨</span>
                                            </div>
                                        )}
                                        {children?.toString().includes('Cotton') && (
                                            <div className="animate-float-particles">
                                                <span>🍭</span>
                                                <span>✨</span>
                                            </div>
                                        )}
                                        {children?.toString().includes('Galaxy') && (
                                            <div className="animate-float-particles">
                                                <span>🌌</span>
                                                <span>✨</span>
                                            </div>
                                        )}
                                        {
                                            children?.toString().includes('Upward') && (
                                                <div className="animate-float-particles">
                                                    <span>🚀</span>
                                                    <span>✨</span>
                                                </div>
                                            )
                                        }
                                        {
                                            children?.toString().includes('Left') && (
                                                <div className="animate-float-particles">
                                                    <span>👈</span>
                                                    <span>✨</span>
                                                </div>
                                            )
                                        }
                                        {
                                            children?.toString().includes('Right') && (
                                                <div className="animate-float-particles">
                                                    <span>👉</span>
                                                    <span>✨</span>
                                                </div>
                                            )
                                        }
                                        {
                                            children?.toString().includes('Dual') && (
                                                <div className="animate-float-particles">
                                                    <span>👉</span>
                                                    <span>👈</span>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowCode(!showCode)}
                        className="p-3 bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-700 rounded-xl transition-all duration-300 shadow-lg"
                        aria-label="Toggle code"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </motion.button>
                </div>

                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: showCode ? 1 : 0, height: showCode ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm text-gray-600 font-medium">Config</span>
                            <div className="relative">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleCopy}
                                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-300 border border-gray-200 hover:border-gray-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Copy
                                </motion.button>
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: showCopyMessage ? 1 : 0, y: showCopyMessage ? 0 : 8 }}
                                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-green-500 text-white text-sm rounded-lg whitespace-nowrap shadow-lg"
                                >
                                    Copied!
                                </motion.div>
                            </div>
                        </div>
                        <pre className="text-sm text-gray-700 overflow-x-auto p-4 bg-gray-100 rounded-lg border border-gray-200">
                            <code>{codeString}</code>
                        </pre>
                    </div>
                </motion.div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4 animate-fade-in bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                    Confetti Animation Playground 🎉
                </h1>
                <div className="text-lg sm:text-xl text-center text-gray-600 mb-8 animate-slide-up">
                    <p className="mb-4">Using the amazing <a href="https://www.kirilv.com/canvas-confetti/" className="text-blue-600 hover:text-blue-800 underline">canvas-confetti</a> library</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-gray-100 font-mono rounded-lg shadow-sm">
                        <span className="text-green-400">$</span>
                        <span>npm install canvas-confetti</span>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl font-bold mb-8 text-gray-800">Animation Party! 🎉</h1>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ConfettiButton
                            config={{
                                particleCount: 100,
                                spread: 160,
                                colors: ['#ff0000', '#ff69b4'],
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-red-100 to-red-200"
                        >
                            Love Confetti 💕
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 150,
                                spread: 180,
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-blue-100 to-blue-200"
                        >
                            Rain Confetti 🌧️
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 80,
                                angle: 60,
                                spread: 55,
                                origin: { x: 0, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-green-100 to-green-200"
                        >
                            Side Confetti 👉
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 100,
                                spread: 360,
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-purple-100 to-purple-200"
                        >
                            Burst Confetti 💥
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 60,
                                spread: 70,
                                colors: ['#FFD700', '#FFA500'],
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-yellow-100 to-yellow-200"
                        >
                            Gold Confetti ✨
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 120,
                                startVelocity: 45,
                                spread: 45,
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-pink-100 to-pink-200"
                        >
                            Fast Confetti 🚀
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 200,
                                spread: 70,
                                ticks: 200,
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-indigo-100 to-indigo-200"
                        >
                            Long Confetti 🌈
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 50,
                                spread: 90,
                                scalar: 2,
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-orange-100 to-orange-200"
                        >
                            Big Confetti 🎪
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 150,
                                spread: 70,
                                shapes: ['circle'],
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-teal-100 to-teal-200"
                        >
                            Circle Confetti ⭕
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 100,
                                spread: 70,
                                gravity: 3,
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-cyan-100 to-cyan-200"
                        >
                            Heavy Confetti 🪨
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 100,
                                spread: 360,
                                startVelocity: 20,
                                gravity: 0.5,
                                drift: 2,
                                ticks: 300,
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-pink-100 to-pink-200"
                        >
                            Snow Confetti ❄️
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 80,
                                spread: 45,
                                startVelocity: 45,
                                gravity: 0.8,
                                shapes: ['star'],
                                colors: ['#FFD700', '#FFA500', '#FF4500'],
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-yellow-100 to-yellow-200"
                        >
                            Shooting Stars ⭐
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 120,
                                spread: 100,
                                startVelocity: 15,
                                decay: 0.9,
                                gravity: -0.5,
                                drift: 1,
                                origin: { x: 0.5, y: 0.7 }
                            }}
                            className="bg-gradient-to-br from-purple-100 to-purple-200"
                        >
                            Floating Bubbles 🫧
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 150,
                                spread: 180,
                                startVelocity: 30,
                                decay: 0.95,
                                gravity: 0.3,
                                ticks: 200,
                                shapes: ['circle'],
                                colors: ['#FF3366', '#36D1DC', '#5B86E5', '#00FF87'],
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-indigo-100 to-indigo-200"
                        >
                            Neon Party 🎪
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 100,
                                spread: 120,
                                startVelocity: 25,
                                gravity: 0.7,
                                drift: 1.5,
                                shapes: ['square'],
                                colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96E6A1'],
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-teal-100 to-teal-200"
                        >
                            Pixel Burst 👾
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 80,
                                spread: 150,
                                startVelocity: 35,
                                decay: 0.92,
                                gravity: -0.2,
                                drift: 2,
                                shapes: ['circle'],
                                colors: ['#FF61D2', '#FE9090', '#FFB8D1', '#FF9A9E'],
                                origin: { x: 0.5, y: 0.5 }
                            }}
                            className="bg-gradient-to-br from-rose-100 to-rose-200"
                        >
                            Cotton Candy 🍭
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 130,
                                spread: 160,
                                startVelocity: 40,
                                decay: 0.94,
                                gravity: 0.4,
                                ticks: 250,
                                shapes: ['star', 'circle'],
                                colors: ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F'],
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-fuchsia-100 to-fuchsia-200"
                        >
                            Galaxy Splash 🌌
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 120,
                                spread: 140,
                                startVelocity: 30,
                                decay: 0.95,
                                gravity: 1,
                                ticks: 200,
                                shapes: ['square'],
                                scalar: 0.8,
                                colors: ['#FFD700', '#FFA500', '#FF8C00', '#FF7F50'],
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-orange-100 to-orange-200"
                        >
                            Golden Shower ✨
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 150,
                                spread: 180,
                                startVelocity: 45,
                                decay: 0.91,
                                gravity: 0.8,
                                drift: -1,
                                shapes: ['circle'],
                                colors: ['#50C878', '#98FB98', '#90EE90', '#3CB371'],
                                origin: { x: 0.5, y: 0.4 }
                            }}
                            className="bg-gradient-to-br from-emerald-100 to-emerald-200"
                        >
                            Spring Burst 🌱
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 100,
                                spread: 360,
                                startVelocity: 20,
                                decay: 0.93,
                                gravity: 0.5,
                                ticks: 300,
                                shapes: ['star'],
                                angle: 45,
                                colors: ['#87CEEB', '#B0E0E6', '#ADD8E6', '#E0FFFF'],
                                origin: { x: 0.5, y: 0.5 }
                            }}
                            className="bg-gradient-to-br from-sky-100 to-sky-200"
                        >
                            Winter Magic ❄️
                        </ConfettiButton>
                        <ConfettiButton
                            config={{
                                particleCount: 130,
                                spread: 160,
                                startVelocity: 35,
                                decay: 0.94,
                                gravity: 1,
                                ticks: 200,
                                shapes: ['square'],
                                colors: ['#4169E1', '#1E90FF', '#00BFFF', '#87CEEB'],
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-blue-100 to-blue-200"
                        >
                            Graduation Day 🎓
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 140,
                                spread: 180,
                                startVelocity: 40,
                                decay: 0.92,
                                gravity: 0.8,
                                shapes: ['circle'],
                                colors: ['#FFD700', '#FF69B4', '#98FB98', '#DDA0DD'],
                                origin: { x: 0.5, y: 0.4 }
                            }}
                            className="bg-gradient-to-br from-purple-100 to-purple-200"
                        >
                            School Spirit 📚
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 120,
                                spread: 150,
                                startVelocity: 30,
                                decay: 0.95,
                                gravity: 0.7,
                                ticks: 250,
                                shapes: ['square'],
                                colors: ['#32CD32', '#00FF00', '#7CFC00', '#90EE90'],
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-green-100 to-green-200"
                        >
                            Code Launch 💻
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 110,
                                spread: 170,
                                startVelocity: 35,
                                decay: 0.93,
                                gravity: 0.9,
                                shapes: ['circle'],
                                colors: ['#FF1493', '#00CED1', '#FFD700', '#32CD32'],
                                origin: { x: 0.5, y: 0.4 }
                            }}
                            className="bg-gradient-to-br from-cyan-100 to-cyan-200"
                        >
                            Digital Victory 🚀
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 160,
                                spread: 140,
                                startVelocity: 45,
                                decay: 0.91,
                                gravity: 0.65,
                                drift: 2,
                                scalar: 0.8,
                                shapes: ['star'],
                                colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'],
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-teal-100 to-teal-200"
                        >
                            Neon Dreams 🌈
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 90,
                                spread: 120,
                                startVelocity: 25,
                                decay: 0.94,
                                gravity: 1.2,
                                ticks: 300,
                                angle: 90,
                                shapes: ['circle'],
                                colors: ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F'],
                                origin: { x: 0.5, y: 0.3 }
                            }}
                            className="bg-gradient-to-br from-fuchsia-100 to-fuchsia-200"
                        >
                            Galaxy Burst ✨
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 130,
                                spread: 160,
                                startVelocity: 50,
                                decay: 0.89,
                                gravity: 0.75,
                                drift: -1,
                                ticks: 400,
                                shapes: ['square'],
                                colors: ['#2D3436', '#636E72', '#B2BEC3', '#DFE6E9'],
                                origin: { x: 0.5, y: 0.4 }
                            }}
                            className="bg-gradient-to-br from-slate-100 to-slate-200"
                        >
                            Pixel Storm 🎮
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 120,
                                spread: 70,
                                startVelocity: 55,
                                decay: 0.91,
                                gravity: -1, // Negative gravity makes particles go upward
                                ticks: 300,
                                angle: 270, // Angle pointing upward
                                shapes: ['circle', 'square'],
                                colors: ['#FFD700', '#FFA500', '#FF6347', '#FF69B4', '#BA55D3'],
                                origin: { x: 0.5, y: 0.9 } // Start from bottom
                            }}
                            className="bg-gradient-to-br from-amber-100 to-amber-200"
                        >
                            Upward Burst 🚀
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 80,
                                spread: 55,
                                angle: 60,
                                startVelocity: 45,
                                decay: 0.92,
                                gravity: 1,
                                ticks: 300,
                                shapes: ['square'],
                                colors: ['#FF9671', '#FFC75F', '#F9F871'],
                                origin: { x: 0, y: 0.5 }
                            }}
                            className="bg-gradient-to-br from-orange-100 to-orange-200"
                        >
                            Left Stream 👈
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 80,
                                spread: 55,
                                angle: 120,
                                startVelocity: 45,
                                decay: 0.92,
                                gravity: 1,
                                ticks: 300,
                                shapes: ['square'],
                                colors: ['#FF9671', '#FFC75F', '#F9F871'],
                                origin: { x: 1, y: 0.5 }
                            }}
                            className="bg-gradient-to-br from-orange-100 to-orange-200"
                        >
                            Right Stream 👉
                        </ConfettiButton>

                        <ConfettiButton
                            config={{
                                particleCount: 80,
                                spread: 55,
                                angle: 90,
                                startVelocity: 45,
                                decay: 0.92,
                                gravity: 1,
                                ticks: 300,
                                shapes: ['square'],
                                colors: ['#FF9671', '#FFC75F', '#F9F871'],
                                origin: { x: 0.5, y: 0.5 }
                            }}
                            className="bg-gradient-to-br from-orange-100 to-orange-200"
                        >
                            Dual Stream 🎯
                        </ConfettiButton>

                    </div>
                </div>
            </div>
        </div>
    );
}
