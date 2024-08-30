import Hero from "./components/Hero";
import { logo, navbar, hero, aboutus, featured, cta, footer, testimonial } from "@/app/json/Home"
import Aboutus from "./components/Aboutus";
import Featured from "./components/minicomponents/Featured";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero nav={navbar} logo={logo} hero={hero} />
      <Aboutus aboutus={aboutus} />
      <Featured featured={featured} />
      <Testimonials testimonial={testimonial} />
      <Cta cta={cta} />
      <Footer footer={footer} logo={logo} />
    </>
  );
}
