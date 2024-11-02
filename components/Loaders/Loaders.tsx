"use client";

interface LoaderProps {
    size?: number;
    primaryColor?: string;
    secondaryColor?: string;
    duration?: number;
}

// Pulse Loader
export const PulseLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 44 44">
        <circle
            cx="22"
            cy="22"
            r="20"
            fill="none"
            stroke={primaryColor}
            strokeWidth="4"
        >
            <animate
                attributeName="r"
                from="20"
                to="0"
                dur="1.5s"
                begin="0s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="opacity"
                from="1"
                to="0"
                dur="1.5s"
                begin="0s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);

// Spinning Dots Loader
export const SpinningDotsLoader = ({ size = 40, primaryColor = "#3B82F6", duration = 1.2 }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 38 38">
        <g transform="translate(19 19)">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((degree, i) => (
                <g key={i} transform={`rotate(${degree})`}>
                    <circle
                        cx="0"
                        cy="12"
                        r="3"
                        fill={primaryColor}
                        opacity={0.125 * (i + 1)}
                    >
                        <animate
                            attributeName="opacity"
                            from={0.125 * (i + 1)}
                            to={0.125 * (i + 1)}
                            dur={`${duration}s`}
                            begin={`${(i * duration) / 8}s`}
                            repeatCount="indefinite"
                            keyTimes="0;1"
                            values={`1;${0.125 * (i + 1)}`}
                        />
                    </circle>
                </g>
            ))}
        </g>
    </svg>
);

// Ripple Loader
export const RippleLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 44 44">
        <circle
            cx="22"
            cy="22"
            r="6"
            fill="none"
            stroke={primaryColor}
            strokeWidth="2"
        >
            <animate
                attributeName="r"
                from="6"
                to="20"
                dur="1.5s"
                begin="0s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="opacity"
                from="1"
                to="0"
                dur="1.5s"
                begin="0s"
                repeatCount="indefinite"
            />
        </circle>
        <circle
            cx="22"
            cy="22"
            r="6"
            fill="none"
            stroke={primaryColor}
            strokeWidth="2"
        >
            <animate
                attributeName="r"
                from="6"
                to="20"
                dur="1.5s"
                begin="0.5s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="opacity"
                from="1"
                to="0"
                dur="1.5s"
                begin="0.5s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);

// Bouncing Dots Loader
export const BouncingDotsLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size / 3} viewBox="0 0 120 30">
        {[0, 1, 2].map((i) => (
            <circle
                key={i}
                cx={30 + (i * 30)}
                cy="15"
                r="10"
                fill={primaryColor}
            >
                <animate
                    attributeName="cy"
                    from="15"
                    to="15"
                    dur="0.6s"
                    begin={`${i * 0.2}s`}
                    repeatCount="indefinite"
                    values="15;5;15"
                    keyTimes="0;0.5;1"
                />
            </circle>
        ))}
    </svg>
);

// Circular Progress Loader
export const CircularProgressLoader = ({ size = 40, primaryColor = "#3B82F6", secondaryColor = "#E5E7EB" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 44 44">
        <circle
            cx="22"
            cy="22"
            r="20"
            fill="none"
            stroke={secondaryColor}
            strokeWidth="4"
        />
        <circle
            cx="22"
            cy="22"
            r="20"
            fill="none"
            stroke={primaryColor}
            strokeWidth="4"
            strokeDasharray="125.6"
            strokeDashoffset="125.6"
        >
            <animate
                attributeName="stroke-dashoffset"
                values="125.6;0"
                dur="2s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);

// Infinity Loader
export const InfinityLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size / 2} viewBox="0 0 100 50">
        <path
            d="M25,25 C25,12.5 37.5,12.5 50,12.5 C62.5,12.5 75,12.5 75,25 C75,37.5 62.5,37.5 50,37.5 C37.5,37.5 25,37.5 25,25"
            fill="none"
            stroke={primaryColor}
            strokeWidth="4"
            strokeLinecap="round"
        >
            <animate
                attributeName="stroke-dasharray"
                from="0,157"
                to="157,0"
                dur="2s"
                repeatCount="indefinite"
            />
        </path>
    </svg>
);

// Gradient Spinner Loader
export const GradientSpinnerLoader = ({ size = 40 }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 44 44">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
        </defs>
        <circle
            cx="22"
            cy="22"
            r="20"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeLinecap="round"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 22 22"
                to="360 22 22"
                dur="1s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);

// DNA Loader
export const DNALoader = ({ size = 40, primaryColor = "#3B82F6", secondaryColor = "#60A5FA" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 44 44">
        {[...Array(8)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 45} 22 22)`}>
                <circle
                    cx="22"
                    cy="4"
                    r="3"
                    fill={i % 2 ? primaryColor : secondaryColor}
                >
                    <animate
                        attributeName="cy"
                        values="4;40;4"
                        dur="1.5s"
                        begin={`${i * 0.1875}s`}
                        repeatCount="indefinite"
                    />
                </circle>
            </g>
        ))}
    </svg>
);

// Squares Grid Loader
export const SquaresGridLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 44 44">
        {[...Array(9)].map((_, i) => {
            const x = (i % 3) * 16 + 2;
            const y = Math.floor(i / 3) * 16 + 2;
            return (
                <rect
                    key={i}
                    x={x}
                    y={y}
                    width="12"
                    height="12"
                    fill={primaryColor}
                >
                    <animate
                        attributeName="opacity"
                        values="1;0.3;1"
                        dur="1.5s"
                        begin={`${i * 0.2}s`}
                        repeatCount="indefinite"
                    />
                </rect>
            );
        })}
    </svg>
);

// Wave Loader
export const WaveLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size / 2} viewBox="0 0 100 50">
        {[...Array(5)].map((_, i) => (
            <line
                key={i}
                x1={10 + i * 20}
                y1="25"
                x2={10 + i * 20}
                y2="25"
                stroke={primaryColor}
                strokeWidth="4"
                strokeLinecap="round"
            >
                <animate
                    attributeName="y1"
                    values="25;10;25"
                    dur="1s"
                    begin={`${i * 0.2}s`}
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="y2"
                    values="25;40;25"
                    dur="1s"
                    begin={`${i * 0.2}s`}
                    repeatCount="indefinite"
                />
            </line>
        ))}
    </svg>
);

// Rotating Square Loader
export const RotatingSquareLoader = ({ size = 40, primaryColor = "#3B82F6", duration = 1.5 }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <rect
            x="15"
            y="15"
            width="20"
            height="20"
            fill={primaryColor}
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur={`${duration}s`}
                repeatCount="indefinite"
            />
            <animate
                attributeName="opacity"
                values="1;0.5;1"
                dur={`${duration}s`}
                repeatCount="indefinite"
            />
        </rect>
    </svg>
);

// Dots Circle Loader
export const DotsCircleLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(12)].map((_, i) => (
            <circle
                key={i}
                cx={25 + 15 * Math.cos((i * Math.PI) / 6)}
                cy={25 + 15 * Math.sin((i * Math.PI) / 6)}
                r="3"
                fill={primaryColor}
            >
                <animate
                    attributeName="opacity"
                    values="1;0.2;1"
                    dur="1.2s"
                    begin={`${i * 0.1}s`}
                    repeatCount="indefinite"
                />
            </circle>
        ))}
    </svg>
);

// Hourglass Loader
export const HourglassLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <path
            d="M25,5 L40,5 L40,20 L25,35 L25,45 L40,45 L40,45 L10,45 L10,45 L10,45 L25,45 L25,35 L10,20 L10,5 L25,5"
            fill="none"
            stroke={primaryColor}
            strokeWidth="2"
        >
            <animate
                attributeName="d"
                values="M25,5 L40,5 L40,20 L25,35 L25,45 L40,45 L40,45 L10,45 L10,45 L10,45 L25,45 L25,35 L10,20 L10,5 L25,5;
                M25,5 L40,5 L40,20 L25,35 L25,45 L40,45 L40,45 L10,45 L10,45 L10,45 L25,45 L25,35 L40,20 L40,5 L25,5"
                dur="2s"
                repeatCount="indefinite"
            />
        </path>
    </svg>
);

// Kaleidoscope Loader
export const KaleidoscopeLoader = ({ size = 40, primaryColor = "#3B82F6", secondaryColor = "#60A5FA" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(6)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 60} 25 25)`}>
                <path
                    d="M25,25 L35,15 Q40,10 35,5 L25,15 Z"
                    fill={i % 2 ? primaryColor : secondaryColor}
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 25 25"
                        to="360 25 25"
                        dur="3s"
                        begin={`${i * 0.5}s`}
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="opacity"
                        values="1;0.4;1"
                        dur="2s"
                        begin={`${i * 0.3}s`}
                        repeatCount="indefinite"
                    />
                </path>
            </g>
        ))}
    </svg>
);

