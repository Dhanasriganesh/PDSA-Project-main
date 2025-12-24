import React, { useEffect, useRef, useState } from 'react';
// Import all client logos from clients folder
import aaaLogo from "../../assets/clients/aaalogo.webp";
import accentureLogo from "../../assets/clients/accenture.webp";
import adpLogo from "../../assets/clients/adp.webp";
import amazonLogo from "../../assets/clients/amazon.webp";
import ambestLogo from "../../assets/clients/ambestlogo.webp";
import anscesionLogo from "../../assets/clients/anscesion.webp";
import appleLogo from "../../assets/clients/apple.webp";
import atosLogo from "../../assets/clients/atos.webp";
import bankOfAmericaLogo from "../../assets/clients/bankofamerica.webp";
import bhegtLogo from "../../assets/clients/bhegt&slogo.webp";
import boeingLogo from "../../assets/clients/boeing.webp";
import cadenceLogo from "../../assets/clients/cadencelogo.webp";
import capgeminiLogo from "../../assets/clients/capgemini.webp";
import capitalGroupLogo from "../../assets/clients/capitalgrouplogo.webp";
import capitolOneLogo from "../../assets/clients/capitolone.webp";
import centerpointLogo from "../../assets/clients/centerpoint.webp";
import commonwealthLogo from "../../assets/clients/commonwealthlogo.webp";
import coxLogo from "../../assets/clients/coxlogo.webp";
import creditOneLogo from "../../assets/clients/creditone.webp";
import cricketWirelessLogo from "../../assets/clients/cricketwirelesslogo.webp";
import csWholesaleLogo from "../../assets/clients/cswholesalelogo.webp";
import cvsLogo from "../../assets/clients/cvs.webp";
import deloitteLogo from "../../assets/clients/deloitee.webp";
import ecolabLogo from "../../assets/clients/ecolablogo.webp";
import epsonLogo from "../../assets/clients/epsonlogo.webp";
import finishLineLogo from "../../assets/clients/finishlinelogo.webp";
import freddieMacLogo from "../../assets/clients/freddiemac.webp";
import frontlineInsuranceLogo from "../../assets/clients/frontlineinsurancelogo.webp";
import hclLogo from "../../assets/clients/hcl.webp";
import healthFirstLogo from "../../assets/clients/healthfirstlogo.webp";
import htcLogo from "../../assets/clients/htc.webp";
import humanaLogo from "../../assets/clients/humana.webp";
import ibmLogo from "../../assets/clients/ibm.webp";
import infosysLogo from "../../assets/clients/infosys.webp";
import intuitLogo from "../../assets/clients/intuitlogo.webp";
import ionLogo from "../../assets/clients/ionlogo.webp";
import jpMorganLogo from "../../assets/clients/jpmorganlogo.webp";
import libertyMutualLogo from "../../assets/clients/libertymutuallogo.webp";
import lipmanLogo from "../../assets/clients/lipmanlogo.webp";
import lplLogo from "../../assets/clients/lpl.webp";
import mastercardLogo from "../../assets/clients/mastercard.webp";
import medImpactLogo from "../../assets/clients/medimpactlogo.webp";
import meijerLogo from "../../assets/clients/meijerlogo.webp";
import metaLogo from "../../assets/clients/meta.webp";
import mizuhobankLogo from "../../assets/clients/mizuhobanklogo.webp";
import morganStanleyLogo from "../../assets/clients/morganstanleylogo.webp";
import nexLogo from "../../assets/clients/nexlogo.webp";
import nvidiaLogo from "../../assets/clients/nvidia.webp";
import pncBankLogo from "../../assets/clients/pncbank.webp";
import primeLogo from "../../assets/clients/primelogo.webp";
import pubixLogo from "../../assets/clients/pubixlogo.webp";
import sanfoiLogo from "../../assets/clients/sanfoilogo.webp";
import seiLogo from "../../assets/clients/sei.webp";
import stellantisLogo from "../../assets/clients/stellantislogo.webp";
import swaLogo from "../../assets/clients/swalogo.webp";
import ttLogo from "../../assets/clients/t&tlogo.webp";
import tcsLogo from "../../assets/clients/tcs.webp";
import truistLogo from "../../assets/clients/truist.webp";
import umgLogo from "../../assets/clients/umg.webp";
import upsLogo from "../../assets/clients/upslogo.webp";
import usabankLogo from "../../assets/clients/usabank.webp";
import walmartLogo from "../../assets/clients/wallmart.webp";
import wellsFargoLogo from "../../assets/clients/wellsfargo.webp";
import wiproLogo from "../../assets/clients/wipro.webp";

