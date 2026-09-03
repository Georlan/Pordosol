import { p01 } from './p01'
import { p02 } from './p02'
import { rest } from './rest'

const heroImage = `data:image/jpeg;base64,${p01}${p02}${rest}`

document.documentElement.style.setProperty('--hero-sharp-image', `url("${heroImage}")`)
