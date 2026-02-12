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
    Brain,
    Phone,
    Users,
    LucideIcon,
    Heart,
    Stethoscope,
    Baby,
    Search,
    Tag,
    X,
    Dumbbell
} from "lucide-react";

export interface RouteItem {
    title: string;
    description: string;
    distance?: string;
    difficulty?: "Easy" | "Medium" | "Hard";
    icon: LucideIcon;
    href?: string; // Optional, can be derived from slug
    slug: string;
    content?: string; // Markdown content for the details page
    image?: string; // path to image in public folder
    externalLink?: string; // official link for the specific resource
    mapUrl?: string; // Google Maps link for navigation
}

export interface RoadmapItem {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    category: "Admin" | "Life" | "Health" | "Legal";
}

export interface JobStep {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface ResourceLocation {
    id: string;
    name: string;
    description: string;
    category: "Admin" | "Health" | "Leisure" | "Transport";
    address: string;
    mapUrl: string;
}

export interface EventItem {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    category: "Social" | "Education" | "Culture";
    free?: boolean;
}

export interface Professional {
    id: string;
    name: string;
    role: "Physiotherapist" | "Psychologist";
    specialty: string[];
    languages: string[];
    location: string;
    contact: string;
    rating: number;
    reviews: number;
    image?: string;
    verified: boolean;
}

export const parks: RouteItem[] = [
    {
        title: "Fairview Park",
        description: "Wide paths and sports fields. Great for a flat, easy loop.",
        distance: "1.5 km Loop",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "fairview-park",
        image: "/fairview_park_v3.png",
        mapUrl: "https://www.google.com/maps/search/Fairview+Park+Dublin",
        content: `
# Fairview Park

Fairview Park is a large public park in Fairview, Dublin. It is located north of the River Tolka and south of the Clontarf Road DART station.

## Features
- **Wide Paths**: Perfect for walking, jogging, and cycling.
- **Sports Fields**: Includes football pitches and a skate park.
- **Playground**: A large playground for children.
- **Seasonal**: Beautiful flower beds in the spring and summer.

## Getting There
- **Bus**: Routes 14, 15, 27, 27a, 27b, 29a, 31, 31a, 31b, 32, 42, 43, 130.
- **Train**: Clontarf Road DART station is located at the northern edge of the park.
        `
    },
    {
        title: "Phoenix Park",
        description: "Massive park with deer. Try the hills near the magazine fort.",
        distance: "5+ km",
        difficulty: "Medium",
        icon: TreeDeciduous,
        slug: "phoenix-park",
        image: "/phoenix_park.png",
        mapUrl: "https://www.google.com/maps/search/Phoenix+Park+Dublin",
        content: `
# Phoenix Park

The Phoenix Park is the largest enclosed public park in any capital city in Europe. It was founded in 1662 as a royal deer park.

## Highlights
- **Wild Deer**: A herd of fallow deer has lived in the park since the 17th century.
- **Dublin Zoo**: Located within the park.
- **Áras an Uachtaráin**: The residence of the President of Ireland.
- **Victorian Flower Gardens**: Beautifully maintained gardens.

## Routes
- **Magazine Fort Loop**: Offers some hills for a moderate workout.
- **Chesterfield Avenue**: A long straight road running through the center, great for cycling.
        `
    },
    {
        title: "St. Anne's Park",
        description: "Rose gardens and woodland trails in Clontarf.",
        distance: "4 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "st-annes-park",
        image: "/st_annes.png",
        mapUrl: "https://www.google.com/maps/search/St.+Anne's+Park+Dublin",
        content: `
# St. Anne's Park

A magnificent park on the north side, formerly the estate of the Guinness family.

## Highlights
- **Rose Garden**: A world-famous rose garden.
- **Market**: A bustling food market takes place every Saturday ("Red Stables").
- **Trails**: Miles of wooded trails and follies (old structures).
        `
    },
    {
        title: "Liffey Valley Park",
        description: "Scenic riverside paths along the Liffey.",
        distance: "3 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "liffey-valley-park",
        image: "/liffey_valley.png",
        mapUrl: "https://www.google.com/maps/search/Liffey+Valley+Park+Dublin",
        content: `
# Liffey Valley Park

A linear park along the River Liffey, near Palmerstown/Lucan.

## Features
- **Quiet**: A great escape from the noise of the M50.
- **Nature**: Good for spotting herons and river wildlife.
        `
    },
    {
        title: "Herbert Park",
        description: "Beautiful formal park in Ballsbridge with a pond loop.",
        distance: "1 km Loop",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "herbert-park",
        image: "/herbert_park.png",
        mapUrl: "https://www.google.com/maps/search/Herbert+Park+Dublin",
        content: `
# Herbert Park

Located in the upscale Ballsbridge area.

## Highlights
- **The Pond**: Home to ducks and swans.
- **Food Market**: Popular Sunday food market.
- **Sports**: Tennis courts and bowling greens.
        `
    },
    {
        title: "Deer Park (Mt. Merrion)",
        description: "Elevated park with panoramic views of Dublin Bay.",
        distance: "2 km",
        difficulty: "Medium",
        icon: TreeDeciduous,
        slug: "deer-park",
        image: "/deer_park.png",
        mapUrl: "https://www.google.com/maps/search/Deer+Park+Mount+Merrion",
        content: `
# Deer Park

A public park in Mount Merrion, South Dublin.

## The View
The best feature is the view. Being on a hill, you can see the entire city and Dublin Bay.
        `
    },
    {
        title: "Harold's Cross Park",
        description: "Charming victorian park, perfect for a short community walk.",
        distance: "0.5 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "harolds-cross-park",
        image: "/harolds_cross.png",
        mapUrl: "https://www.google.com/maps/search/Harold's+Cross+Park+Dublin",
        content: `
# Harold's Cross Park

A small, well-maintained community park.

## Features
- **Playground**: Popular with local families.
- **Cafe**: A coffee kiosk is usually present.
        `
    },
    {
        title: "Dartry Park",
        description: "Peaceful walk along the River Dodder.",
        distance: "2 km",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "dartry-park",
        image: "/dartry_park.png",
        mapUrl: "https://www.google.com/maps/search/Dartry+Park+Dublin",
        content: `
# Dartry Park

A narrow strip of parkland along the Doddder River.

## Features
- **River Walk**: Connects Milltown and Rathgar.
- **Wild**: Feels more natural and wild than formal parks.
        `
    },
    {
        title: "Merrion Square",
        description: "Historic Georgian park with art statues and flowers.",
        distance: "0.8 km Loop",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "merrion-square",
        image: "/merrion_square.png",
        mapUrl: "https://www.google.com/maps/search/Merrion+Square+Dublin",
        content: `
# Merrion Square

The heart of Georgian Dublin.

## Highlights
- **Oscar Wilde**: The famous statue of the writer reclining on a rock.
- **Art**: On Sundays, artists hang their paintings on the railings for sale.
        `
    },
    {
        title: "St. Stephen's Green",
        description: "The city's most famous Victorian park. Ideal for a city center stroll.",
        distance: "1.2 km Loop",
        difficulty: "Easy",
        icon: TreeDeciduous,
        slug: "st-stephens-green",
        image: "/stephens_green.png",
        mapUrl: "https://www.google.com/maps/search/St.+Stephen's+Green+Dublin",
        content: `
# St. Stephen's Green

An oasis in the center of the city, at the top of Grafton Street.

## Highlights
- **The Lake**: Feeding the ducks is a Dublin tradition.
- **Bandstand**: Often hosts music in summer.
- **Lunch**: The busiest spot in Dublin for office workers having lunch on a sunny day.
        `
    }
];

export const swimming: RouteItem[] = [
    {
        title: "The Forty Foot",
        description: "Iconic deep-water swimming spot in Sandycove. Famous for year-round dips.",
        distance: "Sandycove",
        difficulty: "Medium",
        icon: Waves,
        slug: "the-forty-foot",
        image: "/forty_foot.png",
        mapUrl: "https://www.google.com/maps/search/The+Forty+Foot+Dublin",
        content: `
# The Forty Foot

Dublin's most famous swimming spot. It is a rocky promontory jutting into the Irish Sea.

## Features
- **Deep Water**: You jump directly into deep water. Not suitable for non-swimmers.
- **Changing Area**: Concrete shelters are available.
- **Tradition**: The Christmas Day swim here is legendary.

## Getting There
- **DART**: 15 min walk from **Sandycove/Glasthule** station.
- **Bus**: **Route 7** or **7a** from the city center to Dun Laoghaire/Sandycove.
        `
    },
    {
        title: "Seapoint Beach",
        description: "Popular spot with a Martello Tower. Shallow sections good for different levels.",
        distance: "Monkstown",
        difficulty: "Easy",
        icon: Waves,
        slug: "seapoint-beach",
        image: "/seapoint.png",
        mapUrl: "https://www.google.com/maps/search/Seapoint+Beach+Dublin",
        content: `
# Seapoint Beach

A Blue Flag beach located between Blackrock and Monkstown.

## Getting There
- **DART**: **Seapoint DART station** is right next to the beach.
- **Bus**: **Route 7** or **7a** stops on the Monkstown Road (short walk).
        `
    },
    {
        title: "Vico Bathing Place",
        description: "Stunning secluded spot in Dalkey/Killiney with views of Sorrento Terrace.",
        distance: "Dalkey",
        difficulty: "Medium",
        icon: Waves,
        slug: "vico-bathing-place",
        image: "/vico_bathing.png",
        mapUrl: "https://www.google.com/maps/search/Vico+Bathing+Place",
        content: `
# The Vico

A "locals' secret" that has become quite popular. Known for its incredible views of Killiney Bay.

## Getting There
- **Walk**: 15 min walk from **Dalkey DART station** via Vico Road.
- **Train**: **Killiney DART station** is also nearby (about 20 min walk).
        `
    },
    {
        title: "Sandycove Beach",
        description: "Small sheltered sandy beach next to the Forty Foot. Great for beginners.",
        distance: "Sandycove",
        difficulty: "Easy",
        icon: Waves,
        slug: "sandycove-beach",
        image: "/sandycove.png",
        mapUrl: "https://www.google.com/maps/search/Sandycove+Beach+Dublin",
        content: `
# Sandycove Beach

A tiny, sheltered inlet right next to the Forty Foot.

## Getting There
- **DART**: 15 min walk from **Sandycove/Glasthule** station.
        `
    },
    {
        title: "Hawk Cliff",
        description: "A hidden gem near Vico. Access via steep steps, deep water entry.",
        distance: "Dalkey",
        difficulty: "Hard",
        icon: Waves,
        slug: "hawk-cliff",
        image: "/hawk_cliff.png",
        mapUrl: "https://www.google.com/maps/search/Hawk+Cliff+Vico+Road",
        content: `
# Hawk Cliff

A more rugged spot along Vico Road.

## Getting There
- **Walk**: 15-20 min walk from **Dalkey DART station**.
        `
    },
    {
        title: "High Rock",
        description: "Rocky outcrop in Malahide used by seasoned swimmers. Deep water.",
        distance: "Malahide",
        difficulty: "Hard",
        icon: Waves,
        slug: "high-rock",
        image: "/high_rock.png",
        mapUrl: "https://www.google.com/maps/search/High+Rock+Malahide",
        content: `
# High Rock (Malahide)

A popular spot for confident swimmers on the north side of Dublin.

## Getting There
- **Walk**: Located along the coast road between Portmarnock and Malahide.
- **Bus**: **Route 42** to Malahide, then a walk along the coast.
        `
    },
    {
        title: "Poolbeg (Shelly Banks)",
        description: "Swim with a view of the chimneys. Sandy beach and calm waters.",
        distance: "Poolbeg",
        difficulty: "Easy",
        icon: Waves,
        slug: "poolbeg",
        image: "/poolbeg.png",
        mapUrl: "https://www.google.com/maps/search/Shelly+Banks+Beach+Poolbeg",
        content: `
# Poolbeg / Shelly Banks

Located on the Great South Wall peninsula.

## Getting There
- **Bus**: No direct bus. Take **Bus 1** to Sandymount and walk out along the sea wall (long walk).
- **Cycle**: Easily accessible by bike.
        `
    },
    {
        title: "Bull Wall",
        description: "Traditional shelter and changing areas near the wooden bridge.",
        distance: "Clontarf",
        difficulty: "Medium",
        icon: Waves,
        slug: "bull-wall",
        image: "/bull_wall.png",
        mapUrl: "https://www.google.com/maps/search/North+Bull+Wall+Swimming",
        content: `
# North Bull Wall

Located near Clontarf on the Northside.

## Getting There
- **Bus**: **Route 130** to Clontarf Road/Wooden Bridge.
        `
    }
];

export const cycling: RouteItem[] = [
    {
        title: "Clontarf Coastal Path",
        description: "Scenic, flat dedicated cycle lane with views of Dublin Bay. Great for all levels.",
        distance: "8 km",
        difficulty: "Easy",
        icon: Bike,
        slug: "clontarf-coastal-path",
        image: "/clontarf_coastal_path_v3.png",
        content: `
# Clontarf to Sutton Coastal Path

One of the safest and most scenic cycle routes in Dublin. It is almost entirely off-road on a dedicated cycle track.

## Getting There
- **Bus**: **Route 130** serves Clontarf.
- **DART**: Check Clontarf Road DART Station.
        `
    },
    {
        title: "Phoenix Park Loop",
        description: "Cycle past the deer, the Zoo, and the President's house on wide, safe roads.",
        distance: "10 km Loop",
        difficulty: "Medium",
        icon: Bike,
        slug: "phoenix-park-loop",
        image: "/phoenix_park.png",
        content: `
# Phoenix Park Cycle

The park has an extensive network of cycle lanes.

## Getting There
- **Luas**: Red Line to **Heuston Station**.
- **Bus**: Routes **46a, 26, 37** stop near the North Circular Road entrance (Hanlon's Corner) or Parkgate Street.

## Bike Hire
- **Phoenix Park Bikes**: Located at the Parkgate Street entrance. You can rent bikes for the day here.
        `
    },
    {
        title: "Grand Canal Greenway",
        description: "Quiet ride along the canal bank from the city center towards the west.",
        distance: "12 km+",
        difficulty: "Easy",
        icon: Bike,
        slug: "grand-canal-greenway",
        image: "/grand_canal.png",
        content: `
# Grand Canal Greenway

A peaceful corridor running from the Docklands westwards out of the city.

## Getting There
- **Luas**: Green Line (Charlemont/Harcourt) or Red Line (Suir Road/Goldenbridge).
        `
    },
    {
        title: "Royal Canal Greenway",
        description: "Historic canal route on the Northside. Very flat and peaceful.",
        distance: "10 km+",
        difficulty: "Easy",
        icon: Bike,
        slug: "royal-canal-greenway",
        image: "/royal_canal.png",
        content: `
# Royal Canal Greenway

Runs parallel to the train line from the Docklands (Spencer Dock) towards Drumcondra, Phibsborough, and Ashtown.

## Getting There
- **Train**: Maynooth line (Drumcondra, Broombridge, Ashtown stations).
- **Luas**: Green Line (Cross City) to **Broadstone/DIT**.
        `
    },
    {
        title: "Dodder Greenway",
        description: "Beautiful river route connecting Ballsbridge to Rathfarnham through parks.",
        distance: "5 km",
        difficulty: "Medium",
        icon: Bike,
        slug: "dodder-greenway",
        image: "/dodder_greenway.png",
        content: `
# Dodder Greenway

A lovely route following the River Dodder.

## Getting There
- **Bus**: Routes **4, 7, 7a** (Ballsbridge end) or **15b** (Rathfarnham end).
        `
    },
    {
        title: "Sutton to Sandycove (S2S)",
        description: "Ambitious coastal route. Try the Sutton to city center section for sea views.",
        distance: "10 km",
        difficulty: "Medium",
        icon: Bike,
        slug: "sutton-to-sandycove",
        image: "/sutton_to_sandycove.png",
        content: `
# S2S (Sutton to Sandycove)

The "S2S" is a planned continuous coastal cycleway.

## Best Section
The **Northside** section from Sutton to the East Link Bridge is excellent (see Clontarf Coastal Path).
        `
    },
    {
        title: "Tymon Park Inter-park",
        description: "Safe off-road cycling within the park network in Tallaght.",
        distance: "4 km",
        difficulty: "Easy",
        icon: Bike,
        slug: "tymon-park",
        image: "/tymon_park.png",
        content: `
# Tymon Park

One of the largest suburban parks in Dublin.

## Getting There
- **Bus**: Routes **27, 77a** serving Tallaght.
        `
    }
];

export const tourism: RouteItem[] = [
    {
        title: "Howth Cliff Path Loop",
        description: "Scenic coastal views just a DART ride away. Watch for seals in the harbor!",
        distance: "6 km",
        difficulty: "Medium",
        icon: Camera,
        slug: "howth-cliff-path",
        image: "/howth.png",
        mapUrl: "https://www.google.com/maps/search/Howth+Cliff+Path+Loop",
        content: `
# Howth Cliff Path Loop

The Howth Cliff Path is one of Dublin's most popular walks, offering rugged coastal views, sea birds, and fresh air just a short train ride from the city center.

## Highlights
- **The Cliffs**: Dramatic views over the Irish Sea.
- **Bailey Lighthouse**: A picturesque lighthouse on the promontory.
- **Seals**: Often visible in the harbor near the pier.
- **Seafood**: Howth is famous for its fresh fish and chips.

## Getting There (Public Transport)
- **DART (Train)**: Take the Northbound DART to **Howth Station** (End of the line). The walk starts immediately from the station.
- **Bus**: Take the **H3** from Lower Abbey Street directly to Howth Summit or the Harbour.

## The Route
Follow the green arrows for the Cliff Path Loop. It takes about 2 hours. The terrain is rough in places, so wear good shoes.
        `
    },
    {
        title: "Glendalough Spinc Ridge",
        description: "Breathtaking views of the Wicklow lakes and the historic Monastic City.",
        distance: "9 km",
        difficulty: "Hard",
        icon: Mountain,
        slug: "glendalough-spinc",
        image: "/glendalough.png",
        mapUrl: "https://www.google.com/maps/search/Glendalough+Spinc+Ridge",
        content: `
# Glendalough Spinc Ridge

Located in the Wicklow Mountains National Park, this route offers some of the most spectacular scenery in Ireland.

## Highlights
- **The Spinc**: A ridge walk with panoramic views over the Upper Lake.
- **Monastic City**: 6th-century ruins including a round tower.
- **Poulanass Waterfall**: A lovely waterfall near the start of the climb.

## Getting There
- **Bus (St. Kevin's Bus)**: A private bus service runs from Dublin city center (St. Stephen's Green North) directly to Glendalough.
- **Car**: About 1 hour drive south of Dublin via the N11/M11. Parking is available at the Upper Lake (paid).

## The Route
This is a strenuous hike involving a steep climb (over 600 wooden steps). Proper hiking gear and water are essential. Allow 3-4 hours.
        `
    },
    {
        title: "Powerscourt Waterfall",
        description: "Visit Ireland's highest waterfall. Great for picnics and nature walks.",
        distance: "Wicklow",
        difficulty: "Easy",
        icon: Camera,
        slug: "powerscourt-waterfall",
        image: "/powerscourt.png",
        mapUrl: "https://www.google.com/maps/search/Powerscourt+Waterfall",
        content: `
# Powerscourt Waterfall

Powerscourt Waterfall is Ireland's highest waterfall at 121m (398ft). It is set in a beautiful parkland at the foothills of the Wicklow Mountains.

## Getting There
- **Car**: The waterfall is 6km from the main Powerscourt Estate. Access is best by car.
- **Public Transport**: There is no direct public transport to the waterfall itself. You can take the **44** bus to Enniskerry and take a taxi, or walk (about 5km).

## Tips
- Bring a picnic! There is a kiosk for coffee and snacks, but a packed lunch is best.
- Great for a relaxing afternoon rather than a strenuous hike.
        `
    },
    {
        title: "Lough Tay (Guinness Lake)",
        description: "Famous viewpoint of the dark lake with a white sand beach. Stunning photo op.",
        distance: "Wicklow",
        difficulty: "Easy",
        icon: Mountain,
        slug: "lough-tay",
        image: "/lough_tay.png",
        mapUrl: "https://www.google.com/maps/search/Lough+Tay+Guinness+Lake",
        content: `
# Lough Tay (Guinness Lake)

Known as the "Guinness Lake" because of its dark peat water and the white sand beach at the top (resembling a pint of Guinness).

## Getting There
- **Car**: You need a car to get here. It's on the **R759**, part of the scenic Sally Gap drive.
- **Public Transport**: No direct public transport available.

## Note
The lake itself is on private estate (Luggala), so you cannot walk down to the beach without permission, but the view from the road is the main attraction.
        `
    },
    {
        title: "Bray to Greystones Walk",
        description: "Popular cliff walk connecting two seaside towns. Return by train.",
        distance: "7 km",
        difficulty: "Easy",
        icon: TrainFront,
        slug: "bray-greystones",
        image: "/bray_greystones.png",
        mapUrl: "https://www.google.com/maps/search/Bray+to+Greystones+Cliff+Walk",
        content: `
# Bray to Greystones Cliff Walk

A linear coastal walk connecting the Victorian seaside town of Bray with the harbor town of Greystones.

## Getting There
- **DART**: Take the Southbound DART to **Bray Station**. Walk south along the promenade to find the start.
- **Bus**: Routes **145** or **155** serve Bray from the city center.
- **Return**: Take the DART back from Greystones to Dublin (or Bray).

## The Route
The path follows the train line along the cliffs. It is mostly flat but can be uneven.
        `
    },
    {
        title: "Dublin Castle & City Walk",
        description: "Explore the historic heart of Dublin on foot. Flat and accessible.",
        distance: "3 km",
        difficulty: "Easy",
        icon: Landmark,
        slug: "dublin-castle-walk",
        image: "/dublin_castle.png",
        mapUrl: "https://www.google.com/maps/search/Dublin+Castle+Dublin",
        content: `
# Dublin Castle & City Walk

A self-guided route through the medieval and historic center of Dublin.

## Stops
1.  **College Green**: Trinity College and the old Parliament (Bank of Ireland).
2.  **Dame Street**: Walking towards the castle.
3.  **Dublin Castle**: Visit the State Apartments and the Dubh Linn Garden.
4.  **Christ Church Cathedral**: Medieval cathedral founded c. 1030.
5.  **Temple Bar**: Cultural quarter with cobbled streets.

## Getting There
- **Walk**: Start at Trinity College Green, accessible by almost all city center buses and the Green Line Luas.
        `
    }
];

export const procedures: RouteItem[] = [
    {
        title: "Leap Card (Transport)",
        description: "Save up to 30% on travel. How to get your card for Bus, Luas, and DART.",
        distance: "Transport",
        icon: CreditCard,
        slug: "leap-card",
        image: "/leap_card.png",
        externalLink: "https://about.leapcard.ie/",
        mapUrl: "https://www.google.com/maps/search/TFI+Leap+Card+Outlet+Dublin",
        content: `
# TFI Leap Card

A Leap Card is a rechargeable smart card used to pay public transport fares in Dublin and surrounding areas. It is cheaper than paying with cash.

## Benefits
- **Cheaper**: Fares are typically 30% lower than cash.
- **Capping**: There are daily and weekly caps. Once you hit the cap (e.g., €5.60/day for student/young adult, €8.00/day for adult), all subsequent travel is free that day.
- **Convenience**: No need to carry coins.

## How to Get One
1.  **Online**: Buy a generic Adult card or apply for a Young Adult (19-23) / Student card at [leapcard.ie](https://www.leapcard.ie).
2.  **Shops**: Buy an Adult or Child card at any Payzone agent (many Centra, Spar, and newsagents).

## How to Use
- **Bus**: Touch on at the driver's machine (tell destination) OR on the right-hand pole (flat fare/max distance).
- **Luas/DART**: Touch ON at the platform before entering, and Touch OFF on the platform after exiting.
        `
    },
    {
        title: "ILAC Library Card",
        description: "Join the Dublin City Libraries for free. Access books, e-books, and study spaces.",
        distance: "Lifestyle",
        icon: Book,
        slug: "ilac-library-card",
        image: "/ilac_library_real.png",
        externalLink: "https://www.dublincity.ie/residential/libraries/using-your-library/join-library",
        mapUrl: "https://www.google.com/maps/search/Central+Library+ILAC+Centre",
        content: `
# Dublin City Libraries

Joining the library is completely **free** and gives you access to a huge range of resources.

## What You Get
- **Books**: Borrow books from any library in the country.
- **Online**: Free e-books, audiobooks (BorrowsBox), newspapers (PressReader), and language courses.
- **Space**: Free study spaces and Wi-Fi.
- **Printing**: Cheap printing services.

## How to Join
1.  **Walk In**: Go to any library branch (e.g., the Central Library in the ILAC Centre).
2.  **Bring ID**: Bring photo ID and proof of address (e.g., a bill or bank statement).
3.  **Sign Up**: Fill out a short form and get your card instantly.

## ILAC Central Library
Located in the ILAC Shopping Centre, Henry Street. It has a large language learning section and many desks for studying.
        `
    },
    {
        title: "PPS Number Guide",
        description: "Step-by-step guide to applying for your Personal Public Service Number.",
        distance: "Admin",
        icon: FileText,
        slug: "pps-number",
        image: "/pps_document.png",
        externalLink: "https://services.mywelfare.ie/",
        mapUrl: "https://www.google.com/maps/search/Intreo+Centre+Dublin",
        content: `
# Personal Public Service (PPS) Number

You need a PPS Number to work in Ireland, access social welfare, and register for public services.

## Prerequisites
You must be living in Ireland. You cannot apply before you arrive.

## How to Apply
1.  **MyWelfare.ie**: Most applications are done online at [MyWelfare.ie](https://services.mywelfare.ie/).
2.  **Documents**: You will need to upload:
    - **Photo ID** (Passport or National ID).
    - **Proof of Address** (Utility bill, lease, or letter from host/employer).
    - **Reason**: Proof of why you need one (e.g., job offer).

## Timeline
After applying online, it can take a few weeks to receive your letter with the number.

## Tips
- If you don't have a utility bill yet, a letter from your employer confirming your address is often accepted.
        `
    },
    {
        title: "Visa & Residency",
        description: "Information on IRP cards, stamp permissions, and renewals.",
        distance: "Legal",
        icon: Briefcase,
        slug: "visa-residency",
        image: "/irp_card.png",
        externalLink: "https://www.irishimmigration.ie/",
        mapUrl: "https://www.google.com/maps/search/Immigration+Service+Delivery+Burgh+Quay",
        content: `
# Visa & Residency Shortcuts

Navigating the immigration system (ISD) is a critical part of your stay.

## IRP Card (Irish Residence Permit)
If you are non-EU/EEA and staying longer than 90 days, you must register.
- **Dublin**: Register at the Burgh Quay Registration Office. Appointments must be booked by phone (Freephone 1800 800 630).
- **Outside Dublin**: Register at the local Garda (police) station.

## Common Stamps
- **Stamp 1**: Work permit holder.
- **Stamp 1G**: Graduate visa (after studying).
- **Stamp 2**: Student visa (allows work up to 20hrs/week).
- **Stamp 4**: Long term residency / critical skills (full access to labor market).

## Renewals
Renewals in Dublin are now done online via the ISD portal.
        `
    },
    {
        title: "Housing Basics",
        description: "Understanding rental agreements, deposits, and tenant rights in Ireland.",
        distance: "Housing",
        icon: Home,
        slug: "housing-basics",
        image: "/housing_keys.png",
        externalLink: "https://www.rtb.ie/",
        content: `
# Housing in Ireland

Finding accommodation can be challenging. Here is what you need to know.

## Where to Look
- **Daft.ie**: The main property website.
- **Rent.ie**: Another popular option.
- **Facebook Groups**: Often used for house shares ("rent allowance accepted" etc).

## Key Terms
- **Deposit**: Usually one month's rent, returned when you leave (if no damage).
- **Lease**: A legal contract. Read it carefully.
- **RTB (Residential Tenancies Board)**: The agency that registers tenancies and resolves disputes. Your tenancy should be registered here.

## Tenant Rights
- You are entitled to a "Rent Book".
- Your landlord cannot enter your home without permission (except in emergencies).
- Notice periods apply if they want to end the tenancy.
        `
    },
    {
        title: "English & Higher Ed",
        description: "Guide to English language schools (ELE), University degrees, and Graduate visas.",
        distance: "Education",
        icon: GraduationCap,
        slug: "education-system",
        image: "/university_education.png",
        externalLink: "https://www.education.ie/en/",
        content: `
# Education for Migrants

## English Language Schools (ELE)
- Many non-EU students come to Ireland to study English.
- **Stamp 2**: If you are on an eligible course (ILEP list), you can work part-time (20h) and full-time (40h) during holidays.
- **Attendance**: You must maintain 85% attendance.

## Higher Education (Third Level)
- **Universities**: TCD, UCD, DCU, TU Dublin, etc.
- **Non-EU Fees**: International students pay higher fees than EU citizens.
- **Stamp 2**: Degree students also get work rights.

## Post-Study Pathways
- **Stamp 1G**: If you graduate with an Honours Degree (Level 8) or Masters (Level 9), you can get a 1-2 year "Graduate Visa" to look for full-time work.
        `
    },
    {
        title: "Cost of Living",
        description: "Budgeting for life in Dublin. Rent, groceries, and transport costs.",
        distance: "Finance",
        icon: CreditCard,
        slug: "cost-of-living",
        image: "/cost_of_living.png",
        content: `
# Cost of Living in Dublin

Dublin is an expensive city. Here are some average monthly costs to help you budget.

## Accommodation
- **Single Room**: €800 - €1,200+
- **Shared Room**: €500 - €800
- **1-Bed Apartment**: €1,800+

## Other Expenses
- **Transport**: ~€100 (with Leap Card capping).
- **Groceries**: ~€250 - €350 per person.
- **Phone**: €20 (e.g., 48.ie or GoMo).

## Tips
- Shop at **Lidl** or **Aldi** to save on groceries.
- Use a **Leap Card** for all transport.
- Cook at home; eating out is pricey (€15-€20 for a main dish).
        `
    }
];

export const mentalHealth: RouteItem[] = [
    {
        title: "Find a Psychologist",
        description: "Directory of multicultural and multilingual psychologists in Ireland.",
        distance: "Directory",
        icon: Brain,
        slug: "find-psychologist",
        image: "/psychology_sunset_v2.png",
        content: `
# Find a Psychologist

Finding the right mental health professional is important. Here are some resources for finding multicultural and multilingual support.

## Directories
- **Psychological Society of Ireland (PSI)**: Use the "Find a Psychologist" tool on their website. You can filter by language.
- **MyMind**: A non-profit provider of accessible mental health care. They offer services in 15+ languages.
- **Counselling Directory**: A comprehensive database of counsellors and psychotherapists.

## Tips
- Ask if they have experience working with migrants or expatriates.
- Check their qualifications (PSI or IACP accreditation).
        `
    },
    {
        title: "Support Groups",
        description: "Connect with other migrants sharing their adaptation experiences.",
        distance: "Community",
        icon: Users,
        slug: "support-groups",
        content: `
# Support Groups

Connecting with others who are going through similar experiences can be very healing.

## Migrant-Specific Groups
- **New Communities Partnership (NCP)**: Offers various support services and social groups.
- **First Fortnight**: An arts-based mental health charity that often hosts inclusive events.
- **Meetup.com**: Look for "Expat" or "New in Dublin" groups to build a social circle.

## Mental Health Groups
- **Grow**: Community mental health movement with weekly meetings.
- **Aware**: Support groups for depression and bipolar disorder.
        `
    },
    {
        title: "Crisis Helplines",
        description: "24/7 confidential support for urgent mental health needs.",
        distance: "Immediate",
        icon: Phone,
        slug: "crisis-helplines",
        content: `
# Crisis Helplines

If you or someone you know is in distress, reach out now. These services are free and confidential.

## 24/7 Services
- **Samaritans**: Freephone **116 123** (Anytime, day or night).
- **Text 50808**: A free 24/7 text service. Text HELLO to 50808.
- **Pieta House**: For those at risk of suicide or self-harm. Freephone **1800 247 247**.

## Emergency
- If you are in immediate danger, call **112** or **999** or go to the nearest Hospital Emergency Department (A&E).
        `
    },
];

export const exerciseGeneral: RouteItem[] = [
    {
        title: "Coastal Run (Dublin Bay)",
        description: "Breathe the sea air on this flat, scenic path from Clontarf. Perfect for sunrise runs.",
        distance: "5-10 km",
        difficulty: "Easy",
        icon: Bike,
        slug: "coastal-run",
        mapUrl: "https://www.google.com/maps/search/Clontarf+Promenade",
        content: "# Coastal Run (Dublin Bay)\n\nA beautiful flat route along the sea. Start at the Clontarf Promenade and run towards Dollymount Strand."
    },
    {
        title: "Liffey River Walk",
        description: "Explore the modern heart of Dublin. Great for seeing the Samuel Beckett bridge.",
        distance: "3 km",
        difficulty: "Easy",
        icon: Camera,
        slug: "liffey-river-walk",
        mapUrl: "https://www.google.com/maps/search/Samuel+Beckett+Bridge",
        content: "# Liffey River Walk\n\nA modern architecture walk. Start at the Docklands and follow the river paths west."
    },
    {
        title: "Community Sports",
        description: "Outdoor gyms and local sports meetups in parks like Herbert and Fairview.",
        distance: "Various",
        difficulty: "Easy",
        icon: Users,
        slug: "community-sports",
        image: "/community_sports.png",
        mapUrl: "https://www.google.com/maps/search/Outdoor+Gym+Dublin",
        content: `
# Community Sports

Finding ways to stay active and socialize for free is easy in Dublin.

## Free Groups & Events
- **parkrun Ireland**: Free, weekly, timed 5km runs every Saturday at 9:30 AM in parks like Phoenix Park, Fairview, and St. Anne's. Registration is free.
- **Social Football**: Many amateur groups organize free or very low-cost kickabouts in parks (Fairview Park and Herbert Park are hotspots). Check Meetup.com or local Facebook groups.
- **Sporting Pride**: An inclusive multi-sport organization that often hosts free introductory sessions for various sports.
- **Sanctuary Runners**: A solidarity-through-sport movement that brings together Irish residents and those in the Direct Provision system.

## Free Equipment
- **Outdoor Gyms**: Most large Dublin parks now have high-quality outdoor fitness equipment that is free to use (Fairview, Herbert Park, Mt. Merrion).
        `
    }
];

export const womensHealth: RouteItem[] = [
    {
        title: "Free Cervical Check",
        description: "National screening programme. Free for women aged 25 to 65. Check your eligibility.",
        distance: "Health",
        icon: Heart,
        href: "https://www.hse.ie/eng/cervicalcheck/", // External link remains
        slug: "cervical-check",
        externalLink: "https://www.hse.ie/eng/cervicalcheck/",
        content: `
# CervicalCheck

The National Cervical Screening Programme.

## Eligibility
- **Free** for all women aged 25 to 65.
- You must check the register to ensure you are included.

## How it works
1.  Receive a letter inviting you for a check.
2.  Book an appointment with a registered screener (usually a GP or practice nurse).
3.  The test is free.
        `
    },
    {
        title: "Maternity Services",
        description: "Guide to public maternity care in Ireland. Registration and hospital choices.",
        distance: "Healthcare",
        icon: Baby,
        slug: "maternity-services",
        image: "/maternity_care.png",
        externalLink: "https://www.hse.ie/eng/services/list/3/maternity/",
        content: `
# Maternity Care in Ireland

**Maternity & Infant Care Scheme**: Every woman who is pregnant and ordinarily resident in Ireland is entitled to free maternity care.

## Public Care
- Shared care between your GP and a maternity hospital.
- **Cost**: Free.
- **Hospitals**:
    - The Rotunda
    - The Coombe
    - National Maternity Hospital (Holles St)

## Registration
- Visit your GP as soon as you think you are pregnant.
- They will confirm the pregnancy and help you register with a hospital.
        `
    },
    {
        title: "Women's Clinics Directory",
        description: "Find specialized health clinics for women in your area.",
        distance: "Directory",
        difficulty: "Easy",
        icon: Stethoscope,
        slug: "womens-clinics",
        image: "/womens_health.png",
        externalLink: "https://www.wellwomancentre.ie/",
        content: `
# Women's Health Clinics

Specialized clinics often provide services like:
- Contraception
- Menopause care
- Sexual health screening

## Types of Clinics
- **Well Woman Centre**: Locations across Dublin (Liffey St, Coolock, Pembroke Rd).
- **IFPA (Irish Family Planning Association)**: Clinics in city center and Tallaght.
        `
    },
    {
        title: "Support Networks",
        description: "AkiDwA, NCP, and Cairde - Connecting migrant women for social and health support.",
        distance: "Community",
        difficulty: "Easy",
        icon: Users,
        slug: "womens-support-networks",
        image: "/womens_support.png",
        content: `
# Migrant Women Support

Connecting with others is key to well-being.

## Organizations
- **[AkiDwA](https://akidwa.ie/)**: A national network of migrant women living in Ireland.
- **[NCP (New Communities Partnership)](https://www.newcommunities.ie/)**: Often hosts women's groups.
- **[Cairde](https://cairde.ie/)**: Working to reduce health inequalities.
        `
    },
    {
        title: "Women's Health Services",
        description: "Comprehensive list of clinics and services from the HSE portal.",
        distance: "Directory",
        difficulty: "Easy",
        icon: Stethoscope,
        slug: "womens-clinics-hse",
        externalLink: "https://www.hse.ie/eng/services/list/2/healthcentres/womenshealth/",
        mapUrl: "https://www.google.com/maps/search/Womens+Health+Clinic+Ireland",
        content: "# Women's Health Services\n\nFull list of clinics for women's health."
    }
];

export const roadmapData: RoadmapItem[] = [
    {
        id: "leap-card",
        title: "Leap Card",
        description: "Essential for public transport (Bus, Luas, DART).",
        icon: CreditCard,
        category: "Life"
    },
    {
        id: "ppsn",
        title: "PPS Number",
        description: "Your unique reference number for tax and public services.",
        icon: FileText,
        category: "Admin"
    },
    {
        id: "bank-account",
        title: "Bank Account",
        description: "Needed for salary and many local services.",
        icon: Landmark,
        category: "Admin"
    },
    {
        id: "irp",
        title: "IRP Card",
        description: "Irish Residence Permit for non-EU/EEA nationals.",
        icon: Briefcase,
        category: "Legal"
    },
    {
        id: "gp",
        title: "Register with a GP",
        description: "Find a local doctor for your healthcare needs.",
        icon: Stethoscope,
        category: "Health"
    }
];

export const jobSteps: JobStep[] = [
    {
        id: "cv-format",
        title: "Irish CV Format",
        description: "Keep it under 2 pages. No photo, no date of birth.",
        icon: FileText
    },
    {
        id: "linkedin",
        title: "Optimize LinkedIn",
        description: "Update your location to Dublin to appear in recruiter searches.",
        icon: Users
    },
    {
        id: "pps-job",
        title: "PPS for Work",
        description: "You need a PPS number to avoid 'Emergency Tax'.",
        icon: CreditCard
    },
    {
        id: "networking",
        title: "Local Networking",
        description: "Attend tech meetups and industry events in the city.",
        icon: Users
    }
];

export const resourceLocations: ResourceLocation[] = [
    {
        id: "intreo-parnell",
        name: "Intreo Centre Parnell Street",
        description: "Main office for PPSN applications and social welfare services.",
        category: "Admin",
        address: "Parnell St, Dublin 1",
        mapUrl: "https://www.google.com/maps/search/Intreo+Centre+Parnell+Street"
    },
    {
        id: "central-library",
        name: "Ilac Central Library",
        description: "Great for quiet study, free Wi-Fi, and printing services.",
        category: "Leisure",
        address: "Ilac Centre, Henry St, Dublin 1",
        mapUrl: "https://www.google.com/maps/search/Central+Library+Ilac+Centre"
    },
    {
        id: "st-james-hospital",
        name: "St. James's Hospital",
        description: "Major public hospital on the south side of the city.",
        category: "Health",
        address: "James's St, Dublin 8",
        mapUrl: "https://www.google.com/maps/search/St.+James's+Hospital+Dublin"
    },
    {
        id: "leap-card-topup",
        name: "Connolly Station (Leap)",
        description: "Major transport hub with many Leap Card top-up machines.",
        category: "Transport",
        address: "Amiens St, Dublin 1",
        mapUrl: "https://www.google.com/maps/search/Connolly+Station+Dublin"
    }
];

export const costOfLivingData = {
    averages: [
        { label: "Single Room (City Center)", value: 1200 },
        { label: "Shared Room", value: 650 },
        { label: "Leap Card Monthly", value: 120 },
        { label: "Groceries (1 person)", value: 250 },
        { label: "Eating Out (Mid-range)", value: 25 },
    ],
    supermarkets: [
        { name: "Lidl / Aldi", rank: "Best Value", description: "Cheapest for weekly basics. Watch out for 'middle aisle' deals." },
        { name: "Tesco", rank: "Mid-Range", description: "Good balance of price and variety. Get a Clubcard for major discounts!" },
        { name: "Dunnes Stores", rank: "Premium Selection", description: "Slightly higher quality. Their vouchers give you €10 off for every €50 spent." },
        { name: "SuperValu", rank: "Local & Premium", description: "More expensive, but often features better local Irish produce." },
    ]
};

export const dublinSlang = [
    { phrase: "What's the craic?", meaning: "How are you? / Any news?", usage: "Standard Dublin greeting." },
    { phrase: "Deadly", meaning: "Excellent / Awesome", usage: "That new café in Smithfield is deadly." },
    { phrase: "Grand", meaning: "Fine / Okay / Good", usage: "I'm grand, thanks." },
    { phrase: "Sound", meaning: "Reliable / Nice person / Thank you", usage: "Thanks for the lift, you're sound." },
    { phrase: "Story?", meaning: "What's the story? / How are you?", usage: "Yo, story bud?" },
    { phrase: "Eejit", meaning: "Idiot (often playful)", usage: "Don't be such an eejit." },
];

export const events: EventItem[] = [
    {
        id: "language-exchange",
        title: "English/Spanish Exchange",
        date: "Every Thursday",
        time: "19:00",
        location: "The Mezz, Temple Bar",
        description: "Practice your English and help others with Spanish in a friendly pub environment.",
        category: "Social"
    },
    {
        id: "museum-tour",
        title: "Free Museum Tour",
        date: "First Sunday of Month",
        time: "11:00",
        location: "National Museum of Ireland",
        description: "Explore Irish history with a professional guide for free.",
        category: "Culture"
    },
];

export const popularKeywords = [
    { label: "PPS Number", query: "pps" },
    { label: "Leap Card", query: "leap" },
    { label: "Parks", query: "park" },
    { label: "Mental Health", query: "mental" },
    { label: "Jobs", query: "job" },
    { label: "Swimming", query: "swim" },
    { label: "Library", query: "library" },
];

export const gyms: RouteItem[] = [
    {
        title: "Dublin City Council Sports & Fitness",
        description: "Affordable, high-quality gyms and pools run by the city council. Great value memberships.",
        distance: "Various Locations",
        difficulty: "Easy",
        icon: Dumbbell,
        slug: "dcc-fitness",
        externalLink: "https://www.dublincity.ie/residential/sports-and-leisure/sports-and-fitness-centres",
        content: `
# Dublin City Council Sports & Fitness

Dublin City Council operates a network of sports and fitness centres across the city. These are public facilities designed to be accessible and affordable for everyone.

## Why Choose Council Gyms?
- **Affordable**: Generally cheaper than private gyms.
- **No Contract**: Many offer "Pay as you go" or flexible monthly options.
- **Community Focused**: Friendly atmosphere, suitable for all ages and fitness levels.

## Locations
There are centres all over Dublin, including:
- **Markievicz Leisure Centre** (City Centre)
- **Irishtown Stadium** (Ringsend)
- **Swan Leisure** (Rathmines)
- **Ballymun Sports & Fitness**

## Services
- Swimming Pools
- Fully equipped gyms
- Fitness Classes (Yoga, Pilates, Spin, etc.)
- Pitches and Courts
        `
    }
];

export const physiotherapy: RouteItem[] = [
    {
        title: "Migrant Physio Network",
        description: "Connect with qualified physiotherapists from your community via WhatsApp and Facebook groups.",
        distance: "Community",
        difficulty: "Easy",
        icon: Users,
        slug: "migrant-physio-network",
        image: "/physiotherapy_session.png",
        content: `
# Migrant Physiotherapy Network

Many migrants in Ireland are qualified physiotherapists who offer services within their communities.

## How to Connect
- **Facebook Groups**: Look for groups like "Latinos en Dublin" or "Brasileiros na Irlanda". Often, professionals advertise their services there.
- **WhatsApp**: Community groups are a great way to get recommendations.
- **Language**: A huge benefit is finding someone who speaks your native language and understands your specific needs.

## Services Often Offered
- Sports massage
- Rehabilitation exercises
- Dry needling
- Post-op recovery
        `
    },
    {
        title: "Chartered Physiotherapists",
        description: "Official directory of the Irish Society of Chartered Physiotherapists.",
        distance: "Directory",
        difficulty: "Medium",
        icon: Stethoscope,
        slug: "chartered-physiotherapists",
        externalLink: "https://www.iscp.ie/find-a-physio",
        content: `
# ISCP Directory

The Irish Society of Chartered Physiotherapists (ISCP) is the professional body for physiotherapists in Ireland.

## Finding a Physio
- Use their online "Find a Physio" tool.
- You can filter by location and specialty (e.g., sports, women's health, respiratory).
- **Insurance**: Most private health insurers (VHI, Laya, Irish Life) require your physio to be "Chartered" (MISCP) for you to claim money back.
        `
    },
    {
        title: "Sports Injury Clinics",
        description: "Specialized clinics for athletes and active people.",
        distance: "Directory",
        difficulty: "Medium",
        icon: Dumbbell,
        slug: "sports-injury-clinics",
        content: `
# Sports Injury Clinics

If you have a specific sports injury, you might need a specialist.

## Popular Clinics
- **Sports Med Ireland**: Located in Dublin 2.
- **ExWell Medical**: Specializes in chronic illness rehabilitation.
- **Santry Sports Clinic**: High-level facility often used by professional athletes.
        `
    }
];

export const professionals: Professional[] = [
    {
        id: "physio-1",
        name: "Carlos Mendez",
        role: "Physiotherapist",
        specialty: ["Sports Injury", "Back Pain"],
        languages: ["English", "Spanish", "Portuguese"],
        location: "Dublin 1 (City Center)",
        contact: "+353 89 123 4567",
        rating: 4.8,
        reviews: 24,
        verified: true
    },
    {
        id: "physio-2",
        name: "Sarah O'Connor",
        role: "Physiotherapist",
        specialty: ["Post-op Rehabilitation", "Pilates"],
        languages: ["English", "French"],
        location: "Dublin 4 (Ballsbridge)",
        contact: "sarah.physio@example.com",
        rating: 4.9,
        reviews: 42,
        verified: true
    },
    {
        id: "psych-1",
        name: "Dr. Elena Rossi",
        role: "Psychologist",
        specialty: ["Anxiety", "Cultural Adaptation", "Depression"],
        languages: ["English", "Italian", "Spanish"],
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
        specialty: ["Stress Management", "Workplace Issues"],
        languages: ["English"],
        location: "Online / Dublin 6",
        contact: "+353 87 987 6543",
        rating: 4.7,
        reviews: 30,
        verified: true
    },
    {
        id: "physio-3",
        name: "Mariana Silva",
        role: "Physiotherapist",
        specialty: ["Women's Health", "Pelvic Floor"],
        languages: ["English", "Portuguese"],
        location: "Dublin 15 (Blanchardstown)",
        contact: "mariana.physio@example.com",
        rating: 4.9,
        reviews: 15,
        verified: true
    }
];
