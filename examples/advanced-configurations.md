# VS Code Debug Configuration Examples

This directory contains additional example configurations for specific scenarios.

## Advanced Launch Configurations

### TypeScript Debugging
```json
{
    "name": "Launch TypeScript Program",
    "type": "node",
    "request": "launch",
    "program": "${workspaceFolder}/src/app.ts",
    "preLaunchTask": "tsc: build - tsconfig.json",
    "outFiles": ["${workspaceFolder}/dist/**/*.js"],
    "console": "integratedTerminal",
    "skipFiles": ["<node_internals>/**"]
}
```

### Docker Debugging
```json
{
    "name": "Docker Node Attach",
    "type": "node",
    "request": "attach",
    "port": 9229,
    "address": "localhost",
    "localRoot": "${workspaceFolder}",
    "remoteRoot": "/app",
    "protocol": "inspector"
}
```

### Environment-Specific Configurations
```json
{
    "name": "Launch with Environment",
    "type": "node",
    "request": "launch",
    "program": "${workspaceFolder}/src/app.js",
    "env": {
        "NODE_ENV": "development",
        "DEBUG": "app:*",
        "PORT": "3001"
    },
    "envFile": "${workspaceFolder}/.env"
}
```

### Multi-root Workspace Debugging
```json
{
    "name": "Launch Backend",
    "type": "node",
    "request": "launch",
    "program": "${workspaceFolder:backend}/src/server.js",
    "console": "integratedTerminal"
}
```

### React/Next.js Debugging
```json
{
    "name": "Next.js: debug server-side",
    "type": "node-terminal",
    "request": "launch",
    "command": "npm run dev"
}
```

### Python with Arguments
```json
{
    "name": "Python: With Arguments",
    "type": "python",
    "request": "launch",
    "program": "${workspaceFolder}/src/main.py",
    "args": ["--debug", "--config", "dev.json"],
    "console": "integratedTerminal",
    "justMyCode": false
}
```

### Remote Debugging
```json
{
    "name": "Python: Remote Attach",
    "type": "python",
    "request": "attach",
    "connect": {
        "host": "localhost",
        "port": 5678
    }
}
```

## Compound Configurations

Launch multiple debuggers at once:

```json
{
    "name": "Launch Frontend & Backend",
    "configurations": ["Launch Backend", "Launch Chrome"]
}
```