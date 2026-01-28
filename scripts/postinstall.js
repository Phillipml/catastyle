const fs = require('fs')
const path = require('path')

const packageRoot = path.join(__dirname, '..')
const userProjectRoot = process.cwd()

const configTargetDir = path.join(userProjectRoot, 'src', 'catastyle', 'config')
const logoConfigTemplate = path.join(__dirname, 'templates', 'logo.config.ts.template')
const themeConfigTemplate = path.join(__dirname, 'templates', 'theme.config.ts.template')

const logoConfigFile = path.join(configTargetDir, 'logo.config.ts')
const themeConfigFile = path.join(configTargetDir, 'theme.config.ts')

function createConfigFile(templatePath, targetPath, type) {
  try {
    const srcDir = path.join(userProjectRoot, 'src')
    if (!fs.existsSync(srcDir)) {
      fs.mkdirSync(srcDir, { recursive: true })
    }

    if (!fs.existsSync(configTargetDir)) {
      fs.mkdirSync(configTargetDir, { recursive: true })
    }

    if (fs.existsSync(targetPath)) {
      console.log(`ℹ️  ${type} config file already exists. Skipped.`)
      return
    }

    if (!fs.existsSync(templatePath)) {
      console.warn(`⚠️  ${type} template not found. Skipping.`)
      return
    }

    const templateContent = fs.readFileSync(templatePath, 'utf-8')
    fs.writeFileSync(targetPath, templateContent, 'utf-8')
    console.log(`✅ Created ${type} config file at ${targetPath}`)
  } catch (error) {
    console.error(`❌ Error creating ${type} config file:`, error.message)
  }
}

console.log('📦 Catastyle: Setting up configuration files...')

createConfigFile(logoConfigTemplate, logoConfigFile, 'logo')
createConfigFile(themeConfigTemplate, themeConfigFile, 'theme')

console.log('✨ Catastyle setup complete!')
console.log('💡 You can now customize logos and themes in src/catastyle/config/')