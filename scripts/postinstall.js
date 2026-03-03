const fs = require('fs')
const path = require('path')

const packageRoot = path.resolve(__dirname, '..')
const isInstalledAsDependency = packageRoot.includes('node_modules')
const userProjectRoot = isInstalledAsDependency
  ? path.resolve(process.cwd(), '..', '..')
  : path.resolve(packageRoot, '..')

const catastyleDir = path.resolve(userProjectRoot, 'src', 'catastyle')
const catastyleConfigTemplate = path.resolve(__dirname, 'templates', 'catastyle.config.ts.template')
const catastyleConfigFile = path.resolve(catastyleDir, 'catastyle.config.ts')

function createConfigFile(templatePath, targetPath, type) {
  try {
    if (!fs.existsSync(templatePath)) {
      console.warn(`⚠️  Catastyle: template not found at ${templatePath}. Skipping.`)
      return
    }

    const srcDir = path.resolve(userProjectRoot, 'src')
    if (!fs.existsSync(srcDir)) {
      fs.mkdirSync(srcDir, { recursive: true })
    }

    if (!fs.existsSync(catastyleDir)) {
      fs.mkdirSync(catastyleDir, { recursive: true })
    }

    if (fs.existsSync(targetPath)) {
      console.log('ℹ️  Catastyle: catastyle.config.ts already exists. Skipped.')
      return
    }

    const templateContent = fs.readFileSync(templatePath, 'utf-8')
    fs.writeFileSync(targetPath, templateContent, 'utf-8')
    console.log(`✅ Catastyle: created ${path.relative(userProjectRoot, targetPath)}`)
  } catch (error) {
    console.error('❌ Catastyle postinstall:', error.message)
  }
}

if (!isInstalledAsDependency) {
  console.log('ℹ️  Catastyle: postinstall skipped (not installed as dependency).')
  process.exit(0)
}

console.log('📦 Catastyle: Setting up config...')
createConfigFile(catastyleConfigTemplate, catastyleConfigFile, 'catastyle')
console.log('💡 Customize themes in src/catastyle/catastyle.config.ts')