'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_24.part.js": "6af2a72d27d6bed9faa3fc81bbdf193a",
"version.json": "9094aacdae789dccd67fa32109ff1a18",
"main.dart.js_12.part.js": "85d4c8beab4d16d15793e03c9ba75c2c",
"main.dart.js_6.part.js": "c71b60e3180ccf73217b29ce30f20bcd",
"index.html": "bd5f2af7cc3ddc1ea04f7016cd639897",
"/": "bd5f2af7cc3ddc1ea04f7016cd639897",
"main.dart.js_13.part.js": "c45eb03991e28c2992259c7496015ddd",
"main.dart.js_25.part.js": "2007fd0b9cc5bf5062fc7fb6dd0d6b03",
"main.dart.js_4.part.js": "fa4cc736edd40275e37ea80d71d8dec5",
"main.dart.js": "acb3da9a4de239ce56159a92b07b067d",
"main.dart.js_18.part.js": "c58b3aa1368d5829a062d3db709f5b71",
"main.dart.js_27.part.js": "349451a069e94c7159522d609991e8dc",
"main.dart.js_19.part.js": "3c67fa8f376ffd40f811912b0e851621",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"main.dart.js_10.part.js": "8e2cff07f2e60ba7baafce6f87d2772b",
"main.dart.js_5.part.js": "4d4acf72a1a1575c70162dc37d6edeb6",
"main.dart.js_15.part.js": "09ef5b085e855c07d63d440d61f68f34",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_23.part.js": "094211a0e9191e581778aabd62c53808",
"colors.js": "fe96ea85f0143d2a4d90f16bb5f41aa6",
"main.dart.js_22.part.js": "467a8873f065857de4154396ad4b3cd8",
"main.dart.js_8.part.js": "d8fff7b9e9533b29a05335d65017c3d8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d3d4aab626052a9adcd1acd9c47e9cea",
"main.dart.js_14.part.js": "1e631b11378183f738340c06dda30a92",
"main.dart.js_1.part.js": "bde8d353b634936364fa7e09167a795d",
"spinkit.css": "affadc55f87692da2f26262b7d43d97e",
"main.dart.js_29.part.js": "0dd3735b6ac2fa69f963718a1089e425",
"main.dart.js_3.part.js": "b010cd50467a159eadb01728b5032351",
"main.dart.js_16.part.js": "79081966d0566209eb18e9272d5bb4c7",
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
"main.dart.js_28.part.js": "4c3626bf3cecd31bba255c5f120d4f9b",
"main.dart.js_2.part.js": "ae2911759805efac68f44d31f2fe10d2",
"main.dart.js_17.part.js": "1b58629a8a8ea39d801293f0f2cf563a",
"main.dart.js_21.part.js": "ef2d36cfe10c32c18d69d39b4597c59c",
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
