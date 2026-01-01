export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  challenge: string;
  solution: string[];
  impact: string[];
  image: string;
}

export const caseStudies: Record<string, CaseStudy> = {
  "document-processing": {
    id: "document-processing",
    title: "Document Processing Automation",
    subtitle: "Insurance company, 2024",
    tags: ["Document Extraction", "OCR Integration", "Workflow Automation"],
    challenge:
      "Manual processing of 2,000+ insurance claims per month created a 5-day backlog and 15% error rate in data entry.",
    solution: [
      "Built custom OCR pipeline with validation rules for policy documents, claims forms, and medical records.",
      "Automated data extraction and routing to underwriters based on claim type and complexity.",
      "Integrated with existing CRM (Salesforce) to auto-populate customer records and trigger approval workflows.",
      "Created real-time dashboard showing processing status, error rates, and bottlenecks.",
    ],
    impact: [
      "Processing time reduced from 5 days to 2 hours per claim (94% faster).",
      "Error rate dropped from 15% to less than 2%.",
      "Freed up 160 hours/month of manual data entry work.",
      "Backlog cleared within first week of deployment.",
      "ROI achieved in 3 months through labor cost savings.",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=1200&fit=crop",
  },

  "compliance-monitoring": {
    id: "compliance-monitoring",
    title: "Compliance Monitoring & Alerting",
    subtitle: "Fintech startup, 2023",
    tags: ["Regulatory Compliance", "Real-time Alerts", "Audit Automation"],
    challenge:
      "Manual compliance checks across multiple regulatory frameworks (RBI, SEBI) required 3 full-time staff and still missed edge cases.",
    solution: [
      "Automated daily reconciliation of transactions against RBI regulatory limits and KYC requirements.",
      "Built real-time alert system that flags suspicious patterns before they become violations.",
      "Created compliance dashboard with pre-filled audit reports and evidence trails.",
      "Integrated with Slack for instant notifications on threshold breaches.",
    ],
    impact: [
      "Zero regulatory violations in 6 months of operation.",
      "Passed RBI audit with zero findings on first attempt.",
      "Reduced compliance team from 3 people to 1 (who now handles exceptions only).",
      "Alert response time improved from 24 hours to under 10 minutes.",
      "Saved 2.5L in potential fines and 80+ hours/month in manual reporting.",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=1200&fit=crop",
  },

  "data-quality": {
    id: "data-quality",
    title: "Data Quality Pipeline",
    subtitle: "E-commerce platform, 2024",
    tags: ["Data Validation", "ETL Pipeline", "Quality Scoring"],
    challenge:
      "Poor product data quality (missing fields, duplicate entries, incorrect categorization) led to 40% of listings being unsearchable.",
    solution: [
      "Built automated data validation pipeline that checks 50+ quality rules before publishing listings.",
      "Created de-duplication logic using fuzzy matching to identify and merge duplicate products.",
      "Implemented auto-categorization using ML to correctly classify 95% of products.",
      "Added bulk editing tools and quality score dashboard for merchandising team.",
    ],
    impact: [
      "Data quality score improved from 60% to 95% in 2 weeks.",
      "Searchable listings increased from 60% to 98% of catalog.",
      "Conversion rate improved by 23% due to better product discoverability.",
      "Manual data cleanup time reduced from 40 hours/week to 5 hours/week.",
      "Duplicate listings reduced by 89%, improving customer trust.",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=1200&fit=crop",
  },
};

export function getCaseStudy(id: string): CaseStudy | null {
  return caseStudies[id] || null;
}
