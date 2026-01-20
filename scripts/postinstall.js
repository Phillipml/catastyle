const fs = require('fs')
const path = require('path')

const packageRoot = path.join(__dirname, '..')
const userProjectRoot = process.cwd()

const logoSourceDir = path.join(packageRoot, 'src/assets/logos')
const themeSourceDir = path.join(packageRoot, 'src/themes')

const logoTargetDir = path.join(userProjectRoot, 'src', 'catastyle', 'logo')
const themeTargetDir = path.join(userProjectRoot, 'src', 'catastyle', 'themes')

const logoFiles = ['light-theme.svg', 'dark-theme.svg']
const themeFiles = ['light.ts', 'dark.ts', 'index.ts']

function copyFiles(sourceDir, targetDir, files, type) {
  try {
    if (!fs.existsSync(sourceDir)) {
      console.warn(`⚠️  ${type} files not found in package. Skipping copy.`)
      return
    }

    const srcDir = path.join(userProjectRoot, 'src')
    if (!fs.existsSync(srcDir)) {
      fs.mkdirSync(srcDir, { recursive: true })
    }

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true })
    }

    let copiedCount = 0
    let skippedCount = 0

    files.forEach((file) => {
      const sourceFile = path.join(sourceDir, file)
      const targetFile = path.join(targetDir, file)

      if (fs.existsSync(sourceFile)) {
        if (fs.existsSync(targetFile)) {
          skippedCount++
        } else {
          fs.copyFileSync(sourceFile, targetFile)
          copiedCount++
        }
      }
    })

    if (copiedCount > 0) {
      console.log(`✅ Copied ${copiedCount} ${type} file(s) to ${targetDir}`)
    }
    if (skippedCount > 0) {
      console.log(`ℹ️  ${skippedCount} ${type} file(s) already exist. Skipped.`)
    }
  } catch (error) {
    console.error(`❌ Error copying ${type} files:`, error.message)
  }
}

console.log('📦 Catastyle: Setting up logos and themes...')

copyFiles(logoSourceDir, logoTargetDir, logoFiles, 'logo')
copyFiles(themeSourceDir, themeTargetDir, themeFiles, 'theme')

console.log('✨ Catastyle setup complete!')