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

export const parksEs: RouteItem[] = [
    {
        title: "Parque Fairview",
        description: "Caminos anchos y campos deportivos. Ideal para una vuelta fácil y plana.",
        distance: "Bucle de 1.5 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "fairview-park",
        image: "/fairview_park_v3.png",
        mapUrl: "https://www.google.com/maps/search/Fairview+Park+Dublin",
        content: `
# Parque Fairview

El Parque Fairview es un gran parque público en Fairview, Dublín.

## Características
- **Caminos Anchos**: Perfecto para caminar, trotar y andar en bicicleta.
- **Deportes**: Incluye canchas de fútbol y un parque de skate.
- **Juegos**: Gran zona de juegos para niños.

## Cómo llegar
- **Autobús**: Rutas 14, 15, 27, 27a, 130.
- **Tren**: Estación DART Clontarf Road.
        `
    },
    {
        title: "Phoenix Park",
        description: "Parque masivo con ciervos. Prueba las colinas cerca del fuerte.",
        distance: "5+ km",
        difficulty: "Medium",
        icon: TreeDeciduous,
        slug: "phoenix-park",
        image: "/phoenix_park.png",
        mapUrl: "https://www.google.com/maps/search/Phoenix+Park+Dublin",
        content: `
# Phoenix Park

El parque cerrado más grande de cualquier capital europea.

## Destacados
- **Ciervos Salvajes**: Una manada vive aquí desde el siglo XVII.
- **Zoológico de Dublín**: Ubicado dentro del parque.
- **Áras an Uachtaráin**: Residencia del Presidente.

## Rutas
- **Magazine Fort Loop**: Colinas moderadas.
- **Avenida Chesterfield**: Gran recta para ciclismo.
        `
    },
    {
        title: "Parque St. Anne's",
        description: "Jardines de rosas y senderos boscosos en Clontarf.",
        distance: "4 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "st-annes-park",
        image: "/st_annes.png",
        mapUrl: "https://www.google.com/maps/search/St.+Anne's+Park+Dublin",
        content: `
# Parque St. Anne's

Antigua finca de la familia Guinness.

## Destacados
- **Jardín de Rosas**: Famoso mundialmente.
- **Mercado**: Mercado de comida los sábados ("Red Stables").
- **Senderos**: Kilómetros de caminos boscosos.
        `
    },
    {
        title: "Parque Liffey Valley",
        description: "Senderos escénicos junto al río Liffey.",
        distance: "3 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "liffey-valley-park",
        image: "/liffey_valley.png",
        mapUrl: "https://www.google.com/maps/search/Liffey+Valley+Park+Dublin",
        content: `
# Parque Liffey Valley

Un parque lineal a lo largo del Río Liffey.

## Características
- **Tranquilidad**: Escape del ruido de la M50.
- **Naturaleza**: Bueno para ver garzas.
        `
    },
    {
        title: "Parque Herbert",
        description: "Hermoso parque formal en Ballsbridge con un estanque.",
        distance: "Bucle de 1 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "herbert-park",
        image: "/herbert_park.png",
        mapUrl: "https://www.google.com/maps/search/Herbert+Park+Dublin",
        content: `
# Parque Herbert

Ubicado en la zona exclusiva de Ballsbridge.

## Destacados
- **El Estanque**: Hogar de patos y cisnes.
- **Mercado**: Mercado de comida los domingos.
- **Deportes**: Canchas de tenis y bolos.
        `
    },
    {
        title: "Deer Park (Mt. Merrion)",
        description: "Parque elevado con vistas panorámicas de la bahía.",
        distance: "2 km",
        difficulty: "Medium",
        icon: TreeDeciduous,
        slug: "deer-park",
        image: "/deer_park.png",
        mapUrl: "https://www.google.com/maps/search/Deer+Park+Mount+Merrion",
        content: `
# Deer Park

## La Vista
La mejor característica es la vista de toda la ciudad y la bahía de Dublín.
        `
    },
    {
        title: "Parque Harold's Cross",
        description: "Encantador parque victoriano, perfecto para una caminata comunitaria.",
        distance: "0.5 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "harolds-cross-park",
        image: "/harolds_cross.png",
        mapUrl: "https://www.google.com/maps/search/Harold's+Cross+Park+Dublin",
        content: `
# Parque Harold's Cross

Pequeño parque comunitario bien mantenido.

## Características
- **Juegos**: Popular entre familias locales.
- **Café**: Kiosco de café disponible.
        `
    },
    {
        title: "Parque Dartry",
        description: "Caminata tranquila a lo largo del río Dodder.",
        distance: "2 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "dartry-park",
        image: "/dartry_park.png",
        mapUrl: "https://www.google.com/maps/search/Dartry+Park+Dublin",
        content: `
# Parque Dartry

Franja de parque a lo largo del río.

## Características
- **Paseo del Río**: Conecta Milltown y Rathgar.
- **Salvaje**: Se siente más natural.
        `
    },
    {
        title: "Merrion Square",
        description: "Parque georgiano histórico con estatuas y flores.",
        distance: "Bucle de 0.8 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "merrion-square",
        image: "/merrion_square.png",
        mapUrl: "https://www.google.com/maps/search/Merrion+Square+Dublin",
        content: `
# Merrion Square

El corazón del Dublín georgiano.

## Destacados
- **Oscar Wilde**: Famosa estatua del escritor.
- **Arte**: Los domingos, artistas venden sus pinturas.
        `
    },
    {
        title: "St. Stephen's Green",
        description: "El parque victoriano más famoso del centro.",
        distance: "Bucle de 1.2 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "st-stephens-green",
        image: "/stephens_green.png",
        mapUrl: "https://www.google.com/maps/search/St.+Stephen's+Green+Dublin",
        content: `
# St. Stephen's Green

Un oasis en el centro de la ciudad.

## Destacados
- **El Lago**: Alimentar a los patos es tradición.
- **Kiosco de Música**: Conciertos en verano.
- **Almuerzo**: Lugar popular para almorzar.
        `
    }
];

