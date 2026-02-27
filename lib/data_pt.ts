import {
    TreeDeciduous,
    Waves,
    Bike,
    Camera,
    Mountain,
    TrainFront,
    Landmark,
    FileText,
    Briefcase,
    GraduationCap,
    Home,
    CreditCard,
    Book,
    LucideIcon,
    Users,
    Phone,
    Baby,
    Stethoscope,
    Heart,
    Brain,
    Search,
    Tag,
    X,
    Dumbbell,
    Shield
} from "lucide-react";
import { RouteItem, RoadmapItem, JobStep, ResourceLocation, EventItem, Professional } from "./data";

export const parksPt: RouteItem[] = [
    {
        title: "Fairview Park",
        description: "Caminhos largos e campos esportivos. Ideal para uma volta fácil e plana.",
        distance: "Circuito de 1.5 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "fairview-park",
        image: "/fairview_park_v3.png",
        mapUrl: "https://www.google.com/maps/search/Fairview+Park+Dublin",
        content: `
# Fairview Park

O Fairview Park é um grande parque público em Fairview, Dublin.

## Características
- **Caminhos Largos**: Perfeito para caminhar, correr e andar de bicicleta.
- **Esportes**: Inclui campos de futebol e uma pista de skate.
- **Playground**: Uma grande área de lazer para crianças.

## Como Chegar
- **Ônibus**: Rotas 14, 15, 27, 27a, 130.
- **Trem**: Estação DART Clontarf Road.
        `
    },
    {
        title: "Phoenix Park",
        description: "Parque enorme com veados. Experimente as colinas perto do forte.",
        distance: "5+ km",
        difficulty: "Medium",
        icon: TreeDeciduous,
        slug: "phoenix-park",
        image: "/phoenix_park.png",
        mapUrl: "https://www.google.com/maps/search/Phoenix+Park+Dublin",
        content: `
# Phoenix Park

O maior parque urbano fechado de qualquer capital europeia.

## Destaques
- **Veados Selvagens**: Uma manada vive aqui desde o século XVII.
- **Dublin Zoo**: Localizado dentro do parque.
- **Áras an Uachtaráin**: Residência do Presidente da Irlanda.

## Rotas
- **Magazine Fort Loop**: Oferece algumas colinas para um treino moderado.
- **Chesterfield Avenue**: Reta principal ideal para ciclismo.
        `
    },
    {
        title: "St. Anne's Park",
        description: "Roseiras e trilhas arborizadas em Clontarf.",
        distance: "4 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "st-annes-park",
        image: "/st_annes.png",
        mapUrl: "https://www.google.com/maps/search/St.+Anne's+Park+Dublin",
        content: `
# St. Anne's Park

Um parque magnífico na zona norte, antiga propriedade da família Guinness.

## Destaques
- **Roseiral**: Um jardim de rosas mundialmente famoso.
- **Mercado**: Um movimentado mercado de comida acontece todos os sábados ("Red Stables").
- **Trilhas**: Quilômetros de trilhas arborizadas e estruturas históricas (follies).
        `
    },
    {
        title: "Liffey Valley Park",
        description: "Caminhos cênicos à beira do rio ao longo do Liffey.",
        distance: "3 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "liffey-valley-park",
        image: "/liffey_valley.png",
        mapUrl: "https://www.google.com/maps/search/Liffey+Valley+Park+Dublin",
        content: `
# Liffey Valley Park

Um parque linear ao longo do Rio Liffey, perto de Palmerstown/Lucan.

## Características
- **Tranquilidade**: Uma ótima fuga do barulho da M50.
- **Natureza**: Ótimo para observar garças e a vida selvagem do rio.
        `
    },
    {
        title: "Herbert Park",
        description: "Belo parque formal em Ballsbridge com um circuito ao redor do lago.",
        distance: "1 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "herbert-park",
        image: "/herbert_park.png",
        mapUrl: "https://www.google.com/maps/search/Herbert+Park+Dublin",
        content: `
# Herbert Park

Localizado na área nobre de Ballsbridge.

## Destaques
- **O Lago**: Lar de patos e cisnes.
- **Mercado de Comida**: Popular mercado de comida aos domingos.
- **Esportes**: Quadras de tênis e campos de boliche na grama.
        `
    },
    {
        title: "Deer Park (Mt. Merrion)",
        description: "Parque elevado com vistas panorâmicas da Baía de Dublin.",
        distance: "2 km",
        difficulty: "Medium",
        icon: TreeDeciduous,
        slug: "deer-park",
        image: "/deer_park.png",
        mapUrl: "https://www.google.com/maps/search/Deer+Park+Mount+Merrion",
        content: `
# Deer Park

Um parque público em Mount Merrion, Dublin Sul.

## A Vista
O melhor recurso é a vista. Estando em uma colina, você pode ver toda a cidade e a Baía de Dublin.
        `
    },
    {
        title: "Harold's Cross Park",
        description: "Charmoso parque vitoriano, perfeito para uma caminhada curta.",
        distance: "0.5 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "harolds-cross-park",
        image: "/harolds_cross.png",
        mapUrl: "https://www.google.com/maps/search/Harold's+Cross+Park+Dublin",
        content: `
# Harold's Cross Park

Um parque comunitário pequeno e bem cuidado.

## Características
- **Playground**: Popular entre as famílias locais.
- **Café**: Geralmente há um quiosque de café.
        `
    },
    {
        title: "Dartry Park",
        description: "Passeio tranquilo ao longo do Rio Dodder.",
        distance: "2 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "dartry-park",
        image: "/dartry_park.png",
        mapUrl: "https://www.google.com/maps/search/Dartry+Park+Dublin",
        content: `
# Dartry Park

Uma faixa estreita de parque ao longo do Rio Dodder.

## Características
- **River Walk**: Conecta Milltown e Rathgar.
- **Natural**: Parece mais natural e selvagem do que os parques formais.
        `
    },
    {
        title: "Merrion Square",
        description: "Parque georgiano histórico com estátuas de arte e flores.",
        distance: "0.8 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "merrion-square",
        image: "/merrion_square.png",
        mapUrl: "https://www.google.com/maps/search/Merrion+Square+Dublin",
        content: `
# Merrion Square

O coração da Dublin Georgiana.

## Destaques
- **Oscar Wilde**: A famosa estátua do escritor reclinado em uma rocha.
- **Arte**: Aos domingos, artistas penduram suas pinturas nas grades para venda.
        `
    },
    {
        title: "St. Stephen's Green",
        description: "O parque vitoriano mais famoso da cidade. Ideal para um passeio no centro.",
        distance: "1.2 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "st-stephens-green",
        image: "/stephens_green.png",
        mapUrl: "https://www.google.com/maps/search/St.+Stephen's+Green+Dublin",
        content: `
# St. Stephen's Green

Um oásis no centro da cidade, no topo da Grafton Street.

## Destaques
- **O Lago**: Alimentar os patos é uma tradição de Dublin.
- **Coreto**: Frequentemente recebe música no verão.
- **Almoço**: O ponto mais movimentado de Dublin para trabalhadores de escritório que almoçam em dias ensolarados.
        `
    }
];

