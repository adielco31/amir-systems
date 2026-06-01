// ─────────────────────────────────────────────────────────────────────────────
// פרטי העסק — מקור אמת יחיד (Single Source of Truth)
// כל NAP (Name, Address, Phone) ושאר פרטים מופיעים מכאן. אל תכפיל בקבצים אחרים.
// ─────────────────────────────────────────────────────────────────────────────

export const business = {
  // Identity
  name: 'אמיר מערכות',
  nameEn: 'Amir Systems',
  ownerName: 'אמיר כהן',
  tagline: 'מולטימדיה ושירותי רכב מקצועיים — עפולה, הגלבוע והעמקים',
  description:
    'אמיר מערכות מתמחה בהתקנת מערכות מולטימדיה לרכב, חשמלאות ודיאגנוסטיקה, התקנת ווי גרירה, תיקון מיזוג רכב ושירותים נוספים. שירות אישי, אחריות מלאה, מחירים הוגנים. שירות באזור עפולה, הגלבוע, עמק יזרעאל, עמק המעיינות וטבריה.',

  // Contact — TODO: למלא לפני העלאה ל-production
  phone: '050-733-7853',
  phoneClean: '0507337853', // ללא מקפים, ללינק tel:
  whatsapp: '972507337853', // פורמט בינלאומי, ללא + ו-0 ראשוני
  email: 'info@amirsystems.co.il',

  // Address
  address: {
    street: 'מושב מלאה משק 34',
    streetEn: 'Moshav Mela\'a 34',
    city: 'מושב מלאה',
    region: 'מועצה אזורית הגלבוע',
    country: 'IL',
    postalCode: '', // TODO
    // קואורדינטות גיאוגרפיות של מושב מלאה (לאישור)
    geo: {
      latitude: 32.5036,
      longitude: 35.3756,
    },
  },

  // Hours — TODO: לאשר עם אמיר
  hours: [
    { day: 'Sunday',    open: '08:00', close: '18:00' },
    { day: 'Monday',    open: '08:00', close: '18:00' },
    { day: 'Tuesday',   open: '08:00', close: '18:00' },
    { day: 'Wednesday', open: '08:00', close: '18:00' },
    { day: 'Thursday',  open: '08:00', close: '18:00' },
    { day: 'Friday',    open: '08:00', close: '13:00' },
    { day: 'Saturday',  open: null,    close: null   }, // סגור
  ],

  // Social — TODO: למלא קישורים אמיתיים
  social: {
    facebook: '',
    instagram: '',
    googleMaps: '', // לינק לעמוד GBP
  },

  // Domain
  url: 'https://amirsystems.co.il',
  shortUrl: 'amirsystems.co.il',

  // Stats — שווה למלא מספרים אמיתיים, מחזק E-E-A-T
  stats: {
    yearsOfExperience: 10, // TODO: לאשר
    installationsCount: 1500, // TODO: הערכה
    rating: 4.8, // TODO: ממוצע GBP
    reviewsCount: 0, // TODO: מספר חוות דעת ב-GBP
  },
}

export default business
