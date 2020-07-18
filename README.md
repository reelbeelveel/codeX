# codeX
## The Simple Code Snipper
### Code Snippet Generator
*README Modified: Mon July 13, 2020 @ 09:52:44 EDT*

---

## File Structure:

```
$projectFrontendRoot = TBD
$projectBackendRoot = TBD
  |    |\___ 📁 (/nodemodules)
  |    |     \____ 📁 (...)
  |    |\___ 📁(/routes)
  |    |     |\___ 📁 (/api)
  |    |           \____ 💾 snippet.js
  |    |\___ 💾 index.js
  |    |\___ 💾 package.lock
  |    \____ 💾 package.json
  |    |
       |\__ 📁(/.sh)
       |    |\___ 💾 build.sh
       |    |\___ 💾 clean.sh
       |    |\___ 💾 flag-available.sh
       |    |\___ 💾 flag-unaailable.sh
       |    \____ 💾 rebuild.sh
       |\_ 📁 (/pagesource)
       |   |\___ 📁 (/css)
       |   |     \____ 💾 main.css
       |   |\___ 📁 (/html)
       |   |     \____ 💾 index.html
       |   \____ 📁 (/js)
       |         \____ 💾 index.js
       \____ 💾 cdX.conf
📁 /etc/httpd
  |\___ 📁 (/sites-available)
  |     \___ 💾 cdX.conf # Apache `.conf` file
  \____ 📁 (/sites-enabled)
        \____ 🔗 cdX.lnk -> cdX.conf # Symlink to conf file
```
