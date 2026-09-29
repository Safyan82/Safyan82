<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F766E,100:14B8A6&height=140&section=header" width="100%" />

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=24&duration=3000&pause=900&color=14B8A6&center=true&vCenter=true&width=900&height=60&lines=Hey%2C+I'm+Safyan+%F0%9F%91%8B;Full-Stack+Engineer+%C2%B7+Production+SaaS;TypeScript+%C2%B7+Node.js+%C2%B7+React+%C2%B7+GraphQL;Building+AI+into+real-world+software+%F0%9F%A4%96" alt="Typing SVG" />

### Full-Stack Engineer building production SaaS from database to UI

**TypeScript · Node.js · React · GraphQL · MongoDB · AWS · React Native**

I build software where **scheduling rules, payroll data, real-time events and operational workflows have to actually work in production**.

<a href="https://linkedin.com/in/sjmehar46/"><img src="https://img.shields.io/badge/LinkedIn-14B8A6?style=for-the-badge&logo=linkedin&logoColor=white" /></a> <a href="mailto:msafyan46@gmail.com"><img src="https://img.shields.io/badge/Email-0F766E?style=for-the-badge&logo=gmail&logoColor=white" /></a> <a href="https://wfc360.com"><img src="https://img.shields.io/badge/WFC360-115E59?style=for-the-badge&logo=googlechrome&logoColor=white" /></a> <img src="https://komarev.com/ghpvc/?username=Safyan82&style=for-the-badge&color=14B8A6&label=PROFILE+VIEWS" />

</div>

---

## `$ whoami`

```ts
const safyan = {
  role: "Full-Stack Engineer",

  basedIn: "🇬🇧 United Kingdom",

  education: [
    "MSc Software Engineering — Distinction",
    "BSc Software Engineering — 3.77/4.00"
  ],

  mainProject: "WFC360 — workforce & security operations SaaS",

  backend: [
    "Node.js",
    "TypeScript",
    "GraphQL",
    "Apollo",
    "Express"
  ],

  frontend: [
    "React",
    "React Native",
    "Redux"
  ],

  data: [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis"
  ],

  infrastructure: [
    "AWS",
    "Docker",
    "Nginx",
    "Linux",
    "CI/CD"
  ],

  currentlyLearning: [
    "System Design",
    "DSA",
    "Python",
    "Kafka",
    "AI Engineering"
  ],

  engineeringMindset:
    "Solve the deterministic problem first. Use AI where it genuinely adds value."
};
```

---

# 🏢 Building WFC360

**WFC360 is a multi-tenant workforce and security operations platform used by UK security companies.**

I've worked across the stack — from **MongoDB data modelling and GraphQL APIs to React interfaces, mobile apps, real-time infrastructure and production deployments.**

The interesting part isn't the technology itself.

It's making sure the software behaves correctly when **hundreds of guards, sites, shifts and payroll records** are involved.

### 🗓️ Scheduling & workforce rules

Built scheduling workflows where a simple CRUD operation isn't enough.

* Server-side shift validation rather than trusting UI checks
* Rest-period and daily-hour rule enforcement
* Employee/site/customer filtering through complex MongoDB aggregations
* Recurring and anchor-time scheduling
* Mobile response task scheduling
* Conflict detection and authoritative re-validation

The goal:

> **The UI can warn. The server must decide.**

---

### 💷 Payroll & historical data integrity

Worked on pay-rate modelling where changing today's configuration shouldn't rewrite yesterday's payroll.

* Effective-dated pay rates
* Employee → site → site group → customer overrides
* Historic rate preservation
* Duty-date based calculations
* Invoice generation
* Xero / QuickBooks exports

One of the engineering principles I care about:

> **Historical financial data should remain explainable years later.**

---

### 🔴 Real-time operations

Built real-time workflows connecting backend events to operational dashboards and mobile devices.

* MongoDB Change Streams
* Socket.IO
* Real-time patrol/task updates
* Mobile operational workflows
* Web Push notifications
* Service workers
* Cross-subdomain authentication
* Actionable notifications

This led me deep into questions around:

**connections · subscriptions · cache invalidation · stale state · cancellation · event delivery · race conditions**

— the kind of problems that don't show up in a basic CRUD tutorial.

---

### 🔑 Key Management System

Built a complete key-management workflow involving:

* GraphQL schema design
* MongoDB aggregation pipelines
* Custodian tracking
* Transaction history
* Audit workflows
* Supplier-facing audit emails
* One-time-use links

Also encountered MongoDB's **16 MB BSON document limit** in production after embedding base64 images.

The fix wasn't “increase the limit.”

It required changing the data architecture.

---

### 📄 Performance & infrastructure

Some of the work I'm happiest with has been solving problems that weren't obvious from the UI.

* Reduced generated PDF sizes by **~97%**
* Puppeteer + Sharp + Ghostscript
* Concurrency-controlled report generation
* AWS deployments
* Nginx
* SSL
* PM2
* CI/CD
* S3
* Production debugging

