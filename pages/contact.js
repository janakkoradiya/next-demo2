import AboutUs from "@/src/components/contact/AboutUs";
import ContactForm from "@/src/components/contact/ContactForm";
import ReadyToStart from "@/src/components/contact/ReadyToStart";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { useState } from "react";

export default function ContactPage() {
  return (
    <div>
      <Navbar />

      <ContactForm />

      <Footer />
    </div>
  );
}
