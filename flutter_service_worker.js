'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_24.part.js": "12792bd42af350f86546a1bd61261dc9",
"version.json": "9094aacdae789dccd67fa32109ff1a18",
"main.dart.js_12.part.js": "85b242ca5bca7a5b7d03842647e1c98d",
"main.dart.js_6.part.js": "27920ed1cb1ba2f299ee043feba85af2",
"index.html": "d8e38cf2b17ec2c3e686919124df8460",
"/": "d8e38cf2b17ec2c3e686919124df8460",
"main.dart.js_13.part.js": "6634a657ee05a3dcc018de6495e9de9c",
"main.dart.js_25.part.js": "ad6598edce442312039d12c3d38e009d",
"main.dart.js_4.part.js": "1fd02aea455a024fbea0d382222d3c8d",
"main.dart.js": "4550396187545c17a467003ca29097c5",
"main.dart.js_18.part.js": "f9cabbc51b666dc32fbc6af52aeb8bba",
"main.dart.js_27.part.js": "986e62c986f1f6645778d5be78753231",
"main.dart.js_19.part.js": "1624b12e8e9de5e9d1d26df75bb51bf0",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"main.dart.js_10.part.js": "855ae7c02bbf6529364f695ba78713be",
"main.dart.js_5.part.js": "bf0f24b2886bdbbb53772583d9a91c5d",
"main.dart.js_15.part.js": "1dfa03e98ad29a6a703f0fb6ee1a6077",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_23.part.js": "f7f8984090de3d0d46e37ba4bce14903",
"colors.js": "fe96ea85f0143d2a4d90f16bb5f41aa6",
"main.dart.js_22.part.js": "d43aadddf18104138b1b7644458230ea",
"main.dart.js_8.part.js": "d9c612a63f064ba285f225224cba8754",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d3d4aab626052a9adcd1acd9c47e9cea",
"main.dart.js_14.part.js": "c0358a3729623e79b79bdfd7ebce7280",
"main.dart.js_1.part.js": "3c02c1aeb768e4640bb9937f4567801e",
"spinkit.css": "affadc55f87692da2f26262b7d43d97e",
"main.dart.js_29.part.js": "5604214cc0612b99e60d843712ac3a4e",
".git/config": "4c95a8f1223e5289bbbf7eeb8597701a",
".git/objects/95/70cbcdacab5b5c2b6a054675475c4869cc1d2c": "82844de1f3f89f78efcc3226a894438e",
".git/objects/3e/3140499d6f0b93f9f8dcd9c39a36e8ad27e535": "8647363be23313b3eec71fcf8b127fd7",
".git/objects/3b/b3afe90e2373e6d6e837feffbcae4ad2b81118": "d78d973a618d5863fa96b1ec4df543b3",
".git/objects/6f/0cc16f75286ecaa0806b20513dee2e378ea01e": "b62cafa7ceb6800a623d0fc603c1cccd",
".git/objects/03/209e32bdeb6a6be4adfd5cd9c6143f83940db3": "da95f380de87d6ec411d9b5f0686f4cb",
".git/objects/6a/e5709485bb7c2e0e16d31fa9fcd6739711180d": "fcf5b170d0fd7376c680a3ca89cc4bf3",
".git/objects/6a/3527dffeea515612861141fb76375c142a284f": "d575a4659e8129bf20a59f6882947a94",
".git/objects/56/4c11346fa623c7e865cbaca9c8908d0df3ff95": "959f6704aa6827a06407231e94663958",
".git/objects/60/79002b3c24ba8f4138dfccda7a20102b6de30c": "bfa37ef6cf4a7ed2d5f16225a194283c",
".git/objects/34/1e2593c3d652007c16b60fc70de804a912f1d1": "02b1fbb77ba8ac60e7d9feddead6994b",
".git/objects/33/bf1bf9e998c9e13e00d962a7c8c043fa8cb498": "5a87424bd76a3f6db25cd4f069e05070",
".git/objects/b5/f1f4e0d824608d12d92a61dc7986d3a6ff9f25": "7782763d0f0ce4b2830645dd3f9746b8",
".git/objects/ac/a5e7a1495065c2b07fb6ae7973d29c320ee2a2": "0ab3244af67350ef47edc20bd0fad37a",
".git/objects/ad/8ca03b6b10267c53e606f823d51f345fac6d8e": "da1c8e06f350433c347248642b3f30cc",
".git/objects/bb/baeda4e072c8b9224a61e7b8b1c5758e78bc74": "218c68975fc15d627a961f098127d77b",
".git/objects/d0/03fc50be9a8f078c044fd69447a472a95a1cd9": "b5efde98fc8015c38f87c6892ce2b559",
".git/objects/b4/1992097573264ba3e36020d0b66902ec7d6331": "645cbf055be58ff17364074b65ceb41d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/fa31650f2d92fe5497aa3e7d2199441392cff1": "bbf3c63b2f30ba10ccd76d5d461bbc00",
".git/objects/d8/cc5de95a03a48871bd96820f22af11c020df66": "38ed317525643933162189c868355d96",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a826aa8ce5f8f69dbc24c9e330a3fb95734ef0": "acc5fdb85bb320cfc322964d61880163",
".git/objects/c0/121c8291f30cb7e9469ffac37807d67a5d02ed": "b58727fe896789c3e5cb0190e4019376",
".git/objects/ca/78cfa4691ba2b522faae6c0a28130a68379ad0": "0e1579cb87346d83690d12da6c9072bc",
".git/objects/4b/9fd76cef94fc52843717403843048484de2142": "d593f3e9b1ba68054f283d943c4cb1ac",
".git/objects/pack/pack-042dec734ba6179e36fcf29d80a6bc94c6805c9f.pack": "bf97d409b9914bb357d499489a38a008",
".git/objects/pack/pack-042dec734ba6179e36fcf29d80a6bc94c6805c9f.idx": "6f4464705431ec6346d74220b36f9363",
".git/objects/11/9c7e59f914ab2ff0e83a32ae3f4ecf16c71df0": "3593289705f55d172d231850d400b957",
".git/objects/87/a1b5bb5c9dcbb22b6f8830eea69febf528c9af": "6b134100e3799d1380b09c2bdafe9be3",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/fec2e1443747754f751b89078fa3025939b515": "ae17ca0731f2c5591c5fd75cf986f958",
".git/objects/2f/2791f4e9b9b714a16b0e8ccb4185a95720adf6": "3f130b15875f420a5d308e184f0aedf5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/49a152e55f3cbf69a34dd27093a9c5ac5b802e": "df99cb639e243956328582dc08f0c608",
".git/objects/5d/088591ae999e6f6aacee1fbad981f5501ffe91": "1f59327b123ecfa4b807ea3d59df2b00",
".git/objects/31/d095934c852bc775c09859df349817d4731569": "468c9615fe9eeb1eff006f0e770680eb",
".git/objects/91/9934344b0c0233e635d4f108e12d0d84b5ac7f": "2f364572a867870984028c75bc6c4634",
".git/objects/54/19a59d25b5da907831bb166c0edeb6c79079a6": "e9c96b4863abbb6224413b6ba107124c",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/52/1e260bbafe9f4a1853173aa0bf9718152a0a8a": "562b615fcde24894290fa09dbc7e3cba",
".git/objects/55/d53431c18592d913ee403d30e89866f92be3a4": "2be69c667b25ca62b0cbf514ca19f131",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0f/db50b19893c1286c2b1194297a1c4f3ff4dc07": "5ca6d7a32fe669b4226d4916fb8e3922",
".git/objects/0f/cc0805b287e488448dced74f64459b5f1de723": "b6738e7f68d1e3e6d9f23010885f9ad5",
".git/objects/d4/1039a389b00adbf374d2b38f1d82b1c4d840f8": "6188d5e4cd3514a5717c0574c82e44db",
".git/objects/ba/eddb461bbf3e8fdd4ced23562ab050649048b8": "c4a82317722b6f5d68851d572234688c",
".git/objects/b6/e05f69066b7f57041d2925369c47c9ba4166fd": "6d376aaf0a1e664ee22f04d5348eb047",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/d685c64f156dab4d9bb23d5dc3b9c91583ea4b": "a95d5e6662867bfe5c80f6e1f141e868",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/65c960a524fb7658481e8c769bcf02f26eb5af": "077a455d59cd0b31e1f7ee6d2a15d4c6",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/ff/99869239a0df049245fda51a2b3ad05d5fa7f7": "783afb5828896b1acc32aaca83d6a2fa",
".git/objects/e9/aea9cf60be0b774b716569fe57161037b41262": "fad8dcd063fc4b965b67e45b4601f193",
".git/objects/f1/733b8dd71f75f54a4b4099cace25c46932b45d": "2db211f2d7ad3230510049d6f3d89870",
".git/objects/cb/7d51900261cce39c1d23c705925e390d55bda6": "b97800bc63205abfc6d41a9d54797904",
".git/objects/cb/7d9281a2a40528a227e5dec14e23fd5207ff4a": "b473c3bd1bf0d52559a42497f826ab67",
".git/objects/e0/d1f635836b8e270e7c001f8b820ff2bdd6a6dc": "d61befa07ecedc94c39b1600349b78f8",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/24/53b7ba5c171cba9613d469e4e4c57c901d4f85": "8df90e9f246e5d47391e9012824904a3",
".git/objects/24/48b2d4979cfd3189e174fa023b6bf27eb9458b": "b1c3e378bbae6cc106015a7d2177c8b8",
".git/objects/82/40490461195a18509ffc55f61c9f9b6de5fa88": "2bd1ca23bf2e0a84f9282296c7d53679",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/47/018cc73dee209b0bdc762b2d3e826a96402a43": "452dad8126ce0c4abb2ba9cb29a9a3b5",
".git/objects/8b/b328dc9646125ee097f878d19bcec519522eaf": "86b3191e745e8b947c0b9f1cbd5c731a",
".git/objects/22/37f2c65816323c1b55e4c943f39935e242318a": "b7a6eea0842daf798388cdcc6ea681d1",
".git/objects/25/06224bf708bff6a814792fa87c70d9efe47d44": "24830c36b29c14a2adea6a1a2e932094",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b684082a0a82c997b536983459915834",
".git/logs/refs/heads/main": "b684082a0a82c997b536983459915834",
".git/logs/refs/remotes/origin/HEAD": "1919ca47fe61657dce173cbb1c06705a",
".git/logs/refs/remotes/origin/main": "5fdaa09826f20ec79b6325668e26fe0c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "bf645ad708f781a6deeb12aa6b63b431",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "bf645ad708f781a6deeb12aa6b63b431",
".git/index": "6e5ccfb85d061b38867562171344eb75",
".git/packed-refs": "3da96a26ce4975e0be6aac0ac194c65b",
".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
"main.dart.js_3.part.js": "ead17f573f3398779fd34b1f41d2a5e5",
"main.dart.js_16.part.js": "1d034c72c74fc2c749617330677d2ee2",
"assets/AssetManifest.json": "22f6e0c140a527ee66c0ef29a2483459",
"assets/NOTICES": "c8f83fd9b72c4a2ea6a1d5a4a44e2bbb",
"assets/FontManifest.json": "2524e6e31018af48a424b0b3aecaba69",
"assets/shaders/ink_sparkle.frag": "c4278688af76858e9d1a9c185e2f868b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/fonts/Handrush.ttf": "d715e9ec08ed830bb02ae9b27f42c9be",
"assets/assets/fonts/ScreenMatrix.ttf": "9005b95b68f11d5f5c368798294fd781",
"assets/assets/fonts/Parisienne-Regular.ttf": "ad4cd34327721459c11a67b4332c945e",
"assets/assets/fonts/Limelight-Regular.ttf": "6ccb9eb89a48d3f3b6e8d3d0e5e207aa",
"assets/assets/fonts/Aurum.ttf": "2fee2044aacf14ca22b56ea78b6a606e",
"assets/assets/fonts/Caveat-Medium.ttf": "a33c81836f5a681e2e1877b91885feb9",
"assets/assets/fonts/chinese/FZRuiZYJW.ttf": "f78bd8773036f0647acd6302d360b00a",
"assets/assets/fonts/Library.otf": "a2484d2ff004fc295c7822f4ed662c78",
"main.dart.js_28.part.js": "d57a1f7977bb7843e390fbe81ce7a3f2",
"main.dart.js_2.part.js": "792f5c9a14dc1247ed97c0577af17f9c",
"main.dart.js_17.part.js": "81b6bd8a39e12e37421ddf6184c50b2c",
"main.dart.js_21.part.js": "ef303c1fce732af19b7d4f377f511efb",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
