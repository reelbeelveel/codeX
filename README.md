# codeX
## Simple Code Exporter
*README Modified: Mon July 13, 2020 @ 09:52:44 EDT*

---

## File Structure:

```
  |\___ 📁 (/nodemodules)
  |     \____ 📁 (...)
  |\___ 📁(/routes)
  |     \___ 📁 (/api)
  |           |\--- 💾 create.js
  |           \____ 💾 view.js
  |\___ 💾 index.js
  |\___ 💾 package.lock
  |\___ 💾 package.json
  |
  |\__ 📁(/.sh)
  |    |\___ 💾 build.sh
  |    |\___ 💾 clean.sh
  |    |\___ 💾 flag-available.sh
  |    |\___ 💾 flag-unaailable.sh
  |    \____ 💾 rebuild.sh
  |\_ 📁 (/pagesource)
  |   |\___ 📁 (/css)
  |   |     \____ 💾 main.css
  |   |\___ 💾 index.html
  |   \____ 📁 (/js)
  |         \____ 💾 index.js
  \____ 💾 cdX.conf

📁 /etc/httpd
  |\___ 📁 (/sites-available)
  |     \___ 💾 cdX.conf # Apache `.conf` file
  \____ 📁 (/sites-enabled)
        \____ 🔗 cdX.lnk -> cdX.conf # Symlink to conf file
```
