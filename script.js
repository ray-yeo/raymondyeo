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
    "warped", "ashen", "festering", "turbulent", "dappled", "gossamer", "serrated", 
    "brooding", "putrid", "radiant", "writhing", "meandering", "sputtering", "howling", 
    "scraggly", "crackling", "flickering", "plush", "frosted", "swirling", "undying", 
    "mottled", "opulent", "churning", "glistening", "dizzying", "sagging", "glowering", 
    "forlorn", "clattering", "windblown", "dripping", "sable", "peering", "ethereal"
];
const nouns = [
    "slow cooker", "snakes fighting", "corrupted policeman", "star light", "punching sand bag", 
    "strong head", "husband gets home late", "severed finger", "cancer medicine", 
    "falling from a mountain", "cats mating", "red color sun", "jockey fell down", 
    "broken shoes heel", "sea turtle laying eggs", "nurse scolding people", "pagoda on fire", 
    "snake strangling a hare", "man fell into a drain", "hen sitting on a cow", "king kong/gorilla", 
    "invisible person", "laughing loud", "kicking a stone", "broken electric cable", "toad in a shoe", 
    "mountain bandit", "robot", "stone factory", "box kite in tree", "resurrect from dead", 
    "corpse in a pail", "trade exhibition", "phoenix eyes", "gangster leader", "old chinese book", 
    "broken axe", "arrested demonstrator", "oily ghost", "malay dictionary", "lady ghost", "collagen", 
    "community program", "stealing cement coup", "killed by bulldozer", "meeting in a dream", 
    "arrested for smuggling", "flirting with girls", "crossing a yellow river", "crying ghost", 
    "business failure", "world famous painting", "chinese herb wine", "indian toddy", "feces barrel", 
    "lightning striking coconut tree", "triangle love", "stone throwing", "ginseng wine", 
    "double egg yolk", "lizards fighting", "electronic calculator", "burning a love letter", 
    "warlord", "lady president of india", "medicine for chickens", "circumcision", "president of africa", 
    "water pipe leaking", "farm on fire", "overcooked rice", "broken chopsticks", "leaking pot", 
    "russian spy", "female swimmer", "chased by an elephant", "crow on the cement", "frog on a lotus leaf", 
    "crystal palace", "broken hoe", "birds fighting", "stepped on cow dung", "badminton player", 
    "cycads blooming", "bamboo blooming", "lunar eclipse", "solar eclipse", "ancient bomb", "butterfly", 
    "philanthropists", "old man climbing a tree", "dried meat", "pomelo", "polling station", 
    "flag with star", "pot repairer", "fish hunting", "wearing a wig", "myrtle tree", "bird training", 
    "top student", "mr. universe", "watching television", "karaoke singer", "chinese almanac", 
    "failed an exam", "flower accessories", "snake fighting with a tiger", "hailstones", "double champion", 
    "atomic bomb", "african boxer", "white clouds", "kung fu star", "maniac", "porter", "time keepers", 
    "head chef", "lady inspector", "pickpocket", "tricycle operator", "lady judge", "cowboy", 
    "ticket collector", "match maker", "mine worker", "marriage counselor", "temple caretaker", 
    "baby sitter", "scuba diver", "headmaster", "dock master", "train station master", "water inspector", 
    "river inspector", "alcohol addict", "site supervisor", "watch maker", "telephone operator", 
    "ancient warrior", "astronaut", "multi task worker", "civil worker", "gardener", "farmer", 
    "pregnant woman", "ironsmith", "money lender", "nun", "temple medium", "abandoned baby", 
    "tin mine worker", "tall man", "petrol kiosk attendant", "letter writer", "goldsmith", "barber", 
    "bride", "scientist", "fortune teller", "boatman", "architect", "bald headed guy", "acrobat", 
    "witness", "hercules", "mediator", "trickster", "silk merchandise", "man without a nose", 
    "debate team", "tea server", "opera singer", "fairy", "man who smokes", "ambassador", "vegetarian lady", 
    "fire fighter", "male pimp", "snooker players", "gossips", "palace maid", "green bean noodle", 
    "identity card lost", "fungus/mushroom", "chocolate biscuits", "sky", "white ant/termite", "langsat", 
    "lottery ticket", "coffee powder", "benevolent association", "ferry boat", "giving valentines", 
    "making wine", "toy gun", "coconut grater", "divorce", "crab catching", "minced coconut", 
    "landscape photo", "magic", "sell ovaltine", "kids arguing", "old bottle collection", "birds nest", 
    "msg powder", "garbage truck", "buying marinated fish", "playing with fireworks", "dogfight", 
    "catching clams", "measuring cloth", "pawn goods", "peeping/ogling", "abstract rambutan", "mill sambal", 
    "drying things", "change roof tiles", "repair sewing machine", "dig potato", "heart to heart talk", 
    "comb", "pineapple", "perm", "circus", "steelyard", "child born", "cut banana leaf", "vegetable", 
    "clock", "red candle", "frying food", "honeycomb", "mahjong", "betel leaf", "body lotion", "collect eggs", 
    "jack fruit", "boiling water", "beetle", "rain", "basin", "shipwreck", "sunflower seeds", "fold paper money", 
    "grape", "ghost crying", "hairspray", "birdcage", "papaya", "burning grass", "silkworms on mulberry tree", 
    "eel", "scorpion", "dragon king", "rainbow", "perfume", "thus come one", "sweet potato", "narcissus", 
    "ocean", "aquarium", "fairy wand", "nail bed", "star fruit", "never tiring of mother", "spinach", 
    "wine bottle", "loquat", "pillar", "silverfish", "hair", "electronic calculator", "stone throwing", 
    "burning a love letter", "armchair", "water pipe leaking", "chased by an elephant", "lunar eclipse", 
    "white clouds", "two-headed chick", "vegetarian", "hair cream", "odd shape stone", "color-changing stone", 
    "leaf insect", "twin pineapples on single plant", "money plant", "furniture factory blaze", 
    "telephone booth on fire", "staircase on fire", "fire-colored beetle", "pass through the fire pit", 
    "boat is on fire", "orphanage", "spider wrench", "a gentleman in a formal suit", "having sex", 
    "a predominantly white horse", "a metallic gadget", "a bunch of bees around you", 
    "being in the middle of a large lake", "super moon", "crying or seeing tears", "a charm bracelet", 
    "a cat licking its paw", "moth ball", "flying boat", "time capsule", "tooth extraction", "house ants", 
    "lighting a lantern", "planting tapioca", "first 100 days", "cigarette box", "doll house", "honeymoon", 
    "house centipede", "nanofiber", "salt", "sand candle", "tea tank", "harbor", "cave", "birth control pill", 
    "red milkweed beetle", "button", "ingesting pesticide", "copper thread", "newborn baby", "ice", "canal", 
    "pawnshop", "pearl", "ovaltine", "tamarind", "piano", "thread", "oranges", "oil derrick", 
    "glass house", "snuff box", "fiber optic cable", "raw diamond", "pilot light", "vine scissors", "chess piece", 
    "ant hill", "green pepper", "sixth sense", "anonymous letter", "olympics", "flag raising ceremony", 
    "oolong tea", "greeting card", "jujube tree", "jujube candy box", "mermaid", "bead necklace", "strange city", 
    "cloud rainbow", "botanist", "deck of cards", "dinosaur park", "plastic flowers", "observatory", 
    "ice boat", "firework display", "sting ray"
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