// ─────────────────────────────────────────────────────────────────────────────
// אזורי שירות — חייב להתאים ל-GBP.
// כל אזור = עמוד נפרד באתר.
// ─────────────────────────────────────────────────────────────────────────────

export const areas = [
  {
    slug: 'afula',
    name: 'עפולה',
    nameEn: 'Afula',
    type: 'city',
    distance: 12, // ק"מ ממושב מלאה
    population: 53000,
    priority: 1, // העיר הקרובה והגדולה ביותר
    metaTitle: 'מולטימדיה לרכב בעפולה | חשמלאי רכב | אמיר מערכות',
    metaDescription:
      'שירותי מולטימדיה ושירותי רכב בעפולה — התקנת מסכי אנדרואיד, מצלמות רוורס, ווי גרירה, חשמלאות. שירות מקצועי, התקנה ביום אחד.',
    nearbyNeighborhoods: ['גבעת המורה', 'יזרעאל', 'נווה רמז', 'מרכז העיר'],
  },
  {
    slug: 'migdal-haemek',
    name: 'מגדל העמק',
    nameEn: 'Migdal HaEmek',
    type: 'city',
    distance: 25,
    population: 25000,
    priority: 2,
    metaTitle: 'מולטימדיה לרכב במגדל העמק | אמיר מערכות',
    metaDescription:
      'מערכות מולטימדיה לרכב, חשמלאי רכב, ווי גרירה ושירותים נוספים במגדל העמק. שירות אישי, מחירים הוגנים, אחריות מלאה.',
    nearbyNeighborhoods: ['רמת יזהר', 'הוותיקים', 'הגליל'],
  },
  {
    slug: 'nof-hagalil',
    name: 'נוף הגליל',
    nameEn: 'Nof HaGalil',
    type: 'city',
    distance: 28,
    population: 41000,
    priority: 3,
    metaTitle: 'מולטימדיה לרכב בנוף הגליל | אמיר מערכות',
    metaDescription:
      'התקנת מערכות מולטימדיה לרכב, מצלמות רוורס, דאשקאם וחשמלאות רכב בנוף הגליל. שירות איכותי, התקנה מהירה.',
    nearbyNeighborhoods: ['הר יונה', 'יזרעאל', 'מרכז העיר'],
  },
  {
    slug: 'yokneam',
    name: 'יקנעם',
    nameEn: 'Yokneam',
    type: 'city',
    distance: 30,
    population: 24000,
    priority: 4,
    metaTitle: 'מולטימדיה לרכב ביקנעם | אמיר מערכות',
    metaDescription:
      'שירותי רכב מקצועיים ביקנעם — התקנת מסכי אנדרואיד, מצלמות, ווי גרירה, חשמלאות. שירות אישי, אחריות, מחירים הוגנים.',
    nearbyNeighborhoods: ['יקנעם עילית', 'יקנעם מושבה'],
  },
  {
    slug: 'tiberias',
    name: 'טבריה',
    nameEn: 'Tiberias',
    type: 'city',
    distance: 38,
    population: 48000,
    priority: 5,
    metaTitle: 'מולטימדיה לרכב בטבריה | אמיר מערכות',
    metaDescription:
      'מערכות מולטימדיה ושירותי רכב בטבריה והכינרת. התקנה מקצועית, אחריות מלאה, אפשרות לאיסוף והחזרה.',
    nearbyNeighborhoods: ['קריית שמואל', 'גבעת אלונים', 'הקרן'],
  },
  {
    slug: 'beit-shean',
    name: 'בית שאן',
    nameEn: 'Beit She\'an',
    type: 'city',
    distance: 28,
    population: 18000,
    priority: 6,
    metaTitle: 'מולטימדיה לרכב בבית שאן | אמיר מערכות',
    metaDescription:
      'שירותי רכב בבית שאן ועמק המעיינות — התקנת מסכים, מצלמות, ווי גרירה, חשמלאות. שירות מקצועי בעיר ובסביבה.',
    nearbyNeighborhoods: ['שכונה ד׳', 'מרכז', 'גוש שדה אליהו'],
  },
  {
    slug: 'megiddo',
    name: 'מגידו (מועצה אזורית)',
    nameEn: 'Megiddo Regional Council',
    type: 'regional',
    distance: 22,
    population: 12000,
    priority: 7,
    metaTitle: 'מולטימדיה לרכב במועצה אזורית מגידו | אמיר מערכות',
    metaDescription:
      'שירותי רכב לכל היישובים במועצה אזורית מגידו — קיבוצים, מושבים וקהילות. התקנה מקצועית עד הבית במקרים מסוימים.',
    nearbyNeighborhoods: ['קיבוץ מגידו', 'רמת השופט', 'מדרך עוז', 'יוקנעם המושבה'],
  },
  {
    slug: 'nazareth',
    name: 'נצרת',
    nameEn: 'Nazareth',
    type: 'city',
    distance: 25,
    population: 78000,
    priority: 8, // קהל ערבי — שיווק שונה
    isArabic: true, // לסימון לעמוד בערבית בעתיד
    metaTitle: 'מולטימדיה לרכב בנצרת | אמיר מערכות',
    metaDescription:
      'שירותי מולטימדיה ושירותי רכב בנצרת — התקנת מסכים, מצלמות, ווי גרירה ועוד. שירות מקצועי בכל הגליל התחתון.',
    nearbyNeighborhoods: ['מרכז', 'נצרת עילית הישנה', 'הר הקפיצה'],
  },
]

export const areasSorted = [...areas].sort((a, b) => a.priority - b.priority)

export default areas
