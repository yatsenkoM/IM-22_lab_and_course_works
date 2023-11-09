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
    "revision": "c588d3d01c87ed187db4cd2eb064376b"
  },
  {
    "url": "assets/css/0.styles.f0f7288f.css",
    "revision": "3c0a1ed287f123cbefe883bb4d94d616"
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
    "url": "assets/js/20.e3bb782d.js",
    "revision": "f929c47f842043ed785e4eaa32a808d1"
  },
  {
    "url": "assets/js/21.a5889072.js",
    "revision": "4a993980e519db4410dbd5ef9712aaf5"
  },
  {
    "url": "assets/js/22.aa9b1151.js",
    "revision": "298032fc3696719e46ec466570d63cb1"
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
    "url": "assets/js/6.0a5be35e.js",
    "revision": "106b32c6f4126739dcbba2721a32a6ac"
  },
  {
    "url": "assets/js/7.77eca909.js",
    "revision": "8c02bd53007cf633c6475e24ceb02dde"
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
    "url": "assets/js/app.f2e2df8f.js",
    "revision": "de342e1f36a1e184809645f14ad9e2a4"
  },
  {
    "url": "conclusion/index.html",
    "revision": "e33d961ebe601155d7c013a89824f68e"
  },
  {
    "url": "design/index.html",
    "revision": "1d91b0bff4f90c6cc0d8b1f1c258c158"
  },
  {
    "url": "index.html",
    "revision": "fe5188b123f5d686b7918375f23c3fa4"
  },
  {
    "url": "intro/index.html",
    "revision": "7b1c184d77630ecf1a0e313e1bebaedf"
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
    "revision": "8572d29467901c7e9d6d6ae91df16720"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "84fb705284c0ed2487af44721d17bf9c"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "6860ccb8905e989b8e70b116546d8146"
  },
  {
    "url": "software/index.html",
    "revision": "f7ce4b4c6340baf78723d31d3e6c9cbc"
  },
  {
    "url": "test/index.html",
    "revision": "67f770a2a8ef7e77155d4f098f497354"
  },
  {
    "url": "use cases/index.html",
    "revision": "80f63252151b042a931c3d2164d860b5"
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
