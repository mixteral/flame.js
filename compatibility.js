// In IE7, Range is not defined, which Metamorph handles with a fallback
if (typeof Range !== "undefined") {
  // In IE9, Range is defined but createContextualFragment is not, which Metamorph doesn't handle
  // From http://stackoverflow.com/questions/5375616/extjs4-ie9-object-doesnt-support-property-or-method-createcontextualfragme
  if (typeof Range.prototype.createContextualFragment === "undefined") {
      Range.prototype.createContextualFragment = function(html) {
          var doc = this.startContainer.ownerDocument;
          var container = doc.createElement("div");
          container.innerHTML = html;
          var frag = doc.createDocumentFragment(), n;
          while ( (n = container.firstChild) ) {
              frag.appendChild(n);
          }
          return frag;
      };
  }
}
