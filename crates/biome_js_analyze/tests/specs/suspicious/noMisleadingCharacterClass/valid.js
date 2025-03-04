var r = /[👍]/u;
var r = /[\uD83D\uDC4D]/u;
var r = /[\u{1F44D}]/u;
var r = /❇️/;
var r = /Á/;
var r = /[❇]/;
var r = /👶🏻/;
var r = /[👶]/u;
var r = /🇯🇵/;
var r = /[JP]/;
var r = /👨‍👩‍👦/;

// Ignore solo lead/tail surrogate.
var r = /[\uD83D]/;
var r = /[\uDC4D]/;
var r = /[\uD83D]/u;
var r = /[\uDC4D]/u;

// Ignore solo combining char.
var r = /[\u0301]/;
var r = /[\uFE0F]/;
var r = /[\u0301]/u;
var r = /[\uFE0F]/u;

// Ignore solo emoji modifier.
var r = /[\u{1F3FB}]/u;
var r = /[\u{1F3FB}]/u;

// Ignore solo regional indicator symbol.
var r = /[🇯]/u;
var r = /[🇵]/u;

// Ignore solo ZWJ.
var r = /[\u200D]/;
var r = /[\u200D]/u;

// v flag
var r = /[👍]/v;
var r = /^[\q{👶🏻}]$/v;
var r = /[🇯\q{abc}🇵]/v;
var r = /[🇯[A]🇵]/v;
var r = /[🇯[A--B]🇵]/v;

// Issue: https://github.com/biomejs/biome/issues/1522
var cyrillicChars = /[\u200E\u2066-\u2069]/gu;

// Unicode char outside the class
/[a-z]👍/;
/\[👍]/;

// Issue: https://github.com/biomejs/biome/issues/4950
// 1. The hyphen is treated as a range operator in the character class
/[\u0300-\u0302]/;

// 2.The hyphen is treated as literal character in the character class
// This regex is valid, it will match '\u0300' or a literal hyphen '-'
/[\u0300-]/;

// 3. The hyphen is treated as a literal character outside a character class
// This regex will match "\u0300-\u0302"
/\u0300-\u0302/;