// Fractal Tree Loader
export const FractalTreeLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(8)].map((_, i) => (
            <path
                key={i}
                d={`M25,45 L25,${45 - i * 5} L${20 - i * 2},${35 - i * 4} M25,${45 - i * 5} L${30 + i * 2},${35 - i * 4}`}
                stroke={primaryColor}
                strokeWidth="1"
                fill="none"
            >
                <animate
                    attributeName="stroke-width"
                    values="0.5;2;0.5"
                    dur="1.5s"
                    begin={`${i * 0.2}s`}
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="1.5s"
                    begin={`${i * 0.2}s`}
                    repeatCount="indefinite"
                />
            </path>
        ))}
    </svg>
);

// Quantum Dots Loader
export const QuantumDotsLoader = ({ size = 40, primaryColor = "#3B82F6", secondaryColor = "#60A5FA" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(4)].map((_, i) => (
            <g key={i}>
                <circle
                    cx="25"
                    cy="25"
                    r={3 + i * 2}
                    fill="none"
                    stroke={i % 2 ? primaryColor : secondaryColor}
                    strokeWidth="1"
                >
                    <animate
                        attributeName="r"
                        values={`${3 + i * 2};${6 + i * 2};${3 + i * 2}`}
                        dur="2s"
                        begin={`${i * 0.5}s`}
                        repeatCount="indefinite"
                    />
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from={`0 25 25`}
                        to={`${360 - i * 90} 25 25`}
                        dur="3s"
                        begin={`${i * 0.5}s`}
                        repeatCount="indefinite"
                    />
                </circle>
                <circle
                    cx={25 + (i * 5)}
                    cy="25"
                    r="2"
                    fill={i % 2 ? primaryColor : secondaryColor}
                >
                    <animate
                        attributeName="cx"
                        values={`${25 + (i * 5)};${25 - (i * 5)};${25 + (i * 5)}`}
                        dur="1.5s"
                        begin={`${i * 0.3}s`}
                        repeatCount="indefinite"
                    />
                </circle>
            </g>
        ))}
    </svg>
);

// Neural Network Loader
export const NeuralNetworkLoader = ({ size = 40, primaryColor = "#3B82F6", secondaryColor = "#60A5FA" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(3)].map((_, layer) => (
            <g key={`layer-${layer}`}>
                {[...Array(3)].map((_, node) => (
                    <g key={`node-${layer}-${node}`}>
                        <circle
                            cx={15 + layer * 20}
                            cy={15 + node * 20}
                            r="4"
                            fill={primaryColor}
                        >
                            <animate
                                attributeName="opacity"
                                values="1;0.4;1"
                                dur="1.5s"
                                begin={`${(layer + node) * 0.2}s`}
                                repeatCount="indefinite"
                            />
                        </circle>
                        {layer < 2 && [...Array(3)].map((_, nextNode) => (
                            <path
                                key={`connection-${layer}-${node}-${nextNode}`}
                                d={`M${19 + layer * 20},${15 + node * 20} L${31 + layer * 20},${15 + nextNode * 20}`}
                                stroke={secondaryColor}
                                strokeWidth="1"
                                opacity="0.5"
                            >
                                <animate
                                    attributeName="stroke-dasharray"
                                    values="0,12;12,0;0,12"
                                    dur="1.5s"
                                    begin={`${(layer + node + nextNode) * 0.1}s`}
                                    repeatCount="indefinite"
                                />
                            </path>
                        ))}
                    </g>
                ))}
            </g>
        ))}
    </svg>
);