export const swimmingPt: RouteItem[] = [
    {
        title: "The Forty Foot",
        description: "Local icônico de natação em águas profundas em Sandycove. Famoso por mergulhos o ano todo.",
        distance: "Sandycove",
        difficulty: "Medium",
        icon: Waves,
        slug: "the-forty-foot",
        image: "/forty_foot.png",
        content: `
# The Forty Foot

O local de natação mais famoso de Dublin. É uma formação rochosa que avança sobre o Mar da Irlanda.

## Características
- **Águas Profundas**: Você pula diretamente em águas profundas. Não recomendado para quem não sabe nadar bem.
- **Vestiários**: Abrigos de concreto disponíveis.
- **Tradição**: O mergulho de Natal aqui é lendário.

## Como Chegar
- **DART**: 15 min a pé da estação **Sandycove/Glasthule**.
- **Ônibus**: **Rota 7** ou **7a** do centro para Dun Laoghaire/Sandycove.
        `
    },
    {
        title: "Seapoint Beach",
        description: "Local popular com uma Torre Martello. Seções rasas ideais para diferentes níveis.",
        distance: "Monkstown",
        difficulty: "Easy",
        icon: Waves,
        slug: "seapoint-beach",
        image: "/seapoint.png",
        mapUrl: "https://www.google.com/maps/search/Seapoint+Beach+Dublin",
        content: `
# Seapoint Beach

Uma praia de Bandeira Azul localizada entre Blackrock e Monkstown.

## Como Chegar
- **DART**: A estação **Seapoint DART** fica bem ao lado da praia.
- **Ônibus**: As rotas **7** ou **7a** param na Monkstown Road (caminhada curta).
        `
    },
    {
        title: "Vico Bathing Place",
        description: "Lugar deslumbrante e isolado em Dalkey/Killiney com vistas incríveis.",
        distance: "Dalkey",
        difficulty: "Medium",
        icon: Waves,
        slug: "vico-bathing-place",
        image: "/vico_bathing.png",
        mapUrl: "https://www.google.com/maps/search/Vico+Bathing+Place",
        content: `
# The Vico

Um "segredo dos locais" que se tornou bastante popular. Conhecido pelas vistas da Killiney Bay.

## Como Chegar
- **Caminhada**: 15 min da estação **Dalkey DART** via Vico Road.
- **Trem**: A estação **Killiney DART** também fica próxima (cerca de 20 min de caminhada).
        `
    },
    {
        title: "Sandycove Beach",
        description: "Pequena praia de areia protegida ao lado do Forty Foot. Ótima para iniciantes.",
        distance: "Sandycove",
        difficulty: "Easy",
        icon: Waves,
        slug: "sandycove-beach",
        image: "/sandycove.png",
        mapUrl: "https://www.google.com/maps/search/Sandycove+Beach+Dublin",
        content: `
# Sandycove Beach

Uma enseada minúscula e abrigada bem ao lado do Forty Foot.

## Como Chegar
- **DART**: 15 min a pé da estação **Sandycove/Glasthule**.
        `
    },
    {
        title: "Hawk Cliff",
        description: "Uma jóia escondida perto do Vico. Acesso por escadas íngremes, entrada em água profunda.",
        distance: "Dalkey",
        difficulty: "Hard",
        icon: Waves,
        slug: "hawk-cliff",
        image: "/hawk_cliff.png",
        mapUrl: "https://www.google.com/maps/search/Hawk+Cliff+Vico+Road",
        content: `
# Hawk Cliff

Um local mais rústico ao longo da Vico Road.

## Como Chegar
- **Caminhada**: 15-20 min a pé da estação **Dalkey DART**.
        `
    },
    {
        title: "High Rock",
        description: "Afloramento rochoso em Malahide usado por nadadores experientes. Águas profundas.",
        distance: "Malahide",
        difficulty: "Hard",
        icon: Waves,
        slug: "high-rock",
        image: "/high_rock.png",
        mapUrl: "https://www.google.com/maps/search/High+Rock+Malahide",
        content: `
# High Rock (Malahide)

Um local popular para nadadores confiantes no lado norte de Dublin.

## Como Chegar
- **Caminhada**: Localizado na estrada costeira entre Portmarnock e Malahide.
- **Ônibus**: **Rota 42** para Malahide, seguido de caminhada pela costa.
        `
    },
    {
        title: "Poolbeg (Shelly Banks)",
        description: "Nade com vista para as chaminés icônicas. Praia de areia e águas calmas.",
        distance: "Poolbeg",
        difficulty: "Easy",
        icon: Waves,
        slug: "poolbeg",
        image: "/poolbeg.png",
        mapUrl: "https://www.google.com/maps/search/Shelly+Banks+Beach+Poolbeg",
        content: `
# Poolbeg / Shelly Banks

Localizado na península do Great South Wall.

## Como Chegar
- **Ônibus**: Sem ônibus direto. Pegue a **Rota 1** para Sandymount e caminhe pelo paredão (caminhada longa).
- **Bicicleta**: Facilmente acessível de bicicleta.
        `
    },
    {
        title: "Bull Wall",
        description: "Abrigos tradicionais e áreas de troca perto da ponte de madeira em Clontarf.",
        distance: "Clontarf",
        difficulty: "Medium",
        icon: Waves,
        slug: "bull-wall",
        image: "/bull_wall.png",
        mapUrl: "https://www.google.com/maps/search/North+Bull+Wall+Swimming",
        content: `
# North Bull Wall

Localizado perto de Clontarf no lado norte.

## Como Chegar
- **Ônibus**: **Rota 130** para Clontarf Road/Ponte de Madeira.
        `
    }
];

