import kabbikImg from '../image/portfolio/kabbik.jpg';
import kabbikEbookImg from '../image/portfolio/kabbikReads.jpg';
import rasImg from '../image/portfolio/bycycle.jpg';
import wozaifImg from '../image/portfolio/wozaif.jpg';
import tribelImg from '../image/portfolio/tribel.jpg';
import bidAdvisorImg from '../image/portfolio/bidadvisor.jpg';
import componentHubImg from '../image/portfolio/internalhub.jpg';

const data = [
    {
        id: 1,
        image: kabbikImg,
        heading: "Kabbik — Audiobook Streaming Platform",
        role: "Full Stack Software Engineer",
        company: "Divergent Technologies Limited",
        status: "Live Production",
        statusType: "live",
        statusBadge: "● Live Platform (300K+ Users)",
        impact: "40% Cost Cut • 73% Latency Drop • 300K+ Active Users",
        summary: "Full-stack ownership of an audiobook platform serving 300K+ active users. Optimized infrastructure, slashed API latency from 3s to 800ms, and implemented secure recurring bKash subscriptions and anti-bot OTP defenses.",
        architectureDetails: "Migrated high-load services from AWS EC2 to DigitalOcean Droplets and frontend to Vercel, reducing infra bills by 40%. Slashed API response times by 73% across critical audio-streaming endpoints using Redis caching, database indexing, and browser cache headers. Resolved complex payment webhook reconciliations, fixed memory leaks, and built automated device-fingerprinted OTP rate limiting that expanded OTP supply lifespan from 3 days to 30+ days.",
        keyHighlights: [
            "40% infrastructure cost reduction via DigitalOcean & Vercel migration",
            "73% API latency reduction (3s → 800ms) with Redis caching & indexing",
            "Device ID daily rotation protecting OTP depletion (3 to 30+ days lifespan)",
            "Push notification scale for ~300K tokens with 30 batches/min pipeline",
            "Integrated bKash recurring subscriptions, Stripe, Robi, GP gateways"
        ],
        techStack: ["Next.js", "React", "Node.js", "MySQL", "Redis", "AWS EC2/S3", "DigitalOcean", "bKash", "Stripe", "Socket.io"],
        liveLink: "https://kabbik.com",
        github: null
    },
    {
        id: 2,
        image: kabbikEbookImg,
        heading: "Kabbik eBook Backend System",
        role: "Backend API Engineer",
        company: "Divergent Technologies Limited",
        status: "Play Store App",
        statusType: "mobile",
        statusBadge: "📱 Play Store Mobile Backend",
        impact: "Google Play Store • In-App Purchases • Content Management",
        summary: "Architected and built the NestJS backend API engine powering the Kabbik eBook mobile application. Handled subscription purchases, content management, reading progress synchronization, and order workflows.",
        architectureDetails: "Developed modular NestJS RESTful APIs for the mobile app published on Google Play Store. Built robust endpoints for book catalog management, user reading progress sync, promo code discount engines, review systems, order processing, and token-based access control optimized for low-bandwidth mobile networks.",
        keyHighlights: [
            "Modular NestJS enterprise architecture with Prisma ORM & MySQL",
            "Built reading progress tracking and synchronized multi-device state",
            "Implemented subscription, in-app purchase, and promo code engines",
            "Engineered secure book access control and order management",
            "Optimized payload sizes and response times for mobile clients"
        ],
        techStack: ["NestJS", "TypeScript", "MySQL", "Prisma ORM", "JWT Auth", "REST APIs", "Payment Gateways", "Node.js"],
        liveLink: "https://play.google.com/store/apps/details?id=com.kabbik.ebook_app",
        github: null
    },
    {
        id: 3,
        image: rasImg,
        heading: "RAS — Military Personnel Management System",
        role: "Frontend Engineer",
        company: "Divergent Technologies Limited",
        status: "Offline System",
        statusType: "offline",
        statusBadge: "🛡️ Offline-First / Air-gapped System",
        impact: "Pixel-Perfect UI • Offline Sync • Secure Records",
        summary: "Engineered a secure, offline-capable personnel management frontend for military operations. Designed pixel-perfect interfaces for soldier profiles, duty appointments, leaves, and disciplinary tracking.",
        architectureDetails: "Built an offline-first Single Page Application for managing mission-critical military records. Implemented local storage and client synchronization to allow duty officers to inspect soldier records, process leave requests, and manage punishment logs even in disconnected / air-gapped environments without continuous internet connectivity.",
        keyHighlights: [
            "Pixel-perfect responsive frontend following strict Figma specifications",
            "Offline-first client-side storage & state synchronization",
            "Comprehensive management modules: soldier data, leave, appointments, discipline",
            "Complex data filtering, searchable tables, and high-security role permissions",
            "Zero external tracking / air-gapped security compliance"
        ],
        techStack: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "IndexedDB / Offline Storage"],
        liveLink: null,
        github: null
    },
    {
        id: 4,
        image: wozaifImg,
        heading: "Wozaif — Enterprise Job Portal",
        role: "Software Engineer",
        company: "Doodle Incorporation",
        status: "Live Platform",
        statusType: "live",
        statusBadge: "● Live Platform (Agile Scale)",
        impact: "20+ Features • 350+ Issue Fixes • SSR Architecture",
        summary: "Contributed to Wozaif.com within a 20-member Agile team. Delivered 20+ features, resolved 350+ production issues, engineered AWS AppSync GraphQL integrations, and optimized rendering strategies for scale.",
        architectureDetails: "Replaced full static generation (SSG) with Server-Side Rendering (SSR) for dynamic high-cardinality job listings and company profile pages, significantly reducing build times and boosting scalability. Worked with GraphQL through AWS AppSync to power fast candidate search, on-page SEO, and accessibility standards.",
        keyHighlights: [
            "Delivered 20+ features & resolved 350+ bugs in 20-member Agile team",
            "Engineered GraphQL queries & mutations via AWS AppSync",
            "Converted dynamic pages from static generation to SSR to cut build times",
            "Optimized on-page SEO, core web vitals, and accessibility",
            "Managed tasks in Jira and collaborated with Scrum Masters"
        ],
        techStack: ["React", "TypeScript", "AWS AppSync", "GraphQL", "Next.js SSR", "Tailwind CSS", "DynamoDB"],
        liveLink: "https://www.wozaif.com/",
        github: null
    },
    {
        id: 5,
        image: tribelImg,
        heading: "Tribel — Community Blog Modernization",
        role: "Software Engineer",
        company: "Doodle Incorporation",
        status: "Platform Sunsetted",
        statusType: "sunsetted",
        statusBadge: "🏛️ Platform Sunsetted by Company",
        impact: "Legacy jQuery Rebuilt to React/TS • Infinite Scroll",
        summary: "Re-engineered legacy jQuery architecture into a modern React & TypeScript Single Page Application. Implemented AWS AppSync GraphQL data fetching, pagination, infinite scroll, and smart state caching.",
        architectureDetails: "Tribel was a large-scale social networking platform where the company decided to sunset the legacy codebase. Completely re-architected the legacy jQuery blog section into React 18, TypeScript, Redux Toolkit, and AWS AppSync GraphQL. Engineered infinite scrolling with virtualization, advanced full-text search, and client-side caching.",
        keyHighlights: [
            "Full architectural modernization from legacy jQuery to React + TypeScript",
            "Engineered infinite scroll pagination with intelligent memory management",
            "Real-time GraphQL integration using AWS AppSync",
            "Client-side caching layer reducing redundant network requests",
            "Delivered cohesive, responsive social feed and blog layouts"
        ],
        techStack: ["React", "TypeScript", "Redux Toolkit", "GraphQL", "AWS AppSync", "SCSS", "REST APIs"],
        liveLink: null,
        github: null
    },
    {
        id: 6,
        image: bidAdvisorImg,
        heading: "Bid Advisor — USA Bidding Platform",
        role: "Frontend Developer",
        company: "Shadhin Lab LLC",
        status: "Private Client",
        statusType: "sunsetted",
        statusBadge: "🔒 Private Client / Sunsetted",
        impact: "Built from Scratch • 200+ Bugs Resolved • High Performance",
        summary: "Built the complete client-side architecture for a US-based bid management application from scratch. Designed responsive UI layouts across all devices, optimized re-renders, and resolved 200+ bugs.",
        architectureDetails: "Constructed the full frontend of a US-based commercial bid tracking platform from wireframes to production under team-lead mentorship. Applied lazy loading, code-splitting, and memoization to eliminate unnecessary component re-renders, ensuring high responsiveness when handling large contractor bid tables.",
        keyHighlights: [
            "Engineered complete frontend architecture from scratch as junior developer",
            "Delivered responsive layouts across desktop, tablet, and mobile",
            "Maximized performance via lazy loading, code splitting, and memoization",
            "Resolved 200+ functional bugs while maintaining high QA standards",
            "Established clean component patterns and scalable state flow"
        ],
        techStack: ["React", "TypeScript", "Redux", "SCSS", "Responsive Design", "REST APIs"],
        liveLink: null,
        github: null
    },
    {
        id: 7,
        image: componentHubImg,
        heading: "ComponentHub — Internal UI Component Library",
        role: "Frontend Developer",
        company: "Shadhin Lab LLC",
        status: "Internal Tool",
        statusType: "internal",
        statusBadge: "📦 Proprietary Internal Library",
        impact: "50+ Reusable Components • 80% Less Duplication • 15+ Devs",
        summary: "Extracted 50+ reusable, accessible UI components from 3 production applications into a unified design system with interactive examples, prop types, and comprehensive documentation for 15+ developers.",
        architectureDetails: "Recognizing widespread UI duplication across Bid Advisor, CoderTrust, and My Fuel Pump projects, initiated and developed a shared TypeScript component library. Extracted over 50 accessible buttons, inputs, tables, cards, and modal components with typed props and Storybook-style interactive documentation.",
        keyHighlights: [
            "Extracted 50+ reusable React & TypeScript components across 3 client apps",
            "Reduced code duplication by approximately 80% across the engineering team",
            "Adopted by 15+ engineers as the foundational frontend UI kit",
            "Authored complete interactive documentation, usage guidelines, and prop specs",
            "Maintained strict cross-browser accessibility and responsive standards"
        ],
        techStack: ["React", "TypeScript", "Component Architecture", "Design System", "Storybook", "npm"],
        liveLink: null,
        github: null
    }
];

export default data;