// Particle Flow Loader
export const ParticleFlowLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(12)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 25 25)`}>
                <circle
                    cx="25"
                    cy="8"
                    r="3"
                    fill={primaryColor}
                >
                    <animate
                        attributeName="r"
                        values="3;1;3"
                        dur="2s"
                        begin={`${i * 0.15}s`}
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="cy"
                        values="8;15;8"
                        dur="2s"
                        begin={`${i * 0.15}s`}
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="fill-opacity"
                        values="1;0.3;1"
                        dur="2s"
                        begin={`${i * 0.15}s`}
                        repeatCount="indefinite"
                    />
                </circle>
            </g>
        ))}
    </svg>
);


// Matrix Rain Loader
export const MatrixRainLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(5)].map((_, col) => (
            <g key={col}>
                {[...Array(8)].map((_, row) => (
                    <text
                        key={`${col}-${row}`}
                        x={10 + col * 8}
                        y={5 + row * 6}
                        fontSize="5"
                        fill={primaryColor}
                        opacity={Math.random()}
                    >
                        {String.fromCharCode(0x30A0 + Math.random() * 96)}
                        <animate
                            attributeName="opacity"
                            values="1;0;1"
                            dur="2s"
                            begin={`${col * 0.3 + row * 0.1}s`}
                            repeatCount="indefinite"
                        />
                    </text>
                ))}
            </g>
        ))}
    </svg>
);


// Binary Data Loader
export const BinaryDataLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(5)].map((_, row) => (
            <g key={`row-${row}`}>
                {[...Array(5)].map((_, col) => (
                    <text
                        key={`${row}-${col}`}
                        x={10 + col * 8}
                        y={10 + row * 8}
                        fontSize="6"
                        fill={primaryColor}
                        opacity="0.8"
                    >
                        {Math.round(Math.random())}
                        <animate
                            attributeName="opacity"
                            values="0.3;1;0.3"
                            dur="2s"
                            begin={`${row * 0.2 + col * 0.1}s`}
                            repeatCount="indefinite"
                        />
                    </text>
                ))}
            </g>
        ))}
    </svg>
);

// Circuit Board Loader
export const CircuitBoardLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <path
            d="M10,25 L20,25 L20,15 L30,15 L30,35 L40,35"
            fill="none"
            stroke={primaryColor}
            strokeWidth="2"
            strokeLinecap="round"
        >
            <animate
                attributeName="stroke-dasharray"
                values="0,100;100,0"
                dur="2s"
                repeatCount="indefinite"
            />
        </path>
        {[...Array(3)].map((_, i) => (
            <circle
                key={i}
                cx={20 + i * 10}
                cy={25 - (i % 2) * 10}
                r="2"
                fill={primaryColor}
            >
                <animate
                    attributeName="fill-opacity"
                    values="1;0.3;1"
                    dur="1.5s"
                    begin={`${i * 0.5}s`}
                    repeatCount="indefinite"
                />
            </circle>
        ))}
    </svg>
);

// Server Stack Loader
export const ServerStackLoader = ({ size = 40, primaryColor = "#3B82F6", secondaryColor = "#60A5FA" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(4)].map((_, i) => (
            <g key={i}>
                <rect
                    x="10"
                    y={10 + i * 8}
                    width="30"
                    height="6"
                    rx="1"
                    fill="none"
                    stroke={i % 2 ? primaryColor : secondaryColor}
                    strokeWidth="1"
                >
                    <animate
                        attributeName="stroke-opacity"
                        values="1;0.3;1"
                        dur="1.5s"
                        begin={`${i * 0.2}s`}
                        repeatCount="indefinite"
                    />
                </rect>
                <circle
                    cx="15"
                    cy={13 + i * 8}
                    r="1"
                    fill={i % 2 ? primaryColor : secondaryColor}
                >
                    <animate
                        attributeName="fill-opacity"
                        values="1;0.3;1"
                        dur="1s"
                        begin={`${i * 0.2}s`}
                        repeatCount="indefinite"
                    />
                </circle>
            </g>
        ))}
    </svg>
);

// Orbital Loader
export const OrbitalLoader = ({ size = 40, primaryColor = "#3B82F6", secondaryColor = "#60A5FA" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" stroke={secondaryColor} strokeWidth="1" fill="none" />
        <circle cx="25" cy="25" r="15" stroke={primaryColor} strokeWidth="1" fill="none" />
        {[...Array(3)].map((_, i) => (
            <circle
                key={i}
                r="2"
                fill={i === 0 ? primaryColor : secondaryColor}
            >
                <animateMotion
                    dur={`${3 + i}s`}
                    repeatCount="indefinite"
                    path="M25,5 A20,20 0 1,1 25,45 A20,20 0 1,1 25,5"
                />
            </circle>
        ))}
    </svg>
);

// Pulse Ring Loader
export const PulseRingLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(3)].map((_, i) => (
            <circle
                key={i}
                cx="25"
                cy="25"
                r="8"
                fill="none"
                stroke={primaryColor}
                strokeWidth="1"
                opacity="0"
            >
                <animate
                    attributeName="r"
                    from="8"
                    to="20"
                    dur="2s"
                    begin={`${i * 0.6}s`}
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="opacity"
                    from="1"
                    to="0"
                    dur="2s"
                    begin={`${i * 0.6}s`}
                    repeatCount="indefinite"
                />
            </circle>
        ))}
        <circle cx="25" cy="25" r="8" fill={primaryColor}>
            <animate
                attributeName="r"
                values="6;8;6"
                dur="1s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);

// Spiral Loader
export const SpiralLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(12)].map((_, i) => (
            <line
                key={i}
                x1="25"
                y1="25"
                x2={25 + 15 * Math.cos((i * Math.PI) / 6)}
                y2={25 + 15 * Math.sin((i * Math.PI) / 6)}
                stroke={primaryColor}
                strokeWidth="2"
                transform={`rotate(${i * 30} 25 25)`}
            >
                <animate
                    attributeName="stroke-width"
                    values="2;4;2"
                    dur="1.5s"
                    begin={`${i * 0.1}s`}
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="opacity"
                    values="1;0.2;1"
                    dur="1.5s"
                    begin={`${i * 0.1}s`}
                    repeatCount="indefinite"
                />
            </line>
        ))}
    </svg>
);

// Molecular Loader
export const MolecularLoader = ({ size = 40, primaryColor = "#3B82F6", secondaryColor = "#60A5FA" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="3" fill={primaryColor}>
            <animate
                attributeName="r"
                values="3;4;3"
                dur="1s"
                repeatCount="indefinite"
            />
        </circle>
        {[...Array(3)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 120} 25 25)`}>
                <circle cx="25" cy="15" r="2" fill={secondaryColor}>
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 25 25"
                        to="360 25 25"
                        dur={`${2 + i}s`}
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="r"
                        values="2;3;2"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </circle>
                <line
                    x1="25"
                    y1="18"
                    x2="25"
                    y2="32"
                    stroke={secondaryColor}
                    strokeWidth="0.5"
                    opacity="0.5"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 25 25"
                        to="360 25 25"
                        dur={`${2 + i}s`}
                        repeatCount="indefinite"
                    />
                </line>
            </g>
        ))}
    </svg>
);



// Progress Bar Loader
export const ProgressBarLoader = ({ size = 200, primaryColor = "#3B82F6", duration = 2 }: LoaderProps) => (
    <svg width={size} height={10} viewBox="0 0 200 10">
        <rect width="200" height="10" rx="5" fill="#eee" />
        <rect width="200" height="10" rx="5" fill={primaryColor}>
            <animate
                attributeName="width"
                values="0;200;0"
                dur={`${duration}s`}
                repeatCount="indefinite"
            />
        </rect>
    </svg>
);


// Rotating Cube Loader
export const RotatingCubeLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <rect
            x="15"
            y="15"
            width="20"
            height="20"
            fill={primaryColor}
            transform="rotate(45 25 25)"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="2s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="opacity"
                values="1;0.5;1"
                dur="2s"
                repeatCount="indefinite"
            />
        </rect>
    </svg>
);


