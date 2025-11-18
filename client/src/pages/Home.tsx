import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, TrendingUp, Zap, Shield, Globe, ChevronDown, Menu } from "lucide-react";
import { APP_TITLE } from "@/const";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-lg sm:text-xl font-bold">{APP_TITLE}</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('overview')} className="text-sm text-muted-foreground hover:text-foreground transition">Overview</button>
            <button onClick={() => scrollToSection('strategy')} className="text-sm text-muted-foreground hover:text-foreground transition">Strategy</button>
            <button onClick={() => scrollToSection('competitive')} className="text-sm text-muted-foreground hover:text-foreground transition">Competition</button>
            <button onClick={() => scrollToSection('thesis')} className="text-sm text-muted-foreground hover:text-foreground transition">Investment Thesis</button>
          </div>
          {/* Mobile Navigation */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <button 
                  onClick={() => scrollToSection('overview')} 
                  className="text-left text-lg font-medium text-foreground hover:text-primary transition py-2"
                >
                  Overview
                </button>
                <button 
                  onClick={() => scrollToSection('strategy')} 
                  className="text-left text-lg font-medium text-foreground hover:text-primary transition py-2"
                >
                  Strategy
                </button>
                <button 
                  onClick={() => scrollToSection('competitive')} 
                  className="text-left text-lg font-medium text-foreground hover:text-primary transition py-2"
                >
                  Competition
                </button>
                <button 
                  onClick={() => scrollToSection('thesis')} 
                  className="text-left text-lg font-medium text-foreground hover:text-primary transition py-2"
                >
                  Investment Thesis
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 sm:mb-6 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5" variant="outline">
              Investment Analysis • November 2025 • Prepared for Mitch Nussbaum
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              <span className="text-foreground">Cummins Inc. (CMI):</span><br />
              <span className="bg-gradient-to-r from-primary via-yellow-300 to-yellow-500 bg-clip-text text-transparent inline-block">
                Powering the AI Revolution
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              A comprehensive investment analysis of Cummins' strategic positioning in the rapidly expanding AI-driven data center power generation market.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
              <Button size="lg" className="gap-2 w-full sm:w-auto min-h-[44px]" onClick={() => scrollToSection('overview')}>
                Read Analysis <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto min-h-[44px]">
                <TrendingUp className="h-4 w-4" />
                View Key Metrics
              </Button>
            </div>
            <div className="mt-12 flex justify-center">
              <ChevronDown className="h-8 w-8 text-muted-foreground animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 sm:py-16 px-4 bg-card/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="glass border-primary/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">24% Growth</CardTitle>
                <CardDescription>Power generation revenue YoY (Q3 2024)</CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass border-primary/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">#2 Market Position</CardTitle>
                <CardDescription>24% market share in data center generators</CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass border-primary/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">37+ Years</CardTitle>
                <CardDescription>Data center industry experience</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="overview" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">Executive Summary</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              This report provides a comprehensive investment analysis of Cummins Inc. (CMI), focusing on its strategic positioning within the rapidly expanding data center power generation market, a sector experiencing unprecedented growth due to the proliferation of Artificial Intelligence (AI). Our research indicates that the surge in AI workloads is creating a structural, multi-year demand for reliable on-site power solutions, presenting a significant opportunity for established industrial leaders.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Cummins, with its extensive experience, strong market share, and forward-looking technology strategy, is well-positioned to capitalize on this trend. The company's Power Systems segment is already demonstrating robust growth, directly fueled by data center demand. While facing formidable competition from market leader Caterpillar, Cummins' strategic focus on a multi-fuel platform—encompassing advanced diesel, natural gas, and hydrogen—provides a key differentiator that aligns with the long-term sustainability goals of the technology industry.
            </p>
          </div>
        </div>
      </section>

      {/* Market Dynamics */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-card/30">
        <div className="container max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12">The AI-Driven Power Imperative</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Exponential Demand</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Goldman Sachs Research forecasts data center power demand will surge by <span className="text-primary font-semibold">175% between 2023 and 2030</span>, equivalent to adding another top 10 country's power consumption.
                </p>
                <p className="text-sm text-muted-foreground">
                  The IEA projects data centers could account for up to 21% of global energy demand by 2030.
                </p>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Grid Constraints</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Existing power grid infrastructure is unprepared for this demand shock. New grid connections face <span className="text-primary font-semibold">multi-year delays</span>, creating a critical bottleneck.
                </p>
                <p className="text-sm text-muted-foreground">
                  AI development pace is now limited by electrical power access, not computing power.
                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Market Opportunity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-4">
                Data center infrastructure market (excluding IT hardware) projected to reach <span className="text-primary font-semibold text-xl">$147 billion by 2028</span>, with a compound annual growth rate of 19%.
              </p>
              <p className="text-muted-foreground">
                To circumvent grid limitations and ensure extreme reliability (99.999% uptime), data center operators are increasingly turning to on-site power generation, transforming backup generators from insurance policies into mission-critical, often primary, power sources.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">Cummins' AI Power Generation Strategy</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 md:mb-12">
            Cummins is strategically positioning itself through a multi-pronged approach that leverages historical strengths while investing in future technologies.
          </p>
          
          <div className="space-y-8">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Legacy of Reliability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  With over <span className="text-primary font-semibold">37 years of experience</span> in the data center market, Cummins has built a reputation for reliability that is critical currency in this risk-averse industry.
                </p>
                <div className="bg-secondary/50 p-4 rounded-lg border border-border/50">
                  <p className="text-sm font-semibold text-primary mb-2">Data Centre Continuous (DCC) Rating</p>
                  <p className="text-sm text-muted-foreground">
                    Allows for unlimited hours of operation with no load restrictions—particularly valuable as data centers increasingly use backup systems for non-emergency purposes like demand response and peak shaving.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Destination Zero: Multi-Fuel Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  At the core of Cummins' long-term strategy is its <span className="text-primary font-semibold">Destination Zero</span> initiative, developing a fuel-agnostic platform that allows customers to reduce emissions over time without stranding assets.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-secondary/50 p-4 rounded-lg border border-border/50">
                    <h4 className="font-semibold mb-2 text-primary">Advanced Diesel</h4>
                    <p className="text-sm text-muted-foreground">Low-emission diesel generators meet current demand for reliable, cost-effective power. The workhorse of the industry.</p>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-lg border border-border/50">
                    <h4 className="font-semibold mb-2 text-primary">Natural Gas (X15N™)</h4>
                    <p className="text-sm text-muted-foreground">Lower emissions profile than diesel; ideal for continuous or high-utilization on-site power.</p>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-lg border border-border/50">
                    <h4 className="font-semibold mb-2 text-primary">Hydrogen (X15H™)</h4>
                    <p className="text-sm text-muted-foreground">Near-zero carbon solution for the future, allowing customers to transition as hydrogen becomes more available.</p>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-lg border border-border/50">
                    <h4 className="font-semibold mb-2 text-primary">Electrification (Accelera™)</h4>
                    <p className="text-sm text-muted-foreground">Zero-emission solutions with battery storage and fuel cells, providing hybrid capabilities.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section id="competitive" className="py-12 sm:py-16 md:py-20 px-4 bg-card/30">
        <div className="container max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12">Competitive Landscape</h2>
          
          <Card className="glass border-primary/20 mb-6 sm:mb-8">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Market Share: An Industrial Triopoly</CardTitle>
              <CardDescription>Data Center Generator Market (2025)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Caterpillar (CAT)</span>
                    <span className="text-primary font-bold">42%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full" style={{width: '42%'}}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">#1 Market Leader</p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Cummins (CMI)</span>
                    <span className="text-primary font-bold">24%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div className="bg-primary/80 h-3 rounded-full" style={{width: '24%'}}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">#2 Challenger</p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Rolls-Royce</span>
                    <span className="text-primary font-bold">21%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div className="bg-primary/60 h-3 rounded-full" style={{width: '21%'}}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">#3 Follower</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Top 3 players control <span className="text-primary font-semibold">87% of the market</span>, creating formidable barriers to entry.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Caterpillar's Strengths</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Largest market share and brand recognition</li>
                  <li>• Vast global service network</li>
                  <li>• Strong financing arm (Cat Financial)</li>
                  <li>• Excellent fuel efficiency</li>
                  <li>• Stock up 45% in 2025</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glass border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Cummins' Differentiators</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <span className="text-primary">Multi-fuel technology leadership</span></li>
                  <li>• <span className="text-primary">37+ years specialized data center expertise</span></li>
                  <li>• <span className="text-primary">DCC rating for unlimited operation</span></li>
                  <li>• <span className="text-primary">"Power of One™" integrated approach</span></li>
                  <li>• Stock up 20% in 2025</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section id="thesis" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12">Investment Thesis</h2>
          
          <Card className="glass border-primary/20 mb-6 sm:mb-8">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Financial Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
                <div className="text-center p-4 bg-secondary/50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">+24%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Power Generation Revenue YoY</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">19.4%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Power Systems EBITDA Margin</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">$462</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Current Stock Price</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Cummins' Power Systems segment saw sales grow 17% to $1.7 billion with EBITDA margins expanding from 16.2% to 19.4% in Q3 2024. Distribution segment also benefited with 16% revenue growth.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <Card className="glass border-green-500/20">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-green-400">Bull Case</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3 text-sm text-muted-foreground">
                  <li>✓ <span className="font-semibold">Durable structural growth catalyst</span> from AI data center boom</li>
                  <li>✓ <span className="font-semibold">Strong #2 position</span> with differentiated multi-fuel strategy</li>
                  <li>✓ <span className="font-semibold">Attractive valuation</span> relative to Caterpillar</li>
                  <li>✓ <span className="font-semibold">15 years of dividend increases</span>, 50% cash return commitment</li>
                  <li>✓ <span className="font-semibold">Technology leadership</span> in hydrogen and sustainability</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glass border-red-500/20">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-red-400">Bear Case</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3 text-sm text-muted-foreground">
                  <li>✗ Caterpillar's market leadership and stronger stock performance</li>
                  <li>✗ Accelera division currently unprofitable ($115M EBITDA loss Q3 2024)</li>
                  <li>✗ Battery storage advances could disrupt generator demand</li>
                  <li>✗ Weakness in core trucking market</li>
                  <li>✗ Execution risk in scaling production</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Analyst Consensus</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 mb-4">
                <div className="flex-1 sm:flex-none">
                  <div className="text-xs sm:text-sm text-muted-foreground mb-1">Rating</div>
                  <div className="text-lg sm:text-xl font-bold text-primary">Buy / Overweight</div>
                </div>
                <div className="flex-1 sm:flex-none">
                  <div className="text-xs sm:text-sm text-muted-foreground mb-1">Average Price Target</div>
                  <div className="text-lg sm:text-xl font-bold text-primary">$446</div>
                </div>
                <div className="flex-1 sm:flex-none">
                  <div className="text-xs sm:text-sm text-muted-foreground mb-1">Range</div>
                  <div className="text-lg sm:text-xl font-bold">$235 - $599</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                18 analysts covering: 10 Buy, 7 Hold, 1 Sell. Some analysts suggest stock could be 27% undervalued.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-card/30">
        <div className="container max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">Conclusion</h2>
          <Card className="glass border-primary/20">
            <CardContent className="pt-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Cummins Inc. stands at the intersection of industrial manufacturing and the digital revolution. The company has successfully pivoted to become a critical enabler of the AI boom, providing the reliable power that underpins the world's most advanced data centers.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                While competitor Caterpillar currently holds a larger market share, Cummins' focus on technological innovation, its comprehensive multi-fuel strategy, and its deep expertise in the data center market position it for sustained growth and potential market share gains.
              </p>
              <p className="text-base sm:text-lg text-foreground leading-relaxed font-semibold">
                The investment case for Cummins is compelling: the company is benefiting from a powerful and durable structural tailwind, its financial performance in the relevant segments is strong, and its valuation remains reasonable. For investors seeking exposure to the AI infrastructure buildout beyond high-flying semiconductor stocks, Cummins offers a more grounded, value-oriented opportunity.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* References */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12">References</h2>
          <Card className="glass">
            <CardContent className="pt-6">
              <ol className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground">
                <li>
                  <span className="text-primary font-semibold">[1]</span> Goldman Sachs Research. (2025, November 10). <em>GS SUSTAIN: Data Center Power Demand: The 6 Ps Driving Growth and Constraints</em>. Retrieved from{' '}
                  <a href="https://www.goldmansachs.com/insights/goldman-sachs-research/data-center-power-demand-the-6-ps-driving-growth-and-constraints" className="text-primary hover:underline break-words" target="_blank" rel="noopener noreferrer">
                    goldmansachs.com
                  </a>
                </li>
                <li>
                  <span className="text-primary font-semibold">[2]</span> MIT Sloan. (2025, January 7). <em>AI has high data center energy costs — but there are solutions</em>. Retrieved from{' '}
                  <a href="https://mitsloan.mit.edu/ideas-made-to-matter/ai-has-high-data-center-energy-costs-there-are-solutions" className="text-primary hover:underline break-words" target="_blank" rel="noopener noreferrer">
                    mitsloan.mit.edu
                  </a>
                </li>
                <li>
                  <span className="text-primary font-semibold">[3]</span> Business Insider. (2025, September 18). <em>Meet the non-tech companies cashing in on the AI data center spending boom</em>. Retrieved from{' '}
                  <a href="https://www.businessinsider.com/rolls-royce-caterpillar-cash-in-on-ai-boom-data-centers-2025-9" className="text-primary hover:underline break-words" target="_blank" rel="noopener noreferrer">
                    businessinsider.com
                  </a>
                </li>
                <li>
                  <span className="text-primary font-semibold">[4]</span> Data Centre Magazine. (2025, November 12). <em>Cummins and NTT: Powering The Future Of Data Centres</em>. Retrieved from{' '}
                  <a href="https://datacentremagazine.com/articles/cummins-and-ntt-powering-the-future-of-data-centres" className="text-primary hover:underline break-words" target="_blank" rel="noopener noreferrer">
                    datacentremagazine.com
                  </a>
                </li>
                <li>
                  <span className="text-primary font-semibold">[5]</span> Sidley Austin LLP. (2025, May 15). <em>EPA Clarifies Rules for Backup Generator Use</em>. Retrieved from{' '}
                  <a href="https://www.sidley.com/en/insights/newsupdates/2025/05/us-epa-issues-new-guidance-on-data-center-emergency-generator-operations" className="text-primary hover:underline break-words" target="_blank" rel="noopener noreferrer">
                    sidley.com
                  </a>
                </li>
                <li>
                  <span className="text-primary font-semibold">[6]</span> Cummins Inc. (2024, November 5). <em>Cummins Reports Strong Third Quarter 2024 Results</em>. Retrieved from{' '}
                  <a href="https://investor.cummins.com/news/detail/662/cummins-reports-strong-third-quarter-2024-results" className="text-primary hover:underline break-words" target="_blank" rel="noopener noreferrer">
                    investor.cummins.com
                  </a>
                </li>
                <li>
                  <span className="text-primary font-semibold">[7]</span> MarketBeat. (2025, November 17). <em>Cummins (CMI) Stock Forecast and Price Target 2025</em>. Retrieved from{' '}
                  <a href="https://www.marketbeat.com/stocks/NYSE/CMI/forecast/" className="text-primary hover:underline break-words" target="_blank" rel="noopener noreferrer">
                    marketbeat.com
                  </a>
                </li>
                <li>
                  <span className="text-primary font-semibold">[8]</span> Public. (2025, November 17). <em>Cummins (CMI) Stock Forecast: Analyst Ratings, Predictions</em>. Retrieved from{' '}
                  <a href="https://public.com/stocks/cmi/forecast-price-target" className="text-primary hover:underline break-words" target="_blank" rel="noopener noreferrer">
                    public.com
                  </a>
                </li>
              </ol>
              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-xs text-muted-foreground">
                  <strong>Disclaimer:</strong> This analysis is for informational purposes only and does not constitute investment advice. All data and projections are based on publicly available information as of November 2025. Investors should conduct their own due diligence and consult with financial advisors before making investment decisions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 border-t border-border/50">
        <div className="container text-center">
          <p className="text-xs sm:text-sm text-muted-foreground mb-2 px-2">
            Investment Analysis Report • November 17, 2025
          </p>
          <p className="text-[10px] sm:text-xs text-muted-foreground px-2">
            Prepared by Power Insights AI • For informational purposes only • Not investment advice
          </p>
        </div>
      </footer>
    </div>
  );
}
