define(["../core"],function(r){return r.parseXML=function(e){var n,t;if(!e||"string"!=typeof e)return null;try{t=new DOMParser,n=t.parseFromString(e,"text/xml")}catch(r){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+e),n},r.parseXML});