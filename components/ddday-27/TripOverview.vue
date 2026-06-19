<template>

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
            <p class="time">Morning | Afternoon</p>
            <p>9:30 AM | 1:30 PM</p>
            <p>Gear, shuttle, helmets, PFDs, paddles, guide and good vibes included.</p>
            <p style="font-weight: bold;">Get yourself to the office and we take over the rest</p>
            <v-btn href="https://book.singenuity.com/338/" class="primary btn" >Reserve Your Raft</v-btn>
        </div>
    </section> 
</template>


<style scoped>
.page {
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
color: #123;
background: #f7efe1;
}
.heroLikeStyle {
min-height: 92vh;
padding: 28px clamp(20px, 5vw, 72px);
color: white;
background:
linear-gradient(90deg, rgba(2, 33, 44, .92), rgba(2, 33, 44, .45)),
url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80")
center/cover;
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