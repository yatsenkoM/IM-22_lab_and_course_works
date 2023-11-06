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
    "revision": "0cbc60bf2ecbbb4e3ce96da3ade21c79"
  },
  {
    "url": "assets/css/0.styles.d4dab244.css",
    "revision": "53f44db6e68fc951ae7605c3a4fe8ac6"
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
    "url": "assets/js/17.b0145fbe.js",
    "revision": "85507abb09c314eaa511a7b5d38eb89d"
  },
  {
    "url": "assets/js/18.bb9d9bcc.js",
    "revision": "18a129a5b2cb8d0997988f9e1f1a8c75"
  },
  {
    "url": "assets/js/19.19f206bb.js",
    "revision": "61a0efe9ad2a0b831e70315ea4cae3ba"
  },
  {
    "url": "assets/js/2.f49aea5b.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.53816bdf.js",
    "revision": "ee1473700e38d746bf9072b5e1522542"
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
    "url": "assets/js/24.11040995.js",
    "revision": "47faf7a2533fd9a30b7f60bfe207db28"
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
    "url": "assets/js/5.659aa560.js",
    "revision": "1e64aadea8db82000000ca9b866cb5ff"
  },
  {
    "url": "assets/js/6.a8a552ef.js",
    "revision": "65c87ea66ae3b2e4b676cfecaec56395"
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
    "url": "assets/js/app.54336a2f.js",
    "revision": "5816afc7a051163248d1eb3b75499f75"
  },
  {
    "url": "conclusion/index.html",
    "revision": "78f7d76403878e0c2e369ef40bc490fc"
  },
  {
    "url": "design/index.html",
    "revision": "687339af8844d9e0274f42ce30cf3821"
  },
  {
    "url": "index.html",
    "revision": "e472471da0d834c492f80991120541be"
  },
  {
    "url": "intro/index.html",
    "revision": "cc2a38242a9fec79747dd838d27ad068"
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
    "revision": "53515b9a871e589b614c94448a0724a4"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "9fb4cef2d88c648443790f388a4f20ac"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "f8fce5a423c90c30bf7c5faa14b3320e"
  },
  {
    "url": "software/index.html",
    "revision": "3f87bef1293520057bdd5ef34d71c059"
  },
  {
    "url": "test/index.html",
    "revision": "6c6b204bbae14b9d804c5d206db05c2f"
  },
  {
    "url": "use cases/index.html",
    "revision": "53d9c41d83fa37f14a9e3514ebba736d"
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