// Confetti Loader
export const ConfettiLoader = ({ size = 40, primaryColor = "#3B82F6", secondaryColor = "#10B981" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(12)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 25 25)`}>
                <rect
                    x="24"
                    y="10"
                    width="2"
                    height="4"
                    fill={i % 2 ? primaryColor : secondaryColor}
                >
                    <animateTransform
                        attributeName="transform"
                        type="scale"
                        values="1,1;1,2;1,1"
                        dur="1s"
                        begin={`${i * 0.1}s`}
                        repeatCount="indefinite"
                    />
                </rect>
            </g>
        ))}
    </svg>
);

// Text Loader
export const TextLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size * 3} height={size} viewBox="0 0 120 40">
        {["L", "O", "A", "D", "I", "N", "G"].map((letter, i) => (
            <text
                key={i}
                x={i * 15 + 10}
                y="25"
                fill={primaryColor}
                fontSize="16"
                fontFamily="Arial"
            >
                {letter}
                <animate
                    attributeName="y"
                    values="25;20;25"
                    dur="0.8s"
                    begin={`${i * 0.1}s`}
                    repeatCount="indefinite"
                />
            </text>
        ))}
    </svg>
);


// Liquid Blob Loader
export const LiquidBlobLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <path fill={primaryColor}>
            <animate
                attributeName="d"
                dur="2s"
                repeatCount="indefinite"
                values="M25,25 Q35,25 35,35 Q35,45 25,45 Q15,45 15,35 Q15,25 25,25;
                M25,25 Q40,25 40,25 Q40,45 25,45 Q10,45 10,25 Q10,25 25,25;
                M25,25 Q35,25 35,35 Q35,45 25,45 Q15,45 15,35 Q15,25 25,25"
            />
            <animate
                attributeName="opacity"
                dur="2s"
                repeatCount="indefinite"
                values="0.8;0.6;0.8"
            />
        </path>
    </svg>
);

// Geometric Morph Loader
export const GeometricMorphLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <polygon fill={primaryColor} opacity="0.8">
            <animate
                attributeName="points"
                dur="2s"
                repeatCount="indefinite"
                values="25,25 25,25 25,25; 10,25 25,10 40,25; 25,40 10,25 40,25; 25,25 25,25 25,25"
            />
        </polygon>
    </svg>
);

// Pulse Ring Network Loader
export const PulseRingNetworkLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(3)].map((_, i) => (
            <circle
                key={i}
                cx="25"
                cy="25"
                r={5 + i * 5}
                fill="none"
                stroke={primaryColor}
                strokeWidth="1"
                opacity={0.3}
            >
                <animate
                    attributeName="r"
                    values={`${5 + i * 5};${10 + i * 5};${5 + i * 5}`}
                    dur="2s"
                    begin={`${i * 0.3}s`}
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="2s"
                    begin={`${i * 0.3}s`}
                    repeatCount="indefinite"
                />
            </circle>
        ))}
    </svg>
);

// Minimal Dots Flow Loader
export const MinimalDotsFlowLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(5)].map((_, i) => (
            <circle
                key={i}
                cx={10 + i * 8}
                cy="25"
                r="2"
                fill={primaryColor}
            >
                <animate
                    attributeName="cy"
                    values="25;20;25;30;25"
                    dur="1s"
                    begin={`${i * 0.1}s`}
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="opacity"
                    values="1;0.3;1"
                    dur="1s"
                    begin={`${i * 0.1}s`}
                    repeatCount="indefinite"
                />
            </circle>
        ))}
    </svg>
);

// Futuristic Grid Loader
export const FuturisticGridLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(9)].map((_, i) => (
            <rect
                key={i}
                x={10 + (i % 3) * 12}
                y={10 + Math.floor(i / 3) * 12}
                width="8"
                height="8"
                fill={primaryColor}
                opacity="0.2"
            >
                <animate
                    attributeName="opacity"
                    values="0.2;1;0.2"
                    dur="1.5s"
                    begin={`${i * 0.1}s`}
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="rx"
                    values="0;4;0"
                    dur="1.5s"
                    begin={`${i * 0.1}s`}
                    repeatCount="indefinite"
                />
            </rect>
        ))}
    </svg>
);


// Neon Pulse Loader
export const NeonPulseLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke={primaryColor}
            strokeWidth="2"
            filter="url(#neon-glow)"
        >
            <animate
                attributeName="stroke-width"
                values="2;4;2"
                dur="1.5s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="stroke-opacity"
                values="1;0.6;1"
                dur="1.5s"
                repeatCount="indefinite"
            />
        </circle>
        <defs>
            <filter id="neon-glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feFlood floodColor={primaryColor} floodOpacity="0.5" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
    </svg>
);

// Minimal Spinner
export const MinimalSpinnerLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke={primaryColor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="60 120"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="1s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);

// Morphing Dots Loader
export const MorphingDotsLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[0, 120, 240].map((angle, i) => (
            <circle
                key={i}
                cx={25 + 15 * Math.cos((angle * Math.PI) / 180)}
                cy={25 + 15 * Math.sin((angle * Math.PI) / 180)}
                r="4"
                fill={primaryColor}
            >
                <animate
                    attributeName="r"
                    values="4;6;4"
                    dur="1.5s"
                    begin={`${i * 0.2}s`}
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="fill-opacity"
                    values="1;0.5;1"
                    dur="1.5s"
                    begin={`${i * 0.2}s`}
                    repeatCount="indefinite"
                />
            </circle>
        ))}
    </svg>
);

// Gradient Ring Loader
export const GradientRingLoader = ({ size = 40, primaryColor = "#3B82F6", secondaryColor = "#EC4899" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={primaryColor} />
                <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
        </defs>
        <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeDasharray="31.4 31.4"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="1s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);

// Hexagon Grid Loader
export const HexagonGridLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(7)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 6;
            const x = 25 + 12 * Math.cos(angle);
            const y = 25 + 12 * Math.sin(angle);
            return (
                <path
                    key={i}
                    d={`M ${x} ${y} l 5 0 l 2.5 4.33 l -2.5 4.33 l -5 0 l -2.5 -4.33 z`}
                    fill={primaryColor}
                    opacity="0.2"
                >
                    <animate
                        attributeName="opacity"
                        values="0.2;1;0.2"
                        dur="1.5s"
                        begin={`${i * 0.2}s`}
                        repeatCount="indefinite"
                    />
                    <animateTransform
                        attributeName="transform"
                        type="scale"
                        values="1;0.8;1"
                        dur="1.5s"
                        begin={`${i * 0.2}s`}
                        repeatCount="indefinite"
                    />
                </path>
            );
        })}
    </svg>
);

// Spiral Galaxy Loader
export const SpiralGalaxyLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(12)].map((_, i) => {
            const radius = i * 1.5;
            const angle = i * (Math.PI / 6);
            const x = 25 + radius * Math.cos(angle);
            const y = 25 + radius * Math.sin(angle);
            return (
                <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="1"
                    fill={primaryColor}
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from={`0 25 25`}
                        to={`360 25 25`}
                        dur={`${3 - i * 0.2}s`}
                        repeatCount="indefinite"
                    />
                </circle>
            );
        })}
    </svg>
);

// Digital Rain Loader
export const DigitalRainLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(5)].map((_, i) => (
            <text
                key={i}
                x={10 + i * 8}
                y="0"
                fill={primaryColor}
                fontSize="6"
                fontFamily="monospace"
            >
                {["0", "1"][Math.floor(Math.random() * 2)]}
                <animate
                    attributeName="y"
                    values="-10;60"
                    dur={`${1 + i * 0.5}s`}
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur={`${1 + i * 0.5}s`}
                    repeatCount="indefinite"
                />
            </text>
        ))}
    </svg>
);

// Quantum Wave Loader
export const QuantumWaveLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(3)].map((_, i) => (
            <path
                key={i}
                d="M5,25 Q12.5,15 25,25 T45,25"
                fill="none"
                stroke={primaryColor}
                strokeWidth="2"
                opacity={0.3 + (i * 0.2)}
            >
                <animate
                    attributeName="d"
                    values="M5,25 Q12.5,15 25,25 T45,25;
                  M5,25 Q12.5,35 25,25 T45,25;
                  M5,25 Q12.5,15 25,25 T45,25"
                    dur={`${2 + i}s`}
                    repeatCount="indefinite"
                />
            </path>
        ))}
    </svg>
);

// Neural Pulse Loader
export const NeuralPulseLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(6)].map((_, i) => {
            return (
                <g key={i} transform={`rotate(${i * 60} 25 25)`}>
                    <line
                        x1="25"
                        y1="15"
                        x2="25"
                        y2="35"
                        stroke={primaryColor}
                        strokeWidth="1"
                    >
                        <animate
                            attributeName="strokeWidth"
                            values="0.5;2;0.5"
                            dur="1s"
                            begin={`${i * 0.2}s`}
                            repeatCount="indefinite"
                        />
                    </line>
                    <circle cx="25" cy="15" r="2" fill={primaryColor}>
                        <animate
                            attributeName="cy"
                            values="15;35;15"
                            dur="1s"
                            begin={`${i * 0.2}s`}
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            );
        })}
    </svg>
);


// Holographic Cube Loader
export const HolographicCubeLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <defs>
            <linearGradient id="holoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={primaryColor} stopOpacity="0.2" />
                <stop offset="50%" stopColor={primaryColor} stopOpacity="0.8" />
                <stop offset="100%" stopColor={primaryColor} stopOpacity="0.2" />
                <animate
                    attributeName="x1"
                    values="0%;100%;0%"
                    dur="3s"
                    repeatCount="indefinite"
                />
            </linearGradient>
        </defs>
        <g>
            <path
                d="M15,15 L35,15 L35,35 L15,35 Z"
                fill="none"
                stroke="url(#holoGradient)"
                strokeWidth="2"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="3s"
                    repeatCount="indefinite"
                />
            </path>
            <path
                d="M10,20 L30,20 L30,40 L10,40 Z"
                fill="none"
                stroke="url(#holoGradient)"
                strokeWidth="2"
                opacity="0.5"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 25 25"
                    to="0 25 25"
                    dur="3s"
                    repeatCount="indefinite"
                />
            </path>
        </g>
    </svg>
);

// Neural Mesh Loader
export const NeuralMeshLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(15)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 15;
            const x = 25 + 15 * Math.cos(angle);
            const y = 25 + 15 * Math.sin(angle);
            return (
                <g key={i}>
                    <circle cx={x} cy={y} r="1.5" fill={primaryColor}>
                        <animate
                            attributeName="r"
                            values="1.5;2.5;1.5"
                            dur="2s"
                            begin={`${i * 0.1}s`}
                            repeatCount="indefinite"
                        />
                    </circle>
                    {[...Array(3)].map((_, j) => {
                        const connectAngle = ((i + j + 1) * Math.PI * 2) / 15;
                        const connectX = 25 + 15 * Math.cos(connectAngle);
                        const connectY = 25 + 15 * Math.sin(connectAngle);
                        return (
                            <line
                                key={j}
                                x1={x}
                                y1={y}
                                x2={connectX}
                                y2={connectY}
                                stroke={primaryColor}
                                strokeWidth="0.5"
                                opacity="0.3"
                            >
                                <animate
                                    attributeName="opacity"
                                    values="0.3;0.8;0.3"
                                    dur="2s"
                                    begin={`${(i + j) * 0.1}s`}
                                    repeatCount="indefinite"
                                />
                            </line>
                        );
                    })}
                </g>
            );
        })}
    </svg>
);


// Server Status Loader
export const ServerStatusLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <rect x="10" y="20" width="6" height="20" fill={primaryColor}>
            <animate
                attributeName="height"
                values="20;30;20"
                dur="1s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="y"
                values="20;10;20"
                dur="1s"
                repeatCount="indefinite"
            />
        </rect>
        <rect x="22" y="15" width="6" height="25" fill={primaryColor}>
            <animate
                attributeName="height"
                values="25;35;25"
                dur="1s"
                begin="0.2s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="y"
                values="15;5;15"
                dur="1s"
                begin="0.2s"
                repeatCount="indefinite"
            />
        </rect>
        <rect x="34" y="10" width="6" height="30" fill={primaryColor}>
            <animate
                attributeName="height"
                values="30;40;30"
                dur="1s"
                begin="0.4s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="y"
                values="10;0;10"
                dur="1s"
                begin="0.4s"
                repeatCount="indefinite"
            />
        </rect>
    </svg>
);

// Container Deployment Loader
export const ContainerDeployLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <rect x="10" y="10" width="30" height="30" fill="none" stroke={primaryColor} strokeWidth="2">
            <animate
                attributeName="stroke-dasharray"
                values="120;120"
                dur="2s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="stroke-dashoffset"
                values="120;0"
                dur="2s"
                repeatCount="indefinite"
            />
            <animate
                attributeName="opacity"
                values="1;0.5;1"
                dur="2s"
                repeatCount="indefinite"
            />
        </rect>
        <path
            d="M15 25 L35 25 M25 15 L25 35"
            stroke={primaryColor}
            strokeWidth="2"
            fill="none"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="3s"
                repeatCount="indefinite"
            />
        </path>
    </svg>
);

// Pipeline Status Loader
export const PipelineLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(3)].map((_, i) => (
            <g key={i}>
                <circle
                    cx={15 + i * 10}
                    cy="25"
                    r="4"
                    fill={primaryColor}
                >
                    <animate
                        attributeName="opacity"
                        values="1;0.3;1"
                        dur="1.5s"
                        begin={`${i * 0.3}s`}
                        repeatCount="indefinite"
                    />
                </circle>
                {i < 2 && (
                    <line
                        x1={19 + i * 10}
                        y1="25"
                        x2={21 + i * 10}
                        y2="25"
                        stroke={primaryColor}
                        strokeWidth="2"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0.3;1"
                            dur="1.5s"
                            begin={`${i * 0.3}s`}
                            repeatCount="indefinite"
                        />
                    </line>
                )}
            </g>
        ))}
    </svg>
);

// Cloud Sync Loader
export const CloudSyncLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <path
            d="M15 25 A10 10 0 0 1 35 25 A10 10 0 0 1 15 25"
            fill="none"
            stroke={primaryColor}
            strokeWidth="2"
            strokeLinecap="round"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="2s"
                repeatCount="indefinite"
            />
        </path>
        <path
            d="M20 25 A5 5 0 0 0 30 25 A5 5 0 0 0 20 25"
            fill="none"
            stroke={primaryColor}
            strokeWidth="2"
            strokeLinecap="round"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="360 25 25"
                to="0 25 25"
                dur="2s"
                repeatCount="indefinite"
            />
        </path>
    </svg>
);


// Glowing Pulse Loader
export const GlowingPulseLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <circle
            cx="25"
            cy="25"
            r="15"
            fill="none" 
            stroke={primaryColor}
            strokeWidth="2"
        >
            <animate
                attributeName="r"
                values="15;20;15"
                dur="2s"
                repeatCount="indefinite"
            />
            <animate 
                attributeName="opacity"
                values="0.6;0.2;0.6"
                dur="2s"
                repeatCount="indefinite"
            />
        </circle>
        <circle
            cx="25"
            cy="25"
            r="15"
            fill="none"
            stroke={primaryColor}
            strokeWidth="2"
            opacity="0.3"
        >
            <animate
                attributeName="r"
                values="15;25;15"
                dur="2s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);

// Circular Progress Path Loader
export const CircularProgressPathLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="4"
        />
        <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke={primaryColor}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="125.6"
            strokeDashoffset="125.6"
        >
            <animate
                attributeName="stroke-dashoffset"
                values="125.6;0;125.6"
                dur="2s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);

// Segmented Ring Loader
export const SegmentedRingLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
                key={angle}
                x1="25"
                y1="10"
                x2="25"
                y2="15"
                stroke={primaryColor}
                strokeWidth="3"
                strokeLinecap="round"
                transform={`rotate(${angle} 25 25)`}
            >
                <animate
                    attributeName="opacity"
                    values="0.2;1;0.2"
                    dur="1.2s"
                    begin={`${i * 0.15}s`}
                    repeatCount="indefinite"
                />
            </line>
        ))}
    </svg>
);


// Shopping Cart Loader
export const ShoppingCartLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <path
            d="M10 15h30l-5 15H15z"
            fill="none"
            stroke={primaryColor}
            strokeWidth="2"
            strokeLinejoin="round"
        >
            <animate
                attributeName="stroke-dasharray"
                values="0 100;100 100"
                dur="1s"
                repeatCount="indefinite"
            />
        </path>
        <circle cx="20" cy="40" r="3" fill={primaryColor}>
            <animate
                attributeName="cy"
                values="40;38;40"
                dur="0.6s"
                repeatCount="indefinite"
            />
        </circle>
        <circle cx="35" cy="40" r="3" fill={primaryColor}>
            <animate
                attributeName="cy"
                values="40;38;40"
                dur="0.6s"
                repeatCount="indefinite"
                begin="0.2s"
            />
        </circle>
    </svg>
);

// Checkout Progress Loader
export const CheckoutProgressLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <rect x="5" y="22" width="40" height="6" rx="3" fill="#E5E7EB" />
        <rect x="5" y="22" width="10" height="6" rx="3" fill={primaryColor}>
            <animate
                attributeName="width"
                values="0;40"
                dur="1.5s"
                repeatCount="indefinite"
            />
        </rect>
        <circle cx="10" cy="25" r="4" fill={primaryColor}>
            <animate
                attributeName="cx"
                values="10;45"
                dur="1.5s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);

// Payment Processing Loader
export const PaymentProcessingLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <rect x="10" y="15" width="30" height="20" rx="2" fill="none" stroke={primaryColor} strokeWidth="2" />
        <line x1="10" y1="25" x2="40" y2="25" stroke={primaryColor} strokeWidth="2" />
        <circle cx="25" cy="32" r="2" fill={primaryColor}>
            <animate
                attributeName="opacity"
                values="0;1;0"
                dur="1s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);

// Order Confirmation Loader
export const OrderConfirmationLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" stroke={primaryColor} strokeWidth="2" strokeDasharray="126" />
        <path
            d="M15 25l7 7 13-13"
            fill="none"
            stroke={primaryColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <animate
                attributeName="stroke-dasharray"
                values="0,30;30,30"
                dur="0.6s"
                fill="freeze"
                repeatCount="indefinite"
            />
        </path>
    </svg>
);

// Delivery Status Loader
export const DeliveryStatusLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <path
            d="M5 25h40"
            stroke="#E5E7EB"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <circle cx="10" cy="25" r="4" fill={primaryColor}>
            <animate
                attributeName="cx"
                values="10;40;10"
                dur="2s"
                repeatCount="indefinite"
            />
        </circle>
        <circle cx="10" cy="25" r="2" fill="#fff">
            <animate
                attributeName="cx"
                values="10;40;10"
                dur="2s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);

// Product Loading Loader
export const ProductLoadingLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <rect x="10" y="10" width="30" height="30" rx="2" fill="none" stroke={primaryColor} strokeWidth="2">
            <animate
                attributeName="stroke-dasharray"
                values="0 120;120 120"
                dur="1.5s"
                repeatCount="indefinite"
            />
        </rect>
        <line x1="15" y1="45" x2="35" y2="45" stroke={primaryColor} strokeWidth="2" strokeLinecap="round">
            <animate
                attributeName="stroke-dasharray"
                values="0 20;20 20"
                dur="1.5s"
                repeatCount="indefinite"
            />
        </line>
    </svg>
);

// Search Results Loader
export const SearchResultsLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <circle cx="20" cy="20" r="10" fill="none" stroke={primaryColor} strokeWidth="2">
            <animate
                attributeName="r"
                values="8;12;8"
                dur="1s"
                repeatCount="indefinite"
            />
        </circle>
        <line
            x1="28"
            y1="28"
            x2="35"
            y2="35"
            stroke={primaryColor}
            strokeWidth="2"
            strokeLinecap="round"
        >
            <animate
                attributeName="stroke-width"
                values="2;4;2"
                dur="1s"
                repeatCount="indefinite"
            />
        </line>
    </svg>
);

// Wishlist Update Loader
export const WishlistUpdateLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <path
            d="M25 35l-15-15a8 8 0 0 1 11-11l4 4 4-4a8 8 0 0 1 11 11l-15 15z"
            fill="none"
            stroke={primaryColor}
            strokeWidth="2"
        >
            <animate
                attributeName="fill"
                values="none;#3B82F6;none"
                dur="1s"
                repeatCount="indefinite"
            />
        </path>
    </svg>
);

// Add to Cart Loader
export const AddToCartLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" stroke={primaryColor} strokeWidth="2">
            <animate
                attributeName="stroke-dasharray"
                values="0 126;126 126"
                dur="1s"
                repeatCount="indefinite"
            />
        </circle>
        <path
            d="M17 25h16M25 17v16"
            stroke={primaryColor}
            strokeWidth="2"
            strokeLinecap="round"
        >
            <animate
                attributeName="opacity"
                values="0;1;0"
                dur="1.5s"
                repeatCount="indefinite"
            />
        </path>
    </svg>
);

// Data Transfer Loader
export const DataTransferLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <g fill="none" stroke={primaryColor} strokeWidth="2">
            <path d="M10 25h30">
                <animate
                    attributeName="stroke-dasharray"
                    values="0,40;40,0"
                    dur="1.5s"
                    repeatCount="indefinite"
                />
            </path>
            <path d="M15 20l-5 5 5 5" />
            <path d="M35 20l5 5-5 5" />
        </g>
    </svg>
);

// Download Progress Loader
export const DownloadProgressLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <path
            d="M25 10v20M25 30l-8-8M25 30l8-8"
            stroke={primaryColor}
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M10 35h30"
            stroke={primaryColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="30"
        >
            <animate
                attributeName="stroke-dashoffset"
                values="30;-30"
                dur="1.5s"
                repeatCount="indefinite"
            />
        </path>
    </svg>
);

// Buffer Loader
export const BufferLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <rect x="10" y="20" width="30" height="10" rx="2" fill="none" stroke={primaryColor} strokeWidth="2" />
        <rect x="10" y="20" width="30" height="10" rx="2" fill={primaryColor} opacity="0.3">
            <animate
                attributeName="width"
                values="0;30;0"
                dur="2s"
                repeatCount="indefinite"
            />
        </rect>
    </svg>
);

// Data Processing Loader
export const DataProcessingLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <g fill="none" stroke={primaryColor} strokeWidth="2">
            <circle cx="25" cy="25" r="15">
                <animate
                    attributeName="r"
                    values="15;12;15"
                    dur="1.5s"
                    repeatCount="indefinite"
                />
            </circle>
            <path d="M25 10v30M10 25h30">
                <animate
                    attributeName="stroke-dasharray"
                    values="0,40;40,0"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </path>
        </g>
    </svg>
);

// File Sync Loader
export const FileSyncLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <g fill="none" stroke={primaryColor} strokeWidth="2">
            <path d="M15 10h15l5 5v20H15V10">
                <animate
                    attributeName="stroke-dasharray"
                    values="0,100;100,0"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </path>
            <path d="M30 10v5h5">
                <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </path>
            <path d="M20 20h10M20 25h10M20 30h10">
                <animate
                    attributeName="stroke-dasharray"
                    values="0,60;60,0"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </path>
        </g>
    </svg>
);


// Molecular Spin Loader
export const MolecularSpinLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <g transform="translate(25,25)">
            {[...Array(3)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 120})`}>
                    <circle 
                        cx="12" 
                        cy="0" 
                        r="3" 
                        fill={primaryColor}
                    >
                        <animate
                            attributeName="r"
                            values="3;4;3"
                            dur="1s"
                            repeatCount="indefinite"
                            begin={`${i * 0.3}s`}
                        />
                    </circle>
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from={`${i * 120}`}
                        to={`${i * 120 + 360}`}
                        dur="2s"
                        repeatCount="indefinite"
                    />
                </g>
            ))}
        </g>
    </svg>
);

