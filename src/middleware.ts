import { defineMiddleware } from 'astro:middleware';

const configuredBase = import.meta.env.BASE_URL.replace(/\/$/, '');

export const onRequest = defineMiddleware((context, next) => {
	if (context.url.pathname === '/' && configuredBase) {
		return context.redirect(`${configuredBase}/`, 307);
	}

	return next();
});
