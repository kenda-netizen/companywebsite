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
- פלטת צבעים בגווני כחול כהה ורקע נייטרלי בהיר
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
