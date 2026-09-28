<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F766E,100:14B8A6&height=140&section=header" width="100%" />

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=24&duration=3000&pause=900&color=14B8A6&center=true&vCenter=true&width=900&height=60&lines=Hey%2C+I'm+Safyan+%F0%9F%91%8B;Full-Stack+Engineer+%C2%B7+6%2B+years+in+production;TypeScript+%C2%B7+Node.js+%C2%B7+GraphQL+%C2%B7+React;Building+AI+into+real-world+SaaS+%F0%9F%A4%96" alt="Typing SVG" />

**I engineer multi-tenant SaaS for the security & workforce industry.**
Real-time systems · GraphQL APIs · MongoDB pipelines · payroll-grade data modelling

<a href="https://linkedin.com/in/sjmehar46/"><img src="https://img.shields.io/badge/LinkedIn-14B8A6?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="mailto:msafyan46@gmail.com"><img src="https://img.shields.io/badge/Email-0F766E?style=for-the-badge&logo=gmail&logoColor=white" /></a>
<a href="https://wfc360.com"><img src="https://img.shields.io/badge/WFC360-115E59?style=for-the-badge&logo=googlechrome&logoColor=white" /></a>
<img src="https://komarev.com/ghpvc/?username=Safyan82&style=for-the-badge&color=14B8A6&label=PROFILE+VIEWS" />

</div>

---

## `$ whoami`

```ts
const safyan = {
  role:        "Full-Stack Engineer",
  location:    "🇬🇧 United Kingdom",
  experience:  "6+ years shipping to production",
  education:   "MSc Computing — Staffordshire University",
  building:    "WFC360 — multi-tenant workforce & security SaaS",
  core:        ["TypeScript", "Node.js", "GraphQL", "Apollo", "React", "React Native", "MongoDB"],
  levellingUp: ["LLMs", "RAG", "LangGraph", "Vercel AI SDK", "AI evals"],
  philosophy:  "Deterministic first. LLM only where it earns its cost.",
};
```

---

## 🏢 Engineering WFC360

> A multi-tenant SaaS that runs scheduling, payroll, patrols, key control and live operations for UK security companies.
> Every feature below ships to real guards, real sites and real payroll runs.

### 🗓️ Scheduling that can't double-book a guard
- Two-layer shift validation — advisory checks in the UI, **authoritative re-verification on the server**
- Enforces rolling-window rules like **rest periods and daily-hour limits** that no single atomic DB write can guarantee
- Refactored the scheduling assistant's MongoDB aggregations into **one source of truth** for employee filtering

### 💷 Payroll you can audit years later
- **Effective-dated pay rates** with a multi-level override chain: *employee → site → site group → customer*
- **Append-only rate history** mapped to duty dates, so historic payroll never silently changes
- One-click **Xero / QuickBooks** exports with automated invoice generation

### 🔴 Live operations in real time
- **Socket.IO subscriptions driven by MongoDB change streams** for mobile patrol tasks and dashboards
- **Mobile Response Services**: 7-step task wizard, template-based recurrence, anchor-time checkpoint scheduling
- **Web push** via service workers with action buttons, plus cross-subdomain auth (CORS + cookies)

### 🔑 Key Management System — built end to end
- GraphQL schema, **multi-collection aggregation pipelines**, custodian tracking, transaction history and audit workflows
- Supplier-facing audit emails with one-time-use links
- Hit MongoDB's **16 MB BSON limit** from embedded base64 images and re-architected the image storage to fix it

### 📉 Performance wins
- **97% smaller PDF reports** — rebuilt generation with Puppeteer + Sharp + Ghostscript behind a concurrency queue
- Tracked down stale-data bugs in **Apollo cache `fetchPolicy`** across the platform

### 🤖 Now: AI inside a compliance-critical product
- Building **AI features into WFC360** where a hallucinated answer carries real liability
- Focus on **grounding, hallucination checks and eval pipelines**, not just calling an API

`Node.js` `GraphQL` `Apollo` `React` `Ant Design` `MongoDB` `Socket.IO` `AWS` `Puppeteer`

---

## 🛠️ Stack

<p align="center">
  <b>Languages</b><br/>
  <img src="https://skillicons.dev/icons?i=ts,js,python,html,css&theme=dark" />
  <br/><br/>
  <b>Frontend & Mobile</b><br/>
  <img src="https://skillicons.dev/icons?i=react,redux,tailwind,materialui,vite&theme=dark" />
  <br/><br/>
  <b>Backend & APIs</b><br/>
  <img src="https://skillicons.dev/icons?i=nodejs,express,graphql,apollo,supabase&theme=dark" />
  <br/><br/>
  <b>Data</b><br/>
  <img src="https://skillicons.dev/icons?i=mongodb,postgres,mysql,redis,sqlite&theme=dark" />
  <br/><br/>
  <b>Cloud & DevOps</b><br/>
  <img src="https://skillicons.dev/icons?i=aws,docker,nginx,linux,githubactions&theme=dark" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-0F766E?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Expo-0F766E?style=flat-square&logo=expo&logoColor=white" />
  <img src="https://img.shields.io/badge/Ant_Design-0F766E?style=flat-square&logo=antdesign&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.IO-0F766E?style=flat-square&logo=socketdotio&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenAI-0F766E?style=flat-square&logo=openai&logoColor=white" />
  <img src="https://img.shields.io/badge/LangChain-0F766E?style=flat-square&logo=langchain&logoColor=white" />
  <img src="https://img.shields.io/badge/Puppeteer-0F766E?style=flat-square&logo=puppeteer&logoColor=white" />
  <img src="https://img.shields.io/badge/Stripe-0F766E?style=flat-square&logo=stripe&logoColor=white" />
</p>

---

## 🧠 Currently

- 🔍 Rebuilding **RAG pipelines in TypeScript** with the Vercel AI SDK
- 🐍 Grinding **Neetcode 150** in Python
- 📐 Sketching system designs from memory every month

---

## 📊 GitHub in numbers

<div align="center">

<img height="165" src="https://github-readme-stats.vercel.app/api?username=Safyan82&show_icons=true&count_private=true&include_all_commits=true&hide_border=true&hide_title=true&bg_color=0d1117&title_color=14b8a6&icon_color=14b8a6&text_color=c9d1d9" />
<img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Safyan82&layout=compact&hide_border=true&langs_count=8&bg_color=0d1117&title_color=14b8a6&text_color=c9d1d9" />

<img src="https://streak-stats.demolab.com?user=Safyan82&hide_border=true&background=0d1117&ring=14b8a6&fire=14b8a6&currStreakLabel=14b8a6&sideNums=c9d1d9&currStreakNum=c9d1d9&sideLabels=5eead4&dates=8b949e&stroke=1f2937" />

<img width="100%" src="https://github-readme-activity-graph.vercel.app/graph?username=Safyan82&bg_color=0d1117&color=5eead4&line=14b8a6&point=ccfbf1&area=true&area_color=14b8a6&hide_border=true" />

</div>

---

<div align="center">

```bash
$ git commit -m "always shipping 🚢"
```

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:14B8A6,100:0F766E&height=100&section=footer" width="100%" />

</div>
