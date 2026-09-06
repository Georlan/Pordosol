import { readFile } from 'node:fs/promises';

const html = await readFile('index.html', 'utf8');
const required = [
  'Pôr do Sol Alimentos',
  '5588999005560',
  'Rua Augusto Fidélis, 2443',
  'pordosolalimentos@hotmail.com',
  'id="catalogo"',
  'id="calculadora"',
  'id="distribuidor"',
  'id="quoteForm"',
  'id="distributorForm"'
];

for (const value of required) {
  if (!html.includes(value)) throw new Error(`Conteúdo obrigatório ausente: ${value}`);
}

console.log('✓ Verificação estática concluída');