export const swimmingEs: RouteItem[] = [
    {
        title: "The Forty Foot",
        description: "Lugar icónico de natación en aguas profundas en Sandycove.",
        distance: "Sandycove",
        difficulty: "Medium",
        icon: Waves,
        slug: "the-forty-foot",
        image: "/forty_foot.png",
        content: `
# The Forty Foot

El lugar de natación más famoso de Dublín.

## Características
- **Aguas Profundas**: Saltas directamente al agua profunda.
- **Cambiadores**: Refugios de concreto disponibles.
- **Tradición**: El nado de Navidad es legendario.

## Cómo llegar
- **DART**: 15 min a pie desde Sandycove/Glasthule.
- **Autobús**: Ruta 7 o 7a.
        `
    },
    {
        title: "Playa Seapoint",
        description: "Lugar popular con Torre Martello. Secciones poco profundas.",
        distance: "Monkstown",
        difficulty: "Easy",
        icon: Waves,
        slug: "seapoint-beach",
        image: "/seapoint.png",
        mapUrl: "https://www.google.com/maps/search/Seapoint+Beach+Dublin",
        content: `
# Playa Seapoint

Playa con Bandera Azul entre Blackrock y Monkstown.

## Cómo llegar
- **DART**: Estación Seapoint está al lado.
        `
    },
    {
        title: "Vico Bathing Place",
        description: "Impresionante lugar apartado en Dalkey con vistas.",
        distance: "Dalkey",
        difficulty: "Medium",
        icon: Waves,
        slug: "vico-bathing-place",
        image: "/vico_bathing.png",
        mapUrl: "https://www.google.com/maps/search/Vico+Bathing+Place",
        content: `
# The Vico

Secreto local con vistas increíbles de la Bahía de Killiney.

## Cómo llegar
- **Caminar**: 15 min desde DART Dalkey.
        `
    },
    {
        title: "Playa Sandycove",
        description: "Pequeña playa de arena protegida junto al Forty Foot.",
        distance: "Sandycove",
        difficulty: "Easy",
        icon: Waves,
        slug: "sandycove-beach",
        image: "/sandycove.png",
        mapUrl: "https://www.google.com/maps/search/Sandycove+Beach+Dublin",
        content: `
# Playa Sandycove

Pequeña ensenada protegida.

## Cómo llegar
- **DART**: 15 min a pie desde Sandycove/Glasthule.
        `
    },
    {
        title: "Hawk Cliff",
        description: "Joya escondida cerca de Vico. Acceso por escalones empinados.",
        distance: "Dalkey",
        difficulty: "Hard",
        icon: Waves,
        slug: "hawk-cliff",
        image: "/hawk_cliff.png",
        mapUrl: "https://www.google.com/maps/search/Hawk+Cliff+Vico+Road",
        content: `
# Hawk Cliff

Lugar más accidentado a lo largo de Vico Road.

## Cómo llegar
- **Caminar**: 15-20 min desde DART Dalkey.
        `
    },
    {
        title: "High Rock",
        description: "Afloramiento rocoso en Malahide para nadadores experimentados.",
        distance: "Malahide",
        difficulty: "Hard",
        icon: Waves,
        slug: "high-rock",
        image: "/high_rock.png",
        mapUrl: "https://www.google.com/maps/search/High+Rock+Malahide",
        content: `
# High Rock (Malahide)

Popular para nadadores seguros en el lado norte.

## Cómo llegar
- **Autobús**: Ruta 42 a Malahide.
        `
    },
    {
        title: "Poolbeg (Shelly Banks)",
        description: "Nada con vista a las chimeneas. Playa de arena.",
        distance: "Poolbeg",
        difficulty: "Easy",
        icon: Waves,
        slug: "poolbeg",
        image: "/poolbeg.png",
        mapUrl: "https://www.google.com/maps/search/Shelly+Banks+Beach+Poolbeg",
        content: `
# Poolbeg / Shelly Banks

Ubicado en la península del Great South Wall.

## Cómo llegar
- **Autobús**: Bus 1 a Sandymount y caminar.
- **Bici**: Accesible en bicicleta.
        `
    },
    {
        title: "Bull Wall",
        description: "Refugio tradicional cerca del puente de madera.",
        distance: "Clontarf",
        difficulty: "Medium",
        icon: Waves,
        slug: "bull-wall",
        image: "/bull_wall.png",
        mapUrl: "https://www.google.com/maps/search/North+Bull+Wall+Swimming",
        content: `
# North Bull Wall

Cerca de Clontarf en el lado norte.

## Cómo llegar
- **Autobús**: Ruta 130.
        `
    }
];

export const cyclingEs: RouteItem[] = [
    {
        title: "Camino Costero Clontarf",
        description: "Ciclovía plana y escénica con vistas a la bahía.",
        distance: "8 km",
        difficulty: "Easy",
        icon: Bike,
        slug: "clontarf-coastal-path",
        image: "/clontarf_coastal_path_v3.png",
        content: `
# Clontarf a Sutton

Una de las rutas más seguras y escénicas. Casi totalmente fuera de carretera.

## Cómo llegar
- **Autobús**: Ruta 130 a Clontarf.
- **DART**: Estación Clontarf Road.
        `
    },
    {
        title: "Bucle Phoenix Park",
        description: "Pedalea junto a los ciervos y el zoológico en caminos anchos.",
        distance: "Bucle de 10 km",
        difficulty: "Medium",
        icon: Bike,
        slug: "phoenix-park-loop",
        image: "/phoenix_park.png",
        content: `
# Ciclismo en Phoenix Park

El parque tiene una extensa red de ciclovías.

## Cómo llegar
- **Luas**: Línea Roja a Heuston.
- **Alquiler**: Phoenix Park Bikes en la entrada de Parkgate St.
        `
    },
    {
        title: "Vía Verde Grand Canal",
        description: "Paseo tranquilo por el canal desde el centro hacia el oeste.",
        distance: "12 km+",
        difficulty: "Easy",
        icon: Bike,
        slug: "grand-canal-greenway",
        image: "/grand_canal.png",
        content: `
# Grand Canal Greenway

Corredor pacífico desde los Docklands hacia el oeste.

## Cómo llegar
- **Luas**: Línea Verde o Roja.
        `
    },
    {
        title: "Vía Verde Royal Canal",
        description: "Ruta histórica del canal en el lado norte.",
        distance: "10 km+",
        difficulty: "Easy",
        icon: Bike,
        slug: "royal-canal-greenway",
        image: "/royal_canal.png",
        content: `
# Royal Canal Greenway

Paralelo a la línea de tren desde los Docklands.

## Cómo llegar
- **Tren**: Línea Maynooth.
        `
    },
    {
        title: "Vía Verde Dodder",
        description: "Hermosa ruta de río conectando Ballsbridge con Rathfarnham.",
        distance: "5 km",
        difficulty: "Medium",
        icon: Bike,
        slug: "dodder-greenway",
        image: "/dodder_greenway.png",
        content: `
# Dodder Greenway

Ruta encantadora siguiendo el Río Dodder.
        `
    },
    {
        title: "Sutton a Sandycove (S2S)",
        description: "Ruta costera ambiciosa. Prueba la sección norte.",
        distance: "10 km",
        difficulty: "Medium",
        icon: Bike,
        slug: "sutton-to-sandycove",
        image: "/sutton_to_sandycove.png",
        content: `
# S2S (Sutton a Sandycove)

El "S2S" es una ciclovía costera continua planificada.
        `
    },
    {
        title: "Parque Tymon",
        description: "Ciclismo seguro fuera de carretera en Tallaght.",
        distance: "4 km",
        difficulty: "Easy",
        icon: Bike,
        slug: "tymon-park",
        image: "/tymon_park.png",
        content: `
# Parque Tymon

Uno de los parques suburbanos más grandes.
        `
    }
];

