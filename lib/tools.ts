export interface ToolInput {
  [key: string]: string | number | boolean | string[] | number[]
}

export interface ToolResponse {
  success: boolean
  message: string
  data?: any
}

export type ToolName = 'addCamera' | 'searchCameras' | 'listDevices' | 'diagnoseIssue' | 'createReport'

export interface Tool {
  name: ToolName
  description: string
  input: ToolInput
}

export const toolDefinitions: Record<ToolName, { description: string; params: string[] }> = {
  addCamera: {
    description: 'Add a new camera to the system',
    params: ['cameraName', 'location', 'cameraType', 'resolution'],
  },
  searchCameras: {
    description: 'Search for cameras by location or type',
    params: ['query', 'filterType'],
  },
  listDevices: {
    description: 'List all connected IoT devices',
    params: ['location', 'deviceType'],
  },
  diagnoseIssue: {
    description: 'Run diagnostics on a specific device or system',
    params: ['deviceId', 'issueType'],
  },
  createReport: {
    description: 'Generate a system or performance report',
    params: ['reportType', 'dateRange'],
  },
}

export async function executeTool(tool: Tool): Promise<ToolResponse> {
  const handlers: Record<ToolName, (input: ToolInput) => Promise<ToolResponse>> = {
    addCamera: async (input: ToolInput) => ({
      success: true,
      message: `Camera "${input['cameraName']}" has been added at location "${input['location']}"`,
      data: { cameraId: `CAM_${Date.now()}`, status: 'active' },
    }),

    searchCameras: async (input: ToolInput) => ({
      success: true,
      message: `Found cameras matching "${input['query']}"`,
      data: { results: [] },
    }),

    listDevices: async (input: ToolInput) => ({
      success: true,
      message: 'Retrieved list of connected devices',
      data: { devices: [], total: 0 },
    }),

    diagnoseIssue: async (input: ToolInput) => ({
      success: true,
      message: `Diagnostics completed for device "${input['deviceId']}"`,
      data: { status: 'healthy', issues: [] },
    }),

    createReport: async (input: ToolInput) => ({
      success: true,
      message: `Report "${input['reportType']}" has been generated`,
      data: { reportUrl: '#', generatedAt: new Date().toISOString() },
    }),
  }

  const handler = handlers[tool.name]
  if (!handler) {
    return {
      success: false,
      message: `Unknown tool: ${tool.name}`,
    }
  }

  return await handler(tool.input)
}

export function parseToolFromResponse(text: string): Tool | null {
  const toolMatch = text.match(/\{[\s\S]*"tool"[\s\S]*\}/)
  if (!toolMatch) return null

  try {
    const parsed = JSON.parse(toolMatch[0])
    if (parsed.tool && toolDefinitions[parsed.tool as ToolName]) {
      return {
        name: parsed.tool as ToolName,
        description: toolDefinitions[parsed.tool as ToolName].description,
        input: parsed.input || {},
      }
    }
  } catch (error) {
    console.error('Failed to parse tool:', error)
  }

  return null
}
