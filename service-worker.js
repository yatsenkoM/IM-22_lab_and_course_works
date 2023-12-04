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
    "revision": "cb32cf4cdd5c51f5c65a36a6d8378c46"
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
    "url": "assets/js/12.c682ed13.js",
    "revision": "685afeae998cfac0c59b9b9397b329ce"
  },
  {
    "url": "assets/js/13.13c4edd5.js",
    "revision": "b76e69ddbe872fbe381ee0c9358fc8cf"
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
    "url": "assets/js/18.83734c13.js",
    "revision": "f09c8ce5e45d44a4d377e07204a5001c"
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
    "url": "assets/js/20.f1f6b975.js",
    "revision": "7c98e59f2e1fc9465a8208eac64a9770"
  },
  {
    "url": "assets/js/21.d83fab28.js",
    "revision": "3d56fb2801f01ce9206a99c9d1e1ae7d"
  },
  {
    "url": "assets/js/22.ed9a9bff.js",
    "revision": "39dad132f1f6a1974b8f5ec690ad274d"
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
    "url": "assets/js/app.019a75c5.js",
    "revision": "2bfe9fc0c0abae32447b1c7ef5e78ddc"
  },
  {
    "url": "conclusion/index.html",
    "revision": "c527bd47056aaeebc19f4c7a6f3ce2b9"
  },
  {
    "url": "design/index.html",
    "revision": "50ee2217ffb2dd539f5b3937492d240f"
  },
  {
    "url": "index.html",
    "revision": "3fd1ad91091e4171788e22d23da53e35"
  },
  {
    "url": "intro/index.html",
    "revision": "5af538782bcabd7bbe6f3f6171d720d9"
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
    "revision": "fbf964be210661eac52a8f8fe882258f"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "a75cdb180b97cf47ac95bedda72cae52"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "7a4a9db75359556734fc8f35edc52e8d"
  },
  {
    "url": "software/index.html",
    "revision": "72459bf746f55b99f6fcf3743f30212b"
  },
  {
    "url": "test/index.html",
    "revision": "c40f43f8f8f92af635879833f14eafbb"
  },
  {
    "url": "use cases/index.html",
    "revision": "57378ee8a8d928074d558e470c5df0f0"
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
