import img1 from "../images/Footer Image/Launcher.png";
import img2 from "../images/Footer Image/2.png";
import img3 from "../images/Footer Image/3.png";
import img4 from "../images/Footer Image/4.png";
const Footer = () => {

  const TermsAndConditionLink = "/";
  const PrivacyPolicyLink = "/";
  const changeCookiesLink= "/";
  const wikiLink= "/";

  return (
    <div className="w-full h-full bg-gradient-to-r from-[#1A1E30] via-[#2C3546] to-[#1A1E30] flex flex-col items-center justify-center pl-10 pr-10 pt-5 pb-5 text-slate-50  font-semibold text-[10px] lg:text-[12px]">
       <p>
      This website and its contents are copyright © 1999 - 2024 Jagex Games Ltd, 220 Science Park, Cambridge, CB4 0WA, United Kingdom.
      Use of this website is subject to our <a href={TermsAndConditionLink}>Terms & Conditions</a> and <a href={PrivacyPolicyLink}>Privacy Policy</a>.
      Rules of Old School RuneScape | 
      <a href={changeCookiesLink}>Change Cookie Settings</a> | 
      <a href={wikiLink}>wiki</a>
    </p>
      <div className="flex items-center justify-around mt-4  w-full lg:max-w-[450px]">
        <img className="w-[18px]" src={img4} alt="" />
        <img className="w-[18px]" src={img2} alt="" />
        <img className="w-[80px]" src={img1} alt="" />
        <img className="w-[18px]" src={img3} alt="" />
        <img className="w-[18px]" src={img4} alt="" />
      </div>
    </div>
  );
};

export default Footer;
