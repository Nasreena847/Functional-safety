// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixWindow from 'wix-window';

$w.onReady(function () {
    // Initially hide the menu
    $w('#horizontalMenu1').hide();

    // Show the menu after a delay (e.g., 2000ms or 2 seconds)
    setTimeout(() => {
        $w('#horizontalMenu1').show('fade', { duration: 200 });
    }, 2000); // Adjust the delay time as needed
});


$w.onReady(function () {
    // Function to check the screen width
    function checkScreenWidth() {
      wixWindow.getBoundingRect()
        .then((windowSizeInfo) => {
          let screenWidth = windowSizeInfo.window.width;
          let targetWidth = 600; // Replace with your desired screen width in pixels
  
          if (screenWidth <= targetWidth) {
            $w("#box41").hide();
          } else {
            $w("#box41").show();
          }
        });
    }
  
    // Initial check when the page loads
    checkScreenWidth();
  
    // Add an event listener for window resize using Wix's $w
    $w("#page1").onViewportEnter(() => {
      checkScreenWidth();
    });
  
    $w("#page1").onViewportLeave(() => {
      checkScreenWidth();
    });
  });