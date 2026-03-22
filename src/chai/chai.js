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

  function applyValue(value, unit) {
    if (/[a-z%]+$/i.test(value)) return value;
    if (unit === false) return value;
    return value + (unit || 'px');
  }

  function run() {
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
          // COLORS
          if (key === 'text' || key === 'bg' || key === 'bc') {
            const [colorName, shade] = value.split('-');
            const colorGroup = colors[colorName];
            if (!colorGroup) return;

            const finalColor = shade ? colorGroup[shade] : colorGroup[500];

            if (!finalColor) return;

            el.style[prop] = finalColor;
            return;
          }

          // DISPLAY
          if (key === 'd') {
            const display = displayValues[value];
            if (!display) return;
            el.style[prop] = display;
            return;
          }

          // FLEX
          if (key === 'flex') {
            const dir = flexValues[value];
            if (!dir) return;
            el.style[prop] = dir;
            return;
          }

          if (key === 'jc') {
            const jc = justifyValues[value];
            if (!jc) return;
            el.style[prop] = jc;
            return;
          }

          if (key === 'ai') {
            const ai = alignValues[value];
            if (!ai) return;
            el.style[prop] = ai;
            return;
          }

          // BORDER FIX
          if (key === 'border') {
            el.style.borderStyle = 'solid';
          }

          // DEFAULT
          el.style[prop] = applyValue(value, unit);
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
