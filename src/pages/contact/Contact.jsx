import PageContainer from "../../components/container/PageContainer";
import "./Contact.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import XIcon from "@mui/icons-material/X";
function Contact() {
  return (
    <div className="contact">
      <PageContainer>
        <div className="contact-container">
          <iframe
            className="iframe rounded"
            title="myaddress"
            style={{
              border: "0",
              // borderRadius: ".7rem",
              // minHeight: "350px",
            }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12039.364990206275!2d28.885955000000003!3d41.028729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabae88118fa07%3A0xc30ec9db5ef091a0!2zWcSxbGTEsXogVGVrbmlrIMOcbml2ZXJzaXRlc2kgRcSfaXRpbSBGYWvDvGx0ZXNp!5e0!3m2!1str!2str!4v1734424958549!5m2!1str!2str"
            // width={"100%"}
            //  height={"100%"}
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
          ></iframe>
          <div className="address text-gray-700">
            <p className="address-title text-blue-950">Address</p>
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
          </div>
          <div className="fallow text-blue-950">
            <p className="address-title">Fallow Us</p>
            <XIcon />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export default Contact;
