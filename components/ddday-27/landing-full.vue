<!-- pages/index.vue -->
<template>
<main class="page">
<section class="hero">
<nav class="nav">
<strong>IRIE Rafting Co.</strong>
<a href="#book">Book Now</a>
</nav>

<div class="heroContent">
<p class="eyebrow">Truckee / Lake Tahoe • River Rafting Sessions</p>
<h1>Two daily whitewater runs. One unforgettable California river day.</h1>
<p class="lede">
Guided half-day rafting through the Truckee River Gorge —
scenic canyon water, splashy rapids, and expert guides from put-in to take-out.
</p>

<div class="actions">
<a class="btn primary" href="#book">Book your Spots</a>
<a class="btn ghost" href="#trip">Trip Details?</a>
</div>

<div class="stats">
<span><b>2x</b> daily trips</span>
<span><b>3.5 hr</b> round trip</span>
<span><b>Age 5+</b> family friendly | appropriate for beginners </span>
</div>
</div>
</section>

<section id="trip" class="section trip">
<div>
<p class="eyebrow">The signature run</p>
<h2>Truckee River “Boca Run”</h2>
<p>
Start mellow, build confidence, then charge into the good stuff.
This half-day guided trip rolls through beautiful canyon scenery before finishing
with exciting Class III rapids.
</p>
</div>

<div class="card">
<h3>Daily Departures</h3>
<p class="time">Morning + Afternoon</p>
<p>Gear, shuttle, helmets, PFDs, paddles, and guide included.</p>
</div>
</section> 

<section class="section grid">
<article>
<h3>First-timer approved</h3>
<p>No experience needed. Your guide handles safety, steering, and river know-how.</p>
</article>
<article>
<h3>Close to Tahoe</h3>
<p>A must-do summer adventure near Truckee and North Lake Tahoe.</p>
</article>
<article>
<h3>No hidden gear fees</h3>
<p>Simple pricing, clear expectations, and maximum splash-per-dollar.</p>
</article>
</section>

<section id="book" class="booking">
<p class="eyebrow">Ready to get wet?</p>
<h2>Choose your launch. We’ll bring the river.</h2>
<p>Adult trips from $120 • Youth from $100</p>
<a class="btn primary" href="https://raftirie.com/" target="_blank" rel="noopener">
Book Your Trip
</a>
</section> 
</main>
</template>

<script>
export default {
name: 'LandingFull'
}
</script>

<style scoped>
.page {
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
color: #123;
background: #f7efe1;
}

.hero {
min-height: 92vh;
padding: 28px clamp(20px, 5vw, 72px);
color: white;
background:
linear-gradient(90deg, rgba(2, 33, 44, .92), rgba(2, 33, 44, .45)),
url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80")
center/cover;
} 

.nav {
display: flex;
justify-content: space-between;
align-items: center;
}

.nav a {
color: white;
text-decoration: none;
font-weight: 800;
}

.heroContent {
max-width: 760px;
margin-top: 18vh;
}

.eyebrow {
margin: 0 0 12px;
color: #ffb84d;
font-weight: 900;
letter-spacing: .12em;
text-transform: uppercase;
}

h1, h2, h3 {
margin: 0;
line-height: .95;
}

h1 {
font-size: clamp(48px, 8vw, 104px);
letter-spacing: -0.07em;
}

h2 {
font-size: clamp(36px, 5vw, 68px);
letter-spacing: -0.05em;
}

.lede {
max-width: 610px;
margin: 24px 0;
font-size: clamp(18px, 2vw, 23px);
line-height: 1.45;
}

.actions, .stats {
display: flex;
flex-wrap: wrap;
gap: 14px;
}

.btn {
display: inline-flex;
padding: 15px 22px;
border-radius: 999px;
font-weight: 900;
text-decoration: none;
}

.primary {
color: #082833;
background: #ffb84d;
}

.ghost {
color: white;
border: 2px solid rgba(255,255,255,.7);
}

.stats {
margin-top: 32px;
}

.stats span {
padding: 14px 18px;
border-radius: 18px;
background: rgba(255,255,255,.14);
backdrop-filter: blur(10px);
}

.section {
padding: 88px clamp(20px, 5vw, 72px);
}

.trip {
display: grid;
grid-template-columns: 1.5fr .8fr;
gap: 32px;
align-items: center;
background: #fff8ec;
}

.trip p, .grid p, .booking p {
font-size: 18px;
line-height: 1.6;
}

.card, .grid article {
padding: 30px;
border-radius: 28px;
background: white;
box-shadow: 0 18px 50px rgba(20, 40, 50, .12);
}

.time {
font-size: 30px !important;
font-weight: 950;
}

.grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 22px;
}

.booking {
padding: 100px 20px;
text-align: center;
color: white;
background: #07303d;
}

.booking .btn {
margin-top: 18px;
}

@media (max-width: 800px) {
.trip, .grid {
grid-template-columns: 1fr;
}

.heroContent {
margin-top: 14vh;
} 
}
</style>



