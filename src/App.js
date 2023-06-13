import React from "react";
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
  <div className="mx-[10%] mt-10">
<div class="grid grid-cols-4 gap-3">
 <div>
 <p className="font-sans">Akads PH is a start up website that offers listing of scholarship and internship available in Philippines.
</p>
<div className="pt-5 flex flex-row gap-2">
  <div className="bg-black p-2 rounded-xl">
 <FaFacebookF size={20} color="white" />
 </div>
 <div className="bg-black p-2 rounded-xl flex ">
 <FaLinkedinIn size={20} color="white"/>
 </div>
</div>

 </div>
 <div>
  <p className="font-sans">Features</p>
  <p className="font-sans">How it works</p>
  <p className="font-sans">FAQS</p>


 </div>
  <div>

  <p className="font-sans">How it works</p>

 </div>
 <div>
 
 <p className="font-sans">About</p>
 <p className="font-sans">Legal</p>
 
 <p className="font-sans">Contact Us</p>
 

 </div>
 

</div>
</div>

        
      
  );
};

export default Footer;

