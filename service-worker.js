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
    "revision": "a455710e55cd403bbd8b45396df540e2"
  },
  {
    "url": "assets/css/0.styles.fb77016b.css",
    "revision": "4934813b78b14fe01dfe8a98d088f88d"
  },
  {
    "url": "assets/img/Diagram.8cd51fc3.png",
    "revision": "8cd51fc3449f1cfdb8c5adc10e86f5a4"
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
    "url": "assets/js/10.957dcea5.js",
    "revision": "d7538e323b2c19a9b2e19c32c3764f80"
  },
  {
    "url": "assets/js/11.b0b5436d.js",
    "revision": "5e9b1c490ba4645d2eb08378b94e6298"
  },
  {
    "url": "assets/js/12.77a48f7c.js",
    "revision": "71dfc61d295cbe4b2945f1f16410cf5f"
  },
  {
    "url": "assets/js/13.c00a50fa.js",
    "revision": "8af0d2f16022e5dd7ec460d148a2b784"
  },
  {
    "url": "assets/js/14.d545891d.js",
    "revision": "6d883a9120783caaea53a3c0d6088014"
  },
  {
    "url": "assets/js/15.9b3ccd6d.js",
    "revision": "226b9d4d2484f752b3e8f5e9afbb0fff"
  },
  {
    "url": "assets/js/16.6f68529b.js",
    "revision": "21917c27465259a28237d1427e60a645"
  },
  {
    "url": "assets/js/17.c6e0c15d.js",
    "revision": "3a78f4dbbb84ef5161d9c6e1833252d5"
  },
  {
    "url": "assets/js/18.290d20d5.js",
    "revision": "7250c2acee2e2afc530aafdd142b013f"
  },
  {
    "url": "assets/js/19.89448c33.js",
    "revision": "d349c1ba05fd2627865d2a406e9bbaf4"
  },
  {
    "url": "assets/js/2.26d7972d.js",
    "revision": "a6cccba84d2e453c616dd053afbfd137"
  },
  {
    "url": "assets/js/20.6a5de4f4.js",
    "revision": "9de869485764c78c6d716cc56d98487c"
  },
  {
    "url": "assets/js/21.3bbc70b1.js",
    "revision": "579ab0d586f53d50abe55303f72b2a3b"
  },
  {
    "url": "assets/js/22.c3ebfb69.js",
    "revision": "2b91ea54beedcba37d372dc83fd0147d"
  },
  {
    "url": "assets/js/23.206cee01.js",
    "revision": "d4c78c11707101ea11203b9d80b4b245"
  },
  {
    "url": "assets/js/24.8dcd63b9.js",
    "revision": "a343cfb3484c636e98143c8281bfe7b3"
  },
  {
    "url": "assets/js/26.9af74e7b.js",
    "revision": "755c07933666c73c43f285453aafa8be"
  },
  {
    "url": "assets/js/3.30bf635f.js",
    "revision": "ecee189d87ebfd2e6769e92321c0682a"
  },
  {
    "url": "assets/js/4.d3a5ca8a.js",
    "revision": "f5e358c092e8e7074438167a8546cd32"
  },
  {
    "url": "assets/js/5.4d634a29.js",
    "revision": "9606c2c89dc4c0e9b89e89a6c111c948"
  },
  {
    "url": "assets/js/6.b170ac22.js",
    "revision": "94adaae66be5d3b91a1b9e1f345aff27"
  },
  {
    "url": "assets/js/7.345d5971.js",
    "revision": "60b8e3010646c5c950d77130a8c77eaf"
  },
  {
    "url": "assets/js/8.c2d4042a.js",
    "revision": "5a6e52a4895134b7bbe6602d72a7c993"
  },
  {
    "url": "assets/js/9.344b36c9.js",
    "revision": "1571b9300cdfb0377ab7d62939c23a4f"
  },
  {
    "url": "assets/js/app.309c0468.js",
    "revision": "3207c329d16ef6234e9567c1c9c5eb52"
  },
  {
    "url": "conclusion/index.html",
    "revision": "9cd5fd4e0926e7b10196841bd85567b5"
  },
  {
    "url": "design/index.html",
    "revision": "cf75494ee7f87a03cf85bb8613d851c6"
  },
  {
    "url": "index.html",
    "revision": "cc1acd0377244ad45deba9d222d7a7df"
  },
  {
    "url": "intro/index.html",
    "revision": "40d762dd976e055ffdc3d05b4671246a"
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
    "revision": "3041d0945396282281304939d40d5c93"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "335aa1e045b949ba49bca8ca7c2bfe9b"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ccbd3b32d3669173c0d11fe7968a24c3"
  },
  {
    "url": "software/index.html",
    "revision": "c81cc32689894ecdd76b43883e5ceb24"
  },
  {
    "url": "test/index.html",
    "revision": "fac0b7c167513adcbf0005193c10aacf"
  },
  {
    "url": "use cases/index.html",
    "revision": "9b144e793ed7ea96d5fff0e4d2dbf2d3"
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
