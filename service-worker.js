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
    "revision": "a24de1e75b83f6f4f5335a43455d31df"
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
    "url": "assets/js/15.8b0975c2.js",
    "revision": "b538bb42f91c6eeeb4341870b2730dc3"
  },
  {
    "url": "assets/js/16.8e2c9512.js",
    "revision": "7c1d6af6d09d7310b9e4244ddd2518d1"
  },
  {
    "url": "assets/js/17.1707bb9d.js",
    "revision": "bc61fac2b292ef8bed45771d1ab7b412"
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
    "url": "assets/js/2.c79a442c.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.ab31548e.js",
    "revision": "683f74b1cb33b6edb816001d2decc866"
  },
  {
    "url": "assets/js/21.dda4c5df.js",
    "revision": "879aa0bf63048c3b49f43f3685716403"
  },
  {
    "url": "assets/js/22.58ac703c.js",
    "revision": "be0693706a1616c24e68a491dcd2af07"
  },
  {
    "url": "assets/js/23.74853ab5.js",
    "revision": "84ea8034415030012ee9aababfc55c86"
  },
  {
    "url": "assets/js/24.ddca57ad.js",
    "revision": "42e6f2b0c02ad7f94a9440b43670035d"
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
    "url": "assets/js/app.f89a4fd8.js",
    "revision": "14c049db80aaca6ad7b8e39ada8453c4"
  },
  {
    "url": "conclusion/index.html",
    "revision": "ad7b80d369292ff9e199b01e5a6bde90"
  },
  {
    "url": "design/index.html",
    "revision": "687eac37287e236ae3131ef1658f0062"
  },
  {
    "url": "index.html",
    "revision": "bde21f48e2b1897615373e4af4fd4485"
  },
  {
    "url": "intro/index.html",
    "revision": "c9335a82472a77eba59a75fb0dcefe16"
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
    "revision": "6fc270e3e35b52105f2e9859c5fde1f2"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "9c9e709296a6fb502ff78303028e968c"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "0e8a94e7b1c7a06380c99feb00cf9f99"
  },
  {
    "url": "software/index.html",
    "revision": "d2c48078856f24a7d72e25d6ae37d018"
  },
  {
    "url": "test/index.html",
    "revision": "d24642829a3f3c5e61445f9d6e4db142"
  },
  {
    "url": "use cases/index.html",
    "revision": "d365b8db5bf7e8a055414603d254fb2b"
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
