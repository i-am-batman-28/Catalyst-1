import './lab-decor.css';

function PixelShelf() {
  return (
    <svg className="pixel-shelf" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="glowBlue" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect x="10" y="120" width="280" height="12" fill="#1b1230" stroke="#fff" strokeWidth="3" />
      {[
        {x:30, c:'#ffd166', h:40},
        {x:70, c:'#46c2ff', h:55},
        {x:110, c:'#ff6ad5', h:45},
        {x:160, c:'#46c2ff', h:50},
        {x:210, c:'#8a76ff', h:60}
      ].map((t,i)=> (
        <g key={i} className="bob">
          <rect x={t.x-8} y={120-t.h-8} width="16" height={t.h+8} rx="2" fill="#9ad7ff" opacity="0.15" />
          <rect x={t.x-7} y={120-t.h} width="14" height={t.h} rx="2" fill={t.c} filter="url(#glowBlue)" />
        </g>
      ))}
    </svg>
  );
}

function CryoTank() {
  return (
    <svg className="cryo-tank" viewBox="0 0 120 220" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="tankG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2bd3ff" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#2bd3ff" stopOpacity="0.2"/>
        </linearGradient>
      </defs>
      <rect x="20" y="10" width="80" height="200" rx="8" fill="url(#tankG)" stroke="#fff" strokeWidth="3" />
      <circle cx="60" cy="40" r="4" fill="#ffffff" className="rise" />
      <circle cx="70" cy="70" r="3" fill="#ffffff" className="rise" />
      <circle cx="50" cy="90" r="2.5" fill="#ffffff" className="rise" />
    </svg>
  );
}

export default function HeroDecor2D() {
  return (
    <div className="hero-2d" aria-hidden>
      <CryoTank />
      <PixelShelf />
    </div>
  );
} 