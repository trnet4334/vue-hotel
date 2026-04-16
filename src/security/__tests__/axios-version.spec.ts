import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const MINIMUM_SAFE_AXIOS_VERSION = '1.15.0'

function extractVersionNumber (versionRange: string) {
  const match = versionRange.match(/\d+\.\d+\.\d+/)

  if (!match) {
    throw new Error(`Could not extract version from "${versionRange}"`)
  }

  return match[0]
}

function compareVersions (left: string, right: string) {
  const leftParts = left.split('.').map(Number)
  const rightParts = right.split('.').map(Number)

  for (let index = 0; index < Math.max(leftParts.length, rightParts.length); index += 1) {
    const leftPart = leftParts[index] ?? 0
    const rightPart = rightParts[index] ?? 0

    if (leftPart > rightPart) return 1
    if (leftPart < rightPart) return -1
  }

  return 0
}

function readJson (fileName: string) {
  const filePath = path.resolve(process.cwd(), fileName)
  return JSON.parse(readFileSync(filePath, 'utf8'))
}

describe('axios dependency version', () => {
  it('declares a patched axios version in package.json', () => {
    const packageJson = readJson('package.json')
    const declaredVersion = extractVersionNumber(packageJson.dependencies.axios)

    expect(compareVersions(declaredVersion, MINIMUM_SAFE_AXIOS_VERSION)).toBeGreaterThanOrEqual(0)
  })

  it('locks axios to a patched version in package-lock.json', () => {
    const packageLock = readJson('package-lock.json')
    const lockedVersion = packageLock.packages['node_modules/axios'].version

    expect(compareVersions(lockedVersion, MINIMUM_SAFE_AXIOS_VERSION)).toBeGreaterThanOrEqual(0)
  })
})
