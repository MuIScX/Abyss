import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script id="chatbot-script" strategy="afterInteractive">
          {`
            window.__be = window.__be || {};
            window.__be.id = "66af200ea314fd000757dfbe";
            (function() {
                var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
                be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
            })();
          `}
        </Script>
        <noscript>
          You need to{' '}
          <a
            href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/"
            rel="noopener nofollow"
          >
            enable JavaScript
          </a>{' '}
          in order to use the AI chatbot tool powered by{' '}
          <a
            href="https://www.chatbot.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            ChatBot
          </a>
        </noscript>
      </body>
    </Html>
  );
}
