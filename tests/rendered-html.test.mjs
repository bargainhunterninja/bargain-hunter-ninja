import assert from "node:assert/strict";
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
});
