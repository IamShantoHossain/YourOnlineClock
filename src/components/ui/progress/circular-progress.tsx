import React from "react";

interface CircularProgressProps {
  value: number; // 0 - 100
  size?: number; // diameter of the SVG
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  valueToShow?: string | number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  size = 200,
  strokeWidth = 15,
  color = "blue",
  trackColor = "lightgray",
  valueToShow,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="inline-block">
      <svg width={size} height={size}>
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {/* Background track */}
          <circle
            r={radius}
            cx={size / 2}
            cy={size / 2}
            fill="transparent"
            className="stroke-background/40"
            strokeWidth={strokeWidth}
          />
          {/* Progress */}
          <circle
            r={radius}
            cx={size / 2}
            cy={size / 2}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round" // rounded ends
            className="stroke-primary"
            style={{ transition: "stroke-dashoffset 0.25s ease-linear" }}
          />
        </g>
        {/* Text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-foreground fill-current text-3xl font-bold tabular-nums"
        >
          {valueToShow}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
