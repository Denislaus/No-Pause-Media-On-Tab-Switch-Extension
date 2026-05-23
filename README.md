Open brave://extensions
Enable Developer Mode
Load unpacked

Currently it the extension is only active on Instagram & Reddit for better resource utilization. If you want to use it for other websites add them in the manifest.json file or simply paste the following to toggle on the extension for all websites:

{
  "manifest_version": 3,
  "name": "Always Active Media",
  "version": "1.0",
  "description": "Stops websites from pausing media when you switch tabs.",
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"],
      "run_at": "document_start",
      "world": "MAIN"
    }
  ]
}