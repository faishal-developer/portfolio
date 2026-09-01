// Authoritative data file for Case Studies.
// Refactored to include exactly the two real production case studies provided by the user.

const caseStudiesData = [
    {
        id: "my-playlist-folder-management",
        slug: "my-playlist-folder-management",
        title: "My Playlist & Folder Management",
        shortDescription: "Architecting a secure, structured API and database evolution for user playlist and folder organization, turning a fast estimate into a resilient production backend system.",
        category: "Backend & Database Architecture",
        role: "Full-Stack Software Engineer",
        timeline: "Completed (1.5 Days)",
        technologies: ["Node.js", "REST API", "Database Design", "JWT Authentication", "Rate Limiting", "CORS Policy"],

        // Detailed Case Study Sections
        overview: "Developed the core backend infrastructure and API endpoints for 'My Playlist' including folder management capabilities. The feature enables users to organize their media items (such as audiobooks and audio tracks) into custom folders while enforcing strict data integrity, user limits, and API security controls.",
        
        initialAssumption: "Initial project sizing estimated API development at approximately 4–5 hours. However, as implementation began, the scope naturally expanded to address foundational database schema design, business rule enforcement, edge-case validation, identity security, abuse mitigation, testing, and production deployment.",
        
        databaseDesign: {
            description: "The database architecture evolved through iterative design. Initially, a single-table schema was evaluated for rapid setup. However, further analysis revealed data redundancy and poor scaling. The design was updated to decouple entities into separate normalized tables for folders and playlist items, establishing a cleaner structural foundation for relational queries.",
            placeholderText: "Database / ER Diagram Placeholder — Clean structural mapping showing User → Folders (1:N) → Playlist / Audiobook Items (1:N)."
        },
        
        dataIntegrity: [
            "Preventing duplicate folder names under the same user profile.",
            "Preventing duplicate item entries inside the same folder or playlist.",
            "Enforcing maximum folder creation limits per user account.",
            "Enforcing maximum item capacity per folder (e.g., inside audiobooks).",
            "Ensuring strict user-level resource ownership so users only access their own items."
        ],
        
        authSecurity: "Security evaluation identified user-id manipulation as a critical vulnerability risk. Client-provided user_id values in the HTTP POST request body were completely removed. Instead, user identity is strictly derived server-side from verified JSON Web Tokens (JWT), preventing unauthorized resource creation or cross-account tampering.",
        
        rateLimiting: "Implemented automated rate-limiting mechanisms on API endpoints to prevent request flooding, brute-force manipulation, and excessive automated calls.",
        
        originRestrictions: "Configured origin restrictions and CORS policies as a supplementary layer to block unauthorized web client origins from making direct cross-origin API requests.",
        
        testingAndDeployment: "Conducted testing to validate edge cases, business constraints, authentication boundaries, and rate limits prior to production deployment.",
        
        challengesAndTradeoffs: "What initially appeared to be a standard CRUD endpoint turned into a comprehensive engineering effort spanning database normalization, strict data integrity constraints, server-side identity validation, rate-limiting abuse protection, edge-case testing, and deployment setup.",
        
        takeaway: "What initially seemed like a 4–5 hour task ultimately took approximately 1.5 days.\n\nQuality software development is not just about writing code quickly. It is about asking the right questions, considering edge cases, protecting the system, and making thoughtful engineering decisions before shipping to production."
    },
    {
        id: "otp-api-abuse-prevention",
        slug: "otp-api-abuse-prevention",
        title: "OTP API Abuse Prevention",
        shortDescription: "Designing a multi-tiered security defense and PassKey verification architecture to mitigate automated SMS API abuse without degrading legitimate user experience.",
        category: "Backend & Security Engineering",
        role: "Full-Stack Software Engineer",
        timeline: "Active Production Security",
        technologies: ["Node.js", "API Gateway / Security", "PassKey Validation", "Rate Limiting", "CAPTCHA (Planned)"],

        // Detailed Case Study Sections
        overview: "Addressed a live automated abuse incident targeting the application's OTP (One-Time Password) SMS dispatch API. The objective was to stop automated script attacks and reduce unauthorized SMS consumption while preserving friction-free access for legitimate users.",
        
        attackDetails: {
            description: "External automated scripts targeted the OTP dispatch endpoints. The system initially enforced a limit of 3 OTPs per phone number per day. Attackers bypassed this control by continuously rotating through dynamic pools of phone numbers, consuming thousands of SMS requests over a 2–3 day period.",
        },
        
        phoneLimitFailure: "Limiting requests strictly per phone number proved insufficient because malicious actors dynamically changed target phone numbers, completely circumventing per-number quotas.",
        
        ipBlockingFailure: "Initial consideration was given to blocking attacking IP addresses. However, technical analysis revealed significant drawbacks: in Bangladesh, internet service providers rely heavily on shared public IPs (CGNAT), where a single IP serves thousands of legitimate mobile and broadband users. Blocking a public IP would block genuine users. Furthermore, VPNs and proxies allow attackers to switch IP addresses at will, making IP-based blocking unreliable as a standalone protection.",
        
        passkeySystem: {
            description: "To mitigate automated rotation, a server-side PassKey validation architecture was designed. A unique server-side PassKey is generated upon visiting the website with a 1-day expiration and a quota of 3 OTP dispatches. Requests are validated server-side to enforce compliance before triggering the SMS gateway.",
            placeholderDiagramText: "User → Visit Website → PassKey Generation → PassKey Validation → OTP Request → Quota Check → OTP Service",
            flowSteps: [
                { step: "01", title: "Visit Website", detail: "User accesses the web client application." },
                { step: "02", title: "PassKey Generation", detail: "Unique server-side PassKey is issued with a 1-day expiration." },
                { step: "03", title: "PassKey Validation", detail: "PassKey validity and lifetime are verified on incoming requests." },
                { step: "04", title: "Quota Check & Dispatch", detail: "Enforces 3-OTP limit per PassKey before dispatching to SMS service." }
            ]
        },
        
        plannedCaptcha: "CAPTCHA integration is designed as a planned enhancement / next security layer. Once introduced, CAPTCHA validation will add automated challenge complexity, making it significantly harder for automated scripts to obtain or consume PassKeys.",
        
        securityConsiderations: "Relying on a single signal (such as an IP address or phone number) creates single points of failure in defense. A robust security strategy requires a layered defense approach. Current and planned defense layers include phone-number limits, PassKey-based quotas, server-side verification, rate limiting, and planned CAPTCHA challenges.",
        
        currentStatus: "The primary objective of the PassKey implementation is to systematically minimize automated OTP script abuse while ensuring legitimate users maintain uninterrupted access to verification services.",
        
        takeaway: "Security is an iterative engineering process. Attackers continuously adapt to static restrictions, and relying on single-signal protections often yields collateral damage to real users. Effective security controls must balance aggressive abuse prevention with seamless user experience."
    },
    {
        id: "api-performance-optimization",
        slug: "api-performance-optimization",
        title: "API Performance Optimization: Reducing Critical API Latency",
        shortDescription: "Investigating slow Home page API load times (7-8s) on healthy infrastructure and applying a multi-layered optimization strategy to cut critical API latency by ~73% (3s → 800ms).",
        category: "Backend & Performance Optimization",
        role: "Full-Stack Software Engineer",
        timeline: "Completed",
        technologies: ["Node.js", "Redis Caching", "Database Indexing", "Browser Caching", "Profiling & Performance"],

        overview: "Encountered slow Home page loading times (~7–8 seconds) in production. Server-level metrics (CPU, RAM, Disk, DB server resources) showed no obvious overloading bottlenecks, indicating the issue was application-level latency rather than hardware constraints. Investigated and resolved the root causes through a systematic, multi-layered optimization strategy.",

        problem: {
            description: "The Home page was taking 7–8 seconds to load, creating a poor user experience. Infrastructure monitoring confirmed CPU, RAM, disk, and database server metrics were healthy. The core engineering challenge was identifying what was causing latency when server resources were not overloaded, avoiding unnecessary hardware scaling.",
            question: "If the infrastructure isn't overloaded, what is actually making the API slow?"
        },

        investigation: {
            description: "Profiled the API request flow and execution overhead. Discovered an excessive volume of synchronous `console.log()` statements throughout the production backend. Experimentation revealed a surprisingly low I/O throughput (~4,000 characters per second) under observed conditions, showing that synchronous logging created significant request processing overhead."
        },

        optimizations: [
            {
                number: "01",
                title: "Removing Excessive Console Logging",
                description: "Removed unnecessary `console.log()` statements from the production request flow, reducing synchronous I/O and CPU thread blocking during API execution. Demonstrated that backend code can cause latency even while server infrastructure metrics appear healthy."
            },
            {
                number: "02",
                title: "Database Indexing",
                description: "Analyzed database query execution patterns and identified frequently accessed tables missing index coverage. Added targeted indexes to query columns (including fields in the users table and other hot paths), allowing the database to perform efficient index lookups instead of expensive full-table scans."
            },
            {
                number: "03",
                title: "Redis Caching",
                description: "Introduced Redis caching for high-frequency data that did not require database fetching on every request. Implemented cache-aside logic (Check Redis → Hit: Return / Miss: Query DB & Store in Redis) with explicit TTL expiration and invalidation strategy.",
                cacheFlowDiagram: "API Request → Check Redis Cache → [Hit] Return Data / [Miss] Query DB → Store in Redis → Return Data"
            },
            {
                number: "04",
                title: "Browser Caching",
                description: "Configured appropriate HTTP browser cache headers for eligible client-side resources and API responses. Enabled client browsers to reuse cached responses, eliminating redundant network round-trips and enhancing perceived loading speed."
            }
        ],

        optimizationStrategy: {
            description: "Rather than relying on a single fix, a multi-layered optimization model was established across the full application stack:",
            layers: [
                { name: "Browser Cache", detail: "Reuses client-cached static resources & responses" },
                { name: "API Layer", detail: "Synchronous console.log() removal to eliminate I/O blocking" },
                { name: "Redis Cache", detail: "High-speed key-value lookup for frequent data" },
                { name: "Database Layer", detail: "Indexed query lookups for fast disk access" }
            ]
        },

        results: {
            summary: "Critical API response latency improved from ~3 seconds to 800 milliseconds — representing an approximate 73% reduction in latency.",
            highlight: "~73% lower latency on critical API endpoints (3s → ~800ms)"
        },

        lessonsLearned: [
            "Performance problems are not always caused by insufficient server resources. Metrics can look completely healthy while application-level code is inefficient.",
            "Scaling up hardware without measuring and profiling application logic wastes money without solving the true bottleneck.",
            "Effective optimization requires inspecting every layer: Application → Database → Cache → Browser → Network.",
            "Don't optimize based on assumptions. Measure first, identify the actual bottleneck, make targeted changes, and measure again."
        ],

        challengesAndTradeoffs: "Tracing latency without server resource metrics required meticulous profiling of application code and database queries. Implementing caching required balancing data freshness with TTL expiration and invalidation logic to avoid serving stale data.",

        takeaway: "The biggest improvement did not come from a single magic optimization. It came from looking at the system as a whole: Application → Database → Cache → Browser → Network.\n\nBy investigating each layer instead of assuming the server was the problem, I was able to significantly reduce API latency without simply scaling up the infrastructure."
    },
    {
        id: "scaling-push-notification-delivery",
        slug: "scaling-push-notification-delivery",
        title: "Scaling Push Notification Delivery to 300K+ Tokens",
        shortDescription: "Redesigning background push notification processing from a single memory-heavy database query into controlled 20K-token batch jobs to eliminate RAM exhaustion and sudden production server crashes across 2M+ users.",
        category: "Backend & Scalability Engineering",
        role: "Full-Stack Software Engineer",
        timeline: "Completed",
        technologies: ["Node.js", "Batch Processing", "Cron / Background Jobs", "Memory Optimization", "System Architecture"],

        overview: "As the platform grew, the number of users increased significantly, reaching 2 million+ users. Background operations that had previously been unnoticeable started becoming production problems. One of the most serious incidents involved the system suddenly crashing without any obvious warning—with no clear CPU, database, or application-level signals immediately before the crash. The challenge was to identify the root cause and redesign the push notification process so the system could reliably handle 300K+ notification tokens without exhausting server memory.",

        problem: {
            description: "Initially, the system was relatively small, so the existing push notification implementation worked without noticeable problems. As the number of users increased, the amount of push-notification data grew significantly, causing sudden application crashes with no obvious pre-crash warning. At this point, simply restarting the server was not a real solution.",
            question: "What was consuming the server's memory so aggressively?"
        },

        initialInvestigation: "Started by investigating server resource usage, which eventually pointed toward RAM exhaustion. As an immediate mitigation, 2 GB of swap memory was added to provide temporary breathing room and delay crashes. However, swap did not solve the underlying problem—the system became increasingly unstable under heavy memory pressure, proving swap was only a temporary safety net.",

        findingRootCause: {
            description: "Investigated background processes that could produce sudden memory spikes, including heavy queries and scheduled cron jobs. Monitoring cron jobs alone showed noticeable memory consumption, but none large enough by themselves to explain the sudden instability.",
            timingPattern: "Correlated crashes with the execution timestamps of background operations. A clear timing pattern emerged: system instability aligned directly with the execution of push notification processing, providing a strong lead to investigate the notification workflow itself."
        },

        rootCause: {
            description: "The root cause was the way push notification tokens were being loaded. The original job performed a single database query fetching 300K+ tokens into a single JavaScript array in application memory before processing and sending notifications.",
            memoryImpact: "300,000+ tokens → JavaScript Array → Application RAM",
            explanation: "Loading hundreds of thousands of tokens into memory at the same time created a massive RAM footprint. An implementation that was acceptable at small scale became a major production scalability bottleneck as the user base reached 2 million+ users."
        },

        solution: {
            description: "Redesigned the notification workflow to process tokens in smaller, controlled batches instead of a single massive operation.",
            batchDetails: "Divided the 300K+ dataset into 30+ batches, capping each batch at approximately 20,000 tokens. Introduced a ~1-minute interval between batches to allow memory cleanup and prevent peak RAM spikes.",
            flowSteps: [
                { step: "Batch 1", detail: "≤20K tokens loaded & dispatched" },
                { step: "Batch 2", detail: "≤20K tokens processed following 1-min interval" },
                { step: "Batch 3", detail: "≤20K tokens processed following 1-min interval" },
                { step: "Batch 30+", detail: "Final batches processed until completion" }
            ]
        },

        beforeAfter: {
            before: [
                "300K+ tokens",
                "Single database query",
                "Load everything into application RAM",
                "Massive memory spike",
                "Sudden server instability / crash"
            ],
            after: [
                "300K+ tokens",
                "Split into 30+ controlled batches",
                "≤20K tokens per batch",
                "Process batch & wait 1-min interval",
                "Controlled memory usage without crashes"
            ]
        },

        mitigationVsSolution: {
            emergencyMitigation: {
                title: "Emergency Mitigation",
                action: "Added 2 GB Swap Memory",
                impact: "System survived longer, but underlying memory leak/spike remained unaddressed."
            },
            permanentSolution: {
                title: "Permanent Solution",
                action: "Batch Processing Architecture",
                impact: "Stopped loading 300K+ tokens at once, keeping RAM usage low and predictable."
            }
        },

        results: "The push notification process was redesigned into 30+ smaller batches (≤20K tokens per batch running at ~1-minute intervals). This completely eliminated large memory spikes, prevented RAM exhaustion crashes, and stabilized background operations for 2M+ users.",

        keyLessons: [
            "Small systems can hide scalability problems: An implementation that works for thousands can fail completely at millions.",
            "Swap is not a real solution: Swap provides temporary protection but does not fix inefficient application memory consumption.",
            "Investigate timing patterns, not just raw metrics: Correlating system crashes with specific job execution schedules revealed the root cause.",
            "Avoid loading unnecessarily large datasets into memory: Processing hundreds of thousands of records requires chunking or streaming.",
            "Design background jobs for anticipated scale: As user bases grow, background tasks must scale efficiently alongside them."
        ],

        challengesAndTradeoffs: "Emergency swap mitigation delayed crashes but increased disk I/O latency under memory pressure. Switching to batch processing required managing batch state, scheduled intervals, and ensuring job completion across potential worker restarts.",

        takeaway: "A production system doesn't necessarily fail because the infrastructure is too small. Sometimes the workload itself needs to be redesigned.\n\nThe original push notification implementation was sufficient when the system was small. But as the platform grew to 2 million+ users, processing 300K+ tokens in a single operation became unsustainable. By investigating the crash, identifying the timing pattern, tracing it back to the notification job, and redesigning the workload around controlled batch processing, I was able to turn an unstable production process into a more scalable one."
    }
];

export default caseStudiesData;
