// ─────────────────────────────────────────────────────────────────────────────
// רשימת השירותים של העסק.
// כל שירות = עמוד פוטנציאלי באתר. שדה `slug` = ה-URL.
// קטגוריה primary מציינת באיזה היררכיה בתפריט השירות מופיע.
// ─────────────────────────────────────────────────────────────────────────────

export const services = [

  // ─── מולטימדיה (קטר השיווק) ────────────────────────────────────────────────

  {
    slug: 'multimedia',
    category: 'multimedia',
    isHub: true,
    title: 'מערכות מולטימדיה לרכב',
    shortTitle: 'מולטימדיה',
    metaTitle: 'מערכות מולטימדיה לרכב | אמיר מערכות',
    metaDescription:
      'התקנת מערכות מולטימדיה לרכב מקצועית באזור עפולה והגלבוע. מסכי אנדרואיד, Apple CarPlay, מצלמות רוורס ודאשקאם. אחריות מלאה.',
    primaryKeyword: 'מולטימדיה לרכב',
    icon: '🎵',
  },
  {
    slug: 'multimedia/android-screens',
    category: 'multimedia',
    title: 'מסכי אנדרואיד והתקנת מולטימדיה',
    shortTitle: 'מסכי אנדרואיד',
    metaTitle: 'התקנת מסך אנדרואיד לרכב | Apple CarPlay | אמיר מערכות',
    metaDescription:
      'מסכי אנדרואיד לרכב 7-10 אינץ\', Apple CarPlay ו-Android Auto. התקנה מקצועית בעפולה והאזור, אחריות 3 שנים, חיווט נקי.',
    primaryKeyword: 'מסך אנדרואיד לרכב',
    icon: '📱',
  },
  {
    slug: 'multimedia/parking-cameras',
    category: 'multimedia',
    title: 'מצלמות רוורס ועזרי חנייה',
    shortTitle: 'מצלמות רוורס',
    metaTitle: 'התקנת מצלמת רוורס לרכב | אמיר מערכות עפולה',
    metaDescription:
      'התקנת מצלמות רוורס וחנייה לכל סוגי הרכבים. מצלמה אחורית, קדמית, 360°, חיישני חנייה. אחריות מלאה, התקנה ביום אחד.',
    primaryKeyword: 'מצלמת רוורס',
    icon: '📹',
  },
  {
    slug: 'multimedia/dashcam',
    category: 'multimedia',
    title: 'דאשקאם — מצלמות דרך לרכב',
    shortTitle: 'דאשקאם',
    metaTitle: 'התקנת דאשקאם מקצועית לרכב | אמיר מערכות',
    metaDescription:
      'מצלמות רכב (דאשקאם) — חזית בלבד או דו-כיווניות, כולל מצב חנייה. התקנה מסתורת, חיווט מוסתר, ראייה לילית מלאה.',
    primaryKeyword: 'דאשקאם',
    icon: '🎥',
  },
  {
    slug: 'multimedia/sound-systems',
    category: 'multimedia',
    title: 'מערכות שמע ורמקולים לרכב',
    shortTitle: 'מערכות שמע',
    metaTitle: 'התקנת מערכת שמע ורמקולים לרכב | אמיר מערכות',
    metaDescription:
      'שדרוג מערכת השמע ברכב — רמקולים איכותיים, סאבוופרים, מגברים. תיאום לרכב, כוונון מקצועי, איכות צליל קונצרטית.',
    primaryKeyword: 'מערכת שמע לרכב',
    icon: '🔊',
  },

  // ─── חשמל ואלקטרוניקה ───────────────────────────────────────────────────────

  {
    slug: 'electrical',
    category: 'electrical',
    title: 'חשמלאות ודיאגנוסטיקה לרכב',
    shortTitle: 'חשמלאי רכב',
    metaTitle: 'חשמלאי רכב בעפולה | דיאגנוסטיקה | אמיר מערכות',
    metaDescription:
      'חשמלאי רכב מקצועי בעפולה והאזור — דיאגנוסטיקה ממוחשבת, תיקון חיווט, תקלות חשמליות, מתנעים, אלטרנטורים. אבחון מדויק, תיקון אמין.',
    primaryKeyword: 'חשמלאי רכב עפולה',
    icon: '⚡',
  },
  {
    slug: 'ecu-reset',
    category: 'electrical',
    title: 'איפוס תקלות מחשב מנוע',
    shortTitle: 'איפוס מחשב',
    metaTitle: 'איפוס תקלות מחשב מנוע | OBD2 | אמיר מערכות',
    metaDescription:
      'איפוס נורת מנוע, מחיקת קודי תקלה, איתחול מחשב הרכב. אבחון ממוחשב מקצועי, פתרון לתקלות שחוזרות שוב ושוב.',
    primaryKeyword: 'איפוס מחשב מנוע',
    icon: '🔧',
  },
  {
    slug: 'scr-adblue-consulting',
    category: 'electrical',
    title: 'ייעוץ ופתרונות SCR / AdBlue',
    shortTitle: 'ייעוץ AdBlue',
    metaTitle: 'אבחון תקלות SCR ו-AdBlue | אמיר מערכות',
    metaDescription:
      'אבחון תקלות מערכת SCR ו-AdBlue ברכבי דיזל. ייעוץ ופתרונות מותאמים אישית לתקלות נורית AdBlue, מד מילוי, ומערכת הזרקה.',
    primaryKeyword: 'תקלת SCR',
    icon: '⚙️',
  },

  // ─── שירותים נוספים ────────────────────────────────────────────────────────

  {
    slug: 'towing-hitch',
    category: 'other',
    title: 'התקנת ווי גרירה',
    shortTitle: 'ווי גרירה',
    metaTitle: 'התקנת וו גרירה לרכב | אמיר מערכות עפולה',
    metaDescription:
      'התקנת ווי גרירה מקצועית לכל סוגי הרכבים — קבועים, נשלפים, חשמליים. תקנים מלאים, אישור מבחן רישוי, אחריות.',
    primaryKeyword: 'התקנת וו גרירה',
    icon: '🔗',
  },
  {
    slug: 'ac-repair',
    category: 'other',
    title: 'מיזוג אוויר לרכב',
    shortTitle: 'מיזוג רכב',
    metaTitle: 'תיקון מיזוג אוויר לרכב | מילוי גז | אמיר מערכות',
    metaDescription:
      'תיקון מיזוג אוויר לרכב — מילוי גז, החלפת קומפרסור, איתור דליפות, ניקוי מערכת. שירות מהיר, מקצועי, אחריות מלאה.',
    primaryKeyword: 'מיזוג אוויר לרכב',
    icon: '❄️',
  },
  {
    slug: 'trailer-repair',
    category: 'other',
    title: 'תיקון נגררים',
    shortTitle: 'תיקון נגרר',
    metaTitle: 'תיקון נגררים — חשמל, פנסים, תקלות | אמיר מערכות',
    metaDescription:
      'תיקון נגררים מכל הסוגים — חיווט חשמלי, פנסים, מערכת בלימה, מבני שילדה. שירות לחקלאים, יבואנים, ולנגררי בית.',
    primaryKeyword: 'תיקון נגרר',
    icon: '🚛',
  },
  {
    slug: 'accessories',
    category: 'other',
    title: 'מכירת אביזרים לרכב',
    shortTitle: 'אביזרים',
    metaTitle: 'אביזרים לרכב — מסכים, רמקולים, מצלמות | אמיר מערכות',
    metaDescription:
      'מגוון אביזרים לרכב מתוצרת המותגים המובילים — מסכי מולטימדיה, רמקולים, מצלמות, חיישנים, אבזור. מחירים הוגנים, ייעוץ מקצועי.',
    primaryKeyword: 'אביזרים לרכב',
    icon: '🛒',
  },
  {
    slug: 'general-mechanics',
    category: 'other',
    title: 'מכונאות כללית לרכב',
    shortTitle: 'מכונאות',
    metaTitle: 'מכונאות רכב באזור עפולה | אמיר מערכות',
    metaDescription:
      'שירותי מכונאות כללית לרכב — טיפולים תקופתיים, בלמים, מתלים, הפרשי שמן. בשילוב עם חשמלאות לפתרון מלא לכל תקלה.',
    primaryKeyword: 'מכונאי רכב',
    icon: '🛠️',
  },
]

export const servicesByCategory = {
  multimedia: services.filter(s => s.category === 'multimedia' && !s.isHub),
  multimediaHub: services.find(s => s.slug === 'multimedia'),
  electrical: services.filter(s => s.category === 'electrical'),
  other: services.filter(s => s.category === 'other'),
}

export const featuredServices = [
  services.find(s => s.slug === 'multimedia/android-screens'),
  services.find(s => s.slug === 'multimedia/parking-cameras'),
  services.find(s => s.slug === 'multimedia/dashcam'),
  services.find(s => s.slug === 'electrical'),
  services.find(s => s.slug === 'towing-hitch'),
  services.find(s => s.slug === 'ac-repair'),
]

export default services
