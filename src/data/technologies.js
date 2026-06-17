import { Smartphone, Globe, Brain, Shield } from 'lucide-react'

export const techExpertiseData = [
  {
    category: 'Development Platforms',
    icon: Smartphone,
    color: 'from-orange-500 to-yellow-500',
    items: ['Android Development', 'iOS Development']
  },
  {
    category: 'Web Technologies',
    icon: Globe,
    color: 'from-amber-500 to-yellow-600',
    items: ['Modern HTML5/CSS3', 'React & Next.js Frameworks', 'Tailwind CSS Stylings', 'Node.js & Express APIs']
  },
  {
    category: 'Emerging Technologies',
    icon: Brain,
    color: 'from-primary to-secondary',
    items: ['Artificial Intelligence (AI)', 'Machine Learning (ML)', 'Cloud Computing (AWS/GCP/Azure)']
  },
  {
    category: 'Security & Infrastructure',
    icon: Shield,
    color: 'from-orange-600 to-amber-600',
    items: [
      'Cybersecurity Audits',
      'Database Management (SQL/NoSQL)',
      'API Integration Systems',
      'Payment Gateway Integration'
    ]
  }
]