I've learned that performance problems are often **architecture problems wearing a slow-request disguise.**

---

# 🤖 AI Engineering

I'm increasingly interested in **AI engineering rather than simply AI API integration**.

Currently exploring:

* LLM applications
* RAG
* LangChain
* LangGraph
* Vercel AI SDK
* Retrieval strategies
* Tool calling
* Structured outputs
* Evaluation pipelines
* Hallucination detection
* Grounding
* Agentic workflows

I'm particularly interested in AI inside systems where incorrect answers have consequences.

My approach:

```text
Deterministic logic
       ↓
Structured data
       ↓
Retrieval / tools
       ↓
LLM reasoning
       ↓
Validation / evaluation
       ↓
Human or system action
```

**LLMs shouldn't replace deterministic software where deterministic software already works.**

---

# 🧠 What I'm levelling up

I'm deliberately moving beyond being “the MERN guy”.

### Systems

* System design
* Distributed systems
* Event-driven architecture
* Caching
* Message queues
* Kafka
* PostgreSQL
* Database design
* Scalability

### Algorithms

Currently working through **NeetCode 150 with Python**.

Focus areas:

* Arrays & hashing
* Two pointers
* Sliding window
* Stack
* Binary search
* Linked lists
* Trees
* Graphs
* Heaps
* Backtracking
* Dynamic programming

### JavaScript / TypeScript internals

Going deeper into:

* V8
* Execution contexts
* Scope & environments
* Closures
* Hoisting
* `this`
* Prototypes
* Event loop
* Promises
* Async execution
* TypeScript's type system

Because knowing a framework is useful.

Knowing **why the runtime behaves the way it does** is better.

---

# 🛠️ Stack

<p align="center">
  <b>Languages</b><br/>
  <img src="https://skillicons.dev/icons?i=ts,js,python,html,css&theme=dark" />
  <br/><br/>

<b>Frontend & Mobile</b><br/> <img src="https://skillicons.dev/icons?i=react,redux,tailwind,vite&theme=dark" /> <br/><br/>

<b>Backend & APIs</b><br/> <img src="https://skillicons.dev/icons?i=nodejs,express,graphql,apollo&theme=dark" /> <br/><br/>

<b>Data</b><br/> <img src="https://skillicons.dev/icons?i=mongodb,postgres,mysql,redis&theme=dark" /> <br/><br/>

<b>Cloud & DevOps</b><br/> <img src="https://skillicons.dev/icons?i=aws,docker,nginx,linux,githubactions&theme=dark" />

</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-0F766E?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.IO-0F766E?style=flat-square&logo=socketdotio&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenAI-0F766E?style=flat-square&logo=openai&logoColor=white" />
  <img src="https://img.shields.io/badge/LangChain-0F766E?style=flat-square&logo=langchain&logoColor=white" />
  <img src="https://img.shields.io/badge/LangGraph-0F766E?style=flat-square&logo=langchain&logoColor=white" />
  <img src="https://img.shields.io/badge/Puppeteer-0F766E?style=flat-square&logo=puppeteer&logoColor=white" />
  <img src="https://img.shields.io/badge/Stripe-0F766E?style=flat-square&logo=stripe&logoColor=white" />
</p>

---

# 🚀 Things I'm building / exploring

### WFC360

**Workforce & security operations SaaS**

Scheduling · payroll · patrols · compliance · forms · reports · key management · mobile operations

### VatScan

Exploring AI-assisted VAT receipt/invoice processing for UK businesses.

### Product intelligence

Exploring AI-powered product discovery, matching and recommendation systems using **LLMs + structured data + retrieval**.

---

# 📈 GitHub

<div align="center">

<img height="165" src="https://github-readme-stats.vercel.app/api?username=Safyan82&show_icons=true&count_private=true&include_all_commits=true&hide_border=true&hide_title=true&bg_color=0d1117&title_color=14b8a6&icon_color=14b8a6&text_color=c9d1d9" />

<img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Safyan82&layout=compact&hide_border=true&langs_count=8&bg_color=0d1117&title_color=14b8a6&text_color=c9d1d9" />

<br/>

<img src="https://streak-stats.demolab.com?user=Safyan82&hide_border=true&background=0d1117&ring=14b8a6&fire=14b8a6&currStreakLabel=14b8a6&sideNums=c9d1d9&currStreakNum=c9d1d9&sideLabels=5eead4&dates=8b949e&stroke=1f2937" />

<br/>

<img width="100%" src="https://github-readme-activity-graph.vercel.app/graph?username=Safyan82&bg_color=0d1117&color=5eead4&line=14b8a6&point=ccfbf1&area=true&area_color=14b8a6&hide_border=true" />

</div>

---

<div align="center">

### I like building things that survive contact with production.

```bash
$ git commit -m "always shipping 🚢"
```

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:14B8A6,100:0F766E&height=100&section=footer" width="100%" />

</div>
