import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import Hero from "@/components/Hero"; 
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import ContactPage from "./contact/page";
import styles from "@/styles/style";

export default function Home() {
  return (
    <> 
<div className="bg-primary w-full overflow-hidden">
         <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
         <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
       <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
             <ServicesPage />
            <AboutPage />
            <ContactPage />
             {/*<Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA /> */}
            <Footer />
          </div>
        </div>
      </div>
 
    </>
  );
}
