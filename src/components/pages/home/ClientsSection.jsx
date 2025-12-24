import React, { useEffect, useRef } from 'react';
// Import all client logos from clients folder
import aaaLogo from "../../../assets/clients/aaalogo.webp";
import accentureLogo from "../../../assets/clients/accenture.webp";
import adpLogo from "../../../assets/clients/adp.webp";
import amazonLogo from "../../../assets/clients/amazon.webp";
import ambestLogo from "../../../assets/clients/ambestlogo.webp";
import anscesionLogo from "../../../assets/clients/anscesion.webp";
import appleLogo from "../../../assets/clients/apple.webp";
import atosLogo from "../../../assets/clients/atos.webp";
import bankOfAmericaLogo from "../../../assets/clients/bankofamerica.webp";
import bhegtLogo from "../../../assets/clients/bhegt&slogo.webp";
import boeingLogo from "../../../assets/clients/boeing.webp";
import cadenceLogo from "../../../assets/clients/cadencelogo.webp";
import capgeminiLogo from "../../../assets/clients/capgemini.webp";
import capitalGroupLogo from "../../../assets/clients/capitalgrouplogo.webp";
import capitolOneLogo from "../../../assets/clients/capitolone.webp";
import centerpointLogo from "../../../assets/clients/centerpoint.webp";
import commonwealthLogo from "../../../assets/clients/commonwealthlogo.webp";
import coxLogo from "../../../assets/clients/coxlogo.webp";
import creditOneLogo from "../../../assets/clients/creditone.webp";
import cricketWirelessLogo from "../../../assets/clients/cricketwirelesslogo.webp";
import csWholesaleLogo from "../../../assets/clients/cswholesalelogo.webp";
import cvsLogo from "../../../assets/clients/cvs.webp";
import deloitteLogo from "../../../assets/clients/deloitee.webp";
import ecolabLogo from "../../../assets/clients/ecolablogo.webp";
import epsonLogo from "../../../assets/clients/epsonlogo.webp";
import finishLineLogo from "../../../assets/clients/finishlinelogo.webp";
import freddieMacLogo from "../../../assets/clients/freddiemac.webp";
import frontlineInsuranceLogo from "../../../assets/clients/frontlineinsurancelogo.webp";
import hclLogo from "../../../assets/clients/hcl.webp";
import healthFirstLogo from "../../../assets/clients/healthfirstlogo.webp";
import htcLogo from "../../../assets/clients/htc.webp";
import humanaLogo from "../../../assets/clients/humana.webp";
import ibmLogo from "../../../assets/clients/ibm.webp";
import infosysLogo from "../../../assets/clients/infosys.webp";
import intuitLogo from "../../../assets/clients/intuitlogo.webp";
import ionLogo from "../../../assets/clients/ionlogo.webp";
import jpMorganLogo from "../../../assets/clients/jpmorganlogo.webp";
import libertyMutualLogo from "../../../assets/clients/libertymutuallogo.webp";
import lipmanLogo from "../../../assets/clients/lipmanlogo.webp";
import lplLogo from "../../../assets/clients/lpl.webp";
import mastercardLogo from "../../../assets/clients/mastercard.webp";
import medImpactLogo from "../../../assets/clients/medimpactlogo.webp";
import meijerLogo from "../../../assets/clients/meijerlogo.webp";
import metaLogo from "../../../assets/clients/meta.webp";
import mizuhobankLogo from "../../../assets/clients/mizuhobanklogo.webp";
import morganStanleyLogo from "../../../assets/clients/morganstanleylogo.webp";
import nexLogo from "../../../assets/clients/nexlogo.webp";
import nvidiaLogo from "../../../assets/clients/nvidia.webp";
import pncBankLogo from "../../../assets/clients/pncbank.webp";
import primeLogo from "../../../assets/clients/primelogo.webp";
import pubixLogo from "../../../assets/clients/pubixlogo.webp";
import sanfoiLogo from "../../../assets/clients/sanfoilogo.webp";
import seiLogo from "../../../assets/clients/sei.webp";
import stellantisLogo from "../../../assets/clients/stellantislogo.webp";
import swaLogo from "../../../assets/clients/swalogo.webp";
import ttLogo from "../../../assets/clients/t&tlogo.webp";
import tcsLogo from "../../../assets/clients/tcs.webp";
import truistLogo from "../../../assets/clients/truist.webp";
import umgLogo from "../../../assets/clients/umg.webp";
import upsLogo from "../../../assets/clients/upslogo.webp";
import usabankLogo from "../../../assets/clients/usabank.webp";
import walmartLogo from "../../../assets/clients/wallmart.webp";
import wellsFargoLogo from "../../../assets/clients/wellsfargo.webp";
import wiproLogo from "../../../assets/clients/wipro.webp";

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

function ClientsSection() {
  // Duplicate clients multiple times for seamless marquee
  const marqueeClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-24 bg-white overflow-x-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            We worked with global largest brands
          </h2>
        </div>

        <div className="relative overflow-hidden">
          {/* Marquee Container */}
          <div className="flex overflow-hidden">
            {/* First Marquee */}
            <div className="flex animate-marquee gap-12 shrink-0">
              {marqueeClients.map((company, index) => (
                <div 
                  key={`marquee1-${index}`} 
                  className="flex-shrink-0 flex flex-col items-center justify-center w-48 h-32 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 w-auto object-contain mb-3 transition-transform duration-300 hover:scale-110"
                  />
                  <span className="text-gray-700 font-medium text-sm text-center px-2">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Duplicate Marquee for seamless loop */}
            <div className="flex animate-marquee gap-12 shrink-0" aria-hidden="true">
              {marqueeClients.map((company, index) => (
                <div 
                  key={`marquee2-${index}`} 
                  className="flex-shrink-0 flex flex-col items-center justify-center w-48 h-32 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 w-auto object-contain mb-3 transition-transform duration-300 hover:scale-110"
                  />
                  <span className="text-gray-700 font-medium text-sm text-center px-2">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;