export const cyclingPt: RouteItem[] = [
    {
        title: "Caminho Costeiro de Clontarf",
        description: "Ciclovia plana e cênica com vista para a Baía de Dublin. Ótima para todos os níveis.",
        distance: "8 km",
        difficulty: "Easy",
        icon: Bike,
        slug: "clontarf-coastal-path",
        image: "/clontarf_coastal_path_v3.png",
        content: `
# Caminho Costeiro de Clontarf a Sutton

Uma das rotas de ciclismo mais seguras e bonitas de Dublin. É quase totalmente fora da estrada em uma ciclovia dedicada.

## Como Chegar
- **Ônibus**: A **Rota 130** atende Clontarf.
- **DART**: Verifique a Estação DART de Clontarf Road.
        `
    },
    {
        title: "Circuito Phoenix Park",
        description: "Pedale entre os veados, o Zoológico e a casa do Presidente em estradas largas e seguras.",
        distance: "10 km",
        difficulty: "Medium",
        icon: Bike,
        slug: "phoenix-park-loop",
        image: "/phoenix_park.png",
        content: `
# Ciclismo no Phoenix Park

O parque possui uma extensa rede de ciclovias.

## Como Chegar
- **Luas**: Linha Vermelha para a estação **Heuston Station**.
- **Ônibus**: Rotas **46a, 26, 37** param perto da entrada da North Circular Road ou Parkgate Street.

## Aluguel de Bicicletas
- **Phoenix Park Bikes**: Localizado na entrada da Parkgate Street. Você pode alugar bicicletas para o dia aqui.
        `
    },
    {
        title: "Grand Canal Greenway",
        description: "Passeio tranquilo ao longo da margem do canal, do centro da cidade em direção ao oeste.",
        distance: "12 km+",
        difficulty: "Easy",
        icon: Bike,
        slug: "grand-canal-greenway",
        image: "/grand_canal.png",
        content: `
# Grand Canal Greenway

Um corredor pacífico que vai das Docklands para o oeste, saindo da cidade.

## Como Chegar
- **Luas**: Linha Verde (Charlemont/Harcourt) ou Linha Vermelha (Suir Road/Goldenbridge).
        `
    },
    {
        title: "Royal Canal Greenway",
        description: "Rota histórica do canal na zona norte. Muito plana e tranquila.",
        distance: "10 km+",
        difficulty: "Easy",
        icon: Bike,
        slug: "royal-canal-greenway",
        image: "/royal_canal.png",
        content: `
# Royal Canal Greenway

Corre paralelamente à linha do trem das Docklands (Spencer Dock) em direção a Drumcondra, Phibsborough e Ashtown.

## Como Chegar
- **Trem**: Linha Maynooth (estações Drumcondra, Broombridge, Ashtown).
- **Luas**: Linha Verde para **Broadstone/DIT**.
        `
    },
    {
        title: "Dodder Greenway",
        description: "Bela rota fluvial conectando Ballsbridge a Rathfarnham através de parques.",
        distance: "5 km",
        difficulty: "Medium",
        icon: Bike,
        slug: "dodder-greenway",
        image: "/dodder_greenway.png",
        content: `
# Dodder Greenway

Uma rota adorável seguindo o Rio Dodder.

## Como Chegar
- **Ônibus**: Rotas **4, 7, 7a** (lado de Ballsbridge) ou **15b** (lado de Rathfarnham).
        `
    },
    {
        title: "Sutton para Sandycove (S2S)",
        description: "Rota costeira ambiciosa. Experimente a seção de Sutton ao centro para vistas do mar.",
        distance: "10 km",
        difficulty: "Medium",
        icon: Bike,
        slug: "sutton-to-sandycove",
        image: "/sutton_to_sandycove.png",
        content: `
# S2S (Sutton para Sandycove)

O "S2S" é uma ciclovia costeira contínua planejada.

## Melhor Seção
A seção **Northside** de Sutton até a East Link Bridge é excelente (veja o Caminho Costeiro de Clontarf).
        `
    },
    {
        title: "Tymon Park Inter-park",
        description: "Ciclismo seguro fora da estrada dentro da rede de parques em Tallaght.",
        distance: "4 km",
        difficulty: "Easy",
        icon: Bike,
        slug: "tymon-park",
        image: "/tymon_park.png",
        content: `
# Tymon Park

Um dos maiores parques suburbanos de Dublin.

## Como Chegar
- **Ônibus**: Rotas **27, 77a** atendendo Tallaght.
        `
    }
];