export const tourismEs: RouteItem[] = [
    {
        title: "Camino de Acantilados de Howth",
        description: "Vistas costeras escénicas a un viaje en DART.",
        distance: "6 km",
        difficulty: "Medium",
        icon: Camera,
        slug: "howth-cliff-path",
        image: "/howth.png",
        mapUrl: "https://www.google.com/maps/search/Howth+Cliff+Path+Loop",
        content: `
# Camino de Acantilados de Howth

Una de las caminatas más populares de Dublín.

## Destacados
- **Acantilados**: Vistas dramáticas.
- **Faro Bailey**: Pintoresco.
- **Focas**: Visibles en el puerto.
- **Mariscos**: Fish and chips famoso.

## Cómo llegar
- **DART**: Estación Howth.
- **Autobús**: H3.
        `
    },
    {
        title: "Glendalough Spinc",
        description: "Vistas impresionantes de los lagos de Wicklow.",
        distance: "9 km",
        difficulty: "Hard",
        icon: Mountain,
        slug: "glendalough-spinc",
        image: "/glendalough.png",
        mapUrl: "https://www.google.com/maps/search/Glendalough+Spinc+Ridge",
        content: `
# Glendalough Spinc Ridge

Ubicado en el Parque Nacional de las Montañas de Wicklow.

## Destacados
- **El Spinc**: Caminata de cresta con vistas panorámicas.
- **Ciudad Monástica**: Ruinas del siglo VI.
- **Cascada Poulanass**: Hermosa cascada.

## Cómo llegar
- **Autobús**: St. Kevin's Bus desde el centro.
- **Coche**: 1 hora al sur de Dublín.
        `
    },
    {
        title: "Cascada Powerscourt",
        description: "Visita la cascada más alta de Irlanda.",
        distance: "Wicklow",
        difficulty: "Easy",
        icon: Camera,
        slug: "powerscourt-waterfall",
        image: "/powerscourt.png",
        mapUrl: "https://www.google.com/maps/search/Powerscourt+Waterfall",
        content: `
# Cascada Powerscourt

La cascada más alta de Irlanda (121m).

## Cómo llegar
- **Coche**: Acceso mejor en coche.
- **Transporte Público**: Bus 44 a Enniskerry y luego taxi/caminar.
        `
    },
    {
        title: "Lough Tay (Lago Guinness)",
        description: "Famoso mirador del lago oscuro con playa blanca.",
        distance: "Wicklow",
        difficulty: "Easy",
        icon: Mountain,
        slug: "lough-tay",
        image: "/lough_tay.png",
        mapUrl: "https://www.google.com/maps/search/Lough+Tay+Guinness+Lake",
        content: `
# Lough Tay (Lago Guinness)

Conocido como el "Lago Guinness" por su agua oscura y arena blanca.

## Cómo llegar
- **Coche**: Necesitas coche. Ruta R759.
        `
    },
    {
        title: "Caminata Bray a Greystones",
        description: "Caminata popular de acantilados conectando dos pueblos.",
        distance: "7 km",
        difficulty: "Easy",
        icon: TrainFront,
        slug: "bray-greystones",
        image: "/bray_greystones.png",
        mapUrl: "https://www.google.com/maps/search/Bray+to+Greystones+Cliff+Walk",
        content: `
# Caminata Bray a Greystones

Conecta Bray con Greystones a lo largo de los acantilados.

## Cómo llegar
- **DART**: Estación Bray.
- **Regreso**: DART desde Greystones.
        `
    },
    {
        title: "Castillo de Dublín y Ciudad",
        description: "Explora el corazón histórico a pie.",
        distance: "3 km",
        difficulty: "Easy",
        icon: Landmark,
        slug: "dublin-castle-walk",
        image: "/dublin_castle.png",
        mapUrl: "https://www.google.com/maps/search/Dublin+Castle+Dublin",
        content: `
# Caminata Castillo de Dublín

Ruta autoguiada por el centro medieval.

## Paradas
1.  **College Green**: Trinity College.
2.  **Castillo de Dublín**.
3.  **Temple Bar**.
        `
    }
];