// Data Stream Loader
export const DataStreamLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        {[...Array(5)].map((_, i) => (
            <rect
                key={i}
                x={10 + i * 7}
                y="15"
                width="3"
                height="20"
                fill={primaryColor}
            >
                <animate
                    attributeName="height"
                    values="20;30;20;10;20"
                    dur="1s"
                    begin={`${i * 0.1}s`}
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="opacity"
                    values="0.2;1;0.2"
                    dur="1s"
                    begin={`${i * 0.1}s`}
                    repeatCount="indefinite"
                />
            </rect>
        ))}
    </svg>
);

// Quantum Entanglement Loader
export const QuantumEntanglementLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <g fill="none" stroke={primaryColor}>
            {[...Array(3)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 120} 25 25)`}>
                    <ellipse
                        cx="25"
                        cy="25"
                        rx="15"
                        ry="8"
                        strokeWidth="2"
                        opacity={0.3 + (i * 0.2)}
                    >
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 25 25"
                            to="360 25 25"
                            dur={`${3 + i}s`}
                            repeatCount="indefinite"
                        />
                    </ellipse>
                </g>
            ))}
            <circle cx="25" cy="25" r="3" fill={primaryColor}>
                <animate
                    attributeName="r"
                    values="3;4;3"
                    dur="1s"
                    repeatCount="indefinite"
                />
            </circle>
        </g>
    </svg>
);

// Blockchain Network Loader
export const BlockchainNetworkLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <g>
            {[...Array(6)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 60} 25 25)`}>
                    <rect
                        x="22"
                        y="5"
                        width="6"
                        height="6"
                        fill={primaryColor}
                        opacity="0.8"
                    >
                        <animate
                            attributeName="opacity"
                            values="0.8;0.2;0.8"
                            dur="2s"
                            begin={`${i * 0.3}s`}
                            repeatCount="indefinite"
                        />
                    </rect>
                    <line
                        x1="25"
                        y1="11"
                        x2="25"
                        y2="20"
                        stroke={primaryColor}
                        strokeWidth="2"
                        opacity="0.5"
                    >
                        <animate
                            attributeName="opacity"
                            values="0.5;0.1;0.5"
                            dur="2s"
                            begin={`${i * 0.3}s`}
                            repeatCount="indefinite"
                        />
                    </line>
                </g>
            ))}
            <circle cx="25" cy="25" r="8" fill="none" stroke={primaryColor} strokeWidth="2">
                <animate
                    attributeName="r"
                    values="8;9;8"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </circle>
        </g>
    </svg>
);