export const tourismPt: RouteItem[] = [
    {
        title: "Trilha dos Penhascos de Howth",
        description: "Vistas costeiras incríveis a uma curta viagem de DART. Fique de olho nas focas no porto!",
        distance: "6 km",
        difficulty: "Medium",
        icon: Camera,
        slug: "howth-cliff-path",
        image: "/howth.png",
        mapUrl: "https://www.google.com/maps/search/Howth+Cliff+Path+Loop",
        content: `
# Trilha dos Penhascos de Howth

A Trilha dos Penhascos de Howth é uma das caminhadas mais populares de Dublin, oferecendo vistas costeiras acidentadas, aves marinhas e ar puro a uma curta viagem de trem do centro da cidade.

## Destaques
- **Os Penhascos**: Vistas dramáticas sobre o Mar da Irlanda.
- **Farol Bailey**: Um farol pitoresco no promontório.
- **Focas**: Muitas vezes visíveis no porto perto do píer.
- **Frutos do Mar**: Howth é famosa pelo seu peixe fresco (fish and chips).

## Como Chegar (Transporte Público)
- **DART (Trem)**: Pegue o DART sentido Norte para a estação **Howth Station** (fim da linha). A caminhada começa imediatamente na estação.
- **Ônibus**: Pegue o **H3** na Lower Abbey Street diretamente para o Howth Summit ou o Porto.

## A Rota
Siga as setas verdes para o Cliff Path Loop. Leva cerca de 2 horas. O terreno é irregular em alguns pontos, então use bons calçados.
        `
    },
    {
        title: "Glendalough Spinc Ridge",
        description: "Vistas de tirar o fôlego dos lagos de Wicklow e da histórica Cidade Monástica.",
        distance: "9 km",
        difficulty: "Hard",
        icon: Mountain,
        slug: "glendalough-spinc",
        image: "/glendalough.png",
        mapUrl: "https://www.google.com/maps/search/Glendalough+Spinc+Ridge",
        content: `
# Glendalough Spinc Ridge

Localizado no Parque Nacional das Montanhas de Wicklow, esta rota oferece algumas das paisagens mais espetaculares da Irlanda.

## Destaques
- **The Spinc**: Uma caminhada na crista com vistas panorâmicas sobre o Lago Superior.
- **Cidade Monástica**: Ruínas do século VI, incluindo uma torre redonda.
- **Cachoeira Poulanass**: Uma bela cachoeira perto do início da subida.

## Como Chegar
- **Ônibus (St. Kevin's Bus)**: Um serviço de ônibus privado que sai do centro de Dublin (St. Stephen's Green North) diretamente para Glendalough.
- **Carro**: Cerca de 1 hora de carro ao sul de Dublin pela N11/M11. Estacionamento disponível no Lago Superior (pago).

## A Rota
Esta é uma caminhada cansativa que envolve uma subida íngreme (mais de 600 degraus de madeira). Equipamento de trilha e água são essenciais. Reserve de 3 a 4 horas.
        `
    },
    {
        title: "Cachoeira de Powerscourt",
        description: "Visite a cachoeira mais alta da Irlanda. Ótima para piqueniques e caminhadas na natureza.",
        distance: "Wicklow",
        difficulty: "Easy",
        icon: Camera,
        slug: "powerscourt-waterfall",
        image: "/powerscourt.png",
        mapUrl: "https://www.google.com/maps/search/Powerscourt+Waterfall",
        content: `
# Cachoeira de Powerscourt

A Cachoeira de Powerscourt é a mais alta da Irlanda, com 121m. Está situada em um belo parque no sopé das Montanhas de Wicklow.

## Como Chegar
- **Carro**: A cachoeira fica a 6km da propriedade principal de Powerscourt. O acesso é melhor por carro.
- **Transporte Público**: Não há transporte público direto. Você pode pegar o ônibus **44** para Enniskerry e pegar um táxi ou caminhar (cerca de 5km).

## Dicas
- Traga um piquenique! Há um quiosque para café e lanches, mas um lanche reforçado é melhor.
- Ótimo para uma tarde relaxante em vez de uma caminhada cansativa.
        `
    },
    {
        title: "Lough Tay (Lago Guinness)",
        description: "Famoso mirante do lago escuro com uma praia de areia branca. Foto incrível.",
        distance: "Wicklow",
        difficulty: "Easy",
        icon: Mountain,
        slug: "lough-tay",
        image: "/lough_tay.png",
        mapUrl: "https://www.google.com/maps/search/Lough+Tay+Guinness+Lake",
        content: `
# Lough Tay (Lago Guinness)

Conhecido como o "Lago Guinness" por causa da sua água escura de turfa e da praia de areia branca no topo (parecendo um copo de Guinness).

## Como Chegar
- **Carro**: Você precisa de um carro para chegar aqui. Fica na **R759**, parte da rota cênica de Sally Gap.
- **Transporte Público**: Não há transporte público direto disponível.

## Nota
O lago em si está em uma propriedade privada (Luggala), então você não pode descer até a praia sem permissão, mas a vista da estrada é a principal atração.
        `
    },
    {
        title: "Caminhada de Bray a Greystones",
        description: "Caminhada popular nos penhascos conectando duas cidades costeiras. Retorne de trem.",
        distance: "7 km",
        difficulty: "Easy",
        icon: TrainFront,
        slug: "bray-greystones",
        image: "/bray_greystones.png",
        mapUrl: "https://www.google.com/maps/search/Bray+to+Greystones+Cliff+Walk",
        content: `
# Caminhada de Bray a Greystones

Uma caminhada costeira linear conectando a cidade vitoriana de Bray com a cidade portuária de Greystones.

## Como Chegar
- **DART**: Pegue o DART sentido Sul para a estação **Bray Station**. Caminhe para o sul pelo calçadão para encontrar o início.
- **Ônibus**: Rotas **145** ou **155** atendem Bray saindo do centro da cidade.
- **Retorno**: Pegue o DART de volta de Greystones para Dublin (ou Bray).

## A Rota
O caminho segue a linha do trem ao longo dos penhascos. É quase todo plano, mas pode ser irregular.
        `
    },
    {
        title: "Castelo de Dublin e Caminhada pela Cidade",
        description: "Explore o coração histórico de Dublin a pé. Plano e acessível.",
        distance: "3 km",
        difficulty: "Easy",
        icon: Landmark,
        slug: "dublin-castle-walk",
        image: "/dublin_castle.png",
        mapUrl: "https://www.google.com/maps/search/Dublin+Castle+Dublin",
        content: `
# Castelo de Dublin e Caminhada pela Cidade

Uma rota autoguiada pelo centro medieval e histórico de Dublin.

## Paradas
1.  **College Green**: Trinity College e o antigo Parlamento (Bank of Ireland).
2.  **Dame Street**: Caminhando em direção ao castelo.
3.  **Castelo de Dublin**: Visite os Apartamentos de Estado e o Jardim Dubh Linn.
4.  **Catedral de Christ Church**: Catedral medieval fundada c. 1030.
5.  **Temple Bar**: Bairro cultural com ruas de paralelepípedos.

## Como Chegar
- **Caminhada**: Comece no Trinity College Green, acessível por quase todos os ônibus do centro da cidade e pela linha verde do Luas.
        `
    }
];