const clients = [
  { name: "AAA", logo: aaaLogo },
  { name: "Accenture", logo: accentureLogo },
  { name: "ADP", logo: adpLogo },
  { name: "Amazon", logo: amazonLogo },
  { name: "AM Best", logo: ambestLogo },
  { name: "Anscension", logo: anscesionLogo },
  { name: "Apple", logo: appleLogo },
  { name: "ATOS", logo: atosLogo },
  { name: "Bank of America", logo: bankOfAmericaLogo },
  { name: "BH EGT&S", logo: bhegtLogo },
  { name: "Boeing", logo: boeingLogo },
  { name: "Cadence", logo: cadenceLogo },
  { name: "Capgemini", logo: capgeminiLogo },
  { name: "Capital Group", logo: capitalGroupLogo },
  { name: "Capitol One", logo: capitolOneLogo },
  { name: "Centerpoint", logo: centerpointLogo },
  { name: "Commonwealth", logo: commonwealthLogo },
  { name: "Cox", logo: coxLogo },
  { name: "Credit One", logo: creditOneLogo },
  { name: "Cricket Wireless", logo: cricketWirelessLogo },
  { name: "CS Wholesale", logo: csWholesaleLogo },
  { name: "CVS", logo: cvsLogo },
  { name: "Deloitte", logo: deloitteLogo },
  { name: "Ecolab", logo: ecolabLogo },
  { name: "Epson", logo: epsonLogo },
  { name: "Finish Line", logo: finishLineLogo },
  { name: "Freddie Mac", logo: freddieMacLogo },
  { name: "Frontline Insurance", logo: frontlineInsuranceLogo },
  { name: "HCL", logo: hclLogo },
  { name: "Health First", logo: healthFirstLogo },
  { name: "HTC", logo: htcLogo },
  { name: "Humana", logo: humanaLogo },
  { name: "IBM", logo: ibmLogo },
  { name: "Infosys", logo: infosysLogo },
  { name: "Intuit", logo: intuitLogo },
  { name: "ION", logo: ionLogo },
  { name: "JP Morgan", logo: jpMorganLogo },
  { name: "Liberty Mutual", logo: libertyMutualLogo },
  { name: "Lipman", logo: lipmanLogo },
  { name: "LPL", logo: lplLogo },
  { name: "Mastercard", logo: mastercardLogo },
  { name: "MedImpact", logo: medImpactLogo },
  { name: "Meijer", logo: meijerLogo },
  { name: "Meta", logo: metaLogo },
  { name: "Mizuho Bank", logo: mizuhobankLogo },
  { name: "Morgan Stanley", logo: morganStanleyLogo },
  { name: "NEX", logo: nexLogo },
  { name: "NVIDIA", logo: nvidiaLogo },
  { name: "PNC Bank", logo: pncBankLogo },
  { name: "Prime", logo: primeLogo },
  { name: "Pubix", logo: pubixLogo },
  { name: "Sanfoi", logo: sanfoiLogo },
  { name: "SEI", logo: seiLogo },
  { name: "Stellantis", logo: stellantisLogo },
  { name: "SWA", logo: swaLogo },
  { name: "T&T", logo: ttLogo },
  { name: "TCS", logo: tcsLogo },
  { name: "Truist", logo: truistLogo },
  { name: "UMG", logo: umgLogo },
  { name: "UPS", logo: upsLogo },
  { name: "USA Bank", logo: usabankLogo },
  { name: "Walmart", logo: walmartLogo },
  { name: "Wells Fargo", logo: wellsFargoLogo },
  { name: "Wipro", logo: wiproLogo },
];

function ClientCard({ client, index }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Create varying sizes for masonry effect
  const sizes = ['small', 'medium', 'large'];
  const size = sizes[index % 3];
  
  const sizeClasses = {
    small: 'h-32',
    medium: 'h-40',
    large: 'h-48',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
        sizeClasses[size]
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${(index % 10) * 50}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative h-full flex flex-col items-center justify-center p-6">
        <div className="flex-1 flex items-center justify-center w-full mb-2">
          <img
            src={client.logo}
            alt={client.name}
            className="max-h-16 md:max-h-20 w-auto object-contain filter grayscale-0 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xs md:text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
            {client.name}
          </h3>
        </div>
      </div>
    </div>
  );
}

function Client() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
          alt="Our Clients"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Clients</h1>
            <p className="text-xl text-white/90">
              Trusted by industry leaders worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Clients Masonry Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Trusted Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to work with some of the world's most innovative companies
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {clients.map((client, index) => (
              <ClientCard key={index} client={client} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 md:p-12">
              <p className="text-2xl md:text-3xl text-gray-700 mb-8 italic text-center">
                "PDSA Technologies has been instrumental in our digital transformation journey. Their expertise and dedication are unmatched."
              </p>
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">Industry Leader</p>
                <p className="text-gray-600">Fortune 500 Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-t border-blue-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Become Our Next Success Story</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Join our growing list of satisfied clients and transform your business with our solutions
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 inline-block font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Client;

