import React, { useMemo } from 'react';
import clientNetworkBg from '../../assets/client-network-bg.jpg';

// Import all client logos
import aaaLogo from '../../assets/clients/aaalogo.png';
import accentureLogo from '../../assets/clients/accenture.png';
import adpLogo from '../../assets/clients/adp.png';
import amazonLogo from '../../assets/clients/amazon.png';
import ambestLogo from '../../assets/clients/ambestlogo.webp';
import anscesionLogo from '../../assets/clients/anscesion.webp';
import appleLogo from '../../assets/clients/apple.webp';
import atosLogo from '../../assets/clients/atos.webp';
import bankOfAmericaLogo from '../../assets/clients/bankofamerica.png';
import bhegtLogo from '../../assets/clients/bhegt&slogo.webp';
import boeingLogo from '../../assets/clients/boeing.webp';
import cadenceLogo from '../../assets/clients/cadencelogo.webp';
import capgeminiLogo from '../../assets/clients/capgemini.webp';
import capitalGroupLogo from '../../assets/clients/capitalgrouplogo.webp';
import capitalOneLogo from '../../assets/clients/capitolone.webp';
import centerpointLogo from '../../assets/clients/centerpoint.webp';
import commonwealthLogo from '../../assets/clients/commonwealthlogo.webp';
import coxLogo from '../../assets/clients/coxlogo.png';
import creditOneLogo from '../../assets/clients/creditone.webp';
import cricketWirelessLogo from '../../assets/clients/cricketwirelesslogo.webp';
import csWholesaleLogo from '../../assets/clients/cswholesalelogo.webp';
import cvsLogo from '../../assets/clients/cvs.webp';
import deloitteLogo from '../../assets/clients/deloitee.webp';
import ecolabLogo from '../../assets/clients/ecolablogo.webp';
import epsonLogo from '../../assets/clients/epsonlogo.webp';
import finishLineLogo from '../../assets/clients/finishlinelogo.webp';
import freddieMacLogo from '../../assets/clients/freddiemac.png';
import frontlineInsuranceLogo from '../../assets/clients/frontlineinsurancelogo.png';
import hclLogo from '../../assets/clients/hcl.png';
import healthFirstLogo from '../../assets/clients/healthfirstlogo.png';
import htcLogo from '../../assets/clients/htc.png';
import humanaLogo from '../../assets/clients/humana.png';
import ibmLogo from '../../assets/clients/ibm.png';
import infosysLogo from '../../assets/clients/infosys.png';
import intuitLogo from '../../assets/clients/intuitlogo.webp';
import ionLogo from '../../assets/clients/ionlogo.webp';
import jpMorganLogo from '../../assets/clients/jpmorganlogo.webp';
import libertyMutualLogo from '../../assets/clients/libertymutuallogo.webp';
import lipmanLogo from '../../assets/clients/lipmanlogo.webp';
import lplLogo from '../../assets/clients/lpl.webp';
import mastercardLogo from '../../assets/clients/mastercard.webp';
import medImpactLogo from '../../assets/clients/medimpactlogo.webp';
import meijerLogo from '../../assets/clients/meijerlogo.webp';
import metaLogo from '../../assets/clients/meta.webp';
import mizuhoBankLogo from '../../assets/clients/mizuhobanklogo.webp';
import morganStanleyLogo from '../../assets/clients/morganstanleylogo.webp';
import nvidiaLogo from '../../assets/clients/nvidia.webp';
import pncBankLogo from '../../assets/clients/pncbank.png';
import pubixLogo from '../../assets/clients/pubixlogo.webp';
import seiLogo from '../../assets/clients/sei.webp';
import stellantisLogo from '../../assets/clients/stellantislogo.webp';
import tcsLogo from '../../assets/clients/tcs.webp';
import truistLogo from '../../assets/clients/truist.webp';
import umgLogo from '../../assets/clients/umg.webp';
import upsLogo from '../../assets/clients/upslogo.webp';
import usaBankLogo from '../../assets/clients/usabank.webp';
import walmartLogo from '../../assets/clients/wallmart.webp';
import wellsFargoLogo from '../../assets/clients/wellsfargo.webp';
import wiproLogo from '../../assets/clients/wipro.webp';