export const proceduresPt: RouteItem[] = [
    {
        title: "Leap Card (Transporte)",
        description: "Economize até 30% em viagens. Como obter seu cartão para Ônibus, Luas e DART.",
        distance: "Transporte",
        icon: CreditCard,
        slug: "leap-card",
        image: "/leap_card.png",
        externalLink: "https://about.leapcard.ie/",
        mapUrl: "https://www.google.com/maps/search/Dublin+Bus+O'Connell+Street",
        content: `
# TFI Leap Card

O Leap Card é um cartão inteligente recarregável usado para pagar passagens de transporte público em Dublin e arredores. É mais barato do que pagar em dinheiro.

## Benefícios
- **Mais Barato**: As tarifas são geralmente 30% mais baixas que em dinheiro.
- **Capping**: Existem limites diários e semanais de gasto (Caps). Uma vez atingido o limite (ex: €5,60/dia para estudante/jovem adulto, €8,00/dia para adulto), todas as viagens subsequentes são gratuitas naquele dia.
- **Conveniência**: Não há necessidade de carregar moedas.

## Como Obter
1.  **Online**: Compre um cartão Adulto genérico ou solicite um cartão Jovem Adulto (19-23) / Estudante em [leapcard.ie](https://www.leapcard.ie).
2.  **Lojas**: Compre um cartão Adulto ou Criança em qualquer agente Payzone (muitos Centra, Spar e bancas de jornal).

## Como Usar
- **Ônibus**: Aproxime o cartão na máquina do motorista (diga o destino) OU no poste à direita (tarifa fixa/distância máxima).
- **Luas/DART**: Aproxime o cartão (Touch ON) na plataforma antes de entrar, e aproxime novamente (Touch OFF) na plataforma ao sair.
        `
    },
    {
        title: "Bibliotecas da Cidade de Dublin",
        description: "Participe das Bibliotecas da Cidade de Dublin gratuitamente. Acesse livros, e-books e espaços de estudo.",
        distance: "Estilo de Vida",
        icon: Book,
        slug: "ilac-library-card",
        image: "/ilac_library_real.png",
        externalLink: "https://www.dublincity.ie/dublin-city-libraries",
        mapUrl: "https://www.google.com/maps/search/Central+Library+ILAC+Centre",
        content: `
# Bibliotecas da Cidade de Dublin

Participar da biblioteca é totalmente **gratuito** e oferece acesso a uma enorme gama de recursos.

## O Que Você Recebe
- **Livros**: Empréstimo de livros de qualquer biblioteca do país.
- **Online**: E-books gratuitos, audiolivros (BorrowBox), jornais (PressReader) e cursos de idiomas.
- **Espaço**: Espaços de estudo e Wi-Fi gratuitos.
- **Impressão**: Serviços de impressão baratos.

## Como Participar
1.  **Vá Pessoalmente**: Vá a qualquer unidade da biblioteca (ex: a Biblioteca Central no ILAC Centre).
2.  **Traga ID**: Traga um documento com foto e comprovante de endereço (ex: uma conta ou extrato bancário).
3.  **Inscreva-se**: Preencha um formulário curto e receba seu cartão instantaneamente.

## Biblioteca Central ILAC
Localizada no ILAC Shopping Centre, Henry Street. Possui uma grande seção de aprendizado de idiomas e muitas mesas de estudo.
        `
    },
    {
        title: "Guia do Número PPS",
        description: "Guia passo a passo para solicitar seu Número de Serviço Público Pessoal.",
        distance: "Admin",
        icon: FileText,
        slug: "pps-number",
        image: "/pps_document.png",
        externalLink: "https://services.mywelfare.ie/",
        mapUrl: "https://www.google.com/maps/search/Intreo+Centre+Dublin",
        content: `
# Número PPS (Personal Public Service)

Você precisa de um Número PPS para trabalhar na Irlanda, acessar a previdência social e se registrar em serviços públicos.

## Pré-requisitos
Você deve estar morando na Irlanda. Não é possível solicitar antes de chegar.

## Como Aplicar
1.  **MyWelfare.ie**: A maioria das solicitações é feita online em [MyWelfare.ie](https://services.mywelfare.ie/).
2.  **Documentos**: Você precisará fazer o upload de:
    - **ID com Foto** (Passaporte ou ID Nacional).
    - **Comprovante de Endereço** (Conta de luz/gás, contrato de aluguel ou carta do anfitrião/empregador).
    - **Razão**: Prova de por que você precisa de um (ex: oferta de emprego).

## Prazo
Após a aplicação online, pode levar algumas semanas para receber a carta com o seu número.

## Dicas
- Se você ainda não tiver uma conta de luz em seu nome, uma carta do seu empregador confirmando seu endereço costuma ser aceita.
        `
    },
    {
        title: "Visto e Residência",
        description: "Informações sobre cartões IRP, carimbos (stamps) de permissão e renovações.",
        distance: "Legal",
        icon: Briefcase,
        slug: "visa-residency",
        image: "/irp_card.png",
        externalLink: "https://www.irishimmigration.ie/",
        mapUrl: "https://www.google.com/maps/search/Immigration+Service+Delivery+Burgh+Quay",
        content: `
# Atalhos de Visto e Residência

Navegar no sistema de imigração (ISD) é uma parte crítica da sua estadia.

## Cartão IRP (Irish Residence Permit)
Se você for de fora da UE/EEE e ficar mais de 90 dias, deve se registrar.
- **Dublin**: Registre-se no Burgh Quay Registration Office. Os agendamentos devem ser feitos por telefone (Freephone 1800 800 630).
- **Fora de Dublin**: Registre-se na delegacia de polícia (Garda) local.

## Carimbos (Stamps) Comuns
- **Stamp 1**: Portador de permissão de trabalho.
- **Stamp 1G**: Visto de graduado (após os estudos).
- **Stamp 2**: Visto de estudante (permite trabalhar até 20h/semana).
- **Stamp 4**: Residência de longo prazo / habilidades críticas (acesso total ao mercado de trabalho).

## Renovações
As renovações em Dublin agora são feitas online através do portal do ISD.
        `
    },
    {
        title: "Básico sobre Habitação",
        description: "Entendendo contratos de aluguel, depósitos e direitos do inquilino na Irlanda.",
        distance: "Moradia",
        icon: Home,
        slug: "housing-basics",
        image: "/housing_keys.png",
        externalLink: "https://www.rtb.ie/",
        content: `
# Moradia na Irlanda

Encontrar acomodação pode ser um desafio. Aqui está o que você precisa saber.

## Onde Procurar
- **Daft.ie**: O principal site de imóveis.
- **Rent.ie**: Outra opção popular.
- **Grupos no Facebook**: Frequentemente usados para divisão de casas (house shares).

## Termos Chave
- **Depósito**: Geralmente o valor de um mês de aluguel, devolvido quando você sai (se não houver danos).
- **Lease**: Um contrato legal. Leia-o com atenção.
- **RTB (Residential Tenancies Board)**: A agência que registra aluguéis e resolve disputas. Seu aluguel deve ser registrado aqui.

## Direitos do Inquilino
- Você tem direito a um "Rent Book" (livro de registros).
- Seu proprietário não pode entrar em sua casa sem permissão (exceto emergências).
- Períodos de aviso prévio se aplicam se eles quiserem encerrar o contrato.
        `
    },
    {
        title: "Inglês e Ensino Superior",
        description: "Guia de escolas de inglês (ELE), diplomas universitários e vistos de graduado.",
        distance: "Educação",
        icon: GraduationCap,
        slug: "education-system",
        image: "/university_education.png",
        externalLink: "https://www.education.ie/en/",
        content: `
# Educação para Migrantes

## Escolas de Inglês (ELE)
- Muitos estudantes extra-comunitários vêm para a Irlanda estudar inglês.
- **Stamp 2**: Se você estiver em um curso elegível (lista ILEP), pode trabalhar meio período (20h) e período integral (40h) durante as férias.
- **Frequência**: Você deve manter 85% de presença.

## Ensino Superior (Third Level)
- **Universidades**: TCD, UCD, DCU, TU Dublin, etc.
- **Taxas não-UE**: Estudantes internacionais pagam taxas mais altas do que cidadãos da UE.
- **Stamp 2**: Estudantes de graduação também têm direitos de trabalho.

## Caminhos Pós-Estudo
- **Stamp 1G**: Se você se formar com um Honours Degree (Nível 8) ou Mestrado (Nível 9), pode obter um "Visto de Graduado" de 1-2 anos para procurar trabalho em tempo integral.
        `
    },
    {
        title: "Bancos e Finanças",
        description: "Como abrir uma conta bancária na Irlanda. AIB, Bank of Ireland e alternativas digitais.",
        distance: "Finanças",
        icon: Landmark,
        slug: "banking-ireland",
        image: "/cost_of_living.png",
        content: `
# Abrir uma Conta Bancária na Irlanda

Ter uma conta bancária local é essencial para receber seu salário, pagar o aluguel e gerenciar suas despesas diárias.

## Bancos Tradicionais("Os dois grandes")
Estes bancos têm muitas agências físicas e oferecem serviços completos.
- ** AIB(Allied Irish Banks) **: Um dos maiores.Geralmente exigem um PPSN e comprovante de endereço para abrir uma conta.
- ** Bank of Ireland(BoI) **: Outro banco tradicional importante com uma longa história.Requisitos semelhantes ao AIB.

## Bancos Digitais(Rápido e Fácil)
Muitos imigrantes preferem começar com um banco digital porque a configuração é muito mais rápida.
- ** Revolut **: Extremamente popular na Irlanda.Você pode abrir uma conta em minutos usando seu passaporte e cartão IRP.Fornece um IBAN irlandês.
- ** Money Jar **: Uma alternativa digital baseada na Irlanda que é muito amigável para imigrantes.

## O Que Você Precisa
1. ** Identificação Válida **: Geralmente seu Passaporte.
2. ** Comprovante de Endereço **: Uma conta de luz, contrato de aluguel ou carta do seu empregador / anfitrião.
3. ** Número PPS **: Frequentemente exigido pelos bancos tradicionais para verificar seu status fiscal.

## Dicas
    - A maioria dos bancos tradicionais cobra uma taxa trimestral de manutenção(cerca de €4.50 - €6.00).
- Contas de estudante(se você tiver um Stamp 2) costumam ser isentas de taxas de manutenção.
        `
    },
    {
        title: "Guia do myGovID",
        description: "Acesso seguro oficial para serviços governamentais (Revenue, MyWelfare, NDLS).",
        distance: "Governo",
        icon: Shield,
        slug: "mygovid-guide",
        image: "/mygovid_secure.png",
        externalLink: "https://www.mygovid.ie/",
        content: `
# 🔐 Guia Completo do myGovID

O myGovID é a sua conta única e segura que permite aceder a vários serviços governamentais irlandeses online. É essencial para gerir os seus impostos e apoios sociais.

## 🔸 Tipos de Conta

### 1. Conta Básica
*   **O que você precisa**: Apenas um endereço de e-mail válido.
*   **Ideal para**: Agendar compromissos (ex: para o PPSN ou o PSC) e aceder a serviços básicos online.

### 2. Conta Verificada (Fortemente Recomendada)
*   **O que você precisa**: Um número PPS e um Cartão de Serviços Públicos (PSC).
*   **Ideal para**: Acesso total ao **Revenue (myAccount)**, **MyWelfare** (pagamentos sociais) e **NDLS** (Carta de Condução).

## 🛠️ Como Configurar
1.  **Criar Conta Básica**: Vá para [myGovID.ie](https://www.mygovid.ie/) e clique em 'Create Account'.
2.  **Verificar E-mail**: Segure a sua conta através do link enviado para a sua caixa de entrada.
3.  **Verificar-se**: Assim que tiver o seu PPSN, agende um 'compromisso para o PSC' num centro Intreo. Depois de obter o seu cartão, poderá 'verificar' o seu myGovID online para desbloquear todas as funcionalidades.

[Portal Oficial do myGovID](https://www.mygovid.ie/)
        `
    },
    {
        title: "Impostos (Revenue)",
        description: "Gerencie seu PAYE, evite o Emergency Tax e solicite créditos fiscais.",
        distance: "Financeiro",
        icon: Landmark,
        slug: "revenue-taxes",
        image: "/pps_document.png",
        externalLink: "https://www.revenue.ie/",
        content: `
# 💸 Gestão de Impostos (Revenue)

Na Irlanda, a autoridade fiscal chama-se **Revenue**. Como funcionário, normalmente paga impostos através do sistema **PAYE** (Pay As You Earn - Pague conforme ganha).

## 🚨 Evite o 'Emergency Tax'!
Se o seu empregador não tiver o seu PPSN ou se o seu trabalho não estiver registado no Revenue, poderá ser colocado no **Emergency Tax**, que pode reter até 40% do seu salário!

**Como resolver:**
1.  Registe-se no **Revenue myAccount**.
2.  Registe o seu novo emprego assim que começar.
3.  Uma vez registado, o seu empregador receberá uma 'notificação' e reembolsará qualquer imposto pago a mais no seu próximo salário.

## 💰 Créditos Fiscais e Reembolsos
Os créditos fiscais reduzem o valor do imposto que você paga. Créditos comuns incluem:
*   **Crédito Fiscal Pessoal**: Para todos os residentes.
*   **Crédito Fiscal PAYE**: Para quem trabalha por conta de outrem.
*   **Crédito Fiscal de Aluguel (Rent Credit)**: Pode receber dinheiro de volta (até €750+ por ano) se pagar aluguer privado!

## 💻 Portal myAccount
Use o [Revenue myAccount](https://www.revenue.ie/) para:
- Rever os seus impostos anualmente.
- Solicitar os seus créditos fiscais (como o Rent Credit).
- Adicionar ou alterar empregos.

[Iniciar sessão no Revenue myAccount](https://www.revenue.ie/)
        `
    }
];

