import { QuizCategory } from '../types';

export const quizCategories: QuizCategory[] = [
  {
    id: 'cultura-geral',
    title: 'Cultura Geral de Angola',
    description: 'Teste o seu conhecimento sobre a história, geografia, símbolos nacionais, cultura e datas comemorativas de Angola. Tema recorrente em mais de 90% dos concursos públicos.',
    timeLimitSeconds: 480,
    questions: [
      {
        id: 'cg-1',
        question: 'Em que data Angola proclamou a sua Independência Nacional?',
        options: [
          '11 de Novembro de 1975',
          '4 de Fevereiro de 1961',
          '25 de Abril de 1974',
          '17 de Setembro de 1979'
        ],
        correctOptionIndex: 0,
        explanation: 'Angola proclamou a sua Independência Nacional a 11 de Novembro de 1975, proclamada por António Agostinho Neto, primeiro Presidente da República, na Praça da Independência em Luanda.'
      },
      {
        id: 'cg-2',
        question: 'Qual é o ponto mais alto do território angolano?',
        options: [
          'Serra da Chela',
          'Morro de Moco',
          'Serra do Leba',
          'Pedras Negras de Pungo Andongo'
        ],
        correctOptionIndex: 1,
        explanation: 'O Morro de Moco, localizado na província do Huambo, é o ponto mais alto de Angola, atingindo uma altitude de 2.620 metros acima do nível do mar.'
      },
      {
        id: 'cg-3',
        question: 'As imponentes Quedas de Kalandula, uma das sete maravilhas de Angola, localizam-se em que província?',
        options: [
          'Malanje',
          'Cuanza-Norte',
          'Uíge',
          'Huíla'
        ],
        correctOptionIndex: 0,
        explanation: 'As Quedas de Kalandula, anteriormente conhecidas como Quedas do Duque de Bragança, situam-se no rio Lucala, no município de Kalandula, província de Malanje.'
      },
      {
        id: 'cg-4',
        question: 'Quem escreveu a letra do Hino Nacional de Angola, "Angola Avante"?',
        options: [
          'António Agostinho Neto',
          'Manuel Rui Monteiro',
          'Pepetela',
          'Rui Duarte de Carvalho'
        ],
        correctOptionIndex: 1,
        explanation: 'A letra do Hino Nacional de Angola foi escrita pelo prestigiado escritor Manuel Rui Monteiro, e a música foi composta por Rui Mingas.'
      },
      {
        id: 'cg-5',
        question: 'Que planta rara e endémica do deserto do Namibe é considerada um símbolo de longevidade em Angola?',
        options: [
          'Imbondeiro (Adansonia)',
          'Welwitschia mirabilis',
          'Palmeira do Dendém',
          'Mussenda'
        ],
        correctOptionIndex: 1,
        explanation: 'A Welwitschia mirabilis é uma planta rasteira desértica extremamente resistente e endémica do deserto do Namibe (Angola e Namíbia), podendo viver mais de 1.000 anos.'
      },
      {
        id: 'cg-6',
        question: 'Atualmente, em 2026, em conformidade com a mais recente reforma da Divisão Político-Administrativa de Angola (Lei n.º 15/24), o território nacional subdivide-se em quantas províncias?',
        options: [
          '18 províncias',
          '20 províncias',
          '21 províncias',
          '25 províncias'
        ],
        correctOptionIndex: 2,
        explanation: 'A Lei n.º 15/24 determinou a nova Divisão Político-Administrativa de Angola, dividindo as províncias do Moxico (em Moxico e Cassai-Sul), Cuando Cubango (em Cuando e Cubango) e Luanda (em Luanda e Icolo e Bengo), totalizando 21 províncias em vigor em 2026.'
      },
      {
        id: 'cg-7',
        question: 'Qual é a maior bacia hidrográfica inteiramente localizada dentro do território nacional de Angola?',
        options: [
          'Bacia do Rio Congo',
          'Bacia do Rio Cuanza',
          'Bacia do Rio Zambeze',
          'Bacia do Rio Cunene'
        ],
        correctOptionIndex: 1,
        explanation: 'O Rio Cuanza é o maior rio inteiramente angolano. A sua bacia hidrográfica drena uma vasta área nacional de grande potencial hidroelétrico e agrícola.'
      },
      {
        id: 'cg-8',
        question: 'Que parque nacional angolano, localizado na província de Malanje, é conhecido como o santuário de conservação da Palanca Negra Gigante?',
        options: [
          'Parque Nacional da Kissama',
          'Parque Nacional de Cangandala',
          'Parque Nacional de Cameia',
          'Parque Nacional de Iona'
        ],
        correctOptionIndex: 1,
        explanation: 'O Parque Nacional de Cangandala, na província de Malanje, juntamente com a Reserva Natural Integral de Luando, protege a Palanca Negra Gigante, um dos animais mais raros do planeta e símbolo máximo de Angola.'
      },
      {
        id: 'cg-9',
        question: 'O que se comemora anualmente a 4 de Fevereiro em Angola, sendo considerado feriado nacional?',
        options: [
          'Dia do Início da Luta Armada de Libertação Nacional',
          'Dia da Paz e da Reconciliação Nacional',
          'Dia do Herói Nacional',
          'Dia dos Mártires da Repressão Colonial da Baixa de Cassanje'
        ],
        correctOptionIndex: 0,
        explanation: 'A 4 de Fevereiro de 1961, patriotas angolanos atacaram as prisões de Luanda para libertar presos políticos, marcando o início oficial da Luta Armada contra a colonização portuguesa.'
      },
      {
        id: 'cg-10',
        question: 'Qual é a moeda oficial de Angola e em que ano foi adotada a sua atual sigla de transação bancária (AOA)?',
        options: [
          'Kwanza (AOA), introduzida em 1999',
          'Novo Kwanza (AON), em 1990',
          'Kwanza Reajustado (AOR), em 1995',
          'Kwanza (AOA), em 1977'
        ],
        correctOptionIndex: 0,
        explanation: 'O Kwanza é a moeda oficial de Angola. Em 1999, foi realizada uma ampla reforma monetária restabelecendo o "Kwanza" (AOA), substituindo o Kwanza Reajustado.'
      },
      {
        id: 'cg-11',
        question: 'Em qual província angolana localiza-se a Fenda da Tundavala, um dos maiores e mais belos abismos geológicos do continente africano?',
        options: [
          'Benguela',
          'Huambo',
          'Huíla',
          'Namibe'
        ],
        correctOptionIndex: 2,
        explanation: 'A Fenda da Tundavala situa-se na Serra da Chela, na província da Huíla, a poucos quilómetros da cidade do Lubango, oferecendo uma vista deslumbrante a mais de 2.200 metros de altitude.'
      },
      {
        id: 'cg-12',
        question: 'Quem é historicamente aclamado como o "Fundador da Nação Angolana" e primeiro Presidente da República de Angola?',
        options: [
          'Dr. António Agostinho Neto',
          'Eng. José Eduardo dos Santos',
          'Dr. Jonas Malheiro Savimbi',
          'Dr. Holden Roberto'
        ],
        correctOptionIndex: 0,
        explanation: 'O Dr. António Agostinho Neto (1922-1979) foi o líder do MPLA que proclamou a Independência Nacional em 1975, tornando-se o primeiro Presidente de Angola e Fundador da Nação.'
      }
    ]
  },
  {
    id: 'constituicao-cra',
    title: 'Constituição da República de Angola (CRA)',
    description: 'Estude as leis fundamentais, direitos e deveres dos cidadãos, e a organização do Estado angolano. Essencial para concursos da AGT, Ministérios e Polícia Nacional.',
    timeLimitSeconds: 480,
    questions: [
      {
        id: 'cra-1',
        question: 'Em que ano foi promulgada a atual Constituição da República de Angola?',
        options: [
          '1992',
          '2010',
          '2012',
          '2021'
        ],
        correctOptionIndex: 1,
        explanation: 'A atual Constituição da República de Angola (CRA) foi promulgada formalmente a 5 de Fevereiro de 2010 pela Assembleia Constituinte, substituindo a Lei Constitucional de 1992.'
      },
      {
        id: 'cra-2',
        question: 'De acordo com a CRA, quais são os três órgãos de soberania do Estado angolano?',
        options: [
          'O Presidente da República, o Governo e os Tribunais',
          'O Presidente da República, a Assembleia Nacional e os Tribunais',
          'A Assembleia Nacional, os Ministérios e os Juízes',
          'O Presidente da República, o Vice-Presidente e os Deputados'
        ],
        correctOptionIndex: 1,
        explanation: 'Segundo o Artigo 105.º da Constituição da República de Angola, os órgãos de soberania são o Presidente da República, a Assembleia Nacional e os Tribunais.'
      },
      {
        id: 'cra-3',
        question: 'Segundo o artigo sobre a Organização Territorial de Angola, qual é a divisão político-administrativa constitucional fundamental?',
        options: [
          'Províncias, Municípios e Comunas',
          'Províncias, Distritos Urbanos e Sectores',
          'Regiões, Províncias e Cidades',
          'Províncias, Municípios e Bairros'
        ],
        correctOptionIndex: 0,
        explanation: 'Segundo o Artigo 8.º da Constituição, o território de Angola organiza-se politicamente em Províncias, Municípios e Comunas.'
      },
      {
        id: 'cra-4',
        question: 'Qual é o estatuto constitucional da língua portuguesa em Angola?',
        options: [
          'Língua Oficial e Língua Nacional',
          'Língua Oficial',
          'Língua Estrangeira Obrigatória',
          'Língua Oficial de Trabalho'
        ],
        correctOptionIndex: 1,
        explanation: 'O Artigo 19.º estabelece que a Língua Oficial da República de Angola é a Língua Portuguesa. No entanto, o Estado também valoriza e promove o desenvolvimento das Línguas Nacionais.'
      },
      {
        id: 'cra-5',
        question: 'Como é designado o sistema eleitoral na CRA para a escolha do Presidente e do Vice-Presidente da República?',
        options: [
          'Voto presidencial direto uninominal',
          'O cabeça de lista do partido ou coligação mais votado no círculo nacional é eleito Presidente, e o segundo da lista é eleito Vice-Presidente',
          'Eleição exclusiva pelo Parlamento (Assembleia Nacional)',
          'Nomeação consensual pelo Conselho da República'
        ],
        correctOptionIndex: 1,
        explanation: 'De acordo com o Artigo 109.º da CRA, é eleito Presidente da República o cabeça de lista, pelo círculo nacional, do partido político ou coligação de partidos políticos mais votado nas eleições gerais. O segundo nome da lista é eleito Vice-Presidente.'
      },
      {
        id: 'cra-6',
        question: 'De acordo com a CRA, quem detém a competência constitucional de dirigir a política de defesa nacional e ser o Comandante-em-Chefe das Forças Armadas Angolanas (FAA)?',
        options: [
          'O Ministro da Defesa Nacional e Veteranos da Pátria',
          'O Chefe do Estado Maior General',
          'O Presidente da República',
          'O Presidente da Assembleia Nacional'
        ],
        correctOptionIndex: 2,
        explanation: 'O Presidente da República é o Chefe de Estado, Titular do Poder Executivo e Comandante-em-Chefe das Forças Armadas Angolanas, nos termos do Artigo 108.º da Constituição.'
      },
      {
        id: 'cra-7',
        question: 'Qual o órgão constitucional encarregue de garantir a justiça constitucional, fiscalizar a constitucionalidade das leis e validar os resultados finais das eleições gerais em Angola?',
        options: [
          'O Tribunal Supremo',
          'O Tribunal de Contas',
          'O Tribunal Constitucional',
          'O Conselho Superior da Magistratura Judicial'
        ],
        correctOptionIndex: 2,
        explanation: 'O Tribunal Constitucional de Angola detém a competência de administrar a justiça em matérias de natureza jurídico-constitucional e eleitoral, incluindo a homologação final dos resultados eleitorais.'
      },
      {
        id: 'cra-8',
        question: 'De acordo com os direitos civis e políticos consagrados na CRA, o voto em Angola é caracterizado constitucionalmente como:',
        options: [
          'Obrigatório, pessoal, secreto e ponderado por rendimentos',
          'Pessoal, livre, igual, secreto e periódico',
          'Direto, facultativo, restrito a residentes de Luanda e oral',
          'Unilateral, censitário e indicado pelo Conselho da República'
        ],
        correctOptionIndex: 1,
        explanation: 'Nos termos do Artigo 115.º da Constituição, o sufrágio é pessoal, livre, igual, secreto e periódico, constituindo a base de legitimação democrática dos órgãos de soberania.'
      },
      {
        id: 'cra-9',
        question: 'De acordo com o Artigo 143.º da Constituição da República de Angola (CRA), qual é a duração do mandato de cada legislatura para os Deputados da Assembleia Nacional?',
        options: [
          '4 anos',
          '5 anos - [CORRETA]',
          '6 anos',
          '3 anos'
        ],
        correctOptionIndex: 1,
        explanation: 'A legislatura tem a duração de cinco anos e inicia-se com a primeira sessão da Assembleia Nacional após as eleições gerais.'
      },
      {
        id: 'cra-10',
        question: 'No âmbito dos direitos fundamentais e das garantias de dignidade humana expressas na CRA (Artigo 59.º), a pena de morte no território nacional é:',
        options: [
          'Permitida em casos excecionais de traição à pátria',
          'Aplicável apenas para crimes graves de terrorismo',
          'Inviolável e absolutely proibida em qualquer circunstância - [CORRETA]',
          'Autorizada apenas sob declaração de estado de guerra pelo Presidente'
        ],
        correctOptionIndex: 2,
        explanation: 'O Artigo 59.º estabelece categoricamente que a via humana é inviolável, determinando expressamente que na República de Angola não há pena de morte.'
      },
      {
        id: 'cra-11',
        question: 'Sob proposta do Conselho Superior da Magistratura Judicial, a quem cabe a competência de nomear os Juízes Conselheiros do Tribunal Supremo e o respetivo Presidente do tribunal?',
        options: [
          'Ao Presidente da Assembleia Nacional',
          'Ao Ministro da Justiça e dos Direitos Humanos',
          'Ao Presidente da República - [CORRETA]',
          'Por votação direta dos juízes de primeira instância'
        ],
        correctOptionIndex: 2,
        explanation: 'Nos termos do Artigo 119.º da CRA, o Presidente da República detém a competência política e constitucional de nomear os Juízes Conselheiros dos tribunais superiores, incluindo o Supremo.'
      },
      {
        id: 'cra-12',
        question: 'Segundo o Artigo 15.º da Constituição, os recursos naturais, minerais, petrolíferos e terras sob o solo e espaço aéreo angolano são propriedade originária de quem?',
        options: [
          'Das cooperativas tradicionais locais e províncias',
          'Do Estado Angolano - [CORRETA]',
          'Das empresas privadas detentoras dos direitos de concessão',
          'Do Fundo Soberano de Angola de forma partilhada'
        ],
        correctOptionIndex: 1,
        explanation: 'O Artigo 15.º (Recursos Naturais) declara que os recursos minerais, biológicos, petrolíferos, hídricos e outros são propriedade originária do Estado Angolano, que determina as condições para a sua exploração.'
      }
    ]
  },
  {
    id: 'lingua-logica',
    title: 'Língua Portuguesa & Raciocínio Lógico',
    description: 'Exercícios práticos de gramática, interpretação de textos técnicos e lógica matemática. Fundamental para triagem administrativa em qualquer concurso ou teste corporativo.',
    timeLimitSeconds: 480,
    questions: [
      {
        id: 'lp-1',
        question: 'Identifique a frase escrita em perfeita concordância verbal e ortográfica da língua de trabalho em Angola:',
        options: [
          'Haviam muitos candidatos inscritos no concurso da AGT.',
          'Houve muitas candidaturas espontâneas enviadas ao banco.',
          'Fazem dois anos que trabalho na recepção do escritório.',
          'A equipe técnica propuseram melhorias no servidor.'
        ],
        correctOptionIndex: 1,
        explanation: 'O verbo "haver", no sentido de existir ou de tempo decorrido, é impessoal e deve permanecer no singular. Logo, "Houve muitas candidaturas" está correcto, enquanto "Haviam muitos" é um erro clássico.'
      },
      {
        id: 'lp-2',
        question: 'Qual é o sinónimo mais adequado para a palavra "PROACTIVO", muito solicitada nos perfis profissionais angolanos?',
        options: [
          'Indivíduo que apenas age após receber instruções expressas.',
          'Aquele que se antecipa aos problemas e age de forma independente para encontrar soluções.',
          'Profissional focado unicamente na execução de tarefas rotineiras e sem inovação.',
          'Pessoa com dificuldades de integração em comissões de trabalho.'
        ],
        correctOptionIndex: 1,
        explanation: 'Ser proactivo significa antecipar-se aos acontecimentos, tomar a iniciativa para resolver problemas antes que se tornem crises, o que é altamente valorizado pelas empresas.'
      },
      {
        id: 'lp-3',
        question: 'Problema de Lógica: Três candidatos (Carlos, Mateus e Sílvia) fizeram o concurso da Saúde. Sabe-se que Sílvia obteve nota maior que Carlos, e Mateus obteve nota menor que Carlos. Quem teve a maior nota?',
        options: [
          'Carlos',
          'Mateus',
          'Sílvia',
          'Sílvia e Carlos empataram'
        ],
        correctOptionIndex: 2,
        explanation: 'Análise da lógica: Sílvia > Carlos e Carlos > Mateus. Logo, a ordem decrescente de notas é: Sílvia > Carlos > Mateus. Portanto, Sílvia obteve a maior nota.'
      },
      {
        id: 'lp-4',
        question: 'Assinale a opção em que a palavra destacada está empregada de forma CORRECTA:',
        options: [
          'O candidato agiu com muita DESCRIÇÃO durante a entrevista de emprego (significando reserva/prudência).',
          'O candidato agiu com muita DISCRIÇÃO durante a entrevista de emprego (significando reserva/prudência).',
          'Vou fazer a DESCRIÇÃO de cargos amanhã (significando prudência administrativa).',
          'O salário do banco está ao ENCONTRO DE minhas expectativas (significando contrariedade).'
        ],
        correctOptionIndex: 1,
        explanation: '"Discrição" refere-se à qualidade de quem é discreto (prudente, reservado). "Descrição" refere-se ao ato de descrever algo. Logo, a frase correta para designar reserva comportamental é a opção que usa "discrição".'
      },
      {
        id: 'lp-5',
        question: 'Se todos os programadores angolanos sabem programar em Python, e Manuel é um programador angolano, podemos deduzir logicamente que:',
        options: [
          'Manuel não sabe programar em Python.',
          'Manuel obrigatoriamente sabe programar em Python.',
          'Manuel prefere programar em Java.',
          'Manuel trabalha na Unitel.'
        ],
        correctOptionIndex: 1,
        explanation: 'Esta é uma dedução silogística directa: premissa maior (todos sabem Python) + premissa menor (Manuel é um programador angolano) = conclusão lógica obrigatória (Manuel sabe programar em Python).'
      },
      {
        id: 'lp-6',
        question: 'Identifique a frase que cumpre rigorosamente as regras gramaticais formais de regência verbal recomendadas para redação oficial em Angola:',
        options: [
          'Nós assistimos o debate de admissão pública ontem à noite.',
          'Nós assistimos ao debate de admissão pública ontem à noite.',
          'Todos os candidatos novos preferem mais o formato Word do que o formato PDF.',
          'A candidata qualificada namora com o técnico sénior de recrutamento.'
        ],
        correctOptionIndex: 1,
        explanation: 'O verbo "assistir" no sentido de presenciar/ver exige regência com a preposição "a". Portanto, diz-se "assistir ao debate" e não "assistir o debate".'
      },
      {
        id: 'lp-7',
        question: 'Problema de Raciocínio Espacial: Numa fila de candidatos formanda no Centro de Emprego em Luanda, Afonso ocupa a 14ª posição a contar do início e a 7ª posição a contar do final da fila. Quantas pessoas compõem esta fila?',
        options: [
          '21 pessoas',
          '20 pessoas',
          '19 pessoas',
          '22 pessoas'
        ],
        correctOptionIndex: 1,
        explanation: 'Se Afonso é o 14.º do início, significa que há 13 pessoas à sua frente. Se é o 7.º do final, há 6 pessoas atrás dele. Portanto, somando-se Afonso com as pessoas à frente e atrás: 13 + 1 + 6 = 20 pessoas no total.'
      },
      {
        id: 'lp-8',
        question: 'Considere a afirmação: "Se estudo bastante para os simulados do Candidato Ao, então sou aprovado no Concurso da AGT." Qual das opções abaixo representa a sua contrapositiva logicamente equivalente?',
        options: [
          'Se sou aprovado no Concurso da AGT, então estudei bastante para os simulados.',
          'Se não estudo bastante para os simulados, então não sou aprovado no Concurso da AGT.',
          'Se não sou aprovado no Concurso da AGT, então não estudei bastante para os simulados do Candidato Ao.',
          'Estudar bastante para os simulados não garante a aprovação no Concurso da AGT.'
        ],
        correctOptionIndex: 2,
        explanation: 'A contrapositiva da condicional "Se P, então Q" é estruturalmente "Se não Q, então não P". Portanto, "Se não sou aprovado, então não estudei bastante" é a equivalência perfeita.'
      },
      {
        id: 'lp-9',
        question: 'Assinale a alternativa em que a palavra apresenta grafia rigorosamente CORRECTA segundo o Novo Acordo Ortográfico em vigor em Angola:',
        options: [
          'Autoestima - [CORRETA]',
          'Auto-estima',
          'Ideía',
          'Vôo'
        ],
        correctOptionIndex: 0,
        explanation: 'Pelo Novo Acordo Ortográfico, o hífen deixa de ser usado quando o prefixo termina em vogal e o segundo elemento começa por vogal diferente (como em "autoestima"). Os ditongos abertos "ei" e "oi" em palavras paroxítonas (como "ideia") perderam o acento, tal como o hiato "oo" (como "voo").'
      },
      {
        id: 'lp-10',
        question: 'Assinale a opção que preenche corretamente a lacuna sob a regência recomendada na norma-padrão da Língua Portuguesa: "O jovem técnico administrativo aspiro ___ cargo de chefia bancária em Luanda."',
        options: [
          'o',
          'ao - [CORRETA]',
          'em',
          'pelo'
        ],
        correctOptionIndex: 1,
        explanation: 'O verbo "aspirar" no sentido de pretender, desejar ou almejar é um verbo transitivo indireto, exigindo obrigatoriamente a preposição "a". Portanto, diz-se "aspiro ao cargo".'
      },
      {
        id: 'lp-11',
        question: 'Problema de Lógica e Produtividade: Se 4 técnicos qualificados da AGT demoram exatamente 4 horas para analisar 4 processos alfandegários complexos, quantos minutos demorará 1 único técnico (trabalhando ao mesmo ritmo) para analisar exatamente 1 processo?',
        options: [
          '60 minutos',
          '120 minutos',
          '240 minutos - [CORRETA]',
          '480 minutos'
        ],
        correctOptionIndex: 2,
        explanation: 'Pela lógica de produtividade simultânea: se 4 técnicos resolvem 4 processos em 4 horas, significa que cada técnico trabalha de forma independente e leva 4 horas inteiras para resolver o seu processo individual. Logo, 1 técnico levará 4 horas (4 * 60 minutos = 240 minutos) para resolver 1 processo.'
      },
      {
        id: 'lp-12',
        question: 'Problema de Raciocínio Temporal: Se hoje é quarta-feira no calendário oficial, qual dia da semana será exatamente daqui a 45 dias corridos?',
        options: [
          'Sexta-feira',
          'Sábado - [CORRETA]',
          'Domingo',
          'Segunda-feira'
        ],
        correctOptionIndex: 1,
        explanation: 'Dividindo-se os 45 dias por semanas (7 dias): 45 / 7 = 6 semanas completas com resto igual a 3 dias. Portanto, avançamos exatamente 3 dias a partir de quarta-feira: 1º dia (quinta), 2º dia (sexta), 3º dia (sábado).'
      }
    ]
  }
];
