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
  |    |     |     \____ 💾 constants.js
  |    |     |     \____ 💾 create.js
  |    |     |     \____ 💾 detect.js
  |    |     |     \____ 💾 export.js
  |    |     |     \____ 💾 getToken.js
  |    |     |\___ 💾 create.js
  |    |     |\___ 💾 cssRouter.js
  |    |     |\___ 💾 export.js
  |    |     |\___ 💾 index.js
  |    |     |\___ 💾 jsRouter.js
  |    |     |\___ 💾 resouce.js
  |    |     |\___ 💾 view.js
  |    |\___ 💾 index.js
  |    |\___ 💾 package.lock
  |    \____ 💾 package.json
  |    |
  |    |\__ 📁(/.sh)
  |    |    |\___ 💾 build.sh
  |    |    |\___ 💾 clean.sh
  |    |    |\___ 💾 flag-available.sh
  |    |    |\___ 💾 flag-unaailable.sh
  |    |    |\___ 💾 rebuild.sh
  |    |\__ 📁(/.certsFiles)
  |    |    |\___ 💾 selfsigned.crt
  |    |    |\___ 💾 selfsigned.key
  |    |\_ 📁 (/pagesource)
  |    |   |\___ 📁 (/css)
  |    |   |     \____ 💾 main.css
  |    |   |     \____ 💾 (themes*).css
  |    |   |\___ 📁 (/js)
  |    |   |     \____ 💾 browser.js
  |    |   |     \____ 💾 engine_list.js
  |    |   |     \____ 💾 language_list.js
  |    |   |     \____ 💾 style_list.js
  |    |   |\___ 📁 (/resources)
  |    |   |     \___ 📁 (/fonts)
  |    |   |           |\___ 💾hack.ttf
  |    |   |     \___ 💾 (images*).png
  |    |   |\___ 💾 create.html
  |    |   |\___ 💾 export.html
  |    |   |\___ 💾 index.html
  |    |   |\___ 💾 testpage.html
  |    |   |\___ 💾 view.html
  |    \____ 💾 cdX.conf
📁 /etc/httpd
  |\___ 📁 (/sites-available)
  |     \___ 💾 cdX.conf # Apache `.conf` file
  \____ 📁 (/sites-enabled)
        \____ 🔗 cdX.lnk -> cdX.conf # Symlink to conf file
```