export const proceduresEs: RouteItem[] = [
    {
        title: "Leap Card (Transporte)",
        description: "Ahorra hasta 30% en viajes. Tarjeta esencial.",
        distance: "Transporte",
        icon: CreditCard,
        slug: "leap-card",
        image: "/leap_card.png",
        externalLink: "https://about.leapcard.ie/",
        mapUrl: "https://www.google.com/maps/search/Dublin+Bus+O'Connell+Street",
        content: `
# TFI Leap Card

Tarjeta recargable para pagar transporte público. Es más barata que el efectivo.

## Beneficios
- **Más Barato**: Tarifas 30% menores.
- **Topes**: Hay límites diarios de gasto (Cap).

## Cómo obtenerla
- **Tiendas**: Centra, Spar (Payzone).
- **Online**: leapcard.ie
        `
    },
    {
        title: "Bibliotecas de Dublín",
        description: "Únete gratis. Libros, e-books y espacios de estudio.",
        distance: "Estilo de Vida",
        icon: Book,
        slug: "ilac-library-card",
        image: "/ilac_library_real.png",
        externalLink: "https://www.dublincity.ie/dublin-city-libraries",
        mapUrl: "https://www.google.com/maps/search/Central+Library+ILAC+Centre",
        content: `
# Bibliotecas de Dublín

Unirse es **gratis**.

## Qué obtienes
- **Libros**: Préstamo nacional.
- **Espacio**: Wifi y estudio gratis.
- **Impresión**: Barata.

## Cómo unirse
Trae identificación con foto y prueba de dirección a cualquier biblioteca.
        `
    },
    {
        title: "Guía Número PPS",
        description: "Guía paso a paso para solicitar tu número de servicio público.",
        distance: "Admin",
        icon: FileText,
        slug: "pps-number",
        image: "/pps_document.png",
        externalLink: "https://services.mywelfare.ie/",
        mapUrl: "https://www.google.com/maps/search/Intreo+Centre+Dublin",
        content: `
# Número PPS

Necesario para trabajar y servicios sociales.

## Cómo aplicar
1.  **Online**: MyWelfare.ie.
2.  **Documentos**: Pasaporte, Prueba de Dirección, Razón (oferta de trabajo).
        `
    },
    {
        title: "Visa y Residencia",
        description: "Información sobre tarjeta IRP y permisos.",
        distance: "Legal",
        icon: Briefcase,
        slug: "visa-residency",
        image: "/irp_card.png",
        externalLink: "https://www.irishimmigration.ie/",
        mapUrl: "https://www.google.com/maps/search/Immigration+Service+Delivery+Burgh+Quay",
        content: `
# Visa y Residencia

## Tarjeta IRP
Si eres no-UE y te quedas +90 días.
- **Dublín**: Citas por teléfono (1800 800 630).
- **Fuera de Dublín**: Estación de Garda.

## Estampillas Comunes
- **Stamp 1**: Permiso de trabajo.
- **Stamp 2**: Estudiante.
- **Stamp 4**: Residencia largo plazo.
        `
    },
    {
        title: "Conceptos Básicos de Vivienda",
        description: "Entendiendo alquileres, depósitos y derechos.",
        distance: "Vivienda",
        icon: Home,
        slug: "housing-basics",
        image: "/housing_keys.png",
        externalLink: "https://www.rtb.ie/",
        content: `
# Vivienda en Irlanda

## Dónde buscar
- **Daft.ie**: Principal sitio web.
- **Rent.ie**.
- **Grupos de Facebook**.

## Términos Clave
- **Depósito**: Usualmente un mes de renta.
- **RTB**: Junta de Tenencias Residenciales (registro legal).
        `
    },
    {
        title: "Inglés y Educación Superior",
        description: "Guía de escuelas de inglés (ELE), títulos universitarios y visas de graduado.",
        distance: "Educación",
        icon: GraduationCap,
        slug: "education-system",
        image: "/university_education.png",
        externalLink: "https://www.education.ie/en/",
        content: `
# Educación para Migrantes

## Escuelas de Inglés (ELE)
- Muchos estudiantes no-UE vienen a Irlanda a estudiar inglés.
- **Stamp 2**: Si estás en un curso elegible (lista ILEP), puedes trabajar medio tiempo (20h) y tiempo completo (40h) durante vacaciones.
- **Asistencia**: Debes mantener 85% de asistencia.

## Educación Superior (Tercer Nivel)
- **Universidades**: TCD, UCD, DCU, TU Dublin, etc.
- **Tarifas No-UE**: Los estudiantes internacionales pagan tarifas más altas que los ciudadanos de la UE.
- **Stamp 2**: Los estudiantes de grado también tienen derechos laborales.

## Opciones Post-Estudio
- **Stamp 1G**: Si te gradúas con un Título de Honor (Nivel 8) o Maestría (Nivel 9), puedes obtener una "Visa de Graduado" de 1-2 años para buscar trabajo a tiempo completo.
        `
    },
    {
        title: "Bancos y Finanzas",
        description: "Cómo abrir una cuenta bancaria en Irlanda. AIB, Bank of Ireland y alternativas digitales.",
        distance: "Finanzas",
        icon: Landmark,
        slug: "banking-ireland",
        image: "/cost_of_living.png",
        content: `
# Abrir una Cuenta Bancaria en Irlanda

Tener una cuenta bancaria local es esencial para recibir tu salario, pagar el alquiler y gestionar tus gastos diarios.

## Bancos Tradicionales("Los dos grandes")
Estos bancos tienen muchas sucursales físicas y ofrecen servicios completos.
- ** AIB(Allied Irish Banks) **: Uno de los más grandes.Suelen requerir un PPSN y prueba de dirección para abrir una cuenta.
- ** Bank of Ireland(BoI) **: Otro banco tradicional importante con una larga historia.Requisitos similares a AIB.

## Bancos Digitales(Rápido y Fácil)
Muchos migrantes prefieren empezar con un banco digital porque la configuración es mucho más rápida.
- ** Revolut **: Extremadamente popular en Irlanda.Puedes abrir una cuenta en minutos usando tu pasaporte y tarjeta IRP.Proporciona un IBAN irlandés.
- ** Money Jar **: Una alternativa digital con sede en Irlanda que es muy amigable para los migrantes.

## Qué Necesitas
1. ** Identificación Válida **: Usualmente tu Pasaporte.
2. ** Prueba de Dirección **: Una factura de servicios públicos, un contrato de alquiler o una carta de tu empleador / anfitrión.
3. ** Número PPS **: A menudo requerido por los bancos tradicionales para verificar tu estatus fiscal.

## Consejos
    - La mayoría de los bancos tradicionales cobran una comisión trimestral de mantenimiento(alrededor de €4.50 - €6.00).
- Las cuentas de estudiante(si tienes un Stamp 2) suelen estar exentas de comisiones de mantenimiento.
        `
    },
    {
        title: "Guía de myGovID",
        description: "Acceso seguro oficial para servicios gubernamentales (Revenue, MyWelfare, NDLS).",
        distance: "Gobierno",
        icon: Shield,
        slug: "mygovid-guide",
        image: "/irp_card.png",
        externalLink: "https://www.mygovid.ie/",
        content: `
# 🔐 Guía Completa de myGovID

myGovID es tu cuenta única y segura que te permite acceder a varios servicios gubernamentales irlandeses en línea. Es esencial para gestionar tus impuestos y ayudas sociales.

## 🔸 Tipos de Cuenta

### 1. Cuenta Básica
*   **Qué necesitas**: Solo un correo electrónico válido.
*   **Ideal para**: Reservar citas (ej. para el PPSN o la PSC) y acceder a servicios básicos en línea.

### 2. Cuenta Verificada (Muy Recomendada)
*   **Qué necesitas**: Un número PPS y una Tarjeta de Servicios Públicos (PSC).
*   **Ideal para**: Acceso total a **Revenue (myAccount)**, **MyWelfare** (pagos sociales) y **NDLS** (Licencia de Conducir).

## 🛠️ Cómo Configurarlo
1.  **Crear Cuenta Básica**: Ve a [myGovID.ie](https://www.mygovid.ie/) y haz clic en 'Create Account'.
2.  **Verificar Correo**: Asegura tu cuenta a través del enlace enviado a tu bandeja de entrada.
3.  **Verificarte**: Una vez que tengas tu PPSN, reserva una 'cita para la PSC' en un centro Intreo. Después de obtener tu tarjeta, puedes 'verificar' tu myGovID en línea para desbloquear todas las funciones.

[Portal Oficial de myGovID](https://www.mygovid.ie/)
        `
    },
    {
        title: "Impuestos (Revenue)",
        description: "Gestiona tu PAYE, evita el Emergency Tax y reclama créditos fiscales.",
        distance: "Financiero",
        icon: Landmark,
        slug: "revenue-taxes",
        image: "/pps_document.png",
        externalLink: "https://www.revenue.ie/",
        content: `
# 💸 Gestión de Impuestos (Revenue)

En Irlanda, la autoridad fiscal se llama **Revenue**. Como empleado, normalmente pagas impuestos a través del sistema **PAYE** (Pay As You Earn - Pago según ganas).

## 🚨 ¡Evita el 'Emergency Tax'!
Si tu empleador no tiene tu PPSN o tu trabajo no está registrado en Revenue, podrían aplicarte el **Emergency Tax**, ¡que puede retener hasta el 40% de tu sueldo!

**Cómo solucionarlo:**
1.  Regístrate en **Revenue myAccount**.
2.  Registra tu nuevo trabajo tan pronto como empieces.
3.  Una vez registrado, tu empleador recibirá una 'notificación' y te devolverá cualquier impuesto pagado de más en tu próximo sueldo.

## 💰 Créditos Fiscales y Reembolsos
Los créditos fiscales reducen la cantidad de impuestos que pagas. Los créditos comunes incluyen:
*   **Crédito Fiscal Personal**: Para todos los residentes.
*   **Crédito Fiscal PAYE**: Para quienes trabajan por cuenta ajena.
*   **Crédito Fiscal por Alquiler (Rent Credit)**: ¡Puedes recuperar dinero (hasta €750+ por año) si pagas alquiler privado!

## 🎓 Alivio Fiscal por Estudios (Nivel 8 y 9)
Si pagas por un curso aprobado de **Nivel 8** (Grado) o **Nivel 9** (Maestría/Postgrado), ¡puedes reclamar una devolución de impuestos!
*   **¿Cuánto?**: 20% de alivio fiscal sobre las tasas elegibles.
*   **Límite**: Califican hasta €7,000 por persona y por curso.
*   **Nota**: Los primeros €3,000 (tiempo completo) o €1,500 (medio tiempo) se descuentan del total reclamado.

## 💻 Portal myAccount
Usa [Revenue myAccount](https://www.revenue.ie/) para:
- Revisar tus impuestos anualmente.
- Reclamar tus créditos fiscales (Rent Credit, Alivio por Estudios).
- Añadir o cambiar de trabajo.

[Iniciar sesión en Revenue myAccount](https://www.revenue.ie/)
        `
    }
];