export const mentalHealthPt: RouteItem[] = [
    {
        title: "Encontre um Psicólogo",
        description: "Diretório de psicólogos multiculturais e multilíngues na Irlanda.",
        distance: "Diretório",
        icon: Brain,
        slug: "find-psychologist",
        image: "/psychology_sunset_v2.png",
        content: `
# Encontre um Psicólogo

Encontrar o profissional certo é importante.Aqui estão recursos para suporte multicultural e multilíngue.

## Diretórios
    - ** PSI(Psychological Society of Ireland) **: Use a ferramenta "Find a Psychologist" no site deles.Pode filtrar por idioma.
- ** MyMind **: Provedor sem fins lucrativos de cuidados acessíveis.Oferecem serviços em mais de 15 idiomas.
- ** Counselling Directory **: Banco de dados abrangente de conselheiros e psicoterapeutas.
        `
    },
    {
        title: "Grupos de Apoio",
        description: "Conecte-se com outros imigrantes compartilhando experiências de adaptação.",
        distance: "Comunidade",
        icon: Users,
        slug: "support-groups",
        content: `
# Grupos de Apoio

Conectar - se com outras pessoas que passam por experiências semelhantes pode ser muito curativo.

## Grupos para Imigrantes
    - ** NCP(New Communities Partnership) **: Oferece vários serviços de apoio e grupos sociais.
- ** First Fortnight **: Instituição de caridade mental baseada em artes.
- ** Meetup.com **: Procure por grupos de "Expat" ou "New in Dublin".
        `
    },
    {
        title: "Linhas de Apoio em Crise",
        description: "Suporte confidencial 24/7 para necessidades urgentes de saúde mental.",
        distance: "Imediato",
        icon: Phone,
        slug: "crisis-helplines",
        content: `
# Linhas de Crise

Se você ou alguém que você conhece estiver em perigo, entre em contato agora.

## Serviços 24 / 7
    - ** Samaritans **: Ligue grátis para ** 116 123 **.
- ** Texto 50808 **: Serviço de texto gratuito 24 / 7. Envie HELLO para 50808.
    - ** Pieta House **: Para risco de suicídio ou automutilação.Ligue grátis para ** 1800 247 247 **.
        `
    },
    {
        title: "Psicologia de Atenção Primária (HSE)",
        description: "Serviços públicos de psicologia disponíveis através do seu centro de saúde local.",
        distance: "Serviço HSE",
        icon: Stethoscope,
        slug: "hse-primary-care",
        externalLink: "https://www2.hse.ie/mental-health/services-support/primary-care-psychology/",
        content: `
# Psicologia de Atenção Primária(HSE)

Serviços públicos de psicologia estão disponíveis através da Atenção Primária.Estes serviços são para pessoas com dificuldades de saúde mental de leves a moderadas.

## Como Acessar
    - ** Encaminhamento **: Geralmente requer um encaminhamento do seu médico de família(GP).
- ** Custo **: Gratuito.
- ** Listas de Espera **: Esteja ciente de que os tempos de espera podem variar conforme a área.

[Visitar site do HSE](https://www2.hse.ie/mental-health/services-support/primary-care-psychology/)
        `
    },
    {
        title: "Treehouse Practice",
        description: "Serviços especializados de psicologia clínica e psicoterapia.",
        distance: "Prática Privada",
        icon: Stethoscope,
        slug: "treehouse-practice",
        externalLink: "https://treehousepractice.ie/",
        content: `
# Treehouse Practice

Um serviço privado especializado em psicologia clínica e psicoterapia.

## Serviços
- Terapia individual para adultos e crianças.
- Atendimento focado em trauma.
- Avaliações especializadas.

[Visitar Treehouse Practice](https://treehousepractice.ie/)
            `
    },
    {
        title: "Grove Court (Inclusão Social)",
        description: "Suporte de ligação de inclusão social para comunidades marginalizadas.",
        distance: "Suporte Específico",
        icon: Users,
        slug: "grove-court-social-inclusion",
        externalLink: "https://www2.hse.ie/services/primary-care-centres/grove-court-primary-care/departments-services/social-inclusion-liasion-officer/",
        content: `
# Grove Court - Inclusão Social

O Oficial de Ligação de Inclusão Social fornece apoio a membros de comunidades marginalizadas.

## Áreas de Foco
    - Apoio para migrantes, refugiados e pessoas no sistema de proteção internacional.
- Conectar indivíduos aos serviços de atenção primária.
- Navegar no sistema de saúde.

[Visitar HSE Grove Court](https://www2.hse.ie/services/primary-care-centres/grove-court-primary-care/departments-services/social-inclusion-liasion-officer/)
        `
    },
];

