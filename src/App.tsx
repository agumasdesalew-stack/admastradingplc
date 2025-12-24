import { useEffect, useMemo, useState, useRef } from 'react'
import injera1 from './assets/injera1.jpeg'
import injera2 from './assets/injera2.jpeg'
import ginger1 from './assets/ginger1.jpeg'
import peanut2 from './assets/peanut2.jpeg'
import mace1 from './assets/mace.jpeg'
import mitmita from './assets/mitmita.jpeg'
import berbere from './assets/berbere.jpeg'
import admasLogo from './assets/admastrading.jpg'
import Contact from './Contact'

// Animated counter component
function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (hasAnimated.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = Date.now()
          const startValue = 0

          const animate = () => {
            const now = Date.now()
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const current = Math.floor(startValue + (target - startValue) * easeOutQuart)

            setCount(current)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(target)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current)
    }
  }, [target, duration])

  return <span ref={counterRef}>{count.toLocaleString()}+</span>
}

const heroGallery = [
  { src: injera1, alt: 'Fresh Ethiopian Injera ready for export' },
  { src: injera2, alt: 'Packaged Injera with moisture-safe wrapping' },
]

const highlights = [
  { title: 'Farm-to-port traceability', detail: 'Direct sourcing from Ethiopian smallholders with quality seals at every checkpoint.' },
  { title: 'Cold-chain aware logistics', detail: 'Moisture-controlled packaging to protect Injera freshness on long-haul routes.' },
  { title: 'Regulatory-ready', detail: 'Export documents, health certificates, and compliant labeling handled end-to-end.' },
]

const products = [
  {
    name: 'Teff Injera',
    note: 'Traditional sourdough, moisture-protected for export lanes.',
    badge: 'Signature',
    image: injera2,
    ingredients: 'Brown/white teff flour, purified water, natural starter culture, sea salt.',
    expiry: 'Chilled 10–12 days • Frozen up to 6 months.',
    description: 'Stone-milled teff, 48-hour fermentation, vacuum-sealed with moisture liners to keep softness.',
    price: 'FOB Addis, volume-based — request quote.',
  },
  {
    name: 'Berbere Blend',
    note: 'Rich, aromatic heat with depth of color.',
    badge: 'Spice',
    image: berbere,
    ingredients: 'Sun-dried chilies, korarima, besobela, fenugreek, garlic, ginger, Himalayan salt.',
    expiry: 'Best before 12–18 months sealed, cool & dry.',
    description: 'Low-heat roasted, nitrogen-flushed packs to lock aromatics and vivid color.',
    price: 'FOB Addis per kg — volume tiers available.',
  },
  {
    name: 'Mitmita Blend',
    note: 'Fiery chili-forward profile for meats and stews.',
    badge: 'Spice',
    image: mitmita,
    ingredients: 'Bird’s eye chilies, korarima, cardamom, salt, ginger, cloves.',
    expiry: 'Best before 12–18 months sealed, cool & dry.',
    description: 'Fine-milled heat with balanced aromatics, packed in foil-lined sachets.',
    price: 'FOB Addis per kg — volume tiers available.',
  },
  {
    name: 'Ginger (dried)',
    note: 'Aromatic slices, ready for grind or infusion.',
    badge: 'Root',
    image: ginger1,
    ingredients: 'Sun-dried Ethiopian ginger slices.',
    expiry: 'Best before 18–24 months sealed, cool & dry.',
    description: 'Low-moisture content for stable freight; consistent slice size for milling.',
    price: 'FOB Addis per kg — volume tiers available.',
  },
  {
    name: 'Mace (mice)',
    note: 'Floral, bright spice ribbons.',
    badge: 'Spice',
    image: mace1,
    ingredients: 'Sun-dried mace arils.',
    expiry: 'Best before 18–24 months sealed, cool & dry.',
    description: 'Hand-selected arils with uniform color, packed in light-safe pouches.',
    price: 'FOB Addis per kg — volume tiers available.',
  },
  {
    name: 'Peanuts',
    note: 'Whole kernels suited for roasting or pressing.',
    badge: 'Nut',
    image: peanut2,
    ingredients: 'Whole Ethiopian peanuts.',
    expiry: 'Best before 12 months sealed, cool & dry.',
    description: 'Cleaned, graded kernels with moisture control for long-haul shipping.',
    price: 'FOB Addis per MT — volume tiers available.',
  },
]