// AI Processing Loader
export const AIProcessingLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <defs>
            <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        {[...Array(3)].map((_, i) => (
            <path
                key={i}
                d={`M25,${10 + i * 12} Q40,${10 + i * 12} 40,${16 + i * 12} T25,${22 + i * 12}`}
                fill="none"
                stroke={primaryColor}
                strokeWidth="2"
                filter="url(#glow)"
            >
                <animate
                    attributeName="d"
                    values={`
                        M25,${10 + i * 12} Q40,${10 + i * 12} 40,${16 + i * 12} T25,${22 + i * 12};
                        M25,${10 + i * 12} Q10,${10 + i * 12} 10,${16 + i * 12} T25,${22 + i * 12};
                        M25,${10 + i * 12} Q40,${10 + i * 12} 40,${16 + i * 12} T25,${22 + i * 12}
                    `}
                    dur="2s"
                    begin={`${i * 0.2}s`}
                    repeatCount="indefinite"
                />
            </path>
        ))}
    </svg>
);

// Edge Computing Loader
export const EdgeComputingLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <g fill="none" stroke={primaryColor}>
            {[...Array(4)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 90} 25 25)`}>
                    <path
                        d="M25,5 L35,15 L25,25 L15,15 Z"
                        strokeWidth="2"
                        opacity={0.2 + (i * 0.2)}
                    >
                        <animate
                            attributeName="stroke-dasharray"
                            values="0,100;100,0;0,100"
                            dur={`${3 + i * 0.5}s`}
                            repeatCount="indefinite"
                        />
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            values="1;0.9;1"
                            dur={`${2 + i * 0.5}s`}
                            repeatCount="indefinite"
                        />
                    </path>
                </g>
            ))}
            <circle cx="25" cy="25" r="2" fill={primaryColor}>
                <animate
                    attributeName="r"
                    values="2;3;2"
                    dur="1s"
                    repeatCount="indefinite"
                />
            </circle>
        </g>
    </svg>
);

// Quantum Circuit Loader
export const QuantumCircuitLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <g stroke={primaryColor} strokeWidth="2" fill="none">
            {/* Quantum Gates */}
            {[...Array(3)].map((_, i) => (
                <rect
                    key={i}
                    x={10 + i * 15}
                    y="20"
                    width="10"
                    height="10"
                    opacity={0.7}
                >
                    <animate
                        attributeName="opacity"
                        values="0.7;1;0.7"
                        dur="1.5s"
                        begin={`${i * 0.5}s`}
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="stroke-width"
                        values="2;3;2"
                        dur="1.5s"
                        begin={`${i * 0.5}s`}
                        repeatCount="indefinite"
                    />
                </rect>
            ))}
            {/* Quantum Lines */}
            <path d="M5,25 H45">
                <animate
                    attributeName="stroke-dasharray"
                    values="0,50;50,0;0,50"
                    dur="3s"
                    repeatCount="indefinite"
                />
            </path>
            {/* Entanglement Effect */}
            <circle cx="25" cy="25" r="15" opacity="0.2">
                <animate
                    attributeName="r"
                    values="15;18;15"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </circle>
        </g>
    </svg>
);

// DNA Helix Loader
export const DNAHelixLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <g stroke={primaryColor} fill="none">
            {[...Array(5)].map((_, i) => (
                <g key={i}>
                    <path
                        d={`M10,${5 + i * 10} Q25,${5 + i * 10} 40,${10 + i * 10}`}
                        strokeWidth="2"
                        opacity={0.5 + (i * 0.1)}
                    >
                        <animate
                            attributeName="d"
                            values={`
                                M10,${5 + i * 10} Q25,${5 + i * 10} 40,${10 + i * 10};
                                M10,${10 + i * 10} Q25,${15 + i * 10} 40,${15 + i * 10};
                                M10,${5 + i * 10} Q25,${5 + i * 10} 40,${10 + i * 10}
                            `}
                            dur="2s"
                            begin={`${i * 0.4}s`}
                            repeatCount="indefinite"
                        />
                    </path>
                    <circle
                        cx={10}
                        cy={5 + i * 10}
                        r="2"
                        fill={primaryColor}
                        opacity={0.8}
                    >
                        <animate
                            attributeName="cy"
                            values={`${5 + i * 10};${10 + i * 10};${5 + i * 10}`}
                            dur="2s"
                            begin={`${i * 0.4}s`}
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            ))}
        </g>
    </svg>
);

// Cloud Upload Loader
export const CloudUploadLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <g fill="none" stroke={primaryColor} strokeWidth="2">
            <path d="M10,25 Q10,15 20,15 Q20,5 35,10 Q45,15 40,25 Q45,35 35,35 L15,35 Q5,35 10,25">
                <animate
                    attributeName="d"
                    values="M10,25 Q10,15 20,15 Q20,5 35,10 Q45,15 40,25 Q45,35 35,35 L15,35 Q5,35 10,25;
                            M10,27 Q10,17 20,17 Q20,7 35,12 Q45,17 40,27 Q45,37 35,37 L15,37 Q5,37 10,27;
                            M10,25 Q10,15 20,15 Q20,5 35,10 Q45,15 40,25 Q45,35 35,35 L15,35 Q5,35 10,25"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </path>
            <path d="M25,20 L25,30 M20,25 L25,20 L30,25">
                <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </path>
        </g>
    </svg>
);

// Server Rack Loader
export const ServerRackLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <g fill="none" stroke={primaryColor} strokeWidth="2">
            {[...Array(4)].map((_, i) => (
                <g key={i}>
                    <rect x="10" y={10 + i * 8} width="30" height="6" rx="1">
                        <animate
                            attributeName="opacity"
                            values="0.3;1;0.3"
                            dur="1s"
                            begin={`${i * 0.2}s`}
                            repeatCount="indefinite"
                        />
                    </rect>
                    <circle cx="35" cy={13 + i * 8} r="1" fill={primaryColor}>
                        <animate
                            attributeName="fill"
                            values={`${primaryColor};#00ff00;${primaryColor}`}
                            dur="1s"
                            begin={`${i * 0.2}s`}
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            ))}
        </g>
    </svg>
);