export const mentalHealthEs: RouteItem[] = [
    {
        title: "Encontrar un Psicólogo",
        description: "Directorio de psicólogos multiculturales y multilingües en Irlanda.",
        distance: "Directorio",
        icon: Brain,
        slug: "find-psychologist",
        image: "/psychology_sunset_v2.png",
        content: `
# Encontrar un Psicólogo

Encontrar el profesional de salud mental adecuado es importante.Aquí hay algunos recursos para encontrar apoyo multicultural y multilingüe.

## Directorios
    - ** Psychological Society of Ireland(PSI) **: Usa la herramienta "Find a Psychologist" en su sitio web.Puedes filtrar por idioma.
- ** MyMind **: Un proveedor sin fines de lucro de atención de salud mental accesible.Ofrecen servicios en + 15 idiomas.
- ** Counselling Directory **: Una base de datos completa de consejeros y psicoterapeutas.

## Consejos
    - Pregunta si tienen experiencia trabajando con migrantes o expatriados.
- Verifica sus calificaciones(acreditación PSI o IACP).
        `
    },
    {
        title: "Grupos de Apoyo",
        description: "Conecta con otros migrantes que comparten sus experiencias de adaptación.",
        distance: "Comunidad",
        icon: Users,
        slug: "support-groups",
        content: `
# Grupos de Apoyo

Conectar con otros que están pasando por experiencias similares puede ser muy sanador.

## Grupos Específicos para Migrantes
    - ** New Communities Partnership(NCP) **: Ofrece varios servicios de apoyo y grupos sociales.
- ** First Fortnight **: Una organización benéfica de salud mental basada en las artes que a menudo organiza eventos inclusivos.
- ** Meetup.com **: Busca grupos de "Expat" o "New in Dublin" para construir un círculo social.

## Grupos de Salud Mental
    - ** Grow **: Movimiento comunitario de salud mental con reuniones semanales.
- ** Aware **: Grupos de apoyo para la depresión y el trastorno bipolar.
        `
    },
    {
        title: "Líneas de Ayuda en Crisis",
        description: "Apoyo confidencial 24/7 para necesidades urgentes de salud mental.",
        distance: "Inmediato",
        icon: Phone,
        slug: "crisis-helplines",
        content: `
# Líneas de Ayuda en Crisis

Si tú o alguien que conoces está angustiado, busca ayuda ahora.Estos servicios son gratuitos y confidenciales.

## Servicios 24 / 7
    - ** Samaritans **: Teléfono gratuito ** 116 123 ** (A cualquier hora, día o noche).
- ** Text 50808 **: Un servicio de texto gratuito 24 / 7. Envía HELLO al 50808.
    - ** Pieta House **: Para aquellos en riesgo de suicidio o autolesiones.Teléfono gratuito ** 1800 247 247 **.

## Emergencia
    - Si estás en peligro inmediato, llama al ** 112 ** o ** 999 ** o ve al Departamento de Emergencias del Hospital más cercano(A & E).
        `
    },
    {
        title: "Psicología de Atención Primaria (HSE)",
        description: "Servicios públicos de psicología disponibles a través de su centro de salud local.",
        distance: "Servicio HSE",
        icon: Stethoscope,
        slug: "hse-primary-care",
        externalLink: "https://www2.hse.ie/mental-health/services-support/primary-care-psychology/",
        content: `
# Psicología de Atención Primaria(HSE)

Los servicios públicos de psicología están disponibles a través de Atención Primaria.Estos servicios son para personas con dificultades de salud mental leves a moderadas.

## Cómo acceder
    - ** Referencia **: Generalmente requiere una referencia de su médico de cabecera(GP).
- ** Costo **: Gratuito.
- ** Listas de espera **: Tenga en cuenta que los tiempos de espera pueden variar según el área.

[Visitar sitio web de la HSE](https://www2.hse.ie/mental-health/services-support/primary-care-psychology/)
        `
    },
    {
        title: "Treehouse Practice",
        description: "Servicios especializados de psicología clínica y psicoterapia.",
        distance: "Práctica Privada",
        icon: Stethoscope,
        slug: "treehouse-practice",
        externalLink: "https://treehousepractice.ie/",
        content: `
# Treehouse Practice

Un servicio especializado de psicología clínica y psicoterapia privada.

## Servicios
    - Terapia individual para adultos y niños.
- Atención informada en trauma.
- Evaluaciones especializadas.

[Visitar Treehouse Practice](https://treehousepractice.ie/)
        `
    },
    {
        title: "Grove Court (Inclusión Social)",
        description: "Apoyo de enlace de inclusión social para comunidades marginadas.",
        distance: "Apoyo Específico",
        icon: Users,
        slug: "grove-court-social-inclusion",
        externalLink: "https://www2.hse.ie/services/primary-care-centres/grove-court-primary-care/departments-services/social-inclusion-liasion-officer/",
        content: `
# Grove Court - Inclusión Social

El Oficial de Enlace de Inclusión Social brinda apoyo a miembros de comunidades marginadas.

## Áreas de Enfoque
    - Apoyo para migrantes, refugiados y personas en el sistema de protección internacional.
- Conectar a las personas con los servicios de atención primaria.
- Navegar por el sistema de salud.

[Visitar HSE Grove Court](https://www2.hse.ie/services/primary-care-centres/grove-court-primary-care/departments-services/social-inclusion-liasion-officer/)
        `
    },
];

