# Egg Island legal site

Static, dependency-free legal pages for Egg Island. The published site contains:

- `/` — privacy policy in Vietnamese and English;
- `/delete-data` — public account/data deletion instructions for Google Play;
- `/terms` — terms of use in Vietnamese and English.

English is shown by default. The language picker switches all page content and
navigation to Vietnamese and remembers the visitor's choice in local storage.

## Deploy to Vercel

Import the repository in Vercel and set **Root Directory** to `privacy-site`.
No framework preset, build command, output directory, or environment variable is
required. After deployment, map the final domain and verify all three URLs over
HTTPS before entering them in AdMob, Google Play Console, and App Store Connect.

After the domain is known, update the policy button in the game and replace any
dashboard URL with the final canonical HTTPS URL.
