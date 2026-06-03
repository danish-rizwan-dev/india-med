# India Med Service Website

A multilingual medical tourism website built with Next.js. The project showcases doctor profiles, speciality pages, patient support workflows, and localized marketing content for international audiences.

## What this project does

- Presents a localized healthcare brand experience for India Med Service
- Provides searchable doctor profiles with detailed medical specialty, experience, and hospital data
- Supports medical speciality landing pages, related doctors, and hospital references
- Renders all pages in English, Russian, Kazakh, and Uzbek using `next-intl`
- Uses data-driven components for doctors and specialities rather than a traditional backend

## Tech Stack

- Next.js 16.1.6 with App Router
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
- next-intl 4.11.2 for localization
- lucide-react for icons
- embla-carousel-react for carousel support

## Project Structure

- `app/[locale]/layout.tsx` — locale-aware layout, metadata, language provider, and global shell
- `app/[locale]/page.tsx` — localized homepage with hero, services, specialities, network, and FAQ sections
- `app/[locale]/speciality/page.tsx` — speciality overview page with translated titles and routes
- `app/[locale]/doctors/[slug]/page.tsx` — individual doctor profile pages
- `components/layout/` — navbar, footer, JSON-LD, language switcher, shared backgrounds
- `components/homepage/` — homepage sections and landing page content
- `components/doctors/` — doctor directory, profile view, and data model
- `components/speciality/` — speciality templates, FAQ, custom sections, and data
- `messages/` — locale translation JSON files for `en`, `ru`, `kk`, and `uz`
- `i18n/` — routing, request config, and navigation wrappers for `next-intl`
- `public/images/` — section artwork, doctor photos, icons, and static media

## Localization

This app is fully localized using `next-intl`.

- Supported locales: `en`, `ru`, `kk`, `uz`
- Default locale: `en`
- Translation bundles stored in `messages/*.json`
- Locale-aware navigation and metadata are configured in `i18n/routing.ts` and `app/[locale]/layout.tsx`
- `next.config.ts` is wrapped by `next-intl/plugin` configured with `./i18n/request.ts`

## Data and Content

- Doctor data is maintained in `components/doctors/data.ts`
- Speciality data is defined in `components/speciality/data/*.ts`
- Translations are separated from page logic and loaded per locale
- Homepage sections are lazy-loaded with `dynamic()` to improve initial performance

## Routing and SEO

- Locale-aware routing is built on `next-intl/navigation`
- `createNavigation` wrappers expose `Link`, `redirect`, `usePathname`, and `useRouter`
- `app/[locale]/layout.tsx` generates metadata using localized `Metadata` translations
- `next.config.ts` defines redirects, cache-control headers, and static asset caching rules

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

### Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` and use locale-specific routes such as:

- `/en`
- `/ru`
- `/kk`
- `/uz`

### Production

```bash
npm run build
npm run start
```

## Deployment

This site is suitable for Vercel or any Node-compatible host that supports Next.js.

- Recommended: Vercel for App Router support and automatic static optimization
- Build with `npm run build`
- Start with `npm run start`

## Notes for Contributors

- Keep translation keys in sync across all locale JSON files to avoid missing message errors
- Add new doctors to `components/doctors/data.ts` and update translations in `messages/*.json`
- Use `setRequestLocale(locale)` in server pages to ensure correct locale data loading
- Keep reusable UI components in `components/layout/` and feature sections under `components/homepage/` or `components/speciality/`

## Important Files

- `messages/en.json`, `messages/ru.json`, `messages/kk.json`, `messages/uz.json`
- `components/doctors/DoctorProfile.tsx`
- `components/doctors/DoctorsDirectory.tsx`
- `components/speciality/SpecialityTemplate.tsx`
- `app/[locale]/layout.tsx`
- `app/[locale]/page.tsx`
- `next.config.ts`
- `i18n/request.ts`
- `i18n/routing.ts`

## About the App

The project is a content-first marketing site for international patients exploring healthcare in India. It emphasizes:

- high-quality doctor profiles
- translated medical specialities
- localized patient journeys
- hospital and treatment information

The codebase is designed for content-driven pages rather than a full backend API. Doctor and speciality listings are maintained as static data files, and translations are handled through locale JSON bundles.

---

If you want, I can also create a shorter `CONTRIBUTING.md` or add architecture diagrams for the component and translation flow.
