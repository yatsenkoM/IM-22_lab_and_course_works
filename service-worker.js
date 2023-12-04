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
    "revision": "223f909915ea541d0b2c43c7acb4e6fd"
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
    "url": "assets/js/12.45311e4e.js",
    "revision": "8005d7511fe995be94b3c5071b35c5cc"
  },
  {
    "url": "assets/js/13.e528100b.js",
    "revision": "395a155f7a01668aa028ec27b2aca305"
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
    "url": "assets/js/17.69a5b15a.js",
    "revision": "0b4d050acb0a03f138697567f3af1d78"
  },
  {
    "url": "assets/js/18.592aad1f.js",
    "revision": "c51e135d52e8b14b46cb04d55ba49ab5"
  },
  {
    "url": "assets/js/19.a42b92e0.js",
    "revision": "d726fa5da0902511d22501ba6754aaae"
  },
  {
    "url": "assets/js/2.26d7972d.js",
    "revision": "a6cccba84d2e453c616dd053afbfd137"
  },
  {
    "url": "assets/js/20.08e5e2c2.js",
    "revision": "707d2e65020236b101d596a98df24de1"
  },
  {
    "url": "assets/js/21.3bbc70b1.js",
    "revision": "579ab0d586f53d50abe55303f72b2a3b"
  },
  {
    "url": "assets/js/22.71cc33cb.js",
    "revision": "2a9ecd62a0c54ab221e74324f5795b7d"
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
    "url": "assets/js/app.314c166d.js",
    "revision": "ac543654397aeab8a0569194ae8084f1"
  },
  {
    "url": "conclusion/index.html",
    "revision": "479d857adb3459cc4cc4b58232806c49"
  },
  {
    "url": "design/index.html",
    "revision": "b961f25a0c7e22dfbc1a689db054ad45"
  },
  {
    "url": "index.html",
    "revision": "1e7d49538ed5f2f46de5f028d11abda1"
  },
  {
    "url": "intro/index.html",
    "revision": "374b85271870b9c0c21a61f9fb88b2ec"
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
    "revision": "ee751af672b5dbfcfadeb0f5ab9d7579"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "a1cb9f16051c9bb4ea56072b4195aa97"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "500ac942b51e6b75d6e37998c3d66713"
  },
  {
    "url": "software/index.html",
    "revision": "1658dc9d53ef5fc5e51bf64a7d352948"
  },
  {
    "url": "test/index.html",
    "revision": "48b133e74351ee274c73c220301104c6"
  },
  {
    "url": "use cases/index.html",
    "revision": "3b954c9b05c1d43c5b82fe4838bd186e"
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
