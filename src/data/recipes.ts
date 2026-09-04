export type Recipe = {
  id: string
  title: string
  category: string
  time: string
  yield: string
  image: string
  description: string
  tip: string
  ingredients: string[]
  instructions: string[]
}

export const recipes: Recipe[] = [
  {
    id: 'pastel-crocante-feira',
    title: 'Pastel de Feira Super Crocante e Dourado',
    category: 'Massas para Pastel',
    time: '20 minutos',
    yield: '12 a 15 porções',
    image: '/images/receita-pastel.webp',
    description: 'O verdadeiro segredo do pastel sequinho com massa borbulhante e recheio suculento, ideal para festas, lanches ou venda em pastelarias.',
    tip: 'Mantenha o óleo entre 180°C e 190°C. Ao fechar, aperte bem as bordas com garfo ou carretilha para o ar não entrar.',
    ingredients: [
      '1 rolo ou folhas de Massa para Pastel Pôr do Sol (26x32 cm ou 15x30 cm)',
      '300 g de carne moída refogada ou queijo coalho ralado',
      'Óleo vegetal de boa qualidade para fritura',
      'Gotas de limão para servir',
    ],
    instructions: [
      'Separe as folhas da massa mantendo o plástico protetor para baixo.',
      'Disponha o recheio no centro para os lados, sem encostar nas bordas.',
      'Dobre a massa ao meio formando o quadrado e aperte as bordas firmemente com garfo ou carretilha.',
      'Retire o plástico protetor apenas no momento de mergulhar no óleo quente.',
      'Frite até dourar por igual, escorra em papel absorvente e sirva bem crocante.',
    ],
  },
  {
    id: 'canudinhos-recheados-festivos',
    title: 'Canudinhos Festivos Doces & Salgados',
    category: 'Canudinhos',
    time: '15 minutos',
    yield: '50 unidades',
    image: '/images/receita-canudinho.webp',
    description: 'Perfeitos para aniversários e eventos familiares. Super práticos porque os canudinhos Pôr do Sol já vêm prontos, fritos e sequinhos.',
    tip: 'Recheie os canudinhos até 1 hora antes de servir para preservar 100% da crocância estaladiça da massa.',
    ingredients: [
      '1 pacote de Canudinhos Pôr do Sol (50 unidades)',
      'Opção Doce: Doce de leite cremoso, brigadeiro ou beijinho com amendoim picado',
      'Opção Salgada: Salpicão de frango desfiado com requeijão cremoso e cheiro-verde',
    ],
    instructions: [
      'Abra o pacote de canudinhos com cuidado em um recipiente plano.',
      'Com o auxílio de um saco de confeitar ou colher pequena, preencha o interior de cada canudo até a borda.',
      'Finalize os doces passando a ponta em castanhas ou amendoim triturado.',
      'Finalize os salgados com folhinhas de cheiro-verde fresco.',
    ],
  },
  {
    id: 'lasanha-tradicional-leite',
    title: 'Lasanha Especial de Massa Fresca ao Forno',
    category: 'Massas para Pastel',
    time: '45 minutos',
    yield: '8 a 10 porções',
    image: '/images/receita-lasanha.webp',
    description: 'Receita tradicional da família com o segredo do rótulo: umedecer cada camada da massa com leite para uma textura aveludada e macia.',
    tip: 'Como ensina o rótulo oficial da Pôr do Sol, molhe cada camada com leite e finalize com farta camada de queijo para não ressecar a massa.',
    ingredients: [
      '1 pacote de Massa para Pastel Pôr do Sol 26x32 cm (2 kg)',
      '500 g de carne moída refogada ao molho de tomate temperado',
      '400 g de mussarela fatiada e queijo parmesão ralado',
      '1 xícara de leite integral para umedecer a massa',
      'Molho branco ou bechamel para a cobertura final',
    ],
    instructions: [
      'Unte um refratário médio com azeite ou manteiga.',
      'Faça a base com um pouco de molho e acomode a primeira camada de massa Pôr do Sol.',
      'Pincele ou regue levemente a massa com leite para hidratar.',
      'Alterne camadas de molho bolonhesa, fatias de queijo e massa umedecida com leite.',
      'Cubra a última camada com molho branco e mussarela farta para selar a umidade.',
      'Leve ao forno pré-aquecido a 200°C por cerca de 25 minutos até o queijo derreter e dourar por completo.',
    ],
  },
]
