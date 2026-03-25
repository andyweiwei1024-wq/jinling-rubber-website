import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Language, defaultLanguage } from '@/lib/i18n/config';
import { getAllTranslations, getTranslation } from '@/lib/i18n/server';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Globe2, 
  MessageSquare,
  Send,
  CheckCircle2
} from 'lucide-react';

interface PageProps {
  params?: Promise<{ lang?: string }>;
}

export default async function ContactPage({ params }: PageProps) {
  const resolvedParams = params ? await params : { lang: undefined };
  const lang = (resolvedParams.lang as Language) || defaultLanguage;
  const translations = getAllTranslations(lang);
  
  const t = (key: string, fallback?: string) => getTranslation(lang, key, fallback);
  const navPath = (path: string) => lang === defaultLanguage ? path : `/${lang}${path}`;

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.address.title', 'Address'),
      value: t('contact.info.address.value', 'Shanghai, China'),
      description: t('contact.info.address.desc', 'Visit our headquarters'),
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title', 'Phone'),
      value: t('contact.info.phone.value', '+86-21-65392338'),
      description: t('contact.info.phone.desc', 'Mon-Fri, 9:00-18:00 (GMT+8)'),
    },
    {
      icon: Mail,
      title: t('contact.info.email.title', 'Email'),
      value: t('contact.info.email.value', 'andyweiwei1024@gmail.com'),
      description: t('contact.info.email.desc', 'General inquiries'),
    },
    {
      icon: Clock,
      title: t('contact.info.hours.title', 'Business Hours'),
      value: t('contact.info.hours.value', 'Mon - Fri: 9:00 - 18:00'),
      description: t('contact.info.hours.desc', 'GMT+8 Shanghai Time'),
    },
  ];

  const faqs = [
    {
      question: t('contact.faq.moq.q', 'What is the minimum order quantity?'),
      answer: t('contact.faq.moq.a', 'MOQ varies by product. For standard products, we can accommodate small trial orders. Contact our sales team for specific requirements.'),
    },
    {
      question: t('contact.faq.samples.q', 'Do you offer samples?'),
      answer: t('contact.faq.samples.a', 'Yes, we provide samples for quality evaluation. Sample costs and shipping fees may apply.'),
    },
    {
      question: t('contact.faq.payment.q', 'What are your payment terms?'),
      answer: t('contact.faq.payment.a', 'We accept T/T, L/C, and PayPal. Standard terms are 30% deposit, 70% before shipment.'),
    },
    {
      question: t('contact.faq.custom.q', 'Do you provide custom solutions?'),
      answer: t('contact.faq.custom.a', 'Yes! We offer OEM/ODM services for custom products. Our engineering team can assist with design and development.'),
    },
    {
      question: t('contact.faq.cert.q', 'What certifications do you have?'),
      answer: t('contact.faq.cert.a', 'We are ISO 9001:2015 certified. Products carry relevant certifications including CE, RoHS compliance.'),
    },
    {
      question: t('contact.faq.lead.q', 'What is the lead time for orders?'),
      answer: t('contact.faq.lead.a', 'Standard products: 7-15 days. Custom products: 15-30 days depending on complexity.'),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 mx-auto">
          <Link href={navPath('/')} className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
              <span className="text-xl font-bold text-white">金铃</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">{t('site.name', 'Shanghai Jinling Rubber')}</span>
              <span className="text-xs text-muted-foreground">Shanghai Jinling Rubber</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href={navPath('/')} className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">{t('nav.home', 'Home')}</Link>
            <Link href={navPath('/about')} className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">{t('nav.about', 'About')}</Link>
            <Link href={navPath('/products')} className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors">{t('nav.products', 'Products')}</Link>
            <Link href={navPath('/contact')} className="text-sm font-medium hover:text-blue-600 transition-colors">{t('nav.contact', 'Contact')}</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher currentLanguage={lang} />
            <Link href={navPath('/contact')} className="hidden sm:inline-flex">
              <Button>{t('nav.getQuote', 'Get Quote')}</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t('contact.title', 'Contact Us')}
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              {t('contact.subtitle', 'Get in touch with our team for product inquiries, quotations, and technical support')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('contact.getInTouch', 'Get in Touch')}</h2>
              <p className="text-muted-foreground mb-8">
                {t('contact.getInTouchDesc', "We'd love to hear from you. Reach out through any of the following channels.")}
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg flex-shrink-0">
                          <info.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{info.title}</h3>
                          <p className="text-sm text-blue-600">{info.value}</p>
                          <p className="text-xs text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Global Export Services */}
              <Card className="mt-8">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
                      <Globe2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{t('contact.globalExport', 'Global Export Services')}</CardTitle>
                      <Badge variant="secondary" className="mt-1">{t('contact.countriesServed', '50+ Countries Served')}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.globalExportDesc', 'We provide comprehensive export services including customs clearance, documentation, and logistics support.')}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>{t('contact.form.title', 'Send Us a Message')}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.form.subtitle', "Fill out the form below and we'll get back to you within 24 hours.")}
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('contact.form.name', 'Full Name')}</Label>
                        <Input id="name" placeholder={t('contact.form.namePlaceholder', 'John Smith')} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">{t('contact.form.company', 'Company Name')}</Label>
                        <Input id="company" placeholder={t('contact.form.companyPlaceholder', 'ABC Electronics Inc.')} />
                      </div>
                    </div>
                    
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('contact.form.email', 'Email Address')}</Label>
                        <Input id="email" type="email" placeholder={t('contact.form.emailPlaceholder', 'john@example.com')} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t('contact.form.phone', 'Phone Number')}</Label>
                        <Input id="phone" type="tel" placeholder={t('contact.form.phonePlaceholder', '+1 234 567 8900')} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">{t('contact.form.country', 'Country')}</Label>
                      <Input id="country" placeholder={t('contact.form.countryPlaceholder', 'United States')} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="product">{t('contact.form.productInterest', 'Product Interest')}</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={t('contact.form.selectCategory', 'Select a category')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="protective-suits">{t('categories.protective-suits', 'Protective Suits')}</SelectItem>
                          <SelectItem value="rainwear">{t('categories.rainwear', 'Rainwear Series')}</SelectItem>
                          <SelectItem value="workwear">{t('categories.workwear', 'Workwear Series')}</SelectItem>
                          <SelectItem value="other">{t('contact.form.other', 'Other')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{t('contact.form.subject', 'Subject')}</Label>
                      <Input id="subject" placeholder={t('contact.form.subjectPlaceholder', 'Product Inquiry / Quote Request')} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t('contact.form.message', 'Message')}</Label>
                      <Textarea 
                        id="message" 
                        placeholder={t('contact.form.messagePlaceholder', 'Please describe your requirements...')}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2 h-4 w-4" />
                      {t('contact.form.submit', 'Send Message')}
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      {t('contact.form.response', 'We typically respond within 24 hours on business days.')}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">{t('contact.faq.title', 'Frequently Asked Questions')}</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {t('contact.faq.subtitle', 'Quick answers to common questions about our products and services')}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">{t('contact.cta.title', 'Ready to Start Your Project?')}</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            {t('contact.cta.subtitle', 'Whether you need standard products or custom solutions, our team is ready to help.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:andyweiwei1024@gmail.com">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Mail className="mr-2 h-5 w-5" />
                {t('contact.cta.requestQuote', 'Request a Quote')}
              </Button>
            </a>
            <a href="tel:+86-21-65392338">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                {t('contact.cta.callUs', 'Call Us Now')}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container px-4 py-12 mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                  <span className="text-lg font-bold text-white">金铃</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white">{t('site.name', 'Shanghai Jinling Rubber')}</span>
                  <span className="text-xs text-gray-400">Shanghai Jinling Rubber</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 max-w-md">
                {t('footer.description', 'Leading manufacturer and exporter of protective suits, rainwear, and workwear.')}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">{t('footer.quickLinks', 'Quick Links')}</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href={navPath('/')} className="hover:text-white transition-colors">{t('nav.home', 'Home')}</Link></li>
                <li><Link href={navPath('/about')} className="hover:text-white transition-colors">{t('nav.about', 'About')}</Link></li>
                <li><Link href={navPath('/products')} className="hover:text-white transition-colors">{t('nav.products', 'Products')}</Link></li>
                <li><Link href={navPath('/contact')} className="hover:text-white transition-colors">{t('nav.contact', 'Contact')}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">{t('footer.contactInfo', 'Contact Info')}</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span>{t('contact.info.address.value', 'Shanghai, China')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>+86-21-65392338</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>andyweiwei1024@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© {new Date().getFullYear()} {t('footer.copyright', 'Shanghai Jinling Rubber Products Co., Ltd.')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
