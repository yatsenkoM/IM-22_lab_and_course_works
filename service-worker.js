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
    "revision": "4ce0155f2e9e8072417b3a1560f0f027"
  },
  {
    "url": "assets/css/0.styles.87e28b17.css",
    "revision": "bcf4ce6deb65baccc2baaa47dfae5c7b"
  },
  {
    "url": "assets/img/addingFile_1.c701bd82.png",
    "revision": "c701bd8280e96e44ab77dea8cca29257"
  },
  {
    "url": "assets/img/addingFile_2.b5b4710c.png",
    "revision": "b5b4710c422a4b6f2d391f84ec007372"
  },
  {
    "url": "assets/img/addingFile_3.81004b3d.png",
    "revision": "81004b3d0153da4439935600d6aa348a"
  },
  {
    "url": "assets/img/changingFile.0382c9a3.png",
    "revision": "0382c9a3d40e7fa1793b7751b3e416d7"
  },
  {
    "url": "assets/img/deletingFile.3af7a738.png",
    "revision": "3af7a7384579969b840296c8fea8bd8d"
  },
  {
    "url": "assets/img/finalGetting.d04cf95f.png",
    "revision": "d04cf95f22ce1bdebf3c2592daa0a60b"
  },
  {
    "url": "assets/img/gettingAll_1.522960db.png",
    "revision": "522960dbcfede67f2f32798acb64f043"
  },
  {
    "url": "assets/img/gettingAll_2.a9b5fd8e.png",
    "revision": "a9b5fd8e46950c8c9803456648dad975"
  },
  {
    "url": "assets/img/gettingFileById.afb4712b.png",
    "revision": "afb4712b495dff42dbeda8217debb977"
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
    "url": "assets/js/1.a1e873d8.js",
    "revision": "b4f2189d72d8b5a0e2e092748c873b48"
  },
  {
    "url": "assets/js/10.c7490fe5.js",
    "revision": "a2c8d6dbd2c5534e06a0469f5e5be230"
  },
  {
    "url": "assets/js/13.3c04993b.js",
    "revision": "390529dd3d341adddbe2d02ab64a478a"
  },
  {
    "url": "assets/js/14.38513f5d.js",
    "revision": "7d7fc9b8fda6d3b84540ec3b3e1e24a9"
  },
  {
    "url": "assets/js/15.0a8dcf2b.js",
    "revision": "2033c093119047bd3d24c3d4fa4bdc6d"
  },
  {
    "url": "assets/js/16.f903b50d.js",
    "revision": "6f1b898c8972dfb25207c9d55066d09e"
  },
  {
    "url": "assets/js/17.350e973a.js",
    "revision": "69ceddf769a35b0a54f4d8eb01c9d0ef"
  },
  {
    "url": "assets/js/18.84d5707b.js",
    "revision": "552e26859640165031afe64841d913b6"
  },
  {
    "url": "assets/js/19.a7643658.js",
    "revision": "f6667c84ff17bd02c463b721c76c245e"
  },
  {
    "url": "assets/js/2.7f850a25.js",
    "revision": "a17efe79589ec45c63680ec2762ed8bf"
  },
  {
    "url": "assets/js/20.de4117ca.js",
    "revision": "05eaa452012a23b1ce7cbf91ca63a059"
  },
  {
    "url": "assets/js/21.a1443168.js",
    "revision": "89d3ca1fee9603d9809d4da96b2addc5"
  },
  {
    "url": "assets/js/22.75bd8da2.js",
    "revision": "9a6203edb83809be3c12a0fdf873ad95"
  },
  {
    "url": "assets/js/23.0a104ccf.js",
    "revision": "84c306ee5feb4b8ba98e7e3a94ceea79"
  },
  {
    "url": "assets/js/24.71747e91.js",
    "revision": "114239439be14319d72c4d4c1815baad"
  },
  {
    "url": "assets/js/25.106c4929.js",
    "revision": "8535f926ecfd4a0f08d8317a2d8bf578"
  },
  {
    "url": "assets/js/26.38fa490d.js",
    "revision": "91a920ccf30039bc31fe7789556bd5db"
  },
  {
    "url": "assets/js/27.ba56daa5.js",
    "revision": "6887842a8cf86d2524004a1c085bf56d"
  },
  {
    "url": "assets/js/28.a4c8610f.js",
    "revision": "6ead34b6f92e1b73554d36e399ea29f2"
  },
  {
    "url": "assets/js/29.a94e01c9.js",
    "revision": "2d71df1a192fd9563a8b1d5bff3b216b"
  },
  {
    "url": "assets/js/3.63f737f5.js",
    "revision": "f7fa10d3cde4c9948b0f314e7f9ea263"
  },
  {
    "url": "assets/js/30.222081f8.js",
    "revision": "0d695fa28effb38503e52d9af5b21ca7"
  },
  {
    "url": "assets/js/31.f24d164f.js",
    "revision": "aa2d0a25272fc252afbab959c28faa26"
  },
  {
    "url": "assets/js/32.26b9ffe6.js",
    "revision": "e82978202bc58a8338e7dc8cbef6e669"
  },
  {
    "url": "assets/js/33.273a4127.js",
    "revision": "7e91fc039912a5df9c0e977a4d97def0"
  },
  {
    "url": "assets/js/34.ec08f6cf.js",
    "revision": "ef1b79a4ca26ceaec74fc4637eb5b1f3"
  },
  {
    "url": "assets/js/35.2549fdbd.js",
    "revision": "2d3729fd2a5f4fc985515528030027c1"
  },
  {
    "url": "assets/js/36.79f02728.js",
    "revision": "29af39dcb69399524df1295e19098212"
  },
  {
    "url": "assets/js/37.89fab3c1.js",
    "revision": "d813fad27ac1da0770ef32103dbb80d3"
  },
  {
    "url": "assets/js/38.2fa50112.js",
    "revision": "afcc2bf43afcc32f17f10c250b67c86d"
  },
  {
    "url": "assets/js/39.9e3cb465.js",
    "revision": "92ce757849503060c4458ef346888dbf"
  },
  {
    "url": "assets/js/4.91094f52.js",
    "revision": "b579515269c983005ab054c785677f55"
  },
  {
    "url": "assets/js/41.f8eb18c3.js",
    "revision": "9c5146a9be29a7d120e4bd85bcfed24a"
  },
  {
    "url": "assets/js/5.190651a1.js",
    "revision": "6d37d88803585b7a56b3d7467c6ec4f6"
  },
  {
    "url": "assets/js/6.7130324a.js",
    "revision": "0756c1e59039b19d2a2b67d114060e4c"
  },
  {
    "url": "assets/js/7.4a872be1.js",
    "revision": "241df072a006aad96fb746a40cc6c0d4"
  },
  {
    "url": "assets/js/8.91c3ee18.js",
    "revision": "8b38a330a5de83543b2351b11c23d056"
  },
  {
    "url": "assets/js/9.53eb983e.js",
    "revision": "7ae6a3f503420b73a1f70753ffdd5e9a"
  },
  {
    "url": "assets/js/app.8eee0868.js",
    "revision": "9a13b69b14b636c0853831f999e1d614"
  },
  {
    "url": "assets/js/vendors~docsearch.2184b1dd.js",
    "revision": "01042a29b434baef327ddd17f11933e9"
  },
  {
    "url": "conclusion/index.html",
    "revision": "c76d48ea5e091797d9685bde0443d99b"
  },
  {
    "url": "design/index.html",
    "revision": "969eafcebf21628c5831c3ca142e757c"
  },
  {
    "url": "index.html",
    "revision": "1edd25edd555ecb8c0a8d9af1eb1ada1"
  },
  {
    "url": "intro/index.html",
    "revision": "c75d77f24265a14621fa2fd0a01b0446"
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
    "revision": "8fdd7868f1087d7e8a185ec996527075"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "5f1b37f7b2a75846ad08c29fd069c8f1"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "2b2e53bd67cd8b48f23937ea4cd190a3"
  },
  {
    "url": "software/index.html",
    "revision": "44db43f57302a47eee9dddb9eaa1c928"
  },
  {
    "url": "test/index.html",
    "revision": "b14599698bc83ea8ca4d5d01123a91d9"
  },
  {
    "url": "use cases/index.html",
    "revision": "06095c581d458e700fe640a0f2139be3"
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
