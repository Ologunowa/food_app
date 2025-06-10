'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8c9f69024348cccfaa6ce3626d24ab72",
"version.json": "f76726ce96debb066b538f46dd84b163",
"index.html": "92620859712321ef0fee8eb128ff97e4",
"/": "92620859712321ef0fee8eb128ff97e4",
"main.dart.js": "12b423fb0987df1458a28a601bc2fc87",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c422be5fde9489c5f519fc7c2528ffe2",
"assets/AssetManifest.json": "ae55556e8ad455de40276325edc861bb",
"assets/NOTICES": "c0a3f06feebe48ba81406a1cf8cca8b9",
"assets/FontManifest.json": "d0975c94afeb32ec4155750ce2543f5e",
"assets/AssetManifest.bin.json": "6bd9c42267be4e6e6bc92f1043b2a1e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/rupay.png": "a10fbeeae8d386ee3623e6160133b8a8",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/mir.png": "c87d1479c2784a534751238167b254b5",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/images/drinks/Lemon_drink.png": "5d3ad2f0c7feff0ced1fb56eb0efcc62",
"assets/lib/images/drinks/cappucino_tea.png": "31bcebb889c0c0db54a3edace1c803ca",
"assets/lib/images/drinks/drink_merinda.png": "f204b4853488a0273915f766784bdcbe",
"assets/lib/images/drinks/smiroff_ice.png": "c90949ef14d7c50e3efebfd23a7a86a0",
"assets/lib/images/drinks/drink_2.png": "b5c1749261a3f773f50e941f4a909dff",
"assets/lib/images/sides/mac_side.png": "c01026a7d5985d9fa174a88e26917e67",
"assets/lib/images/sides/garlicbread_side.png": "c5c37dfb23907b2c8f7251c3d29fa392",
"assets/lib/images/sides/onions_side.png": "70adbe4ef0abe58d5e7424cf7a76eca5",
"assets/lib/images/sides/loadedfries_side.png": "31bc4f2bfd708c617911c53e93f73e00",
"assets/lib/images/sides/sweet_side.png": "ecd2079f1ec0136953c79228efb3cd17",
"assets/lib/images/burgers/Cheese_burger.png": "46b72e7ebe95d9f11eca2ae09802f7d8",
"assets/lib/images/burgers/chicken_burger.png": "0c8320eae563d8feb2ebe799613a35ae",
"assets/lib/images/burgers/classicveg_burger.png": "80c15b4041b8aaeef9f5060809706a96",
"assets/lib/images/burgers/bbq_burger.png": "1f4ed218fa71facc11cb459f9a70c877",
"assets/lib/images/burgers/burgerblue_burger.png": "1d645ee285ba63470048d77e60c9b44f",
"assets/lib/images/salads/ceasar_salad.png": "21a3d237c50d60af24b7e268d6861d27",
"assets/lib/images/salads/chicken_salad.png": "31924e52ef611c3f151acbe2419ab4a5",
"assets/lib/images/salads/southwest_salad.png": "03346b643ff7598eafa0842ff1d85ba5",
"assets/lib/images/salads/guinea_salad.png": "f5ee11d0cdf7f3d684b0742e3e13b82f",
"assets/lib/images/salads/greek_salad.png": "8a6847879f58b0f5430fbdde52028a26",
"assets/lib/images/desserts/raspberry_dessert.png": "54f5cef8f7b329ceeedc131a1cfd9163",
"assets/lib/images/desserts/berry_dessert.png": "8cdf0b3e166abad7c3d357ab47f8a5df",
"assets/lib/images/desserts/vanilla_dessert.png": "7bec7cbe775c183265b2fd526812f8a5",
"assets/lib/images/desserts/apple_dessert.png": "58882d1d628fcd1f0942a8c50ea8b8f6",
"assets/lib/images/desserts/redvelvet_dessert.png": "ca46332f26c97a5c15505636030a83e7",
"assets/AssetManifest.bin": "b8ac7239ec1c5110c7dc7e9f01b65fae",
"assets/fonts/MaterialIcons-Regular.otf": "f0dbbbcd09251ee0571a0b0354bb41c4",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
