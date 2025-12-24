import React, { useEffect, useState } from 'react';

function StatsCounterSection() {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { value: 15, suffix: '+', label: 'Years of experience', color: 'from-blue-600 to-indigo-700' },
    { value: 440, suffix: '+', label: 'Full-Time IT Professionals', color: 'from-indigo-600 to-blue-700' },
    { value: 20, suffix: '+', label: 'Projects executed', color: 'from-sky-500 to-cyan-600' },
    { value: 70, suffix: '+', label: 'Customers worldwide', color: 'from-cyan-600 to-blue-500' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-counter-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      const target = stat.value;
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const intervalId = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.round(target);
            return newCounts;
          });
          clearInterval(intervalId);
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.round(current);
            return newCounts;
          });
        }
      }, duration / steps);

      return intervalId;
    });

    return () => {
      intervals.forEach((interval) => {
        if (interval) clearInterval(interval);
      });
    };
  }, [isVisible, stats.length]);

  return (
    <section id="stats-counter-section" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br text-white px-8 py-12 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                backgroundImage: `linear-gradient(135deg, ${
                  stat.color.includes('blue-600') ? '#2563eb' :
                  stat.color.includes('indigo-600') ? '#4f46e5' :
                  stat.color.includes('sky-500') ? '#0ea5e9' :
                  '#0891b2'
                }, ${
                  stat.color.includes('indigo-700') ? '#4338ca' :
                  stat.color.includes('blue-700') ? '#1d4ed8' :
                  stat.color.includes('cyan-600') ? '#0891b2' :
                  '#0284c7'
                })`,
              }}
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="text-5xl md:text-6xl font-bold mb-4">
                  {counts[index]}
                  <span className="text-4xl">{stat.suffix}</span>
                </div>
                <div className="text-lg font-medium opacity-90">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsCounterSection;

