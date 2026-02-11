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
    Dumbbell
} from "lucide-react";
import { RouteItem, RoadmapItem, JobStep, ResourceLocation, EventItem } from "./data";

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
    }
];

export const swimmingPt: RouteItem[] = [
    {
        title: "The Forty Foot",
        description: "Local icônico de natação em águas profundas em Sandycove.",
        distance: "Sandycove",
        difficulty: "Medium",
        icon: Waves,
        slug: "the-forty-foot",
        image: "/forty_foot.png",
        content: `
# The Forty Foot

O local de natação mais famoso de Dublin.

## Características
- **Águas Profundas**: Você pula diretamente em águas profundas.
- **Vestiários**: Abrigos de concreto disponíveis.
- **Tradição**: O mergulho de Natal aqui é lendário.

## Como Chegar
- **DART**: 15 min a pé da estação Sandycove/Glasthule.
        `
    }
];

export const cyclingPt: RouteItem[] = [
    {
        title: "Caminho Costeiro de Clontarf",
        description: "Ciclovia plana e cênica com vista para a Baía de Dublin.",
        distance: "8 km",
        difficulty: "Easy",
        icon: Bike,
        slug: "clontarf-coastal-path",
        image: "/clontarf_coastal_path_v3.png",
        content: `
# Clontarf para Sutton

Uma das rotas mais seguras e bonitas de Dublin, quase totalmente fora da estrada.

## Como Chegar
- **Ônibus**: Rota 130.
- **DART**: Estação Clontarf Road.
        `
    }
];

export const tourismPt: RouteItem[] = [
    {
        title: "Trilha dos Penhascos de Howth",
        description: "Vistas costeiras incríveis a uma curta viagem de DART.",
        distance: "6 km",
        difficulty: "Medium",
        icon: Camera,
        slug: "howth-cliff-path",
        image: "/howth.png",
        mapUrl: "https://www.google.com/maps/search/Howth+Cliff+Path+Loop",
        content: `
# Howth Cliff Path Loop

Vistas dramáticas do mar e ar puro a poucos minutos do centro.

## Destaques
- **Penhascos**: Vistas espetaculares do Mar da Irlanda.
- **Farol Bailey**: Local icônico para fotos.
- **Focas**: Muitas vezes visíveis no porto.

## Como Chegar
- **DART**: Estação Howth (fim da linha).
        `
    }
];

export const proceduresPt: RouteItem[] = [
    {
        title: "Leap Card (Transporte)",
        description: "Economize até 30% em viagens. Cartão essencial para Dublin.",
        distance: "Transporte",
        difficulty: "Easy",
        icon: CreditCard,
        slug: "leap-card",
        image: "/leap_card.png",
        externalLink: "https://about.leapcard.ie/",
        content: `
# TFI Leap Card

O Leap Card é o cartão inteligente recarregável usado para pagar transporte público em Dublin.

## Benefícios
- **Mais Barato**: Tarifas 30% menores que dinheiro.
- **Teto de Gasto (Capping)**: Existe um limite diário de gasto.

## Como Obter
- **Lojas**: Centras e Spars com selo Payzone.
- **Online**: leapcard.ie
        `
    },
    {
        title: "Guia do Número PPS",
        description: "Guia passo a passo para solicitar seu número de serviço público.",
        distance: "Admin",
        difficulty: "Easy",
        icon: FileText,
        slug: "pps-number",
        image: "/pps_document.png",
        externalLink: "https://services.mywelfare.ie/",
        content: `
# Número PPS

Essencial para trabalhar e acessar serviços sociais na Irlanda.

## Como Aplicar
1.  **Online**: MyWelfare.ie.
2.  **Documentos**: Passaporte, Comprovante de Endereço e Razão (ex: oferta de emprego).
        `
    },
    {
        title: "Visto e Residência (IRP)",
        description: "Informações sobre o cartão IRP e permissões de residência.",
        distance: "Legal",
        difficulty: "Medium",
        icon: Briefcase,
        slug: "visa-residency",
        image: "/irp_card.png",
        externalLink: "https://www.irishimmigration.ie/",
        content: `
# Visto e Residência

## Cartão IRP (Irish Residence Permit)
Se você for de fora da UE e ficar mais de 90 dias.
- **Agendamento**: Por telefone (1800 800 630) para Dublin.

## Stamps Comuns
- **Stamp 2**: Estudante (permite trabalho 20h/40h).
- **Stamp 1G**: Graduado (procura de emprego full-time).
- **Stamp 4**: Residência de longo prazo.
        `
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
