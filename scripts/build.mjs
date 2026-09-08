import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {routes,render} from './render.mjs';
const clientFiles=['styles.css','app.js','content.js','quote.js','presentation.js'];
function filesIn(dir){return fs.readdirSync(dir).sort().flatMap(name=>{const p=dir+'/'+name;return fs.statSync(p).isDirectory()?filesIn(p):[p];});}
const digest=createHash('sha256');
for(const file of [...clientFiles,...filesIn('assets/official')]){digest.update(file);digest.update(fs.readFileSync(file));}
const release='/releases/'+digest.digest('hex').slice(0,16);
function versionAssets(text){return text.replaceAll('/assets/official/',release+'/assets/official/').replaceAll('href="/styles.css"',`href="${release}/styles.css"`).replaceAll('src="/app.js"',`src="${release}/app.js"`);}
fs.rmSync('dist',{recursive:true,force:true});fs.mkdirSync('dist'+release,{recursive:true});
for(const [route,page] of routes){const dir='dist'+route;fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(dir+'index.html',versionAssets(render(route,page)));}
fs.copyFileSync('dist/404/index.html','dist/404.html');
// Legacy URLs remain available for already-open pages; new pages use one immutable release.
for(const f of clientFiles){fs.copyFileSync(f,'dist/'+f);fs.writeFileSync('dist'+release+'/'+f,versionAssets(fs.readFileSync(f,'utf8')));}
fs.cpSync('assets/official','dist/assets/official',{recursive:true});
fs.cpSync('assets/official','dist'+release+'/assets/official',{recursive:true});
fs.copyFileSync('Catálogo.Pôr.do.Sol.pdf','dist/catalogo-pordosol.pdf');
fs.writeFileSync('dist/robots.txt','User-agent: *\nAllow: /\n');
fs.copyFileSync('_headers','dist/_headers');
fs.writeFileSync('index.html',render('/',routes.get('/')));
console.log(`Site gerado: ${routes.size} páginas. Recursos: ${release}`);
