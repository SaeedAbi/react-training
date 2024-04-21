import React from "react";
import { Layout } from "../../components/Layout";

const ContactUs = () => {
  return (
    <Layout titleHeader={"Contact Us"}>
      <div
        className={
          " grid grid-cols-[2fr,1fr,1fr] px-20 py-10 border-2 border-gray-300 rounded-lg h-100"
        }
      >
        <div>
          <h3 className={"font-semibold mb-12"}>Adress:</h3>
          <p>Iran,North-khorasan,Bojnourd</p>
        </div>
        <div>
          <h3 className={"font-semibold mb-12"}>Email:</h3>
          <a href="mailto:lol@example.com">Lol@example.com</a>
        </div>
        <div>
          <h3 className={"font-semibold mb-12"}>Phone</h3>
          <a href="415-201-6370">415-201-6370</a>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
