// Script to generate high-end vector geometry for Dr. Alaa Mahdy Phoenix Logo
const fs = require('fs');

function createPhoenixSvg({ isDark = false, width = 600, height = 600 } = {}) {
  const navy = '#132E42';
  const softWhite = '#FDFDFD';
  const sage = '#9AA78A';
  const dustyBlue = '#AEC0C9';
  const softOlive = '#BDC0A8';

  const primaryFill = isDark ? softWhite : navy;
  const ringStroke = isDark ? 'rgba(189, 192, 168, 0.4)' : '#BDC0A8';
  const subRingStroke = isDark ? 'rgba(253, 253, 253, 0.2)' : 'rgba(19, 46, 66, 0.2)';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="${width}" height="${height}">
  <defs>
    <style>
      .ring { fill: none; stroke: ${ringStroke}; stroke-width: 1.5; stroke-dasharray: 4 6; opacity: 0.5; }
      .hairline { fill: none; stroke: ${subRingStroke}; stroke-width: 0.8; }
      .primary-path { fill: ${primaryFill}; }
      .sage-path { fill: ${sage}; }
      .blue-path { fill: ${dustyBlue}; }
      .olive-path { fill: ${softOlive}; }
    </style>
  </defs>

  <g id="phoenix-symbol" transform="translate(300, 290)">
    <!-- Holistic Balance Circle / Regulation Orbit -->
    <circle cx="0" cy="-20" r="230" class="ring" />
    <circle cx="0" cy="-20" r="248" class="hairline" />
    
    <!-- Micro Orbit Spheres (Representing Neuroscience, Nervous System Nodes & Wholeness) -->
    <circle cx="0" cy="-250" r="4" class="sage-path" />
    <circle cx="218" cy="-115" r="3.5" class="blue-path" />
    <circle cx="-218" cy="-115" r="3.5" class="blue-path" />
    <circle cx="248" cy="-20" r="3" class="olive-path" />
    <circle cx="-248" cy="-20" r="3" class="olive-path" />

    <!-- ==================== WINGS ==================== -->
    
    <!-- LEFT WING - Layer 1: Outermost Soaring Flight Feather (Primary) -->
    <path class="primary-path" d="
      M -8, -15
      C -35, -55 -95, -130 -165, -180
      C -185, -194 -205, -200 -200, -208
      C -192, -218 -160, -205 -125, -170
      C -75, -120 -35, -45 -5, 5
      Z" />

    <!-- RIGHT WING - Layer 1: Outermost Soaring Flight Feather (Primary) -->
    <path class="primary-path" d="
      M 8, -15
      C 35, -55 95, -130 165, -180
      C 185, -194 205, -200 200, -208
      C 192, -218 160, -205 125, -170
      C 75, -120 35, -45 5, 5
      Z" />

    <!-- LEFT WING - Layer 2: Secondary Grace Feather (Primary Fill) -->
    <path class="primary-path" d="
      M -10, 10
      C -40, -30 -100, -95 -160, -135
      C -176, -145 -190, -150 -185, -157
      C -178, -165 -152, -152 -122, -124
      C -78, -82 -40, -15 -8, 25
      Z" />

    <!-- RIGHT WING - Layer 2: Secondary Grace Feather (Primary Fill) -->
    <path class="primary-path" d="
      M 10, 10
      C 40, -30 100, -95 160, -135
      C 176, -145 190, -150 185, -157
      C 178, -165 152, -152 122, -124
      C 78, -82 40, -15 8, 25
      Z" />

    <!-- LEFT WING - Layer 3: Botanical Leaf Feather (Sage Green - Renewal & Growth) -->
    <path class="sage-path" d="
      M -10, 25
      C -45, -10 -95, -65 -145, -95
      C -160, -103 -170, -106 -165, -112
      C -158, -118 -135, -108 -110, -84
      C -70, -48 -35, 5 -8, 42
      Z" />

    <!-- RIGHT WING - Layer 3: Botanical Leaf Feather (Sage Green - Renewal & Growth) -->
    <path class="sage-path" d="
      M 10, 25
      C 45, -10 95, -65 145, -95
      C 160, -103 170, -106 165, -112
      C 158, -118 135, -108 110, -84
      C 70, -48 35, 5 8, 42
      Z" />

    <!-- LEFT WING - Layer 4: Inner Calming Feather (Dusty Blue - Nervous System Regulation) -->
    <path class="blue-path" d="
      M -8, 40
      C -38, 12 -80, -30 -120, -55
      C -132, -62 -140, -64 -136, -69
      C -130, -74 -112, -66 -92, -48
      C -60, -20 -30, 22 -6, 55
      Z" />

    <!-- RIGHT WING - Layer 4: Inner Calming Feather (Dusty Blue - Nervous System Regulation) -->
    <path class="blue-path" d="
      M 8, 40
      C 38, 12 80, -30 120, -55
      C 132, -62 140, -64 136, -69
      C 130, -74 112, -66 92, -48
      C 60, -20 30, 22 6, 55
      Z" />

    <!-- LEFT WING - Layer 5: Grounded Warmth Accent (Soft Olive) -->
    <path class="olive-path" d="
      M -6, 52
      C -30, 30 -62, -2 -95, -20
      C -105, -25 -112, -27 -108, -32
      C -102, -36 -88, -30 -72, -15
      C -48, 8 -24, 38 -4, 64
      Z" />

    <!-- RIGHT WING - Layer 5: Grounded Warmth Accent (Soft Olive) -->
    <path class="olive-path" d="
      M 6, 52
      C 30, 30 62, -2 95, -20
      C 105, -25 112, -27 108, -32
      C 102, -36 88, -30 72, -15
      C 48, 8 24, 38 4, 64
      Z" />

    <!-- ==================== TORSO & HEAD ==================== -->
    
    <!-- Central Torso / Sacred Heart Column -->
    <path class="primary-path" d="
      M 0, -85
      C -7, -70 -14, -30 -14, 15
      C -14, 55 -6, 95 0, 115
      C 6, 95 14, 55 14, 15
      C 14, -30 7, -70 0, -85
      Z" />

    <!-- Head & Regal Phoenix Crest -->
    <!-- Crown Crest Plume 1 - Center Tall (Primary Fill) -->
    <path class="primary-path" d="
      M 0, -145
      C 2, -170 8, -202 16, -225
      C 19, -232 23, -230 21, -222
      C 14, -195 8, -165 4, -140
      Z" />

    <!-- Crown Crest Plume 2 - Left Arch (Sage Green) -->
    <path class="sage-path" d="
      M -2, -142
      C -8, -165 -20, -192 -36, -212
      C -41, -218 -36, -222 -31, -217
      C -18, -198 -8, -170 -1, -140
      Z" />

    <!-- Crown Crest Plume 3 - Right Whispering Accent (Dusty Blue) -->
    <path class="blue-path" d="
      M 3, -140
      C 10, -160 24, -182 40, -198
      C 44, -202 47, -198 44, -194
      C 32, -178 18, -158 5, -136
      Z" />

    <!-- Graceful Head in Profile (Upward serene gaze facing upper-right) -->
    <path class="primary-path" d="
      M -7, -135
      C -7, -148 4, -154 14, -150
      C 22, -146 32, -140 42, -136
      C 47, -134 46, -130 40, -128
      C 30, -125 24, -120 20, -110
      C 14, -98 8, -88 4, -78
      C -1, -80 -5, -88 -7, -100
      C -8, -115 -8, -128 -7, -135
      Z" />

    <!-- Eye of Awareness (Micro Negative Space) -->
    <circle cx="8" cy="-138" r="2.2" fill="${isDark ? navy : softWhite}" />

    <!-- Inner Heart Luminary Spheres (Inner Transformation Core) -->
    <circle cx="0" cy="-5" r="4" class="olive-path" />
    <circle cx="0" cy="18" r="3" class="blue-path" />
    <circle cx="0" cy="38" r="2.2" class="sage-path" />

    <!-- ==================== TAIL PLUMAGE & BOTANICAL ROOTS ==================== -->
    
    <!-- Central Spine Plume (Primary Fill) -->
    <path class="primary-path" d="
      M 0, 115
      C 2, 145 4, 185 2, 235
      C 1, 245 -1, 245 -2, 235
      C -4, 185 -2, 145 0, 115
      Z" />

    <!-- Outer Left Tail Plume (Sage Green - Laurel Sweep) -->
    <path class="sage-path" d="
      M -3, 118
      C -15, 150 -35, 195 -65, 230
      C -72, 238 -78, 234 -73, 226
      C -48, 190 -25, 148 -6, 118
      Z" />

    <!-- Outer Right Tail Plume (Sage Green - Laurel Sweep) -->
    <path class="sage-path" d="
      M 3, 118
      C 15, 150 35, 195 65, 230
      C 72, 238 78, 234 73, 226
      C 48, 190 25, 148 6, 118
      Z" />

    <!-- Inner Left Tail Plume (Dusty Blue) -->
    <path class="blue-path" d="
      M -2, 122
      C -10, 155 -22, 195 -40, 232
      C -44, 240 -50, 236 -46, 230
      C -30, 195 -16, 156 -4, 122
      Z" />

    <!-- Inner Right Tail Plume (Dusty Blue) -->
    <path class="blue-path" d="
      M 2, 122
      C 10, 155 22, 195 40, 232
      C 44, 240 50, 236 46, 230
      C 30, 195 16, 156 4, 122
      Z" />

    <!-- Botanical Sprout Leaves at Tail Base (Olive - Clinical Nutrition & Earth) -->
    <path class="olive-path" d="
      M 0, 140
      C -22, 146 -48, 162 -62, 182
      C -67, 189 -58, 192 -51, 185
      C -34, 168 -15, 152 0, 140
      Z" />
    <path class="olive-path" d="
      M 0, 140
      C 22, 146 48, 162 62, 182
      C 67, 189 58, 192 51, 185
      C 34, 168 15, 152 0, 140
      Z" />

    <!-- Anchor Spheres -->
    <circle cx="0" cy="245" r="4" class="sage-path" />
    <circle cx="-68" cy="235" r="3" class="blue-path" />
    <circle cx="68" cy="235" r="3" class="blue-path" />
  </g>
</svg>`;
}

fs.writeFileSync('c:/Users/ou/Desktop/Portfolio/assets/brand/dr-alaa-mahdy-symbol-phoenix.svg', createPhoenixSvg({ isDark: false }));
fs.writeFileSync('c:/Users/ou/Desktop/Portfolio/assets/brand/dr-alaa-mahdy-symbol-phoenix-dark.svg', createPhoenixSvg({ isDark: true }));
console.log('Generated standalone phoenix SVGs successfully!');