function Client() {
  const clients = [
    { name: 'AAA', logo: aaaLogo },
    { name: 'Accenture', logo: accentureLogo },
    { name: 'ADP', logo: adpLogo },
    { name: 'Amazon', logo: amazonLogo },
    { name: 'AM Best', logo: ambestLogo },
    { name: 'Ascension', logo: anscesionLogo },
    { name: 'Apple', logo: appleLogo },
    { name: 'Atos', logo: atosLogo },
    { name: 'Bank of America', logo: bankOfAmericaLogo },
    { name: 'BHE GT&S', logo: bhegtLogo },
    { name: 'Boeing', logo: boeingLogo },
    { name: 'Cadence', logo: cadenceLogo },
    { name: 'Capgemini', logo: capgeminiLogo },
    { name: 'Capital Group', logo: capitalGroupLogo },
    { name: 'Capital One', logo: capitalOneLogo },
    { name: 'CenterPoint Energy', logo: centerpointLogo },
    { name: 'Commonwealth', logo: commonwealthLogo },
    { name: 'Cox Communications', logo: coxLogo },
    { name: 'Credit One Bank', logo: creditOneLogo },
    { name: 'Cricket Wireless', logo: cricketWirelessLogo },
    { name: 'CS Wholesale', logo: csWholesaleLogo },
    { name: 'CVS Health', logo: cvsLogo },
    { name: 'Deloitte', logo: deloitteLogo },
    { name: 'Ecolab', logo: ecolabLogo },
    { name: 'Epson', logo: epsonLogo },
    { name: 'Finish Line', logo: finishLineLogo },
    { name: 'Freddie Mac', logo: freddieMacLogo },
    { name: 'Frontline Insurance', logo: frontlineInsuranceLogo },
    { name: 'HCL Technologies', logo: hclLogo },
    { name: 'Health First', logo: healthFirstLogo },
    { name: 'HTC', logo: htcLogo },
    { name: 'Humana', logo: humanaLogo },
    { name: 'IBM', logo: ibmLogo },
    { name: 'Infosys', logo: infosysLogo },
    { name: 'Intuit', logo: intuitLogo },
    { name: 'ION Trading', logo: ionLogo },
    { name: 'JPMorgan Chase', logo: jpMorganLogo },
    { name: 'Liberty Mutual', logo: libertyMutualLogo },
    { name: 'Lipman', logo: lipmanLogo },
    { name: 'LPL Financial', logo: lplLogo },
    { name: 'Mastercard', logo: mastercardLogo },
    { name: 'MedImpact', logo: medImpactLogo },
    { name: 'Meijer', logo: meijerLogo },
    { name: 'Meta', logo: metaLogo },
    { name: 'Mizuho Bank', logo: mizuhoBankLogo },
    { name: 'Morgan Stanley', logo: morganStanleyLogo },
    { name: 'NVIDIA', logo: nvidiaLogo },
    { name: 'PNC Bank', logo: pncBankLogo },
    { name: 'Publix', logo: pubixLogo },
    { name: 'SEI', logo: seiLogo },
    { name: 'Stellantis', logo: stellantisLogo },
    { name: 'Tata Consultancy Services', logo: tcsLogo },
    { name: 'Truist', logo: truistLogo },
    { name: 'Universal Music Group', logo: umgLogo },
    { name: 'UPS', logo: upsLogo },
    { name: 'U.S. Bank', logo: usaBankLogo },
    { name: 'Walmart', logo: walmartLogo },
    { name: 'Wells Fargo', logo: wellsFargoLogo },
    { name: 'Wipro', logo: wiproLogo },
  ];

  // Shuffle function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Create three different shuffled arrays for the three rows (memoized to prevent re-shuffling on re-renders)
  const row1Clients = useMemo(() => shuffleArray(clients), []);
  const row2Clients = useMemo(() => shuffleArray(clients), []);
  const row3Clients = useMemo(() => shuffleArray(clients), []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen text-white relative overflow-hidden flex items-center justify-center" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Our Clients</h1>
            <p className="text-xl text-gray-200 animate-fade-in-up-delay">
              Trusted by industry leaders worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-xl text-gray-600 mb-12 text-center">
            We're proud to work with {clients.length}+ industry-leading companies across various sectors
          </p>
          
          {/* Row 1 - Moving Left */}
          <div className="relative mb-6 overflow-hidden">
            <div className="flex animate-marquee-left">
              {/* Duplicate clients multiple times for seamless loop and to ensure all are visible */}
              {[...row1Clients, ...row1Clients, ...row1Clients, ...row1Clients].map((client, index) => (
                <div
                  key={`row1-${index}`}
                  className="group client-card flex-shrink-0 mx-4 transition-all duration-300 p-4 flex flex-col items-center justify-center text-center w-40"
                >
                  <div className="client-logo-container w-28 h-28 bg-gray-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-50 transition-all duration-300 p-3">
                    <img src={client.logo} alt={client.name} className="client-logo-img max-w-full max-h-full object-contain transition-all duration-300" />
                  </div>
                  <h3 className="client-name text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-all duration-300 leading-tight">{client.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moving Right */}
          <div className="relative mb-6 overflow-hidden">
            <div className="flex animate-marquee-right">
              {/* Duplicate clients multiple times for seamless loop and to ensure all are visible */}
              {[...row2Clients, ...row2Clients, ...row2Clients, ...row2Clients].map((client, index) => (
                <div
                  key={`row2-${index}`}
                  className="group client-card flex-shrink-0 mx-4 transition-all duration-300 p-4 flex flex-col items-center justify-center text-center w-40"
                >
                  <div className="client-logo-container w-28 h-28 bg-gray-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-green-50 transition-all duration-300 p-3">
                    <img src={client.logo} alt={client.name} className="client-logo-img max-w-full max-h-full object-contain transition-all duration-300" />
                  </div>
                  <h3 className="client-name text-sm font-medium text-gray-700 group-hover:text-green-600 transition-all duration-300 leading-tight">{client.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Moving Left (Slower) */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-left-slow">
              {/* Duplicate clients multiple times for seamless loop and to ensure all are visible */}
              {[...row3Clients, ...row3Clients, ...row3Clients, ...row3Clients].map((client, index) => (
                <div
                  key={`row3-${index}`}
                  className="group client-card flex-shrink-0 mx-4 transition-all duration-300 p-4 flex flex-col items-center justify-center text-center w-40"
                >
                  <div className="client-logo-container w-28 h-28 bg-gray-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-purple-50 transition-all duration-300 p-3">
                    <img src={client.logo} alt={client.name} className="client-logo-img max-w-full max-h-full object-contain transition-all duration-300" />
                  </div>
                  <h3 className="client-name text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-all duration-300 leading-tight">{client.name}</h3>
                </div>
              ))}
            </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-t border-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Become Our Next Success Story</h2>
            <p className="text-xl mb-8 text-gray-600">
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