import Image from "next/image";
import { notFound } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "Job Search Platform - Connecting Candidates and Companies",
    date: "2023",
    description:
      "Our workforce solutions platform stands at the forefront of India's employment landscape, tackling the crucial task of connecting qualified candidates with suitable companies. Driven by a clear vision, our platform simplifies the staffing process, providing a seamless solution to address the existing workforce gap.",
    longDescription: `In a rapidly evolving job market, both employers and job seekers face significant challenges:

    Employers: Struggle to find qualified candidates efficiently and often encounter lengthy hiring processes.
    Job Seekers: Face difficulties in navigating numerous opportunities, leading to frustration and missed chances.

    We developed this platform to bridge the gap between employers and job seekers by providing a streamlined hiring process that benefits both parties.`,
    tags: ["React Native", "Node.js", "MongoDB", "AWS", "Mobile App"],
    images: ["/images/projects/workforce/workforce.png"],
    features: [
      "Super Filter: Find jobs that fit you perfectly (location, pay, skills, etc.)",
      "Job Alerts: Get notified when your dream job pops up!",
      "Easy Hiring: Manage applications and find the best fit quickly",
      "Smart Matching: Identify candidates who are a perfect match for job openings",
      "E-Interview: Facilitate virtual interviews for efficient candidate assessment",
      "Multilingual Support: Available in English, Hindi, and Odia",
    ],
    platforms: ["Android", "iOS", "Web"],
    status: "Completed",
    industry: "Human Resources/Employment Services",
  },
  {
    id: 2,
    title: "Marketplace App for Buying and Selling",
    date: "2023",
    description:
      "A user-friendly marketplace app tailored to enhance the buying and selling experience while addressing existing challenges in local commerce. The platform simplifies transactions, builds trust between users, and scales efficiently with growing demand.",
    longDescription: `The client needed an easy-to-use app for buying and selling goods locally. Existing platforms were complex and didn't offer proper tracking for orders or communication, leading to trust issues between buyers and sellers and causing low engagement. The app also needed to handle an increasing number of users and listings as it grew.

    Identifying the Need and Challenges:
    - Complexity of Existing Platforms: Many users found current solutions cumbersome and unintuitive
    - Lack of Tracking: Inadequate order tracking and communication features hindered user experience
    - Trust Issues: Buyers and sellers lacked confidence in transactions, resulting in lower engagement
    - Scalability Requirements: The app needed to be designed to accommodate growth in user base and listings

    Our Solution:
    We developed a user-friendly marketplace app tailored to enhance the buying and selling experience while addressing the existing challenges.`,
    tags: ["React Native", "Node.js", "MongoDB", "Firebase", "Mobile App"],
    images: ["/images/projects/marketplace/marketplace.png"],
    features: [
      "User-Friendly Interface: Simplified navigation for effortless buying and selling",
      "Category Search and Location Filters: Easy to find items based on specific criteria",
      "Admin Tools: Integrated features for monitoring and managing transactions",
      "User Verification and Rating System: Built trust between buyers and sellers",
      "Scalable Architecture: Designed to handle increasing users and listings",
      "Real-time Chat: Integrated messaging system for buyer-seller communication",
    ],
    platforms: ["Android", "iOS"],
    status: "Completed",
    industry: "E-Commerce / Marketplace",
  },
  {
    id: 3,
    title: "FinTech App for Education Fee Payment",
    date: "2023",
    description:
      "A dedicated FinTech platform that revolutionizes educational fee payments by providing institutions with robust payment tracking while offering parents and students a convenient, mobile-friendly solution for timely payments.",
    longDescription: `Educational institutions lacked a dedicated platform for managing student fee payments, leading to delays and confusion. Schools and colleges struggled to track payments, and there was no automated system to charge fines for late payments. Parents and students needed a flexible, mobile-friendly solution to pay fees on time from anywhere.

    Solution Overview:
    We developed a dedicated FinTech app specifically for educational fee payments, streamlining the management process for institutions and enhancing the payment experience for parents and students.

    The platform bridges the gap between educational institutions and parents/students by providing a seamless, automated payment system that benefits all stakeholders.`,
    tags: ["React", "Node.js", "PostgreSQL", "AWS", "Payment Gateway"],
    images: ["/images/projects/fintech/fintech.png"],
    features: [
      "Real-Time Payment Tracking: Monitor payment status and identify overdue amounts",
      "Automated Fine System: Automatic late fee charges for overdue payments",
      "Timely Notifications: Payment deadline reminders and overdue alerts",
      "User-Friendly Design: Secure and convenient mobile payments",
      "Payment Analytics: Comprehensive reporting and insights",
      "Multi-Institution Support: Manage payments across multiple schools",
    ],
    platforms: ["Web", "Android", "iOS"],
    status: "Completed",
    industry: "FinTech / Education",
  },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find((p) => p.id === Number(id));
  if (!project) notFound();
  return (
    <main className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header - Title and Tags at top */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">
              {project.title}
            </h1>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-sm font-medium text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Main content wrapper */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Image section */}
          <div className="md:w-1/2">
            <Image
              src={project.images[0]}
              alt={`${project.title} main image`}
              width={2000}
              height={1000}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Content section */}
          <div className="md:w-1/2 space-y-8">
            {/* Content */}
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <h5 className="text-2xl font-semibold text-gray-900 tracking-tight">
                  Overview
                </h5>
                <p>{project.description}</p>
                <p className="whitespace-pre-line">{project.longDescription}</p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h5 className="text-2xl font-semibold text-gray-900 tracking-tight">
                  Innovative Features
                </h5>
                <div className="grid grid-cols-1 gap-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platforms */}
              <div className="space-y-4">
                <h5 className="text-2xl font-semibold text-gray-900 tracking-tight">
                  Available Platforms
                </h5>
                <div className="flex gap-4">
                  {project.platforms.map((platform, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 font-medium"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              {/* Industry */}
              <div className="space-y-2">
                <h5 className="text-2xl font-semibold text-gray-900 tracking-tight">
                  Industry
                </h5>
                <p className="text-gray-600">{project.industry}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
