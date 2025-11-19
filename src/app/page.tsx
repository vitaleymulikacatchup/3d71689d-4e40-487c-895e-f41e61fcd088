"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import AboutMetric from '@/components/sections/about/AboutMetric';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Users, TrendingUp, CheckCircle, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="fluid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Elite Motors"
          navItems={[
            { name: "Inventory", id: "inventory" },
            { name: "About", id: "about" },
            { name: "Why Us", id: "metrics" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Elite Motors"
          description="Experience excellence. Discover the world's finest luxury vehicles."
          buttons={[
            { text: "Browse Inventory", href: "inventory" },
            { text: "Schedule Test Drive", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564122874-azil547i.jpg"
          imageAlt="Luxury sports car showcase"
          showDimOverlay={true}
        />
      </div>
      
      <div id="inventory" data-section="inventory">
        <ProductCardThree
          title="Featured Vehicles"
          description="Handpicked luxury automobiles for the most discerning collectors"
          tag="Exclusive Selection"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "BMW M760Li xDrive",
              price: "Starting at $155,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564124387-zh5zql6g.jpg",
              imageAlt: "BMW M760Li luxury sedan"
            },
            {
              id: "2",
              name: "Mercedes-AMG S 63",
              price: "Starting at $165,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564126117-837hkqvo.jpg",
              imageAlt: "Mercedes-AMG S 63 performance vehicle"
            },
            {
              id: "3",
              name: "Porsche 911 Turbo",
              price: "Starting at $195,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564127950-aza23m2t.jpg",
              imageAlt: "Porsche 911 Turbo sports car"
            }
          ]}
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <AboutMetric
          title="Three decades of luxury automotive excellence and uncompromising customer service"
          metrics={[
            { icon: Award, label: "Years in Business", value: "30+" },
            { icon: Users, label: "Satisfied Clients", value: "5,000+" },
            { icon: TrendingUp, label: "Vehicle Brands", value: "15+" },
            { icon: CheckCircle, label: "Quality Rating", value: "9.8/10" }
          ]}
        />
      </div>
      
      <div id="brands" data-section="brands">
        <SocialProofOne
          title="Premium Partnerships"
          description="Authorized dealer for the world's most prestigious automotive brands"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564138539-w3ots9f7.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564139941-zrmhak41.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564141203-nns6ewxv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564142402-aiqd0y0p.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564143650-orklwg2g.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564144969-usw2q25y.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564146341-lukrjs03.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564147997-h3icr4bf.jpg"
          ]}
          speed={50}
          showCard={true}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Client Testimonials"
          description="Hear from collectors and enthusiasts who've chosen Elite Motors"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Alexander Sterling",
              handle: "@a.sterling",
              testimonial: "The professionalism and attention to detail at Elite Motors is unmatched. They helped me find the perfect Mercedes that exceeded all expectations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564129689-p1uj7m4l.jpg",
              imageAlt: "Alexander Sterling"
            },
            {
              id: "2",
              name: "Catherine Blake",
              handle: "@c.blake",
              testimonial: "Outstanding service from start to finish. The team understood exactly what I was looking for in a luxury vehicle. Highly recommended.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564130900-pwjl6gg4.jpg",
              imageAlt: "Catherine Blake"
            },
            {
              id: "3",
              name: "Marcus Chen",
              handle: "@m.chen",
              testimonial: "I've purchased three vehicles from Elite Motors over the years. Their consistency in quality and service is remarkable. Truly the finest dealership.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564132532-91xyp5tv.jpg",
              imageAlt: "Marcus Chen"
            },
            {
              id: "4",
              name: "Victoria Ashford",
              handle: "@v.ashford",
              testimonial: "Elite Motors made my dream of owning a Porsche a reality. Their financing options and support made the entire experience seamless.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564134193-8fckd7f9.jpg",
              imageAlt: "Victoria Ashford"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Schedule Your Exclusive Viewing"
          description="Connect with our specialists to arrange a private showing or test drive of your desired vehicle."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763564137265-pcff9m1k.jpg"
          imageAlt="Luxury dealership consultation"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Request Appointment"
          termsText="We respect your privacy. Our team will contact you within 24 hours."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Elite Motors"
          copyrightText="© Elite Motors, Inc. 2025. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "careers" },
                { label: "News", href: "news" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Browse Inventory", href: "inventory" },
                { label: "Test Drive", href: "contact" },
                { label: "Financing", href: "financing" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms & Conditions", href: "terms" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}