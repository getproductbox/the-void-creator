# GM Admin - Venue Management Platform

A dedicated staff dashboard and venue management system for GM's karaoke and venue hire operations. This admin-only application enables venue managers to efficiently handle bookings, customer management, and operational analytics.

## Project Overview

GM Admin is the staff-facing management platform that streamlines venue operations and automates administrative functions. The platform eliminates manual booking processes and provides comprehensive tools for venue managers to focus on customer experience and strategic initiatives.

### Goals

- **Centralized Management**: Single dashboard for all venue operations and bookings
- **Automate Administrative Tasks**: Free up staff from data entry, analysis, and manual processes
- **Data-Driven Insights**: Provide analytics and reporting for informed decision-making
- **Multi-Venue Support**: Scale from Manor to multiple venues including Hippie Club
- **Ultimate Goal**: 80% reduction in time spent on booking administration tasks

### Success Metrics

- **Stage 1**: 100% of Manor venue hire bookings processed through the platform
- **Stage 3**: 100% of all bookings across all venues processed through the platform
- **Ultimate**: Staff spending 80% less time on administrative booking tasks

## Application Architecture

### Admin-Only Focus

This codebase is exclusively for **staff and venue managers**. Customer-facing booking flows are handled by a separate customer application. This separation ensures:

- **Focused User Experience**: Optimized specifically for staff workflows
- **Security**: Admin functions isolated from customer interfaces  
- **Scalability**: Independent deployment and scaling of admin vs customer systems
- **Maintenance**: Simplified codebase focused on management features

## Implementation Stages

### Stage 1: Core Management Platform (Month 1)
- Staff dashboard with key metrics and today's schedule
- Booking management interface for Manor karaoke and venue hire
- Customer database and booking repository
- Multi-tenant architecture foundation

### Stage 2: Advanced Analytics and Automation (Month 2)
- Enhanced reporting and customer segmentation
- Automated booking management workflows
- Promo code management and bulk communications
- Revenue analytics and performance tracking

### Stage 3: Multi-Venue Expansion (Month 3)
- Hippie Club integration and management
- Unified booking management across venues
- Cross-venue analytics and reporting
- Enhanced mobile staff interface

### Stage 4: Business Intelligence (Month 4)
- Predictive analytics and business intelligence
- Performance benchmarking and KPIs
- Multi-venue framework for future expansion
- Advanced staff productivity tools

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Database**: [To be defined in technical documentation]
- **Deployment**: Vercel
- **Authentication**: [To be defined for staff access]

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Application Structure

\`\`\`
app/
├── dashboard/              # Main dashboard (home page)
├── bookings/              # Booking management
├── customers/             # Customer management
├── reports/               # Analytics and reporting
├── settings/              # Venue and system settings
└── design/                # Design system (dev only)

components/
├── app-sidebar.tsx        # Main navigation
└── ui/                    # shadcn/ui components

mock-data/                 # Development mock data
docs/                      # Project documentation
\`\`\`

## Key Features

### Dashboard
- Real-time metrics: bookings, revenue, occupancy
- Today's schedule with booking management
- Quick actions for common staff tasks
- Multi-venue overview and switching

### Booking Management
- Complete booking lifecycle management
- Calendar view with drag-and-drop scheduling
- Customer communication and notifications
- Pricing management and discount codes

### Customer Management
- Customer profiles and booking history
- Segmentation and loyalty program management
- Communication tools and bulk messaging
- Customer insights and analytics

### Analytics & Reporting
- Revenue tracking and forecasting
- Booking trends and capacity analysis
- Staff performance metrics
- Custom report generation

## Target Users

### Venue Managers
- Day-to-day operational management
- Booking oversight and customer service
- Performance monitoring and reporting

### Regional Managers
- Multi-venue oversight and comparison
- Strategic planning and resource allocation
- Performance benchmarking across venues

### Staff Members
- Booking creation and modification
- Customer service and communication
- Daily operational tasks

## Documentation

All project documentation is located in the `/docs` directory:

- **Product Requirements**: `/docs/product/product-requirements.md`
- **Design Specification**: `/docs/product/design-spec.md`
- **System Architecture**: `/docs/technical/system-architecture.md`
- **API Specification**: `/docs/technical/api-specification.md`
- **Database Schema**: `/docs/technical/entity-relationship-diagram.md`
- **Business Logic**: `/docs/product/business-logic.md`
- **User Flows**: `/docs/product/user-flows.md`
- **Technical Decisions**: `/docs/technical/technical-decisions.md`

## Development Notes

### Mock Data
The application includes comprehensive mock data in `/mock-data` for development and testing. This data simulates realistic venue operations and can be used for:

- Component development and testing
- UI/UX validation
- Performance testing
- Demo and presentation purposes

### Design System
Access the complete design system at `/design` (development only) to view:
- Color palettes and typography
- Component library and usage guidelines
- Layout systems and responsive patterns
- Accessibility standards

## Contributing

1. Review the project documentation in `/docs`
2. Follow the established coding standards and design system
3. Test thoroughly before submitting changes
4. Update documentation when making significant changes

## Deployment

The application is designed for deployment on Vercel with:
- Automatic deployments from main branch
- Preview deployments for pull requests
- Environment variable management
- Performance monitoring and analytics

## License

[Add your license information here]

## Support

For technical support or questions about the platform, please contact the development team.
