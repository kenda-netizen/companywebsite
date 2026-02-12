# ג'י.אן.זד שיווק והפצה בע"מ - אתר תדמית

אתר תדמית מלא ב-Next.js (App Router), TypeScript ו-Tailwind CSS עבור עסק הפצה ישראלי עם תמיכה מלאה ב-RTL ובעברית.

## דרישות מערכת

- Node.js 18.18 ומעלה
- npm 9 ומעלה

## התקנה והרצה מקומית

```bash
npm install
npm run dev
```

לאחר מכן פתחו את:

- http://localhost:3000

## בנייה לפרודקשן

```bash
npm run build
npm run start
```

## בדיקות איכות

```bash
npm run lint
```

## דפים עיקריים

- `/` דף בית
- `/categories` קטגוריות
- `/categories/[slug]` עמוד קטגוריה
- `/contact` יצירת קשר

## תיאור עיצוב

- עיצוב B2B נקי ומקצועי עם היררכיה חזקה
- פלטת צבעים בגווני ירוק, זהב וקרם על בסיס טוקנים מרכזיים
- ניווט עליון דביק (sticky) ושיפור חוויית מובייל/טאבלט
- כרטיסי קטגוריות עם Placeholder גדול לתמונה ואנימציית hover
- באנר CTA גלובלי לפני פוטר


## קבצי תצורה

- `next.config.js` (CommonJS)
- אין שימוש ב-`next.config.ts` בפרויקט.


## מערכת מיתוג (Design Tokens)

האתר משתמש בטוקנים מרכזיים לצבעים/רדיוסים/צללים.

- **מיקום יחיד לשינוי צבעים בעתיד:** `app/globals.css` תחת `:root`
  - `--color-brand-primary`
  - `--color-brand-secondary`
  - `--color-brand-accent`
  - `--color-bg-*`
  - `--color-text-*`
- `tailwind.config.ts` רק ממפה את הטוקנים למחלקות Tailwind (ללא ערכי צבע קשיחים).

כל הרכיבים והעמודים משתמשים במחלקות טוקנים (למשל `text-text-primary`, `bg-bg-surface`, `border-border`).


## עדכון פלטת מיתוג (ירוק/זהב/קרם)

טוקני המיתוג הפעילים:
- `--color-brand-primary: #1C3623`
- `--color-brand-secondary: #747A53`
- `--color-brand-accent: #ECB112`
- `--color-brand-accent-soft: #D8CA79`
- `--color-brand-surface: #F7F2C3`
- `--color-text-on-dark: #F7F2C3`
- `--color-text-on-light: #1C3623`

**נקודת שינוי אחת לעתיד:** `app/globals.css` בתוך `:root`.
`tailwind.config.ts` רק ממפה את המשתנים למחלקות Tailwind.
