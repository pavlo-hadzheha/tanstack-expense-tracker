export const ENV = {
} as const

const requiredEnvVariables: (keyof typeof ENV)[] = []

for (const _envVarKey of requiredEnvVariables) {
  if (!ENV[_envVarKey]) throw new Error(`${_envVarKey} is missing in the .env`)
}
