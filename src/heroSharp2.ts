import p01 from './heroSharp2/p01'
import p02 from './heroSharp2/p02'
import rest from './heroSharp2/rest'

const heroDataUri = `data:image/jpeg;base64,${p01}${p02}${rest}`

const style = document.createElement('style')
style.dataset.heroSharp = 'true'
style.textContent = `@media (min-width: 981px) { #inicio.hero { background-image: url("${heroDataUri}") !important; } }`
document.head.appendChild(style)
