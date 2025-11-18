# React Progress Bar Component for Webflow  
A fully customizable React‑powered Progress Bar component that works seamlessly inside Webflow.  
This README explains everything—from setup to usage—so anyone can integrate the component without prior React knowledge.

---

## 🚀 Overview  
This project allows you to embed a **React Progress Bar Component** directly inside Webflow using a bundled script.  
No React app needed. No build tools. Just one script + HTML attributes.

---

## 📂 Project Structure  
```
progressbar-webflow/
 ├── package.json
 ├── build.js
 ├── index.js
 ├── ProgressBar.jsx
 └── progressbar.bundle.js   ← final file used in Webflow
```

---

## 📦 Files Explained  

### **ProgressBar.jsx**  
Contains the actual React component with customizations like:  
- Normal or scroll progress  
- Colors  
- Labels  
- Custom height  
- Styles  

### **index.js**  
Automatically mounts the React component in Webflow using attributes like:  
```
data-react="progressbar"
data-value="75"
data-color="#ff0000"
data-label="true"
```

### **build.js**  
Bundles everything using esbuild into `progressbar.bundle.js`.

### **progressbar.bundle.js**  
Final file you host online and reference inside Webflow.

---

## 🛠 Install Dependencies  
Run inside project root:

```
npm install
```

---

## 🔨 Build the Bundle  
```
npm run build
```

This generates:

```
progressbar.bundle.js
```

---

## 🌐 Hosting the Bundle  
Host `progressbar.bundle.js` on any CORS-friendly CDN like:

- **GitHub Pages**
- Cloudflare Pages
- Netlify
- Vercel
- S3 bucket with CORS enabled

Ensure MIME type = `application/javascript`

Example (GitHub Pages URL):

```
https://your-username.github.io/your-repo/progressbar.bundle.js
```

---

## 🧩 Add to Webflow  

### **Step 1: Add bundle script (before </body>)**
Go to:

**Webflow → Page Settings → Before </body>**

Add:

```html
<script type="module" src="YOUR_BUNDLE_URL"></script>
```

Example:

```html
<script type="module" src="https://your-username.github.io/Webflow_Component/progressbar.bundle.js"></script>
```

---

### **Step 2: Add Progress Bar Embed**

#### Normal Progress Bar
```html
<div
  data-react="progressbar"
  data-type="normal"
  data-value="70"
  data-color="#6200ee"
  data-label="true"
  style="width:100%; height:10px;"
></div>
```

#### Scroll Progress Bar
```html
<div
  data-react="progressbar"
  data-type="scroll"
  data-color="#ff4757"
  data-label="false"
></div>
```

---

## 🎛 Editable Attributes  
| Attribute       | Description |
|-----------------|-------------|
| `data-type`     | `normal` or `scroll` |
| `data-value`    | % value (normal mode only) |
| `data-color`    | Bar color |
| `data-label`    | `true` / `false` |
| `style`         | Add width / height inline |

---

## ✔ Example Full Implementation  
```html
<!-- Add Component -->
<div
  data-react="progressbar"
  data-type="normal"
  data-value="85"
  data-color="#ff9800"
  data-label="true"
  style="width:100%; height:12px;"
></div>

<!-- Script -->
<script type="module" src="https://yourdomain.com/progressbar.bundle.js"></script>
```

---

## ❗ Common Errors & Fixes  

### ❌ MIME type error  
Fix: Ensure server sends  
```
Content-Type: application/javascript
```

### ❌ CORS blocked  
Fix: Enable  
```
Access-Control-Allow-Origin: *
```

### ❌ Script not loading  
Fix: Use full HTTPS URL.

---

## 🧑‍💻 Contact  
For improvements or issues, raise a GitHub issue or contact the maintainer.

---

## 🎉 Done!  
Your custom React Progress Bar is now fully integrated with Webflow.