export const exerciseGeneralEs: RouteItem[] = [
    {
        title: "Carrera Costera (Bahía de Dublín)",
        description: "Respira el aire del mar en este sendero plano y escénico desde Clontarf. Perfecto para correr al amanecer.",
        distance: "5-10 km",
        difficulty: "Easy",
        icon: Bike,
        slug: "coastal-run",
        mapUrl: "https://www.google.com/maps/search/Clontarf+Promenade",
        content: "# Carrera Costera (Bahía de Dublín)\n\nUna hermosa ruta plana junto al mar. Empieza en el paseo de Clontarf y corre hacia Dollymount Strand."
    },
    {
        title: "Paseo por el Río Liffey",
        description: "Explora el corazón moderno de Dublín. Ideal para ver el puente Samuel Beckett.",
        distance: "3 km",
        difficulty: "Easy",
        icon: Camera,
        slug: "liffey-river-walk",
        mapUrl: "https://www.google.com/maps/search/Samuel+Beckett+Bridge",
        content: "# Paseo por el Río Liffey\n\nUn paseo por la arquitectura moderna. Empieza en los Docklands y sigue los senderos del río hacia el oeste."
    },
    {
        title: "Deportes Comunitarios",
        description: "Gimnasios al aire libre y encuentros deportivos locales en parques como Herbert y Fairview.",
        distance: "Varios",
        difficulty: "Easy",
        icon: Users,
        slug: "community-sports",
        content: `
# Deportes Comunitarios

Mantenerse activa y socializar gratis es muy sencillo en Dublín.

## Grupos y Eventos Gratuitos
- ** parkrun Ireland **: Carreras de 5 km cronometradas, gratuitas y semanales cada sábado a las 9: 30 AM en parques como Phoenix Park, Fairview y St.Anne's. El registro es gratis.
    - ** Fútbol Social **: Muchos grupos amateur organizan partidos gratuitos o de muy bajo coste en los parques(Fairview Park y Herbert Park son puntos clave).Consulta Meetup.com o grupos locales de Facebook.
- ** Sporting Pride **: Una organización multideportiva inclusiva que a menudo organiza sesiones de introducción gratuitas.
- ** Sanctuary Runners **: Un movimiento de solidaridad a través del deporte que une a residentes locales y personas en el sistema de protección internacional.

## Equipo Gratuito
    - ** Gimnasios al aire libre **: La mayoría de los grandes parques de Dublín tienen equipos de fitness al aire libre de alta calidad y gratuitos(Fairview, Herbert Park, Mt.Merrion).
        `
    }
];

export const womensHealthEs: RouteItem[] = [
    {
        title: "Chequeo Cervical Gratuito",
        description: "Programa nacional de detección. Gratis para mujeres de 25 a 65 años. Verifica tu elegibilidad.",
        distance: "Salud",
        icon: Heart,
        href: "https://www.hse.ie/eng/cervicalcheck/",
        slug: "cervical-check",
        externalLink: "https://www.hse.ie/eng/cervicalcheck/",
        content: `
# CervicalCheck

El Programa Nacional de Detección Cervical.

## Elegibilidad
    - ** Gratis ** para todas las mujeres de 25 a 65 años.
- Debes consultar el registro para asegurarte de que estás incluida.

## Cómo funciona
1.  Recibe una carta invitándote a un chequeo.
2.  Reserva una cita con un evaluador registrado(generalmente un médico de cabecera o enfermera de práctica).
3.  La prueba es gratuita.
        `
    },
    {
        title: "Servicios de Maternidad",
        description: "Guía de atención pública de maternidad en Irlanda. Registro y opciones de hospital.",
        distance: "Salud",
        icon: Baby,
        slug: "maternity-services",
        externalLink: "https://www.hse.ie/eng/services/list/3/maternity/",
        content: `
# Atención de Maternidad en Irlanda

    ** Esquema de Atención Materna e Infantil **: Toda mujer embarazada y residente ordinaria en Irlanda tiene derecho a atención de maternidad gratuita.

## Atención Pública
    - Atención compartida entre tu médico de cabecera y un hospital de maternidad.
- ** Costo **: Gratis.
- ** Hospitales **:
        - The Rotunda
    - The Coombe
    - National Maternity Hospital(Holles St)

## Registro
    - Visita a tu médico de cabecera tan pronto como creas que estás embarazada.
- Ellos confirmarán el embarazo y te ayudarán a registrarte en un hospital.
        `
    },
    {
        title: "Directorio de Clínicas para Mujeres",
        description: "Encuentra clínicas de salud especializadas para mujeres en tu área. Incluye centros de la HSE y centros independientes.",
        distance: "Directorio",
        icon: Stethoscope,
        slug: "womens-clinics",
        image: "/womens_health.png",
        externalLink: "https://www.hse.ie/eng/services/list/2/healthcentres/womenshealth/",
        content: `
# Clínicas de Salud para Mujeres en Dublín

Para una atención integral, puedes acudir a centros especializados que ofrecen planificación familiar, salud sexual y chequeos preventivos.

## Centros Principales
- **Well Woman Centre**: Sedes en Liffey St, Coolock y Pembroke Rd. Especialistas en salud reproductiva.
- **IFPA (Irish Family Planning Association)**: Clínicas en el centro (Cathal Brugha St) y Tallaght.
- **Hospitals de Maternidad**: Centros como el Rotunda o Holles Street ofrecen clínicas ginecológicas especializadas.

## Servicios Disponibles
- Anticoncepción (incluyendo el 'Free Contraception Scheme' para 17-35 años).
- Exámenes de salud sexual (STI).
- Atención de la menopausia y revisiones ginecológicas.

[Ver directorio completo de la HSE](https://www.hse.ie/eng/services/list/2/healthcentres/womenshealth/)
`
    },
    {
        title: "Redes de Apoyo",
        description: "AkiDwA, NCP y Cairde - Conectando a mujeres migrantes para apoyo social y de salud.",
        distance: "Comunidad",
        icon: Users,
        slug: "womens-support-networks",
        content: `
# Apoyo a Mujeres Migrantes

Conectar con otras es clave para el bienestar.

## Organizaciones
    - ** [AkiDwA](https://akidwa.ie/)**: Red nacional de mujeres migrantes en Irlanda.
- ** [NCP(New Communities Partnership)](https://www.newcommunities.ie/)**: A menudo organiza grupos de mujeres.
- ** [Cairde](https://cairde.ie/)**: Trabajando para reducir desigualdades en salud.
        `
    },
    {
        title: "Servicios de Salud para la Mujer",
        description: "Listado completo de clínicas y servicios del portal de la HSE.",
        distance: "Directorio",
        icon: Stethoscope,
        slug: "womens-clinics-hse",
        externalLink: "https://www.hse.ie/eng/services/list/2/healthcentres/womenshealth/",
        mapUrl: "https://www.google.com/maps/search/Womens+Health+Clinic+Ireland",
        content: "# Servicios de Salud para la Mujer\n\nLista completa de clínicas para la salud femenina."
    }
];