export const exerciseGeneralPt: RouteItem[] = [
    {
        title: "Corrida Costeira (Dublin Bay)",
        description: "Respire o ar do mar neste caminho plano e cênico. Perfeito para corridas matinais.",
        distance: "5-10 km",
        icon: Bike,
        slug: "coastal-run",
        mapUrl: "https://www.google.com/maps/search/Clontarf+Promenade",
        content: "# Corrida Costeira (Dublin Bay)\n\nRota plana e bonita à beira-mar de Clontarf."
    },
    {
        title: "Esportes Comunitários",
        description: "Academias ao ar livre e encontros esportivos em parques como Herbert e Fairview.",
        distance: "Vários",
        icon: Users,
        slug: "community-sports",
        image: "/community_sports.png",
        content: `
# Esportes Comunitários

## Grupos Gratuitos
- ** parkrun Ireland **: Corridas de 5km gratuitas e cronometradas todos os sábados às 9: 30 AM.
- ** Academias ao Ar Livre **: A maioria dos grandes parques de Dublin possui equipamentos de ginástica gratuitos.
        `
    }
];

export const womensHealthPt: RouteItem[] = [
    {
        title: "Cervical Check Gratuito",
        description: "Programa nacional de triagem. Gratuito para mulheres de 25 a 65 anos.",
        distance: "Saúde",
        icon: Heart,
        slug: "cervical-check",
        image: "/cervical_check.png",
        externalLink: "https://www.hse.ie/eng/cervicalcheck/",
        content: `
# CervicalCheck

Programa Nacional de Triagem Cervical.Gratuito para todas as mulheres residentes de 25 a 65 anos.
        `
    },
    {
        title: "Serviços de Maternidade",
        description: "Guia de cuidados de maternidade públicos na Irlanda. Registro e escolha de hospitais.",
        distance: "Saúde",
        icon: Baby,
        slug: "maternity-services",
        image: "/maternity_care.png",
        externalLink: "https://www.hse.ie/eng/services/list/3/maternity/",
        content: `
# Cuidados de Maternidade

Toda mulher grávida e residente na Irlanda tem direito a cuidados de maternidade gratuitos.

## Hospitais em Dublin
    - The Rotunda
        - The Coombe
            - National Maternity Hospital(Holles St)
                `
    },
    {
        title: "Diretório de Clínicas Femininas",
        description: "Encontre clínicas especializadas em saúde da mulher na sua área. Inclui centros da HSE e provedores independentes.",
        distance: "Diretório",
        icon: Stethoscope,
        slug: "womens-clinics",
        image: "/womens_health.png",
        externalLink: "https://www.hse.ie/eng/services/list/2/healthcentres/womenshealth/",
        content: `
# Clínicas de Saúde da Mulher em Dublin

Para cuidados abrangentes, você pode visitar centros especializados que oferecem planejamento familiar, saúde sexual e exames preventivos.

## Principais Centros
- **Well Woman Centre**: Unidades na Liffey St, Coolock e Pembroke Rd. Especialistas em saúde reprodutiva.
- **IFPA (Irish Family Planning Association)**: Clínicas no centro da cidade (Cathal Brugha St) e Tallaght.
- **Hospitais de Maternidade**: Centros como o Rotunda ou Holles Street oferecem clínicas ginecológicas especializadas.

## Serviços Disponíveis
- Contracepção (incluindo o 'Free Contraception Scheme' para idades de 17 a 35 anos).
- Rastreio de saúde sexual (IST).
- Cuidados na menopausa e exames ginecológicos.

[Ver diretório completo da HSE](https://www.hse.ie/eng/services/list/2/healthcentres/womenshealth/)
`
    },
    {
        title: "Redes de Apoio",
        description: "AkiDwA, NCP e Cairde - Conectando mulheres imigrantes para suporte social e de saúde.",
        distance: "Comunidade",
        icon: Users,
        slug: "womens-support-networks",
        image: "/womens_support.png",
        content: `
# Suporte a Mulheres Migrantes

Conectar - se com outras pessoas é fundamental para o bem - estar.

## Organizações
    - ** [AkiDwA](https://akidwa.ie/)**: Uma rede nacional de mulheres imigrantes que vivem na Irlanda.
- ** [NCP(New Communities Partnership)](https://www.newcommunities.ie/)**: Frequentemente organiza grupos de mulheres.
- ** [Cairde](https://cairde.ie/)**: Trabalhando para reduzir as desigualdades na saúde.
        `
    },
];

