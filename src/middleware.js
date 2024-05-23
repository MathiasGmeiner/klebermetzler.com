import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
  const hostname = context.url.hostname;

  if (hostname === "klebermetzler.com") {
    return new Response(null, {
      status: 301,
      headers: {
        Location: `https://www.${hostname}${context.url.pathname}`,
      },
    });
  }

  return next(context);
});
