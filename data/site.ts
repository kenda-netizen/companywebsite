export type Category = {
  slug: string;
  name: string;
  description: string;
  sampleProducts: { name: string; note?: string }[];
};

export const business = {
  name: "ג'י.אן.זד שיווק והפצה בע\"מ",
  subtitle: 'פתרונות שיווק והפצה לעסקים בכל אזור הצפון',
  phone: '0536235035',
  address: 'כאבול',
  whatsappLink: 'https://wa.me/972536235035',
  wazeLink: 'https://waze.com/ul',
};

export const categories: Category[] = [
  {
    slug: 'cheese',
    name: 'גבינות',
    description: 'מבחר גבינות לאירוח, מוסדות ועסקים, בזמינות קבועה ובהתאמה לצרכים שלכם.',
    sampleProducts: [
      { name: 'מוצר לדוגמה 1', note: 'גבינה צהובה פרוסה' },
      { name: 'מוצר לדוגמה 2', note: 'גבינה מלוחה' },
      { name: 'מוצר לדוגמה 3' },
      { name: 'מוצר לדוגמה 4', note: 'אריזה משפחתית' },
      { name: 'מוצר לדוגמה 5' },
      { name: 'מוצר לדוגמה 6', note: 'זמין להזמנות שוטפות' },
    ],
  },
  {
    slug: 'dairy-products',
    name: 'מוצרי חלב',
    description: 'קטגוריית מוצרי חלב טריים לשיווק והפצה לעסקים, חנויות ולקוחות פרטיים.',
    sampleProducts: [
      { name: 'מוצר לדוגמה 1', note: 'חלב 3%' },
      { name: 'מוצר לדוגמה 2', note: 'יוגורט טבעי' },
      { name: 'מוצר לדוגמה 3' },
      { name: 'מוצר לדוגמה 4', note: 'שמנת לבישול' },
      { name: 'מוצר לדוגמה 5' },
      { name: 'מוצר לדוגמה 6' },
    ],
  },
  {
    slug: 'frozen',
    name: 'קפואים',
    description: 'פתרונות הקפאה לעסקים עם שרשרת אספקה מסודרת, אמינה ומהירה.',
    sampleProducts: [
      { name: 'מוצר לדוגמה 1', note: 'ירקות קפואים' },
      { name: 'מוצר לדוגמה 2' },
      { name: 'מוצר לדוגמה 3', note: 'מאפים קפואים' },
      { name: 'מוצר לדוגמה 4' },
      { name: 'מוצר לדוגמה 5', note: 'מנות מוכנות' },
      { name: 'מוצר לדוגמה 6' },
    ],
  },
  {
    slug: 'other',
    name: 'אחר',
    description: 'מוצרים נוספים לפי דרישת לקוח, עם גמישות גבוהה והתאמה לצרכים משתנים.',
    sampleProducts: [
      { name: 'מוצר לדוגמה 1' },
      { name: 'מוצר לדוגמה 2', note: 'פריט משלים' },
      { name: 'מוצר לדוגמה 3' },
      { name: 'מוצר לדוגמה 4' },
      { name: 'מוצר לדוגמה 5', note: 'זמין בהזמנה מראש' },
      { name: 'מוצר לדוגמה 6' },
    ],
  },
];

export const workSteps = [
  {
    title: 'מגדירים צרכים',
    description: 'שיחה קצרה להבנת סוג העסק, נפח הזמנות ותדירות אספקה רצויה.',
  },
  {
    title: 'מתאימים סל מוצרים',
    description: 'בניית סל מוצרים לפי קטגוריות, מלאי זמין ולוח זמנים שמתאים לכם.',
  },
  {
    title: 'אספקה שוטפת',
    description: 'שיווק והפצה רציפים עם שירות אישי, מעקב ושמירה על איכות לאורך הדרך.',
  },
];
