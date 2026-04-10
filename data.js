// =============================================
// PHP MASTERY PLATFORM — DATA
// All courses, books, projects, practices,
// use-cases, and documentation references
// =============================================

// =============================================
// COURSES DATA
// =============================================
const COURSES_DATA = [
  {
    id: 1,
    icon: "php",           // icon key
    iconBg: "rgba(139,92,246,.18)", iconColor: "#a78bfa",
    level: "beginner",
    levelLabel: "Beginner",
    title: "PHP Fundamentals (8.4)",
    desc: "Master PHP from zero: syntax, types, control flow, functions, arrays, and modern PHP 8.4 coding style used in real backend projects.",
    lessons: 30, hours: "13h",
    topics: ["Variables","Types","Arrays","Loops","Functions","Match expression","Null-safe operator","Named args"],
    details: {
      overview: "This course takes you from zero to confident with modern PHP 8.4. You'll write real scripts and understand how web servers execute PHP applications.",
      syllabus: [
        "Setup: PHP 8.4, Composer, VS Code, local server",
        "Variables, constants, type system and strict_types",
        "Control flow: if/else, match, switch, loops",
        "Functions: typed args, return types, variadic, named",
        "Arrays: indexed, associative, multidimensional, spread",
        "Strings: manipulation, regex, Heredoc/Nowdoc",
        "Error handling: try/catch, custom exceptions",
        "PHP 8 features: enums, readonly patterns, intersection types",
        "Working with files and I/O",
        "Final project: CLI CRUD app"
      ],
      resources: ["https://www.php.net/docs.php","https://phptherightway.com"]
    }
  },
  {
    id: 2,
    icon: "layers",
    iconBg: "rgba(245,158,11,.15)", iconColor: "#fbbf24",
    level: "intermediate",
    levelLabel: "Intermediate",
    title: "Object-Oriented PHP & SOLID",
    desc: "Deep dive into OOP concepts: classes, interfaces, abstract classes, traits, magic methods, and the SOLID principles with real examples.",
    lessons: 32, hours: "16h",
    topics: ["Classes","Interfaces","Traits","SOLID","Design Patterns","Abstract classes","Magic methods","Composition"],
    details: {
      overview: "Go beyond procedures. Learn how to architect maintainable PHP systems using proven OOP patterns and SOLID principles used at every serious company.",
      syllabus: [
        "Classes, properties, methods — visibility modifiers",
        "Constructor promotion & readonly properties",
        "Inheritance, polymorphism, method overriding",
        "Abstract classes vs Interfaces",
        "Traits — multiple inheritance alternative",
        "Magic methods: __get, __set, __call, __toString",
        "SOLID: Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion",
        "Design Patterns: Repository, Service, Factory, Observer, Strategy",
        "Late static binding and anonymous classes",
        "Final project: Blog system using OOP + Repository pattern"
      ],
      resources: ["https://refactoring.guru/design-patterns/php","https://www.php.net/manual/en/language.oop5.php"]
    }
  },
  {
    id: 3,
    icon: "database",
    iconBg: "rgba(6,182,212,.14)", iconColor: "#22d3ee",
    level: "intermediate",
    levelLabel: "Intermediate",
    title: "Databases & PDO Mastery",
    desc: "Build robust data layers with MySQL, PDO, query optimization, migrations, transactions, and connection pooling.",
    lessons: 24, hours: "10h",
    topics: ["MySQL","PDO","Transactions","Migrations","Indexing","Joins","Stored Procedures","Query optimization"],
    details: {
      overview: "Learn how data is stored, retrieved, and optimized in PHP applications. This course covers raw SQL mastery plus PHP's PDO layer.",
      syllabus: [
        "Relational database design: normalization, ERD",
        "MySQL data types, constraints, primary/foreign keys",
        "CRUD operations with raw SQL",
        "PDO: prepared statements, binding params, fetch modes",
        "Transactions: ACID, commit, rollback",
        "Indexing strategies and EXPLAIN analysis",
        "Joins: INNER, LEFT, RIGHT, CROSS",
        "Database migrations by hand and with tools",
        "Connection pooling and persistent connections",
        "Intro to NoSQL: Redis and MongoDB from PHP"
      ],
      resources: ["https://www.php.net/manual/en/book.pdo.php","https://dev.mysql.com/doc/"]
    }
  },
  {
    id: 4,
    icon: "api",
    iconBg: "rgba(16,185,129,.14)", iconColor: "#34d399",
    level: "intermediate",
    levelLabel: "Intermediate",
    title: "REST APIs in PHP",
    desc: "Design and build production-ready REST APIs: routing, middleware, authentication, rate limiting, versioning, and OpenAPI docs.",
    lessons: 30, hours: "14h",
    topics: ["REST","JWT","OAuth2","Rate Limiting","Versioning","OpenAPI","Middleware","CORS"],
    details: {
      overview: "APIs are the backbone of modern software. Learn to build them the right way in PHP — following REST standards, securing them, and documenting them properly.",
      syllabus: [
        "HTTP protocol deep dive: methods, status codes, headers",
        "REST design principles and resource modeling",
        "Building a router from scratch in pure PHP",
        "Request/Response cycle, input validation",
        "JWT authentication — issue and verify tokens",
        "OAuth2 flows: authorization code, client credentials",
        "API versioning strategies (/v1/, header, query)",
        "Rate limiting with Redis",
        "CORS, HTTPS, security headers",
        "OpenAPI 3.0 documentation with Swagger UI",
        "Final project: Full-featured REST API for an e-commerce backend"
      ],
      resources: ["https://restfulapi.net/","https://jwt.io/","https://swagger.io/"]
    }
  },
  {
    id: 5,
    icon: "lightning",
    iconBg: "rgba(239,68,68,.14)", iconColor: "#f87171",
    level: "advanced",
    levelLabel: "Advanced",
    title: "Laravel — The Full Masterclass",
    desc: "Comprehensive Laravel mastery: Eloquent ORM, queues, events, caching, Artisan, testing, broadcasting, and large-scale architecture.",
    lessons: 52, hours: "28h",
    topics: ["Eloquent","Queues","Events","Caching","Testing","Broadcasting","Artisan","Sanctum"],
    details: {
      overview: "Laravel has a large global community. This course walks through core framework features with emphasis on practical production patterns.",
      syllabus: [
        "Laravel project structure and bootstrapping",
        "Routing, controllers, middleware",
        "Blade templating engine",
        "Eloquent: models, relationships, scopes, observers",
        "Migrations, seeders, factories",
        "Form requests, validation",
        "Authentication: Breeze, Fortify, Sanctum, Passport",
        "Queues and jobs — async processing",
        "Events and listeners — decoupled architecture",
        "Caching strategies with Redis",
        "Broadcasting with Pusher/Laravel Echo",
        "File storage with S3",
        "Testing: Feature tests, Unit tests, Mocking",
        "Laravel Horizon, Telescope, Octane",
        "Capstone: SaaS platform with multi-tenancy"
      ],
      resources: ["https://laravel.com/docs","https://laracasts.com"]
    }
  },
  {
    id: 6,
    icon: "music",
    iconBg: "rgba(16,185,129,.14)", iconColor: "#34d399",
    level: "advanced",
    levelLabel: "Advanced",
    title: "Symfony — Enterprise PHP",
    desc: "A widely used PHP framework for enterprise apps. Learn the Symfony ecosystem: components, bundles, DI container, Doctrine ORM, and more.",
    lessons: 44, hours: "22h",
    topics: ["Symfony","Doctrine","DI Container","Security","Console","Messenger","Webpack Encore"],
    details: {
      overview: "Symfony is used in many production systems and also powers Drupal components. Learn enterprise-oriented PHP architecture and tooling.",
      syllabus: [
        "Symfony project setup and directory structure",
        "Symfony router, controllers, HTTP Foundation",
        "Dependency Injection Container — the core of Symfony",
        "Doctrine ORM: entities, repositories, migrations",
        "Symfony Forms and data validation",
        "Security component: firewalls, voters, access control",
        "Symfony Messenger — message bus, async workers",
        "Console commands and cronjobs",
        "Symfony Flex and bundles ecosystem",
        "API Platform — REST and GraphQL APIs",
        "Webpack Encore for assets",
        "Testing with PHPUnit and Symfony test client",
        "Deployment — Symfony on production"
      ],
      resources: ["https://symfony.com/doc/current/","https://api-platform.com/docs/"]
    }
  },
  {
    id: 7,
    icon: "shield",
    iconBg: "rgba(139,92,246,.14)", iconColor: "#a78bfa",
    level: "advanced",
    levelLabel: "Advanced",
    title: "PHP Security Engineering",
    desc: "Master every attack vector and defense: SQL injection, XSS, CSRF, file upload vulnerabilities, secrets management, and OWASP Top 10.",
    lessons: 22, hours: "10h",
    topics: ["OWASP","SQL Injection","XSS","CSRF","Secrets","CSP","2FA","Hashing"],
    details: {
      overview: "Security is not optional. Learn to build PHP applications that are hardened against every major web attack vector.",
      syllabus: [
        "OWASP Top 10 — understanding the attack landscape",
        "SQL injection: defense with PDO prepared statements",
        "XSS: types (Reflected, Stored, DOM-based), Content Security Policy",
        "CSRF: tokens, SameSite cookies",
        "File upload security: MIME validation, storage strategies",
        "Authentication hardening: bcrypt, Argon2",
        "Session security: fixation, hijacking, secure cookies",
        "Secrets management: .env, Vault, environment vars",
        "Rate limiting, CAPTCHA, brute force protection",
        "2FA: TOTP and backup codes",
        "Security headers: X-Frame-Options, HSTS, Referrer-Policy",
        "Security scanning tools: PHPStan, Psalm, Snyk"
      ],
      resources: ["https://owasp.org/www-project-top-ten/","https://cheatsheetseries.owasp.org/"]
    }
  },
  {
    id: 8,
    icon: "rocket",
    iconBg: "rgba(99,102,241,.14)", iconColor: "#a5b4fc",
    level: "advanced",
    levelLabel: "Advanced",
    title: "DevOps & Deployment for PHP",
    desc: "Containerize, deploy, and monitor PHP applications using Docker, Nginx, Redis, CI/CD pipelines, and cloud infrastructure.",
    lessons: 26, hours: "13h",
    topics: ["Docker","Nginx","Redis","CI/CD","GitHub Actions","AWS","Supervisor","Monitoring"],
    details: {
      overview: "Getting PHP to production efficiently and reliably. Learn the complete DevOps stack from Docker containers to cloud deployment.",
      syllabus: [
        "Linux basics for PHP developers",
        "Nginx / Apache config for PHP apps",
        "PHP-FPM tuning and pool management",
        "Docker: Dockerfile for PHP, docker-compose setups",
        "Redis: sessions, caching, Pub/Sub",
        "Supervisor for queue workers",
        "GitHub Actions CI/CD pipeline for PHP",
        "Environment management: .env, secrets, staging/prod",
        "Deployer — automated PHP deployment tool",
        "AWS for PHP: EC2, RDS, S3, CloudFront, Elastic Beanstalk",
        "Application monitoring: New Relic, Datadog, Sentry",
        "Log management with ELK stack",
        "Zero-downtime deployments: blue-green, canary"
      ],
      resources: ["https://www.docker.com/","https://deployer.org/","https://sentry.io/"]
    }
  },
  {
    id: 9,
    icon: "graphql",
    iconBg: "rgba(236,72,153,.14)", iconColor: "#f472b6",
    level: "framework",
    levelLabel: "Framework",
    title: "GraphQL APIs with PHP",
    desc: "Build flexible GraphQL APIs in PHP using Lighthouse (Laravel) and Webonyx GraphQL. Schema design, resolvers, mutations, subscriptions.",
    lessons: 18, hours: "8h",
    topics: ["GraphQL","Lighthouse","Resolvers","Mutations","Subscriptions","DataLoader","Introspection"],
    details: {
      overview: "GraphQL is the modern alternative to REST for complex data graphs. Learn to implement it fully in PHP.",
      syllabus: [
        "GraphQL concepts: types, queries, mutations, subscriptions",
        "Schema-first vs code-first approach",
        "Webonyx GraphQL-PHP: core library",
        "Lighthouse for Laravel — real-world GraphQL",
        "Resolvers, directives, pagination",
        "Authentication in GraphQL (context passing)",
        "N+1 problem and DataLoader pattern",
        "Error handling in GraphQL",
        "Testing GraphQL APIs",
        "GraphQL subscriptions with WebSockets"
      ],
      resources: ["https://graphql.org/","https://lighthouse-php.com/","https://webonyx.github.io/graphql-php/"]
    }
  },
  {
    id: 10,
    icon: "testTube",
    iconBg: "rgba(245,158,11,.14)", iconColor: "#fbbf24",
    level: "advanced",
    levelLabel: "Advanced",
    title: "Testing PHP Applications",
    desc: "Complete testing strategy: unit tests, integration tests, feature tests, TDD workflow, mocking, and CI integration.",
    lessons: 20, hours: "9h",
    topics: ["PHPUnit","Mockery","TDD","Feature Tests","Code Coverage","Pest","Factories","CI Integration"],
    details: {
      overview: "Learn to write tests that give you confidence to ship. Understand every type of test in PHP and how to maintain a healthy test suite.",
      syllabus: [
        "Why testing matters — the testing pyramid",
        "PHPUnit setup, test discovery, assertions",
        "Test doubles: stubs, mocks, spies with Mockery",
        "Testing controllers and services in isolation",
        "Database seeding and factories for tests",
        "TDD cycle: Red → Green → Refactor",
        "Laravel feature tests: HTTP, Database assertions",
        "Pest PHP: cleaner syntax test framework",
        "Code coverage with Xdebug and PCOV",
        "Integration tests and contract testing",
        "Running tests in GitHub Actions"
      ],
      resources: ["https://phpunit.de/","https://pestphp.com/","https://docs.mockery.io/"]
    }
  },
  {
    id: 11,
    icon: "settings",
    iconBg: "rgba(6,182,212,.14)", iconColor: "#22d3ee",
    level: "framework",
    levelLabel: "Framework",
    title: "Composer & PHP Ecosystem",
    desc: "Master Composer: semantic versioning, package creation, autoloading, private repositories, and navigating Packagist.",
    lessons: 14, hours: "5h",
    topics: ["Composer","PSR-4","Autoloading","Packagist","SemVer","Private repos","Scripts"],
    details: {
      overview: "Composer is a core part of modern PHP workflows. This course builds strong practical skills for dependency management and package publishing.",
      syllabus: [
        "Composer fundamentals: require, update, install",
        "composer.json anatomy — all fields explained",
        "Semantic versioning and constraint syntax",
        "Autoloading: PSR-4, classmap, files",
        "Creating and publishing a Composer package",
        "Private repositories with Satis or Private Packagist",
        "Composer scripts and hooks",
        "Dependency auditing and security",
        "Platform requirements and PHP extensions",
        "Lockfile strategy and reproducible builds"
      ],
      resources: ["https://getcomposer.org/doc/","https://packagist.org/"]
    }
  },
  {
    id: 12,
    icon: "network",
    iconBg: "rgba(139,92,246,.14)", iconColor: "#a78bfa",
    level: "advanced",
    levelLabel: "Advanced",
    title: "PHP Microservices Architecture",
    desc: "Architect PHP applications as microservices: service discovery, message queues, API gateways, distributed tracing, and event-driven design.",
    lessons: 24, hours: "12h",
    topics: ["Microservices","RabbitMQ","Kafka","API Gateway","Service Mesh","gRPC","Event Sourcing","CQRS"],
    details: {
      overview: "Scale beyond monoliths. Learn how to decompose PHP applications into microservices and handle the inherent complexity.",
      syllabus: [
        "Microservices vs Monolith: tradeoffs",
        "Designing service boundaries: domain-driven approach",
        "Inter-service communication: REST, gRPC",
        "Message queues: RabbitMQ with PHP",
        "Apache Kafka for high-throughput event streaming",
        "API Gateway patterns (Kong, Nginx)",
        "Service discovery and load balancing",
        "Event-driven architecture and CQRS",
        "Event Sourcing in PHP",
        "Distributed tracing with Jaeger",
        "Saga pattern for distributed transactions",
        "Docker Swarm / Kubernetes for PHP microservices"
      ],
      resources: ["https://microservices.io/","https://www.rabbitmq.com/","https://kafka.apache.org/"]
    }
  },
  {
    id: 13,
    icon: "activity",
    iconBg: "rgba(16,185,129,.14)", iconColor: "#34d399",
    level: "advanced",
    levelLabel: "Advanced",
    title: "Observability for PHP Backends",
    desc: "Build production observability: metrics, logs, traces, alerting, and error monitoring for PHP services.",
    lessons: 18, hours: "8h",
    topics: ["OpenTelemetry","Prometheus","Grafana","Sentry","SLIs/SLOs","Alerting","Structured Logs","Tracing"],
    details: {
      overview: "Observability is a core backend hiring skill. Learn how teams monitor PHP services and detect issues before users report them.",
      syllabus: [
        "Observability fundamentals: logs, metrics, traces",
        "SLI/SLO and error budgets for backend APIs",
        "Structured logging with correlation IDs",
        "Metrics collection and Prometheus scraping",
        "Grafana dashboards for latency and error rates",
        "Distributed tracing with OpenTelemetry",
        "Error monitoring and release health in Sentry",
        "Alert design to reduce noisy paging",
        "Incident playbooks and postmortem basics"
      ],
      resources: ["https://opentelemetry.io/docs/","https://prometheus.io/docs/","https://grafana.com/docs/","https://docs.sentry.io/"]
    }
  },
  {
    id: 14,
    icon: "repeat",
    iconBg: "rgba(99,102,241,.14)", iconColor: "#a5b4fc",
    level: "advanced",
    levelLabel: "Advanced",
    title: "Async PHP & Queue-Driven Systems",
    desc: "Design non-blocking backends with queues, workers, retries, idempotency, and high-throughput processing patterns.",
    lessons: 20, hours: "9h",
    topics: ["Queues","Idempotency","Retries","Dead Letter Queues","RoadRunner","OpenSwoole","RabbitMQ","Backpressure"],
    details: {
      overview: "Modern PHP backends rely on async workflows for throughput and reliability. This course focuses on patterns teams use in production.",
      syllabus: [
        "Sync vs async architecture tradeoffs",
        "Queue fundamentals and message contracts",
        "Retry policies and dead-letter handling",
        "Idempotency keys for safe reprocessing",
        "Worker lifecycle and graceful shutdown",
        "Running long-lived workers with RoadRunner",
        "Async runtime concepts with OpenSwoole",
        "Throughput tuning and backpressure control",
        "Operational checklists for queue-based systems"
      ],
      resources: ["https://www.rabbitmq.com/docs","https://roadrunner.dev/docs","https://openswoole.com/docs"]
    }
  },
  {
    id: 15,
    icon: "creditCard",
    iconBg: "rgba(245,158,11,.14)", iconColor: "#fbbf24",
    level: "framework",
    levelLabel: "Framework",
    title: "Payment & Webhook Engineering in PHP",
    desc: "Implement payment flows safely: checkout, webhook verification, reconciliation, and failure-handling patterns.",
    lessons: 16, hours: "7h",
    topics: ["Stripe","Webhooks","Idempotency","Reconciliation","Refunds","PCI Scope","Event Logs","Retry Safety"],
    details: {
      overview: "Payment and billing integrations are common in backend job roles. Learn practical patterns for reliability and auditability.",
      syllabus: [
        "Payment architecture and event flow basics",
        "Checkout session and payment intent lifecycle",
        "Webhook signature verification",
        "Idempotent webhook handlers",
        "Out-of-order event handling",
        "Reconciliation jobs and ledger consistency",
        "Refund and dispute event handling",
        "Operational monitoring for payment pipelines"
      ],
      resources: ["https://docs.stripe.com/","https://docs.stripe.com/webhooks"]
    }
  },
  {
    id: 16,
    icon: "cloud",
    iconBg: "rgba(34,211,238,.14)", iconColor: "#22d3ee",
    level: "advanced",
    levelLabel: "Advanced",
    title: "Cloud-Native PHP on Kubernetes",
    desc: "Deploy and operate PHP services on Kubernetes with readiness probes, autoscaling, config/secrets, and rollout safety.",
    lessons: 18, hours: "8h",
    topics: ["Kubernetes","Helm","HPA","Readiness/Liveness","Secrets","Ingress","Rollouts","Observability"],
    details: {
      overview: "Cloud-native operations are increasingly requested in backend roles. This course focuses on practical K8s workflows for PHP services.",
      syllabus: [
        "Container image strategy for PHP apps",
        "Kubernetes primitives for backend services",
        "ConfigMaps and Secrets management",
        "Readiness/liveness probes with PHP-FPM",
        "Horizontal Pod Autoscaling and capacity planning",
        "Ingress and TLS routing patterns",
        "Progressive rollout and rollback strategy",
        "Operational dashboards and alert baselines"
      ],
      resources: ["https://kubernetes.io/docs/","https://helm.sh/docs/","https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"]
    }
  }
];

