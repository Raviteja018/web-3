import { CreditCard, BarChart3, MessageSquare, Bot, Smartphone, Building2 } from 'lucide-react'

export const servicesData = [
  {
    id: 'payment-solutions',
    title: 'Payment Solutions',
    description: 'Comprehensive payment infrastructure designed for modern businesses — from UPI Collection APIs and QR Payments to Merchant Management and Settlement Systems.',
    iconName: 'CreditCard',
    icon: CreditCard,
    items: [
      'Payment Gateway Solutions',
      'UPI Collection APIs',
      'Payout Solutions',
      'QR Payments',
      'Merchant Management Systems',
      'POS Device Integration',
      'Settlement & Reconciliation Systems',
      'Digital Collection Platforms'
    ],
    path: '/services'
  },
  {
    id: 'erp-platforms',
    title: 'Enterprise Resource Planning (ERP)',
    description: 'Integrated ERP platforms to streamline operations across Finance, Inventory, HR, Payroll, Attendance, Asset Management, and Reporting.',
    iconName: 'BarChart3',
    icon: BarChart3,
    items: [
      'Finance & Accounting',
      'Inventory Management',
      'Procurement',
      'Human Resource Management',
      'Payroll Management',
      'Attendance Systems',
      'Asset Management',
      'Reporting & Analytics'
    ],
    path: '/services'
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Business Automation',
    description: 'Engage customers instantly with intelligent WhatsApp solutions including Chatbots, Marketing Campaigns, Order Tracking, and AI-Powered Conversations.',
    iconName: 'MessageSquare',
    icon: MessageSquare,
    items: [
      'WhatsApp Chatbots',
      'Customer Support Automation',
      'Notifications & Alerts',
      'Marketing Campaigns',
      'Order Tracking',
      'CRM Integration',
      'AI-Powered Conversations'
    ],
    path: '/services'
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation Solutions',
    description: 'Unlock efficiency with smart technologies — AI Chatbots, Intelligent Workflow Automation, Predictive Analytics, and Business Intelligence Dashboards.',
    iconName: 'Bot',
    icon: Bot,
    items: [
      'AI Chatbots',
      'Intelligent Workflow Automation',
      'Predictive Analytics',
      'Document Processing',
      'Customer Service Automation',
      'Business Intelligence Dashboards'
    ],
    path: '/services'
  },
  {
    id: 'mobile-web-apps',
    title: 'Mobile & Web Application Development',
    description: 'Delivering world-class digital experiences across Android, iOS, Progressive Web Apps, Enterprise Portals, and Cloud-Based Platforms.',
    iconName: 'Smartphone',
    icon: Smartphone,
    items: [
      'Android Applications',
      'iOS Applications',
      'Progressive Web Apps',
      'Enterprise Portals',
      'Customer Portals',
      'Cloud-Based Platforms'
    ],
    path: '/services'
  },
  {
    id: 'government-solutions',
    title: 'Government Digital Solutions',
    description: 'Enabling smarter governance through technology — Revenue Collection, Property Tax, Grievance Management, Citizen Service Portals, and Smart Kiosk Solutions.',
    iconName: 'Building2',
    icon: Building2,
    items: [
      'Revenue Collection Systems',
      'Property Tax Solutions',
      'Grievance Management Platforms',
      'Citizen Service Portals',
      'Temple Management Systems',
      'Smart Kiosk Solutions',
      'Handheld POS Solutions',
      'Digital Payment Ecosystems'
    ],
    path: '/services'
  }
]
