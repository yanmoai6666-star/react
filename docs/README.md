# React Mini Documentation

## Overview

React Mini is a simplified implementation of React core concepts, designed to help developers understand the fundamental principles behind React's architecture.

## Features

- React core functionality (createElement, Component, PureComponent)
- React DOM rendering (render, createRoot, unmountComponentAtNode)
- Event system with Synthetic Events
- Basic hooks support
- Simple reconciler implementation
- Component library (Button, Input, Modal)

## Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd react-mini

# Install dependencies
npm install

# Start the development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

### Basic Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello, React Mini!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## Project Structure

```
react-mini/
├── src/
│   ├── react/             # React core implementation
│   ├── react-dom/         # React DOM implementation
│   ├── react-reconciler/  # Reconciler implementation
│   ├── events/            # Event system
│   ├── shared/            # Shared utilities
│   └── components/        # UI components
├── __tests__/             # Test files
├── docs/                  # Documentation
├── public/                # Public assets
├── package.json           # Project configuration
└── webpack.config.js      # Webpack configuration
```

## License

MIT