export const roadmapDataEs: RoadmapItem[] = [
    {
        id: "leap-card",
        title: "Tarjeta Leap",
        description: "Esencial para el transporte público (Bus, Luas, DART).",
        icon: CreditCard,
        category: "Life"
    },
    {
        id: "ppsn",
        title: "Número PPS",
        description: "Tu número de referencia único para impuestos y servicios públicos.",
        icon: FileText,
        category: "Admin"
    },
    {
        id: "bank-account",
        title: "Cuenta Bancaria",
        description: "Necesaria para el salario y muchos servicios locales.",
        icon: Landmark,
        category: "Admin"
    },
    {
        id: "irp",
        title: "Tarjeta IRP",
        description: "Permiso de residencia irlandés para ciudadanos no-UE/EEE.",
        icon: Briefcase,
        category: "Legal"
    },
    {
        id: "gp",
        title: "Registrarse con un GP",
        description: "Encuentra un médico local para tus necesidades de salud.",
        icon: Stethoscope,
        category: "Health"
    }
];

export const jobStepsEs: JobStep[] = [
    {
        id: "cv-format",
        title: "Formato de CV Irlandés",
        description: "Manténgalo en menos de 2 páginas. Sin foto ni fecha de nacimiento.",
        icon: FileText
    },
    {
        id: "linkedin",
        title: "Optimiza LinkedIn",
        description: "Cambia tu ubicación a Dublín para aparecer en búsquedas locales.",
        icon: Users
    },
    {
        id: "pps-job",
        title: "PPS para trabajar",
        description: "Necesitas el número PPS para evitar el 'Impuesto de Emergencia'.",
        icon: CreditCard
    },
    {
        id: "networking",
        title: "Networking Local",
        description: "Asiste a meetups y eventos de tu sector en la ciudad.",
        icon: Users
    }
];

export const resourceLocationsEs: ResourceLocation[] = [
    {
        id: "intreo-parnell",
        name: "Centro Intreo Parnell Street",
        description: "Oficina principal para solicitudes de PPSN y servicios de bienestar social.",
        category: "Admin",
        address: "Parnell St, Dublin 1",
        mapUrl: "https://www.google.com/maps/search/Intreo+Centre+Parnell+Street"
    },
    {
        id: "central-library",
        name: "Biblioteca Central Ilac",
        description: "Ideal para estudio tranquilo, Wi-Fi gratis y servicios de impresión.",
        category: "Leisure",
        address: "Ilac Centre, Henry St, Dublin 1",
        mapUrl: "https://www.google.com/maps/search/Central+Library+Ilac+Centre"
    },
    {
        id: "st-james-hospital",
        name: "Hospital St. James's",
        description: "Hospital público principal en la zona sur de la ciudad.",
        category: "Health",
        address: "James's St, Dublin 8",
        mapUrl: "https://www.google.com/maps/search/St.+James's+Hospital+Dublin"
    },
    {
        id: "leap-card-topup",
        name: "Estación Connolly (Leap)",
        description: "Centro de transporte importante con muchas máquinas de recarga de tarjeta Leap.",
        category: "Transport",
        address: "Amiens St, Dublin 1",
        mapUrl: "https://www.google.com/maps/search/Connolly+Station+Dublin"
    }
];

export const costOfLivingDataEs = {
    averages: [
        { label: "Habitación Individual (Centro)", value: 1200 },
        { label: "Habitación Compartida", value: 650 },
        { label: "Tarjeta Leap Mensual", value: 120 },
        { label: "Alimentación (1 persona)", value: 250 },
        { label: "Comer Fuera (Rango medio)", value: 25 },
    ],
    supermarkets: [
        { name: "Lidl / Aldi", rank: "Mejor Valor", description: "Lo más barato para lo básico semanal. Atento a las ofertas del 'pasillo central'." },
        { name: "Tesco", rank: "Gama Media", description: "Buen equilibrio entre precio y variedad. ¡Saca la Clubcard para descuentos importantes!" },
        { name: "Dunnes Stores", rank: "Selección Premium", description: "Calidad un poco mayor. Sus cupones te descuentan 10€ por cada 50€ gastados." },
        { name: "SuperValu", rank: "Local y Premium", description: "Más caro, pero suelen tener los mejores productos locales irlandeses." },
    ]
};

export const dublinSlangEs = [
    { phrase: "What's the craic?", meaning: "¿Cómo va? / ¿Qué cuentas?", usage: "Saludo estándar en Dublín." },
    { phrase: "Deadly", meaning: "Excelente / Brutal / Genial", usage: "Ese nuevo café en Smithfield es 'deadly'." },
    { phrase: "Grand", meaning: "Bien / Ok / Todo en orden", usage: "I'm grand, thanks." },
    { phrase: "Sound", meaning: "Buena gente / Fiable / Gracias", usage: "Gracias por traerme, eres un 'sound'." },
    { phrase: "Story?", meaning: "¿Qué tal? / ¿Cómo va la cosa?", usage: "Yo, story bud?" },
    { phrase: "Eejit", meaning: "Idiota / Tonto (frecuentemente cariñoso)", usage: "Don't be such an eejit." },
];

