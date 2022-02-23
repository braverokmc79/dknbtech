 (function() {
    var w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
    }
    var ch = function() {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function(args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  })();

  const channel_pluginKey=document.querySelector("#channel_pluginKey").value;
  const channel_memberId=document.querySelector("#channel_memberId").value;
  const channel_name=document.querySelector("#channel_name").value;
  const channel_mobileNumber=document.querySelector("#channel_mobileNumber").value;

  ChannelIO('boot', {
    "pluginKey": channel_pluginKey, //please fill with your plugin key
    "memberId": channel_memberId, //fill with user id
    "profile": {
      "name": channel_name, //fill with user name
      "mobileNumber": channel_mobileNumber, //fill with user phone number
      "CUSTOM_VALUE_1": "VALUE_1", //any other custom meta data
      "CUSTOM_VALUE_2": "VALUE_2"
    }
  });