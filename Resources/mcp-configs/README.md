# MCP configuration examples

These files show how to configure Model Context Protocol (MCP) servers for Claude Code.

## What is MCP?

MCP lets Claude access external tools and data sources. The configuration tells Claude where to find these tools and how to connect to them.

## Files in this directory

### filesystem-example.json

Gives Claude access to files on your computer.

**Setup:**
1. Copy this file to your Claude config directory
2. Replace `YOUR_USERNAME` with your actual username
3. Replace the path with the directory you want Claude to access

**Location for the config file:**
- macOS: `~/.claude/mcp.json`
- Windows: `%APPDATA%\claude\mcp.json`

## How to use

1. Copy the example that matches your needs
2. Edit the paths to match your system
3. Save as `mcp.json` in your Claude config directory
4. Restart Claude Code

## Security notes

- Only grant access to directories you need
- Don't include sensitive directories (like `.ssh` or credential folders)
- Review what access each MCP server requests

## Common issues

**"Server not found" error:**
Make sure Node.js is installed and `npx` is in your PATH.

**"Permission denied" error:**
Check that the directory path exists and you have read access.

**Changes not taking effect:**
Restart Claude Code after editing the config file.

## More MCP servers

Find additional servers at: https://github.com/modelcontextprotocol/servers
