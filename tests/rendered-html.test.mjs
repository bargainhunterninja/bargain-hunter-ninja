import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

test("renders mobile navigation and local SEO metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1"\/>/i);
  assert.match(html, /<title>Sell Your Items for Cash in Fort Lauderdale \| Bargain Hunter Ninja<\/title>/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/bargainhunterninja\.com\/"\/>/i);
  assert.match(html, /type="application\/ld\+json"/i);
  assert.match(html, /"@type":"LocalBusiness"/i);
  assert.match(html, /class="menu-toggle"/i);
  assert.match(html, /aria-controls="main-navigation"/i);
  assert.match(html, /href="tel:\+19542900490"/i);
  assert.match(html, /bargain-ninja-favicon\.svg/i);
  assert.match(html, /A real buyer—not an automated trade-in/i);
  assert.match(html, /bargain-hunter-ninja-pickup-van\.webp/i);
  assert.match(html, /instagram\.com\/bargain_hunter_ninja/i);
  assert.match(html, /facebook\.com\/people\/Bargain-Hunter-Ninja\/61593412928611/i);
  assert.match(html, /ebay\.io\/m\/G2IDDO/i);
  assert.match(html, /Established online seller with an active eBay store/i);
  assert.doesNotMatch(html, /A real Fort Lauderdale buyer/i);
  assert.match(html, /google-analytics-[^"']+\.js/i);
  const assetsUrl = new URL("../dist/client/assets/", import.meta.url);
  const analyticsAsset = (await readdir(assetsUrl)).find((name) => name.startsWith("google-analytics-") && name.endsWith(".js"));
  assert.ok(analyticsAsset, "Google Analytics client bundle is present");
  assert.match(await readFile(new URL(analyticsAsset, assetsUrl), "utf8"), /G-SLCLPZEFBR/i);
});

test("renders unique category landing pages and lists them in the sitemap", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `categories-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const response = await worker.fetch(new Request("http://localhost/sell-video-games", { headers: { accept: "text/html" } }), env, ctx);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Sell Video Games for Cash in Fort Lauderdale \| Bargain Hunter Ninja<\/title>/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/bargainhunterninja\.com\/sell-video-games"\/>/i);
  assert.match(html, /Nintendo/i);
  assert.match(html, /PlayStation/i);
  assert.match(html, /value="Video Games"/i);
  assert.match(html, /"@type":"Service"/i);

  const sitemap = await worker.fetch(new Request("http://localhost/sitemap.xml"), env, ctx);
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  for (const slug of ["sell-video-games", "sell-cameras", "sell-vintage-toys", "sell-collectibles", "sell-vintage-clothing", "sell-sports-equipment", "sell-electronics"]) {
    assert.match(xml, new RegExp(`https://bargainhunterninja\\.com/${slug}`));
  }
});

test("renders the moving and downsizing landing page and lists it in the sitemap", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `moving-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };

  const response = await worker.fetch(new Request("http://localhost/moving", { headers: { accept: "text/html" } }), env, ctx);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Sell Belongings Before Moving in Fort Lauderdale \| Bargain Hunter Ninja<\/title>/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/bargainhunterninja\.com\/moving"\/>/i);
  assert.match(html, /Don(?:’|&#x27;)t move it/i);
  assert.match(html, /Moving or downsizing belongings/i);
  assert.match(html, /"@type":"FAQPage"/i);
  assert.match(html, /bargain-hunter-ninja-pickup-van\.webp/i);

  const sitemap = await worker.fetch(new Request("http://localhost/sitemap.xml"), env, ctx);
  assert.equal(sitemap.status, 200);
  assert.match(await sitemap.text(), /https:\/\/bargainhunterninja\.com\/moving/i);
});
