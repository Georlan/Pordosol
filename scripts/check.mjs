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