const services = [
  {
    title: 'Customs & compliance',
    text: 'Health certificates, labeling, and HS code documentation handled for your destination market.',
  },
  {
    title: 'Packaging engineering',
    text: 'Moisture barriers, vacuum sealing, and pallet configs tuned for sea and air lanes.',
  },
  {
    title: 'Freight coordination',
    text: 'Port scheduling, cold-chain options, and vetted forwarders on EU, US, and GCC corridors.',
  },
  {
    title: 'Private label & recipes',
    text: 'White-label Injera and spice blends plus prep guidance to match your brand standards.',
  },
]

const process = [
  { step: '1', title: 'Source', text: 'Partner farms in Oromia and Amhara for premium teff and spice inputs.' },
  { step: '2', title: 'Craft', text: 'Stone-milled teff, slow fermentation, and batch roasting for authentic flavor.' },
  { step: '3', title: 'Protect', text: 'Moisture-safe liners, vacuum sealing, and palletized loads for export.' },
  { step: '4', title: 'Deliver', text: 'Coordinated freight, customs clearance, and cold-chain options to your port.' },
]

const overviewProducts = products.slice(0, 3)

function App() {
  const [isDark, setIsDark] = useState(false)
  const [route, setRoute] = useState(() => window.location.pathname)

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    root.classList.toggle('dark', isDark)
    body.classList.toggle('dark-body', isDark)
    return () => {
      root.classList.remove('dark')
      body.classList.remove('dark-body')
    }
  }, [isDark])

  useEffect(() => {
    const handler = () => setRoute(window.location.pathname)
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [])

  useEffect(() => {
    if (route.startsWith('/products')) document.title = 'Admas Trading | Products'
    else if (route.startsWith('/contact')) document.title = 'Admas Trading | Contact'
    else document.title = 'Admas Trading | Home'
  }, [route])

  const fullProductsGrid = useMemo(
    () => (
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product, idx) => (
          <div
            key={`all-${product.name}`}
            className={`surface group relative overflow-hidden rounded-2xl border shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl animate-slide-up ${
              isDark
                ? 'border-slate-800 bg-slate-900 shadow-amber-500/20 hover:shadow-amber-500/40'
                : 'border-slate-200 bg-white shadow-amber-300/40 hover:shadow-amber-400/60'
            }`}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="relative h-44 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute left-3 top-3 flex gap-2">
                <span className="rounded-full bg-amber-400/80 px-3 py-1 text-[11px] font-semibold text-slate-950 shadow">
                  {product.badge}
                </span>
                <span className="rounded-full border border-white/60 bg-black/70 px-3 py-1 text-[11px] font-semibold text-amber-50">
                  {product.price}
                </span>
              </div>
              <p className="absolute bottom-3 left-3 text-sm font-semibold text-white drop-shadow">
                {product.name}
              </p>
            </div>

            <div className="space-y-3 px-5 py-4">
              <p className={`text-sm ${isDark ? 'text-slate-200/85' : 'text-slate-700'}`}>{product.note}</p>
              <div
                className={`space-y-2 rounded-xl border p-3 text-xs ${
                  isDark ? 'border-slate-800 bg-slate-900 text-slate-200/85' : 'border-slate-200 bg-slate-50 text-slate-700'
                }`}
              >
                <div>
                  <span className={`font-semibold ${isDark ? 'text-amber-200' : 'text-amber-700'}`}>Ingredients: </span>
                  {product.ingredients}
                </div>
                <div>
                  <span className={`font-semibold ${isDark ? 'text-amber-200' : 'text-amber-700'}`}>Shelf life: </span>
                  {product.expiry}
                </div>
                <div>
                  <span className={`font-semibold ${isDark ? 'text-amber-200' : 'text-amber-700'}`}>Details: </span>
                  {product.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    [isDark],
  )

  if (route.startsWith('/products')) {
    return (
      <div
        className={`min-h-screen ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}
      >
        <div
          className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/30' : 'bg-gradient-to-br from-amber-200/40 via-cyan-100/25 to-indigo-100/25'}`}
        />
        <header
          className={`relative border-b backdrop-blur shadow-sm ${
            isDark ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-white/80'
          }`}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 responsive-padding">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-transparent text-slate-950 font-semibold shadow-none">
                <img src={admasLogo} alt="Admas Trading" className="h-full w-full object-cover rounded-2xl" />
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight">Admas Trading</p>
                <p className={`text-sm ${isDark ? 'text-slate-200/80' : 'text-slate-500'}`}>
                  Exporting Ethiopian excellence
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Toggle dark mode"
                    onClick={() => setIsDark((prev) => !prev)}
                    className={`btn-green flex h-10 w-10 items-center justify-center rounded-full border bg-white text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-700 ${
                  isDark ? 'border-slate-700 bg-slate-800 text-amber-100' : 'border-slate-200'
                }`}
              >
                {isDark ? '🌞' : '🌓'}
              </button>
              <a
                    href="/"
                    className={`btn-green rounded-full border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-amber-300 ${
                  isDark ? 'border-slate-700 text-slate-100 hover:text-amber-200' : 'border-slate-200 text-slate-900 hover:text-amber-700'
                }`}
              >
                Back to home
              </a>
            </div>
          </div>
        </header>

        <main className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 space-y-10 responsive-padding">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Products</p>
              <h1 className={`mt-2 text-3xl font-semibold ${isDark ? 'text-slate-50' : 'text-slate-900'}`}>
                All products
              </h1>
            </div>
            <p className={`text-sm max-w-xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Full export catalog with ingredients, shelf life, and detailed notes for each item.
            </p>
          </div>

          {fullProductsGrid}
        </main>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/30' : 'bg-gradient-to-br from-amber-200/40 via-cyan-100/25 to-indigo-100/25'}`}
      />

      <header
        className={`relative border-b backdrop-blur shadow-sm ${
          isDark ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-white/80'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 responsive-padding">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-transparent text-slate-950 font-semibold shadow-none">
              <img src={admasLogo} alt="Admas Trading" className="h-full w-full object-cover rounded-2xl" />
            </div>
      <div>
              <p className="text-lg font-semibold tracking-tight">Admas Trading</p>
              <p className={`text-sm ${isDark ? 'text-slate-200/80' : 'text-slate-500'}`}>
                Exporting Ethiopian excellence
              </p>
            </div>
          </div>

          {/* nav removed from here and added to the right-side actions so links appear aligned to the right */}

          <div className="flex items-center gap-3">
            <nav className="hidden sm:flex items-center gap-3">
              <a
                href="#products-overview"
                className={`btn-green rounded-full border px-3 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-amber-300 ${
                  isDark ? 'border-slate-700 text-slate-100 hover:text-amber-200' : 'border-slate-200 text-slate-900 hover:text-amber-600'
                }`}
              >
                Products
              </a>
              <a
                href="#services"
                className={`btn-green rounded-full border px-3 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-amber-300 ${
                  isDark ? 'border-slate-700 text-slate-100 hover:text-amber-200' : 'border-slate-200 text-slate-900 hover:text-amber-600'
                }`}
              >
                Services
              </a>
              <a
                href="/contact"
                className={`btn-green rounded-full border px-3 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-amber-300 ${
                  isDark ? 'border-slate-700 text-slate-100 hover:text-amber-200' : 'border-slate-200 text-slate-900 hover:text-amber-600'
                }`}
              >
                Contact
              </a>
            </nav>
            <button
              type="button"
              aria-label="Toggle dark mode"
                onClick={() => setIsDark((prev) => !prev)}
                className={`btn-green flex h-10 w-10 items-center justify-center rounded-full border bg-white text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-700 ${
                isDark ? 'border-slate-700 bg-slate-800 text-amber-100' : 'border-slate-200'
              }`}
            >
              {isDark ? '🌞' : '🌓'}
            </button>
            <a
              href="mailto:export@admastrading.com"
              className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Talk to export desk
            </a>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 space-y-16">
        {route.startsWith('/contact') ? (
          <Contact />
        ) : (
          <>
            <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs animate-slide-in-left ${
                isDark
                  ? 'border-amber-300/40 bg-amber-200/20 text-amber-100'
                  : 'border-amber-200 bg-amber-50 text-amber-700'
              } surface`}
            >
              Ethiopian Injera • House spices • Global export
            </div>
            <h1
              className={`text-4xl font-semibold leading-tight sm:text-5xl animate-slide-in-left ${
                isDark ? 'text-slate-50' : 'text-slate-900'
              }`}
              style={{ animationDelay: '100ms' }}
            >
              Fresh Injera and house-made spices, delivered reliably to your market.
            </h1>
            <p
              className={`text-lg animate-slide-in-left ${isDark ? 'text-slate-200/90' : 'text-slate-700'}`}
              style={{ animationDelay: '200ms' }}
            >
              Admas Trading sources teff and spice inputs directly from trusted Ethiopian farms,
              crafts authentic products in-house, and manages compliant export logistics so you can
              stock shelves or supply kitchens with confidence.
            </p>
            <div className="flex flex-wrap gap-3 hero-actions">
              <a
                href="mailto:export@admastrading.com?subject=Admas%20Trading%20Inquiry"
                className="rounded-lg bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Request a quote
              </a>
              <a
                href="tel:+251900000000"
                className={`rounded-lg border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-amber-300 ${
                  isDark
                    ? 'border-slate-600 text-slate-100 hover:text-amber-200'
                    : 'border-slate-300 text-slate-900 hover:text-amber-700'
                }`}
              >
                Call export team
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item, idx) => (
                <div
                  key={item.title}
                  className={`surface rounded-2xl border p-4 golden-shadow animate-slide-up ${
                    isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
                  }`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <p className={`text-sm font-semibold ${isDark ? 'text-amber-200' : 'text-amber-700'}`}>
                    {item.title}
                  </p>
                  <p className={`mt-2 text-sm ${isDark ? 'text-slate-200/80' : 'text-slate-600'}`}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 hero-grid">
              {heroGallery.map((image, idx) => (
                <div
                  key={image.alt}
                  className={`surface relative overflow-hidden rounded-[18px] border shadow-xl golden-shadow animate-slide-in-right transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
                  }`}
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  <img src={image.src} alt={image.alt} className="h-64 w-full object-cover" />
                  <p className="absolute bottom-3 left-3 text-sm font-semibold text-white drop-shadow">
                    {image.alt}
                  </p>
                </div>
              ))}
            </div>

            <div
              className={`surface relative overflow-hidden rounded-[24px] border shadow-2xl golden-shadow-lg animate-slide-in-right ${
                isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
              }`}
              style={{ animationDelay: '200ms' }}
            >
              <div
                className={`flex items-center justify-between border-b px-5 py-4 ${
                  isDark ? 'border-slate-800' : 'border-slate-200'
                }`}
              >
                <div className={`text-sm font-semibold ${isDark ? 'text-slate-50' : 'text-slate-900'}`}>
                  Export readiness
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    isDark ? 'bg-emerald-500/20 text-emerald-100' : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  On schedule
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>Weekly capacity</p>
                    <p className={`text-2xl font-semibold ${isDark ? 'text-slate-50' : 'text-slate-900'}`}>
                      <AnimatedCounter target={18000} /> packs
                    </p>
                  </div>
                  <div
                    className={`rounded-xl px-4 py-2 text-sm font-semibold ${
                      isDark ? 'bg-amber-500/20 text-amber-100' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    Injera & spices
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: 'Transit stability', value: 'Moisture-controlled' },
                    { label: 'Docs', value: 'Health & customs ready' },
                    { label: 'Routes', value: 'EU • US • GCC' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-xl border p-3 ${
                        isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
                      }`}
                    >
                      <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>{item.label}</p>
                      <p className={`text-lg font-semibold ${isDark ? 'text-slate-50' : 'text-slate-900'}`}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products-overview" className="space-y-6 scroll-mt-24">
          <div className="flex items-center justify-between gap-4 flex-wrap animate-slide-in-left">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Products</p>
              <h2 className={`mt-2 text-2xl font-semibold ${isDark ? 'text-slate-50' : 'text-slate-900'}`}>
                Overview (top 3)
              </h2>
            </div>
            <p className={`text-sm max-w-xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Snapshot of our leading lines. Explore all products for full details and options.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {overviewProducts.map((product, idx) => (
              <div
                key={product.name}
                className={`surface group relative overflow-hidden rounded-2xl border shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${
                  isDark
                    ? 'border-slate-800 bg-slate-900 shadow-amber-500/20 hover:shadow-amber-500/40'
                    : 'border-slate-200 bg-white shadow-amber-300/40 hover:shadow-amber-400/60'
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute left-3 top-3 flex gap-2">
                    <span className="rounded-full bg-amber-400/80 px-3 py-1 text-[11px] font-semibold text-slate-950 shadow">
                      {product.badge}
                    </span>
                    <span className="rounded-full border border-white/60 bg-black/70 px-3 py-1 text-[11px] font-semibold text-amber-50">
                      {product.price}
                    </span>
                  </div>
                  <p className="absolute bottom-3 left-3 text-sm font-semibold text-white drop-shadow">
                    {product.name}
                  </p>
                </div>

                <div className="space-y-3 px-5 py-4">
                  <p className={`text-sm ${isDark ? 'text-slate-200/85' : 'text-slate-700'}`}>{product.note}</p>
                  <div
                    className={`space-y-2 rounded-xl border p-3 text-xs ${
                      isDark ? 'border-slate-800 bg-slate-900 text-slate-200/85' : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div>
                      <span className={`font-semibold ${isDark ? 'text-amber-200' : 'text-amber-700'}`}>Ingredients: </span>
                      {product.ingredients}
                    </div>
                    <div>
                      <span className={`font-semibold ${isDark ? 'text-amber-200' : 'text-amber-700'}`}>Shelf life: </span>
                      {product.expiry}
                    </div>
                    <div>
                      <span className={`font-semibold ${isDark ? 'text-amber-200' : 'text-amber-700'}`}>Details: </span>
                      {product.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a
                href="/products"
                className="btn-green rounded-full border border-amber-300/60 bg-amber-400/90 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Show all products
            </a>
          </div>
        </section>

        <section id="services" className="space-y-6 scroll-mt-24">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Services</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">What we offer</h2>
            </div>
            <p className={`text-sm max-w-xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Export support from paperwork to packaging, tailored to your route, volume, and brand needs.
        </p>
      </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={`surface rounded-2xl border p-5 golden-shadow animate-slide-up transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                  isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <p className={`text-sm font-semibold ${isDark ? 'text-amber-200' : 'text-amber-700'}`}>
                  {service.title}
                </p>
                <p className={`mt-2 text-sm ${isDark ? 'text-slate-200/85' : 'text-slate-700'}`}>{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1.1fr] items-start">
          <div
            className={`surface rounded-2xl border p-6 golden-shadow-lg animate-slide-in-left ${
              isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
            }`}
            style={{ animationDelay: '100ms' }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Logistics</p>
            <h2 className={`mt-2 text-2xl font-semibold ${isDark ? 'text-slate-50' : 'text-slate-900'}`}>
              Markets we serve
            </h2>
            <p className={`mt-3 text-sm ${isDark ? 'text-slate-200/80' : 'text-slate-700'}`}>
              Established freight and customs partners for high-demand corridors.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                { region: 'Europe', ports: 'Rotterdam, Hamburg, Antwerp' },
                { region: 'North America', ports: 'New York / NJ, Houston' },
                { region: 'Middle East', ports: 'Jebel Ali, Doha, Jeddah' },
              ].map((route) => (
                <div
                  key={route.region}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
                    isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div>
                    <p className={`text-sm font-semibold ${isDark ? 'text-slate-50' : 'text-slate-900'}`}>
                      {route.region}
                    </p>
                    <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{route.ports}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      isDark ? 'bg-emerald-500/20 text-emerald-100' : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`surface rounded-2xl border p-6 golden-shadow-lg animate-slide-in-right ${
              isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
            }`}
            style={{ animationDelay: '200ms' }}
          >
            <div className="flex items-center gap-2">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">How we work</p>
            </div>
            <h2 className={`mt-2 text-2xl font-semibold ${isDark ? 'text-slate-50' : 'text-slate-900'}`}>
              From farm to your port
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {process.map((item, idx) => (
                <div
                  key={item.step}
                  className={`flex gap-3 rounded-xl border p-4 golden-shadow animate-slide-up transition-all duration-300 hover:scale-105 ${
                    isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-50'
                  }`}
                  style={{ animationDelay: `${300 + idx * 100}ms` }}
                >
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${
                      isDark ? 'bg-amber-500/25 text-amber-100' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {item.step}
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${isDark ? 'text-slate-50' : 'text-slate-900'}`}>
                      {item.title}
                    </p>
                    <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`rounded-2xl border p-6 golden-shadow-lg animate-fade-in ${
            isDark
              ? 'border-slate-800 bg-gradient-to-r from-slate-900/60 via-slate-800/60 to-slate-900/60'
              : 'border-amber-100 bg-gradient-to-r from-amber-200/60 via-amber-100/50 to-cyan-100/50'
          }`}
          style={{ animationDelay: '400ms' }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-900">Let’s export</p>
              <h3 className={`mt-1 text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-slate-950'}`}>
                Tell us your lane, volume, and timeline — we’ll prepare samples and routing.
              </h3>
              <p className={`text-sm ${isDark ? 'text-slate-200/80' : 'text-slate-800'}`}>
                export@admastrading.com • +251 900 000 000
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:export@admastrading.com"
                className={`btn-green rounded-lg px-5 py-3 text-sm font-semibold shadow-lg transition hover:-translate-y-0.5 hover:text-white ${
                  isDark ? 'bg-slate-800 text-amber-200 shadow-slate-900/50' : 'bg-slate-900 text-amber-200 shadow-amber-500/30'
                }`}
              >
                Email export desk
              </a>
              <a
                href="https://www.google.com/maps/place/Addis+Ababa,+Ethiopia"
                target="_blank"
                rel="noreferrer"
                className={`btn-green rounded-lg border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
                  isDark
                    ? 'border-slate-700 text-slate-100 hover:border-amber-300'
                    : 'border-slate-300 text-slate-900 hover:border-slate-900'
                }`}
              >
                View origin hub
              </a>
            </div>
          </div>
            </section>
          </>
        )}
      </main>

      <footer
        className={`relative border-t py-12 ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}
      >
        <div
          className={`mx-auto flex max-w-6xl flex-wrap items-start justify-start gap-3 px-4 text-sm ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          <span>© {new Date().getFullYear()} Admas Trading — Addis Ababa, Ethiopia.</span>
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-start gap-2">
              <span>Fresh Injera • House spices • Reliable export logistics.</span>
              <div className="flex items-center gap-2">
                <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2 rounded-full transition hover:bg-slate-100/40">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.89h-2.3v6.99C18.34 21.12 22 16.99 22 12z" />
                  </svg>
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-full transition hover:bg-slate-100/40">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 7.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.8 6.2h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok" className="p-2 rounded-full transition hover:bg-slate-100/40">
                  <svg className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 7.5c.5 0 .98.06 1.44.18v3.22a4.5 4.5 0 11-4.5-4.5V7.5h3.06z" />
                  </svg>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full transition hover:bg-slate-100/40">
                  <svg className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm4.5 14H6V9h2.5v8zM8.25 7.44a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88zM18 17.5h-2.5v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4H9V9h2.5v1.5c.69-1.04 2.12-1.5 3.5-1.5 2.21 0 4 1.79 4 4v4z" />
                  </svg>
                </a>
                <a href="https://telegram.org/" target="_blank" rel="noreferrer" aria-label="Telegram" className="p-2 rounded-full transition hover:bg-slate-100/40">
                  <svg className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13l-3 1 1-3 11-9zM3 21l4-2 9-9 5-3-7 12-8 3-3 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
