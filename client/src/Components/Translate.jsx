import React from 'react';

function Translate() {
  function googleTranslateElementInit() {
    new window.google.translate.TranslateElement(
      { pageLanguage: 'en' },
      'google_translate_element'
    );
  }

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script from the DOM
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="google_translate_element">
      {/* This div will be replaced by Google Translate widget */}
    </div>
  );
}

export default Translate;
