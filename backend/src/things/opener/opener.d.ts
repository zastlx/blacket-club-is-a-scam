interface PackData {
    price: number;
    color1: string;
    color2: string;
    image: string;
    blooks: string[];
    hidden: boolean;
}
interface User {
    id: number;
    username: string;
    created: number;
    modified: number;
    avatar: string;
    banner: string;
    badges: string[];
    blooks: Record<string, number>;
    tokens: number;
    perms: string[];
    clan: {
        id: string;
        name: string;
        color: string;
        room: number;
    };
    role: string;
    color: string;
    exp: number;
    inventory: string[];
    mute: {
        muted: boolean;
        staff: string;
        reason: string;
        time: number;
    };
    ban: {
        banned: boolean;
        reason: string;
        time: number;
        staff: string;
    };
    misc: {
        opened: number;
        messages: number;
    };
    friends: number[];
    blocks: number[];
    claimed: string;
    settings: {
        friends: string;
        requests: string;
    };
    otp: boolean;
}

interface UserResponse {
    error: boolean;
    user: User;
}

interface PackOpenResponse {
    error: boolean;
    blook: string;
}

enum Packs {
    OG = "OG",
    Ankha = "Ankha",
    Blizzard = "Blizzard",
    Combat = "Combat",
    IceMonster = "Ice Monster",
    Music = "Music",
    Outback = "Outback",
    Spooky = "Spooky",
    Summer = "Summer",
    VideoGame = "Video Game",
    Time = "Time",
    Pirate = "Pirate",
    SciFi = "Sci-Fi",
    Retro = "Retro",
    Magic = "Magic",
    Aquatic = "Aquatic",
    Bot = "Bot",
    Breakfast = "Breakfast",
    Candy = "Candy",
    Color = "Color",
    Dino = "Dino",
    Elemental = "Elemental",
    Fruit = "Fruit",
    Gemstone = "Gemstone",
    Medieval = "Medieval",
    Safari = "Safari",
    Space = "Space",
    Sports = "Sports",
    Wonderland = "Wonderland",
    Dessert = "Dessert",
}

export {
    PackData,
    User,
    UserResponse,
    PackOpenResponse,
    Packs
}
