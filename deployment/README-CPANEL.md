# cPanel deployment

1. In the project folder run `npm ci` and then `npm run build`.
2. Confirm the static export is in `out/` and test it locally with a static file server.
3. Use `dist/hexabeam-cpanel.zip`. Its contents are the contents of `out/`, not an enclosing `out` folder.
4. Back up the existing `public_html` site and configuration.
5. In cPanel File Manager open the target `public_html` directory, upload the ZIP and extract it there.
6. Confirm `index.html`, route folders, `_next/`, assets, `robots.txt` and `sitemap.xml` sit directly under the target web root.
7. Enable HTTPS and force the canonical host after confirming the real domain.
8. Test the homepage, a service page, contact form behaviour, mobile navigation, assets, trailing-slash routes and 404 handling.

Before launch, replace all contact placeholders and set `NEXT_PUBLIC_ENQUIRY_ENDPOINT` to an approved HTTPS email/CRM form endpoint. Consultation forms POST JSON containing the submitted fields, page URL and submission timestamp to that endpoint. The endpoint must allow requests from the production domain.
