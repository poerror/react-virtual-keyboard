const keyCodes = {
  0: "That key has no keycode",
  3: "break",
  8: {
    default: 'delete'
  },
  9: {
    name: 'tab',
    default: '\t'
  },
  12: 'clear',
  13: {
    name: 'enter',
    default: '\n'
  },
  16: {
    default: 'shift',
    shift: 'shift'
  },
  17: {
    default: 'ctrl',
    ctrl: 'ctrl'
  },
  18: {
    default: 'alt',
    alt: 'alt'
  },
  19: "pause/break",
  20: {
    default: 'capslock',
    capslock: 'capslock'
  },
  21: "hangul",
  25: "hanja",
  27: {
    default: 'esc'
  },
  28: "conversion",
  29: "non-conversion",
  32: {
    name: 'spacebar',
    default: ' '
  },
  33: "page up",
  34: "page down",
  35: "end",
  36: "home",
  37: {
    // left arrow
    default: '◀'
  },
  38: {
    // up arrow
    default: '▲'
  },
  39: {
    // right arrow
    default: '▶'
  },
  40: {
    // down arrow
    default: '▼'
  },
  41: "select",
  42: "print",
  43: "execute",
  44: "Print Screen",
  45: "insert",
  46: "delete",
  47: "help",
  48: {
    default: '0',
    shift: ')',
    alt: 'º'
  },
  49: {
    default: '1',
    shift: '!',
    alt: '¡'
  },
  50: {
    default: '2',
    shift: '@',
    alt: '™'
  },
  51: {
    default: '3',
    shift: '#',
    alt: '£'
  },
  52: {
    default: '4',
    shift: '$',
    alt: '¢'
  },
  53: {
    default: '5',
    shift: '%',
    alt: '∞'
  },
  54: {
    default: '6',
    shift: '^',
    alt: '§'
  },
  55: {
    default: '7',
    shift: '&',
    alt: '¶'
  },
  56: {
    default: '8',
    shift: '*',
    alt: '•'
  },
  57: {
    default: '9',
    shift: '(',
    alt: 'ª'
  },
  58: ":",
  59: "semicolon (firefox), equals",
  60: "<",
  61: "equals (firefox)",
  63: "ß",
  64: "@ (firefox)",
  65: {
    default: 'a',
    capslock: 'A',
    shift: 'A',
    alt: 'å'
  },
  66: {
    default: 'b',
    capslock: 'B',
    shift: 'B',
    alt: '∫'
  },
  67: {
    default: 'c',
    capslock: 'C',
    shift: 'C',
    alt: 'ç'
  },
  68: {
    default: 'd',
    capslock: 'D',
    shift: 'D',
    alt: '∂'
  },
  69: {
    default: 'e',
    capslock: 'E',
    shift: 'E',
    alt: '´'
  },
  70: {
    default: 'f',
    capslock: 'F',
    shift: 'F',
    alt: 'ƒ'
  },
  71: {
    default: 'g',
    capslock: 'G',
    shift: 'G',
    alt: '©'
  },
  72: {
    default: 'h',
    capslock: 'H',
    shift: 'H',
    alt: '˙'
  },
  73: {
    default: 'i',
    capslock: 'I',
    shift: 'I',
    alt: 'ˆ'
  },
  74: {
    default: 'j',
    capslock: 'J',
    shift: 'J',
    alt: '∆'
  },
  75: {
    default: 'k',
    capslock: 'K',
    shift: 'K',
    alt: '˚'
  },
  76: {
    default: 'l',
    capslock: 'L',
    shift: 'L',
    alt: '¬'
  },
  77: {
      default: 'm',
      capslock: 'M',
      shift: 'M',
      alt: 'µ'
  },
  78: {
    default: 'n',
    capslock: 'N',
    shift: 'N',
    alt: '˜'
  },
  79: {
    default: 'o',
    capslock: 'O',
    shift: 'O',
    alt: 'ø'
  },
  80: {
    default: 'p',
    capslock: 'P',
    shift: 'P',
    alt: 'π'
  },
  81: {
    default: 'q',
    capslock: 'Q',
    shift: 'Q',
    alt: 'œ'
  },
  82: {
    default: 'r',
    capslock: 'R',
    shift: 'R',
    alt: '®'
  },
  83: {
    default: 's',
    capslock: 'S',
    shift: 'S',
    alt: 'ß'
  },
  84: {
    default: 't',
    capslock: 'T',
    shift: 'T',
    alt: '†'
  },
  85: {
    default: 'u',
    capslock: 'U',
    shift: 'U',
    alt: '¨'
  },
  86: {
    default: 'v',
    capslock: 'V',
    shift: 'V',
    alt: '√'
  },
  87: {
    default: 'w',
    capslock: 'W',
    shift: 'W',
    alt: '∑'
  },
  88: {
    default: 'x',
    capslock: 'X',
    shift: 'X',
    alt: '≈'
  },
  89: {
    default: 'y',
    capslock: 'Y',
    shift: 'Y',
    alt: '¥'
  },
  90: {
    default: 'z',
    capslock: 'Z',
    shift: 'Z',
    alt: 'Ω'
  },
  91: {
    // Windows Key / Left ⌘ / Chromebook Search key
    default: 'cmd',
    cmd: 'cmd'
  },
  92: "right window key",
  93: {
    // Windows Menu / Right ⌘
    default: 'cmd'
  },
  95: "sleep",
  96: {
    default: '0',
  },
  97: {
    default: '1',
  },
  98: {
    default: '2',
  },
  99: {
    default: '3',
  },
  100: {
    default: '4',
  },
  101: {
    default: '5',
  },
  102: {
    default: '6',
  },
  103: {
    default: '7',
  },
  104: {
    default: '8',
  },
  105: {
    default: '9',
  },
  106: "multiply",
  107: "add",
  108: "numpad period (firefox)",
  109: "subtract",
  110: "decimal point",
  111: "divide",
  112: "f1",
  113: "f2",
  114: "f3",
  115: "f4",
  116: "f5",
  117: "f6",
  118: "f7",
  119: "f8",
  120: "f9",
  121: "f10",
  122: "f11",
  123: "f12",
  124: "f13",
  125: "f14",
  126: "f15",
  127: "f16",
  128: "f17",
  129: "f18",
  130: "f19",
  131: "f20",
  132: "f21",
  133: "f22",
  134: "f23",
  135: "f24",
  144: "num lock",
  145: "scroll lock",
  160: "^",
  161: '!',
  163: "#",
  164: '$',
  165: 'ù',
  166: "page backward",
  167: "page forward",
  168: "refresh",
  169: "closing paren (AZERTY)",
  170: '*',
  171: "~ + * key",
  172: "home key",
  173: "minus (firefox), mute/unmute",
  174: "decrease volume level",
  175: "increase volume level",
  176: "next",
  177: "previous",
  178: "stop",
  179: "play/pause",
  180: "e-mail",
  181: "mute/unmute (firefox)",
  182: "decrease volume level (firefox)",
  183: "increase volume level (firefox)",
  186: {
    default: ';',
    capslock: ':',
    shift: ':',
    alt: '…'
  },
  187: {
    default: '=',
    shift: '+',
    alt: '≠'
  },
  188: {
    default: ',',
    capslock: '<',
    shift: '<',
    alt: '≤'
  },
  189: {
    default: '-',
    shift: '_',
    alt: '–'
  },
  190: {
    default: '.',
    capslock: '>',
    shift: '>',
    alt: '≥'
  },
  191: {
    default: "/",
    capslock: '?',
    shift: '?',
    alt: '÷'
  },
  192: {
    default: '§',
    shift: '±',
    ctrl: '0',
  },
  193: "?, / or °",
  194: "numpad period (chrome)",
  219: {
    default: '[',
    capslock: '{',
    shift: '{',
    alt: '“'
  },
  220: {
    default: '\\',
    capslock: '|',
    shift: '|',
    alt: '«'
  },
  221: {
    default: ']',
    capslock: '}',
    shift: '}',
    alt: '‘'
  },
  222: {
    default: "'",
    capslock: '"',
    shift: '"',
    alt: 'æ'
  },
  223: "`",
  224: "left or right ⌘ key (firefox)",
  225: "altgr",
  226: "< /git >, left back slash",
  230: "GNOME Compose Key",
  231: "ç",
  233: "XF86Forward",
  234: "XF86Back",
  240: "alphanumeric",
  242: "hiragana/katakana",
  243: "half-width/full-width",
  244: "kanji",
  255: "toggle touchpad",
  'pwr': {
    default: 'pwr'
  },
  'fn': {
    default: 'fn'
  }
}

export default keyCodes;
