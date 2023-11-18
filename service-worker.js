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
    "revision": "cae76e1081108c00834d3e5a31ae7c01"
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
    "url": "assets/js/12.77a48f7c.js",
    "revision": "71dfc61d295cbe4b2945f1f16410cf5f"
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
    "url": "assets/js/17.3fb5cdee.js",
    "revision": "666592bb25546b198f987ac0b84a4d6a"
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
    "url": "assets/js/20.cdbd61eb.js",
    "revision": "35264ee7a7a9fb62fb412f005253f72c"
  },
  {
    "url": "assets/js/21.dda4c5df.js",
    "revision": "879aa0bf63048c3b49f43f3685716403"
  },
  {
    "url": "assets/js/22.32357e3e.js",
    "revision": "5040dd288f02072d89fc0d541996fd4d"
  },
  {
    "url": "assets/js/23.206cee01.js",
    "revision": "d4c78c11707101ea11203b9d80b4b245"
  },
  {
    "url": "assets/js/24.11040995.js",
    "revision": "47faf7a2533fd9a30b7f60bfe207db28"
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
    "url": "assets/js/app.3cbb6f39.js",
    "revision": "fafb9443ec52d4f826e05cfed383163e"
  },
  {
    "url": "conclusion/index.html",
    "revision": "ad6ab4279363ac8b99ac801f4e7ca3cb"
  },
  {
    "url": "design/index.html",
    "revision": "2a30a8259dff6b40a8ec74b35ea937d8"
  },
  {
    "url": "index.html",
    "revision": "0b8bfbdeb7ec197a71f7d3b0fae787bf"
  },
  {
    "url": "intro/index.html",
    "revision": "66e7ad04e9bdff7f3e0f3f7aecdab6c3"
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
    "revision": "b8d125dfd4186faf738a7cf9cf87633b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "e7c9888bcf24660ceec2cb5b61406e93"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ee86f0f3dd886a9ff90b1617e45f95bc"
  },
  {
    "url": "software/index.html",
    "revision": "a268a063efcb35e987a1a842dc9b50b5"
  },
  {
    "url": "test/index.html",
    "revision": "d1dac72d1786012620b2adaeaf86a993"
  },
  {
    "url": "use cases/index.html",
    "revision": "0a6cbe0e15d707e79104cb45bdc265b8"
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
