import { CTAButton } from '@/components/ui/button';
import { business } from '@/data/site';

export function CtaBanner() {
  return (
    <section className="container-page pb-6 pt-12 sm:pt-16">
      <div className="rounded-card bg-hero-gradient p-6 text-text-onDark shadow-card sm:p-8 lg:p-10">
        <h2 className="text-2xl font-bold sm:text-3xl">מעוניינים בהפצה מקצועית לעסק שלכם?</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-brand-surface sm:text-base">
          אנחנו מספקים שירות מהיר, אספקה אמינה ומגוון רחב של מוצרים בהתאמה לצרכים שלכם.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <CTAButton href={`tel:${business.phone}`} variant="primary">
            להתקשר
          </CTAButton>
          <CTAButton href={business.whatsappLink} variant="outline" external>
            וואטסאפ
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
