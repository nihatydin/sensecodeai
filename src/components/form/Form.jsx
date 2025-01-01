// import Address from "../address/Address";
// import PageContainer from "../container/PageContainer";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import XIcon from "@mui/icons-material/X";
export default function Example() {
  return (
    <div className="pt-12 pb-20 md:py-24  mx-auto max-w-7xl py-12 px-6 sm:px-0 sm:py-12 lg:px-20">
      {/* <PageContainer> */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="w-full">
          <div className="contact-container  flex flex-col gap-12 md:gap-24">
            <div className="address text-gray-700 w-full">
              <h2 className="text-4xl text-black mb-8">Get in touch</h2>
              <p className="">
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
                  // borderRadius: ".7rem",
                  minHeight: "300px",
                  maxHeight: "350px",
                }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12039.364990206275!2d28.885955000000003!3d41.028729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabae88118fa07%3A0xc30ec9db5ef091a0!2zWcSxbGTEsXogVGVrbmlrIMOcbml2ZXJzaXRlc2kgRcSfaXRpbSBGYWvDvGx0ZXNp!5e0!3m2!1str!2str!4v1734424958549!5m2!1str!2str"
                // width={"100%"}
                //  height={"100%"}
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                loading="lazy"
              ></iframe>
              <div className="address-content ">
                <HomeRoundedIcon className="icons text-blue-950" />
                <p>
                  Davutpaşa Cad., Eğitim Fakültesi Yıldız Teknik Üniversitesi
                  Davutpaşa Kampüsü, 34220 Esenler/İstanbul
                </p>
              </div>
              <div className="address-content">
                <MailRoundedIcon className="icons text-blue-950" />
                <p>sbkert@yildiz.edu.tr</p>
              </div>
              <div className="address-content">
                <PhoneRoundedIcon className="icons text-blue-950" />
                <p>+ 01 234 567 88</p>
              </div>
              {/* <div className="fallow text-blue-950 pt-6">
                  <p className="address-title">Fallow Us</p>
                  <XIcon />
                </div> */}
            </div>
          </div>
          {/* <Address /> */}
        </div>
        <form className="w-full">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">
                İletişim Formu
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-full">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={4}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm/6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      {/* </PageContainer> */}
    </div>
  );
}
