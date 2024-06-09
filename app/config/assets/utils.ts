import fs from 'fs'

export default abstract class UtilsAssets {
  static loadBanner (name: string, vars?: Record<string, string>): void {
    let banner = fs.readFileSync(`./app/config/assets/${name}.txt`, 'utf8')
    if (vars) {
      Object.keys(vars).forEach((key) => {
        banner = banner.replace(`{{${key}}}`, vars[key])
      })
    }
    console.log(banner)
  }

  static loadSettings (name: string): void {
    const settings = fs.readFileSync(`./app/config/assets/${name}.json`, 'utf8')
    console.log(JSON.parse(settings))
  }

  static version (): void {
    const packageJson = fs.readFileSync('./package.json', 'utf8')
    console.log(JSON.parse(packageJson).version)
  }
}
