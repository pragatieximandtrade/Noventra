import React from 'react';

/**
 * FootnoteSup
 * Renders small, crisp, beautiful superscript icons for footnote markers:
 * 1 (or ¹), †, ‡, ††, *
 * Styled in Noventra's luxury gold and emerald palette.
 */
export function FootnoteSup({ mark, className = '', isDark = false }) {
  const goldColor = isDark ? 'text-amber-300' : 'text-[#a87d15]';
  const greenColor = isDark ? 'text-emerald-300' : 'text-noventra-leaf';
  const mutedColor = isDark ? 'text-noventra-sand-300/80' : 'text-gray-500';

  if (mark === '1' || mark === '¹') {
    return (
      <sup
        className={`text-[0.62em] font-bold ml-0.5 select-none align-super inline-block leading-none ${goldColor} ${className}`}
      >
        1
      </sup>
    );
  }
  if (mark === '†') {
    return (
      <sup
        className={`text-[0.62em] font-bold ml-0.5 select-none align-super inline-block leading-none ${goldColor} ${className}`}
      >
        †
      </sup>
    );
  }
  if (mark === '‡') {
    return (
      <sup
        className={`text-[0.62em] font-bold ml-0.5 select-none align-super inline-block leading-none ${goldColor} ${className}`}
      >
        ‡
      </sup>
    );
  }
  if (mark === '††') {
    return (
      <sup
        className={`text-[0.62em] font-bold ml-0.5 select-none align-super inline-block leading-none ${goldColor} ${className}`}
      >
        ††
      </sup>
    );
  }
  if (mark === '*') {
    return (
      <sup
        className={`text-[0.62em] font-bold ml-0.5 select-none align-super inline-block leading-none ${mutedColor} ${className}`}
      >
        *
      </sup>
    );
  }
  return (
    <sup
      className={`text-[0.62em] font-bold ml-0.5 select-none align-super inline-block leading-none ${className}`}
    >
      {mark}
    </sup>
  );
}

/**
 * Helper to parse any text string containing footnote symbols and replace them with FootnoteSup
 */
export function renderWithFootnotes(text, isDark = false) {
  if (!text || typeof text !== 'string') return text;
  const parts = text.split(/(††|†|‡|¹|\*)/g);
  if (parts.length === 1) return text;
  return parts.map((part, index) => {
    if (part === '††' || part === '†' || part === '‡' || part === '¹' || part === '*') {
      return <FootnoteSup key={index} mark={part} isDark={isDark} />;
    }
    return part;
  });
}

export default FootnoteSup;