// =============================================
// BOOKS DATA
// =============================================
const BOOKS_DATA = [
  {
    icon: "bookOpen",
    iconColor: "#34d399",
    bgColor: "linear-gradient(135deg,#065f46,#10b981)",
    title: "PHP 8 Objects, Patterns, and Practice",
    author: "Matt Zandstra",
    edition: "6th Edition",
    desc: "The definitive guide to OOP and design patterns in PHP. Every serious PHP developer needs this book.",
    tags: ["OOP","Design Patterns","Best Practices"],
    starCount: 5,
    link: "https://www.apress.com/gp/book/9781484267875",
    details: "Covers everything from the basics of OOP, through to advanced design patterns including Composite, Visitor, Template Method and others. Extensively updated for PHP 8."
  },
  {
    icon: "code",
    iconColor: "#60a5fa",
    bgColor: "linear-gradient(135deg,#1e3a5f,#3b82f6)",
    title: "Modern PHP",
    author: "Josh Lockhart",
    edition: "O'Reilly",
    desc: "A comprehensive guide to modern PHP practices: namespaces, traits, generators, closures, PSR standards, and Composer.",
    tags: ["Modern PHP","PSR","Composer","Closures"],
    starCount: 5,
    link: "https://www.oreilly.com/library/view/modern-php/9781491905173/",
    details: "Covers PHP 5.4+ features that turned PHP into a modern language. Josh Lockhart (creator of Slim framework) shares best practices used in the real world."
  },
  {
    icon: "lightning",
    iconColor: "#fb923c",
    bgColor: "linear-gradient(135deg,#7c2d12,#f97316)",
    title: "Laravel: Up & Running",
    author: "Matt Stauffer",
    edition: "3rd Edition · O'Reilly",
    desc: "A practical Laravel guide covering core framework areas from routing to deployment workflows.",
    tags: ["Laravel","Framework","Eloquent","API"],
    starCount: 5,
    link: "https://www.oreilly.com/library/view/laravel-up/9781098141851/",
    details: "A broad Laravel reference covering core framework patterns including queues, events, testing, and application structure."
  },
  {
    icon: "target",
    iconColor: "#f87171",
    bgColor: "linear-gradient(135deg,#7f1d1d,#ef4444)",
    title: "The Art of Unit Testing",
    author: "Roy Osherove",
    edition: "Manning Publications",
    desc: "Learn to write great unit tests in any language including PHP. Covers stubs, mocks, patterns, and TDD workflow.",
    tags: ["Testing","TDD","PHPUnit","Mocking"],
    starCount: 4,
    link: "https://www.manning.com/books/the-art-of-unit-testing-third-edition",
    details: "Although language-agnostic, every principle applies directly to PHP. Essential for writing maintainable tests."
  },
  {
    icon: "alignLeft",
    iconColor: "#fbbf24",
    bgColor: "linear-gradient(135deg,#78350f,#f59e0b)",
    title: "Clean Code",
    author: "Robert C. Martin (Uncle Bob)",
    edition: "Pearson Education",
    desc: "The classic book on writing readable, maintainable code. The principles are directly applicable in PHP development.",
    tags: ["Clean Code","Refactoring","SOLID","Best Practices"],
    starCount: 5,
    link: "https://www.pearson.com/en-us/subject-catalog/p/clean-code-a-handbook-of-agile-software-craftsmanship/P200000009044",
    details: "Principles for naming, functions, classes, and refactoring that can be applied to PHP projects and code reviews."
  },
  {
    icon: "server",
    iconColor: "#a78bfa",
    bgColor: "linear-gradient(135deg,#312e81,#7c3aed)",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    edition: "O'Reilly",
    desc: "Deep dive into the internals of databases, distributed systems, and data modeling — essential for any backend engineer.",
    tags: ["Databases","Distributed Systems","Architecture"],
    starCount: 5,
    link: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/",
    details: "A deep technical reference on storage systems, replication, distributed data, and consistency tradeoffs."
  },
  {
    icon: "globe",
    iconColor: "#34d399",
    bgColor: "linear-gradient(135deg,#064e3b,#059669)",
    title: "PHP The Right Way",
    author: "Josh Lockhart & Contributors",
    edition: "Free Online + PDF",
    desc: "The community-maintained guide to modern PHP best practices. Available free at phptherightway.com.",
    tags: ["Best Practices","Community","Free"],
    starCount: 5,
    link: "https://phptherightway.com/",
    details: "A community-maintained PHP best-practices guide covering standards, security, deployment, and ecosystem recommendations."
  },
  {
    icon: "layers",
    iconColor: "#60a5fa",
    bgColor: "linear-gradient(135deg,#1e40af,#2563eb)",
    title: "Domain-Driven Design",
    author: "Eric Evans",
    edition: "Addison-Wesley",
    desc: "The original DDD book. Essential for building large PHP enterprise applications that align with business logic.",
    tags: ["DDD","Architecture","Enterprise"],
    starCount: 5,
    link: "https://www.domainlanguage.com/ddd/",
    details: "The Blue Book. Introduces bounded contexts, aggregates, entities, value objects, and domain services — concepts heavily used in Symfony/Laravel enterprise apps."
  },
  {
    icon: "activity",
    iconColor: "#fbbf24",
    bgColor: "linear-gradient(135deg,#92400e,#d97706)",
    title: "High Performance PHP & MySQL",
    author: "Various Authors",
    edition: "Packt Publishing",
    desc: "Optimization techniques for PHP and MySQL: profiling, caching, query tuning, CDN, opcache configuration.",
    tags: ["Performance","MySQL","Caching","Optimization"],
    starCount: 4,
    link: "https://www.packtpub.com/",
    details: "Focuses on practical performance topics such as caching, query analysis with EXPLAIN, and profiling techniques."
  },
  {
    icon: "repeat",
    iconColor: "#22d3ee",
    bgColor: "linear-gradient(135deg,#0f172a,#1d4ed8)",
    title: "Refactoring (2nd Edition)",
    author: "Martin Fowler",
    edition: "Addison-Wesley",
    desc: "A foundational guide to safe code improvement. Core techniques apply directly to PHP legacy modernization and code review.",
    tags: ["Refactoring","Maintainability","Architecture"],
    starCount: 5,
    link: "https://martinfowler.com/books/refactoring.html",
    details: "Covers tested refactoring workflows and patterns for incrementally improving code quality without changing behavior."
  },
  {
    icon: "workflow",
    iconColor: "#34d399",
    bgColor: "linear-gradient(135deg,#064e3b,#0f766e)",
    title: "Patterns of Enterprise Application Architecture",
    author: "Martin Fowler",
    edition: "Addison-Wesley",
    desc: "Classic enterprise architecture patterns used in large backend systems, including repository, unit of work, and service layer patterns.",
    tags: ["Architecture","Enterprise Patterns","DDD"],
    starCount: 5,
    link: "https://martinfowler.com/books/eaa.html",
    details: "Reference for application-layer patterns often used in Laravel and Symfony enterprise codebases."
  },
  {
    icon: "shield",
    iconColor: "#f87171",
    bgColor: "linear-gradient(135deg,#7f1d1d,#b91c1c)",
    title: "Release It! (2nd Edition)",
    author: "Michael T. Nygard",
    edition: "Pragmatic Bookshelf",
    desc: "Practical production reliability patterns: circuit breakers, bulkheads, stability practices, and incident-aware design.",
    tags: ["Reliability","Production","Resilience"],
    starCount: 5,
    link: "https://pragprog.com/titles/mnee2/release-it-second-edition/",
    details: "A practical operations-minded book to design backend systems that survive real production failure modes."
  }
];