// Docker Container Loader
export const DockerContainerLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <g fill="none" stroke={primaryColor} strokeWidth="2">
            {[...Array(3)].map((_, i) => (
                <rect
                    key={i}
                    x={10 + i * 10}
                    y="15"
                    width="8"
                    height="20"
                    rx="1"
                >
                    <animate
                        attributeName="height"
                        values="20;15;20"
                        dur="1s"
                        begin={`${i * 0.2}s`}
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="y"
                        values="15;20;15"
                        dur="1s"
                        begin={`${i * 0.2}s`}
                        repeatCount="indefinite"
                    />
                </rect>
            ))}
            <path d="M5,40 H45">
                <animate
                    attributeName="stroke-dasharray"
                    values="0,40;40,0;0,40"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </path>
        </g>
    </svg>
);

// CI/CD Pipeline Loader
export const CIPipelineLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <g fill="none" stroke={primaryColor} strokeWidth="2">
            <circle cx="10" cy="25" r="5">
                <animate
                    attributeName="fill"
                    values="none;${primaryColor};none"
                    dur="1.5s"
                    repeatCount="indefinite"
                />
            </circle>
            <line x1="15" y1="25" x2="23" y2="25">
                <animate
                    attributeName="stroke-dasharray"
                    values="0,8;8,0;0,8"
                    dur="1.5s"
                    repeatCount="indefinite"
                />
            </line>
            <circle cx="28" cy="25" r="5">
                <animate
                    attributeName="fill"
                    values="none;${primaryColor};none"
                    dur="1.5s"
                    begin="0.5s"
                    repeatCount="indefinite"
                />
            </circle>
            <line x1="33" y1="25" x2="41" y2="25">
                <animate
                    attributeName="stroke-dasharray"
                    values="0,8;8,0;0,8"
                    dur="1.5s"
                    begin="0.5s"
                    repeatCount="indefinite"
                />
            </line>
        </g>
    </svg>
);

// Kubernetes Pod Loader
export const KubernetesPodLoader = ({ size = 40, primaryColor = "#3B82F6" }: LoaderProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
        <g fill="none" stroke={primaryColor} strokeWidth="2">
            <polygon points="25,10 40,20 40,35 25,45 10,35 10,20">
                <animate
                    attributeName="stroke-dasharray"
                    values="0,120;120,0;0,120"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </polygon>
            <circle cx="25" cy="27" r="5">
                <animate
                    attributeName="r"
                    values="5;4;5"
                    dur="1s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="fill"
                    values="none;${primaryColor};none"
                    dur="1s"
                    repeatCount="indefinite"
                />
            </circle>
        </g>
    </svg>
);











