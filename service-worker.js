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
    "revision": "3d16f1e0070b82eb799eabaeb97f7e25"
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
    "url": "assets/js/12.45311e4e.js",
    "revision": "8005d7511fe995be94b3c5071b35c5cc"
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
    "url": "assets/js/18.1c3f2d6b.js",
    "revision": "017e9fef077983d0805a63b724fa6f9b"
  },
  {
    "url": "assets/js/19.72b8490a.js",
    "revision": "374df65b9b682f8b352e4cde19517798"
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
    "url": "assets/js/21.bab7edc1.js",
    "revision": "396d2b2e585e50355c911671b53630a1"
  },
  {
    "url": "assets/js/22.4ef36431.js",
    "revision": "56ac49d24296eb2cf518d7d628e1f390"
  },
  {
    "url": "assets/js/23.2fe73bdd.js",
    "revision": "ababb98b2fce59099380a5d4ca80a377"
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
    "url": "assets/js/app.1d6ff91f.js",
    "revision": "4df4b269c06bd51bae9bfd1a66edaa49"
  },
  {
    "url": "conclusion/index.html",
    "revision": "7b2fe21c9d74111011d8f9a31d9a6460"
  },
  {
    "url": "design/index.html",
    "revision": "c9fb73f9f681eb0b0fbbd3038ddd2379"
  },
  {
    "url": "index.html",
    "revision": "989b4b48fcfd3eddea87aa114ca75df8"
  },
  {
    "url": "intro/index.html",
    "revision": "0f27c78926192b8e89e6a5e2d85b3f72"
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
    "revision": "dc56dcf83cf67f46c1b13916678ef3cd"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6e0808292ee2401fd6dafecd0be9adc5"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "7849f17a9207d62b69c263097bc3a729"
  },
  {
    "url": "software/index.html",
    "revision": "6902b7c8a24132ce7176f7fa857a3f59"
  },
  {
    "url": "test/index.html",
    "revision": "ddeea2ca3bd206143032d1bdd4c361b2"
  },
  {
    "url": "use cases/index.html",
    "revision": "c91a69c6d4d4f048fb6f97d65138e9d2"
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