export const eventsEs: EventItem[] = [
    {
        id: "language-exchange",
        title: "Intercambio Inglés/Español",
        date: "Todos los jueves",
        time: "19:00",
        location: "The Mezz, Temple Bar",
        description: "Practica tu inglés y ayuda a otros con el español en un ambiente de pub amigable.",
        category: "Social"
    },
    {
        id: "museum-tour",
        title: "Tour Gratis por Museos",
        date: "Primer domingo de mes",
        time: "11:00",
        location: "Museo Nacional de Irlanda",
        description: "Explora la historia de Irlanda con un guía profesional gratis.",
        category: "Culture"
    },
];

export const popularKeywordsEs = [
    { label: "Número PPS", query: "pps" },
    { label: "Tarjeta Leap", query: "leap" },
    { label: "Parques", query: "park" },
    { label: "Salud Mental", query: "mental" },
    { label: "Empleo", query: "job" },
    { label: "Natación", query: "swim" },
    { label: "Biblioteca", query: "library" },
];

export const gymsEs: RouteItem[] = [
    {
        title: "Gimnasios del Ayuntamiento (DCC)",
        description: "Gimnasios y piscinas asequibles y de alta calidad gestionados por el ayuntamiento.",
        distance: "Varias Ubicaciones",
        icon: Dumbbell,
        slug: "dcc-fitness",
        externalLink: "https://www.dublincity.ie/residential/sports-and-leisure/sports-and-fitness-centres",
        content: `
# Dublin City Council Sports & Fitness

El Ayuntamiento de Dublín opera una red de centros deportivos y de fitness en toda la ciudad.Son instalaciones públicas diseñadas para ser accesibles y asequibles para todos.

## ¿Por qué elegir estos gimnasios ?
- ** Económicos **: Generalmente más baratos que los gimnasios privados.
- ** Sin Contrato **: Muchos ofrecen opciones de "Pago por uso" o mensualidades flexibles.
- ** Enfoque Comunitario **: Ambiente amigable, adecuado para todas las edades y niveles.

## Ubicaciones
Hay centros por todo Dublín, incluyendo:
- ** Markievicz Leisure Centre ** (Centro de la ciudad)
        - ** Irishtown Stadium ** (Ringsend)
    - ** Swan Leisure ** (Rathmines)
    - ** Ballymun Sports & Fitness **

## Servicios
    - Piscinas
    - Gimnasios totalmente equipados
    - Clases de fitness(Yoga, Pilates, Spinning, etc.)
    - Campos y canchas
        `
    }
];

export const physiotherapyEs: RouteItem[] = [
    {
        title: "Red de Fisios Migrantes",
        description: "Conecta con fisioterapeutas calificados de tu comunidad vía grupos de WhatsApp y Facebook.",
        distance: "Comunidad",
        icon: Users,
        slug: "migrant-physio-network",
        image: "/physiotherapy_session.png",
        content: `
# Red de Fisioterapeutas Migrantes

Muchos migrantes en Irlanda son fisioterapeutas calificados que ofrecen servicios dentro de sus comunidades.

## Cómo Conectar
    - ** Grupos de Facebook **: Busca en grupos como "Latinos en Dublin" o "Brasileiros na Irlanda".A menudo, los profesionales anuncian sus servicios allí.
- ** WhatsApp **: Los grupos comunitarios son una excelente manera de obtener recomendaciones.
- ** Idioma **: Un gran beneficio es encontrar a alguien que hable tu idioma nativo y entienda tus necesidades específicas.

## Servicios Comunes
    - Masaje deportivo
    - Ejercicios de rehabilitación
    - Punción seca(Dry needling)
    - Recuperación postoperatoria
        `
    },
    {
        title: "Fisioterapeutas Colegiados",
        description: "Directorio oficial de la Sociedad Irlandesa de Fisioterapeutas Colegiados.",
        distance: "Directorio",
        icon: Stethoscope,
        slug: "chartered-physiotherapists",
        externalLink: "https://www.iscp.ie/find-a-physio",
        content: `
# Directorio ISCP

La Sociedad Irlandesa de Fisioterapeutas Colegiados(ISCP) es el organismo profesional en Irlanda.

## Encontrar un Fisio
    - Usa su herramienta online "Find a Physio".
- Puedes filtrar por ubicación y especialidad.
- ** Seguro **: La mayoría de los seguros privados(VHI, Laya) requieren que tu fisio sea "Chartered"(MISCP) para reembolsarte el dinero.
        `
    },
    {
        title: "Clínicas de Lesiones Deportivas",
        description: "Clínicas especializadas para atletas y personas activas.",
        distance: "Directorio",
        icon: Dumbbell,
        slug: "sports-injury-clinics",
        content: `
# Clínicas de Lesiones Deportivas

Si tienes una lesión deportiva específica, podrías necesitar un especialista.

## Clínicas Populares
    - ** Sports Med Ireland **: Ubicada en Dublín 2.
    - ** Santry Sports Clinic **: Instalación de alto nivel usada a menudo por atletas profesionales.
        `
    }
];

export const professionalsEs: Professional[] = [
    {
        id: "physio-1",
        name: "Carlos Mendez",
        role: "Physiotherapist",
        specialty: ["Lesiones Deportivas", "Dolor de Espalda"],
        languages: ["Inglés", "Español", "Portugués"],
        location: "Dublin 1 (Centro)",
        contact: "+353891234567",
        rating: 4.8,
        reviews: 24,
        verified: true
    },
    {
        id: "physio-2",
        name: "Dra. Sarah Walsh",
        role: "Physiotherapist",
        specialty: ["Fisioterapia Pediátrica", "Postura"],
        languages: ["Inglés", "Francés"],
        location: "Dublin 4 (Ballsbridge)",
        contact: "sarah.physio@example.com",
        rating: 4.9,
        reviews: 42,
        verified: true
    },
    {
        id: "psych-1",
        name: "Dra. Elena Rossi",
        role: "Psychologist",
        specialty: ["Ansiedad", "Adaptación Cultural", "Depresión"],
        languages: ["Inglés", "Italiano", "Español"],
        location: "Dublin 2 (Merrion Sq)",
        contact: "elena.rossi@example.com",
        rating: 5.0,
        reviews: 18,
        verified: true
    },
    {
        id: "psych-2",
        name: "Liam Byrne",
        role: "Psychologist",
        specialty: ["Terapia Cognitivo-Conductual", "Estrés", "Asuntos Laborales"],
        languages: ["Inglés"],
        location: "Online / Dublin 6",
        contact: "+353879876543",
        rating: 4.7,
        reviews: 30,
        verified: true
    },
    {
        id: "physio-3",
        name: "Mariana Silva",
        role: "Physiotherapist",
        specialty: ["Salud de la Mujer", "Suelo Pélvico"],
        languages: ["Inglés", "Portugués"],
        location: "Dublin 15 (Blanchardstown)",
        contact: "mariana.physio@example.com",
        rating: 4.9,
        reviews: 15,
        verified: true
    }
];
