import { useEffect } from "react";

const useAppLaunch = () => {
  useEffect(() => {
    function isAndroid() {
      return navigator.userAgent.toLowerCase().indexOf("android") > -1;
    }

    function isiOS() {
      return (
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !(window as any).MSStream
      );
    }

    function isAppInstalled(packageName: string) {
      if (isAndroid()) {
        // Check if the intent is available
        var intent =
          (window as any).Intent &&
          (window as any).prototype &&
          (window as any).prototype.hasExtra &&
          (window as any).prototype.hasExtra("android.intent.extra.REFERRER");
        return intent;
      } else if (isiOS()) {
        var deeplinkUrl = `airhub://`;
        var change = false;
        setTimeout(() => {
          if (!change) {
            var redirectUrl =
              "https://apps.apple.com/us/app/airhub/id1661240899";
            (window as any).location = redirectUrl;
          }
        }, 3000);
        // (window as any).location = deeplinkUrl;
        document.location.replace(deeplinkUrl);
        window.onblur = function () {
          change = true;
        };
        window.onfocus = function () {
          change = false;
        };
      } else {
        return false; // Not Android or iOS, app cannot be installed
      }
    }

    var packageName = "com.airhub.app";
    var isInstalled = isAppInstalled(packageName);

    if (isInstalled) {
      // App is installed, you can launch it here
      var uri =
        "intent://somepath#Intent;scheme=airhub;package=" +
        packageName +
        ";end";
      document.location.replace(uri);
    } else {
      // App is not installed
      var appStoreLink = "https://apps.apple.com/us/app/airhub/id1661240899";
      if (isiOS()) {
        window.location.href = appStoreLink;
      }
    }
  }, []);
};

export default useAppLaunch;
