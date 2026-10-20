// Original vector illustrations for the AI before/after slider. Sample data only.

export function aiIllustrations() {
  // A ceramic vase with a kumquat branch, lit from the left.
  const defs = `<defs><pattern id="chk" width="28" height="28" patternUnits="userSpaceOnUse"><rect width="28" height="28" fill="#f3eee6"/><rect width="14" height="14" fill="#ddd5c9"/><rect x="14" y="14" width="14" height="14" fill="#ddd5c9"/></pattern><linearGradient id="wall" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e9ddcc"/><stop offset="1" stop-color="#c9b39a"/></linearGradient><linearGradient id="vase" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fbf5ec"/><stop offset=".55" stop-color="#e7dccd"/><stop offset="1" stop-color="#b9a68f"/></linearGradient><radialGradient id="fruit" cx="35%" cy="30%" r="70%"><stop offset="0" stop-color="#ffb35e"/><stop offset="1" stop-color="#e2550f"/></radialGradient></defs>`;
  const fruit = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#fruit)"/><ellipse cx="${x - r * 0.35}" cy="${y - r * 0.4}" rx="${r * 0.28}" ry="${r * 0.16}" fill="#fff" opacity=".45"/>`;
  const leaf = (x, y, rot, s = 1) => `<path transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" d="M0 0c14-18 44-22 62-8-16 18-44 22-62 8z" fill="#4f7a3a"/>`;
  const stillLife = `<g><path d="M392 250c-6-70 10-130 40-176M398 206c-30-40-70-58-112-60M410 160c34-26 76-34 116-22" fill="none" stroke="#5b4030" stroke-width="5" stroke-linecap="round"/>${leaf(432, 80, -30)}${leaf(290, 150, 160, 0.9)}${leaf(520, 132, -10, 0.9)}${leaf(360, 120, 200, 0.8)}${leaf(470, 104, 20, 0.7)}${fruit(440, 92, 17)}${fruit(300, 156, 16)}${fruit(526, 146, 18)}${fruit(350, 132, 14)}${fruit(482, 130, 13)}<path d="M350 250h96c10 0 14 8 12 18l-6 40c26 26 40 60 40 96 0 46-30 80-94 80s-94-34-94-80c0-36 14-70 40-96l-6-40c-2-10 2-18 12-18z" fill="url(#vase)"/><ellipse cx="398" cy="252" rx="48" ry="7" fill="#d8cab7"/></g>`;
  const bgBefore = `<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">${defs}<rect width="800" height="500" fill="url(#wall)"/><path d="M0 0h260l300 500H0z" fill="#fff" opacity=".18"/><rect y="470" width="800" height="30" fill="#b59d83"/><ellipse cx="420" cy="486" rx="150" ry="10" fill="#000" opacity=".15"/>${stillLife}</svg>`;
  const bgAfter = `<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">${defs}<rect width="800" height="500" fill="url(#chk)"/>${stillLife}</svg>`;
  const scene = (blur) => `<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice"><defs><filter id="px${blur}"><feGaussianBlur stdDeviation="${blur}"/></filter><linearGradient id="dusk${blur}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a1a12"/><stop offset=".55" stop-color="#e0662a"/><stop offset="1" stop-color="#f8cf98"/></linearGradient></defs><g filter="url(#px${blur})"><rect width="800" height="500" fill="url(#dusk${blur})"/><circle cx="400" cy="300" r="70" fill="#ffe1a8"/><path d="M0 360l120-70 90 40 150-110 140 90 120-60 180 100v150H0z" fill="#4a2a1c"/><path d="M0 420l160-50 140 30 180-70 160 50 160-30v150H0z" fill="#24150e"/>${Array.from({ length: 22 }, (_, i) => `<circle cx="${(i * 37 + 20) % 800}" cy="${(i * 53) % 160 + 20}" r="${(i % 3) + 1}" fill="#fff" opacity=".8"/>`).join('')}</g></svg>`;
  const docLines = (masked) => {
    const rows = [
      ['성명 / Name', '홍길동', false],
      ['주민등록번호 / ID No.', masked ? '██████-███████' : '900101-1234567', true],
      ['연락처 / Phone', masked ? '010-████-████' : '010-1234-5678', true],
      ['이메일 / Email', masked ? '█████@█████.com' : 'gildong@example.com', true],
      ['주소 / Address', '서울시 예시구 예시로 12', false],
    ];
    return `<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice"><rect width="800" height="500" fill="#e9e4dc"/><rect x="110" y="40" width="580" height="440" rx="10" fill="#fffdf9" stroke="#d8d0c4"/><text x="150" y="96" font-family="-apple-system, sans-serif" font-size="22" font-weight="700" fill="#1b1712">신청서 / Application (sample)</text><rect x="150" y="114" width="500" height="2" fill="#f2661b"/>${rows
      .map(([k, v, s], i) => `<text x="150" y="${178 + i * 62}" font-family="-apple-system, sans-serif" font-size="14" fill="#857b6f">${k}</text><text x="410" y="${178 + i * 62}" font-family="ui-monospace, Menlo, monospace" font-size="18" fill="#1b1712">${v}</text>${masked && s ? `<rect x="402" y="${157 + i * 62}" width="${v.length * 10.9 + 16}" height="30" rx="5" fill="none" stroke="#f2661b" stroke-width="1.5"/>` : ''}<rect x="150" y="${198 + i * 62}" width="500" height="1" fill="#eee7dd"/>`)
      .join('')}</svg>`;
  };
  return {
    bg: [bgBefore, bgAfter],
    up: [scene(6), scene(0)],
    mask: [docLines(false), docLines(true)],
  };
}
