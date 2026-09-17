# 🛠️ Developer Productivity Suite — Angular Edition

> **One Workspace. Practical Tools. Modern Architecture.**

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![RxJS](https://img.shields.io/badge/RxJS-Reactive%20Programming-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)](https://rxjs.dev/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Angular Router](https://img.shields.io/badge/Angular%20Router-Routing-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/guide/routing)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

## 📖 About

**Developer Productivity Suite — Angular Edition** is a modern, enterprise-style developer productivity platform built with **Angular 21**.

The application provides a centralized collection of practical tools that developers can use for everyday software development tasks.

This Angular edition is **Version 3** of the Developer Productivity Suite series and focuses on demonstrating modern Angular development practices including:

- Standalone Components
- Angular Router
- Lazy Loading
- Dependency Injection
- Services
- RxJS
- Reactive Forms
- State Management
- Route Guards
- TypeScript Models
- Responsive Design
- Production-oriented architecture

---

# 🚀 Project Overview

Developer Productivity Suite is designed as a centralized workspace where developers can access frequently used utilities without depending on multiple separate websites or applications.

The Angular Edition contains **40 productivity tools across 8 categories** covering:

- Text Processing
- JSON
- Security
- CSS
- Colors
- Markdown
- Developer Utilities
- Date & Time

The application also provides supporting features such as:

- 🏠 Dashboard
- 🧰 Tool Discovery
- 🗂️ Categories
- 🔎 Search & Filtering
- ⭐ Favorites
- 🕘 Recently Used Tools
- ℹ️ About Page
- ⚙️ Settings
- 📱 Responsive Application Shell
- 💤 Lazy-Loaded Routes
- 🛡️ Route Guards
- 💉 Dependency Injection
- 🔄 RxJS-Based Reactive Data
- 📝 Reactive Forms
- 💾 Local State Persistence
- ♿ Accessibility Considerations
- ⚡ Production Build Optimization

---

# ✨ Features

## 🏠 Dashboard

The dashboard provides a centralized overview of the application.

### Dashboard Features

- Total tools
- Total categories
- Favorite tool count
- Recently used tool count
- Recently used tools
- Quick access navigation
- Explore Tools
- Browse Categories

---

# 🧰 Productivity Tools

Developer Productivity Suite contains **40 tools organized into 8 categories**.

## 1. 📝 Text Tools

- Case Converter
- Word Counter
- Duplicate Line Remover
- Line Sorter
- Slug Generator
- Text Reverser

## 2. 🗃️ JSON Tools

- JSON Formatter
- JSON Validator
- JSON Minifier
- JSON to CSV
- JSON Tree Viewer
- JSON Key Extractor

## 3. 🔐 Security Tools

- Base64 Encoder / Decoder
- URL Encoder / Decoder
- Hash Generator
- Password Generator
- UUID Generator
- JWT Decoder

## 4. 🎨 CSS Tools

- Box Shadow Generator
- Gradient Generator
- Border Radius Generator
- Flexbox Generator
- Grid Generator

## 5. 🌈 Color Tools

- Color Picker
- Color Converter
- Color Palette Generator
- Contrast Checker
- Shade & Tint Generator

## 6. 📝 Markdown Tools

- Markdown Editor
- Markdown to HTML
- Markdown Table Generator
- Markdown TOC Generator

## 7. 🧑‍💻 Developer Tools

- Regex Tester
- Timestamp Converter
- HTTP Status Code Lookup
- Cron Expression Helper
- Query String Builder

## 8. 🕐 Date & Time Tools

- Date Difference Calculator
- Timezone Converter
- Age Calculator

---

# 🏗️ Angular Architecture

The project follows a modern **standalone Angular architecture**.

```text
src/app/
│
├── core/
│   ├── guards/
│   ├── interceptors/
│   ├── models/
│   ├── data/
│   └── services/
│
├── shared/
│   ├── components/
│   ├── directives/
│   └── pipes/
│
├── features/
│   ├── dashboard/
│   ├── tools/
│   ├── categories/
│   ├── search/
│   ├── favorites/
│   └── settings/
│
├── app.ts
├── app.config.ts
├── app.html
├── app.css
└── app.routes.ts
```

The application uses Angular's modern **standalone architecture** rather than relying on a traditional NgModule-heavy structure.

---

# 🧩 Angular Concepts Demonstrated

This project was developed to demonstrate practical Angular concepts through a real-world application.

## 🧱 Components

Reusable standalone Angular components are used throughout the application.

## 💉 Dependency Injection

Angular's dependency injection system is used for application services and shared functionality.

## 🧭 Routing

Angular Router manages navigation between:

- Dashboard
- Tools
- Categories
- Search
- Favorites
- Recently Used
- About
- Individual Productivity Tools

## ⚡ Lazy Loading

Feature routes and individual tools are lazy loaded to improve application loading performance.

## 🛡️ Route Guards

Application readiness is protected using Angular route guards.

## ⚙️ Services

Services centralize application logic for:

- Tool Management
- Favorites
- Recently Used Tools
- Storage
- Theme Handling
- Tool Usage Tracking

## 🔄 RxJS

Reactive streams are used for application state and asynchronous data handling.

## 📝 Reactive Forms

Search and filtering functionality uses Angular Reactive Forms.

## 🔧 Pipes

Angular pipes are used where appropriate for template data transformation.

## 📌 Directives

Angular directives support reusable template behavior.

## 🧩 TypeScript Models

Strongly typed models are used for:

- Tools
- Categories
- Application Data

---

# 🔄 Application Flow

```text
                    ┌────────────────────────────┐
                    │ Developer Productivity     │
                    │          Suite             │
                    └─────────────┬──────────────┘
                                  │
                                  ▼
                    ┌────────────────────────────┐
                    │     Application Shell      │
                    └─────────────┬──────────────┘
                                  │
                   ┌──────────────┼──────────────┐
                   ▼              ▼              ▼
                Navbar         Sidebar         Footer
                                  │
                                  ▼
                    ┌────────────────────────────┐
                    │       Main Content         │
                    └─────────────┬──────────────┘
                                  │
             ┌────────────────────┼────────────────────┐
             ▼                    ▼                    ▼
        Dashboard              Tools              Categories
             │                    │                    │
             └────────────────────┼────────────────────┘
                                  │
                                  ▼
                    ┌────────────────────────────┐
                    │      Search / Favorites    │
                    │       / Recently Used      │
                    └─────────────┬──────────────┘
                                  │
                                  ▼
                    ┌────────────────────────────┐
                    │     Individual Tool        │
                    └────────────────────────────┘
```

---

# 🎨 User Interface

The application follows a modern, developer-focused visual design.

## Design Characteristics

- 🌑 Dark charcoal/slate interface
- 🔵 Blue accent color
- 🗂️ Clean cards
- ⭕ Rounded corners
- 📐 Consistent spacing
- 🧩 Responsive grids
- 🧑‍💻 Developer-focused visual hierarchy
- 🧭 Clear navigation
- ♿ Accessible interactive elements
- 📱 Mobile-friendly layouts

The project intentionally avoids a pure-black interface and instead uses dark charcoal/slate surfaces for improved visual balance.

---

# 📱 Responsive Design

The application has been designed and tested across multiple viewport sizes.

### 🖥️ Desktop

```text
1920 × 1080
1440 × 900
```

### 💻 Laptop / Tablet

```text
1024 × 768
768 × 1024
```

### 📱 Mobile

```text
390 × 844
360 × 800
```

### Responsive Behavior

- Adaptive grids
- Stacked mobile layouts
- Responsive navigation
- Flexible content widths
- Mobile-friendly buttons
- Touch-friendly controls
- Text wrapping
- Horizontal overflow prevention
- Responsive cards
- Responsive dashboard sections

On tablet and mobile, the **Navbar, Sidebar, Footer, and main content remain within the normal document flow** rather than being fixed to the viewport.

---

# 🛠️ Technology Stack

| Technology           | Purpose                           |
| -------------------- | --------------------------------- |
| Angular 21           | Frontend framework                |
| TypeScript           | Application programming           |
| HTML5                | Page structure                    |
| CSS3                 | Styling and responsive design     |
| RxJS                 | Reactive programming              |
| Angular Router       | Application routing               |
| Reactive Forms       | Form handling                     |
| Angular Build System | Development and production builds |
| Git                  | Version control                   |
| GitHub               | Source code hosting               |
| Vercel               | Deployment                        |

---

# ⚙️ Development Environment

The project was developed using:

```text
Angular CLI: 21.2.22
Angular:    21.2.22
Node.js:    24.14.0
npm:        11.9.0
Platform:   Windows x64
```

---

# 📂 Project Structure

```text
developer-productivity-suite-angular/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   ├── interceptors/
│   │   │   ├── models/
│   │   │   ├── data/
│   │   │   └── services/
│   │   │
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   ├── directives/
│   │   │   └── pipes/
│   │   │
│   │   ├── features/
│   │   │   ├── dashboard/
│   │   │   ├── tools/
│   │   │   ├── categories/
│   │   │   ├── search/
│   │   │   ├── favorites/
│   │   │   └── settings/
│   │   │
│   │   ├── app.ts
│   │   ├── app.config.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   └── app.routes.ts
│   │
│   ├── index.html
│   └── styles.css
│
├── angular.json
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/charanepuri/developer-productivity-suite-angular.git
```

## 2. Navigate to the Project

```bash
cd developer-productivity-suite-angular
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start the Development Server

```bash
ng serve
```

The application will be available at:

```text
http://localhost:4200/
```

---

# 🏭 Production Build

Create a production build with:

```bash
ng build
```

The generated production files will be available inside the:

```text
dist/
```

directory.

---

# 🧪 Testing

The project includes Angular testing infrastructure.

Run tests with:

```bash
ng test
```

### Additional Validation

Before deployment, validate:

- Route functionality
- Tool functionality
- State persistence
- Responsive behavior
- Navigation
- Browser compatibility
- Production build
- Application performance

---

# 📊 Development Roadmap

The Angular Edition was developed through structured phases:

| Phase     | Development Area                |
| --------- | ------------------------------- |
| Phase 0   | Planning & Architecture         |
| Phase 1   | Project Initialization          |
| Phase 2   | Enterprise Application Shell    |
| Phase 3   | Routing & Lazy Loading          |
| Phase 4   | Core Models & 40-Tool Data      |
| Phase 5   | Services & Dependency Injection |
| Phase 6   | Dashboard Architecture          |
| Phase 7   | Categories Architecture         |
| Phase 8   | Tools Architecture              |
| Phase 9   | 40 Productivity Tools           |
| Phase 10  | Search + Reactive Forms         |
| Phase 11  | Favorites + State Management    |
| Phase 11A | About Page                      |
| Phase 12  | Recently Used + RxJS            |
| Phase 13  | Guards                          |
| Phase 14  | Pipes & Directives              |
| Phase 15  | Settings + Theme                |
| Phase 16  | Responsive UI                   |
| Phase 17  | Error Handling                  |
| Phase 18  | Testing                         |
| Phase 19  | Production Optimization         |
| Phase 20  | Deployment                      |
| Phase 21  | Documentation                   |

> The roadmap represents the overall development journey. Some planned areas were intentionally simplified or removed during implementation to keep the application architecture practical and aligned with modern Angular practices.

---

# 🌐 Project Links

## Version 1 — HTML5, CSS3 & JavaScript

**GitHub Repository**

https://github.com/charanepuri/developer-productivity-suite-html

**Live Demo**

https://charanepuri.github.io/developer-productivity-suite-html/

---

## Version 2 — React

**GitHub Repository**

https://github.com/charanepuri/developer-productivity-suite-react

**Live Demo**

https://developer-productivity-suite-react.vercel.app/

---

## Version 3 — Angular

**GitHub Repository**

https://github.com/charanepuri/developer-productivity-suite-angular

**Live Demo**

https://developer-productivity-suite-angula.vercel.app/dashboard

---

# 📚 Documentation

Project documentation will be maintained separately as the project progresses.

**Documentation:** [Document Link](public/documentation/Developer_Productivity_Suite_Angular_Documentation.pdf)

---

# 👨‍💻 Author

## Epuri Charan Teja

**Aspiring Python Full Stack Developer**

Focused on building modern, responsive, and user-friendly applications while continuously exploring different full-stack technologies and development architectures.

---

# 🔗 Connect

### 💻 GitHub

https://github.com/charanepuri

### 🔗 LinkedIn

https://www.linkedin.com/in/charan-teja-972aa9231

---

# 💼 Portfolio

### 🐍 Django Portfolio

https://portfolio-site-django.onrender.com/

### ⚛️ React Portfolio

https://charan-react-portfolio.vercel.app/

### 🔥 Flask Portfolio

https://flask-developer-dashboard-portfolio.onrender.com/

---

# 🗺️ Developer Productivity Suite Series

The Developer Productivity Suite is being developed as a **multi-version project series**, where the same core product concept is implemented using different technologies.

```text
Version 1
HTML5 + CSS3 + JavaScript
        ↓
Version 2
React
        ↓
Version 3
Angular
        ↓
Version 4
Flask
        ↓
Version 5
Django
        ↓
Version 6
Full Stack
```

The goal of this series is to evolve the same project concept across different technology stacks while exploring their:

- Architecture
- Development practices
- Component systems
- State management approaches
- Routing strategies
- Deployment workflows
- Capabilities

---

# 🎯 Project Goals

The Developer Productivity Suite series aims to:

- 🧰 Build practical developer utilities
- 🧪 Explore multiple technology stacks
- 🏗️ Understand different architectural approaches
- 📈 Practice scalable application structure
- 💻 Improve frontend development skills
- ⚙️ Apply modern development practices
- ♻️ Build reusable components and services
- 📱 Practice responsive web development
- 🚀 Explore deployment workflows
- 📂 Create portfolio-ready applications
- 🔄 Continuously evolve the same product concept

---

# ⭐ Version 3 — Angular Highlights

The Angular Edition particularly focuses on:

```text
Modern Angular
      +
Standalone Components
      +
Lazy Loading
      +
Angular Router
      +
Dependency Injection
      +
Services
      +
RxJS
      +
Reactive Forms
      +
Route Guards
      +
TypeScript
      +
State Management
      +
Responsive Design
      +
Production Architecture
```

---

# 📄 License

This project is created as a **personal learning and portfolio project** by **Epuri Charan Teja**.

---

<div align="center">

# 🛠️ Developer Productivity Suite

### Angular Edition — Version 3

**One Workspace. Practical Tools. Modern Architecture.**

Built with ❤️ using **Angular + TypeScript**

**© 2026 Epuri Charan Teja**

</div>
