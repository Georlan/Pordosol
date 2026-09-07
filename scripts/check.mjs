import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();

console.log('--- Executando Auditoria de Conteúdo Real e Integridade ---');

const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
const js = fs.readFileSync(path.join(rootDir, 'app.js'), 'utf8');
const css = fs.readFileSync(path.join(rootDir, 'styles.css'), 'utf8');

// 1. Proibição estrita de dados inventados / errados
const forbidden = [
  'Tianguá',
  'tiangua',
  'Planalto da Ibiapaba',
  'ibiapaba',
  'toneladas',
  '5.000 clientes',
  '5000 clientes',
  'CNPJ inventado',
  'Lorem ipsum',
  'TODO',
  'undefined',
  'null'
];

let errors = [];

for (const term of forbidden) {
  if (html.includes(term)) errors.push(`[HTML] Contém termo proibido ou mockado: "${term}"`);
  if (js.includes(term)) errors.push(`[JS] Contém termo proibido ou mockado: "${term}"`);
}

// 2. Termos obrigatórios oficiais do catálogo
const requiredTerms = [
  'Pôr do Sol Alimentos',
  'Limoeiro do Norte',
  '5588999005560',
  'Rua Augusto Fidélis, 2443',
  'pordosolalimentos@hotmail.com',
  '1995',
  '250 m²',
  'Massa para Pastel',
  'Discos de Massa',
  'Micro Pizzas',
  'Mini Pizzas',
  'Pães Árabes',
  'Canudinhos'
];

for (const term of requiredTerms) {
  if (!html.includes(term) && !js.includes(term)) {
    errors.push(`[CONTEÚDO] Termo oficial obrigatório não encontrado: "${term}"`);
  }
}

// 3. Verificação de imagens referenciadas
const imgRegex = /src=["'](\.?\/?assets\/[^"']+)["']/g;
let match;
while ((match = imgRegex.exec(html)) !== null) {
  const cleanPath = match[1].replace(/^\.\//, '');
  const fullPath = path.join(rootDir, cleanPath);
  if (!fs.existsSync(fullPath)) {
    errors.push(`[IMAGEM 404] Arquivo não encontrado: ${cleanPath}`);
  }
}

if (errors.length > 0) {
  console.error('Erros encontrados na auditoria:');
  errors.forEach(e => console.error(` ✗ ${e}`));
  process.exit(1);
} else {
  console.log('✓ Todos os dados conferem 100% com o Catálogo Oficial.');
  console.log('✓ Nenhum dado mockado ou cidade incorreta.');
  console.log('✓ Todos os assets referenciados existem fisicamente.');
  console.log('--- Auditoria concluída com sucesso! ---');
}
