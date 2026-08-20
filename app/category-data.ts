export type BuyingCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  image: string;
  cardText: string;
  metaDescription: string;
  intro: string;
  items: string[];
  brands: string[];
  conditionNote: string;
  collectionNote: string;
  faqs: { question: string; answer: string }[];
};

export const buyingCategories: BuyingCategory[] = [
  {
    slug: "sell-video-games",
    title: "Sell Video Games for Cash in Fort Lauderdale",
    shortTitle: "Video Games",
    image: "/real-products/video-games.webp",
    cardText: "PlayStation, Nintendo, Xbox, games, controllers, handhelds and collections.",
    metaDescription: "Sell Nintendo, PlayStation, Xbox, Sega, games and consoles for cash in Fort Lauderdale. We buy modern, vintage and complete video game collections.",
    intro: "Turn modern and vintage gaming equipment into cash without creating listings, shipping packages or meeting multiple buyers. We evaluate everything from one desirable console to an entire game-room collection.",
    items: ["Home consoles and handheld systems", "Cartridge, disc and sealed games", "Controllers, accessories and adapters", "Limited-edition systems and bundles", "Strategy guides, big-box games and displays", "Complete video game collections"],
    brands: ["Nintendo", "PlayStation", "Xbox", "Sega", "Atari", "Game Boy", "Nintendo DS", "PSP"],
    conditionNote: "Working systems are preferred, but we also consider untested consoles, systems needing repair and games with cosmetic wear. Tell us about missing cables, damaged cases or other issues so we can evaluate everything accurately.",
    collectionNote: "Have multiple generations of games packed away? Keep the consoles, games and accessories together and send clear group photos. Larger collections can often be evaluated more efficiently as one purchase.",
    faqs: [
      { question: "Do you buy older systems such as NES and Sega Genesis?", answer: "Yes. We buy vintage Nintendo, Sega, Atari and other classic systems along with modern PlayStation, Xbox and Nintendo equipment." },
      { question: "Do the consoles need to work?", answer: "Not always. We consider working, untested and repairable systems, but condition affects the offer." },
      { question: "Can I sell an entire video game collection?", answer: "Yes. Whole collections, duplicate games and mixed console lots are welcome." },
    ],
  },
  {
    slug: "sell-cameras",
    title: "Sell Cameras and Lenses in Fort Lauderdale",
    shortTitle: "Cameras",
    image: "/real-products/cameras.webp",
    cardText: "Canon, Nikon, Sony, point-and-shoot, DSLR and film cameras, lenses and accessories.",
    metaDescription: "Sell Canon, Nikon, Sony, film, DSLR and point-and-shoot cameras in Fort Lauderdale. Get a local cash offer for cameras, lenses and collections.",
    intro: "We buy modern digital cameras, desirable point-and-shoot models, vintage film cameras, lenses and complete photography kits. Send the model numbers and a few clear photos for the fastest evaluation.",
    items: ["DSLR and mirrorless camera bodies", "Digital point-and-shoot cameras", "35mm and medium-format film cameras", "Interchangeable lenses and flashes", "Camcorders and action cameras", "Camera bags, chargers and accessories"],
    brands: ["Canon", "Nikon", "Sony", "Fujifilm", "Olympus", "Panasonic", "Pentax", "Minolta"],
    conditionNote: "Tested cameras with batteries and chargers are easiest to value, but we also consider untested vintage equipment and cameras with known issues. Include the exact model number from the body or lens whenever possible.",
    collectionNote: "Selling a complete photography setup can save time and keep compatible bodies, lenses and accessories together. Lay everything out in one photo, then add close-ups of model numbers and lens glass.",
    faqs: [
      { question: "Do you buy film cameras?", answer: "Yes. We consider vintage 35mm, medium-format and instant cameras as well as modern digital equipment." },
      { question: "Can I sell lenses without a camera body?", answer: "Yes. Desirable lenses, flashes and accessories can be purchased separately." },
      { question: "What information helps you make an offer?", answer: "Send the brand, exact model, condition, included battery or charger and clear photos of the camera and lens glass." },
    ],
  },
  {
    slug: "sell-vintage-toys",
    title: "Sell Vintage Toys for Cash in South Florida",
    shortTitle: "Vintage Toys",
    image: "/real-products/vintage-toys.webp",
    cardText: "Action figures, dolls, playsets, die-cast vehicles, sealed toys and childhood collections.",
    metaDescription: "Sell vintage toys, action figures, dolls, playsets and sealed collections for cash in Fort Lauderdale. Local buyer serving Broward and Miami-Dade.",
    intro: "Old toy boxes can contain sought-after figures, vehicles, playsets and accessories. We buy loose childhood collections, boxed toys and sealed pieces from many eras.",
    items: ["Action figures and accessories", "Vehicles, playsets and parts", "Dolls and fashion accessories", "Die-cast cars and model toys", "Sealed and carded toys", "Large mixed childhood collections"],
    brands: ["Teenage Mutant Ninja Turtles", "Transformers", "G.I. Joe", "Masters of the Universe", "Star Wars", "Barbie", "LEGO", "Hot Wheels"],
    conditionNote: "Toys do not need to be sealed. We buy loose figures and collections, although completeness, broken parts, paint wear and original packaging all affect value. Please include accessories and small parts in the photos.",
    collectionNote: "Before separating a collection, send us group photos. Figures that seem ordinary may have matching weapons, vehicles or playset parts that are more useful and valuable together.",
    faqs: [
      { question: "Do vintage toys need their original packaging?", answer: "No. We buy loose toys, boxed pieces and factory-sealed items." },
      { question: "Do you buy incomplete collections?", answer: "Yes. Missing accessories may affect value, but mixed and incomplete collections are still considered." },
      { question: "How old does a toy need to be?", answer: "We focus on collectible toys from past decades, but we also consider newer limited, discontinued and desirable items." },
    ],
  },
  {
    slug: "sell-collectibles",
    title: "Sell Collectibles and Memorabilia in Fort Lauderdale",
    shortTitle: "Collectibles",
    image: "/real-products/collectibles.webp",
    cardText: "Sports cards, autographs, comics, trading cards, memorabilia and unique collections.",
    metaDescription: "Sell sports cards, autographed memorabilia, comics, trading cards and collections in Fort Lauderdale. Local cash offers in Broward County.",
    intro: "From graded cards and signed sports memorabilia to comics and specialty collections, we evaluate individual highlights and complete collections. Provenance, authentication and condition are especially helpful for signed items.",
    items: ["Sports cards and graded cards", "Autographed balls, jerseys and photos", "Pokémon and other trading cards", "Comic books and graphic novels", "Pins, tickets and event memorabilia", "Figures and specialty collections"],
    brands: ["Topps", "Panini", "Upper Deck", "Pokémon", "Marvel", "DC Comics", "PSA", "Beckett"],
    conditionNote: "Keep graded cards in their holders and avoid cleaning autographs, cards or older collectibles. For signed items, include photos of any certificate, hologram or authentication label.",
    collectionNote: "We consider one standout piece or an entire collection. Group items by type when possible, photograph the strongest pieces individually and tell us approximately how many items are included.",
    faqs: [
      { question: "Do you buy ungraded sports cards?", answer: "Yes. We consider raw and graded cards, from individual stars and rookies to complete collections." },
      { question: "Do autographs need authentication?", answer: "Authentication is helpful and can affect value, but we will still review unverified signed items." },
      { question: "Can I sell a mixed collection?", answer: "Yes. Collections may include cards, comics, figures, memorabilia and other related items." },
    ],
  },
  {
    slug: "sell-vintage-clothing",
    title: "Sell Vintage Clothing in Fort Lauderdale",
    shortTitle: "Vintage Clothing",
    image: "/real-products/clothing.webp",
    cardText: "Vintage tees, jackets, sportswear, denim, hats and sought-after branded clothing.",
    metaDescription: "Sell vintage T-shirts, jackets, denim, hats and branded clothing in Fort Lauderdale. Cash offers for individual pieces and clothing collections.",
    intro: "We buy desirable vintage and branded clothing, from single-stitch graphic tees and sports jackets to denim, workwear and snapback hats. A clear photo of the front, back and tags helps us identify each piece.",
    items: ["Vintage graphic and concert T-shirts", "Sports jackets, jerseys and hats", "Denim, workwear and outerwear", "Single-stitch and made-in-USA pieces", "Designer and streetwear clothing", "Bulk vintage clothing collections"],
    brands: ["Starter", "Levi’s", "Patagonia", "Carhartt", "Nike", "Adidas", "The North Face", "Harley-Davidson"],
    conditionNote: "Normal vintage wear can be acceptable. Show stains, holes, cracking graphics, missing tags or repairs in the photos. Measurements and tag pictures help us assess size, age and desirability.",
    collectionNote: "For larger clothing groups, photograph the best graphics and brands first, then provide an estimated piece count. We buy selectively and evaluate bulk collections based on age, condition, brands and sell-through potential.",
    faqs: [
      { question: "What clothing are you most interested in?", answer: "Vintage graphic tees, sportswear, branded jackets, denim, workwear, hats and desirable streetwear are strong categories." },
      { question: "Do you buy clothing with flaws?", answer: "Sometimes. Age-appropriate wear can be acceptable, but major stains, holes and repairs affect the offer." },
      { question: "Do you purchase clothing in bulk?", answer: "Yes. We consider curated groups and larger vintage clothing collections." },
    ],
  },
  {
    slug: "sell-sports-equipment",
    title: "Sell Golf Clubs and Sports Equipment in Fort Lauderdale",
    shortTitle: "Sports Equipment",
    image: "/real-products/sports-gear.webp",
    cardText: "Golf clubs and bags, tennis rackets, pool cues, wrestling gear and quality equipment.",
    metaDescription: "Sell golf clubs, golf bags, tennis rackets, pool cues and sports equipment in Fort Lauderdale. Local cash offers for quality branded gear.",
    intro: "Unused clubs, rackets and specialty sports equipment can take up valuable space. We buy desirable branded gear, individual premium items and complete sets throughout Broward County.",
    items: ["Golf club sets, drivers and putters", "Golf bags and rangefinders", "Tennis and pickleball rackets", "Pool cues and quality billiard accessories", "Wrestling shoes and singlets", "Branded baseball and training equipment"],
    brands: ["Callaway", "Titleist", "TaylorMade", "Ping", "Cobra", "Babolat", "Wilson", "Rawlings"],
    conditionNote: "Clean, usable equipment with clear brand and model information receives the best consideration. Show club faces, shaft labels, grips and any dents, cracks or heavy wear.",
    collectionNote: "We can evaluate complete golf sets, multiple rackets, team equipment and other grouped gear. Include an item count and photos that clearly show brand names and model markings.",
    faqs: [
      { question: "Do you buy individual golf clubs?", answer: "Yes. We consider individual drivers, putters, wedges and iron sets as well as complete golf bags." },
      { question: "Do you buy older sports equipment?", answer: "We focus on equipment with active resale demand. Brand, model, age and condition determine whether an item is a fit." },
      { question: "Can you purchase an entire set at once?", answer: "Yes. Complete sets and multi-item equipment collections are welcome." },
    ],
  },
  {
    slug: "sell-electronics",
    title: "Sell Electronics and Vintage Audio in Fort Lauderdale",
    shortTitle: "Electronics",
    image: "/real-products/electronics.webp",
    cardText: "Audio equipment, turntables, VCRs, headphones, smart-home devices and vintage technology.",
    metaDescription: "Sell electronics, turntables, vintage audio, VCRs, headphones and smart-home devices in Fort Lauderdale. Get a local cash offer today.",
    intro: "We buy selected modern and vintage electronics with resale demand, including audio components, playback equipment and smart-home devices. Model numbers and testing details make evaluations much faster.",
    items: ["Turntables, receivers and audio components", "Vintage Walkman and portable players", "VCR and DVD combination units", "Headphones and portable speakers", "Smart-home displays and speakers", "New, used and discontinued electronics"],
    brands: ["Sony", "Panasonic", "Technics", "Pioneer", "Bose", "Beats", "Amazon", "Google Nest"],
    conditionNote: "Working equipment with remotes, power supplies and accessories is preferred. We may consider untested or repairable vintage pieces; disclose problems such as distorted audio, tape-loading issues or missing parts.",
    collectionNote: "For multiple components, photograph the front and rear connections along with every model label. Keeping matching remotes, cables and accessories with the correct unit can improve the evaluation.",
    faqs: [
      { question: "Do you buy electronics that have not been tested?", answer: "Sometimes, particularly desirable vintage models. Untested status and missing accessories will affect the offer." },
      { question: "Do you purchase VCRs and older audio equipment?", answer: "Yes. Selected VCRs, turntables, receivers, cassette players and vintage audio components are considered." },
      { question: "What should I include in my photos?", answer: "Photograph the complete item, model number, rear connections, remote, power supply and any visible damage." },
    ],
  },
];

export function getBuyingCategory(slug: string) {
  return buyingCategories.find((category) => category.slug === slug);
}
