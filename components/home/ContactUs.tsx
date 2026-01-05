import Link from "next/link";
import ContactBox from "../layout/ContactBox";
import Container from "../layout/Container";
import SectionTitle from "../layout/SectionTitle";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <Container className="mb-12 flex flex-col items-center" id="contact">
      <SectionTitle>Contact Me</SectionTitle>
      <h2 className="text-2xl font-bold mt-6">
        Let's connect and build something great together
      </h2>

      <div className="w-full grid md:grid-cols-3 gap-6 mt-12 max-w-[1000px] mx-auto">
        <ContactBox
          icon="📧"
          title="Email Me"
          description="nikhilng.1997@gmail.com"
          link="mailto:nikhilng.1997@gmail.com"
        />
        <ContactBox
          icon="📍"
          title="Location"
          description="Noida, Uttar Pradesh"
        />
        <ContactBox
          icon="📞"
          title="Phone"
          description="+91 9068615833"
          link="tel:+919068615833"
        />
      </div>

      <div className="w-full border border-white/5 rounded-2xl bg-background-secondary mt-6 p-6 max-w-[600px] mx-auto hover:shadow-[0_0_10px_0] hover:shadow-tertiary transition-all duration-2000">
        <h3 className="text-xl font-semibold text-center">Let's Connect</h3>
        <div className="flex items-center justify-center gap-3 mt-4">
          <Link
            href="https://www.linkedin.com/in/nikhilgarg1997"
            className="text-3xl p-2 rounded-xl bg-white text-center"
            target="_blank"
          >
            <FaLinkedin color="#0a66c2" />
          </Link>
          <Link
            href="https://github.com/nikbroo"
            className="text-3xl p-2 rounded-xl bg-white text-center"
            target="_blank"
          >
            <FaGithub color="black" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
