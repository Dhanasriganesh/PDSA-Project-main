import React from 'react';

export const AIIcon = ({ className = "w-16 h-16" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="28" fill="url(#aiGrad)" opacity="0.1"/>
    <path d="M32 12L38 28H50L40 38L44 54L32 46L20 54L24 38L14 28H26L32 12Z" fill="url(#aiGrad)"/>
    <circle cx="32" cy="32" r="4" fill="white"/>
  </svg>
);

export const CloudIcon = ({ className = "w-16 h-16" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
    </defs>
    <path d="M48 28C48 20.268 41.732 14 34 14C29.088 14 24.816 16.832 22.4 21.2C18.816 19.24 14.504 19.24 10.92 21.2C7.336 23.16 5 26.96 5 31C5 35.04 7.336 38.84 10.92 40.8H48C52.418 40.8 56 37.218 56 32.8C56 28.382 52.418 24.8 48 24.8V28Z" fill="url(#cloudGrad)"/>
  </svg>
);

export const DevOpsIcon = ({ className = "w-16 h-16" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="devopsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
    <rect x="8" y="20" width="16" height="16" rx="2" fill="url(#devopsGrad)"/>
    <rect x="28" y="20" width="16" height="16" rx="2" fill="url(#devopsGrad)" opacity="0.7"/>
    <rect x="48" y="20" width="8" height="16" rx="2" fill="url(#devopsGrad)" opacity="0.5"/>
    <path d="M16 20L28 28L16 36V20Z" fill="white" opacity="0.9"/>
    <path d="M32 20L44 28L32 36V20Z" fill="white" opacity="0.9"/>
  </svg>
);

export const BigDataIcon = ({ className = "w-16 h-16" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dataGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
      <linearGradient id="dataGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
      <linearGradient id="dataGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
    <circle cx="20" cy="32" r="12" fill="url(#dataGrad1)"/>
    <circle cx="32" cy="20" r="10" fill="url(#dataGrad2)"/>
    <circle cx="44" cy="32" r="8" fill="url(#dataGrad3)"/>
    <circle cx="32" cy="44" r="6" fill="url(#dataGrad1)" opacity="0.7"/>
    <path d="M20 32L32 20M32 20L44 32M44 32L32 44M32 44L20 32" stroke="white" strokeWidth="2" opacity="0.8"/>
  </svg>
);

export const WebDevIcon = ({ className = "w-16 h-16" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="webGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
      <linearGradient id="webGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <rect x="8" y="12" width="48" height="40" rx="2" fill="url(#webGrad1)"/>
    <rect x="12" y="16" width="40" height="28" fill="url(#webGrad2)"/>
    <rect x="16" y="20" width="32" height="4" fill="white"/>
    <rect x="16" y="28" width="24" height="4" fill="white" opacity="0.7"/>
    <rect x="16" y="36" width="20" height="4" fill="white" opacity="0.7"/>
    <circle cx="52" cy="20" r="4" fill="white"/>
  </svg>
);

export const IoTIcon = ({ className = "w-16 h-16" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iotGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="iotGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="20" fill="url(#iotGrad1)"/>
    <circle cx="20" cy="20" r="6" fill="url(#iotGrad2)"/>
    <circle cx="44" cy="20" r="6" fill="url(#iotGrad2)"/>
    <circle cx="20" cy="44" r="6" fill="url(#iotGrad2)"/>
    <circle cx="44" cy="44" r="6" fill="url(#iotGrad2)"/>
    <path d="M26 20L20 26M38 20L44 26M20 38L26 44M44 38L38 44" stroke="white" strokeWidth="2" opacity="0.9"/>
    <circle cx="32" cy="32" r="4" fill="white"/>
  </svg>
);
