import Script from "next/script";

const AdSense = () => {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4524794510936601"      
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default AdSense;
