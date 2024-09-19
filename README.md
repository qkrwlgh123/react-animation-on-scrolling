# React animation on scrolling

React library for applying animations based on scroll position using Intersection Observer. Easily trigger animations as elements enter the viewport, with customizable options for timing and animation types.

<img src="https://badgen.net/badge/minzipped size/0.99KB" alt="minzipped size">

## Installation

```
npm i react-animation-on-scrolling
```

## Usage

### React Component

```jsx
import React from "react";
import useAnimationOnVisible from "react-animation-on-scrolling";

const MyComponent = () => {
  // Define the animation class name
  const animationClass = "fade-in";

  // Use the hook with the animation class and optional options
  const ref = useAnimationOnVisible(animationClass, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
    once: true,
  });

  return (
    <div>
      <h1>Scroll down to see the animation</h1>

      {/** The animation is applied to this div box. */}
      <div
        className="box"
        ref={ref}
        style={{ height: "200px", background: "lightblue", margin: "1000px 0" }}
      >
        <p>This element will animate when it comes into view.</p>
      </div>
    </div>
  );
};

export default MyComponent;
```

### Style

```jsx
/* Add your CSS for the animation here */
.box {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.fade-in {
  opacity: 1;
}
```

## Options

The `useAnimationOnVisible` hook accepts an `options` object to customize its behavior. Here are the available options:

- **`root`** (`Element | null`):  
  The element to use as the viewport for checking visibility. If `null`, the default viewport (i.e., the browser window) is used.

- **`rootMargin`** (`string`):  
  Margin around the root element. Can be used to grow or shrink the bounding box of the root. For example, `"0px 0px -50px 0px"`.

- **`threshold`** (`number | number[]`):  
  A single number or an array of numbers indicating the percentage of the target's visibility required to trigger the animation. For example, 0.5 means 50% visibility. Using an array allows specifying multiple visibility thresholds.

- **`once`** (`boolean`):  
  If `true`, the animation will only trigger once when the element comes into view for the first time. If `false`, the animation will trigger every time the element comes into view.

## Release Notes

- **v1.0.0**: Initial feature implementation
- **v1.0.1**: Added README
- **v1.0.2**: Added Keywords in README
- **v1.0.3**: Update usage example in README
- **v1.0.4**: Updated package.json for TypeScript support

## License

[MIT](https://mit-license.org/)
