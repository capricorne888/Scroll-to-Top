<p align="center">
  <img src="http://checkthese.com/img/IMG_0160.PNG?2" alt="Capricorne888" width="200" height="200">
</p>

# Scroll-to-Top Button

This repository contains a simple JavaScript implementation of a "Scroll-to-Top" button. The button appears when the user scrolls down a webpage and allows them to smoothly scroll back to the top with a single click.

## Features

- **Smooth Scrolling:** Provides a smooth scrolling effect when navigating back to the top of the page.
- **Auto-Hide Button:** The button only appears when the user scrolls down, keeping the interface clean.
- **Customizable Design:** Easily modify the button's appearance using CSS.

## Installation

To use this script in your project, simply include it in your HTML file:

```html
<script src="path/to/scroll-to-top.js"></script>
```

Alternatively, you can copy and paste the JavaScript code directly into your project.

## Usage

1. **Include the Script:**
   - Add the script to your HTML file as shown in the Installation section.

2. **Customize (Optional):**
   - You can modify the button's style by editing the CSS properties in the script.

## Code Explanation

The script dynamically creates a button element with an up arrow symbol. It positions this button at the bottom-right corner of the viewport and adds an event listener for click events to smoothly scroll back to the top of the page. The button is initially hidden and only becomes visible when the user scrolls down 20 pixels or more.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue if you have any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project was inspired by common UI patterns found on modern websites that improve user experience by providing quick navigation options.

### Additional Notes:
- Replace `"path/to/scroll-to-top.js"` with the actual path where you store your JavaScript file.
