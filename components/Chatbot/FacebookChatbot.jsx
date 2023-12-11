'use client'

import React, { useEffect } from 'react';

const MessengerChatPlugin = () => {
  useEffect(() => {
    // Your SDK code
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v18.0',
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    // Cleanup function
    return () => {
      // You may need to clean up any resources or event listeners here
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      {/* Messenger Chat Plugin Code */}
      <div id="fb-root"></div>

      {/* Your Chat Plugin code */}
      <div id="fb-customer-chat" className="fb-customerchat"></div>

      {/* Set attributes using JavaScript */}
      <script>
        {`
          var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", "104051148206937");
          chatbox.setAttribute("attribution", "biz_inbox");
        `}
      </script>
    </>
  );
};

export default MessengerChatPlugin;
