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
    "revision": "2a6ca886b3c90fc857187366ef270bc5"
  },
  {
    "url": "assets/css/0.styles.fb77016b.css",
    "revision": "4934813b78b14fe01dfe8a98d088f88d"
  },
  {
    "url": "assets/img/relational-schema.a1d70381.png",
    "revision": "a1d70381c4dad1d0e644bd6842d8da14"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.66f6fd47.js",
    "revision": "9861f1acd35b8cdae58c97c641a020c0"
  },
  {
    "url": "assets/js/11.c1b62882.js",
    "revision": "7d264acc88202f94eeaff5d87f12b22b"
  },
  {
    "url": "assets/js/12.09a5ceef.js",
    "revision": "d1afe8f31b20b4df98d5f57d687e7c78"
  },
  {
    "url": "assets/js/13.685fefd1.js",
    "revision": "329392e254b7c42877bdd9be0419daf3"
  },
  {
    "url": "assets/js/14.e87425e5.js",
    "revision": "7e6e78346124412195991dd1ef11bfae"
  },
  {
    "url": "assets/js/15.ebf38a50.js",
    "revision": "21e30b797528e6510270412867bde0ba"
  },
  {
    "url": "assets/js/16.f261a225.js",
    "revision": "5e85a473f220afc3b49b2635cc49890b"
  },
  {
    "url": "assets/js/17.6b11a382.js",
    "revision": "81ade835c2f67b7fbbab8fba59257969"
  },
  {
    "url": "assets/js/18.9eedd394.js",
    "revision": "453fcf87e87509c7d9c6e966fc756e13"
  },
  {
    "url": "assets/js/19.19f206bb.js",
    "revision": "61a0efe9ad2a0b831e70315ea4cae3ba"
  },
  {
    "url": "assets/js/2.09c15333.js",
    "revision": "daa6b6ed292696bf0a2e3aa0e1b1153a"
  },
  {
    "url": "assets/js/20.e3bb782d.js",
    "revision": "f929c47f842043ed785e4eaa32a808d1"
  },
  {
    "url": "assets/js/21.a5889072.js",
    "revision": "4a993980e519db4410dbd5ef9712aaf5"
  },
  {
    "url": "assets/js/22.82c19ae7.js",
    "revision": "4c71dce8891be56b7832c998b43864e8"
  },
  {
    "url": "assets/js/23.74853ab5.js",
    "revision": "84ea8034415030012ee9aababfc55c86"
  },
  {
    "url": "assets/js/24.7e995c20.js",
    "revision": "d191a9e586cdb4a5ff1665e488cb574b"
  },
  {
    "url": "assets/js/26.a388051f.js",
    "revision": "9052f0ce80ac768f33661d8b7dc67bcd"
  },
  {
    "url": "assets/js/3.37ff259d.js",
    "revision": "9d2b51430537848cac2ea5124482a938"
  },
  {
    "url": "assets/js/4.62df5e3a.js",
    "revision": "668bc91fb4500762c33bec844d358f72"
  },
  {
    "url": "assets/js/5.01993805.js",
    "revision": "6d5176ba3b4c2fa125c6a9aeb57b6aa7"
  },
  {
    "url": "assets/js/6.d2d7c328.js",
    "revision": "52d18539e934aaf4d345354d67942f01"
  },
  {
    "url": "assets/js/7.c09e37a9.js",
    "revision": "bdfef6f12cfe483be868002afeba6c65"
  },
  {
    "url": "assets/js/8.57abb3f8.js",
    "revision": "a323d6e61a5078e66e9a97db0719672c"
  },
  {
    "url": "assets/js/9.a50bcd73.js",
    "revision": "8d744c4bc62ac7fd91f68755a0f6239d"
  },
  {
    "url": "assets/js/app.949fdec5.js",
    "revision": "a975b6054d8582d7c8dc2fd09c1c357a"
  },
  {
    "url": "conclusion/index.html",
    "revision": "72766ebaeca8dfa6a04bcdfb6d815b26"
  },
  {
    "url": "design/index.html",
    "revision": "f025b59e7f30a57712d67d398e8c6d5a"
  },
  {
    "url": "index.html",
    "revision": "b6a135c6fa2d35acb289b036d764dd2d"
  },
  {
    "url": "intro/index.html",
    "revision": "72d501ba2c28c0197f7b3ad4114114ec"
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
    "revision": "9ac0226861ce3095e6a6d3f766b92e3f"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "af0a4b70fbbad4df1fba5020dcf25a35"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "66d3a41cb49922737dd81c03bdd1b1a2"
  },
  {
    "url": "software/index.html",
    "revision": "a2bb1863d1e02df04c90dd710abebbc4"
  },
  {
    "url": "test/index.html",
    "revision": "6e8d68177d4e5045138bc112922e4a02"
  },
  {
    "url": "use cases/index.html",
    "revision": "1d38a78c764b343603e813bed6826421"
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
