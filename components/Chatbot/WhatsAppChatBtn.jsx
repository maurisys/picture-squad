// WhatsAppChatButton.js

import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppChatButton = ({ phoneNumber }) => {
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <div className='z-[90] fixed bottom-[120px] right-[30px] w-[60px] h-[60px] rounded-full shadow-lg shadow-slate-600/75 flex items-center justify-center bg-white '>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <IoLogoWhatsapp className="text-[#30d24e] text-[40px]" />
            </a>
        </div>
    );
};

export default WhatsAppChatButton;
