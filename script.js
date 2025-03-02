const adjectives = [
    "serpentine", "jagged", "thorny", "bristling", "silken", "prickly", "scraggly",
    "serrated", "chiseled", "gossamer", "plush", "mottled", "crackling", "flickering",
    "sputtering", "luminous", "glistening", "shimmering", "incandescent", "radiant",
    "coruscating", "opalescent", "translucent", "wispy", "smoky", "ethereal", "twilight",
    "eclipsed", "cloaked", "shadowy", "crimson", "dusky", "ashen", "sable", "murky",
    "frosted", "forlorn", "gory", "verdant", "sepulchral", "glowering", "ominous",
    "billowing", "undulating", "swirling", "meandering", "howling", "plummeting",
    "quivering", "sagging", "dripping", "clattering", "spiraling", "churning",
    "blistering", "smoldering", "warped", "gargantuan", "monolithic", "cavernous",
    "ravenous", "staggering", "labyrinthine", "torrential", "sweltering", "frigid",
    "musty", "drenched", "putrid", "festering", "turbulent", "looming", "broken",

    // happy
    "wobbly", "goofy", "bouncy", "noodle-like", "wonky", "squishy",
    "fluffy", "pudgy", "zany", "dopey", "jolly", "wiggly",
    "boisterous", "perky", "clumsy", "giggly", "puffy", "bubble-like",
    "derpy", "bubbly", "sproingy", "sassy", "frizzy", "chaotic",
    "puckered", "flibbertigibbet", "jangly", "lopsided", "plonky",
    "doodly", "snazzy", "crumpled", "fizzy", "dizzy", "gooberish"
];

const nouns = [

    // abstract nouns
    "depression", "brilliance", "fury", "strength", "greed", "hope", "self-control",
    "symmetry", "fragmentation", "tension", "purity", "sorrow", "victory", "lust",
    "abundance", "embarrassment",

    // walls on glass dream book
    "snakes fighting", "hen sitting on a cow", "invisible person", "phoenix eyes", 
    "flower accessories", "mr. universe", "cowboy", "opera singer", "marinated fish",
    "eel", "silkworms on mulberry tree", "shipwreck", "dragon king", "rainbow",
    "centipede", "sixth sense",

    // walls on glass nouns
    "bridge of gold", "astronaut", "cumulonimbus", "azure", "celadon", "canal",
    "eclipse", "grandmother", "armchair", "volcano", "airport", "jail", "casino",
    "newspaper", "dice", "boxcar",

    // mine
    "spider", "subway", "white house", "out of tune piano", "creamy espresso",
    "checked luggage", "willow", "raspberry", "unscented candle", "silver spoon",
    "los angeles", "new york", "paris", "museum", "periwinkle blue", "rosemary",
    "royal purple", "collage", "wind chime", "samurai",
    "foliage", "rain", "magazine stack", "dried rose", "snail", "the little prince",
    "dog", "loose ring", "library", "best friend", "comet", "a-minor scale",
    "amethyst", "palm trees", "memorial", "reflection", "black widow", "white christmas",
    "summer", "vagabond", "maple syrup", "bullet train", "midnight", "morning dew",
    "unopened newspaper", "ocean", "slaughterhouse", "wrinkle",
    "americano", "sparrow", "rusted silver", "snow", "porcelain mug", "black butterfly"
    , "graveyard", "summer baseball", "thyme", "fabric coaster", "child's hand", "strawberry"


];

var timestamp = new Date().getTime();
document.write('<script src="script.js?v=' + timestamp + '"><\/script>');

function getRandomWord(array, seed) {
    return array[seed % array.length];
}

function generateDailyWords() {
    const today = new Date();
    const dateString = today.toDateString();

    // Use the day of the year as a seed to ensure the same word combo each day
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);

    const adj = getRandomWord(adjectives, dayOfYear);
    const noun = getRandomWord(nouns, dayOfYear);

    document.getElementById("date").textContent = `Today's Date:  ${dateString}`;
    document.getElementById("output").textContent = `Today's Phrase: ${adj} ${noun}`;
}

generateDailyWords();