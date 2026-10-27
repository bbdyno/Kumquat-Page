// Decorative art. Colors come from CSS classes (see `.parcel` in site.css) so it follows light and dark mode;
// scripts/og.mjs and scripts/readme-art.mjs inline their own fills.

// A parcel tightly wrapped in clear film with one blue band: the brand mark drawn large for the hero arch.
export function parcelArt() {
  return `<svg class="parcel" viewBox="0 0 400 440" aria-hidden="true" focusable="false">
  <ellipse class="floor" cx="200" cy="384" rx="156" ry="16"/>
  <rect class="box" x="70" y="120" width="260" height="248" rx="42"/>
  <path class="box-side" d="M70 312h260v14a42 42 0 0 1-42 42H112a42 42 0 0 1-42-42z"/>
  <rect class="band" x="168" y="120" width="64" height="248"/>
  <rect class="band-edge" x="226" y="120" width="6" height="248"/>
  <rect class="film" x="63" y="113" width="274" height="262" rx="48"/>
  <path class="pinch" d="M80 158c5-15 15-27 29-34M320 158c-5-15-15-27-29-34M80 330c5 15 15 27 29 34M320 330c-5 15-15 27-29 34M150 115c6 5 12 7 18 7M250 115c-6 5-12 7-18 7"/>
  <path class="shine" stroke-width="11" opacity="0.5" d="M98 176c9-25 29-42 56-49"/>
  <path class="shine" stroke-width="4" opacity="0.7" d="M100 214c2-9 5-17 10-24"/>
  <path class="shine" stroke-width="5" opacity="0.45" d="M304 308c-6 17-19 30-36 37"/>
</svg>`;
}
