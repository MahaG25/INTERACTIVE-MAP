import React from 'react';

function KPICards({ data }) {
  return (
    <div className="kpi-container">
      {data.map((kpi, index) => (
        <div className="kpi-card" key={index}>
          <div className="kpi-title">{kpi.title}</div>
          <div className="kpi-value">{kpi.value}</div>
          <div className={`kpi-change ${kpi.positive ? 'kpi-change-positive' : 'kpi-change-negative'}`}>
            <span className="kpi-change-icon">
              {kpi.positive ? '↑' : '↓'}
            </span>
            {Math.abs(kpi.change)}% {kpi.positive ? 'amélioration' : 'détérioration'}
          </div>
        </div>
      ))}
    </div>
  );
}

export default KPICards;
