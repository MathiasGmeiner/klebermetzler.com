export const onRequest = defineMiddleware((context, next) => {
  const { request } = context;
  const { host } = request.headers;

  if (host?.slice(0, 4) !== "www." && !host?.includes("localhost")) {
    return new Response(null, {
      status: 301,
      headers: {
        Location: `https://www.${host}${request.url}`,
      },
    });
  }

  return next(context);
});
