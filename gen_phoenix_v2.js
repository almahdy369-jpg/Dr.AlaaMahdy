// Refined Phoenix Vector Geometry V2: Sculpted, Botanical & Harmonious
const fs = require('fs');

function createPhoenixSvgV2({ isDark = false, width = 600, height = 600 } = {}) {
  const navy = '#132E42';
  const softWhite = '#FDFDFD';
  const sage = '#9AA78A';
  const dustyBlue = '#AEC0C9';
  const softOlive = '#BDC0A8';

  const primaryFill = isDark ? softWhite : navy;
  const secondaryFill = isDark ? '#E2E8F0' : '#1A3D56';
  const ringStroke = isDark ? 'rgba(189, 192, 168, 0.45)' : '#BDC0A8';
  const subRingStroke = isDark ? 'rgba(253, 253, 253, 0.22)' : 'rgba(19, 46, 66, 0.2)';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="${width}" height="${height}">
  <defs>
    <style>
      .ring { fill: none; stroke: ${ringStroke}; stroke-width: 1.5; stroke-dasharray: 4 6; opacity: 0.5; }
      .hairline { fill: none; stroke: ${subRingStroke}; stroke-width: 0.8; }
      .primary-path { fill: ${primaryFill}; }
      .secondary-path { fill: ${secondaryFill}; }
      .sage-path { fill: ${sage}; }
      .blue-path { fill: ${dustyBlue}; }
      .olive-path { fill: ${softOlive}; }
    </style>
  </defs>

  <g id="phoenix-symbol" transform="translate(300, 300)">
    <!-- Harmonic Alignment Rings (Nervous System & Inner Equilibrium) -->
    <circle cx="0" cy="-25" r="235" class="ring" />
    <circle cx="0" cy="-25" r="252" class="hairline" />
    
    <!-- Balance Nodes -->
    <circle cx="0" cy="-260" r="4.5" class="sage-path" />
    <circle cx="225" cy="-125" r="3.5" class="blue-path" />
    <circle cx="-225" cy="-125" r="3.5" class="blue-path" />
    <circle cx="252" cy="-25" r="3.5" class="olive-path" />
    <circle cx="-252" cy="-25" r="3.5" class="olive-path" />

    <!-- ==================== WINGS: SCULPTED BOTANICAL LAYERS ==================== -->
    
    <!-- LEFT WING - Layer 1: Soaring Primary Flight Feather (Primary Navy) -->
    <path class="primary-path" d="
      M -15, -45
      C -45, -95 -105, -165 -175, -205
      C -195, -216 -215, -218 -210, -226
      C -202, -236 -175, -222 -140, -185
      C -92, -135 -48, -60 -10, 15
      C -12, -5 -14, -25 -15, -45
      Z" />

    <!-- RIGHT WING - Layer 1: Soaring Primary Flight Feather (Primary Navy) -->
    <path class="primary-path" d="
      M 15, -45
      C 45, -95 105, -165 175, -205
      C 195, -216 215, -218 210, -226
      C 202, -236 175, -222 140, -185
      C 92, -135 48, -60 10, 15
      C 12, -5 14, -25 15, -45
      Z" />

    <!-- LEFT WING - Layer 2: Grace Secondary Feather (Primary Navy) -->
    <path class="primary-path" d="
      M -18, -10
      C -50, -60 -105, -125 -165, -158
      C -182, -167 -196, -168 -190, -176
      C -182, -185 -160, -172 -132, -145
      C -85, -100 -45, -30 -12, 35
      C -15, 20 -17, 5 -18, -10
      Z" />

    <!-- RIGHT WING - Layer 2: Grace Secondary Feather (Primary Navy) -->
    <path class="primary-path" d="
      M 18, -10
      C 50, -60 105, -125 165, -158
      C 182, -167 196, -168 190, -176
      C 182, -185 160, -172 132, -145
      C 85, -100 45, -30 12, 35
      C 15, 20 17, 5 18, -10
      Z" />

    <!-- LEFT WING - Layer 3: Botanical Leaf Feather (Sage Green - Nourishment & Growth) -->
    <path class="sage-path" d="
      M -16, 15
      C -50, -30 -100, -85 -150, -115
      C -166, -124 -178, -124 -172, -131
      C -164, -138 -144, -128 -120, -105
      C -78, -65 -40, -5 -10, 52
      C -13, 40 -15, 28 -16, 15
      Z" />

    <!-- RIGHT WING - Layer 3: Botanical Leaf Feather (Sage Green - Nourishment & Growth) -->
    <path class="sage-path" d="
      M 16, 15
      C 50, -30 100, -85 150, -115
      C 166, -124 178, -124 172, -131
      C 164, -138 144, -128 120, -105
      C 78, -65 40, -5 10, 52
      C 13, 40 15, 28 16, 15
      Z" />

    <!-- LEFT WING - Layer 4: Emotional Serenity Feather (Dusty Blue) -->
    <path class="blue-path" d="
      M -14, 38
      C -42, 5 -82, -40 -124, -68
      C -138, -77 -148, -76 -142, -83
      C -135, -89 -118, -80 -98, -62
      C -62, -28 -32, 18 -8, 68
      C -11, 58 -13, 48 -14, 38
      Z" />

    <!-- RIGHT WING - Layer 4: Emotional Serenity Feather (Dusty Blue) -->
    <path class="blue-path" d="
      M 14, 38
      C 42, 5 82, -40 124, -68
      C 138, -77 148, -76 142, -83
      C 135, -89 118, -80 98, -62
      C 62, -28 32, 18 8, 68
      C 11, 58 13, 48 14, 38
      Z" />

    <!-- LEFT WING - Layer 5: Grounded Warmth Feather (Soft Olive) -->
    <path class="olive-path" d="
      M -10, 58
      C -34, 32 -68, -2 -100, -22
      C -110, -28 -118, -28 -114, -34
      C -108, -39 -94, -32 -78, -18
      C -48, 8 -24, 45 -4, 80
      C -7, 72 -9, 65 -10, 58
      Z" />

    <!-- RIGHT WING - Layer 5: Grounded Warmth Feather (Soft Olive) -->
    <path class="olive-path" d="
      M 10, 58
      C 34, 32 68, -2 100, -22
      C 110, -28 118, -28 114, -34
      C 108, -39 94, -32 78, -18
      C 48, 8 24, 45 4, 80
      C 7, 72 9, 65 10, 58
      Z" />

    <!-- ==================== TORSO & CHEST ==================== -->
    
    <!-- Sculpted Feminine Chest & Slender Waist (Primary Navy) -->
    <path class="primary-path" d="
      M 0, -80
      C -15, -60 -22, -25 -22, 15
      C -22, 50 -12, 85 0, 105
      C 12, 85 22, 50 22, 15
      C 22, -25 15, -60 0, -80
      Z" />

    <!-- Inner Heart Curve / Light of Self-Awareness -->
    <path class="sage-path" d="
      M 0, -30
      C -8, -10 -10, 15 0, 35
      C 10, 15 8, -10 0, -30
      Z" opacity="0.85" />
    
    <circle cx="0" cy="2" r="3.5" class="olive-path" />
    <circle cx="0" cy="55" r="3" class="blue-path" />

    <!-- ==================== HEAD & CROWN CREST ==================== -->
    
    <!-- Crown Crest Feather 1 - High Soaring (Primary Navy) -->
    <path class="primary-path" d="
      M 2, -145
      C 6, -175 16, -212 28, -238
      C 31, -245 35, -242 32, -234
      C 22, -205 12, -172 5, -140
      Z" />

    <!-- Crown Crest Feather 2 - Left Arch (Sage Green) -->
    <path class="sage-path" d="
      M -2, -142
      C -8, -168 -24, -200 -44, -222
      C -49, -228 -44, -232 -38, -226
      C -22, -204 -10, -174 -2, -138
      Z" />

    <!-- Crown Crest Feather 3 - Right Whispering Plume (Dusty Blue) -->
    <path class="blue-path" d="
      M 5, -140
      C 14, -162 32, -188 52, -206
      C 57, -211 60, -206 56, -201
      C 40, -183 24, -160 8, -135
      Z" />

    <!-- Phoenix Head: Noble, Feminine, Gazing Upward to the Right -->
    <path class="primary-path" d="
      M -10, -132
      C -10, -148 4, -156 16, -151
      C 26, -147 38, -140 50, -136
      C 55, -134 54, -130 48, -128
      C 36, -125 28, -120 22, -108
      C 16, -96 10, -84 4, -72
      C -2, -75 -6, -82 -8, -96
      C -11, -112 -10, -125 -10, -132
      Z" />

    <!-- Eye of Clarity -->
    <circle cx="12" cy="-136" r="2.2" fill="${isDark ? navy : softWhite}" />

    <!-- ==================== TAIL PLUMAGE & BOTANICAL ROOTS ==================== -->
    
    <!-- Central Spine Plume (Primary Navy) -->
    <path class="primary-path" d="
      M 0, 105
      C 3, 140 5, 185 2, 238
      C 1, 246 -1, 246 -2, 238
      C -5, 185 -3, 140 0, 105
      Z" />

    <!-- Left Primary Tail Plume (Sage Green - Laurel Frond) -->
    <path class="sage-path" d="
      M -4, 110
      C -18, 145 -42, 195 -75, 232
      C -82, 240 -88, 235 -82, 227
      C -54, 188 -28, 144 -8, 110
      Z" />

    <!-- Right Primary Tail Plume (Sage Green - Laurel Frond) -->
    <path class="sage-path" d="
      M 4, 110
      C 18, 145 42, 195 75, 232
      C 82, 240 88, 235 82, 227
      C 54, 188 28, 144 8, 110
      Z" />

    <!-- Left Secondary Tail Plume (Dusty Blue) -->
    <path class="blue-path" d="
      M -2, 115
      C -12, 150 -28, 195 -48, 234
      C -53, 242 -59, 238 -54, 231
      C -36, 194 -20, 152 -5, 115
      Z" />

    <!-- Right Secondary Tail Plume (Dusty Blue) -->
    <path class="blue-path" d="
      M 2, 115
      C 12, 150 28, 195 48, 234
      C 53, 242 59, 238 54, 231
      C 36, 194 20, 152 5, 115
      Z" />

    <!-- Botanical Sprout Leaves at Base (Soft Olive - Renewal & Nourishment) -->
    <path class="olive-path" d="
      M 0, 130
      C -26, 136 -56, 152 -72, 174
      C -77, 181 -68, 185 -60, 178
      C -40, 160 -18, 144 0, 130
      Z" />
    <path class="olive-path" d="
      M 0, 130
      C 26, 136 56, 152 72, 174
      C 77, 181 68, 185 60, 178
      C 40, 160 18, 144 0, 130
      Z" />

    <!-- Anchor Grounding Spheres -->
    <circle cx="0" cy="248" r="4.5" class="sage-path" />
    <circle cx="-75" cy="236" r="3" class="blue-path" />
    <circle cx="75" cy="236" r="3" class="blue-path" />
  </g>
</svg>`;
}

fs.writeFileSync('c:/Users/ou/Desktop/Portfolio/assets/brand/dr-alaa-mahdy-symbol-phoenix.svg', createPhoenixSvgV2({ isDark: false }));
fs.writeFileSync('c:/Users/ou/Desktop/Portfolio/assets/brand/dr-alaa-mahdy-symbol-phoenix-dark.svg', createPhoenixSvgV2({ isDark: true }));
console.log('Successfully written V2 Phoenix SVG!');
