'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c6f30da9600ac1d3de6ab0cf5287b47c",
"assets/AssetManifest.bin.json": "be29af5395ec5aa49143c1b77c5b4d86",
"assets/AssetManifest.json": "b0903a05d21bb516c4afc3132e9047ca",
"assets/assets/fonts/pokedex.ttf": "c7604e0f16bcd4f52672de617ff5ecf8",
"assets/assets/fonts/pokemon-font.ttf": "0ea0b7f5c6bb9fc676d847aa04c9ac9f",
"assets/assets/genders/30px-Female_icon_HOME.png": "8296eb8c4930aecbff14e3ca2f6d50c9",
"assets/assets/genders/30px-Male_icon_HOME.png": "41b9fab8784decd12c3661b89bd5bdca",
"assets/assets/machines/45px-Bag_TM_Bug_SV_Sprite.png": "b10cb9d870ddf39b4d48f6f9537e8851",
"assets/assets/machines/45px-Bag_TM_Dark_SV_Sprite.png": "a01e6525edb550339ac8197789dc4e45",
"assets/assets/machines/45px-Bag_TM_Dragon_SV_Sprite.png": "d714533658e137192af1bd8509442881",
"assets/assets/machines/45px-Bag_TM_Electric_SV_Sprite.png": "bc747c299610df71b02cea466ce09a32",
"assets/assets/machines/45px-Bag_TM_Fairy_SV_Sprite.png": "74be3189788d33d17fee513bd119dd06",
"assets/assets/machines/45px-Bag_TM_Fighting_SV_Sprite.png": "4e0c11e114e6ad3c047b5063eda5421f",
"assets/assets/machines/45px-Bag_TM_Fire_SV_Sprite.png": "e1a44fe43cc8aced8efee89c7335ea17",
"assets/assets/machines/45px-Bag_TM_Flying_SV_Sprite.png": "74a419687c601d7f97c6e96ebb6036c9",
"assets/assets/machines/45px-Bag_TM_Ghost_SV_Sprite.png": "e5af2c19c0c8c1a8ebbb7d82131befd6",
"assets/assets/machines/45px-Bag_TM_Grass_SV_Sprite.png": "709cddd686fa5139f4eae621ff582b42",
"assets/assets/machines/45px-Bag_TM_Ground_SV_Sprite.png": "d9c6ef1c26c90a9ca4e15caf8ce35e7c",
"assets/assets/machines/45px-Bag_TM_Ice_SV_Sprite.png": "362baabd33132126752e0df9743ac614",
"assets/assets/machines/45px-Bag_TM_Normal_SV_Sprite.png": "b3e262298280a7b33602015b0ee22f9b",
"assets/assets/machines/45px-Bag_TM_Poison_SV_Sprite.png": "b12b093e035321a55937759058fcaf23",
"assets/assets/machines/45px-Bag_TM_Psychic_SV_Sprite.png": "555ff66a76992827ab7504a149b8c862",
"assets/assets/machines/45px-Bag_TM_Rock_SV_Sprite.png": "2051e8cedd9073a0bcbc4be9eec142df",
"assets/assets/machines/45px-Bag_TM_Steel_SV_Sprite.png": "9d8753e2a5d5ef36e1e5581f5704735b",
"assets/assets/machines/45px-Bag_TM_Water_SV_Sprite.png": "031751b7df5bf4b867a82e20b74f5da0",
"assets/assets/shapes/48px-Body01.png": "a6e4f6a2f218dcfeb8f29d1687c52e3b",
"assets/assets/shapes/48px-Body02.png": "9c0d45940c49d97b3656ee343cabf6c3",
"assets/assets/shapes/48px-Body03.png": "75bfaa562d3ab5578bf0c9ad049cabcd",
"assets/assets/shapes/48px-Body04.png": "c11f0a34d66d28b70e54c6e4c98839d8",
"assets/assets/shapes/48px-Body05.png": "c70a491a7796f645ecdd8f2971cbf979",
"assets/assets/shapes/48px-Body06.png": "0be9bfef87603daa623b036e757b919e",
"assets/assets/shapes/48px-Body07.png": "2647238096e100acb739334b2765ff63",
"assets/assets/shapes/48px-Body08.png": "c903b1652795bf774330f2602661afaf",
"assets/assets/shapes/48px-Body09.png": "9ca7e6185c9d3e0eca3a1f139a9e57c4",
"assets/assets/shapes/48px-Body10.png": "6b4a488f65315d8558d1f118e5cb9cb4",
"assets/assets/shapes/48px-Body11.png": "15f00a528771f3c89deb13135f764fc8",
"assets/assets/shapes/48px-Body12.png": "882e26d9212587a288360f72d8a548ba",
"assets/assets/shapes/48px-Body13.png": "9f0ff77191c915968c5db20c778b1e20",
"assets/assets/shapes/48px-Body14.png": "60d32d18288d70e32ecea0b7c1494d55",
"assets/assets/times/60px-Day_Icon_SV.png": "92a1e5ae3c8612d279f798df3a24c4be",
"assets/assets/times/60px-Dusk_Icon_SV.png": "983fea12c8621d11481e3b16d0c96e76",
"assets/assets/times/60px-Full_Moon_Icon_SV.png": "d8d3ab7ea9abc38dbea794859f4495ee",
"assets/assets/times/60px-Night_Icon_SV.png": "be8c2b771434e4486811d4a5ac48d4f7",
"assets/assets/types/Bug_icon_HOME3.png": "e188703eae1ae466a8ce493960389a58",
"assets/assets/types/Dark_icon_HOME3.png": "8c476567e03316c5f9263dc1a19bc401",
"assets/assets/types/Dragon_icon_HOME3.png": "7e6f212dfd636c8db6d1761b65bc7f39",
"assets/assets/types/Electric_icon_HOME3.png": "d7f9efb219de85a6645ffb666f001608",
"assets/assets/types/Fairy_icon_HOME3.png": "052b4b9487f349ee341dda10d8c91242",
"assets/assets/types/Fighting_icon_HOME3.png": "0dcd7675faa0f3e2a91addac7d01db3c",
"assets/assets/types/Fire_icon_HOME3.png": "6a745d8107d043622ba83a17728f09fc",
"assets/assets/types/Flying_icon_HOME3.png": "029ccd0cbf2b57a4514029bf48fd9baa",
"assets/assets/types/Ghost_icon_HOME3.png": "6f206268cb32164d4466750b0bdb05aa",
"assets/assets/types/Grass_icon_HOME3.png": "1189556aeb4c985d2103c4316acb73da",
"assets/assets/types/Ground_icon_HOME3.png": "5728780a93e5b7000308f47085c8ffea",
"assets/assets/types/Ice_icon_HOME3.png": "29c33f061b73cf77292be983fca1b541",
"assets/assets/types/Normal_icon_HOME3.png": "f88c071f99962cb9fff047def3d709ef",
"assets/assets/types/Poison_icon_HOME3.png": "9110e28064c519d422c948b1c2fbacc6",
"assets/assets/types/Psychic_icon_HOME3.png": "2657393729fdd8a1abdbc7d08db55885",
"assets/assets/types/Rock_icon_HOME3.png": "824b4d7e5064bfe025ffe993be498222",
"assets/assets/types/Steel_icon_HOME3.png": "ec597e376ffbd2977130aa5a53c04a23",
"assets/assets/types/Stellar_icon_SV.png": "813c94a8ce9ee4e942c809f7d503f7a1",
"assets/assets/types/Water_icon_HOME3.png": "c5d91caabb012daa1aa368c1d4651bd6",
"assets/FontManifest.json": "3e981bfd1e03fdccc20c8fd935dc737b",
"assets/fonts/MaterialIcons-Regular.otf": "f3c94f6e616ff6d354fada7851be66e9",
"assets/NOTICES": "1ac9819039f4a9d2d8f5af547b6a2afd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"drift_worker.js": "2d492e0eb7f630d7a43049b4a59b0927",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "171b208a1def388a9026f2946ef41c2f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "77c38e100bdbbf010dd6b14180b4cfc4",
"/": "77c38e100bdbbf010dd6b14180b4cfc4",
"main.dart.js": "06b4c0641a22747fcee21d670ff9d67f",
"manifest.json": "c642ac228453f1c74f9f977d0b183543",
"sqlite3.wasm": "b9e5b5ebefa4e5ce6397a4eb8b2faa19",
"version.json": "0860c149387a12adb67531442b5eb75e"};
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
