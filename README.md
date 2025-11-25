# Webflow Component – Progress Bar

A lightweight, reusable, and embeddable Progress Bar component designed for Webflow and general frontend projects. This component can be used in landing pages, banners, Webflow custom code blocks, static sites, or React-based applications.

## Features

- Reusable and lightweight UI component  
- Works with or without React  
- Distributed as JSX and a single browser-ready bundle  
- Easy embedding inside Webflow  
- Customizable value, color, size, and animation  
- Fully styleable using CSS

## Project Structure

/
├── ProgressBar.jsx         # Source component
├── progressbar.bundle.js   # Compiled UMD bundle for browser use
├── build.js                # Build script
├── package.json            # Project config & dependencies
└── README.md

## Getting Started

### Clone the repository

git clone https://github.com/Manmohan2526/Webflow_Component.git
cd Webflow_Component

## Using in a React Project

Install dependencies:

npm install

Import and use:

import ProgressBar from "./ProgressBar";

<ProgressBar 
  value={60} 
  max={100}
  height="8px" 
  color="#007bff" 
/>

## Using in Webflow

### Step 1: Include the Script

Upload `progressbar.bundle.js` to a CDN, server, or raw GitHub link:

<script src="YOUR_BUNDLE_URL"></script>

### Step 2: Add a container

<div id="progress-element"></div>

### Step 3: Initialize the component

<script>
  new ProgressBar("#progress-element", {
    value: 75,
    max: 100,
    color: "#00a86b",
    height: "6px"
  });
</script>

## Component Options

Property | Type | Default | Description
---|---|---|---
value | number | 0 | Current progress value
max | number | 100 | Maximum progress value
color | string | #007bff | Bar color
height | string | 6px | Height of the bar
animated | boolean | true | Enables smooth transition

## Example CSS

.progress-container {
  background-color: #e5e5e5;
  border-radius: 4px;
  width: 100%;
}

.progress-bar {
  transition: width 0.4s ease-in-out;
}

## Development

### Build the bundle

node build.js  
or  
npm run build

Regenerates `progressbar.bundle.js`.

## Roadmap

- Add Jest tests  
- Provide Storybook demos  
- Optional GSAP/advanced animation support  
- Add npm publishing  
- Add TypeScript support

## License

MIT License – free to use, modify, and distribute.

## Contributing

1. Fork the repository  
2. Create a feature branch  
3. Commit changes  
4. Open a pull request
