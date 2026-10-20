// Sample document for the redaction before/after slider. Fake data only.

export function maskIllustration() {
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
  return [docLines(false), docLines(true)];
}
