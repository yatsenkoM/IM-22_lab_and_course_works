/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d38a69d6ff11120c72f1ef46514b56b2"
  },
  {
    "url": "assets/css/0.styles.fb77016b.css",
    "revision": "4934813b78b14fe01dfe8a98d088f88d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b9bd71ba.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.df6d0676.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.aa20a373.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.b5784633.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.29815842.js",
    "revision": "873fa2183875c424ac28425a280e5dcd"
  },
  {
    "url": "assets/js/16.4d29a29a.js",
    "revision": "c675477f2e17bea2023b9fbafcbb22ee"
  },
  {
    "url": "assets/js/17.84d13c90.js",
    "revision": "88eb46c3062d10bf8da23f3e3c815e96"
  },
  {
    "url": "assets/js/18.e4bc7ae5.js",
    "revision": "bbf965a1b476faacb73ef03b2d181e77"
  },
  {
    "url": "assets/js/19.e32e026c.js",
    "revision": "2af13fcbc6726e6464ac3a89b6b15319"
  },
  {
    "url": "assets/js/2.f49aea5b.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.d1587388.js",
    "revision": "e0b2b74e0a7713724ceef2677d194cb2"
  },
  {
    "url": "assets/js/21.e4922d23.js",
    "revision": "6c7a9da546a0f10aebd0a3c22e9d3e6e"
  },
  {
    "url": "assets/js/22.3614a15d.js",
    "revision": "3a31629957ff84ce2060a72a9dfa96f7"
  },
  {
    "url": "assets/js/23.d436ccbb.js",
    "revision": "b50fe8e43f38078ad9fce2e2b7b1c514"
  },
  {
    "url": "assets/js/24.738c9e84.js",
    "revision": "78f61125501f22d63f7810e5fbd45dcf"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.630a2dd6.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.68feb87f.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.612a98a1.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.b06b704d.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.37bcba1a.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.1ed2ea0a.js",
    "revision": "cf804bb06f3b7d35f8afab52ec90a68a"
  },
  {
    "url": "conclusion/index.html",
    "revision": "49eb55354fe479d3108d41bf584261bc"
  },
  {
    "url": "design/index.html",
    "revision": "b79ca31244adfa58011f6f856b68849a"
  },
  {
    "url": "index.html",
    "revision": "849dcf8bd61ac91ec3df2e33746a7e64"
  },
  {
    "url": "intro/index.html",
    "revision": "eb575393690227527b6e39092d092a57"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "86374ccbe873c990842b47d231434dee"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6496c6d7e666e1e45ad44e5c49f1fe74"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "e42bbd0466003d716e6883882b1f0928"
  },
  {
    "url": "software/index.html",
    "revision": "84a54396e408399663d39e188a67d74d"
  },
  {
    "url": "test/index.html",
    "revision": "02b9e84099172dc8af28b8879fd2b084"
  },
  {
    "url": "use cases/index.html",
    "revision": "a2605059ec22c92244b29ef0b109612e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