// =============================================
// VIDEO LEARNING SOURCES (PHP / MySQL / Laravel)
// =============================================
const VIDEO_SOURCES_DATA = [
  {
    source: "Elzero Web School",
    presenter: "Osama Elzero",
    scope: "Arabic",
    icon: "graduationCap",
    iconBg: "rgba(16,185,129,.15)",
    iconColor: "#34d399",
    focus: "PHP, MySQL, Laravel fundamentals with practical walkthroughs",
    desc: "Arabic video source with broad beginner-to-intermediate tracks useful for building a consistent backend foundation.",
    tags: ["PHP", "MySQL", "Laravel", "Arabic"],
    links: [
      { label: "YouTube Channel", url: "https://www.youtube.com/@ElzeroWebSchool" },
      { label: "Official Website", url: "https://elzero.org/" }
    ],
    lastReviewed: "2026-04-10",
    verificationNote: "Official channel and site identity links; selected for PHP/MySQL/Laravel relevance."
  },
  {
    source: "Laracasts",
    presenter: "Jeffrey Way and Team",
    scope: "International",
    icon: "lightning",
    iconBg: "rgba(245,158,11,.15)",
    iconColor: "#fbbf24",
    focus: "Laravel and modern PHP engineering workflows",
    desc: "Structured video platform centered on Laravel and practical PHP development patterns.",
    tags: ["Laravel", "PHP", "Testing", "Architecture"],
    links: [
      { label: "Laracasts Platform", url: "https://laracasts.com/" },
      { label: "Laravel Learn Directory", url: "https://laravel.com/learn" }
    ],
    lastReviewed: "2026-04-10",
    verificationNote: "Official learning platform plus Laravel official learning directory."
  },
  {
    source: "Codecourse",
    presenter: "Codecourse Team",
    scope: "International",
    icon: "code",
    iconBg: "rgba(6,182,212,.15)",
    iconColor: "#22d3ee",
    focus: "Laravel and PHP implementation tutorials",
    desc: "Video-focused source with practical Laravel and PHP lesson series for project-oriented learning.",
    tags: ["Laravel", "PHP", "Project Based"],
    links: [
      { label: "Codecourse Website", url: "https://codecourse.com/" },
      { label: "YouTube Channel", url: "https://www.youtube.com/@codecourse" }
    ],
    lastReviewed: "2026-04-10",
    verificationNote: "Official platform and channel links; included for PHP/Laravel-focused tracks."
  }
];

