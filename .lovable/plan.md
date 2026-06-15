## Connect Wiz Security Scanning Integration

**Goal:** Connect the Wiz security scanning integration to your workspace.

**What this does:**
- Wiz is a workspace-scoped security connector. Once connected, it automatically scans all projects in your workspace for security issues.
- You can view scan results in your project's **Security** tab.

**Steps:**
1. Trigger the Wiz connector connection flow (`connector_id: wiz`).
2. You will be prompted to authenticate with your Wiz account or create a new connection.
3. Once connected, Wiz scans will run automatically for all projects in this workspace.

**Notes:**
- Wiz is a single-connection, workspace-scoped connector (not per-project).
- There is no MCP server for Wiz.
- If you need to call the Wiz API from code later, an API key must be added as a regular secret separately.