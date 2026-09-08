import fs from 'node:fs';
import {routes,render} from './render.mjs';
fs.rmSync('dist',{recursive:true,force:true});fs.mkdirSync('dist/assets',{recursive:true});
for(const [route,page] of routes){const dir='dist'+route;fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(dir+'index.html',render(route,page));}
fs.copyFileSync('dist/404/index.html','dist/404.html');
for(const f of ['styles.css','app.js','content.js','quote.js','presentation.js'])fs.copyFileSync(f,'dist/'+f);
fs.cpSync('assets/official','dist/assets/official',{recursive:true});
fs.copyFileSync('Catálogo.Pôr.do.Sol.pdf','dist/catalogo-pordosol.pdf');
fs.writeFileSync('dist/robots.txt','User-agent: *\nAllow: /\n');
fs.writeFileSync('dist/_headers','/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: SAMEORIGIN\n');
fs.writeFileSync('index.html',render('/',routes.get('/')));
console.log(`Site gerado: ${routes.size} páginas.`);
