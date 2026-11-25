<div align="center">

<img src="./assets/header.svg" width="100%" alt="Muhammad Safyan Jelani — full-stack engineer. Production SaaS by day, my own apps by night." />

<a href="https://www.linkedin.com/in/sjmehar46"><img src="./assets/link-linkedin.svg" height="36" alt="LinkedIn" /></a>&nbsp;
<a href="https://wfc360.com"><img src="./assets/link-wfc360.svg" height="36" alt="WFC360" /></a>&nbsp;
<a href="https://littlestash.co.uk"><img src="./assets/link-littlestash.svg" height="36" alt="littlestash.co.uk" /></a>&nbsp;
<a href="https://github.com/Safyan82/prompt-firewall"><img src="./assets/link-prompt-firewall.svg" height="36" alt="prompt-firewall" /></a>&nbsp;
<a href="mailto:msafyan46@gmail.com"><img src="./assets/link-email.svg" height="36" alt="Email" /></a>

<br/><br/>

<img src="./assets/stats.svg" width="100%" alt="GitHub stats, redrawn nightly" />

I build software where **scheduling rules, payroll data, real-time events and operational workflows have to actually work in production**.

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

<img src="./assets/activity.svg" width="100%" alt="Contribution activity over the last 26 weeks" />

</div>

---

<div align="center">

### I like building things that survive contact with production.

```bash
$ git commit -m "always shipping 🚢"
```

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:14B8A6,100:0F766E&height=100&section=footer" width="100%" />

</div>