export const gymsPt: RouteItem[] = [
    {
        title: "Conselho Municipal de Dublin (Fitness)",
        description: "Academias e piscinas acessíveis geridas pelo conselho da cidade.",
        distance: "Vários Locais",
        icon: Dumbbell,
        slug: "dcc-fitness",
        content: `
# Dublin City Council Fitness

Centros públicos acessíveis com piscinas e academias completas.
        `
    }
];

export const physiotherapyPt: RouteItem[] = [
    {
        title: "Rede de Fisioterapeutas Migrantes",
        description: "Conecte-se com fisioterapeutas qualificados da sua comunidade.",
        distance: "Comunidade",
        icon: Users,
        slug: "migrant-physio-network",
        image: "/physiotherapy_session.png",
        content: `
# Fisioterapeutas da Comunidade

Muitos brasileiros e outros imigrantes são fisioterapeutas qualificados oferecendo serviços.Procure recomendações em grupos de WhatsApp e Facebook.
        `
    }
];

export const professionalsPt: Professional[] = [
    {
        id: "physio-1",
        name: "Carlos Mendez",
        role: "Physiotherapist",
        specialty: ["Lesões Esportivas", "Dor nas Costas"],
        languages: ["Inglês", "Espanhol", "Português"],
        location: "Dublin 1 (Centro)",
        contact: "+353891234567",
        rating: 4.8,
        reviews: 24,
        verified: true
    },
    {
        id: "physio-3",
        name: "Mariana Silva",
        role: "Physiotherapist",
        specialty: ["Saúde da Mulher", "Soalho Pélvico"],
        languages: ["Inglês", "Português"],
        location: "Dublin 15 (Blanchardstown)",
        contact: "mariana.physio@example.com",
        rating: 4.9,
        reviews: 15,
        verified: true
    }
];

export const roadmapPt: RoadmapItem[] = [
    {
        id: "pps",
        title: "Solicitar PPSN",
        description: "Seu número fiscal para trabalhar legalmente.",
        icon: FileText,
        category: "Admin"
    },
    {
        id: "leap",
        title: "Pegar Leap Card",
        description: "Transporte muito mais barato em Dublin.",
        icon: CreditCard,
        category: "Life"
    },
    {
        id: "irp",
        title: "Registro IRP",
        description: "Seu cartão de residência obrigatório (Stamp 2/1/4).",
        icon: Briefcase,
        category: "Legal"
    }
];

export const eventsPt: EventItem[] = [
    {
        id: "1",
        title: "Piquenique no Parque",
        date: "20 Fev",
        time: "14:00",
        location: "St Stephen's Green",
        description: "Encontro casual para novos residentes.",
        category: "Social",
        free: true
    }
];

export const popularKeywordsPt = [
    { label: "Visto IRP", query: "visto" },
    { label: "Número PPS", query: "pps" },
    { label: "Aluguel", query: "aluguel" },
    { label: "Parques", query: "parque" },
    { label: "Natação", query: "natação" },
    { label: "Empregos", query: "emprego" },
];

export const roadmapDataPt: RoadmapItem[] = [
    {
        id: "leap-card",
        title: "Leap Card",
        description: "Essencial para transporte público (Ônibus, Luas, DART).",
        icon: CreditCard,
        category: "Life"
    },
    {
        id: "ppsn",
        title: "Número PPS",
        description: "Seu número de referência único para impostos e serviços públicos.",
        icon: FileText,
        category: "Admin"
    },
    {
        id: "bank-account",
        title: "Conta Bancária",
        description: "Necessária para salário e muitos serviços locais.",
        icon: Landmark,
        category: "Admin"
    },
    {
        id: "irp",
        title: "Cartão IRP",
        description: "Permissão de residência irlandesa para cidadãos extra-comunitários.",
        icon: Briefcase,
        category: "Legal"
    },
    {
        id: "gp",
        title: "Registrar-se no GP",
        description: "Encontre um médico local para suas necessidades de saúde.",
        icon: Stethoscope,
        category: "Health"
    }
];

export const jobStepsPt: JobStep[] = [
    {
        id: "cv-format",
        title: "Formato de CV Irlandês",
        description: "Mantenha em menos de 2 páginas. Sem foto, sem data de nascimento.",
        icon: FileText
    },
    {
        id: "linkedin",
        title: "Otimize o LinkedIn",
        description: "Atualize sua localização para Dublin para aparecer nas buscas de recrutadores.",
        icon: Users
    },
    {
        id: "pps-job",
        title: "PPS para Trabalho",
        description: "Você precisa de um número PPS para evitar o 'Emergency Tax'.",
        icon: CreditCard
    },
    {
        id: "networking",
        title: "Networking Local",
        description: "Participe de meetups e eventos da indústria na cidade.",
        icon: Users
    }
];

export const resourceLocationsPt: ResourceLocation[] = [
    {
        id: "intreo-parnell",
        name: "Intreo Centre Parnell Street",
        description: "Escritório principal para PPSN e serviços de previdência social.",
        category: "Admin",
        address: "Parnell St, Dublin 1",
        mapUrl: "https://www.google.com/maps/search/Intreo+Centre+Parnell+Street"
    },
    {
        id: "central-library",
        name: "Biblioteca Central Ilac",
        description: "Ótima para estudo silencioso, Wi-Fi gratuito e impressão.",
        category: "Leisure",
        address: "Ilac Centre, Henry St, Dublin 1",
        mapUrl: "https://www.google.com/maps/search/Central+Library+Ilac+Centre"
    }
];

export const dublinSlangPt = [
    { phrase: "What's the craic?", meaning: "Como vai? / Alguma novidade?", usage: "Saudação padrão de Dublin." },
    { phrase: "Deadly", meaning: "Excelente / Incrível", usage: "Aquele novo café em Smithfield é 'deadly'." },
    { phrase: "Grand", meaning: "Bem / Tudo certo / Bom", usage: "I'm grand, thanks." },
    { phrase: "Sound", meaning: "Confiável / Pessoa legal / Obrigado", usage: "Obrigado pela carona, você é 'sound'." },
    { phrase: "Story?", meaning: "Qual as novidades? / Como vai?", usage: "Yo, story bud?" },
    { phrase: "Eejit", meaning: "Idiota (geralmente brincalhão)", usage: "Não seja um 'eejit'." },
];
