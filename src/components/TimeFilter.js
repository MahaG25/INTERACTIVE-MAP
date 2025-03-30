import React from 'react';

function TimeFilter({ selectedTime, setSelectedTime, onRefresh }) {
  const periods = ["Aujourd'hui", "Cette semaine", "Ce mois", "Cette année"];
  
  return (
    <div className="time-filter">
      <div className="period-selector">
        {periods.map(period => (
          <button 
            key={period}
            className={`period-btn ${selectedTime === period ? 'active' : ''}`}
            onClick={() => setSelectedTime(period)}
          >
            {period}
          </button>
        ))}
      </div>
      <button className="refresh-btn" onClick={onRefresh}>
        <span>⟳</span> Rafraîchir
      </button>
    </div>
  );
}

export default TimeFilter;