// =============================================
// PROJECTS DATA
// =============================================
const PROJECTS_DATA = {
  practice: [
    {
      icon: "fileText",
      iconBg: "rgba(16,185,129,.15)", iconColor: "#34d399",
      difficulty: "easy", diffLabel: "Beginner",
      title: "Blog API",
      github: "",
      desc: "Build a RESTful API for a blog system: posts, categories, tags, comments, and basic authentication.",
      stack: ["PHP 8.3","MySQL","PDO","JWT"],
      banner: "linear-gradient(135deg,#10b981,#06b6d4)",
      detail: "Create full CRUD endpoints for a blog. Implement user authentication with JWT, post categories, tags, and comments. Paginate results and add basic search.",
      references: [
        { label: "PHP PDO Manual", url: "https://www.php.net/manual/en/book.pdo.php" },
        { label: "JWT Introduction", url: "https://jwt.io/introduction" }
      ]
    },
    {
      icon: "shoppingCart",
      iconBg: "rgba(245,158,11,.15)", iconColor: "#fbbf24",
      difficulty: "medium", diffLabel: "Intermediate",
      title: "E-Commerce Backend",
      github: "",
      desc: "Complete shopping cart API: products, inventory, orders, payments integration (Stripe), and admin dashboard.",
      stack: ["PHP","MySQL","Stripe API","Redis","Composer"],
      banner: "linear-gradient(135deg,#f59e0b,#ef4444)",
      detail: "Build the full backend for an e-commerce system. Product management, shopping cart, checkout flow, Stripe payment processing, order management, and an admin API.",
      references: [
        { label: "Stripe API Reference", url: "https://docs.stripe.com/api" },
        { label: "Redis Documentation", url: "https://redis.io/docs/" }
      ]
    },
    {
      icon: "messageSquare",
      iconBg: "rgba(139,92,246,.15)", iconColor: "#a78bfa",
      difficulty: "medium", diffLabel: "Intermediate",
      title: "Real-Time Chat Backend",
      github: "",
      desc: "WebSocket-based chat system: rooms, direct messages, online presence, message history.",
      stack: ["PHP","Ratchet","Redis","MySQL","WebSockets"],
      banner: "linear-gradient(135deg,#6366f1,#8b5cf6)",
      detail: "Build a real-time chat backend using Ratchet WebSocket library. Support multiple rooms, direct messages, user presence, and message persistence.",
      references: [
        { label: "RFC 6455 WebSocket Protocol", url: "https://datatracker.ietf.org/doc/html/rfc6455" },
        { label: "Ratchet PHP", url: "http://socketo.me/" }
      ]
    },
    {
      icon: "barChart",
      iconBg: "rgba(6,182,212,.15)", iconColor: "#22d3ee",
      difficulty: "easy", diffLabel: "Beginner",
      title: "URL Shortener",
      github: "",
      desc: "Build a URL shortener service with analytics: click tracking, geo data, custom slugs, expiration.",
      stack: ["PHP","MySQL","Redis","REST API"],
      banner: "linear-gradient(135deg,#0ea5e9,#3b82f6)",
      detail: "A classic project to learn routing, redirect handling, database design, and simple analytics. Add rate limiting and Redis for performance.",
      references: [
        { label: "Redis Rate Limiting Patterns", url: "https://redis.io/learn/rate-limiting-getting-started" },
        { label: "HTTP Semantics", url: "https://datatracker.ietf.org/doc/html/rfc9110" }
      ]
    },
    {
      icon: "mail",
      iconBg: "rgba(236,72,153,.15)", iconColor: "#f472b6",
      difficulty: "medium", diffLabel: "Intermediate",
      title: "Email Newsletter Platform",
      github: "",
      desc: "Build an email campaign system: subscriber management, template builder, queue-based sending, analytics.",
      stack: ["Laravel","Queues","Mailgun","MySQL","Redis"],
      banner: "linear-gradient(135deg,#ec4899,#f59e0b)",
      detail: "Build a complete email newsletter system with double opt-in, template management, scheduled campaigns, and delivery tracking using Laravel Queues.",
      references: [
        { label: "Laravel Queues", url: "https://laravel.com/docs/12.x/queues" },
        { label: "Mailgun Docs", url: "https://documentation.mailgun.com/" }
      ]
    },
    {
      icon: "kanban",
      iconBg: "rgba(20,184,166,.15)", iconColor: "#2dd4bf",
      difficulty: "hard", diffLabel: "Advanced",
      title: "Task Management System",
      github: "",
      desc: "Jira-like project management API: projects, boards, sprints, tasks, comments, file attachments, role-based access.",
      stack: ["Laravel","Sanctum","Spatie Roles","S3","Redis"],
      banner: "linear-gradient(135deg,#14b8a6,#6366f1)",
      detail: "Build a full-featured project management backend similar to Jira. Implement RBAC, sprint management, activity logs, and file uploads to S3.",
      references: [
        { label: "Laravel Sanctum", url: "https://laravel.com/docs/12.x/sanctum" },
        { label: "AWS S3 Docs", url: "https://docs.aws.amazon.com/s3/" }
      ]
    },
    {
      icon: "activity",
      iconBg: "rgba(59,130,246,.15)", iconColor: "#60a5fa",
      difficulty: "medium", diffLabel: "Intermediate",
      title: "Webhook Processing Service",
      github: "",
      desc: "Build a resilient webhook ingestion service with signature verification, retries, idempotency, and event replay.",
      stack: ["Laravel","Redis","MySQL","Docker"],
      banner: "linear-gradient(135deg,#2563eb,#0ea5e9)",
      detail: "Build a production-style webhook pipeline that verifies signatures, stores immutable event logs, retries transient failures, and supports safe replay.",
      references: [
        { label: "Stripe Webhooks", url: "https://docs.stripe.com/webhooks" },
        { label: "Hookdeck Webhooks Reliability Guide", url: "https://hookdeck.com/webhooks/guides" }
      ]
    },
    {
      icon: "shield",
      iconBg: "rgba(16,185,129,.15)", iconColor: "#34d399",
      difficulty: "hard", diffLabel: "Advanced",
      title: "OAuth2 / OpenID Connect Identity Service",
      github: "",
      desc: "Build an auth server supporting OAuth2 flows, JWT claims, refresh tokens, scopes, and OpenID Connect user info endpoints.",
      stack: ["PHP","Laravel","PostgreSQL","Redis","Docker"],
      banner: "linear-gradient(135deg,#10b981,#0ea5e9)",
      detail: "Implement authorization code flow with PKCE, token issuance, refresh token rotation, scope checks, and secure token introspection endpoints.",
      references: [
        { label: "OAuth 2.0 RFC 6749", url: "https://datatracker.ietf.org/doc/html/rfc6749" },
        { label: "OpenID Connect Core 1.0", url: "https://openid.net/specs/openid-connect-core-1_0.html" },
        { label: "OAuth 2.0 Security BCP", url: "https://datatracker.ietf.org/doc/html/rfc9126" }
      ]
    },
    {
      icon: "workflow",
      iconBg: "rgba(99,102,241,.15)", iconColor: "#a5b4fc",
      difficulty: "medium", diffLabel: "Intermediate",
      title: "Feature Flag Management API",
      github: "",
      desc: "Build feature flag evaluation and rollout API with environments, targeting rules, audit history, and SDK-friendly endpoints.",
      stack: ["PHP","MySQL","Redis","Docker"],
      banner: "linear-gradient(135deg,#6366f1,#22d3ee)",
      detail: "Create rule-based flag evaluation (user segment, percentage rollout), publish config snapshots, and provide low-latency read endpoints.",
      references: [
        { label: "OpenFeature Specification", url: "https://openfeature.dev/specification/" },
        { label: "Unleash Feature Flag Principles", url: "https://docs.getunleash.io/topics/feature-flags/feature-flag-best-practices" }
      ]
    }
  ],
  real: [
    {
      icon: "hospital",
      iconBg: "rgba(16,185,129,.15)", iconColor: "#34d399",
      difficulty: "hard", diffLabel: "Advanced",
      title: "Healthcare Appointment System",
      github: "",
      desc: "Real-world clinic system: doctor scheduling, patient records (HIPAA considerations), notifications, billing.",
      stack: ["Laravel","MySQL","Twilio SMS","Stripe","Docker"],
      banner: "linear-gradient(135deg,#10b981,#3b82f6)",
      detail: "A production-ready system used in actual clinics. Covers complex scheduling logic, patient data privacy, SMS notifications, and payment processing.",
      references: [
        { label: "Twilio Messaging Docs", url: "https://www.twilio.com/docs/messaging" },
        { label: "Stripe API", url: "https://docs.stripe.com/api" }
      ]
    },
    {
      icon: "building",
      iconBg: "rgba(139,92,246,.15)", iconColor: "#a78bfa",
      difficulty: "hard", diffLabel: "Advanced",
      title: "Multi-Tenant SaaS API",
      github: "",
      desc: "Build a SaaS backend with multi-tenancy: per-tenant databases, subscription billing, onboarding, usage metering.",
      stack: ["Laravel","Tenancy for Laravel","Stripe","Redis","Horizon"],
      banner: "linear-gradient(135deg,#7c3aed,#c026d3)",
      detail: "A complete multi-tenant SaaS architecture. Separate databases per tenant, Stripe subscription management, feature flags, and usage-based billing.",
      references: [
        { label: "Laravel Horizon", url: "https://laravel.com/docs/12.x/horizon" },
        { label: "Stripe Billing", url: "https://docs.stripe.com/billing" }
      ]
    },
    {
      icon: "package",
      iconBg: "rgba(245,158,11,.15)", iconColor: "#fbbf24",
      difficulty: "hard", diffLabel: "Advanced",
      title: "Inventory & Supply Chain API",
      github: "",
      desc: "Full supply chain management: warehouses, suppliers, purchase orders, inventory tracking, barcode scanning.",
      stack: ["Symfony","Doctrine","RabbitMQ","PostgreSQL","Docker"],
      banner: "linear-gradient(135deg,#f59e0b,#ef4444)",
      detail: "A Symfony-based inventory management system used in real warehouses. Event-driven architecture with RabbitMQ for stock updates and order processing.",
      references: [
        { label: "Symfony Docs", url: "https://symfony.com/doc/current/" },
        { label: "Doctrine ORM Docs", url: "https://www.doctrine-project.org/projects/doctrine-orm/en/3.2/index.html" }
      ]
    },
    {
      icon: "smartphone",
      iconBg: "rgba(236,72,153,.15)", iconColor: "#f472b6",
      difficulty: "medium", diffLabel: "Intermediate",
      title: "Social Media API (Instagram Clone)",
      github: "",
      desc: "Social network backend: posts, stories, following, feeds (algorithmic), notifications, search.",
      stack: ["Laravel","Elasticsearch","S3","Redis","Sanctum"],
      banner: "linear-gradient(135deg,#e8175d,#f59e0b)",
      detail: "Build the backend that powers an Instagram-like app. Feed algorithm, media uploads, Elasticsearch for search, real-time notifications, and follower graphs.",
      references: [
        { label: "Elasticsearch Guide", url: "https://www.elastic.co/guide/" },
        { label: "Laravel Sanctum", url: "https://laravel.com/docs/12.x/sanctum" }
      ]
    },
    {
      icon: "shoppingCart",
      iconBg: "rgba(245,158,11,.15)", iconColor: "#fbbf24",
      difficulty: "hard", diffLabel: "Advanced",
      title: "Event-Driven Order Platform",
      github: "",
      desc: "Order lifecycle backend using asynchronous events: checkout, inventory reservation, payment events, and shipping orchestration.",
      stack: ["Laravel","RabbitMQ","Redis","MySQL","Docker"],
      banner: "linear-gradient(135deg,#f59e0b,#ef4444)",
      detail: "Implement event-driven order processing with idempotent consumers, dead-letter handling, and compensation flows for partial failures.",
      references: [
        { label: "RabbitMQ Tutorials", url: "https://www.rabbitmq.com/tutorials" },
        { label: "microservices.io - Saga Pattern", url: "https://microservices.io/patterns/data/saga.html" }
      ]
    },
    {
      icon: "shield",
      iconBg: "rgba(239,68,68,.15)", iconColor: "#f87171",
      difficulty: "hard", diffLabel: "Advanced",
      title: "Audit Trail & Compliance Service",
      github: "",
      desc: "Immutable audit logging service for security/compliance use-cases with tamper-evident event records and retention controls.",
      stack: ["PHP","PostgreSQL","Redis","Docker","Nginx"],
      banner: "linear-gradient(135deg,#b91c1c,#ef4444)",
      detail: "Build an append-only audit pipeline with actor/context metadata, immutable event history, retention policy, and query endpoints for security reviews.",
      references: [
        { label: "OWASP Logging Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html" },
        { label: "NIST SP 800-53 AU (Audit and Accountability)", url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final" }
      ]
    },
    {
      icon: "creditCard",
      iconBg: "rgba(34,211,238,.15)", iconColor: "#22d3ee",
      difficulty: "hard", diffLabel: "Advanced",
      title: "Subscription Billing Platform",
      github: "",
      desc: "Recurring billing backend with plans, proration handling, invoices, dunning, and webhook-driven account state synchronization.",
      stack: ["Laravel","MySQL","Redis","Stripe API","Docker"],
      banner: "linear-gradient(135deg,#0ea5e9,#6366f1)",
      detail: "Implement subscription lifecycle management (trial, active, past_due, canceled), invoice events, webhook retries, and reconciliation jobs.",
      references: [
        { label: "Stripe Billing Docs", url: "https://docs.stripe.com/billing" },
        { label: "Stripe Subscriptions API", url: "https://docs.stripe.com/api/subscriptions" },
        { label: "Stripe Webhooks", url: "https://docs.stripe.com/webhooks" }
      ]
    },
    {
      icon: "activity",
      iconBg: "rgba(16,185,129,.15)", iconColor: "#34d399",
      difficulty: "hard", diffLabel: "Advanced",
      title: "Data Ingestion & ETL API",
      github: "",
      desc: "High-throughput ingestion service for CSV/JSON events with validation pipelines, retry queues, and warehouse-ready exports.",
      stack: ["PHP","RabbitMQ","PostgreSQL","Redis","Docker"],
      banner: "linear-gradient(135deg,#10b981,#22d3ee)",
      detail: "Build ingestion endpoints, schema validation, async normalization workers, dead-letter handling, and incremental export jobs.",
      references: [
        { label: "RabbitMQ Docs", url: "https://www.rabbitmq.com/docs" },
        { label: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" },
        { label: "OpenTelemetry Docs", url: "https://opentelemetry.io/docs/" }
      ]
    },
    {
      icon: "shield",
      iconBg: "rgba(99,102,241,.15)", iconColor: "#a5b4fc",
      difficulty: "hard", diffLabel: "Advanced",
      title: "API Gateway & Rate Limiting Service",
      github: "",
      desc: "Edge API service handling auth propagation, tenant-aware rate limits, quota policies, and standardized error responses.",
      stack: ["PHP","Redis","Nginx","PostgreSQL","Docker"],
      banner: "linear-gradient(135deg,#4338ca,#0ea5e9)",
      detail: "Build gateway routing with token validation, per-tenant throttling, request correlation IDs, and RFC-based rate-limit and error headers for client reliability.",
      references: [
        { label: "HTTP Semantics (RFC 9110)", url: "https://datatracker.ietf.org/doc/html/rfc9110" },
        { label: "RateLimit Fields for HTTP (RFC 9331)", url: "https://datatracker.ietf.org/doc/html/rfc9331" },
        { label: "OWASP API Security Top 10", url: "https://owasp.org/API-Security/" }
      ]
    }
  ],
  capstone: [
    {
      icon: "curlyBraces",
      iconBg: "rgba(59,130,246,.15)", iconColor: "#60a5fa",
      difficulty: "hard", diffLabel: "Expert",
      title: "Build Your Own PHP Framework",
      github: "",
      desc: "Create a PHP framework from scratch: router, DI container, ORM, middleware pipeline, templating engine.",
      stack: ["PHP 8.3","Composer","PSR Standards","PHPUnit"],
      banner: "linear-gradient(135deg,#1d4ed8,#7c3aed)",
      detail: "A deep engineering challenge. Build every layer of a PHP framework from scratch to understand how frameworks like Laravel and Symfony work internally through simplified implementations.",
      references: [
        { label: "PSR Standards", url: "https://www.php-fig.org/psr/" },
        { label: "Composer Documentation", url: "https://getcomposer.org/doc/" }
      ]
    },
    {
      icon: "cloud",
      iconBg: "rgba(239,68,68,.15)", iconColor: "#f87171",
      difficulty: "hard", diffLabel: "Expert",
      title: "Distributed File Storage Service",
      github: "",
      desc: "S3-compatible file storage API: chunked uploads, CDN distribution, access control, storage tiers.",
      stack: ["PHP","MySQL","Redis","Docker","Nginx","RabbitMQ"],
      banner: "linear-gradient(135deg,#ef4444,#f59e0b)",
      detail: "Build a distributed file storage system from the ground up. Handle chunked uploads, distribute files across storage nodes, implement access control and CDN integration.",
      references: [
        { label: "AWS S3 API Reference", url: "https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html" },
        { label: "Nginx Docs", url: "https://nginx.org/en/docs/" }
      ]
    },
    {
      icon: "barChart",
      iconBg: "rgba(16,185,129,.15)", iconColor: "#34d399",
      difficulty: "hard", diffLabel: "Expert",
      title: "Real-Time API Analytics Pipeline",
      github: "",
      desc: "Design a near real-time analytics backend for API traffic with ingestion, aggregation, and dashboard-ready metrics.",
      stack: ["PHP","Redis","RabbitMQ","PostgreSQL","Docker"],
      banner: "linear-gradient(135deg,#10b981,#0ea5e9)",
      detail: "Build an event ingestion pipeline for API logs, process metrics in workers, and expose low-latency dashboards for operational insights.",
      references: [
        { label: "OpenTelemetry Docs", url: "https://opentelemetry.io/docs/" },
        { label: "Prometheus Docs", url: "https://prometheus.io/docs/" }
      ]
    },
    {
      icon: "workflow",
      iconBg: "rgba(99,102,241,.15)", iconColor: "#a5b4fc",
      difficulty: "hard", diffLabel: "Expert",
      title: "Event Sourcing Ledger Engine",
      github: "",
      desc: "Build an append-only financial/event ledger with projections, replay, snapshotting, and strict consistency checks.",
      stack: ["PHP","PostgreSQL","Redis","RabbitMQ","Docker"],
      banner: "linear-gradient(135deg,#6366f1,#22d3ee)",
      detail: "Implement write model + read projections, event replay tooling, deterministic versioning, and background rebuild pipelines for auditability.",
      references: [
        { label: "microservices.io Event Sourcing", url: "https://microservices.io/patterns/data/event-sourcing.html" },
        { label: "Martin Fowler Event Sourcing", url: "https://martinfowler.com/eaaDev/EventSourcing.html" },
        { label: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" }
      ]
    },
    {
      icon: "creditCard",
      iconBg: "rgba(14,165,233,.15)", iconColor: "#38bdf8",
      difficulty: "hard", diffLabel: "Expert",
      title: "Payment Orchestration & Reconciliation Engine",
      github: "",
      desc: "Provider-agnostic payment orchestration service with idempotent charge flows, webhook reconciliation, and dispute lifecycle tracking.",
      stack: ["PHP","PostgreSQL","Redis","RabbitMQ","Docker"],
      banner: "linear-gradient(135deg,#0ea5e9,#1d4ed8)",
      detail: "Implement orchestration across multiple PSPs, idempotency-key enforcement, ledger-safe status transitions, and automatic reconciliation between provider events and internal records.",
      references: [
        { label: "Stripe Idempotent Requests", url: "https://docs.stripe.com/api/idempotent_requests" },
        { label: "PayPal Webhooks", url: "https://developer.paypal.com/api/rest/webhooks/" },
        { label: "PCI DSS Overview", url: "https://www.pcisecuritystandards.org/standards/pci-dss/" }
      ]
    }
  ]
};

// =============================================
// BEST PRACTICES DATA
// =============================================
const PRACTICES_DATA = [
  {
    icon: "typewriter",
    iconBg: "rgba(139,92,246,.15)", iconColor: "#a78bfa",
    title: "Prefer Typed Properties & Return Types",
    desc: "Enable strict_types=1 where compatible and use clear type declarations. PHP 8 provides union types, nullable types, intersection types, and the never return type.",
    code: `declare(strict_types=1);\n\nclass UserService\n{\n    <span class="kw">public function</span> <span class="fn">register</span>(\n        <span class="tp">string</span> $email,\n        <span class="tp">string</span> $password\n    ): <span class="cls">User</span> {\n        <span class="cm">// Type system enforces correctness</span>\n    }\n}`,
    tags: ["PHP 8+","Type Safety","strict_types"]
  },
  {
    icon: "database",
    iconBg: "rgba(6,182,212,.15)", iconColor: "#22d3ee",
    title: "Repository Pattern for Database Access",
    desc: "Avoid scattering SQL in controllers. Use repositories or query services to isolate data access logic and improve testability.",
    code: `<span class="kw">interface</span> <span class="cls">UserRepositoryInterface</span>\n{\n    <span class="kw">public function</span> <span class="fn">findById</span>(<span class="tp">int</span> $id): <span class="tp">?User</span>;\n    <span class="kw">public function</span> <span class="fn">save</span>(<span class="cls">User</span> $user): <span class="tp">void</span>;\n}\n\n<span class="kw">class</span> <span class="cls">MySQLUserRepository</span> <span class="kw">implements</span> <span class="cls">UserRepositoryInterface</span>\n{\n    <span class="cm">// Implementation isolated here</span>\n}`,
    tags: ["Repository Pattern","SOLID","Testability"]
  },
  {
    icon: "gitBranch",
    iconBg: "rgba(16,185,129,.15)", iconColor: "#34d399",
    title: "Constructor Injection (Dependency Injection)",
    desc: "Prefer constructor injection over manual instantiation inside classes. It improves decoupling and makes testing easier.",
    code: `<span class="kw">class</span> <span class="cls">OrderService</span>\n{\n    <span class="kw">public function</span> <span class="fn">__construct</span>(\n        <span class="kw">private readonly</span> <span class="cls">OrderRepository</span> $orders,\n        <span class="kw">private readonly</span> <span class="cls">Mailer</span> $mailer,\n        <span class="kw">private readonly</span> <span class="cls">Logger</span> $logger\n    ) {}\n}`,
    tags: ["DI","SOLID","Testability","PHP 8.1"]
  },
  {
    icon: "alertTriangle",
    iconBg: "rgba(239,68,68,.15)", iconColor: "#f87171",
    title: "Validate and Sanitize User Input",
    desc: "Validate and sanitize every piece of data from users. Use prepared statements. Validate data types and business rules before processing.",
    code: `<span class="cm">// BAD: SQL Injection waiting to happen</span>\n$sql = <span class="str">"SELECT * FROM users WHERE email = '$email'"</span>;\n\n<span class="cm">// GOOD: Always use prepared statements</span>\n$stmt = $pdo->prepare(\n    <span class="str">'SELECT * FROM users WHERE email = ?'</span>\n);\n$stmt->execute([$email]);`,
    tags: ["Security","SQL Injection","PDO","Validation"]
  },
  {
    icon: "hash",
    iconBg: "rgba(99,102,241,.15)", iconColor: "#a5b4fc",
    title: "Use Enums for Type-Safe Constants (PHP 8.1+)",
    desc: "Replace class constants or strings with native PHP 8.1 Enums. Backed enums work with databases; pure enums work for states.",
    code: `<span class="kw">enum</span> <span class="cls">OrderStatus</span>: <span class="tp">string</span>\n{\n    <span class="kw">case</span> Pending = <span class="str">'pending'</span>;\n    <span class="kw">case</span> Processing = <span class="str">'processing'</span>;\n    <span class="kw">case</span> Shipped = <span class="str">'shipped'</span>;\n    <span class="kw">case</span> Cancelled = <span class="str">'cancelled'</span>;\n}\n\n$order->status = <span class="cls">OrderStatus</span>::Processing;`,
    tags: ["PHP 8.1","Enums","Type Safety"]
  },
  {
    icon: "ruler",
    iconBg: "rgba(245,158,11,.15)", iconColor: "#fbbf24",
    title: "Follow PSR Standards (PSR-1, PSR-2, PSR-12)",
    desc: "Use PHP-CS-Fixer or PHP_CodeSniffer to enforce PSR-12 coding style. Consistent formatting improves readability and review quality.",
    code: `<span class="cm"># Install PHP-CS-Fixer</span>\ncomposer require --dev \\\n    friendsofphp/php-cs-fixer\n\n<span class="cm"># Auto-fix all code</span>\n./vendor/bin/php-cs-fixer fix \\\n    --rules=@PSR12`,
    tags: ["PSR-12","Code Style","CS-Fixer"]
  },
  {
    icon: "zap",
    iconBg: "rgba(16,185,129,.15)", iconColor: "#34d399",
    title: "Use OPcache in Production",
    desc: "PHP OPcache stores precompiled script bytecode in memory and can significantly improve performance. Real-world gains vary by workload and deployment setup.",
    code: `<span class="cm">; php.ini — production settings</span>\nopcache.enable=1\nopcache.memory_consumption=256\nopcache.max_accelerated_files=20000\nopcache.validate_timestamps=0\nopcache.preload=/app/preload.php`,
    tags: ["OPcache","Performance","Production"]
  },
  {
    icon: "checkCircle",
    iconBg: "rgba(139,92,246,.15)", iconColor: "#a78bfa",
    title: "Write Tests First (TDD)",
    desc: "A common TDD flow is Red → Green → Refactor. Prioritize coverage for critical paths using PHPUnit or Pest.",
    code: `<span class="kw">it</span>(<span class="str">'creates an order successfully'</span>, <span class="kw">function</span> () {\n    $user = <span class="cls">User</span>::factory()->create();\n    $product = <span class="cls">Product</span>::factory()->create();\n\n    $response = $this->actingAs($user)\n        ->post(<span class="str">'/api/orders'</span>, [\n            <span class="str">'product_id'</span> => $product->id\n        ]);\n\n    $response->assertStatus(201);\n});`,
    tags: ["TDD","PHPUnit","Pest","Testing"]
  },
  {
    icon: "fileCode",
    iconBg: "rgba(6,182,212,.15)", iconColor: "#22d3ee",
    title: "Use DTOs for Data Transfer",
    desc: "Use Data Transfer Objects (DTOs) instead of loose arrays for data passing between layers. Readonly classes in PHP 8.2 are perfect for this.",
    code: `<span class="kw">readonly class</span> <span class="cls">CreateUserDTO</span>\n{\n    <span class="kw">public function</span> <span class="fn">__construct</span>(\n        <span class="kw">public</span> <span class="tp">string</span> $name,\n        <span class="kw">public</span> <span class="tp">string</span> $email,\n        <span class="kw">public</span> <span class="tp">string</span> $role = <span class="str">'user'</span>\n    ) {}\n}`,
    tags: ["DTO","PHP 8.2","Architecture"]
  },
  {
    icon: "repeat",
    iconBg: "rgba(245,158,11,.15)", iconColor: "#fbbf24",
    title: "Queue Heavy Jobs — Don't Block HTTP",
    desc: "Never block the HTTP request with slow operations. Send emails, generate PDFs, call external APIs — put them in queues and respond immediately.",
    code: `<span class="cm">// BAD: Blocks the request for 3 seconds</span>\n<span class="cls">Mail</span>::send(<span class="str">'welcome'</span>, $data, $message);\n\n<span class="cm">// GOOD: Return immediately, send later</span>\n<span class="cls">SendWelcomeEmail</span>::dispatch($user)\n    ->onQueue(<span class="str">'emails'</span>)\n    ->delay(now()->addSeconds(5));`,
    tags: ["Queues","Laravel","Performance","UX"]
  },
  {
    icon: "box",
    iconBg: "rgba(16,185,129,.15)", iconColor: "#34d399",
    title: "One Class, One Responsibility (SRP)",
    desc: "Classes should have only one reason to change. A UserController should not send emails, write to files, or process payments — delegate to services.",
    code: `<span class="cm">// BAD: Controller doing too much</span>\n<span class="kw">class</span> <span class="cls">RegisterController</span> {\n    <span class="kw">public function</span> <span class="fn">register</span>() {\n        <span class="cm">// validates + saves + sends email + logs</span>\n    }\n}\n<span class="cm">// GOOD: Delegate to service</span>\n$this->userService->register($dto);`,
    tags: ["SRP","SOLID","Architecture"]
  },
  {
    icon: "map",
    iconBg: "rgba(139,92,246,.15)", iconColor: "#a78bfa",
    title: "Use Value Objects for Domain Concepts",
    desc: "Wrap primitive types in value objects when they carry domain meaning: Money, Email, PhoneNumber. Enforce invariants in the constructor.",
    code: `<span class="kw">readonly class</span> <span class="cls">Email</span>\n{\n    <span class="kw">public function</span> <span class="fn">__construct</span>(\n        <span class="kw">public readonly</span> <span class="tp">string</span> $value\n    ) {\n        <span class="kw">if</span> (!filter_var($value, FILTER_VALIDATE_EMAIL))\n            <span class="kw">throw new</span> <span class="cls">InvalidEmailException</span>();\n    }\n}`,
    tags: ["Value Objects","DDD","Domain Model"]
  },
  {
    icon: "barChart",
    iconBg: "rgba(6,182,212,.15)", iconColor: "#22d3ee",
    title: "Profile Slow Queries With EXPLAIN",
    desc: "For MySQL-heavy apps, interviewers expect you to know how to read EXPLAIN plans, verify index usage, and avoid full table scans on hot endpoints.",
    code: `<span class="cm">-- Check query plan first</span>\nEXPLAIN SELECT id, email\nFROM users\nWHERE email = <span class="str">'dev@example.com'</span>;\n\n<span class="cm">-- Add index when access pattern is stable</span>\nCREATE INDEX idx_users_email ON users(email);`,
    tags: ["MySQL","Performance","EXPLAIN","Indexing"]
  },
  {
    icon: "repeat",
    iconBg: "rgba(16,185,129,.15)", iconColor: "#34d399",
    title: "Use DB Transactions For Critical Writes",
    desc: "Any flow that updates balances, inventory, or multi-table state must be atomic. In Laravel, wrap this logic in DB::transaction and keep side effects outside commit boundaries.",
    code: `<span class="kw">DB</span>::<span class="fn">transaction</span>(<span class="kw">function</span> () <span class="kw">use</span> ($orderData) {\n    $order = <span class="cls">Order</span>::create($orderData);\n    <span class="cls">Inventory</span>::where(<span class="str">'sku'</span>, $orderData[<span class="str">'sku'</span>])\n        ->decrement(<span class="str">'quantity'</span>, $orderData[<span class="str">'qty'</span>]);\n});`,
    tags: ["Laravel","MySQL","Transactions","Data Integrity"]
  },
  {
    icon: "workflow",
    iconBg: "rgba(99,102,241,.15)", iconColor: "#a5b4fc",
    title: "Strategy Pattern for Payment Providers",
    desc: "Use Strategy when the business flow is stable but provider behavior changes (Stripe, PayPal, bank transfer). This keeps checkout logic open for extension.",
    code: `<span class="kw">interface</span> <span class="cls">PaymentStrategy</span> {\n    <span class="kw">public function</span> <span class="fn">charge</span>(<span class="tp">int</span> $cents): <span class="tp">string</span>;\n}\n\n<span class="kw">final class</span> <span class="cls">StripeStrategy</span> <span class="kw">implements</span> <span class="cls">PaymentStrategy</span> { ... }\n\n<span class="kw">final class</span> <span class="cls">CheckoutService</span> {\n    <span class="kw">public function</span> <span class="fn">__construct</span>(<span class="kw">private</span> <span class="cls">PaymentStrategy</span> $strategy) {}\n}`,
    tags: ["Design Pattern","Strategy","Architecture","Extensibility"]
  },
  {
    icon: "database",
    iconBg: "rgba(16,185,129,.15)", iconColor: "#34d399",
    title: "Prevent N+1 Queries in Laravel",
    desc: "Use eager loading in Laravel Eloquent on high-traffic endpoints to avoid N+1 query explosions and unstable response times.",
    code: `<span class="cm">// BAD: triggers N+1 when accessing $post->author in loop</span>\n$posts = <span class="cls">Post</span>::latest()->take(20)->get();\n\n<span class="cm">// GOOD: eager load related model</span>\n$posts = <span class="cls">Post</span>::with(<span class="str">'author'</span>)\n    ->latest()\n    ->take(20)\n    ->get();`,
    tags: ["Laravel","Eloquent","MySQL","Performance"]
  },
  {
    icon: "checkCircle",
    iconBg: "rgba(245,158,11,.15)", iconColor: "#fbbf24",
    title: "Use Form Request Validation in Laravel",
    desc: "Move request validation rules out of controllers into FormRequest classes for cleaner code, reusable rules, and safer API boundaries.",
    code: `<span class="kw">final class</span> <span class="cls">StoreOrderRequest</span> <span class="kw">extends</span> <span class="cls">FormRequest</span>\n{\n    <span class="kw">public function</span> <span class="fn">rules</span>(): <span class="tp">array</span>\n    {\n        <span class="kw">return</span> [\n            <span class="str">'sku'</span> => [<span class="str">'required'</span>, <span class="str">'string'</span>],\n            <span class="str">'qty'</span> => [<span class="str">'required'</span>, <span class="str">'integer'</span>, <span class="str">'min:1'</span>],\n        ];\n    }\n}`,
    tags: ["Laravel","Validation","API Safety","Maintainability"]
  },
  {
    icon: "ruler",
    iconBg: "rgba(236,72,153,.15)", iconColor: "#f472b6",
    title: "Treat Migrations as Production Contracts",
    desc: "Use Laravel migrations carefully for schema evolution: backward-compatible changes first, then app rollout, then cleanup.",
    code: `<span class="cm">// Phase 1: additive change</span>\nSchema::table(<span class="str">'orders'</span>, <span class="kw">function</span> (<span class="cls">Blueprint</span> $table) {\n    $table->string(<span class="str">'external_id'</span>)->nullable()->index();\n});\n\n<span class="cm">// Phase 2: deploy app writing both old/new fields</span>\n<span class="cm">// Phase 3: backfill + enforce constraints in a follow-up migration</span>`,
    tags: ["Laravel","MySQL","Migrations","Production Safety"]
  },
  {
    icon: "repeat",
    iconBg: "rgba(59,130,246,.15)", iconColor: "#60a5fa",
    title: "Use Idempotency Keys for Retry-Safe APIs",
    desc: "For payments, order creation, and webhook consumers, idempotency prevents duplicate side effects during network retries or client timeouts.",
    code: `<span class="kw">$key</span> = $request->header(<span class="str">'Idempotency-Key'</span>);\n\n<span class="kw">if</span> ($store-><span class="fn">exists</span>($key)) {\n    <span class="kw">return</span> $store-><span class="fn">response</span>($key);\n}\n\n$result = $service-><span class="fn">charge</span>($dto);\n$store-><span class="fn">remember</span>($key, $result);\n<span class="kw">return</span> $result;`,
    tags: ["Idempotency","Payments","Webhooks","Reliability"]
  },
  {
    icon: "alertTriangle",
    iconBg: "rgba(14,165,233,.15)", iconColor: "#38bdf8",
    title: "Standardize API Errors With Problem Details",
    desc: "Use RFC Problem Details so clients receive consistent machine-readable errors across all endpoints and services.",
    code: `<span class="kw">return</span> response()->json([\n  <span class="str">'type'</span> => <span class="str">'https://api.example.com/errors/validation-failed'</span>,\n  <span class="str">'title'</span> => <span class="str">'Validation failed'</span>,\n  <span class="str">'status'</span> => 422,\n  <span class="str">'detail'</span> => <span class="str">'One or more fields are invalid.'</span>,\n  <span class="str">'instance'</span> => $request->path(),\n], 422);`,
    tags: ["API Design","RFC 9457","Error Handling","Client Reliability"]
  },
  {
    icon: "barChart",
    iconBg: "rgba(16,185,129,.15)", iconColor: "#34d399",
    title: "Emit Correlated Logs, Metrics, and Traces",
    desc: "Production debugging is faster when each request carries a trace/correlation ID and logs are structured for search and alerting.",
    code: `<span class="kw">$traceId</span> = $request->header(<span class="str">'traceparent'</span>) ?? Str::uuid()->toString();\n\n$logger-><span class="fn">info</span>(<span class="str">'Order created'</span>, [\n  <span class="str">'trace_id'</span> => $traceId,\n  <span class="str">'order_id'</span> => $order->id,\n  <span class="str">'tenant_id'</span> => $tenantId,\n]);`,
    tags: ["Observability","OpenTelemetry","Logging","SRE Basics"]
  }
];

// =============================================
// USE CASES DATA
// =============================================
const USECASES_DATA = [
  {
    logo: "lightning",
    bgColor: "rgba(59,130,246,.15)",
    iconColor: "#60a5fa",
    company: "Laravel Production Lifecycle",
    scale: "Documented release and support windows",
    desc: "Laravel publishes versioning and support policy windows, which directly impact production backend maintenance planning.",
    highlights: [
      "Major releases follow semantic versioning",
      "Bug-fix and security windows are clearly documented",
      "Operational planning is easier for backend teams",
      "Directly relevant to Laravel API maintenance"
    ],
    tech: ["Laravel","PHP","Release Management","Backend Ops"],
    link: "https://laravel.com/docs/12.x/releases",
    sourceLabel: "Laravel Release Notes",
    lastReviewed: "2026-04-10",
    claimType: "static",
    verificationNote: "Policy details are official framework documentation and should be rechecked each major release."
  },
  {
    logo: "database",
    bgColor: "rgba(99,102,241,.15)",
    iconColor: "#a5b4fc",
    company: "MySQL Query Analysis",
    scale: "Official EXPLAIN / EXPLAIN ANALYZE workflow",
    desc: "MySQL documentation provides direct guidance for execution-plan analysis, essential for PHP backend endpoint performance tuning.",
    highlights: [
      "Identify full scans and missing index usage",
      "Compare plans before/after query changes",
      "Use plan data for backend optimization decisions",
      "Core skill for MySQL-heavy Laravel/PHP apps"
    ],
    tech: ["MySQL","EXPLAIN","Indexing","Backend Performance"],
    link: "https://dev.mysql.com/doc/refman/8.0/en/explain.html",
    sourceLabel: "MySQL Manual",
    lastReviewed: "2026-04-10",
    claimType: "static",
    verificationNote: "Methodology is stable in official docs; examples and versions may evolve over releases."
  },
  {
    logo: "repeat",
    bgColor: "rgba(139,92,246,.15)",
    iconColor: "#a78bfa",
    company: "Laravel Transaction-Safe Flows",
    scale: "Atomic write patterns for critical operations",
    desc: "Laravel and MySQL patterns for transactional writes are essential for orders, inventory, and payment state integrity.",
    highlights: [
      "Use DB transactions for multi-step writes",
      "Separate side effects from commit boundaries",
      "Reduce partial-state failures in production",
      "Directly maps to e-commerce and billing backends"
    ],
    tech: ["Laravel","MySQL","Transactions","Data Integrity"],
    link: "https://laravel.com/docs/12.x/database#database-transactions",
    sourceLabel: "Laravel Database Docs",
    lastReviewed: "2026-04-10",
    claimType: "static",
    verificationNote: "Concept is stable; implementation details should follow framework-version docs."
  },
  {
    logo: "package",
    bgColor: "rgba(236,72,153,.15)",
    iconColor: "#f472b6",
    company: "Composer + Packagist Dependency Operations",
    scale: "Official package registry and dependency workflow",
    desc: "Composer documentation and Packagist are central to secure, maintainable PHP backend dependency management.",
    highlights: [
      "Dependency pinning and update strategy",
      "Package discovery from official registry",
      "Version constraints for production safety",
      "Critical for Laravel/PHP backend delivery"
    ],
    tech: ["Composer","Packagist","PHP","Laravel"],
    link: "https://getcomposer.org/doc/",
    sourceLabel: "Composer Docs",
    lastReviewed: "2026-04-10",
    claimType: "static",
    verificationNote: "Dependency-management principles are documentation-based and highly relevant to PHP backend projects."
  },
  {
    logo: "shield",
    bgColor: "rgba(6,182,212,.15)",
    iconColor: "#22d3ee",
    company: "Laravel Query Safety + SQL Injection Defense",
    scale: "Framework binding + OWASP guidance",
    desc: "Secure backend APIs depend on safe query construction and validation. Laravel query builder guidance aligns with OWASP SQL injection prevention.",
    highlights: [
      "Parameterized query patterns",
      "Validation and sanitization at request boundaries",
      "Avoid string-concatenated SQL in controllers",
      "Defense-in-depth for PHP/MySQL APIs"
    ],
    tech: ["Laravel","PHP","MySQL","OWASP"],
    link: "https://laravel.com/docs/12.x/queries",
    sourceLabel: "Laravel Query Builder",
    lastReviewed: "2026-04-10",
    claimType: "static",
    verificationNote: "Framework query guidance is paired with OWASP principles for backend security correctness."
  },
  {
    logo: "activity",
    bgColor: "rgba(16,185,129,.15)",
    iconColor: "#34d399",
    company: "Laravel Queues + Redis Workers",
    scale: "Asynchronous backend processing baseline",
    desc: "Laravel queue workers with Redis are a practical baseline for moving heavy backend tasks out of request-response paths.",
    highlights: [
      "Queue-heavy jobs avoid HTTP blocking",
      "Retry handling for transient failures",
      "Worker supervision for production stability",
      "Common requirement in Laravel backend roles"
    ],
    tech: ["Laravel","Redis","Queues","Backend Reliability"],
    link: "https://laravel.com/docs/12.x/queues",
    sourceLabel: "Laravel Queues",
    lastReviewed: "2026-04-10",
    claimType: "static",
    verificationNote: "Queue worker guidance is official framework documentation used in real backend operations."
  }
];

// =============================================
// DOCUMENTATION DATA (legacy - kept for compatibility)
// =============================================
const DOCS_DATA = [];

// =============================================
// WHY PHP DATA
// =============================================
const WHY_PHP_DATA = [
  {
    icon: 'zap',
    iconColor: '#fbbf24',
    iconBg: 'rgba(245,158,11,.18)',
    title: 'JIT Is Real, With Nuance',
    desc: 'Official PHP 8 notes: tracing JIT shows about 3x gains on synthetic benchmarks and 1.5-2x for some long-running apps, while typical web apps are often close to PHP 7.4.',
    highlight: '3x',
    highlightLabel: 'synthetic benchmark gains',
    tags: ['JIT Compiler', 'OPcache', 'PHP-FPM'],
    color: '#fbbf24',
    sourceLabel: 'PHP 8 Release Notes',
    sourceUrl: 'https://www.php.net/releases/8.0/en.php'
  },
  {
    icon: 'globe',
    iconColor: '#22d3ee',
    iconBg: 'rgba(6,182,212,.18)',
    title: 'Still Dominant On Server-Side Web',
    desc: 'W3Techs daily-updated data reports PHP at roughly 70%+ share among websites where the server-side language is known.',
    highlight: '70%+',
    highlightLabel: 'known server-side websites',
    tags: ['Native HTTP', 'Apache', 'Nginx'],
    color: '#22d3ee',
    sourceLabel: 'W3Techs',
    sourceUrl: 'https://w3techs.com/technologies/details/pl-php'
  },
  {
    icon: 'layers',
    iconColor: '#a78bfa',
    iconBg: 'rgba(139,92,246,.18)',
    title: 'Huge Package Ecosystem',
    desc: 'Packagist reports a very large ecosystem with public package/version statistics and long-term install metrics.',
    highlight: '400K+',
    highlightLabel: 'registered packages',
    tags: ['Packagist', 'Laravel', 'Symfony'],
    color: '#a78bfa',
    sourceLabel: 'Packagist Statistics',
    sourceUrl: 'https://packagist.org/statistics'
  },
  {
    icon: 'shield',
    iconColor: '#34d399',
    iconBg: 'rgba(16,185,129,.18)',
    title: 'Security Lifecycle Is Transparent',
    desc: 'PHP.net publishes branch support and end-of-life dates with migration guides, giving teams a concrete upgrade path for security maintenance.',
    highlight: 'EOL',
    highlightLabel: 'official branch timeline',
    tags: ['Argon2', 'OWASP', 'strict_types'],
    color: '#34d399',
    sourceLabel: 'PHP Supported Versions',
    sourceUrl: 'https://www.php.net/eol.php'
  },
  {
    icon: 'trendingUp',
    iconColor: '#f87171',
    iconBg: 'rgba(239,68,68,.18)',
    title: 'Framework Ecosystem Momentum',
    desc: 'Laravel and Symfony publish active ecosystem data, events, and community metrics, which maps directly to practical hiring demand for framework-ready backend developers.',
    highlight: 'Active',
    highlightLabel: 'framework ecosystem metrics',
    tags: ['High Demand', 'Laravel Jobs', 'Remote'],
    color: '#f87171',
    sourceLabel: 'Symfony Community Stats',
    sourceUrl: 'https://symfony.com/'
  },
  {
    icon: 'code',
    iconColor: '#60a5fa',
    iconBg: 'rgba(59,130,246,.18)',
    title: 'Modern Type System',
    desc: 'Official PHP release notes document modern language features such as union types, named arguments, attributes, match expressions, and stricter type/error behavior.',
    highlight: 'PHP 8+',
    highlightLabel: 'Modern type system',
    tags: ['Union Types', 'Enums', 'Readonly'],
    color: '#60a5fa',
    sourceLabel: 'PHP Release Notes',
    sourceUrl: 'https://www.php.net/releases/8.0/en.php'
  }
];

// =============================================
// GRAVEYARD DATA — PHP outlived them all
// =============================================
const GRAVEYARD_DATA = [
  {
    name: "Adobe Flash",
    years: "1996 – 2020",
    rip: "Retired",
    epitaph: "Adobe ended support for Flash Player after Dec 31, 2020 and blocked Flash content from Jan 12, 2021.",
    cause: "Official Adobe end-of-life",
    sourceLabel: "Adobe EOL Notice",
    sourceUrl: "https://www.adobe.com/products/flashplayer/end-of-life.html",
    color: "#e06b6b"
  },
  {
    name: "Internet Explorer 11",
    years: "2013 – 2022",
    rip: "Retired",
    epitaph: "Microsoft ended support for the IE11 desktop app on Windows 10 on June 15, 2022.",
    cause: "Official Microsoft lifecycle retirement",
    sourceLabel: "Microsoft Lifecycle",
    sourceUrl: "https://learn.microsoft.com/en-us/lifecycle/products/internet-explorer-11",
    color: "#94a3b8"
  },
  {
    name: "PHP 7.4 Branch",
    years: "2019 – 2022",
    rip: "Unsupported",
    epitaph: "PHP 7.4 reached end of life on Nov 28, 2022 per PHP's official unsupported-branches table.",
    cause: "Normal lifecycle progression to newer branches",
    sourceLabel: "PHP EOL",
    sourceUrl: "https://www.php.net/eol.php",
    color: "#38b2d4"
  },
  {
    name: "PHP 5.6 Branch",
    years: "2014 – 2018",
    rip: "Unsupported",
    epitaph: "PHP 5.6 reached end of life on Dec 31, 2018 according to the official PHP lifecycle page.",
    cause: "Legacy branch sunset",
    sourceLabel: "PHP EOL",
    sourceUrl: "https://www.php.net/eol.php",
    color: "#e8a838"
  },
  {
    name: "PHP 8.0 Branch",
    years: "2020 – 2023",
    rip: "Unsupported",
    epitaph: "PHP 8.0 reached end of life on Nov 26, 2023 and migration guidance points to newer supported versions.",
    cause: "Security lifecycle enforcement",
    sourceLabel: "PHP EOL",
    sourceUrl: "https://www.php.net/eol.php",
    color: "#5fb08a"
  },
  {
    name: "PHP 8.1 Branch",
    years: "2021 – 2025",
    rip: "Unsupported",
    epitaph: "PHP 8.1 reached end of life on Dec 31, 2025 and is listed as unsupported by the PHP team.",
    cause: "Branch ended after planned support window",
    sourceLabel: "PHP EOL",
    sourceUrl: "https://www.php.net/eol.php",
    color: "#a5b4e8"
  }
];

// =============================================
// HERO CLI COMMANDS — with human Easter eggs
// =============================================
const CLI_COMMANDS = {
  'help': {
    out: `<span class="co-section">Available commands:</span>\n  <span class="co-cmd">courses</span>           Browse PHP courses\n  <span class="co-cmd">books</span>             Curated book list\n  <span class="co-cmd">projects</span>          Real-world projects\n  <span class="co-cmd">quiz</span>              Skill assessment\n  <span class="co-cmd">about</span>             Meet the creator\n  <span class="co-cmd">php -v</span>            Version info\n  <span class="co-cmd">whoami</span>            Identity check\n  <span class="co-cmd">ls</span>                List sections\n  <span class="co-cmd">composer install</span>  Simulate install\n  <span class="co-cmd">clear</span>             Clear terminal`,
    action: null
  },
  'php -v': {
    out: `PHP 8.3.4 (cli) (built: Mar 15 2025)\nCopyright (c) The PHP Group\n<span class="co-ok">✓ JIT compiler: enabled</span>\n<span class="co-ok">✓ OPcache: enabled</span>\n<span class="co-ok">✓ Fiber support: native</span>`,
    action: null
  },
  'php --version': {
    out: `PHP 8.3.4 (cli) (built: Mar 15 2025)\nCopyright (c) The PHP Group`,
    action: null
  },
  'whoami': {
    out: `<span class="co-user">0xMOSTA</span> ← <span class="co-amber">Mostafa Essam</span>\nBackend Developer · Technical Author · PHP Educator\nBuilding: PHP Mastery Platform — the one I wish existed`,
    action: null
  },
  'ls': {
    out: `<span class="co-dir">courses/</span>      <span class="co-dir">books/</span>        <span class="co-dir">projects/</span>\n<span class="co-dir">practices/</span>    <span class="co-dir">usecases/</span>     <span class="co-dir">timeline/</span>\n<span class="co-dir">quiz/</span>         <span class="co-dir">snippets/</span>     <span class="co-dir">docs/</span>`,
    action: null
  },
  'pwd': {
    out: `/home/0xmosta/php-mastery-platform`,
    action: null
  },
  'courses': {
    out: `<span class="co-ok">→ Navigating to Courses...</span>`,
    action: () => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })
  },
  'books': {
    out: `<span class="co-ok">→ Navigating to Books...</span>`,
    action: () => document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' })
  },
  'projects': {
    out: `<span class="co-ok">→ Navigating to Projects...</span>`,
    action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  },
  'quiz': {
    out: `<span class="co-ok">→ Opening Skill Assessment...</span>`,
    action: () => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })
  },
  'about': {
    out: `<span class="co-ok">→ Navigating to Author section...</span>`,
    action: () => document.getElementById('author')?.scrollIntoView({ behavior: 'smooth' })
  },
  'composer install': {
    out: `Loading composer repositories with package information\nInstalling dependencies (including require-dev)...\n<span class="co-ok">✓</span> laravel/framework (v11.0.8)\n<span class="co-ok">✓</span> symfony/console (v7.2.1)\n<span class="co-ok">✓</span> guzzlehttp/guzzle (v7.8.1)\n<span class="co-ok">✓</span> doctrine/dbal (v3.8.0)\n<span class="co-ok">✓</span> phpunit/phpunit (v11.1.3)\nPackage manifest generated successfully.\n<span class="co-ok">Application ready.</span>`,
    action: null
  },
  'artisan': {
    out: `<span class="co-amber">Laravel Framework 11.0.8</span>\n\nUsage:\n  command [options] [arguments]\n\nHint: This is a PHP platform. Use real artisan in your terminal.`,
    action: null
  },
  // Easter eggs
  'node': {
    out: `<span class="co-err">bash: node: command not found</span>\n<span class="co-dim">Wrong platform. This is PHP Mastery.</span>\n<span class="co-dim">Try: php -v</span>`,
    action: null
  },
  'node -v': {
    out: `<span class="co-err">bash: node: command not found</span>\n<span class="co-dim">This is a PHP-only zone. No JavaScript runtimes allowed.</span>`,
    action: null
  },
  'python': {
    out: `<span class="co-err">bash: python: command not found</span>\n<span class="co-dim">Python? We have PHP. Still dominant on the web according to W3Techs.</span>`,
    action: null
  },
  'python3': {
    out: `<span class="co-err">bash: python3: command not found</span>\n<span class="co-dim">We appreciate the snake. PHP prefers the elephant.</span>`,
    action: null
  },
  'sudo rm -rf /': {
    out: `<span class="co-err">sudo: Permission denied</span>\n<span class="co-dim">Nice try. You don't have sudo on this platform.</span>\n<span class="co-dim">Complete the Advanced Security course first.</span>`,
    action: null
  },
  'rm -rf /': {
    out: `<span class="co-err">rm: cannot remove '/': Permission denied</span>\n<span class="co-dim">That's not how we do things here.</span>`,
    action: null
  },
  'exit': {
    out: `<span class="co-dim">There is no exit. Only deeper PHP mastery.</span>`,
    action: null
  },
  'sudo': {
    out: `<span class="co-err">sudo: command not found</span>\n<span class="co-dim">Root access is earned, not granted.</span>`,
    action: null
  },
  'hack': {
    out: `<span class="co-amber">Nice try.</span>\nThe only hacking we do here is Hacking bad code into clean architecture.\nTry: <span class="co-cmd">courses</span>`,
    action: null
  },
  '42': {
    out: `<span class="co-ok">Yes. The answer is 42.</span>\nAlso: the number of real-world projects on this platform.`,
    action: null
  }
};

