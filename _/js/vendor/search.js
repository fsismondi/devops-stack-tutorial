window.antoraLunr=function(n){var i=document.getElementById("search-input"),u=document.createElement("div");function a(e,t,n){var r,s=[];for(r in e){var a,d=e[r];for(a in d){var i=d[a];i.position&&(i=i.position[0],"title"===a?s=function(t,e,n){var r,s=[],a=n[0],d=n[1],i=document.createElement("span");return i.classList.add("search-result-highlight"),r=t?e.titles.filter(function(e){return e.id===t})[0].text:e.title,i.innerText=r.substr(a,d),n=a+d,e=r.length-1,0===a&&n===e?s.push(i):0===a?(s.push(i),s.push(document.createTextNode(r.substr(d,e)))):n===e?(s.push(document.createTextNode(r.substr(0,a))),s.push(i)):(s.push(document.createTextNode(r.substr(0,a))),s.push(i),s.push(document.createTextNode(r.substr(n,e)))),s}(t,n,i):"text"===a&&(s=function(e,t){var n=[],r=t[0],s=t[1],a=e.text,d=document.createElement("span");d.classList.add("search-result-highlight"),d.innerText=a.substr(r,s);var i=r+s,e=(t=a.length-1)<i+15?t:i+15,s=r-15<0?0:r-15;return 0===r&&i===t?n.push(d):0===r?(n.push(d),n.push(document.createTextNode(a.substr(i,e)))):i===t?(n.push(document.createTextNode(a.substr(0,r))),n.push(d)):(n.push(document.createTextNode("..."+a.substr(s,r-s))),n.push(d),n.push(document.createTextNode(a.substr(i,e-i)+"..."))),n}(n,i)))}}return s}function d(e,r,s){e.forEach(function(e){var t=e.ref;t.includes("#")&&(n=t.substring(t.indexOf("#")+1),t=t.replace("#"+n,""));var t=r[t],n=a(e.matchData.metadata,n,t);s.appendChild(function(e,t,n){var r=document.createElement("div");r.classList.add("search-result-document-title"),r.innerText=e.title;var s=document.createElement("div");s.classList.add("search-result-document-hit");var a=document.createElement("a"),e=window.antora.basePath;a.href=e+t.ref,s.appendChild(a),n.forEach(function(e){a.appendChild(e)});n=document.createElement("div");return n.classList.add("search-result-item"),n.appendChild(r),n.appendChild(s),n.addEventListener("mousedown",function(e){e.preventDefault()}),n}(t,e,n))})}function c(e,t,n){for(;u.firstChild;)u.removeChild(u.firstChild);var r,s;""!==n.trim()&&(s=n,s=0<(e=(r=e).search(s)).length||0<(e=r.search(s+"*")).length?e:e=r.search("*"+s+"*"),(e=document.createElement("div")).classList.add("search-result-dataset"),u.appendChild(e),0<s.length?d(s,t,e):e.appendChild(function(e){var t=document.createElement("div");t.classList.add("search-result-item");var n=document.createElement("div");n.classList.add("search-result-document-hit");var r=document.createElement("strong");return r.innerText='No results found for query "'+e+'"',n.appendChild(r),t.appendChild(n),t}(n)))}return u.classList.add("search-result-dropdown-menu"),i.parentNode.appendChild(u),{init:function(e){var r,s,a,d,t=Object.assign({index:n.Index.load(e.index),store:e.store}),e=(r=function(){c(t.index,t.store,i.value)},s=100,function(){var e=this,t=arguments,n=a&&!d;clearTimeout(d),d=setTimeout(function(){d=null,a||r.apply(e,t)},s),n&&r.apply(e,t)});i.addEventListener("keydown",e),i.addEventListener("blur",function(e){for(;u.firstChild;)u.removeChild(u.firstChild)})}}}(window.lunr);