(self.webpackChunkcontacts=self.webpackChunkcontacts||[]).push([[529],{4351:(oe,N,y)=>{y.d(N,{b:()=>_});var v=y(5577),a=y(576);function _(P,R){return(0,a.m)(R)?(0,v.z)(P,R,1):(0,v.z)(P,1)}},529:(oe,N,y)=>{y.r(N),y.d(N,{HTTP_INTERCEPTORS:()=>j,HttpBackend:()=>S,HttpClient:()=>Z,HttpClientJsonpModule:()=>He,HttpClientModule:()=>we,HttpClientXsrfModule:()=>ne,HttpContext:()=>V,HttpContextToken:()=>ce,HttpErrorResponse:()=>O,HttpEventType:()=>d,HttpHandler:()=>I,HttpHeaderResponse:()=>D,HttpHeaders:()=>g,HttpParams:()=>E,HttpRequest:()=>T,HttpResponse:()=>C,HttpResponseBase:()=>k,HttpUrlEncodingCodec:()=>W,HttpXhrBackend:()=>F,HttpXsrfTokenExtractor:()=>z,JsonpClientBackend:()=>U,JsonpInterceptor:()=>te,XhrFactory:()=>Pe,\u0275HttpInterceptingHandler:()=>se});var v=y(1327),a=y(1423),_=y(9646),P=y(9751),R=y(4351),ie=y(9300),x=y(4004);class I{}class S{}class g{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(e=>{const r=e.indexOf(":");if(r>0){const n=e.slice(0,r),o=n.toLowerCase(),l=e.slice(r+1).trim();this.maybeSetNormalizedName(n,o),this.headers.has(o)?this.headers.get(o).push(l):this.headers.set(o,[l])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let r=t[e];const n=e.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(n,r),this.maybeSetNormalizedName(e,n))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof g?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new g;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof g?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,e);const n=("a"===t.op?this.headers.get(e):void 0)||[];n.push(...r),this.headers.set(e,n);break;case"d":const o=t.value;if(o){let l=this.headers.get(e);if(!l)return;l=l.filter(h=>-1===o.indexOf(h)),0===l.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class W{encodeKey(t){return $(t)}encodeValue(t){return $(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const le=/%(\d[a-f0-9])/gi,de={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function $(s){return encodeURIComponent(s).replace(le,(t,e)=>de[e]??t)}function M(s){return`${s}`}class E{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new W,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function ae(s,t){const e=new Map;return s.length>0&&s.replace(/^\?/,"").split("&").forEach(n=>{const o=n.indexOf("="),[l,h]=-1==o?[t.decodeKey(n),""]:[t.decodeKey(n.slice(0,o)),t.decodeValue(n.slice(o+1))],i=e.get(l)||[];i.push(h),e.set(l,i)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const r=t.fromObject[e],n=Array.isArray(r)?r.map(M):[M(r)];this.map.set(e,n)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(r=>{const n=t[r];Array.isArray(n)?n.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:n,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new E({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(M(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const n=r.indexOf(M(t.value));-1!==n&&r.splice(n,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class ce{constructor(t){this.defaultValue=t}}class V{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function G(s){return typeof ArrayBuffer<"u"&&s instanceof ArrayBuffer}function Y(s){return typeof Blob<"u"&&s instanceof Blob}function Q(s){return typeof FormData<"u"&&s instanceof FormData}class T{constructor(t,e,r,n){let o;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function he(s){switch(s){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||n?(this.body=void 0!==r?r:null,o=n):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params)),this.headers||(this.headers=new g),this.context||(this.context=new V),this.params){const l=this.params.toString();if(0===l.length)this.urlWithParams=e;else{const h=e.indexOf("?");this.urlWithParams=e+(-1===h?"?":h<e.length-1?"&":"")+l}}else this.params=new E,this.urlWithParams=e}serializeBody(){return null===this.body?null:G(this.body)||Y(this.body)||Q(this.body)||function ue(s){return typeof URLSearchParams<"u"&&s instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof E?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||Q(this.body)?null:Y(this.body)?this.body.type||null:G(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof E?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,r=t.url||this.url,n=t.responseType||this.responseType,o=void 0!==t.body?t.body:this.body,l=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,h=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let i=t.headers||this.headers,p=t.params||this.params;const w=t.context??this.context;return void 0!==t.setHeaders&&(i=Object.keys(t.setHeaders).reduce((b,m)=>b.set(m,t.setHeaders[m]),i)),t.setParams&&(p=Object.keys(t.setParams).reduce((b,m)=>b.set(m,t.setParams[m]),p)),new T(e,r,o,{params:p,headers:i,context:w,reportProgress:h,responseType:n,withCredentials:l})}}var d=(()=>((d=d||{})[d.Sent=0]="Sent",d[d.UploadProgress=1]="UploadProgress",d[d.ResponseHeader=2]="ResponseHeader",d[d.DownloadProgress=3]="DownloadProgress",d[d.Response=4]="Response",d[d.User=5]="User",d))();class k{constructor(t,e=200,r="OK"){this.headers=t.headers||new g,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class D extends k{constructor(t={}){super(t),this.type=d.ResponseHeader}clone(t={}){return new D({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class C extends k{constructor(t={}){super(t),this.type=d.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new C({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class O extends k{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function A(s,t){return{body:t,headers:s.headers,context:s.context,observe:s.observe,params:s.params,reportProgress:s.reportProgress,responseType:s.responseType,withCredentials:s.withCredentials}}let Z=(()=>{class s{constructor(e){this.handler=e}request(e,r,n={}){let o;if(e instanceof T)o=e;else{let i,p;i=n.headers instanceof g?n.headers:new g(n.headers),n.params&&(p=n.params instanceof E?n.params:new E({fromObject:n.params})),o=new T(e,r,void 0!==n.body?n.body:null,{headers:i,context:n.context,params:p,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}const l=(0,_.of)(o).pipe((0,R.b)(i=>this.handler.handle(i)));if(e instanceof T||"events"===n.observe)return l;const h=l.pipe((0,ie.h)(i=>i instanceof C));switch(n.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return h.pipe((0,x.U)(i=>{if(null!==i.body&&!(i.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return i.body}));case"blob":return h.pipe((0,x.U)(i=>{if(null!==i.body&&!(i.body instanceof Blob))throw new Error("Response is not a Blob.");return i.body}));case"text":return h.pipe((0,x.U)(i=>{if(null!==i.body&&"string"!=typeof i.body)throw new Error("Response is not a string.");return i.body}));default:return h.pipe((0,x.U)(i=>i.body))}case"response":return h;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:(new E).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,n={}){return this.request("PATCH",e,A(n,r))}post(e,r,n={}){return this.request("POST",e,A(n,r))}put(e,r,n={}){return this.request("PUT",e,A(n,r))}}return s.\u0275fac=function(e){return new(e||s)(a.\u0275\u0275inject(I))},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();class q{constructor(t,e){this.next=t,this.interceptor=e}handle(t){return this.interceptor.intercept(t,this.next)}}const j=new a.InjectionToken("HTTP_INTERCEPTORS");let L,pe=(()=>{class s{intercept(e,r){return r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),fe=0;class ee{}let U=(()=>{class s{constructor(e,r){this.callbackMap=e,this.document=r,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+fe++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");if(e.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new P.y(r=>{const n=this.nextCallback(),o=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${n}$1`),l=this.document.createElement("script");l.src=o;let h=null,i=!1;this.callbackMap[n]=m=>{delete this.callbackMap[n],h=m,i=!0};const p=()=>{l.parentNode&&l.parentNode.removeChild(l),delete this.callbackMap[n]};return l.addEventListener("load",m=>{this.resolvedPromise.then(()=>{p(),i?(r.next(new C({body:h,status:200,statusText:"OK",url:o})),r.complete()):r.error(new O({url:o,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),l.addEventListener("error",m=>{p(),r.error(new O({error:m,status:0,statusText:"JSONP Error",url:o}))}),this.document.body.appendChild(l),r.next({type:d.Sent}),()=>{i||this.removeListeners(l),p()}})}removeListeners(e){L||(L=this.document.implementation.createHTMLDocument()),L.adoptNode(e)}}return s.\u0275fac=function(e){return new(e||s)(a.\u0275\u0275inject(ee),a.\u0275\u0275inject(v.DOCUMENT))},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),te=(()=>{class s{constructor(e){this.jsonp=e}intercept(e,r){return"JSONP"===e.method?this.jsonp.handle(e):r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(a.\u0275\u0275inject(U))},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();const ve=/^\)\]\}',?\n/;let F=(()=>{class s{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new P.y(r=>{const n=this.xhrFactory.build();if(n.open(e.method,e.urlWithParams),e.withCredentials&&(n.withCredentials=!0),e.headers.forEach((c,u)=>n.setRequestHeader(c,u.join(","))),e.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const c=e.detectContentTypeHeader();null!==c&&n.setRequestHeader("Content-Type",c)}if(e.responseType){const c=e.responseType.toLowerCase();n.responseType="json"!==c?c:"text"}const o=e.serializeBody();let l=null;const h=()=>{if(null!==l)return l;const c=n.statusText||"OK",u=new g(n.getAllResponseHeaders()),H=function be(s){return"responseURL"in s&&s.responseURL?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):null}(n)||e.url;return l=new D({headers:u,status:n.status,statusText:c,url:H}),l},i=()=>{let{headers:c,status:u,statusText:H,url:re}=h(),f=null;204!==u&&(f=typeof n.response>"u"?n.responseText:n.response),0===u&&(u=f?200:0);let K=u>=200&&u<300;if("json"===e.responseType&&"string"==typeof f){const Oe=f;f=f.replace(ve,"");try{f=""!==f?JSON.parse(f):null}catch(Ne){f=Oe,K&&(K=!1,f={error:Ne,text:f})}}K?(r.next(new C({body:f,headers:c,status:u,statusText:H,url:re||void 0})),r.complete()):r.error(new O({error:f,headers:c,status:u,statusText:H,url:re||void 0}))},p=c=>{const{url:u}=h(),H=new O({error:c,status:n.status||0,statusText:n.statusText||"Unknown Error",url:u||void 0});r.error(H)};let w=!1;const b=c=>{w||(r.next(h()),w=!0);let u={type:d.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(u.total=c.total),"text"===e.responseType&&!!n.responseText&&(u.partialText=n.responseText),r.next(u)},m=c=>{let u={type:d.UploadProgress,loaded:c.loaded};c.lengthComputable&&(u.total=c.total),r.next(u)};return n.addEventListener("load",i),n.addEventListener("error",p),n.addEventListener("timeout",p),n.addEventListener("abort",p),e.reportProgress&&(n.addEventListener("progress",b),null!==o&&n.upload&&n.upload.addEventListener("progress",m)),n.send(o),r.next({type:d.Sent}),()=>{n.removeEventListener("error",p),n.removeEventListener("abort",p),n.removeEventListener("load",i),n.removeEventListener("timeout",p),e.reportProgress&&(n.removeEventListener("progress",b),null!==o&&n.upload&&n.upload.removeEventListener("progress",m)),n.readyState!==n.DONE&&n.abort()}})}}return s.\u0275fac=function(e){return new(e||s)(a.\u0275\u0275inject(v.XhrFactory))},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();const B=new a.InjectionToken("XSRF_COOKIE_NAME"),J=new a.InjectionToken("XSRF_HEADER_NAME");class z{}let Te=(()=>{class s{constructor(e,r,n){this.doc=e,this.platform=r,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,v.\u0275parseCookieValue)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return s.\u0275fac=function(e){return new(e||s)(a.\u0275\u0275inject(v.DOCUMENT),a.\u0275\u0275inject(a.PLATFORM_ID),a.\u0275\u0275inject(B))},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),X=(()=>{class s{constructor(e,r){this.tokenService=e,this.headerName=r}intercept(e,r){const n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return r.handle(e);const o=this.tokenService.getToken();return null!==o&&!e.headers.has(this.headerName)&&(e=e.clone({headers:e.headers.set(this.headerName,o)})),r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(a.\u0275\u0275inject(z),a.\u0275\u0275inject(J))},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),se=(()=>{class s{constructor(e,r){this.backend=e,this.injector=r,this.chain=null}handle(e){if(null===this.chain){const r=this.injector.get(j,[]);this.chain=r.reduceRight((n,o)=>new q(n,o),this.backend)}return this.chain.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(a.\u0275\u0275inject(S),a.\u0275\u0275inject(a.Injector))},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();function Ce(){return"object"==typeof window?window:{}}let ne=(()=>{class s{static disable(){return{ngModule:s,providers:[{provide:X,useClass:pe}]}}static withOptions(e={}){return{ngModule:s,providers:[e.cookieName?{provide:B,useValue:e.cookieName}:[],e.headerName?{provide:J,useValue:e.headerName}:[]]}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=a.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=a.\u0275\u0275defineInjector({providers:[X,{provide:j,useExisting:X,multi:!0},{provide:z,useClass:Te},{provide:B,useValue:"XSRF-TOKEN"},{provide:J,useValue:"X-XSRF-TOKEN"}]}),s})(),we=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=a.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=a.\u0275\u0275defineInjector({providers:[Z,{provide:I,useClass:se},F,{provide:S,useExisting:F}],imports:[ne.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),s})(),He=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=a.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=a.\u0275\u0275defineInjector({providers:[U,{provide:ee,useFactory:Ce},{provide:j,useClass:te,multi:!0}]}),s})();const Pe=v.XhrFactory}}]);