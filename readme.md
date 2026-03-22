# ☕ Bharat Tailwind

A lightweight **runtime utility-first CSS engine** inspired by Tailwind CSS — but powered entirely by JavaScript.

No CSS files. No build step required.  
Just use utility classes directly in your HTML.

---

## Features

- Runtime styling (no CSS file needed)
- Utility-first classes (Tailwind-like syntax)
- Color system with shades (e.g. `blue-500`)
- Spacing utilities (padding, margin)
- Typography support (font size, weight)## 🧠 Project Approach

- Started by understanding how utility-first CSS frameworks like Tailwind work
- Designed a custom class naming system using a prefix (`chai-*`)
- Built a parser to read class names from DOM elements
- Extracted utility type (like padding, margin, etc.) and values from class strings
- Created modular style configuration files for scalability (padding, margin, font, color)
- Applied styles dynamically using JavaScript (`element.style`)
- Implemented a color system with shades (e.g., `blue-500`)
- Bundled the project using Rollup to generate a single file for CDN usage
- Prepared the project for npm publishing and CDN distribution
- CDN + npm support

---

## Installation

### Using npm

```bash
npm install bharat-tailwind
```

### Using CDN
```bash
<script src="https://cdn.jsdelivr.net/npm/bharat-tailwind/dist/chai.js"></script>
```

### Usage
**HTML Example**
```bash
<div class="chai-p-20 chai-bg-blue-500 chai-text-white chai-fs-20 chai-fw-700">
  Hello Bharat Tailwind
</div>
```
### Supported Utilites

- **`Spacing`**
- **`Margin`**
- **`Padding`**
- **`Text Color`**
- **`Background Color`**
- **`Typography - Font Size & Font Weight`**

### 1. Spacing
```bash
chai-p-10     → padding: 10px
chai-pt-10    → padding-top
chai-pb-10    → padding-bottom
chai-pl-10    → padding-left
chai-pr-10    → padding-right
chai-px-10    → left + right
chai-py-10    → top + bottom
```
### 2. Margin
```bash
chai-m-10
chai-mt-10
chai-mb-10
chai-ml-10
chai-mr-10
chai-mx-10
chai-my-10
```
### 3. Typography - Font Size
```bash
chai-fs-16     → font-size: 16px
chai-fs-2rem   → custom unit
```

### 4. Typography - Font Weight
```bash
chai-fw-400
chai-fw-700
chai-fw-900
```

### 5. Colors
```bash
chai-text-red
chai-text-blue
chai-text-gray
```

### 6. Background Color
```bash
chai-bg-blue
chai-bg-red
chai-bg-gray
```

### Color Shades
```bash
chai-text-blue-50
chai-text-blue-100
...
chai-text-blue-700
```

## How it works ?
 - Scans DOM for `chai-` classes
 - Parses class names
 - Apllies styles directly via JavaScript (`element.style`)
 - No CSS file is generated


## Socials

* **Website:** [kousikchowdhury.in](https://kousikchowdhury.in)
* **X (Twitter):** [@csakoushik](https://x.com/csakoushik)
* **GitHub:** [koushik-chowdhury](https://github.com/koushik-chowdhury)