/**handles:wc-settings**/
(()=>{"use strict";var o={d:(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},e={};o.r(e),o.d(e,{ADMIN_URL:()=>I,COUNTRIES:()=>R,CURRENCY:()=>D,CURRENT_USER_IS_ADMIN:()=>T,HOME_URL:()=>x,LOCALE:()=>O,ORDER_STATUSES:()=>L,PLACEHOLDER_IMG_SRC:()=>P,SITE_CURRENCY:()=>j,SITE_TITLE:()=>C,STORE_PAGES:()=>A,WC_ASSET_URL:()=>M,WC_VERSION:()=>N,WP_LOGIN_URL:()=>V,WP_VERSION:()=>W,allSettings:()=>n,defaultFields:()=>k,getAdminLink:()=>v,getCurrencyPrefix:()=>b,getCurrencySuffix:()=>E,getPaymentMethodData:()=>U,getSetting:()=>f,getSettingWithCoercion:()=>g,isWcVersion:()=>h,isWpVersion:()=>w}),(0,window.wp.hooks.addFilter)("woocommerce_admin_analytics_settings","woocommerce-blocks/exclude-draft-status-from-analytics",e=>{var t=e=>"customStatuses"===e.key?{...e,options:e.options.filter(e=>"checkout-draft"!==e.value)}:e,r=e.woocommerce_actionable_order_statuses.options.map(t),t=e.woocommerce_excluded_report_order_statuses.options.map(t);return{...e,woocommerce_actionable_order_statuses:{...e.woocommerce_actionable_order_statuses,options:r},woocommerce_excluded_report_order_statuses:{...e.woocommerce_excluded_report_order_statuses,options:t}}});const t={adminUrl:"",countries:[],currency:{code:"USD",precision:2,symbol:"$",symbolPosition:"left",decimalSeparator:".",priceFormat:"%1$s%2$s",thousandSeparator:","},currentUserId:0,currentUserIsAdmin:!1,homeUrl:"",locale:{siteLocale:"en_US",userLocale:"en_US",weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},orderStatuses:[],placeholderImgSrc:"",siteTitle:"",storePages:[],wcAssetUrl:"",wcVersion:"",wpLoginUrl:"",wpVersion:""},r="object"==typeof window.wcSettings?window.wcSettings:{},n={...t,...r};function s(e,t){const r=c(e),o=c(t),n=r.pop(),s=o.pop(),i=p(r,o);return 0!==i?i:n&&s?p(n.split("."),s.split(".")):n||s?n?-1:1:0}n.currency={...t.currency,...n.currency},n.locale={...t.locale,...n.locale};const a=(e,t,r)=>{S(r);var t=s(e,t);return m[r].includes(t)};s.validate=e=>"string"==typeof e&&/^[v\d]/.test(e)&&i.test(e),s.compare=a,s.sastisfies=(e,t)=>{var r=t.match(/^([<>=~^]+)/),o=r?r[1]:"=";if("^"!==o&&"~"!==o)return a(e,t,o);var[n,s,i]=c(e),[r,e,t]=c(t);return 0===u(n,r)&&("^"===o?0<=p([s,i],[e,t]):0===u(s,e)&&0<=u(i,t))};const i=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,c=e=>{if("string"!=typeof e)throw new TypeError("Invalid argument expected string");const t=e.match(i);if(!t)throw new Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},l=e=>"*"===e||"x"===e||"X"===e,d=e=>{var t=parseInt(e,10);return isNaN(t)?e:t},u=(e,t)=>{if(l(e)||l(t))return 0;var[e,t]=(e=d(e),t=d(t),typeof e!=typeof t?[String(e),String(t)]:[e,t]),e,t;return t<e?1:e<t?-1:0},p=(t,r)=>{for(let e=0;e<Math.max(t.length,r.length);e++){var o=u(t[e]||0,r[e]||0);if(0!==o)return o}return 0},m={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]},_=Object.keys(m),S=e=>{if("string"!=typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===_.indexOf(e))throw new Error(`Invalid operator, expected one of ${_.join("|")}`)},f=(e,t=!1,r=(e,t)=>void 0!==e?e:t)=>{let o=t;if(e in n)o=n[e];else if(e.includes("_data")){const r=e.replace("_data",""),n=f("paymentMethodData",{});o=r in n?n[r]:t}return r(o,t)},g=(e,t,r)=>{var e=e in n?n[e]:t;return r(e,t)?e:t},y=(e,t,r)=>{let o=f(e,"").replace(/-[a-zA-Z0-9]*[\-]*/,".0-rc.");return o=o.endsWith(".")?o.substring(0,o.length-1):o,s.compare(o,t,r)},w=(e,t="=")=>y("wpVersion",e,t),h=(e,t="=")=>y("wcVersion",e,t),v=e=>f("adminUrl")+e,U=(e,t=null)=>{var e;return null!==(e=f("paymentMethodData",{})[e])&&void 0!==e?e:t},b=(e,t)=>({left:e,left_space:e+" ",right:"",right_space:""})[t]||"",E=(e,t)=>({left:"",left_space:"",right:e,right_space:" "+e})[t]||"",I=n.adminUrl,R=n.countries,T=n.currentUserIsAdmin,x=n.homeUrl,O=n.locale,L=n.orderStatuses,P=n.placeholderImgSrc,C=n.siteTitle,A=n.storePages,M=n.wcAssetUrl,N=n.wcVersion,V=n.wpLoginUrl,W=n.wpVersion,D=n.currency,j={code:D.code,symbol:D.symbol,thousandSeparator:D.thousandSeparator,decimalSeparator:D.decimalSeparator,minorUnit:D.precision,prefix:b(D.symbol,D.symbolPosition),suffix:E(D.symbol,D.symbolPosition)},k=f("defaultFields");(this.wc=this.wc||{}).wcSettings=e})();