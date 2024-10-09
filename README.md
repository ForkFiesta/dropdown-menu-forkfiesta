# Dropdown Menu Library

A lightweight, reusable JavaScript library for creating simple dropdown menus. Easily add dropdown functionality to your website with minimal setup. This package is designed to handle multiple dropdowns on a single page and allows for customization of styles and behavior.

## Features

- Simple click-based dropdown toggle.
- Supports multiple dropdowns on the same page.
- Easy to integrate and customize.
- Lightweight, with no dependencies.

## Installation

Install via npm:

```bash
npm install dropdown-menu
```

Or, if using yarn:

```bash
yarn add dropdown-menu
```

## Usage

### 1. Include HTML Structure

Add the following structure to your HTML file. Each dropdown should include a button and a content container.

```html
<div class="dropdown">
  <button class="dropdown-button">Menu</button>
  <div class="dropdown-content">
    <a href="#item1">Item 1</a>
    <a href="#item2">Item 2</a>
    <a href="#item3">Item 3</a>
  </div>
</div>
```

### 2. Initialize the Dropdown in JavaScript

Import and initialize the dropdown in your JavaScript file:

```javascript
import { createDropdown } from "dropdown-menu";

// Initialize dropdowns by passing the button and content class selectors
createDropdown(".dropdown-button", ".dropdown-content");
```

### 3. Add Basic Styles

For the dropdown to function correctly, you need to style it. You can start with the following CSS:

```css
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}
```

## Customization

You can customize the dropdown appearance and behavior:

- **CSS Styles**: Modify the `.dropdown-button` and `.dropdown-content` classes to change the appearance.
- **JavaScript Parameters**: Update the selectors passed to `createDropdown()` if you are using different class names.

## Example

```html
<!-- HTML -->
<div class="dropdown">
  <button class="dropdown-button">Options</button>
  <div class="dropdown-content">
    <a href="#option1">Option 1</a>
    <a href="#option2">Option 2</a>
    <a href="#option3">Option 3</a>
  </div>
</div>

<!-- JavaScript -->
<script>
  import { createDropdown } from "dropdown-menu";

  createDropdown(".dropdown-button", ".dropdown-content");
</script>
```

## License

This project is licensed under the MIT License.
