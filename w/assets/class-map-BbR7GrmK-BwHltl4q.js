import{y,b,f as w,q as $}from"./lit-element-DrneaN_7-paRhwip2.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:b},T=(t=m,e,s)=>{const{kind:i,metadata:n}=s;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),i==="accessor"){const{name:c}=s;return{set(r){const h=e.get.call(this);e.set.call(this,r),this.requestUpdate(c,h,t)},init(r){return r!==void 0&&this.C(c,void 0,t,r),r}}}if(i==="setter"){const{name:c}=s;return function(r){const h=this[c];e.call(this,r),this.requestUpdate(c,h,t)}}throw Error("Unsupported decorator location: "+i)};function M(t){return(e,s)=>typeof s=="object"?T(t,e,s):((i,n,o)=>{const c=n.hasOwnProperty(o);return n.constructor.createProperty(o,i),c?Object.getOwnPropertyDescriptor(n,o):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(t){return M({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=t=>t??y;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=t=>t===null||typeof t!="object"&&typeof t!="function",P=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p={ATTRIBUTE:1,CHILD:2},C=t=>(...e)=>({_$litDirective$:t,values:e});let A=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const i of s)i._$AO?.(e,!1),d(i,e);return!0},l=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},v=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),N(e)}};function U(t){this._$AN!==void 0?(l(this),this._$AM=t,v(this)):this._$AM=t}function j(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let o=s;o<i.length;o++)d(i[o],!1),l(i[o]);else i!=null&&(d(i,!1),l(i));else d(this,t)}const N=t=>{t.type==p.CHILD&&(t._$AP??=j,t._$AQ??=U)};class I extends A{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,i){super._$AT(e,s,i),v(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(d(this,e),l(this))}setValue(e){if(P(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class x{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class S{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise((e=>this.Z=e))}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=t=>!O(t)&&typeof t.then=="function",f=1073741823;class X extends I{constructor(){super(...arguments),this._$Cwt=f,this._$Cbt=[],this._$CK=new x(this),this._$CX=new S}render(...e){return e.find((s=>!_(s)))??$}update(e,s){const i=this._$Cbt;let n=i.length;this._$Cbt=s;const o=this._$CK,c=this._$CX;this.isConnected||this.disconnected();for(let r=0;r<s.length&&!(r>this._$Cwt);r++){const h=s[r];if(!_(h))return this._$Cwt=r,h;r<n&&h===i[r]||(this._$Cwt=f,n=0,Promise.resolve(h).then((async g=>{for(;c.get();)await c.get();const a=o.deref();if(a!==void 0){const u=a._$Cbt.indexOf(h);u>-1&&u<a._$Cwt&&(a._$Cwt=u,a.setValue(g))}})))}return $}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const K=C(X);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=C(class extends A{constructor(t){if(super(t),t.type!==p.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}const s=t.element.classList;for(const i of this.st)i in e||(s.remove(i),this.st.delete(i));for(const i in e){const n=!!e[i];n===this.st.has(i)||this.nt?.has(i)||(n?(s.add(i),this.st.add(i)):(s.remove(i),this.st.delete(i)))}return $}});export{C,E as D,G,I,K,M,k as X};
