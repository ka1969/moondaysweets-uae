import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  Cake,
  Heart,
  Sparkles,
  Gift,
  Star,
  Instagram,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import heroCake from "../assets/hero-cake.png.asset.json";
import miniCakes from "../assets/mini-cakes.png.asset.json";
import genderReveal from "../assets/gender-reveal.png.asset.json";
import vintageCake from "../assets/vintage-cake.png.asset.json";
import celebrationDesserts from "../assets/celebration-desserts.png.asset.json";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=971547468300";
const INSTAGRAM_LINK = "https://www.instagram.com/moonday.ae/";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moonday Sweets | Premium Custom Cakes & Sweets in UAE" },
      {
        name: "description",
        content:
          "Moonday Sweets crafts premium custom cakes, mini cakes, and celebration desserts in the UAE. Order or customize your perfect cake via WhatsApp today.",
      },
      { property: "og:title", content: "Moonday Sweets | Premium Custom Cakes & Sweets in UAE" },
      {
        property: "og:description",
        content:
          "Handcrafted custom cakes, mini cakes, and celebration sweets made with love in the UAE. Order via WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroCake.url },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Moonday Sweets | Premium Custom Cakes & Sweets in UAE",
      },
      {
        name: "twitter:description",
        content:
          "Handcrafted custom cakes, mini cakes, and celebration sweets made with love in the UAE. Order via WhatsApp.",
      },
      { name: "twitter:image", content: heroCake.url },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-cream">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
        rel="stylesheet"
      />

      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-cream/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-soft-pink text-soft-pink-foreground">
              <Cake className="h-5 w-5" />
            </span>
            <span className="font-[Playfair_Display] text-xl font-bold tracking-tight text-foreground">
              Moonday Sweets
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
            <a href="#cakes" className="transition-colors hover:text-foreground">
              Our Cakes
            </a>
            <a href="#custom" className="transition-colors hover:text-foreground">
              Customize
            </a>
            <a href="#flavors" className="transition-colors hover:text-foreground">
              Flavors
            </a>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-soft-pink px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-rose-gold hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Order Now</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 pt-12 pb-20 sm:px-6 sm:pt-16 lg:px-8">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
            <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-soft-pink/30 blur-3xl" />
            <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-baby-blue/30 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream-dark/60 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-sm font-medium text-warm-chocolate shadow-sm backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-rose-gold" />
                <span>Premium Custom Cakes & Sweets in the UAE</span>
              </div>
              <h1 className="font-[Playfair_Display] text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Sweets crafted with <span className="text-rose-gold">love</span>, made just for you
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                From elegant custom cakes to bite-sized mini treats and celebration dessert tables,
                Moonday Sweets turns your sweetest moments into edible art.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-soft-pink px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:bg-rose-gold hover:shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  Order / Customize via WhatsApp
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-cream bg-soft-pink text-xs font-semibold text-primary-foreground">
                    5★
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-cream bg-baby-blue text-xs font-semibold text-secondary-foreground">
                    <Heart className="h-3 w-3" />
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-cream bg-cream-dark text-xs font-semibold text-foreground">
                    <Gift className="h-3 w-3" />
                  </span>
                </div>
                <span>Trusted across the UAE for birthdays, weddings & baby showers</span>
              </div>
            </div>

            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-br from-soft-pink/40 via-baby-blue/30 to-cream-dark/60 blur-xl" />
                <div className="relative h-72 w-72 sm:h-96 sm:w-96">
                  <img
                    src={heroCake.url}
                    alt="A luxurious three-tier custom Moonday Sweets cake with pastel pink, blue, and cream buttercream roses and edible gold accents"
                    width={1024}
                    height={1024}
                    className="h-full w-full rounded-full border-4 border-white object-cover shadow-2xl"
                  />
                  <div className="absolute -right-2 top-6 rounded-2xl border border-border bg-white/90 p-3 shadow-lg backdrop-blur-sm sm:-right-4">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-rose-gold text-rose-gold" />
                      <span className="text-sm font-semibold text-foreground">Made to order</span>
                    </div>
                  </div>
                  <div className="absolute -left-2 bottom-8 rounded-2xl border border-border bg-white/90 p-3 shadow-lg backdrop-blur-sm sm:-left-4">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 fill-soft-pink text-soft-pink" />
                      <span className="text-sm font-semibold text-foreground">100% handcrafted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section id="cakes" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block rounded-full bg-baby-blue-light px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
                Our Collection
              </span>
              <h2 className="font-[Playfair_Display] text-3xl font-bold text-foreground sm:text-4xl">
                Choose your sweet moment
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Every dessert is baked fresh, finished by hand, and tailored to your celebration.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ProductCard
                image={miniCakes.url}
                title="Mini Cakes"
                description="Adorable single-serve cakes perfect for parties, gifting, or treating yourself."
                badge="Best Seller"
                alt="A plate of premium mini cakes decorated with pastel pink, blue, and cream buttercream, macarons, and edible flowers"
              />
              <ProductCard
                image={vintageCake.url}
                title="Custom Cakes"
                description="Made-to-order centerpieces in any theme, flavor, or size for your special day."
                badge="Customize"
                alt="A vintage-style custom cake with ruffled buttercream, lace piping, and sugar roses"
              />
              <ProductCard
                image={celebrationDesserts.url}
                title="Celebration Desserts"
                description="Truffles, macarons, tarts, and dessert tables to complete your event."
                badge="Party Packs"
                alt="An assortment of chocolate truffles, coconut cakes, raspberry tarts, and pink macarons"
              />
            </div>
          </div>
        </section>

        {/* Featured Occasions */}
        <section id="custom" className="relative px-4 py-20 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
            <div className="absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-soft-pink/20 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-baby-blue/20 blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block rounded-full bg-soft-pink-light px-4 py-1.5 text-sm font-semibold text-primary-foreground">
                Signature Themes
              </span>
              <h2 className="font-[Playfair_Display] text-3xl font-bold text-foreground sm:text-4xl">
                Designed for every celebration
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <OccasionCard
                image={genderReveal.url}
                title="Gender Reveal Sweets"
                description="Pink-or-blue drip cakes, macarons, cupcakes, and cake pops that make the big reveal even sweeter."
                cta="Plan a Gender Reveal"
                alt="A gender reveal dessert table with a pink and blue drip cake, macarons, cupcakes, and cake pops"
              />
              <OccasionCard
                image={vintageCake.url}
                title="Vintage Elegance"
                description="Timeless buttercream ruffles, lace piping, and soft floral details for weddings and anniversaries."
                cta="Design a Vintage Cake"
                alt="A vintage-style cake with ruffled buttercream, lace piping, and sugar flowers on an antique cake stand"
              />
            </div>
          </div>
        </section>

        {/* Flavors */}
        <section id="flavors" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block rounded-full bg-cream-dark px-4 py-1.5 text-sm font-semibold text-foreground">
                Favorite Flavors
              </span>
              <h2 className="font-[Playfair_Display] text-3xl font-bold text-foreground sm:text-4xl">
                Made with love, flavored by you
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FlavorCard name="Chocolate" note="Rich & velvety" color="bg-warm-chocolate text-white" />
              <FlavorCard name="Coconut" note="Light & tropical" color="bg-cream-dark text-foreground" />
              <FlavorCard
                name="Coconut Raspberry"
                note="Sweet & tangy"
                color="bg-soft-pink text-primary-foreground"
              />
              <FlavorCard name="Vanilla Bean" note="Classic & creamy" color="bg-cream text-foreground" />
              <FlavorCard name="Lotus Biscoff" note="Caramel crunch" color="bg-baby-blue text-secondary-foreground" />
              <FlavorCard name="Custom Flavor" note="You decide" color="bg-rose-gold text-white" />
            </div>

            <div className="mt-12 text-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-soft-pink px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:bg-rose-gold hover:shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Customize Your Flavor via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="font-[Playfair_Display] text-3xl font-bold text-foreground sm:text-4xl">
                Sweet words from our customers
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <TestimonialCard
                quote="The gender reveal cake was absolutely gorgeous and tasted even better than it looked!"
                author="Aisha R."
                occasion="Baby shower"
              />
              <TestimonialCard
                quote="Moonday Sweets made our wedding dessert table a dream. Every guest asked for their number!"
                author="Fatima & Omar"
                occasion="Wedding"
              />
              <TestimonialCard
                quote="Ordered mini cakes for my daughter's birthday — they were the highlight of the party."
                author="Noor K."
                occasion="Birthday"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-soft-pink/30 via-baby-blue/30 to-cream-dark/60 blur-3xl" />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[Playfair_Display] text-3xl font-bold text-foreground sm:text-5xl">
              Ready to order your dream cake?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Send us a WhatsApp message with your idea, theme, and event date. We'll design something
              deliciously unforgettable.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-soft-pink px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-1 hover:bg-rose-gold hover:shadow-xl"
              >
                <MessageCircle className="h-6 w-6" />
                Order / Customize via WhatsApp
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Based in the UAE • Delivery & pickup available • Custom orders welcome
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-cream-dark/40 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-soft-pink text-soft-pink-foreground">
                <Cake className="h-5 w-5" />
              </span>
              <span className="font-[Playfair_Display] text-xl font-bold text-foreground">
                Moonday Sweets
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Moonday+cakes+%26+Sweets,+Al+Jerf+2+-+Ajman"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <MapPin className="h-4 w-4 text-rose-gold" />
                Visit Us
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-rose-gold" />
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Instagram className="h-4 w-4 text-rose-gold" />
                @moonday.ae
              </a>

            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Moonday Sweets. Handcrafted with love in the UAE.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProductCard({
  image,
  title,
  description,
  badge,
  alt,
}: {
  image: string;
  title: string;
  description: string;
  badge: string;
  alt: string;
}) {
  return (
    <div className="group flex flex-col items-center rounded-3xl border border-border bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative mb-5 h-56 w-56 overflow-hidden rounded-full border-4 border-cream shadow-md transition-transform group-hover:scale-105">
        <img src={image} alt={alt} width={400} height={400} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <span className="mb-2 inline-block rounded-full bg-baby-blue-light px-3 py-1 text-xs font-semibold text-secondary-foreground">
        {badge}
      </span>
      <h3 className="font-[Playfair_Display] text-2xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-rose-gold transition-colors hover:text-foreground"
      >
        Order via WhatsApp
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function OccasionCard({
  image,
  title,
  description,
  cta,
  alt,
}: {
  image: string;
  title: string;
  description: string;
  cta: string;
  alt: string;
}) {
  return (
    <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all hover:shadow-lg sm:flex-row sm:items-start sm:p-8">
      <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-full border-4 border-cream shadow-md">
        <img src={image} alt={alt} width={400} height={400} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
        <h3 className="font-[Playfair_Display] text-2xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-soft-pink px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-rose-gold hover:shadow-md"
        >
          <MessageCircle className="h-4 w-4" />
          {cta}
        </a>
      </div>
    </div>
  );
}

function FlavorCard({
  name,
  note,
  color,
}: {
  name: string;
  note: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-white/70 p-4 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold shadow-sm ${color}`}>
        {name.charAt(0)}
      </span>
      <div>
        <h4 className="font-semibold text-foreground">{name}</h4>
        <p className="text-xs text-muted-foreground">{note}</p>
      </div>
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  occasion,
}: {
  quote: string;
  author: string;
  occasion: string;
}) {
  return (
    <div className="rounded-3xl border border-border bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-rose-gold text-rose-gold" />
        ))}
      </div>
      <p className="font-[Playfair_Display] text-lg italic leading-relaxed text-foreground">“{quote}”</p>
      <div className="mt-5 border-t border-border pt-4">
        <p className="text-sm font-semibold text-foreground">{author}</p>
        <p className="text-xs text-muted-foreground">{occasion}</p>
      </div>
    </div>
  );
}