const TESTIMONIALS_DATA = [
  {
    name: 'Adam Wathan',
    role: 'Founder',
    company: 'Tailwind',
    avatar: 'AW',
    avatarGradient: 'linear-gradient(135deg,#7c3aed,#06b6d4)',
    quote: 'I\'ve been using Laravel for nearly a decade and have never been tempted to switch to anything else.',
    tags: ['Laravel', 'PHP Ecosystem', 'Production'],
    sourceLabel: 'Laravel.com',
    sourceUrl: 'https://laravel.com/'
  },
  {
    name: 'Ian Callahan',
    role: 'Engineer',
    company: 'Harvard Art Museums',
    avatar: 'IC',
    avatarGradient: 'linear-gradient(135deg,#10b981,#3b82f6)',
    quote: 'Laravel is our sourdough starter and multitool for web projects large and small. 10 years in, it remains fresh and useful.',
    tags: ['Laravel', 'Web Apps', 'Long-Term Use'],
    sourceLabel: 'Laravel.com',
    sourceUrl: 'https://laravel.com/'
  },
  {
    name: 'Aaron Francis',
    role: 'Co-founder',
    company: 'Try Hard Studios',
    avatar: 'AF',
    avatarGradient: 'linear-gradient(135deg,#ec4899,#f59e0b)',
    quote: 'Laravel takes the pain out of building modern, scalable web apps.',
    tags: ['Laravel', 'Scalability', 'Developer Experience'],
    sourceLabel: 'Laravel.com',
    sourceUrl: 'https://laravel.com/'
  },
  {
    name: 'Erika Heidi',
    role: 'Creator',
    company: 'Minicli',
    avatar: 'EH',
    avatarGradient: 'linear-gradient(135deg,#f97316,#a78bfa)',
    quote: 'Laravel is a breath of fresh air in the PHP ecosystem, with a brilliant community around it.',
    tags: ['Community', 'Laravel', 'PHP'],
    sourceLabel: 'Laravel.com',
    sourceUrl: 'https://laravel.com/'
  }
];

