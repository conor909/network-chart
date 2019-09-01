import React from 'react'
import VisChart from './VisChart'

function App() {
  
  const bkndColor = '#141d38'
  const fontColor = '#ffffff'
  const data = [
    { id: 1, label: "العقدة 1", subLabel: '' },
    { id: 2, label: "العقدة 2", subLabel: 'conor@email.com' },
    { id: 3, label: "3 هذه هي كلمة طويلة جدا", subLabel: '0987654321' },
    { id: 4, label: "العقدة 4", subLabel: '0987654321' },
    { id: 5, label: "العقدة 5", subLabel: '0987654321' },
    { id: 6, label: "العقدة 6", subLabel: '0987654321' },
    { id: 7, label: "العقدة 7", subLabel: '0987654321' },
    { id: 8, label: "العقدة 8", subLabel: '0987654321' },
    { id: 9, label: "العقدة 5", subLabel: '0987654321' },
    { id: 10, label: "العقدة 6", subLabel: '0987654321' },
    { id: 11, label: "العقدة 7", subLabel: '0987654321' },
    { id: 12, label: "العقدة 8", subLabel: '0987654321' }
  ]

  return (
    <div style={{ background: bkndColor, width: '100%', height: window.innerHeight }}>
      <VisChart
        fontColor={ fontColor }
        bkndColor={ bkndColor }
        data={ data } />
    </div>
  );
}

export default App;
