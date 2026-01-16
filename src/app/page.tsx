'use client'

import { useState } from 'react'

// Icons
const ShieldCheckIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const LightningIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const DocumentIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const VideoIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
)

const DollarIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const StarIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const PlayIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
)

const SearchIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)

const HandshakeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
  </svg>
)

const TrendingUpIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const LockIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

export default function Home() {
  const [activeTab, setActiveTab] = useState<'employers' | 'workers'>('employers')

  return (
    <main className="overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center">
                <ShieldCheckIcon />
              </div>
              <span className="text-xl font-bold text-gray-900">TradeVerify</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#platform" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Platform</a>
              <a href="#employers" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">For Employers</a>
              <a href="#workers" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">For Workers</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Pricing</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden sm:block text-gray-600 hover:text-gray-900 font-medium">Sign In</button>
              <button className="btn-primary text-sm px-6 py-3">Get Started</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/4 -right-64 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-64 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <div className="badge badge-blue mb-6">
                <LightningIcon />
                <span>The Future of Trades Hiring</span>
              </div>
              <h1 className="headline-xl mb-6">
                Where <span className="text-gradient">Skilled Trades</span> Meet Great Employers
              </h1>
              <p className="subheadline mb-10 max-w-xl">
                The premium hiring platform connecting verified, licensed tradespeople with employers who value quality.
                Real credentials. Real skills. Real matches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="btn-primary">
                  I&apos;m Hiring
                  <ArrowRightIcon />
                </button>
                <button className="btn-secondary">
                  I&apos;m Looking for Work
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon />
                  <span>License Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon />
                  <span>Background Checked</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon />
                  <span>Skills Assessed</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative animate-slide-in-right delay-200">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
                {/* Mock dashboard preview */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Worker cards preview */}
                <div className="space-y-4">
                  {[
                    { trade: 'Master Electrician', license: 'ME-48291', rating: 4.9, verified: true },
                    { trade: 'Licensed Plumber', license: 'PL-77432', rating: 4.8, verified: true },
                    { trade: 'HVAC Technician', license: 'HV-55123', rating: 5.0, verified: true },
                  ].map((worker, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center text-white font-bold">
                          {worker.trade.charAt(0)}
                        </div>
                        <div>
                          <div className="text-white font-semibold">{worker.trade}</div>
                          <div className="text-gray-400 text-sm">License: {worker.license}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-yellow-400">
                          <StarIcon />
                          <span className="text-white font-medium">{worker.rating}</span>
                        </div>
                        {worker.verified && (
                          <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                            <CheckIcon />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating stats */}
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 animate-float">
                  <div className="text-3xl font-bold text-gradient">98%</div>
                  <div className="text-sm text-gray-500">Match Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '23%', label: 'Higher Pay vs. Industry Avg' },
              { number: '47%', label: 'Longer Employee Retention' },
              { number: '98%', label: 'Placement Rate' },
              { number: '14 days', label: 'Avg. Time to Hire' },
            ].map((stat, i) => (
              <div key={i} className="animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="stat-number text-gradient">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Hiring Journey - Animated Timeline */}
      <section className="section section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800" />

        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4 block">— The Hiring Journey —</span>
            <h2 className="headline-lg text-white mb-6">
              From Search to <span className="text-gradient-accent">Success</span>
            </h2>
            <p className="text-xl text-gray-400">
              Every great hire follows a path. We&apos;ve built the system to make each step seamless.
            </p>
          </div>

          {/* Animated Timeline */}
          <div className="relative">
            {/* Progress Line Background */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gray-700 hidden md:block" />

            {/* Animated Progress Line */}
            <div className="absolute top-16 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hidden md:block animate-journey-line" style={{ width: '80%' }} />

            {/* Journey Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {[
                {
                  icon: <SearchIcon />,
                  title: 'Search',
                  description: 'Post your job or browse verified candidates',
                  active: true
                },
                {
                  icon: <GlobeIcon />,
                  title: 'Match',
                  description: 'AI matches skills, certs, and preferences',
                  active: true
                },
                {
                  icon: <ShieldCheckIcon />,
                  title: 'Verify',
                  description: 'Licenses and backgrounds auto-checked',
                  active: true
                },
                {
                  icon: <PhoneIcon />,
                  title: 'Interview',
                  description: 'AI-recorded calls ensure quality',
                  active: false
                },
                {
                  icon: <TrendingUpIcon />,
                  title: 'Hire',
                  description: 'Guaranteed placement, 90-day protection',
                  active: false
                },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  {/* Icon Circle */}
                  <div
                    className={`relative w-32 h-32 rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      step.active
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30 scale-110'
                        : 'bg-gray-800 border border-gray-700'
                    }`}
                    style={{ animationDelay: `${i * 200}ms` }}
                  >
                    <div className={`w-10 h-10 ${step.active ? 'text-white' : 'text-gray-500'}`}>
                      {step.icon}
                    </div>
                    {/* Pulse ring for active */}
                    {step.active && (
                      <div className="absolute inset-0 rounded-3xl bg-blue-500/20 animate-ping" style={{ animationDuration: '2s' }} />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-2 ${step.active ? 'text-white' : 'text-gray-500'}`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm max-w-[180px] ${step.active ? 'text-gray-300' : 'text-gray-600'}`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Example Card */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8">
              <div className="text-sm text-blue-400 font-semibold mb-4">Example: HVAC Company in Phoenix</div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">47</div>
                  <div className="text-gray-400 text-sm">Verified candidates matched</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-1">8 days</div>
                  <div className="text-gray-400 text-sm">From posting to hire</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-1">2 years</div>
                  <div className="text-gray-400 text-sm">Still employed (and promoted)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge badge-blue mx-auto mb-6">
              <ShieldCheckIcon />
              <span>The Platform</span>
            </div>
            <h2 className="headline-lg mb-6">
              Built Different for <span className="text-gradient">Skilled Trades</span>
            </h2>
            <p className="subheadline">
              Generic job boards don&apos;t understand trades. We do. Every feature is built for the unique needs of skilled workers and the employers who need them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheckIcon />,
                title: 'Real-Time License Verification',
                description: 'We verify licenses directly with state databases. No fake credentials. No expired licenses. Just verified, qualified workers.',
                color: 'bg-blue-500',
              },
              {
                icon: <VideoIcon />,
                title: 'Skills Assessment Videos',
                description: '2-minute troubleshooting demos let you see actual skills before you hire. Watch candidates diagnose real problems.',
                color: 'bg-purple-500',
              },
              {
                icon: <PhoneIcon />,
                title: 'AI-Recorded Interviews',
                description: 'Our AI records and analyzes interviews, ensuring every conversation counts and you only pay for qualified matches.',
                color: 'bg-green-500',
              },
              {
                icon: <DocumentIcon />,
                title: 'Certification Tracking',
                description: 'EPA 608, OSHA, CDL, brand certifications — all tracked, verified, and kept up to date automatically.',
                color: 'bg-orange-500',
              },
              {
                icon: <DollarIcon />,
                title: 'Wage Transparency',
                description: 'Real pay ranges required. Workers know what jobs pay before applying. No more wasted time on lowball offers.',
                color: 'bg-teal-500',
              },
              {
                icon: <ClockIcon />,
                title: 'Instant Job Alerts',
                description: 'Workers set their criteria and get instant notifications when matching jobs appear. Right job, right time.',
                color: 'bg-pink-500',
              },
            ].map((feature, i) => (
              <div key={i} className="feature-card">
                <div className={`feature-icon ${feature.color} text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers / For Workers Tabs Section */}
      <section id="employers" className="section section-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="headline-lg mb-6">
              One Platform, Two <span className="text-gradient-accent">Powerful</span> Experiences
            </h2>
          </div>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveTab('employers')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                activeTab === 'employers'
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="flex items-center gap-2">
                <BriefcaseIcon />
                For Employers
              </span>
            </button>
            <button
              onClick={() => setActiveTab('workers')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                activeTab === 'workers'
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="flex items-center gap-2">
                <UsersIcon />
                For Workers
              </span>
            </button>
          </div>

          {/* Employers Content */}
          {activeTab === 'employers' && (
            <div className="grid lg:grid-cols-2 gap-16 items-center animate-slide-up">
              <div>
                <div className="badge badge-orange mb-6">
                  <BriefcaseIcon />
                  <span>For Employers</span>
                </div>
                <h3 className="headline-md mb-6 text-white">
                  Find Verified, Skilled Workers in Days, Not Months
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  Stop sifting through unqualified applicants. Every worker on TradeVerify is license-verified,
                  background-checked, and skills-assessed before you see them.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Pre-verified licenses from state databases',
                    'Skills demo videos before you interview',
                    'Background and drug test status visible',
                    'Filter by certifications, travel radius, rate',
                    'Only pay for qualified interviews',
                    '90-day hire guarantee',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="btn-accent">
                  Start Hiring
                  <ArrowRightIcon />
                </button>
              </div>
              <div className="relative">
                <div className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10">
                  <h4 className="text-white font-semibold mb-6">Filter by what matters</h4>
                  <div className="space-y-4">
                    {[
                      { label: 'License Type', value: 'Master Electrician' },
                      { label: 'Certifications', value: 'EPA 608, OSHA 30' },
                      { label: 'Experience', value: '5+ years' },
                      { label: 'Travel Radius', value: '50 miles' },
                      { label: 'Rate Range', value: '$35-50/hr' },
                      { label: 'Availability', value: 'Immediate' },
                    ].map((filter, i) => (
                      <div key={i} className="flex justify-between items-center py-3 border-b border-white/10">
                        <span className="text-gray-400">{filter.label}</span>
                        <span className="text-white font-medium">{filter.value}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 py-4 bg-gradient-accent text-white font-semibold rounded-xl">
                    Show 47 Matches
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Workers Content */}
          {activeTab === 'workers' && (
            <div id="workers" className="grid lg:grid-cols-2 gap-16 items-center animate-slide-up">
              <div>
                <div className="badge badge-green mb-6">
                  <UsersIcon />
                  <span>For Workers</span>
                </div>
                <h3 className="headline-md mb-6 text-white">
                  Find Jobs That Pay What You&apos;re Worth
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  Tired of wasting time on lowball offers? Every job on TradeVerify shows real pay ranges,
                  benefits, and company ratings from other trade workers.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Transparent pay ranges on every job',
                    'Company ratings from fellow tradespeople',
                    'Benefits comparison at a glance',
                    'Instant alerts for matching jobs',
                    'Your profile stays anonymous until you choose',
                    'Interview scheduling that respects your time',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="btn-primary">
                  Create Your Profile
                  <ArrowRightIcon />
                </button>
              </div>
              <div className="relative">
                <div className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10">
                  <h4 className="text-white font-semibold mb-2">Job Match Preview</h4>
                  <p className="text-gray-400 text-sm mb-6">Company names hidden until you apply</p>
                  <div className="space-y-4">
                    {[
                      { location: 'Portland Metro Area', role: 'Commercial Electrician', pay: '$42-52/hr', rating: 4.8, benefits: 'Full Benefits' },
                      { location: 'Greater Seattle', role: 'Service Technician', pay: '$38-48/hr', rating: 4.6, benefits: '401k + Health' },
                      { location: 'Denver Region', role: 'Journeyman Plumber', pay: '$40-50/hr', rating: 4.9, benefits: 'Union Shop' },
                    ].map((job, i) => (
                      <div key={i} className="bg-white/10 rounded-xl p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="text-white font-semibold">{job.role}</div>
                            <div className="text-gray-400 text-sm flex items-center gap-2">
                              <LockIcon />
                              <span>{job.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-yellow-400">
                            <StarIcon />
                            <span className="text-white text-sm">{job.rating}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-green-400 font-semibold">{job.pay}</span>
                          <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">{job.benefits}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                    <p className="text-blue-300 text-sm text-center">
                      <span className="font-semibold">Your info stays private too</span> — employers see your skills, not your name until you accept
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How Verification Works */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge badge-green mx-auto mb-6">
              <ShieldCheckIcon />
              <span>Trust Built In</span>
            </div>
            <h2 className="headline-lg mb-6">
              How Our <span className="text-gradient">Verification</span> Works
            </h2>
            <p className="subheadline">
              We don&apos;t just take people&apos;s word for it. Every credential is verified directly with the source.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'License Lookup',
                description: 'Real-time verification against state licensing databases. We check the source, not just a PDF.',
                icon: <DocumentIcon />,
              },
              {
                step: '02',
                title: 'Background Check',
                description: 'Integrated background checks through Checkr. Clean results displayed, issues flagged.',
                icon: <ShieldCheckIcon />,
              },
              {
                step: '03',
                title: 'Skills Demo',
                description: '2-minute video assessments where workers demonstrate real troubleshooting ability.',
                icon: <VideoIcon />,
              },
              {
                step: '04',
                title: 'Continuous Updates',
                description: 'Licenses tracked automatically. Expiration alerts. Always current, always verified.',
                icon: <ClockIcon />,
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center text-blue-600">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-content text-white text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge badge-orange mx-auto mb-6">
              <DollarIcon />
              <span>Simple Pricing</span>
            </div>
            <h2 className="headline-lg mb-6">
              Pay Per <span className="text-gradient">Qualified</span> Interview
            </h2>
            <p className="subheadline">
              No subscriptions. No monthly fees. Only pay when you get a qualified interview with a verified candidate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { tier: 'Helper/Apprentice', price: '$50', desc: 'Entry-level and apprentice positions' },
              { tier: 'Journeyman', price: '$100', desc: 'Licensed journeyman level workers' },
              { tier: 'Master/Licensed', price: '$150', desc: 'Master licensed professionals' },
              { tier: 'Specialty', price: '$200', desc: 'Specialized certifications & rare skills' },
            ].map((plan, i) => (
              <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center card-hover">
                <div className="text-gray-500 font-medium mb-2">{plan.tier}</div>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <div className="text-sm text-gray-400 mb-6">per qualified interview</div>
                <p className="text-gray-600 text-sm">{plan.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">90-Day Hire Guarantee</h3>
            <p className="text-blue-100 max-w-2xl mx-auto mb-6">
              If a hire doesn&apos;t work out within 90 days, we&apos;ll credit you for a replacement search.
              We&apos;re confident in our matches because we verify everything upfront.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span>No monthly fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span>Pay only for qualified matches</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span>90-day guarantee included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="headline-lg mb-6 text-white">
              Ready to Hire <span className="text-gradient-accent">Smarter</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of companies and skilled tradespeople already using TradeVerify
              to make better hiring decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="btn-accent text-lg">
                Get Early Access
                <ArrowRightIcon />
              </button>
              <button className="btn-secondary text-lg">
                Schedule a Demo
              </button>
            </div>

            {/* Email capture */}
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="btn-primary px-6">
                  <ArrowRightIcon />
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-3">
                Join the waitlist. We&apos;ll notify you when we launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center text-white">
                  <ShieldCheckIcon />
                </div>
                <span className="text-xl font-bold text-white">TradeVerify</span>
              </div>
              <p className="text-sm leading-relaxed">
                The premium hiring platform for skilled trades. Verified workers. Quality employers. Better matches.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">For Employers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Workers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Trades</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Electricians</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Plumbers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HVAC Technicians</a></li>
                <li><a href="#" className="hover:text-white transition-colors">All Trades</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">&copy; 2025 TradeVerify. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
