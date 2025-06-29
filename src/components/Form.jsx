import {useState} from "react";
import emailjs from "@emailjs/browser";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

export default function Example() {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); // Formun varsayılan davranışını engeller
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_t52cd6b", // EmailJS servis ID
        "template_z4at7fg", // EmailJS şablon ID
        e.target, // Form referansı
        "w_aBzG6P5w-xeuf8t" // EmailJS kullanıcı public key
      )
      .then(
        (result) => {
          console.log("Başarılı:", result.text);
          alert("Mesajınız başarıyla gönderildi!");
          setIsLoading(false);
          e.target.reset(); // Formu temizler
        },
        (error) => {
          console.error("Hata:", error.text);
          alert("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="pt-12 pb-20 md:py-24 mx-auto max-w-7xl py-12 px-6 sm:px-0 sm:py-12 lg:px-20">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="w-full">
          <div className="contact-container flex flex-col gap-12 md:gap-24">
            <div className="address text-gray-700 w-full">
              <h2 className="text-4xl text-blue-950 tracking-tight mb-8">
                Get in touch
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                placeat doloribus veniam, quae totam commodi illo. Mollitia
                atque, fugiat velit voluptatum officia assumenda eos quas
                suscipit iure eaque, architecto autem.
              </p>
              <iframe
                className="iframe rounded w-full my-8"
                title="myaddress"
                style={{
                  border: "0",
                  minHeight: "300px",
                  maxHeight: "350px",
                }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12039.364990206275!2d28.885955000000003!3d41.028729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabae88118fa07%3A0xc30ec9db5ef091a0!2zWcSxbGTEsXogVGVrbmlrIMOcbml2ZXJzaXRlc2kgRcSfaXRpbSBGYWvDvGx0ZXNp!5e0!3m2!1str!2str!4v1734424958549!5m2!1str!2str"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="flex gap-3">
                <HomeRoundedIcon className="icons text-blue-900" />
                <p>
                  Davutpaşa Cad., Eğitim Fakültesi Yıldız Teknik Üniversitesi
                  Davutpaşa Kampüsü, 34220 Esenler/İstanbul
                </p>
              </div>
              <div className="flex gap-3 py-4">
                <MailRoundedIcon className="icons text-blue-900" />
                <p>sbkert@yildiz.edu.tr</p>
              </div>
              <div className="flex gap-3">
                <PhoneRoundedIcon className="icons text-blue-900" />
                <p>+ 01 234 567 88</p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={sendEmail} className="w-full">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">
                Contact Form
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-full">
                  <label
                    htmlFor="from_name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Name and Surname
                  </label>
                  <div className="mt-2">
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      autoComplete="name"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-full">
                  <label
                    htmlFor="from_email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="from_email"
                      name="from_email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              disabled={isLoading}
              type="submit"
              className="w-full rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline-blue-800"
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
