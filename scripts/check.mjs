import assert from 'node:assert/strict';
import fs from 'node:fs';
import {routes} from './render.mjs';
import {products} from '../content.js';
import {normalize,message} from '../quote.js';
assert.deepEqual(normalize(null),[]);
assert.deepEqual(normalize([{id:'unknown',quantity:2},{id:'massa-26x32',quantity:-1}]),[]);
assert.deepEqual(normalize([{id:'massa-26x32',quantity:Infinity}]),[]);
assert.deepEqual(normalize([{id:'massa-26x32',quantity:100000}]),[{id:'massa-26x32',quantity:9999}]);
assert.deepEqual(normalize([{id:'massa-26x32',quantity:3.9}]),[{id:'massa-26x32',quantity:3}]);
const text=message([{id:'massa-26x32',quantity:3},{id:'canudinhos',quantity:8}],{name:' Maria & João ',city:'Fortaleza, CE',company:'Café + Sabor'});
assert(text.includes('26 × 32 cm: 3 pacote(s)'));assert(text.includes('50 unidades: 8 pacote(s)'));assert(text.includes('Nome: Maria & João'));assert.equal(decodeURIComponent(encodeURIComponent(text)),text);
let links=0;
for(const [route] of routes){const file='dist'+route+'index.html';assert(fs.existsSync(file),file);const html=fs.readFileSync(file,'utf8');assert.equal((html.match(/<h1[ >]/g)||[]).length,1,'One h1: '+route);assert(html.includes('lang="pt-BR"'));assert(!/250m²|B2B|ecossistema/.test(html));for(const [,link] of html.matchAll(/(?:href|src)="(\/(?!\/)[^"#]*)[^"]*"/g)){const path='dist'+decodeURI(link);assert(fs.existsSync(path),`${route}: missing ${link}`);links++;}}
for(const p of products){assert(routes.has('/produto/'+p.id+'/'));assert(fs.statSync('assets/official/'+p.image+'.webp').size>1000);}
const css=fs.readFileSync('dist/styles.css','utf8');assert(!css.includes('https://fonts.googleapis.com'));assert(css.includes('prefers-reduced-motion'));assert(css.includes('.header-actions{'));
console.log(`Verificado: ${routes.size} páginas, ${products.length} produtos, ${links} referências locais e regras da cotação.`);
const {catalogEntries,productCard}=await import('../presentation.js');
const discs=catalogEntries(products.filter(p=>p.category==='discos'));
assert.equal(discs.length,1);assert(productCard(discs[0]).includes('Escolher formato'));
assert(!fs.readFileSync('dist/index.html','utf8').includes('>Beirute</button>'));
const smallDisc=fs.readFileSync('dist/produto/discos-10/index.html','utf8');assert(smallDisc.includes('Embalagem fotografada: 15 cm · 500 g.'));assert(smallDisc.includes('data-add="discos-10" data-detail'));
assert(fs.readFileSync('dist/index.html','utf8').includes('data-feature="massa-15x30"'));
console.log('Regressões verificadas: discos agrupados, formato correto na cotação, Pães e comparação de massas.');
const home=fs.readFileSync('dist/index.html','utf8');
const release=home.match(/href="(\/releases\/[a-f0-9]{16})\/styles.css"/)?.[1];
assert(release,'HTML must reference versioned styles');
assert(home.includes(`src="${release}/app.js"`));
for(const file of ['styles.css','app.js','content.js','quote.js','presentation.js']){
 const source=fs.readFileSync('dist'+release+'/'+file,'utf8');
 assert(!/(?<![a-f0-9]{16})\/assets\/official\//.test(source.replaceAll(release+'/assets/official/','')),file);
 for(const [,dependency] of source.matchAll(/from ['"]\.\/([^'"]+)['"]/g))assert(fs.existsSync('dist'+release+'/'+dependency),dependency);
}
assert(fs.readFileSync('dist/_headers','utf8').includes('max-age=0, must-revalidate'));
console.log('Cache verificado: HTML revalidado; estilos, módulos, fontes e imagens na mesma versão.');
const titles=new Set(),descriptions=new Set();
for(const [route] of routes){const html=fs.readFileSync('dist'+route+'index.html','utf8');const title=html.match(/<title>(.*?)<\/title>/)[1];assert(!titles.has(title));titles.add(title);const description=html.match(/<meta name="description" content="([^"]+)"/)[1];assert(!descriptions.has(description));descriptions.add(description);assert(html.includes('rel="canonical"'));const schema=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)[1]);const organization=schema['@graph'].find(n=>Array.isArray(n['@type'])?n['@type'].includes('Organization'):n['@type']==='Organization');assert(organization);assert.equal(organization.foundingDate,'1995');assert(Array.isArray(organization['@type'])&&organization['@type'].includes('LocalBusiness'));assert(!html.includes('"price"'));if(route.startsWith('/produto/')){assert(schema['@graph'].some(n=>n['@type']==='Product'));assert(html.includes('data-print'));assert(html.includes('data-share'));}}
assert(home.includes('<title>Pôr do Sol Alimentos | Massas para Pastel em Limoeiro do Norte - CE</title>'));
assert(home.includes('Fabricante de massas para pastel, discos, pizzas, pães árabes e canudinhos em Limoeiro do Norte, Ceará.'));
const presentation=fs.readFileSync('dist'+release+'/presentation.js','utf8');assert(presentation.includes('data-header-enhancement')||presentation.includes('headerEnhancement'));assert(presentation.includes("mouseenter"));assert(presentation.includes("focusin"));
const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');assert.equal((sitemap.match(/<loc>/g)||[]).length,routes.size-1);assert(!sitemap.includes('/404/'));assert(fs.readFileSync('dist/robots.txt','utf8').includes('Sitemap: https://pordosol.pages.dev/sitemap.xml'));console.log('SEO verificado: descrições e títulos únicos, sitemap, canonical, dados estruturados, SEO local e ações das fichas.');
