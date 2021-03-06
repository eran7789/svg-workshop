'use strict';

var yCurve = new MojsCurveEditor({ name: 'yOffset' });

var polygon = new mojs.Shape({
  shape: 'polygon',
  points: 5,
  stroke: '#A8CABA',
  scale: { 0: 1.5, curve: yCurve.getEasing() },
  angle: { 0: 180 },
  fill: { '#721e5f': '#a5efce' },
  radius: 25,
  duration: 1200,
  easing: 'sin.out'
}).then({
  stroke: '#000',
  angle: [-360],
  scale: 0,
  easing: 'sin.in'
});

new MojsPlayer({ add: polygon });