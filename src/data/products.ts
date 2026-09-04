export type Family = 'Massas para pastel' | 'Pizzas' | 'Pães' | 'Canudinhos'

export type PreparationMethod = {
  title: string
  steps: string
}

export type NutritionRow = {
  item: string
  per100g: string
  perServing: string
  dailyValue: string
}

export type Product = {
  id: string
  family: Family
  name: string
  format: string
  packageWeight?: string
  servingsInfo?: string
  image: string
  description: string
  benefits: string[]
  claims: string[]
  methods?: PreparationMethod[]
  nutrition?: {
    servingSize: string
    totalServings: string
    highSodiumWarning: boolean
    rows: NutritionRow[]
  }
  ingredients?: string
  allergens?: string
}

export const products: Product[] = [
  {
    id: 'massa-26x32',
    family: 'Massas para pastel',
    name: 'Massa para pastel, canudinho e lasanha',
    format: '26 cm × 32 cm • 2 kg',
    packageWeight: '2 kg (Peso Líquido)',
    servingsInfo: 'Cerca de 66 porções de 30 g',
    image: '/images/massa-26x32.webp',
    description: 'A clássica massa retangular profissional da Pôr do Sol. Ideal para quem busca praticidade na hora de fazer lanches e salgados, com nível de crocância elevado, fácil manuseio e separação rápida por filme plástico protetor.',
    benefits: [
      'Folhas intercaladas com plástico protetor',
      'Alto rendimento comercial (cerca de 66 porções)',
      'Nível de crocância elevado e sequinho',
      'Versatilidade 3 em 1: pastel, canudinho e lasanha',
    ],
    claims: ['Não contém ovos', 'Não contém lactose', 'Não contém proteína animal'],
    methods: [
      {
        title: 'Pastel (Modo de Fazer)',
        steps: 'Separe as folhas de massa de modo que o plástico fique para baixo, coloque o recheio de sua preferência do centro para os lados, dobre a folha ao meio fazendo um quadrado, aperte as bordas das folhas com um garfo ou carretilha. Retire o plástico e coloque em óleo quente até dourar, deixe escorrer o excesso de óleo e espere esfriar.',
      },
      {
        title: 'Canudinho (Modo de Fazer)',
        steps: 'Corte a massa no tamanho desejado e enrole em formas de canudo metálicas. Coloque em óleo quente até dourar, retire e deixe escorrer e esfriar. Recheie a gosto com doces ou salgados.',
      },
      {
        title: 'Lasanha (Modo de Fazer)',
        steps: 'Unte uma forma, para fazer a montagem coloque uma camada de massa e vá alternando entre camada de recheio e molhe cada camada de massa com leite. A última camada de massa deve ser de queijo ou molho branco para evitar que resseque a massa. Leve ao forno até que o queijo derreta por completo.',
      },
    ],
    nutrition: {
      servingSize: '30 g (3/50 de unidade)',
      totalServings: 'Cerca de 66 porções por embalagem',
      highSodiumWarning: true,
      rows: [
        { item: 'Valor energético (kcal)', per100g: '310', perServing: '93', dailyValue: '5%' },
        { item: 'Carboidratos (g)', per100g: '57', perServing: '17', dailyValue: '6%' },
        { item: 'Proteínas (g)', per100g: '6,9', perServing: '2,1', dailyValue: '4%' },
        { item: 'Gorduras totais (g)', per100g: '5,5', perServing: '1,6', dailyValue: '2%' },
        { item: 'Gorduras saturadas (g)', per100g: '2,1', perServing: '0,6', dailyValue: '3%' },
        { item: 'Gorduras trans (g)', per100g: '0,5', perServing: '0,2', dailyValue: '10%' },
        { item: 'Fibras alimentares (g)', per100g: '1,4', perServing: '0,4', dailyValue: '2%' },
        { item: 'Sódio (mg)', per100g: '1344', perServing: '403', dailyValue: '20%' },
      ],
    },
    ingredients: 'Farinha de trigo fortificada com ferro e ácido fólico, água, óleo de soja, sal, aguardente e corante artificial.',
    allergens: 'CONTÉM GLÚTEN. ALÉRGICOS: CONTÉM DERIVADOS DO TRIGO E SOJA.',
  },
  {
    id: 'massa-15x30',
    family: 'Massas para pastel',
    name: 'Massa para pastel, canudinho e lasanha',
    format: '15 cm × 30 cm • Tamanho Prático',
    packageWeight: 'Formato Intermediário',
    servingsInfo: 'Perfeito para porções individuais e feiras',
    image: '/images/massa-15x30.webp',
    description: 'Massa na medida ideal para lanches rápidos, pastel de feira e porções sob medida. Mesma receita tradicional com crocância e leveza garantidas.',
    benefits: [
      'Fácil manuseio e fechamento rápido',
      'Crocância uniforme na fritura',
      'Praticidade para lanchonetes e consumo doméstico',
    ],
    claims: ['Não contém ovos', 'Não contém lactose', 'Não contém proteína animal'],
    methods: [
      {
        title: 'Modo de Fazer',
        steps: 'Separe as folhas com o plástico protetor voltado para baixo. Distribua o recheio, feche a massa com carretilha ou garfo, retire o plástico e frite em óleo a 180°C até atingir tom dourado uniforme.',
      },
    ],
    ingredients: 'Farinha de trigo fortificada com ferro e ácido fólico, água, óleo de soja, sal, aguardente e corante artificial.',
    allergens: 'CONTÉM GLÚTEN. ALÉRGICOS: CONTÉM DERIVADOS DO TRIGO E SOJA.',
  },
  {
    id: 'massa-redonda',
    family: 'Massas para pastel',
    name: 'Massa para pastel em discos — Linha Preciosa',
    format: 'Linha Preciosa • Congelado • 15 cm / 500 g • 10 cm / 200 g',
    packageWeight: '500 g (15 cm) e 200 g (10 cm)',
    servingsInfo: 'Discos individuais já cortados',
    image: '/images/massa-redonda.webp',
    description: 'Discos prontos e padronizados da Linha Preciosa, produto congelado que garante agilidade imediata: basta rechear, dobrar em meia-lua e fritar. Zero desperdício de massa.',
    benefits: [
      'Discos padronizados sem sobras de recorte',
      'Armazenamento congelado para maior durabilidade',
      'Ideal para pasteizinhos de festa (10 cm) e lanche individual (15 cm)',
    ],
    claims: ['Não contém ovos', 'Não contém lactose', 'Não contém proteína animal'],
    methods: [
      {
        title: 'Modo de Fazer',
        steps: 'Descongele os discos sob refrigeração. Coloque o recheio na metade do disco, feche unindo as bordas e pressione com carretilha ou garfo. Frite em óleo quente até dourar levemente.',
      },
    ],
    ingredients: 'Farinha de trigo fortificada com ferro e ácido fólico, água, óleo de soja, sal, aguardente e corante artificial.',
    allergens: 'CONTÉM GLÚTEN. ALÉRGICOS: CONTÉM DERIVADOS DO TRIGO E SOJA.',
  },
  {
    id: 'mini-pizzas',
    family: 'Pizzas',
    name: 'Mini pizzas artesanais',
    format: '5 unidades por pacote • 50 g cada',
    packageWeight: '250 g por pacote',
    servingsInfo: '5 unidades prontas para assar',
    image: '/images/mini-pizzas.webp',
    description: 'Apresentada no catálogo oficial nos sabores Mista, Calabresa, Carne de Sol, Frango e Mussarela. Massa macia com borda dourada, pré-assada para preparo ultrarrápido no forno ou airfryer.',
    benefits: [
      'Sabores Mista, Calabresa, Carne de Sol, Frango e Mussarela',
      'Preparo rápido de 5 a 8 minutos no forno',
      'Excelente opção para lanches rápidos e mercearias',
    ],
    claims: ['Não contém ovos', 'Preparo rápido', 'Pronto para assar'],
    methods: [
      {
        title: 'Modo de Preparo',
        steps: 'Pré-aqueça o forno ou airfryer a 200°C. Disponha as mini pizzas sem sobrepor e asse por 5 a 8 minutos, até o queijo borbulhar e a borda ficar levemente crocante.',
      },
    ],
    allergens: 'CONTÉM GLÚTEN. PODE CONTER DERIVADOS DE LEITE CONFORME O SABOR.',
  },
  {
    id: 'micro-pizzas',
    family: 'Pizzas',
    name: 'Micro pizzas para festas e eventos',
    format: '24 unidades por pacote • porção 50 g',
    packageWeight: 'Pacote econômico para eventos',
    servingsInfo: '24 unidades tamanho coquetel',
    image: '/images/micro-pizzas.webp',
    description: 'Tamanho coquetel ideal para buffets, festas de aniversário e pequenos comerciantes. Massa leve com cobertura generosa, pensada para servir com rapidez e qualidade.',
    benefits: [
      '24 unidades por pacote de alto rendimento',
      'Fácil manuseio e aquecimento rápido em grande escala',
      'Massa que se mantém macia mesmo após esfriar',
    ],
    claims: ['Não contém ovos', 'Preparo rápido', 'Tamanho coquetel'],
    allergens: 'CONTÉM GLÚTEN.',
  },
  {
    id: 'pao-arabe',
    family: 'Pães',
    name: 'Pães árabes tradicionais (Pita)',
    format: '5 unidades por pacote • porção 50 g',
    packageWeight: '250 g por pacote',
    servingsInfo: '5 pães macios com bolso interno natural',
    image: '/images/paes-arabes.webp',
    description: 'Pão sírio/árabe de massa fina e macia, perfeito para beirutes, wraps, sanduíches naturais e acompanhamento de pastas como homus e babaganoush.',
    benefits: [
      'Massa leve de fácil digestão',
      'Abre facilmente para rechear (bolso natural)',
      'Perfeito quente ou frio',
    ],
    claims: ['Não contém proteína animal', 'Sem colesterol', 'Massa leve'],
    allergens: 'CONTÉM GLÚTEN. ALÉRGICOS: CONTÉM DERIVADOS DO TRIGO.',
  },
  {
    id: 'canudinhos',
    family: 'Canudinhos',
    name: 'Canudinhos fritos para rechear',
    format: '50 unidades por pacote',
    packageWeight: 'Pacote festa com 50 unidades',
    servingsInfo: '50 unidades prontas para recheio',
    image: '/images/canudinhos.webp',
    description: 'Canudinhos artesanais dourados e ultracrocantes. Já vêm fritos e sequinhos, prontos para receber recheios como doce de leite, brigadeiro, salpicão, creme de queijo ou frango cremoso.',
    benefits: [
      '50 unidades prontas por pacote',
      'Super crocantes, não murcham rapidamente com o recheio',
      'Dourados na medida certa sem sabor residual de gordura',
    ],
    claims: ['Não contém ovos', 'Não contém lactose', 'Não contém proteína animal'],
    allergens: 'CONTÉM GLÚTEN. ALÉRGICOS: CONTÉM DERIVADOS DO TRIGO E SOJA.',
  },
]

export const families: Family[] = ['Massas para pastel', 'Pizzas', 'Pães', 'Canudinhos']

export const companyData = {
  tradeName: 'Pôr do Sol Alimentos',
  corporateName: 'Milena Mara Costa da Silva - ME',
  cnpj: '07.677.559/0001-08',
  cgf: '06.540.577-3',
  address: {
    street: 'Rua Augusto Fidélis, 2443',
    neighborhood: 'Limoeiro do Norte',
    city: 'Limoeiro do Norte',
    state: 'CE',
    cep: '62.930-000',
    country: 'Indústria Brasileira',
  },
  phones: [
    { label: 'WhatsApp / Pedidos', number: '(88) 9 9900-5560', raw: '5588999005560' },
    { label: 'Comercial', number: '(88) 9 9271-2966', raw: '5588992712966' },
    { label: 'Telefone Fixo', number: '(88) 3423-4432', raw: '558834234432' },
  ],
  email: 'pordosolalimentos@hotmail.com',
  historyYears: '30+',
  factoryArea: '250 m²',
  region: 'Vale do Jaguaribe',
}
