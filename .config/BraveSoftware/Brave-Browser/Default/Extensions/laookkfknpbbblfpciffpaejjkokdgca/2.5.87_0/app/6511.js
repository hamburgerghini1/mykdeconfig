(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[6511],{77065:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var a=i(20144),s=i(50931);const n=a.Z.extend({name:"ViewData",unreactive:()=>({$_handlerKeyCodes:{keyup:{onEnter:13,onEsc:27}},collection:null,views:null}),data:()=>({activeViewId:"",activeItem:null,adding:!1,confirmationOverlayProps:null,forcedAppBodyHeight:null,$_activeBodyComponentInstance:null}),computed:{activeItemId(){return this.activeItem&&this.activeItem.id||""},activeView(){return this.views[this.activeViewId]},editProps(){return this.activeItem&&this.activeItem.editProps},confirmationOverlayActive(){return!!this.confirmationOverlayProps},loaded(){return!this.collection||this.collection.data.loaded}},watch:{loaded:{handler:"$_fallbackToDefaultView",immediate:!0}},created(){this.$on("container:created",this.$_fallbackToDefaultView)},methods:{async showView(e,{doNotBlock:t,afterLeave:i}={}){"default"===e?e=this.$_getViewByProperty("defaultView"):"add"===e&&(this.createItem(),e=this.$_getViewByProperty("addView"));const a=this.activeViewId;var s,n,o,r;a&&(t?(null==this||null===(s=this.$_activeBodyComponentInstance)||void 0===s||null===(n=s.beforeLeave)||void 0===n||n.call(s,!0),null===(o=this.views[a])||void 0===o||null===(r=o.beforeLeave)||void 0===r||r.call(o,!0)):(await this.awaitCloseConfirmationIfNeeded(),this.$_removeGlobalEventListeners(a),this.setActiveBodyComponentInstance(null))),this.$emit("viewClosing:"+this.activeViewId),this.$_addGlobalEventListeners(e),this.activeViewId=e,a&&i&&this.$once("resolveShowView:"+a,i)},closeApp(){this.awaitCloseConfirmationIfNeeded().then((()=>this.$emit("close")))},resetView(){this.activeViewId="",this.clearConfirmationOverlay(),this.clearItem(),this.forcedAppBodyHeight={},this.$_activeBodyComponentInstance=null},setItem(e){if("string"==typeof e)this.activeItem=this.collection.data.items[e];else{if("object"!=typeof e)throw"setItem must be called with an item model or item id";this.activeItem=e}},createItem(){this.activeItem=new this.collection.Model,this.activeItem.copyProperties(),this.adding=!0},clearItem(){this.activeItem&&this.activeItem.revertChanges(),this.adding=!1,this.activeItem=null},showDeleteConf(){this.$emit("showDeleteConf")},showConfirmationOverlay(e){this.confirmationOverlayProps=e},clearConfirmationOverlay(){this.confirmationOverlayProps=null},setForcedAppBodyHeight(e){this.forcedAppBodyHeight=e},resetForcedAppBodyHeight(){this.forcedAppBodyHeight=null},awaitCloseConfirmationIfNeeded(){var e,t,i;return this.activeViewId?Promise.all([null==this||null===(e=this.$_activeBodyComponentInstance)||void 0===e?void 0:e.beforeLeave(),null===(t=this.views[this.activeViewId])||void 0===t||null===(i=t.beforeLeave)||void 0===i?void 0:i.call(t)]).then((e=>{if(e.some((e=>!1===e)))return new Promise((function(){}))})):Promise.resolve()},setActiveBodyComponentInstance(e){this.$_activeBodyComponentInstance=e},$_getViewByProperty(e){const t=Object.keys(this.views).find((t=>this.views[t][e]));if(t)return t;throw`No view with property: "${e}" was found. Please define a "${e}" property if you wish to access a view this way`},$_addGlobalEventListeners(e){const t=this.views[e];Object.entries(this.$_handlerKeyCodes).forEach((([i,a])=>{Object.entries(a).forEach((([a,n])=>{const o=t[a];o&&s.Z.registerEventListener(`${e}:${a}`,i,n,(()=>{"string"==typeof o?this.showView(o):"function"==typeof o&&o()}))}))}))},$_removeGlobalEventListeners(e){const t=this.views[e];Object.entries(this.$_handlerKeyCodes).forEach((([i,a])=>{Object.entries(a).forEach((([a,n])=>{t[a]&&s.Z.removeEventListener(`${e}:${a}`,i,n)}))}))},$_fallbackToDefaultView(){this.loaded&&!this.activeViewId&&this.showView("default")}}})},5111:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});let a={};const s={bind:function(e,t){let i,s;e.dataset.justBoundClickOutsideHandler=!0,setTimeout((()=>{e.dataset.justBoundClickOutsideHandler=!1}),100);const n=e=>{s=!1,(e=>e&&e.clientX>window.innerWidth)(e)?s=!0:i=e.target},o=a=>{s||(t.modifiers.bubble||!e.contains(i)&&!e.contains(a.target)&&e!==i&&e!==a.target&&"true"!==e.dataset.justBoundClickOutsideHandler)&&t.value(a)};e.dataset.clickOutsideMouseupHandlerId=Math.random().toString(36).substring(7),e.dataset.clickOutsideMousedownHandlerId=Math.random().toString(36).substring(7),a[e.dataset.clickOutsideMouseupHandlerId]=o,a[e.dataset.clickOutsideMousedownHandlerId]=n,document.addEventListener("mouseup",o),document.addEventListener("mousedown",n)},unbind:function(e){document.removeEventListener("mouseup",a[e.dataset.clickOutsideMouseupHandlerId]),document.removeEventListener("mousedown",a[e.dataset.clickOutsideMousedownHandlerId]),delete a[e.dataset.clickOutsideMouseupHandlerId],delete a[e.dataset.clickOutsideMousedownHandlerId],delete e.dataset.clickOutsideMouseupHandlerId,delete e.dataset.clickOutsideMousedownHandlerId,delete e.dataset.justBoundClickOutsideHandler}}},19195:(e,t,i)=>{"use strict";i.d(t,{FZ:()=>n,Ox:()=>d,TF:()=>r,cl:()=>o,mX:()=>c});var a=i(22005),s=i(23145);const n={mixins:[i(44614).Z],data:()=>({collection:new a.F}),unreactive:()=>({type:"",Model:null,dataService:null,names:{}}),computed:{emptyMessage(){return`No ${this.nameLCP} yet`},data(){return this.collection.loaded||this.refresh(),this.collection},visible(){return s.Fl[this.visibleSetting]}},created(){this.dataService||console.warn('No dataService property detected, please connect a dataService property in "unreactive"'),this.$e.$on(this.type+":refresh",this.refresh),this.$e.$on("resetCollections",this.resetCollection)},destroyed(){this.$e.$off(this.type+":refresh",this.refresh),this.$e.$off("resetCollections",this.resetCollection)},methods:{refresh({queryParams:e,mode:t}={}){return new Promise(((i,a)=>{this.dataService.get({queryParams:e,mode:t,success:e=>{this.addItemsToCollection(e),i()},failure:e=>{console.error(e),a(e)}})}))},addItemsToCollection(e,t=this.collection){const i=t.items,a=e.map((e=>e.id));return Object.keys(i).forEach((e=>{a.includes(e)||this.$delete(i,e)})),e.forEach((e=>{const t=e.id;let a;t in i?a=i[t]:(a=new this.Model,this.$set(i,t,a)),a.updateData(e)})),this.$set(t,"loaded",!0),e},add(e){const t=e.id=m.utils.uuidv4();this.$set(this.data.items,t,e);const i=this.getAddRequestBody(e);return this.dataService.add(t,i).catch((e=>{throw this.$delete(this.data.items,t),e}))},update(e,t){const i=this.getUpdateRequestBody(e,t);return this.dataService.update(e.id,i)},delete(e){return this.dataService.delete(e.id).then((()=>{this.$delete(this.data.items,e.id)}))},archive(e){return this.$set(e,"archived",!0),this.dataService.update(e.id,{archived:!0}).catch((t=>{throw this.$set(e,"archived",!1),t}))},unarchive(e){return this.$set(e,"archived",!1),this.dataService.update(e.id,{archived:!1}).catch((t=>{throw this.$set(e,"archived",!0),t}))},getAddRequestBody(e){const t={};return e.props.forEach((i=>{void 0!==e.editProps[i]&&(t[i]=e.editProps[i])})),t},getUpdateRequestBody(e){const t={};return e.getChanges().forEach((i=>t[i]=e.editProps[i])),t},resetCollection(){this.collection=new a.F}}},o={data:()=>({listPinnedValues:{}}),computed:{pinnedItems(){return this.data.loaded?Object.values(this.data.items).filter((e=>e.pinned&&!e.archived)):[]}},methods:{considerPinnedInList(e){return this.listPinnedValues[e.id]??e.pinned},sortPinned(e,t,i){const a=this.considerPinnedInList(e),s=this.considerPinnedInList(t);return a&&!s?-1:!a&&s?1:(i="function"==typeof i?i(e,t):i)||(e.id>t.id?-1:e.id<t.id?1:0)},togglePinned(e){const t=this.listPinnedValues[e.id];e.id in this.listPinnedValues||(this.listPinnedValues[e.id]=e.pinned),e.pinned=!e.pinned,this.dataService.update(e.id,{pinned:e.pinned}).catch((()=>{e.pinned=!e.pinned,this.listPinnedValues[e.id]=t}))},clearRecentlyChangedItems(){this.listPinnedValues={}}}},r={created(){this.assignRandomItem()},watch:{"randomItem.pinned"(e){e&&this.assignRandomItem()},"randomItem.archived"(e){e&&this.assignRandomItem()},randomItem(){this.randomItem||this.assignRandomItem()},"dashItems.length"(e){e||this.assignRandomItem()},"itemsArray.length"(e,t){!t&&e&&this.assignRandomItem()}},computed:{itemsArray(){return Object.values(this.data.items)},showRandom(){return s.ax["showRandomMetric-"+this.nameCS]},randomItem(){return Object.values(this.data.items).find((e=>e.random))},dashItems(){const e=!this.randomItem||!this.showRandom&&this.pinnedItems.length?[...this.pinnedItems]:[this.randomItem,...this.pinnedItems];return this.dashSort&&e.sort(this.dashSort),e}},methods:{getRandomItem(e){const t=Object.values(e).filter((e=>!e.pinned&&!e.archived));return t[m.utils.getRandomIntBetween(0,t.length-1)]},assignRandomItem(){const e=this.$watch("data.loaded",(t=>{if(t){this.clearRandomItem();const t=this.getRandomItem(this.data.items);t&&(t.random=!0),this.$nextTick((()=>e()))}}),{immediate:!0})},clearRandomItem(){this.randomItem&&(this.randomItem.random=!1)}}},d={computed:{selectedItem(){return Object.values(this.data.items).find((e=>e.selected))}},methods:{clearSelectedItem(){this.selectedItem&&(this.selectedItem.selected=!1)}}},c={data:()=>({mockCollection:new a.F}),computed:{data(){return this.mockCollection.loaded?this.mockCollection:(this.collection.loaded||this.refresh(),this.collection)}},methods:{addMockData(e){this.addItemsToCollection(e,this.mockCollection),this.mockCollection.loaded=!0},clearMockData(){this.mockCollection=new a.F}}}},71999:(e,t,i)=>{"use strict";i.d(t,{X:()=>s});const a=m.workers.serviceWorker.bus,s={mixins:[{methods:{_mergeQueryParams(...e){return Object.assign.apply(null,[{},this.queryParams.all||{}].concat(e))},_buildQueryString(...e){const t=new URLSearchParams(this._mergeQueryParams.apply(null,e)).toString();return t?"?"+t:""}}}],unreactive:()=>({type:"",path:"",mode:"sync",queryParams:{get:{},update:{}}}),created(){this.type||console.error("dataSyncServiceMixin Error: You must declare a type in unreactive")},methods:{get({path:e=this.path||this.type,success:t,failure:i,queryParams:s,mode:n=this.mode}={}){return e+=this._buildQueryString(this.queryParams.get,s),a.sendRecurringCrossTabMessage({msgId:this.type+":refreshed",handler:"get",args:[this.type,{path:e,env:this._getEnv(),mode:n}],success:t,failure:i})},add(e,t,{path:i=this.path||this.type,mode:s=this.mode}={}){return a.sendMessage({handler:"create",args:[this.type,e,t,{path:i,mode:s,env:this._getEnv()}]})},update(e,t,{path:i=this.path||this.type,mode:s=this.mode,queryParams:n}={}){return a.sendMessage({handler:"update",args:[this.type,e,t,{path:i,mode:s,env:this._getEnv(),queryString:this._buildQueryString(this.queryParams.update,n)}]})},delete(e,{path:t=this.path||this.type,mode:i=this.mode}={}){return a.sendMessage({handler:"delete",args:[this.type,e,{path:t,mode:i,env:this._getEnv()}]})},_getEnv:()=>({token:localStorage.getItem("token"),clientUuid:localStorage.getItem("client_uuid"),apiUrl:m.globals.urlRootApi,version:m.globals.version})}}},92664:(e,t,i)=>{"use strict";i.d(t,{H:()=>s,Z:()=>a});const a={data:()=>({id:"",archived:null,selected:!1,editProps:{}}),methods:{updateData(e){this.props.forEach((t=>this[t]=e[t])),e.id&&(this.id=e.id)},revertChanges(){this.editProps={}},getChanges(){let e=[];return this.editProps&&this.props.forEach((t=>{Array.isArray(this[t])||Array.isArray(this.editProps[t])?m.utils.arraysAreEqual(this[t],this.editProps[t])||e.push(t):this[t]!==this.editProps[t]&&e.push(t)})),e},commitChanges(){this.beforeCommitChanges&&this.beforeCommitChanges(),this.props.forEach((e=>{void 0!==this.editProps[e]&&(this[e]=this.editProps[e])})),this.revertChanges()},copyProperties(){for(let e of this.props)Array.isArray(this[e])?this.$set(this.editProps,e,[...this[e]]):"object"==typeof this[e]&&null!==this[e]?this.$set(this.editProps,e,{...this[e]}):this.$set(this.editProps,e,this[e])}}},s={maxCharPerLine:14,computed:{brokenName(){return m.utils.lineBreakString(m.utils.removeTags(this.name),this.$options.maxCharPerLine)}}}},44614:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var a=i(94326);const s={unreactive:()=>({names:{}}),computed:{nameLCP(){return this.names.lowerCasePlural||this.type.replace(/([A-Z])/g," $1").trim().toLowerCase()},nameLCS(){return this.names.lowerCaseSingular||(0,a.C5)(this.nameLCP)},nameCP(){return this.names.capitalizedPlural||m.utils.capitalizeWords(this.nameLCP)},nameCS(){return this.names.capitalizedSingular||m.utils.capitalizeWords(this.nameLCS)}}}},22005:(e,t,i)=>{"use strict";i.d(t,{F:()=>s});var a=i(48713);function s(){return new a.Z.observable({loaded:!1,items:{}})}},50931:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});const a=new(i(20144).Z.extend({name:"GlobalKeyEventManager",data:()=>({events:{}}),methods:{registerEventListener(e,t,i,a){this.events.hasOwnProperty(t)?this.events[t].hasOwnProperty(i)||(this.events[t][i]=[]):(this.events[t]={},this.events[t][i]=[],this._addListener(t)),this.events[t][i].push({id:e,handler:a})},removeEventListener(e,t,i){if(!this.events.hasOwnProperty(t))return void(m.utils.isDev()&&console.warn(`No event listeners registered with event type: ${t} to remove`));if(!this.events[t].hasOwnProperty(i))return void(m.utils.isDev()&&console.warn(`No event listeners registered with keyCode: ${i} to remove`));let a=this.events[t][i].findIndex((t=>t.id===e));-1!==a?(this.events[t][i].splice(a,1),this._cleanupIfEmpty(t,i)):m.utils.isDev()&&console.warn(`No event listeners registered with id: ${e} to remove`)},_cleanupIfEmpty(e,t){this.events[e][t].length||delete this.events[e][t],Object.keys(this.events[e]).length||(delete this.events[e],this._removeListener(e))},_addListener(e){window.addEventListener(e,this._eventRouter)},_removeListener(e){window.removeEventListener(e,this._eventRouter)},_eventRouter(e){if(!this.events.hasOwnProperty(e.type))return;if(!this.events[e.type].hasOwnProperty(e.keyCode))return;let t=this.events[e.type][e.keyCode];t[t.length-1].handler(e)}}}))},93297:(e,t,i)=>{(e.exports=i(23645)(!1)).push([e.id,"\n.confirmation[data-v-380143c6] { padding: var(--app-padding); position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: 3; display: flex; flex-direction: column; justify-content: space-between; text-align: center;\n}\n.messages[data-v-380143c6] { display: flex; flex-direction: column; justify-content: center; flex: 1 0 auto;\n}\nh3[data-v-380143c6] { margin: 0 0.5em; font-size: 1.0625rem; line-height: 1.4; word-break: break-word;\n}\n.subheading[data-v-380143c6] { opacity: 0.8; display: none;\n} /* Review if we want this */\n.button-row[data-v-380143c6] { display: flex;\n}\n.button-confirm[data-v-380143c6] { margin-right: 0.62em; flex: 1 0 auto;\n}\n.button-neutral[data-v-380143c6] { position: relative; flex: 1 0 auto; background: none !important;\n}\n.button-neutral[data-v-380143c6]:after { position: absolute; top: 0; right: 0; bottom: 0; left: 0; opacity: 0.15; background: var(--color-text); border-radius: 100px; content: '';\n}\n.button-neutral[data-v-380143c6]:hover:after { opacity: 0.25;\n}\n.overlay[data-v-380143c6] { z-index: -1; opacity: 0.93; background: var(--color-bg); border-radius: var(--border-radius);\n}\n",""])},15724:(e,t,i)=>{(e.exports=i(23645)(!1)).push([e.id,"\n.header[data-v-53b21e9c], .header-right[data-v-53b21e9c] { display: flex;\n}\n.header[data-v-53b21e9c] { justify-content: space-between;\n}\n.header-left[data-v-53b21e9c] {\n}\n.title-wrapper[data-v-53b21e9c] { display: flex; align-items: center;\n}\n.app-icon[data-v-53b21e9c] { margin-right: 7px; opacity: 0.8;\n}\n.title[data-v-53b21e9c] { opacity: 0.8; white-space: nowrap;\n}\n.header-right[data-v-53b21e9c] { height: 100%; justify-content: flex-end;\n}\n.header-right[data-v-53b21e9c] .go-back { order: -1;\n}\n.header-right[data-v-53b21e9c] .icon-back { left: 0; transform: rotate(180deg);\n}\n.center-title .header-left[data-v-53b21e9c] { justify-content: flex-start;\n}\n.centering-placeholder[data-v-53b21e9c], .center-title .header-right[data-v-53b21e9c], .center-title .header-left[data-v-53b21e9c] { flex: 0 1 50%;\n}\n.center-title .header-right .buttons[data-v-53b21e9c] { justify-content: flex-end;\n}\n",""])},48344:(e,t,i)=>{(e.exports=i(23645)(!1)).push([e.id,"\n.buttons[data-v-57e867a2] { display: flex;\n}\n.icon-back[data-v-57e867a2] { height: 12px; position: relative; left: -1px;\n}\n.add[data-v-57e867a2] { margin-right: 4px;\n}\n[data-v-57e867a2] .dropdown-wrapper { height: 100%;\n}\n[data-v-57e867a2] .dropdown { margin-top: -4px;\n}\n[data-v-57e867a2] .icon-ellipsis { height: 15px;\n}\nbody[data-v-57e867a2]:not(.touch) .more-toggle { margin-right: -5px;\n}\n",""])},54346:(e,t,i)=>{(e.exports=i(23645)(!1)).push([e.id,"\n.dropdown-wrapper[data-v-407a49db] { position: relative;\n}\n\t/* .dropdown-wrapper:last-child { margin-right: 0; } <-- thinking it will always be the last-child with vue's div salad */\n.icon-wrapper[data-v-407a49db] { margin-right: 0;\n}\n\t /* width is a filthy hack. fix later*/\n.dropdown[data-v-407a49db] { position: absolute; z-index: 4; display: block; right: 0; width: max-content; max-width: calc(var(--width) - 50px); cursor: pointer;\n}\n\t\t/* .dropdown-list-item { padding: 0; } */\n\t\t/* .dropdown-list-item > * { width: 100%; padding: 10px 15px; display: flex; align-items: center; } */\n.dropdown-list-icon[data-v-407a49db] { width: 15px; margin-right: 8px;\n}\n.icon-archive[data-v-407a49db], .icon-settings[data-v-407a49db] { stroke: var(--color-icon);\n}\n",""])},32649:(e,t,i)=>{(e.exports=i(23645)(!1)).push([e.id,"\n.view-container[data-v-d653fa6c] { width: 100%;\n}\n.app.popup .view-container[data-v-d653fa6c] { width: var(--width); margin: calc(var(--app-padding) * -1); overflow: hidden;\n}\n.app-overflow[data-v-d653fa6c] { display: flex; flex-direction: column; align-items: stretch; position: relative; /* pos:rel necessary for getRelativeOffsetTop in InAppDropdown */ overflow: hidden; border-radius: var(--border-radius);\n}\n.app-header[data-v-d653fa6c] { height: var(--header-height); padding: 0 var(--app-padding); display: flex; justify-content: space-between; font-weight: 500;\n}\n.app-body[data-v-d653fa6c] { max-height: calc(100vh - (var(--top) + var(--bottom-clearance) + var(--header-height))); overflow-y: auto; overflow-x: hidden; position: relative;\n}\n.conf-active .app-body[data-v-d653fa6c] { overflow: visible;\n}\n.smooth-height-slide-enter-active .app-body[data-v-d653fa6c], .smooth-height-slide-leave-active .app-body[data-v-d653fa6c] { overflow-y: hidden;\n}\n.view[data-v-d653fa6c] { padding: var(--app-padding); padding-top: 0; padding-right: calc(var(--app-padding) - (var(--width) - 100%));\n}\n[data-v-d653fa6c] .loading-wrapper { height: 200px; display: flex; justify-content: center; align-items: center;\n}\n[data-v-d653fa6c] .loading-icon { height: 20px; width: 20px;\n}\n.smooth-height-slide-left-enter-active[data-v-d653fa6c],\n\t.smooth-height-slide-left-leave-active[data-v-d653fa6c],\n\t.smooth-height-slide-right-enter-active[data-v-d653fa6c],\n\t.smooth-height-slide-right-leave-active[data-v-d653fa6c] { transition: transform 300ms ease;\n}\n.smooth-height-slide-left-leave-active[data-v-d653fa6c], .smooth-height-slide-right-leave-active[data-v-d653fa6c] { position: absolute; top: 0; right: 0; left: 0;\n}\n.smooth-height-slide-left-leave-to[data-v-d653fa6c], .smooth-height-slide-right-enter[data-v-d653fa6c] { transform: translateX(-100%);\n}\n.smooth-height-slide-left-enter[data-v-d653fa6c], .smooth-height-slide-right-leave-to[data-v-d653fa6c] { transform: translateX(100%);\n}\n.smooth-height-slide-left-enter-active .app-body[data-v-d653fa6c],\n\t\t.smooth-height-slide-left-leave-active .app-body[data-v-d653fa6c],\n\t\t.smooth-height-slide-right-enter-active .app-body[data-v-d653fa6c],\n\t\t.smooth-height-slide-right-leave-active .app-body[data-v-d653fa6c] { overflow: hidden;\n} /* hides scrollbar when transitioning between views */\n\n",""])},83753:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgPjxwYXRoIGQ9Ik0xMiAwQzUuMzczIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDB6bTAgMTkuNjZjLS45MzggMC0xLjU4LS43MjMtMS41OC0xLjY2IDAtLjk2NC42NjktMS42NiAxLjU4LTEuNjYuOTYzIDAgMS41OC42OTYgMS41OCAxLjY2IDAgLjkzOC0uNjE3IDEuNjYtMS41OCAxLjY2em0uNjIyLTYuMzM5Yy0uMjM5LjgxNS0uOTkyLjgyOS0xLjI0MyAwLS4yODktLjk1Ni0xLjMxNi00LjU4NS0xLjMxNi02Ljk0MiAwLTMuMTEgMy44OTEtMy4xMjUgMy44OTEgMC0uMDAxIDIuMzcxLTEuMDgzIDYuMDk0LTEuMzMyIDYuOTQyeiIvPjwvc3ZnPgo="},26409:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODkuMDQgNDkyIj48cGF0aCBkPSJNMTk4LjYxLDI0Ni4xLDM4Mi42Niw2MmEyNywyNywwLDAsMCwwLTM4LjA2TDM2Ni41NCw3Ljg2YTI3LDI3LDAsMCwwLTM4LjA2LDBMMTA5LjMzLDIyN2EyNy4xNSwyNy4xNSwwLDAsMCwwLDM4LjE5TDMyOC4yNyw0ODQuMTRhMjcsMjcsMCwwLDAsMzguMDcsMEwzODIuNDYsNDY4YTI3LDI3LDAsMCwwLDAtMzguMDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxLjQ4KSIgLz48L3N2Zz4K"},98217:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCI+PC9jaXJjbGU+PC9zdmc+Cg=="},52545:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTIuOTgyIDIxMi45ODIiPjxwYXRoIGQ9Ik0xMzEuODA0IDEwNi40OTFsNzUuOTM2LTc1LjkzNmM2Ljk5LTYuOTkgNi45OS0xOC4zMjMgMC0yNS4zMTItNi45OS02Ljk5LTE4LjMyMi02Ljk5LTI1LjMxMiAwTDEwNi40OTEgODEuMTggMzAuNTU0IDUuMjQyYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyIDAtNi45ODkgNi45OS02Ljk4OSAxOC4zMjMgMCAyNS4zMTJsNzUuOTM3IDc1LjkzNi03NS45MzcgNzUuOTM3Yy02Ljk4OSA2Ljk5LTYuOTg5IDE4LjMyMyAwIDI1LjMxMiA2Ljk5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDBsNzUuOTM3LTc1LjkzNyA3NS45MzcgNzUuOTM3YzYuOTg5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDAgNi45OS02Ljk5IDYuOTktMTguMzIyIDAtMjUuMzEybC03NS45MzYtNzUuOTM2eiIgLz48L3N2Zz4K"},12411:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNDAuMjc0IDM0MC4yNzQiPjxwYXRoIGQ9Ik0yOTMuNjI5IDEyNy44MDZsLTUuNzk1LTEzLjczOWMxOS44NDYtNDQuODU2IDE4LjUzLTQ2LjE4OSAxNC42NzYtNTAuMDhsLTI1LjM1My0yNC43Ny0yLjUxNi0yLjEyaC0yLjkzN2MtMS41NDkgMC02LjE3MyAwLTQ0LjcxMiAxNy40OGwtMTQuMTg0LTUuNzE5Yy0xOC4zMzItNDUuNDQ0LTIwLjIxMi00NS40NDQtMjUuNTgtNDUuNDQ0aC0zNS43NjVjLTUuMzYyIDAtNy40NDYtLjAwNi0yNC40NDggNDUuNjA2bC0xNC4xMjMgNS43MzRDODYuODQ4IDQzLjc1NyA3MS41NzQgMzguMTkgNjcuNDUyIDM4LjE5bC0zLjM4MS4xMDUtMjcuMjcgMjYuNzM3Yy00LjEzOCAzLjg5MS01LjU4MiA1LjI2MyAxNS40MDIgNDkuNDI1bC01Ljc3NCAxMy42OTFDMCAxNDYuMDk3IDAgMTQ3LjgzOCAwIDE1My4zM3YzNS4wNjhjMCA1LjUwMSAwIDcuNDQgNDYuNTg1IDI0LjEyN2w1Ljc3MyAxMy42NjdjLTE5Ljg0MyA0NC44MzItMTguNTEgNDYuMTc4LTE0LjY1NSA1MC4wMzJsMjUuMzUzIDI0LjggMi41MjIgMi4xNjhoMi45NTFjMS41MjUgMCA2LjA5MiAwIDQ0LjY4NS0xNy41MTZsMTQuMTU5IDUuNzU4YzE4LjMzNSA0NS40MzggMjAuMjE4IDQ1LjQyNyAyNS41OTggNDUuNDI3aDM1Ljc3MWM1LjQ3IDAgNy40MSAwIDI0LjQ2My00NS41ODlsMTQuMTk1LTUuNzRjMjYuMDE0IDExIDQxLjI1MyAxNi41ODUgNDUuMzQ5IDE2LjU4NWwzLjQwNC0uMDk2IDI3LjQ3OS0yNi45MDFjMy45MDktMy45NDUgNS4yNzgtNS4zMDktMTUuNTg5LTQ5LjI4OGw1LjczNC0xMy43MDJjNDYuNDk2LTE3Ljk2NyA0Ni40OTYtMTkuODUzIDQ2LjQ5Ni0yNS4yMjFWMTUxLjg4Yy0uMDA1LTUuNTE5LS4wMDUtNy40NDYtNDYuNjQ0LTI0LjA3NHpNMTcwLjEyOCAyMjguNDc0Yy0zMi43OTggMC01OS41MDQtMjYuMTg3LTU5LjUwNC01OC4zNjQgMC0zMi4xNTMgMjYuNzA3LTU4LjMxNSA1OS41MDQtNTguMzE1IDMyLjc4IDAgNTkuNDMgMjYuMTY4IDU5LjQzIDU4LjMxNS0uMDA2IDMyLjE3Ny0yNi42NTYgNTguMzY0LTU5LjQzIDU4LjM2NHoiLz48L3N2Zz4K"},86372:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzIyMiI+PHBhdGggZD0iTTE2LjYgOC42TDEyIDEzLjIgNy40IDguNiA2IDEwbDYgNiA2LTZ6Ii8+PC9zdmc+"},20264:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTggMjJjLTQuNDExIDAtOCAzLjU4OS04IDhzMy41ODkgOCA4IDggOC0zLjU4OSA4LTgtMy41ODktOC04LTh6TTUyIDIyYy00LjQxMSAwLTggMy41ODktOCA4czMuNTg5IDggOCA4IDgtMy41ODkgOC04LTMuNTg5LTgtOC04ek0zMCAyMmMtNC40MTEgMC04IDMuNTg5LTggOHMzLjU4OSA4IDggOCA4LTMuNTg5IDgtOC0zLjU4OS04LTgtOHoiPjwvcGF0aD48L3N2Zz4K"},69768:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNDguMzMzIDM0OC4zMzQiPjxwYXRoIGQ9Ik0zMzYuNTU5IDY4LjYxMUwyMzEuMDE2IDE3NC4xNjVsMTA1LjU0MyAxMDUuNTQ5YzE1LjY5OSAxNS43MDUgMTUuNjk5IDQxLjE0NSAwIDU2Ljg1LTcuODQ0IDcuODQ0LTE4LjEyOCAxMS43NjktMjguNDA3IDExLjc2OS0xMC4yOTYgMC0yMC41ODEtMy45MTktMjguNDE5LTExLjc2OUwxNzQuMTY3IDIzMS4wMDMgNjguNjA5IDMzNi41NjNjLTcuODQzIDcuODQ0LTE4LjEyOCAxMS43NjktMjguNDE2IDExLjc2OS0xMC4yODUgMC0yMC41NjMtMy45MTktMjguNDEzLTExLjc2OS0xNS42OTktMTUuNjk4LTE1LjY5OS00MS4xMzkgMC01Ni44NWwxMDUuNTQtMTA1LjU0OUwxMS43NzQgNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUgMC01Ni44NDQgMTUuNjk2LTE1LjY4NyA0MS4xMjctMTUuNjg3IDU2LjgyOSAwbDEwNS41NjMgMTA1LjU1NEwyNzkuNzIxIDExLjc2N2MxNS43MDUtMTUuNjg3IDQxLjEzOS0xNS42ODcgNTYuODMyIDAgMTUuNzA1IDE1LjY5OSAxNS43MDUgNDEuMTQ1LjAwNiA1Ni44NDR6IiAvPjwvc3ZnPgo="},56314:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNDQ4IiBmaWxsPSIjMDAwIj48Y2lyY2xlIGN4PSIxOTIiIGN5PSIxMDYuNjY3IiByPSIxMDYuNjY3Ii8+PHBhdGggZD0iTTI4Mi42NjcsMjg4SDEwMS4zMzNBMTAxLjQ1MiwxMDEuNDUyLDAsMCwwLDAsMzg5LjMzM1Y0NjRhMTYuMDA2LDE2LjAwNiwwLDAsMCwxNiwxNkgzNjhhMTYuMDA2LDE2LjAwNiwwLDAsMCwxNi0xNlYzODkuMzMzQTEwMS40NTIsMTAxLjQ1MiwwLDAsMCwyODIuNjY3LDI4OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMyKSIvPjxwYXRoIGQ9Ik01MDYuOSwyMTIuMjY3bC03NC42NjYtNjkuMzM0YTE2LDE2LDAsMCwwLTEwLjg4LTQuMjQ1Yy0xMC41ODIsMC0xNi4wMjIsOS0xNi4wMjIsMTUuOTc5djQ4SDMyMGEyMS4zMzMsMjEuMzMzLDAsMCwwLDAsNDIuNjY2aDg1LjMzM3Y0OGExNi4wMTgsMTYuMDE4LDAsMCwwLDI2LjksMTEuNzM0TDUwNi45LDIzNS43MzNhMTYuMDQ5LDE2LjA0OSwwLDAsMCwwLTIzLjQ2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMyKSIvPjwvc3ZnPgo="},59626:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODEuNzEgNDgxLjcyIj48cGF0aCBkPSJNMTA2LjEyLDEwLjc2LDEwLjc3LDEwNi4xM2EzNi43MiwzNi43MiwwLDAsMCw0NS45Miw1Ni44bDEwOS42LDEyNy40MWExMDAuMTEsMTAwLjExLDAsMCwwLDIwLDExMy4zMiwzNS4yNywzNS4yNywwLDAsMCw0OS44NiwwbDU3LjMzLTU3LjMxTDQ4MS43MSw0ODEuNzIsMzQ2LjM1LDI5My41Mmw1Ny4zMS01Ny4zMWEzNS4zLDM1LjMsMCwwLDAsMC00OS44OCwxMDAuMTYsMTAwLjE2LDAsMCwwLTExMy4yOS0yMEwxNjIuOTMsNTYuNjdhMzYuNzIsMzYuNzIsMCwwLDAtNTYuODEtNDUuOTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiAvPjwvc3ZnPgo="},16754:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDQ4IDQ0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNDA4IDE4NGgtMTM2Yy00LjQxNzk2OSAwLTgtMy41ODIwMzEtOC04di0xMzZjMC0yMi4wODk4NDQtMTcuOTEwMTU2LTQwLTQwLTQwcy00MCAxNy45MTAxNTYtNDAgNDB2MTM2YzAgNC40MTc5NjktMy41ODIwMzEgOC04IDhoLTEzNmMtMjIuMDg5ODQ0IDAtNDAgMTcuOTEwMTU2LTQwIDQwczE3LjkxMDE1NiA0MCA0MCA0MGgxMzZjNC40MTc5NjkgMCA4IDMuNTgyMDMxIDggOHYxMzZjMCAyMi4wODk4NDQgMTcuOTEwMTU2IDQwIDQwIDQwczQwLTE3LjkxMDE1NiA0MC00MHYtMTM2YzAtNC40MTc5NjkgMy41ODIwMzEtOCA4LThoMTM2YzIyLjA4OTg0NCAwIDQwLTE3LjkxMDE1NiA0MC00MHMtMTcuOTEwMTU2LTQwLTQwLTQwem0wIDAiPjwvcGF0aD48L3N2Zz4="},68639:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyNCI+PHBhdGggZD0iTTE5LjE1IDcuNUgyLjgzOGEuNS41IDAgMCAwLS41LjVsMS44MSAxNGEyIDIgMCAwIDAgMiAyaDkuOTU0YTIgMiAwIDAgMCAyLTJMMTkuNjUgOGEuNS41IDAgMCAwLS41LS41em0tOS45IDEzYS43NS43NSAwIDAgMS0xLjUgMHYtOWEuNzUuNzUgMCAwIDEgMS41IDB2OXptNSAwYS43NS43NSAwIDAgMS0xLjUgMHYtOWEuNzUuNzUgMCAwIDEgMS41IDB2OXpNMjAuNDMgNGgtNC4xOGEuMjUuMjUgMCAwIDEtLjI1LS4yNVYyLjVBMi41IDIuNSAwIDAgMCAxMy41IDBoLTVBMi41IDIuNSAwIDAgMCA2IDIuNXYxLjI1YS4yNS4yNSAwIDAgMS0uMjUuMjVoLTQuNWExIDEgMCAwIDAgMCAyaDE5LjE4YTEgMSAwIDAgMCAwLTJ6TTggMy43NVYyLjVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgLjUuNXYxLjI1YS4yNS4yNSAwIDAgMS0uMjUuMjVoLTUuNUEuMjUuMjUgMCAwIDEgOCAzLjc1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+Cg=="},27353:(e,t,i)=>{"use strict";i.d(t,{Z:()=>C});var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("smooth-reflow",{staticClass:"view-container",attrs:{transition:e.transitionType,disabled:e.disableSmoothReflow,duration:300},on:{beforeEnter:e.beforeViewEnter,afterEnter:e.afterViewEnter,afterLeave:e.afterViewLeave}},[e.loaded?i("div",{key:e.activeViewId,ref:"view",staticClass:"app-overflow",attrs:{"data-test":"view","data-test-view-id":e.activeViewId}},[e._t("header",[e.activeView&&e.activeView.header?i(e.activeView.header.component||"Header",e._b({tag:"component",staticClass:"app-header",attrs:{"view-manager":e.viewManager,"data-test":"header"}},"component",e.activeView.header,!1)):e._e()]),e._v(" "),i("div",{staticClass:"app-body",style:{height:e.appBodyHeight}},[e._t("body",[e.activeView&&e.activeView.header?i(e.activeView.body.component,e._b({tag:"component",staticClass:"view",attrs:{"view-manager":e.viewManager}},"component",e.activeView.body,!1)):e._e()])],2),e._v(" "),i("transition",{attrs:{duration:200,name:"fade"}},[e.viewManager.confirmationOverlayActive?i("confirmation-overlay",e._b({attrs:{"view-manager":e.viewManager}},"confirmation-overlay",e.viewManager.confirmationOverlayProps,!1)):e._e()],1)],2):i("div",{key:"1",ref:"loading",staticClass:"loading-wrapper"},[i("i",{staticClass:"loading-icon"})])])};a._withStripped=!0;var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"confirmation",class:e.confClass,attrs:{"data-test":"conf"}},[i("div",{staticClass:"messages"},[i("h3",[e._v(e._s(e.heading))]),e._v(" "),i("div",{staticClass:"subheading"},[e._v(e._s(e.subheading))])]),e._v(" "),i("div",{staticClass:"button-row"},[i("button",{staticClass:"button button-confirm",attrs:{"data-test":"conf-yes"},on:{click:e.proceed}},[e._v("Yes")]),e._v(" "),i("button",{staticClass:"button button-neutral",attrs:{"data-test":"conf-no"},on:{click:e.dismiss}},[e._v("No")])]),e._v(" "),i("div",{staticClass:"overlay"})])};s._withStripped=!0;var n=i(50931);const o={name:"ConfirmationOverlay",props:{viewManager:{type:Object,required:!0},heading:{type:String,default:""},subheading:{type:String,default:""},confClass:{type:String,default:""},onProceed:{type:Function,required:!0},onDismiss:{type:Function,default:()=>({})}},created(){this.viewId=this.viewManager.activeViewId,n.Z.registerEventListener(`${this.viewId}:confProceed`,"keyup",13,this.proceed),n.Z.registerEventListener(`${this.viewId}:confDismiss`,"keyup",27,this.dismiss)},destroyed(){n.Z.removeEventListener(`${this.viewId}:confProceed`,"keyup",13),n.Z.removeEventListener(`${this.viewId}:confDismiss`,"keyup",27)},methods:{proceed(){this.onProceed(),this.dismiss()},dismiss(){this.onDismiss(),this.viewManager.clearConfirmationOverlay()}}};i(71060);var r=i(51900),d=(0,r.Z)(o,s,[],!1,null,"380143c6",null);d.options.__file="source/addins-vue/baseMetric/components/ConfirmationOverlay.vue";const c=d.exports;var l=i(72606),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header",class:{"center-title":e.centerTitle}},[e.computedButtonsLeft?a("header-buttons",{staticClass:"header-left",attrs:{buttons:e.computedButtonsLeft,"view-manager":e.viewManager}}):e.centerTitle?a("div",{staticClass:"centering-placeholder"}):e._e(),e._v(" "),a("div",{staticClass:"header-center"},[a("transition",{attrs:{name:"fade",duration:"100",mode:"out-in"}},[a("div",{key:e.computedTitle+e.icon,staticClass:"title-wrapper"},[e.access(e.icon)&&e.iconIsSvg?a("inline-svg",{staticClass:"icon app-icon",class:e.access(e.iconClass),attrs:{src:e.access(e.icon)}}):e.access(e.icon)?a("img",{staticClass:"icon app-icon",class:e.iconClass,attrs:{src:e.access(e.icon)}}):e._e(),e._v(" "),e.computedTitle?a("div",{staticClass:"title"},[e._v(e._s(e.computedTitle))]):e._e()],1)])],1),e._v(" "),e.computedButtonsRight||e.$touch?a("div",{staticClass:"header-right"},[e.computedButtonsRight?a("header-buttons",{attrs:{buttons:e.computedButtonsRight,"view-manager":e.viewManager}}):e._e(),e._v(" "),e.$touch?a("span",{staticClass:"mobile-close",on:{click:e.viewManager.closeApp}},[a("span",{staticClass:"icon-wrapper u--mobile-show-bg hide"},[a("inline-svg",{staticClass:"icon icon-hide",attrs:{src:i(69768)}})],1)]):e._e()],1):e.centerTitle?a("div",{staticClass:"centering-placeholder"}):e._e()],1)};h._withStripped=!0;var u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"buttons"},e._l(e.buttons,(function(t,s){return a("div",{key:s},["back"===s&&["string","function"].includes(typeof t)?a("div",{staticClass:"icon-wrapper go-back",attrs:{"data-test":"back"},on:{click:function(i){return e.showViewOrRunCallback(t)}}},[a("inline-svg",{staticClass:"icon icon-back",attrs:{src:i(26409)}})],1):"more"!==s||"function"!=typeof t&&!Array.isArray(t)?a("div",{staticClass:"icon-wrapper",class:t.class,attrs:{"data-test":t.dataTest},on:{click:function(i){return e.showViewOrRunCallback(t.action)}}},[a("inline-svg",{staticClass:"icon",class:t.iconClass,attrs:{src:t.icon}})],1):a("in-app-dropdown",{attrs:{"data-test":t.dataTest,options:t,"view-manager":e.viewManager}})],1)})),0)};u._withStripped=!0;var M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){return e.active=!1},expression:"() => active = false"}],staticClass:"dropdown-wrapper"},[a("div",{staticClass:"icon-wrapper more-toggle",attrs:{"data-test":"more-toggle"},on:{click:function(t){e.active=!e.active}}},[a("inline-svg",{staticClass:"icon icon-ellipsis more-icon",attrs:{src:i(20264)}})],1),e._v(" "),e.active?a("ul",{ref:"dropdown",staticClass:"dropdown dropdown-list"},e._l(e.access(e.options),(function(t,i){return a("li",{key:i},[t.toggle?a("toggle",{staticClass:"dropdown-list-item",attrs:{value:t.object[t.property],label:e.access(t.label),"data-test":e.access(t.dataTest)},on:{input:function(i){return e.onToggleInput(t,i)}}}):a("div",{staticClass:"dropdown-list-item",attrs:{"data-test":e.access(t.dataTest)},on:{click:function(i){return e.onOptionClick(t,i)}}},[e.access(t.icon)?a("inline-svg",{staticClass:"icon dropdown-list-icon",class:e.access(t.iconClass),attrs:{src:e.access(t.icon)}}):e._e(),e._v(" "),a("span",[e._v(e._s(e.access(t.label)))])],1)],1)})),0):e._e()])};M._withStripped=!0;var g=i(45698),v=i(5111);const p={name:"InAppDropdown",components:{Toggle:g.Z},directives:{clickOutside:v.Z},props:{options:{type:[Array,Function],required:!0},viewManager:{type:Object,required:!0}},data:()=>({active:!1}),watch:{active(e){e?this.$nextTick((()=>{const e=this.$refs.dropdown,t=e.closest(".app-overflow"),i=function e(t,i,a=0){return t===i?a:e(t.offsetParent,i,a+t.offsetTop)}(e,e.closest(".app-overflow"))+e.clientHeight+21,a=t.clientHeight-i;a<0&&this.viewManager.setForcedAppBodyHeight(t.querySelector(".app-body").clientHeight-a)})):this.viewManager.resetForcedAppBodyHeight()}},destroyed(){this.viewManager.resetForcedAppBodyHeight()},methods:{onOptionClick(e){this.active=!1,e.action()},onToggleInput(e,t){e.object[e.property]=t},access:m.utils.access}};i(50605);var w=(0,r.Z)(p,M,[],!1,null,"407a49db",null);w.options.__file="source/addins-vue/shared_components/InAppDropdown.vue";const y={name:"HeaderButtons",components:{InAppDropdown:w.exports},props:{buttons:{type:Object,required:!0},viewManager:{type:Object,required:!0}},methods:{showViewOrRunCallback(e){"string"==typeof e?this.viewManager.showView(e):"function"==typeof e&&e()}}};i(87679);var I=(0,r.Z)(y,u,[],!1,null,"57e867a2",null);I.options.__file="source/addins-vue/shared_components/HeaderButtons.vue";const D={name:"DefaultHeader",components:{HeaderButtons:I.exports},props:{title:{type:[String,Function],default:""},centerTitle:{type:Boolean,default:!1},icon:{type:[String,Function],default:""},iconClass:{type:[String,Function],default:""},viewManager:{type:Object,required:!0},buttonsRight:{type:[Object,Function],default:null},buttonsLeft:{type:[Object,Function],default:null}},computed:{iconIsSvg(){return this.access(this.icon).includes("data:image/svg+xml")},computedButtonsLeft(){return this.access(this.buttonsLeft)},computedButtonsRight(){return this.access(this.buttonsRight)},computedTitle(){return this.access(this.title)}},methods:{access:m.utils.access}};i(90002);var N=(0,r.Z)(D,h,[],!1,null,"53b21e9c",null);N.options.__file="source/addins-vue/shared_components/DefaultHeader.vue";const L=N.exports,j={name:"ViewContainer",components:{ConfirmationOverlay:c,SmoothReflow:l.default,Header:L},props:{viewManager:{type:Object,required:!0},loaded:{type:Boolean,default:!0},transition:{type:[String,Array],default:()=>["smooth-height-slide-left","smooth-height-slide-right"]},smoothReflow:{type:Boolean,default:!0}},data:()=>({lastActiveViewId:"",reverseTransition:!1,disableSmoothReflow:!0,fadeTransition:!0}),computed:{activeViewId(){return this.viewManager.activeViewId},activeView(){return this.viewManager.activeView},transitionType(){let e,t;return Array.isArray(this.transition)?[e,t]=this.transition:"string"==typeof this.transition&&(e=t=this.transition),this.fadeTransition?"smooth-height-fade":this.reverseTransition?t:e},appBodyHeight(){const e=this.viewManager.forcedAppBodyHeight;return e||0===e?e+"px":"auto"}},watch:{loaded:{handler(e){e&&this.$nextTick((()=>this.fadeTransition=!1))},immediate:!0},activeViewId(e,t){if(!t)return;this.lastActiveViewId=t;const i=this.viewManager.views[this.lastActiveViewId],a=this.viewManager.activeView;i.hasOwnProperty("order")&&a.hasOwnProperty("order")&&(this.reverseTransition=i.order>a.order),this.viewManager.$emit("viewClosing:"+this.lastActiveViewId)}},created(){this.viewManager&&this.viewManager.$emit("container:created"),l.default&&setTimeout((()=>this.disableSmoothReflow=!1),200)},destroyed(){this.afterViewLeave(),this.viewManager.resetView()},methods:{afterViewLeave(){this.viewManager&&(this.viewManager.$emit("resolveShowView:"+this.lastActiveViewId),this.$nextTick().then((()=>{this.viewManager.$emit("viewClosed:"+this.lastActiveViewId)})))},beforeViewEnter(){this.viewManager&&this.viewManager.$emit("viewOpening:"+this.activeViewId)},afterViewEnter(){this.viewManager&&this.viewManager.$emit("viewOpened:"+this.activeViewId)}}};i(60719);var f=(0,r.Z)(j,a,[],!1,null,"d653fa6c",null);f.options.__file="source/addins-vue/shared_components/ViewContainer.vue";const C=f.exports},71060:(e,t,i)=>{var a=i(93297);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,i(45346).Z)("7763ee18",a,!1,{ssrId:!0})},90002:(e,t,i)=>{var a=i(15724);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,i(45346).Z)("6d94f49b",a,!1,{ssrId:!0})},87679:(e,t,i)=>{var a=i(48344);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,i(45346).Z)("7dfa2d56",a,!1,{ssrId:!0})},50605:(e,t,i)=>{var a=i(54346);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,i(45346).Z)("6c7d9538",a,!1,{ssrId:!0})},60719:(e,t,i)=>{var a=i(32649);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,i(45346).Z)("710534e7",a,!1,{ssrId:!0})}}]);