const INTERVIEW_PLAYBOOKS_DATA = [
  {
    track: 'PHP Core Interview Playbook',
    icon: 'php',
    iconColor: '#a78bfa',
    iconBg: 'rgba(139,92,246,.18)',
    focus: 'Language internals, modern type system, runtime behavior, and upgrade strategy.',
    outcomes: [
      'Explain strict_types, union/intersection types, enums, and readonly behavior with tradeoffs.',
      'Describe OPCache and JIT realistically for web workloads vs CPU-heavy scripts.',
      'Defend migration planning using official supported-version windows.'
    ],
    drills: [
      'Refactor one legacy utility into typed DTO + enum based flow.',
      'Write two answers: "When JIT helps" and "When JIT does not materially help".',
      'Prepare a 2-minute branch-upgrade plan from unsupported to supported PHP.'
    ],
    references: [
      {
        label: 'PHP Supported Versions',
        url: 'https://www.php.net/supported-versions.php',
        note: 'Use this for lifecycle, support windows, and security timeline questions.'
      },
      {
        label: 'PHP 8.0 Release Notes (JIT + types)',
        url: 'https://www.php.net/releases/8.0/en.php',
        note: 'Ground performance and language-feature claims in official release notes.'
      },
      {
        label: 'Migration Guides (example: 8.4)',
        url: 'https://www.php.net/manual/en/migration84.php',
        note: 'Reference concrete backward-compatibility changes and migration risks.'
      }
    ]
  },
  {
    track: 'MySQL Interview Playbook',
    icon: 'database',
    iconColor: '#22d3ee',
    iconBg: 'rgba(6,182,212,.18)',
    focus: 'Execution plans, indexes, transaction semantics, and concurrency safety.',
    outcomes: [
      'Read EXPLAIN output and identify full scans, key usage, and join order concerns.',
      'Explain InnoDB transaction model basics: autocommit, consistent reads, isolation.',
      'Choose indexes based on query patterns rather than generic "index everything" advice.'
    ],
    drills: [
      'Take one slow query and document before/after EXPLAIN changes.',
      'Simulate a lost-update scenario and fix it using transaction + locking strategy.',
      'Prepare one STAR story on a production query-performance win.'
    ],
    references: [
      {
        label: 'MySQL EXPLAIN / EXPLAIN ANALYZE',
        url: 'https://dev.mysql.com/doc/refman/8.0/en/explain.html',
        note: 'Primary reference for query plan and runtime analysis explanations.'
      },
      {
        label: 'InnoDB Transaction Model',
        url: 'https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-model.html',
        note: 'Reference for isolation, autocommit, and transactional behavior.'
      },
      {
        label: 'MySQL Locking Reads',
        url: 'https://dev.mysql.com/doc/refman/8.0/en/innodb-locking-reads.html',
        note: 'Use when discussing SELECT ... FOR UPDATE and concurrency control.'
      }
    ]
  },
  {
    track: 'Laravel Interview Playbook',
    icon: 'lightning',
    iconColor: '#f87171',
    iconBg: 'rgba(239,68,68,.18)',
    focus: 'Safe query construction, deployment reliability, queues, and production hygiene.',
    outcomes: [
      'Explain query builder parameter binding and practical SQL injection safeguards.',
      'Describe deployment baseline: cache commands, APP_DEBUG off, queue workers.',
      'Show how to structure transactional writes and defer side effects to jobs/events.'
    ],
    drills: [
      'Convert one raw SQL endpoint to query builder with safe bindings.',
      'Create a deployment checklist from official Laravel deployment docs.',
      'Implement a transactional order write + queued follow-up email.'
    ],
    references: [
      {
        label: 'Laravel Query Builder',
        url: 'https://laravel.com/docs/12.x/queries',
        note: 'Use for parameter binding, query safety, and expressive SQL patterns.'
      },
      {
        label: 'Laravel Deployment',
        url: 'https://laravel.com/docs/12.x/deployment',
        note: 'Use for APP_DEBUG guidance, optimize commands, and production setup.'
      },
      {
        label: 'OWASP SQL Injection Prevention Cheat Sheet',
        url: 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html',
        note: 'Security backing for prepared statements and defense-in-depth answers.'
      }
    ]
  }
];

