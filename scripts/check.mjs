import { readFile } from 'node:fs/promises';

const html = await readFile('index.html', 'utf8');
const js = await readFile('app.js', 'utf8');
const css = await readFile('styles.css', 'utf8');

const requiredHtml = [
  'Pôr do Sol Alimentos',
  '5588999005560',
  'Rua Augusto Fidélis, 2443',
  'pordosolalimentos@hotmail.com',
  'id="catalogo"',
  'id="comercial"',
  'id="distribuidor"',
  'id="quoteForm"',
  'id="distributorForm"',
  './styles.css',
  './app.js'
];

for (const value of requiredHtml) {
  if (!html.includes(value)) throw new Error(`Conteúdo obrigatório ausente no HTML: ${value}`);
}

const forbiddenTraces = ['Calculadora', 'calculadora', 'efeito IA', 'MASSA QUE VENDE MAIS'];
for (const value of forbiddenTraces) {
  if (html.includes(value) || js.includes(value) || css.includes(value)) {
    throw new Error(`Rastro antigo encontrado: ${value}`);
  }
}

if (!js.includes('Montador') && !html.includes('Montador de cotação B2B')) {
  throw new Error('Fluxo de cotação B2B não encontrado.');
}

console.log('✓ Verificação estática concluída');
