"use client";
export default function Contact() {
  const contactData = [
    {
      name: "Location:",
      value: `Elite Computer Technologies, 
                  Behind Tola House,
                  Isale Yidi, Agunpopo Area, 
                  Oyo, Oyo State, Nigeria`,
    },
    {
      name: "Email Address:",
      value: "goldengenerationoyo@gmail.com",
      url: "mailto:goldengenerationoyo@gmail.com",
    },
    {
      name: "Contact Number:",
      value: "(+234) 706-231-4302",
      url: "tel:+2347062314302",
    },
  ];

  return (
    <>
      <section className="container px-4 lg:px-10 mx-auto flex flex-col md:flex-row justify-center gap-20 md:gap-10 pt-[100px] md:pt-[130px] pb-[100px] min-h-screen items-center">
        <div className="w-full md:w-1/2 max-w-[500px] mx-auto md:mx-0">
        <h2
            className="text-3xl md:leading-tight font-semibold text-center uppercase font-Roboto pb-4 md:pb-6"
          >
            Contact Us
          </h2>
          <div className="flex flex-col gap-10">
            {contactData.map((c, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h2 className="text-[#6B7280] text-xl">{c.name}</h2>
                <div className="text-[#374151] text-xl">
                  {c.url ? (
                    <a href={c.url} className="underline underline-offset-4">
                      {c.value}
                    </a>
                  ) : (
                    <address>{c.value}</address>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