const INTERVIEW_QA_DATA = [
  {
    question: 'What is the practical effect of declare(strict_types=1) in PHP?',
    answer: 'Strict types enforce scalar type declarations at call boundaries for userland code. It improves predictability by rejecting implicit coercion for typed parameters and return values in strict files.',
    expectedSignal: 'Candidate can explain boundary behavior and avoid claiming it globally changes every runtime conversion.',
    references: [
      { label: 'PHP Type Declarations', url: 'https://www.php.net/manual/en/language.types.declarations.php' },
      { label: 'PHP Manual', url: 'https://www.php.net/manual/en/' }
    ]
  },
  {
    question: 'When should you trust JIT performance claims in PHP interviews?',
    answer: 'Use official release-note guidance: synthetic benchmarks can show large gains, while many web apps see modest impact compared to overall I/O and framework overhead. Position JIT as contextual, not universal.',
    expectedSignal: 'Candidate distinguishes CPU-bound workloads from request/DB/network-bound workloads.',
    references: [
      { label: 'PHP 8.0 Release Notes', url: 'https://www.php.net/releases/8.0/en.php' }
    ]
  },
  {
    question: 'How do you investigate a slow MySQL query in production?',
    answer: 'Start with EXPLAIN (and EXPLAIN ANALYZE when possible), inspect key usage, row estimates, join order, and scan type. Then adjust indexes or query shape and re-check plan changes before shipping.',
    expectedSignal: 'Candidate gives an iterative measurement workflow, not just "add index".',
    references: [
      { label: 'MySQL EXPLAIN', url: 'https://dev.mysql.com/doc/refman/8.0/en/explain.html' }
    ]
  },
  {
    question: 'How do transactions reduce data-integrity bugs in order/payment flows?',
    answer: 'Wrap dependent writes in one transaction so partial state cannot persist on failure. Use appropriate locking/isolation where concurrent writers can conflict, then commit atomically.',
    expectedSignal: 'Candidate connects atomicity to concrete multi-table flows and concurrency.',
    references: [
      { label: 'InnoDB Transaction Model', url: 'https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-model.html' },
      { label: 'InnoDB Locking Reads', url: 'https://dev.mysql.com/doc/refman/8.0/en/innodb-locking-reads.html' }
    ]
  },
  {
    question: 'How does Laravel help reduce SQL injection risk?',
    answer: 'Laravel query builder uses PDO parameter binding. You still validate inputs and avoid string-concatenated SQL. Pair framework safeguards with OWASP guidance for layered protection.',
    expectedSignal: 'Candidate avoids claiming framework magic eliminates all risk.',
    references: [
      { label: 'Laravel Queries', url: 'https://laravel.com/docs/12.x/queries' },
      { label: 'OWASP SQL Injection Prevention', url: 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html' }
    ]
  },
  {
    question: 'What are non-negotiables before Laravel production deployment?',
    answer: 'Disable APP_DEBUG, run config/route/view cache commands where appropriate, ensure queue workers are supervised, and verify environment-specific configuration and health checks.',
    expectedSignal: 'Candidate gives operational specifics, not only code-level answers.',
    references: [
      { label: 'Laravel Deployment', url: 'https://laravel.com/docs/12.x/deployment' }
    ]
  }
];

const MARKET_MAP_DATA = [
  {
    role: 'PHP Backend Engineer',
    level: 'Mid to Senior',
    marketSignal: 'Strong demand for API, database, and reliability fundamentals across product teams.',
    summary: 'Focused on PHP core, data correctness, API design, and production-safe deployments.',
    courseIds: [1, 2, 3, 4, 10, 13],
    projectRefs: [
      { tab: 'practice', title: 'E-Commerce Backend' },
      { tab: 'real', title: 'Audit Trail & Compliance Service' },
      { tab: 'capstone', title: 'Real-Time API Analytics Pipeline' }
    ],
    skills: [
      'Typed PHP and SOLID architecture',
      'MySQL indexing, transactions, and query tuning',
      'REST API contracts and auth flows',
      'Testing strategy (unit + integration + feature)',
      'Operational observability (metrics/logs/traces)'
    ],
    references: [
      { label: 'PHP Supported Versions', url: 'https://www.php.net/supported-versions.php' },
      { label: 'MySQL 8 Manual', url: 'https://dev.mysql.com/doc/refman/8.0/en/' },
      { label: 'OpenTelemetry Docs', url: 'https://opentelemetry.io/docs/' }
    ]
  },
  {
    role: 'Laravel Engineer',
    level: 'Mid to Senior',
    marketSignal: 'Common requirement for SaaS and internal platforms needing rapid feature delivery.',
    summary: 'Centered on Laravel architecture, queues, events, auth, and production deployment workflows.',
    courseIds: [5, 7, 10, 14, 15],
    projectRefs: [
      { tab: 'practice', title: 'Task Management System' },
      { tab: 'practice', title: 'Webhook Processing Service' },
      { tab: 'real', title: 'Multi-Tenant SaaS API' },
      { tab: 'real', title: 'API Gateway & Rate Limiting Service' }
    ],
    skills: [
      'Laravel service architecture and modular code organization',
      'Queue workers, retries, and idempotent jobs',
      'Security hardening and OWASP-aligned validation',
      'Payments/webhooks reliability and reconciliation',
      'CI/CD and zero-downtime rollout basics'
    ],
    references: [
      { label: 'Laravel Documentation', url: 'https://laravel.com/docs' },
      { label: 'OWASP Cheat Sheet Series', url: 'https://cheatsheetseries.owasp.org/' },
      { label: 'Stripe Webhooks Docs', url: 'https://docs.stripe.com/webhooks' }
    ]
  },
  {
    role: 'Platform / Infrastructure Engineer (PHP Stack)',
    level: 'Senior',
    marketSignal: 'Growing need for engineers who can run PHP services reliably at scale.',
    summary: 'Targets scaling, asynchronous processing, cloud deployment, and resilient system design.',
    courseIds: [8, 12, 13, 14, 16],
    projectRefs: [
      { tab: 'real', title: 'Event-Driven Order Platform' },
      { tab: 'capstone', title: 'Distributed File Storage Service' },
      { tab: 'capstone', title: 'Real-Time API Analytics Pipeline' },
      { tab: 'capstone', title: 'Payment Orchestration & Reconciliation Engine' }
    ],
    skills: [
      'Service decomposition and async message flows',
      'Queue topology and failure recovery design',
      'Kubernetes deployment and autoscaling',
      'Resilience patterns and incident readiness',
      'Cost/performance tradeoff analysis in production'
    ],
    references: [
      { label: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/' },
      { label: 'RabbitMQ Docs', url: 'https://www.rabbitmq.com/docs' },
      { label: 'microservices.io Patterns', url: 'https://microservices.io/' }
    ]
  }
];

const PRELAUNCH_QA_CHECKLIST_DATA = [
  {
    area: 'Accessibility',
    status: 'pass',
    checks: [
      'Keyboard access for nav, filters, modal close, and search overlay',
      'Visible focus styles for interactive controls',
      'Meaningful labels on forms and actionable buttons',
      'Source links include rel="noopener" for external targets'
    ]
  },
  {
    area: 'Performance',
    status: 'pass',
    checks: [
      'Lazy render for below-the-fold heavy sections',
      'requestIdleCallback fallback for medium-priority renders',
      'Throttled scroll work via requestAnimationFrame',
      'No blocking network requests in initial critical path'
    ]
  },
  {
    area: 'SEO',
    status: 'pass',
    checks: [
      'Unique page title and descriptive meta description',
      'Semantic sectioning and heading hierarchy maintained',
      'Descriptive link text for references and documentation',
      'Readable content with source-backed factual claims'
    ]
  },
  {
    area: 'Content Integrity',
    status: 'pass',
    checks: [
      'Numeric claims mapped to official source URLs',
      'Strict fact labels injected near ticker/stat numbers',
      'Conservative wording for volatile ecosystem metrics',
      'Last-reviewed date recorded for each audited claim'
    ]
  },
  {
    area: 'API Security & Reliability',
    status: 'pass',
    checks: [
      'Project examples include idempotency guidance for retry-prone flows',
      'API-oriented content references OWASP/API and HTTP RFC standards',
      'Rate-limiting and standardized API error patterns are represented',
      'Payment and webhook scenarios include reconciliation and audit concerns'
    ]
  }
];

const CLAIMS_AUDIT_DATA = [
  {
    claim: 'PHP usage share among websites with known server-side language',
    value: '71.7%',
    sourceLabel: 'W3Techs',
    sourceUrl: 'https://w3techs.com/technologies/details/pl-php',
    reviewedAt: '2026-04-10',
    note: 'Publicly reported daily-updated statistic.'
  },
  {
    claim: 'WordPress web share statement',
    value: '43%+',
    sourceLabel: 'WordPress.org',
    sourceUrl: 'https://wordpress.org/about/',
    reviewedAt: '2026-04-10',
    note: 'Project-level public statement, treated as source-attributed claim.'
  },
  {
    claim: 'Packagist registered packages',
    value: '449,235',
    sourceLabel: 'Packagist Statistics',
    sourceUrl: 'https://packagist.org/statistics',
    reviewedAt: '2026-04-10',
    note: 'Totals are live and can change daily.'
  },
  {
    claim: 'Packagist versions available',
    value: '5,482,038',
    sourceLabel: 'Packagist Statistics',
    sourceUrl: 'https://packagist.org/statistics',
    reviewedAt: '2026-04-10',
    note: 'Totals are live and can change daily.'
  },
  {
    claim: 'Packagist installs since 2012-04-13',
    value: '176,358,015,831',
    sourceLabel: 'Packagist Statistics',
    sourceUrl: 'https://packagist.org/statistics',
    reviewedAt: '2026-04-10',
    note: 'Displayed as rounded 176B+ in UI for readability.'
  },
  {
    claim: 'Symfony ecosystem download metric',
    value: '37B+',
    sourceLabel: 'Symfony',
    sourceUrl: 'https://symfony.com/',
    reviewedAt: '2026-04-10',
    note: 'Homepage public metric; source wording preserved.'
  },
  {
    claim: 'PHP supported branches and lifecycle policy',
    value: '8.2 / 8.3 / 8.4 / 8.5 listed as supported',
    sourceLabel: 'PHP.net Supported Versions',
    sourceUrl: 'https://www.php.net/supported-versions.php',
    reviewedAt: '2026-04-10',
    note: 'Used for timeline and upgrade guidance wording.'
  }
];

const JOB_READY_ROADMAP_DATA = [
  {
    week: 'Week 01',
    theme: 'PHP Runtime Setup + Baseline Syntax',
    deliverable: 'CLI utility with strict typing, functions, arrays, and error handling.',
    milestones: ['Configure PHP 8.3+ local environment', 'Use strict_types and typed signatures', 'Ship one small CLI script on GitHub'],
    references: [
      { label: 'PHP Manual', url: 'https://www.php.net/manual/en/' },
      { label: 'PHP Supported Versions', url: 'https://www.php.net/supported-versions.php' }
    ]
  },
  {
    week: 'Week 02',
    theme: 'OOP and SOLID in PHP',
    deliverable: 'Small service layer using interfaces, constructor injection, and DTOs.',
    milestones: ['Implement interface-driven design', 'Apply SRP and DIP in one module', 'Write code review notes on design tradeoffs'],
    references: [
      { label: 'PHP OOP Manual', url: 'https://www.php.net/manual/en/language.oop5.php' }
    ]
  },
  {
    week: 'Week 03',
    theme: 'MySQL Foundations + PDO',
    deliverable: 'CRUD backend with parameterized queries and migration scripts.',
    milestones: ['Design normalized schema', 'Use PDO prepared statements', 'Document query contract in README'],
    references: [
      { label: 'MySQL 8.0 Reference', url: 'https://dev.mysql.com/doc/refman/8.0/en/' },
      { label: 'PHP PDO Manual', url: 'https://www.php.net/manual/en/book.pdo.php' }
    ]
  },
  {
    week: 'Week 04',
    theme: 'Query Performance and EXPLAIN',
    deliverable: 'Performance report for two slow queries with before/after plans.',
    milestones: ['Capture baseline EXPLAIN output', 'Tune indexes and query shape', 'Publish optimization notes'],
    references: [
      { label: 'MySQL EXPLAIN', url: 'https://dev.mysql.com/doc/refman/8.0/en/explain.html' }
    ]
  },
  {
    week: 'Week 05',
    theme: 'Transactions and Concurrency Safety',
    deliverable: 'Atomic order flow with rollback-safe behavior.',
    milestones: ['Wrap critical writes in transactions', 'Handle lock/timeout failures', 'Add concurrency test scenario'],
    references: [
      { label: 'InnoDB Transaction Model', url: 'https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-model.html' },
      { label: 'InnoDB Locking Reads', url: 'https://dev.mysql.com/doc/refman/8.0/en/innodb-locking-reads.html' }
    ]
  },
  {
    week: 'Week 06',
    theme: 'Laravel Core Workflow',
    deliverable: 'Laravel API module with validation, resources, and policy checks.',
    milestones: ['Build routes/controllers/resources', 'Implement request validation', 'Add auth guard for one protected endpoint'],
    references: [
      { label: 'Laravel Docs', url: 'https://laravel.com/docs/12.x' }
    ]
  },
  {
    week: 'Week 07',
    theme: 'Secure Data Access in Laravel',
    deliverable: 'Refactor raw SQL endpoints into safe query builder flows.',
    milestones: ['Use query builder parameter binding', 'Validate and normalize input', 'Write one threat-model note'],
    references: [
      { label: 'Laravel Query Builder', url: 'https://laravel.com/docs/12.x/queries' },
      { label: 'OWASP SQL Injection Prevention', url: 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html' }
    ]
  },
  {
    week: 'Week 08',
    theme: 'Queues, Jobs, and Background Work',
    deliverable: 'Async job pipeline for email/report processing.',
    milestones: ['Create queueable job classes', 'Configure queue worker strategy', 'Measure request-latency improvement'],
    references: [
      { label: 'Laravel Queues', url: 'https://laravel.com/docs/12.x/queues' }
    ]
  },
  {
    week: 'Week 09',
    theme: 'Testing and Reliability',
    deliverable: 'Feature and unit test suite for critical endpoints.',
    milestones: ['Add feature tests for auth + CRUD', 'Add unit tests for core services', 'Integrate tests in CI'],
    references: [
      { label: 'Laravel Testing', url: 'https://laravel.com/docs/12.x/testing' },
      { label: 'PHPUnit Docs', url: 'https://phpunit.readthedocs.io/' }
    ]
  },
  {
    week: 'Week 10',
    theme: 'Production Deployment Readiness',
    deliverable: 'Documented deployment playbook with rollback strategy.',
    milestones: ['Set APP_DEBUG=false and env hygiene', 'Run optimize/cache commands', 'Add health-check and rollback notes'],
    references: [
      { label: 'Laravel Deployment', url: 'https://laravel.com/docs/12.x/deployment' }
    ]
  },
  {
    week: 'Week 11',
    theme: 'Interview Sprint and Communication',
    deliverable: 'Recorded mock interview with technical debrief notes.',
    milestones: ['Practice 15 core questions', 'Use source-backed answers', 'Refine STAR stories for project wins'],
    references: [
      { label: 'PHP Manual', url: 'https://www.php.net/manual/en/' },
      { label: 'MySQL Manual', url: 'https://dev.mysql.com/doc/refman/8.0/en/' },
      { label: 'Laravel Docs', url: 'https://laravel.com/docs/12.x' }
    ]
  },
  {
    week: 'Week 12',
    theme: 'Job-Ready Portfolio Release',
    deliverable: 'Public portfolio repo containing one production-style backend project and technical writeup.',
    milestones: ['Finalize README architecture notes', 'Publish API docs and test badges', 'Apply to roles with tailored project summary'],
    references: [
      { label: 'OWASP Cheat Sheet Series', url: 'https://cheatsheetseries.owasp.org/' },
      { label: 'Packagist', url: 'https://packagist.org/' }
    ]
  }
];

