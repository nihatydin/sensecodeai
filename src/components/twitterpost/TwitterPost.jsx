import {useEffect} from "react";
import PageContainer from "../../components/container/PageContainer";
import "./TwitterPost.css";
function TwitterPost() {
  useEffect(() => {
    // Twitter widget.js script'ini dinamik olarak yüklemek için
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup işlemi: component unmount olduğunda script'i kaldırmak için
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <PageContainer>
        <div className="twitter-posts py-8">
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              The Physical design of SenseCode. Finally, we did it🌟🌟🌟 Great
              team work.
              <a href="https://twitter.com/sbkert?ref_src=twsrc%5Etfw">
                @sbkert
              </a>
              <a href="https://twitter.com/JanetRead?ref_src=twsrc%5Etfw">
                @JanetRead
              </a>
              <a href="https://twitter.com/OzcakirFeridun?ref_src=twsrc%5Etfw">
                @OzcakirFeridun
              </a>
              <a href="https://twitter.com/BerksoyIbrahim?ref_src=twsrc%5Etfw">
                @BerksoyIbrahim
              </a>
              <a href="https://twitter.com/fatiherkoc?ref_src=twsrc%5Etfw">
                @fatiherkoc
              </a>
              <a href="https://twitter.com/TubaUgras?ref_src=twsrc%5Etfw">
                @TubaUgras
              </a>
              <a href="https://twitter.com/bcassidy1?ref_src=twsrc%5Etfw">
                @bcassidy1
              </a>
              <a href="https://twitter.com/Misbahu_SZ?ref_src=twsrc%5Etfw">
                @Misbahu_SZ
              </a>
              <a href="https://twitter.com/hashtag/programming?src=hash&amp;ref_src=twsrc%5Etfw">
                #programming
              </a>
              <a href="https://twitter.com/hashtag/blind?src=hash&amp;ref_src=twsrc%5Etfw">
                #blind
              </a>
              <a href="https://twitter.com/hashtag/NewtonFund?src=hash&amp;ref_src=twsrc%5Etfw">
                #NewtonFund
              </a>
              <a href="https://t.co/ZoBSVsNT78">pic.twitter.com/ZoBSVsNT78</a>
            </p>
            &mdash; SenseCode (@SenseCode_2020)
            <a href="https://twitter.com/SenseCode_2020/status/1487546274983424008?ref_src=twsrc%5Etfw">
              January 29, 2022
            </a>
          </blockquote>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              We made our fourth meeting which is about our road map with great
              contributions of all team members.
              <a href="https://twitter.com/sbkert?ref_src=twsrc%5Etfw">
                @sbkert
              </a>
              <a href="https://twitter.com/JanetRead?ref_src=twsrc%5Etfw">
                @JanetRead
              </a>
              <a href="https://twitter.com/OzcakirFeridun?ref_src=twsrc%5Etfw">
                @OzcakirFeridun
              </a>
              <a href="https://twitter.com/BerksoyIbrahim?ref_src=twsrc%5Etfw">
                @BerksoyIbrahim
              </a>
              <a href="https://twitter.com/fatiherkoc?ref_src=twsrc%5Etfw">
                @fatiherkoc
              </a>
              <a href="https://twitter.com/TubaUgras?ref_src=twsrc%5Etfw">
                @TubaUgras
              </a>
              <a href="https://twitter.com/bcassidy1?ref_src=twsrc%5Etfw">
                @bcassidy1
              </a>
              <a href="https://twitter.com/Misbahu_SZ?ref_src=twsrc%5Etfw">
                @Misbahu_SZ
              </a>
              <br />
              <a href="https://twitter.com/hashtag/programming?src=hash&amp;ref_src=twsrc%5Etfw">
                #programming
              </a>
              <a href="https://twitter.com/hashtag/blind?src=hash&amp;ref_src=twsrc%5Etfw">
                #blind
              </a>
              <a href="https://twitter.com/hashtag/NewtonFund?src=hash&amp;ref_src=twsrc%5Etfw">
                #NewtonFund
              </a>
              <a href="https://t.co/RuhVr2EF95">pic.twitter.com/RuhVr2EF95</a>
            </p>
            &mdash; SenseCode (@SenseCode_2020)
            <a href="https://twitter.com/SenseCode_2020/status/1442919117145579520?ref_src=twsrc%5Etfw">
              September 28, 2021
            </a>
          </blockquote>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              We made our second meeting with great contributions of all team
              members. One more step for the SenseCode{" "}
              <a href="https://twitter.com/JanetRead?ref_src=twsrc%5Etfw">
                @JanetRead
              </a>{" "}
              <a href="https://twitter.com/Misbahu_SZ?ref_src=twsrc%5Etfw">
                @Misbahu_SZ
              </a>{" "}
              <a href="https://twitter.com/bcassidy1?ref_src=twsrc%5Etfw">
                @bcassidy1
              </a>{" "}
              <a href="https://twitter.com/sbkert?ref_src=twsrc%5Etfw">
                @sbkert
              </a>{" "}
              <a href="https://twitter.com/BerksoyIbrahim?ref_src=twsrc%5Etfw">
                @BerksoyIbrahim
              </a>{" "}
              <a href="https://twitter.com/TubaUgras?ref_src=twsrc%5Etfw">
                @TubaUgras
              </a>{" "}
              <a href="https://twitter.com/fatiherkoc?ref_src=twsrc%5Etfw">
                @fatiherkoc
              </a>{" "}
              <a href="https://twitter.com/OzcakirFeridun?ref_src=twsrc%5Etfw">
                @OzcakirFeridun
              </a>{" "}
              <a href="https://twitter.com/hashtag/programming?src=hash&amp;ref_src=twsrc%5Etfw">
                #programming
              </a>{" "}
              <a href="https://twitter.com/hashtag/blind?src=hash&amp;ref_src=twsrc%5Etfw">
                #blind
              </a>{" "}
              <a href="https://twitter.com/hashtag/NewtonFund?src=hash&amp;ref_src=twsrc%5Etfw">
                #NewtonFund
              </a>{" "}
              <a href="https://t.co/80jw4S4Zcc">pic.twitter.com/80jw4S4Zcc</a>
            </p>
            &mdash; SenseCode (@SenseCode_2020){" "}
            <a href="https://twitter.com/SenseCode_2020/status/1364643124543426563?ref_src=twsrc%5Etfw">
              February 24, 2021
            </a>
          </blockquote>
        </div>
      </PageContainer>
    </div>
  );
}

export default TwitterPost;
