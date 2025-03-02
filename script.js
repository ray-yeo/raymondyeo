const adjectives = [
    "luminous", "serpentine", "verdant", "glistening", "billowing", "crimson", "shadowy",
    "effervescent", "jagged", "sublime", "scorched", "frostbitten", "torrential", "glacial",
    "honeyed", "bristling", "phantasmal", "sinuous", "silken", "thorny", "whispering",
    "smoldering", "tattered", "murky", "resplendent", "shimmering", "gory", "syrupy",
    "chiseled", "blistering", "mirthful", "dusky", "cavernous", "ravenous", "sweltering",
    "gargantuan", "musty", "incandescent", "feral", "delirious", "quivering", "opalescent",
    "drenched", "buoyant", "prickly", "twilight", "monolithic", "labyrinthine", "cacophonous",
    "staggering", "frigid", "undulating", "eclipsed", "cloaked", "smoky", "spiraling",
    "gushing", "ominous", "translucent", "sepulchral", "wispy", "plummeting", "frenzied",
    "cascading", "fragrant", "ashen", "echoing", "looming", "sinister", "coruscating",
    "warped", "festering", "turbulent", "dappled", "gossamer", "serrated",
    "brooding", "putrid", "radiant", "writhing", "meandering", "sputtering", "howling",
    "scraggly", "crackling", "flickering", "plush", "frosted", "swirling", "undying",
    "mottled", "opulent", "churning", "dizzying", "sagging", "glowering",
    "forlorn", "clattering", "windblown", "dripping", "sable", "peering", "ethereal",
    "broken",
  
    // Happy & Lighthearted
    "wobbly", "goofy", "bouncy", "noodle-like", "wonky", "squishy",
    "fluffy", "pudgy", "zany", "dopey", "jolly", "wiggly",
    "boisterous", "perky", "clumsy", "giggly", "puffy", "bubble-like",
    "derpy", "bubbly", "sproingy", "sassy", "frizzy", "chaotic",
    "puckered", "flibbertigibbet", "jangly", "lopsided", "plonky",
    "doodly", "snazzy", "crumpled", "fizzy", "dizzy", "gooberish"
  ];

const nouns = [

    "depression", "brilliance", "fury", "strength", "greed", "hope", "self-control",
    "symmetry", "fragmentation", "tension", "purity", "sorrow", "victory", "lust",
    "abundance", "embarrassment", "melancholy", "clarity", "whimsy", "solitude",
    "chaos", "euphoria", "despair", "serenity", "nostalgia", "devotion",

    "snakes fighting", "hen sitting on a cow", "invisible person", "phoenix eyes", 
    "flower accessories", "mr. universe", "cowboy", "opera singer", "marinated fish",
    "eel", "silkworms on mulberry tree", "shipwreck", "dragon king", "rainbow",
    "centipede", "sixth sense", "labyrinth", "forgotten staircase", "paper crane", 
    "whispering statues", "burning tapestry",
    "bridge of gold", "astronaut", "cumulonimbus", "azure", "celadon", "canal",
    "eclipse", "grandmother", "armchair", "volcano", "airport", "jail", "casino",
    "newspaper", "unlucky dice", "boxcar", "stained glass window", "hidden alleyway",
    "desert mirage", "moonlit garden", "hanging lanterns",

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
    , "graveyard", "summer baseball", "thyme", "fabric coaster", "child's hand", "strawberry",

    "abandoned carousel", "candlelit corridor", "tattered book", "flickering neon sign",
    "ancient coin", "glass bottle bobbing in the sea", "moonstone", "forgotten love letter",
    "fractured mirror", "moth-eaten curtain", "shadow puppet", "rusted key", "train whistle",
    "glowing ember", "lighthouse in the fog", "spiral staircase", "withered vines",
    "music box", "sunken ship", "crumbling cathedral", "chessboard", "silver locket",
    "melting icicle", "frozen pond", "lantern festival", "distant thunder", "meteor shower"
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