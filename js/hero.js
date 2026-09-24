// Animated network background on the homepage hero (needs three.js + vanta.net loaded first)
VANTA.NET({
  el: ".hero",                 // target section
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x4b6cd4,             // softer blue (less glow)
  backgroundColor: 0x0f1220,   // matches your dark theme
  points: 9.0,                 // number of dots
  maxDistance: 22.0,           // spacing between nodes
  spacing: 18.0
});
