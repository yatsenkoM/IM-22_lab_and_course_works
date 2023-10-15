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
    "revision": "a62492120299b7e8f5a05abfdadbca44"
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
    "url": "assets/js/18.1c3f2d6b.js",
    "revision": "017e9fef077983d0805a63b724fa6f9b"
  },
  {
    "url": "assets/js/19.72b8490a.js",
    "revision": "374df65b9b682f8b352e4cde19517798"
  },
  {
    "url": "assets/js/2.f49aea5b.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.46ac6f29.js",
    "revision": "4905fd564874cd8646cbaf6b3b78c8e5"
  },
  {
    "url": "assets/js/21.a5889072.js",
    "revision": "4a993980e519db4410dbd5ef9712aaf5"
  },
  {
    "url": "assets/js/22.58ac703c.js",
    "revision": "be0693706a1616c24e68a491dcd2af07"
  },
  {
    "url": "assets/js/23.2fe73bdd.js",
    "revision": "ababb98b2fce59099380a5d4ca80a377"
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
    "url": "assets/js/app.df6433ca.js",
    "revision": "8f8f7a8afc67e8b8a50a1e88a9ea2375"
  },
  {
    "url": "conclusion/index.html",
    "revision": "a92f90934f5305df5608fd279e8db469"
  },
  {
    "url": "design/index.html",
    "revision": "f1bf6e2be87d5f5a3635461ae6fbc6f3"
  },
  {
    "url": "index.html",
    "revision": "7f76de64b533a611de74a6db4a5b978b"
  },
  {
    "url": "intro/index.html",
    "revision": "b5f544187a77e183f81dfc3131f11edf"
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
    "revision": "0e74b1cb9de8e6f0543563677aea4b2a"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c4fe13f933f4446b0374a3c807d9df6b"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "9e8db5a568bc10b95cba3ad34aaaaf46"
  },
  {
    "url": "software/index.html",
    "revision": "a0a6031e56423f81273a84322b26d924"
  },
  {
    "url": "test/index.html",
    "revision": "2ffbdbf37a16ccb81ec4bc301ef66c45"
  },
  {
    "url": "use cases/index.html",
    "revision": "94a3217f3a8f528c4a5a53993773a6ac"
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
