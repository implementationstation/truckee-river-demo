# Navbar System (Nuxt + Vuetify)

## Overview

This navbar is fully driven by a single configuration file:

```
/data/nav.links.ts
```

It supports:

* Standard links
* Dropdown menus
* Mobile responsiveness
* CTA button styling

---

## How to Add a New Link

### Simple Link

```ts
{
  title: 'Blog',
  to: '/blog'
}
```

---

### Dropdown Menu

```ts
{
  title: 'Services',
  children: [
    { title: 'Design', to: '/services/design' },
    { title: 'Development', to: '/services/dev' }
  ]
}
```

---

### CTA Button

```ts
{
  title: 'Get Started',
  to: '/start',
  cta: true
}
```

---

## How It Works

* `nav.links.ts` is imported into the navbar component
* Component automatically:

  * Detects dropdowns (`children`)
  * Applies CTA styles (`cta`)
  * Renders mobile drawer

---

## Design Philosophy

* Minimal logic
* Maximum flexibility
* Vuetify-native (no unnecessary custom components)
* Easily extendable

---

## Extend Ideas (Optional)

* Add `icon` to links
* Add `badge` (e.g. "New")
* Add role-based visibility
* Add external links (`href` support)

---

## Developer Notes

* Avoid hardcoding links in components
* Always update `/data/nav.links.ts`
* Keep structure flat and predictable

---

## TLDR

👉 Edit ONE file → nav updates everywhere
👉 Supports dropdowns + mobile automatically
👉 Clean, scalable, production-ready
