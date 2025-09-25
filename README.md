# VS Code Debug Launch JSON Configurations

This repository provides comprehensive VS Code debug launch configurations and examples for various programming languages and scenarios.

## 🚀 Quick Start

1. Clone this repository
2. Open in VS Code
3. Install dependencies: `npm install`
4. Open the Debug panel (Ctrl+Shift+D / Cmd+Shift+D)
5. Select a configuration and start debugging!

## 📁 Repository Structure

```
├── .vscode/
│   ├── launch.json      # Debug configurations
│   ├── tasks.json       # Build and run tasks
│   └── settings.json    # Debug-specific settings
├── src/
│   ├── app.js          # Node.js Express server example
│   └── main.py         # Python debugging example
├── public/
│   └── index.html      # Frontend with debugging examples
├── tests/
│   └── app.test.js     # Jest test examples
└── package.json        # Node.js dependencies
```

## 🔧 Available Debug Configurations

### Node.js Debugging
- **Launch Node.js Program**: Debug the main application
- **Launch Node.js with Nodemon**: Debug with auto-restart
- **Attach to Node.js Process**: Attach to running process on port 9229

### Python Debugging
- **Launch Python Program**: Debug the main Python script
- **Python: Current File**: Debug the currently open Python file

### Web/Browser Debugging
- **Launch Chrome**: Debug web app in Chrome browser
- **Launch Edge**: Debug web app in Microsoft Edge
- **Attach Chrome to Remote**: Attach to remote Chrome debugging session

### Testing
- **Launch Jest Tests**: Debug all Jest tests
- **Debug Jest Current File**: Debug tests in the current file

## 🛠️ Usage Examples

### Debugging Node.js Application

1. Set breakpoints in `src/app.js`
2. Select "Launch Node.js Program" from debug configurations
3. Press F5 to start debugging
4. Visit `http://localhost:3000` to trigger breakpoints

### Debugging Python Script

1. Set breakpoints in `src/main.py`
2. Select "Launch Python Program" or "Python: Current File"
3. Press F5 to start debugging

### Debugging Frontend JavaScript

1. Start the server using "Launch Node.js Program"
2. Set breakpoints in the browser code
3. Select "Launch Chrome" configuration
4. Press F5 to open Chrome with debugging enabled

### Debugging Tests

1. Set breakpoints in test files
2. Select "Launch Jest Tests" or "Debug Jest Current File"
3. Press F5 to run tests in debug mode

## 🔍 Key Features

- **Multiple Language Support**: Node.js, Python, and frontend JavaScript
- **Browser Debugging**: Chrome and Edge support with source maps
- **Test Debugging**: Jest test debugging configurations
- **Process Attachment**: Attach to running processes
- **Comprehensive Examples**: Real-world debugging scenarios

## 📋 Prerequisites

- **VS Code** with appropriate language extensions
- **Node.js** (for Node.js debugging)
- **Python 3** (for Python debugging)
- **Chrome/Edge** (for browser debugging)

### Required VS Code Extensions
- Python (for Python debugging)
- Debugger for Chrome (for Chrome debugging)
- Debugger for Edge (for Edge debugging)

## ⚙️ Configuration Details

### Launch vs Attach
- **Launch**: VS Code starts the program
- **Attach**: VS Code connects to an already running program

### Key Configuration Properties
- `type`: Debugger type (node, python, chrome, etc.)
- `request`: "launch" or "attach"
- `program`: Path to the main file
- `args`: Command line arguments
- `env`: Environment variables
- `console`: Where to show output
- `skipFiles`: Files to skip during debugging

## 🎯 Debugging Tips

1. **Set Breakpoints**: Click in the gutter or press F9
2. **Step Through Code**: Use F10 (step over) and F11 (step into)
3. **Watch Variables**: Add expressions to the Watch panel
4. **Call Stack**: View the current execution stack
5. **Debug Console**: Execute code in the current context

## 🚨 Troubleshooting

### Common Issues
- **Port already in use**: Change port in configuration or kill existing process
- **Module not found**: Ensure dependencies are installed
- **Source maps not working**: Check `sourceMaps: true` in browser configs
- **Python not found**: Verify Python path in configuration

### Debug Console Commands
```javascript
// In Node.js debug session
console.log(variableName)
JSON.stringify(object, null, 2)

# In Python debug session
print(variable_name)
type(variable_name)
```

## 📚 Additional Resources

- [VS Code Debugging Documentation](https://code.visualstudio.com/docs/editor/debugging)
- [Node.js Debugging Guide](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
- [Python Debugging Guide](https://code.visualstudio.com/docs/python/debugging)
- [Browser Debugging](https://code.visualstudio.com/docs/nodejs/browser-debugging)

## 🤝 Contributing

Feel free to submit issues and pull requests to improve these debug configurations!

## 📄 License

MIT License - Feel free to use these configurations in your projects.