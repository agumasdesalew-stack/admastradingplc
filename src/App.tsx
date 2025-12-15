import { useEffect, useState } from 'react'
import injera1 from './assets/injera1.jpeg'
import injera2 from './assets/injera2.jpeg'
import ginger1 from './assets/ginger1.jpeg'
import peanut2 from './assets/peanut2.jpeg'
import mace1 from './assets/mace.jpeg'
import mitmita from './assets/mitmita.jpeg'
import berbere from './assets/berbere.jpeg'

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
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-300 text-slate-950 font-semibold shadow-lg shadow-amber-500/30">
              AT
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Admas Trading</p>
              <p className={`text-sm ${isDark ? 'text-slate-200/80' : 'text-slate-500'}`}>
                Exporting Ethiopian excellence
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-3">
            <a
              href="#products"
              className={`rounded-full border px-3 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-amber-300 ${
                isDark ? 'border-slate-700 text-slate-100 hover:text-amber-200' : 'border-slate-200 text-slate-900 hover:text-amber-600'
              }`}
            >
              Products
            </a>
            <a
              href="#services"
              className={`rounded-full border px-3 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-amber-300 ${
                isDark ? 'border-slate-700 text-slate-100 hover:text-amber-200' : 'border-slate-200 text-slate-900 hover:text-amber-600'
              }`}
            >
              Services
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={() => setIsDark((prev) => !prev)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border bg-white text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-700 ${
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
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${
                isDark
                  ? 'border-amber-300/40 bg-amber-200/20 text-amber-100'
                  : 'border-amber-200 bg-amber-50 text-amber-700'
              } surface`}
            >
              Ethiopian Injera • House spices • Global export
            </div>
            <h1
              className={`text-4xl font-semibold leading-tight sm:text-5xl ${
                isDark ? 'text-slate-50' : 'text-slate-900'
              }`}
            >
              Fresh Injera and house-made spices, delivered reliably to your market.
            </h1>
            <p className={`text-lg ${isDark ? 'text-slate-200/90' : 'text-slate-700'}`}>
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
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className={`surface rounded-2xl border p-4 shadow-lg shadow-amber-100/60 ${
                    isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
                  }`}
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
              {heroGallery.map((image) => (
                <div
                  key={image.alt}
                  className={`surface relative overflow-hidden rounded-[18px] border shadow-xl ${
                    isDark ? 'border-slate-800 bg-slate-900 shadow-slate-900/40' : 'border-slate-200 bg-white shadow-amber-100/70'
                  }`}
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
              className={`surface relative overflow-hidden rounded-[24px] border shadow-2xl ${
                isDark ? 'border-slate-800 bg-slate-900 shadow-slate-900/40' : 'border-slate-200 bg-white shadow-amber-100/70'
              }`}
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
                    <p className={`text-2xl font-semibold ${isDark ? 'text-slate-50' : 'text-slate-900'}`}>18,000+ packs</p>
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
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Products</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Overview (top 3)</h2>
            </div>
            <p className={`text-sm max-w-xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Snapshot of our leading lines. Explore all products for full details and options.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {overviewProducts.map((product) => (
              <div
                key={product.name}
                className={`surface group relative overflow-hidden rounded-2xl border shadow-lg ${
                  isDark ? 'border-slate-800 bg-slate-900 shadow-slate-900/40' : 'border-slate-200 bg-white shadow-amber-100/60'
                }`}
              >
                <div className="relative h-44 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-90 transition group-hover:opacity-100" />
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
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
              href="#products"
              className="rounded-full border border-amber-300/60 bg-amber-400/90 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Show all products
            </a>
          </div>
        </section>

        <section id="products" className="space-y-6 scroll-mt-24">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Products</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">All products</h2>
            </div>
            <p className={`text-sm max-w-xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Full export catalog with ingredients, shelf life, and detailed notes for each item.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={`all-${product.name}`}
                className={`surface group relative overflow-hidden rounded-2xl border shadow-lg ${
                  isDark ? 'border-slate-800 bg-slate-900 shadow-slate-900/40' : 'border-slate-200 bg-white shadow-amber-100/60'
                }`}
              >
                <div className="relative h-44 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-90 transition group-hover:opacity-100" />
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
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
            {services.map((service) => (
              <div
                key={service.title}
                className={`surface rounded-2xl border p-5 shadow-lg ${
                  isDark ? 'border-slate-800 bg-slate-900 shadow-slate-900/40' : 'border-slate-200 bg-white shadow-amber-100/50'
                }`}
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
          <div className="surface rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-amber-100/50">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Logistics</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Markets we serve</h2>
            <p className="mt-3 text-sm text-slate-700">
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
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{route.region}</p>
                    <p className="text-xs text-slate-600">{route.ports}</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-amber-100/50">
            <div className="flex items-center gap-2">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">How we work</p>
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">From farm to your port</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {process.map((item) => (
                <div key={item.step} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-800">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-100 bg-gradient-to-r from-amber-200/60 via-amber-100/50 to-cyan-100/50 p-6 shadow-xl shadow-amber-200/50">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-900">Let’s export</p>
              <h3 className="mt-1 text-xl font-semibold text-slate-950">
                Tell us your lane, volume, and timeline — we’ll prepare samples and routing.
              </h3>
              <p className="text-sm text-slate-800">
                export@admastrading.com • +251 900 000 000
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:export@admastrading.com"
                className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-amber-200 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5 hover:text-white"
              >
                Email export desk
              </a>
              <a
                href="https://www.google.com/maps/place/Addis+Ababa,+Ethiopia"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-900"
              >
                View origin hub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-slate-200 bg-white py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 text-sm text-slate-600">
          <span>© {new Date().getFullYear()} Admas Trading — Addis Ababa, Ethiopia.</span>
          <span>Fresh Injera • House spices • Reliable export logistics.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
