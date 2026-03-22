console.log('Chai engine loaded');
import { paddingStyles } from './padding.js';
import { marginStyles } from './margin.js';
import { fontStyles } from './font.js';
import { fontWeightStyles } from './fontWeight.js';
import { colorStyles, colors } from './color.js';
import { sizeStyles } from './size.js';
import { displayStyles, displayValues } from './display.js';
import { flexStyles, flexValues, justifyValues, alignValues } from './flex.js';
import { borderStyles } from './border.js';

(function () {
  const styleMap = {
    ...paddingStyles,
    ...marginStyles,
    ...fontStyles,
    ...fontWeightStyles,
    ...colorStyles,
    ...sizeStyles,
    ...displayStyles,
    ...flexStyles,
    ...borderStyles,
  };

  //  smarter value handler
  function applyValue(value, unit) {
    // already has unit (rem, %, vh, etc.)
    if (/[a-z%]+$/i.test(value)) return value;

    // no unit needed
    if (unit === false) return value;

    // default px
    return value + (unit || 'px');
  }

  const allElements = document.querySelectorAll('*');

  allElements.forEach((el) => {
    el.classList.forEach((cls) => {
      if (!cls.startsWith('chai-')) return;

      const raw = cls.replace('chai-', '');
      const parts = raw.split('-');

      const key = parts[0];
      const value = parts.slice(1).join('-');

      if (!styleMap[key]) return;
      if (!value) return;

      const { props, unit } = styleMap[key];

      props.forEach((prop) => {
        //  COLOR SYSTEM
        if (key === 'text' || key === 'bg' || key === 'bc') {
          const colorParts = value.split('-');

          const colorName = colorParts[0];
          const shade = colorParts[1];

          const colorGroup = colors[colorName];
          if (!colorGroup) return;

          const finalColor = shade ? colorGroup[shade] : colorGroup[500];

          if (!finalColor) return;

          el.style[prop] = finalColor;
          return;
        }

        //  DISPLAY
        if (key === 'd') {
          const display = displayValues[value];
          if (!display) return;

          el.style[prop] = display;
          return;
        }

        //  FLEX DIRECTION
        if (key === 'flex') {
          const dir = flexValues[value];
          if (!dir) return;

          el.style[prop] = dir;
          return;
        }

        //  JUSTIFY CONTENT
        if (key === 'jc') {
          const jc = justifyValues[value];
          if (!jc) return;

          el.style[prop] = jc;
          return;
        }

        //  ALIGN ITEMS
        if (key === 'ai') {
          const ai = alignValues[value];
          if (!ai) return;

          el.style[prop] = ai;
          return;
        }
        // border
        if (key === 'border') {
          el.style.borderStyle = 'solid';
        }

        // DEFAULT HANDLER
        el.style[prop] = applyValue(value, unit);
      });
    });
  });
})();
