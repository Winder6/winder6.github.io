import{r as z,L as l,k as O,B as Nt}from"./lit-element-DrneaN_7-paRhwip2.js";import{G as $,M as c,D as B,X as wo}from"./class-map-BbR7GrmK-BwHltl4q.js";import{a as P,h as Xt,R as _,A as U,O as mt,S as de,e as Y,r as q,k as fo,C as W,b as Gt,c as H,d as N,T as Me,E as tt,W as Ve,f as bo,g as oi,M as Gi,i as At,j as ri}from"./solana-Bh5bkUXQ-D6p0QEYy.js";import{h as dt,x as I}from"./index-N8cPdMnf-CUpB-OuT.js";import{cC as mo,R as vo}from"./index-DBl1uTky.js";import{F as Ke,g as He,G as yo}from"./ref-YNuUXyjw-CfuztqwO.js";import"./http-B0uLitqs-lhEcdrKl.js";import"./util--bw7gFPs-BWz0kH9e.js";import"./wallets-DeIxpXbE-CSSF6IQ2.js";import"./signer-BH3gAHuj-Luy8n-FY.js";import"./index.es-Vlpe_OYB-44qiv78Y.js";const xo=O`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var Ct=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let ht=class extends z{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),l`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?l`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:l`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};ht.styles=[Y,q,xo];Ct([c()],ht.prototype,"size",void 0);Ct([c()],ht.prototype,"name",void 0);Ct([c()],ht.prototype,"imageSrc",void 0);Ct([c()],ht.prototype,"walletIcon",void 0);Ct([c({type:Boolean})],ht.prototype,"installed",void 0);Ct([c()],ht.prototype,"badgeSize",void 0);ht=Ct([I("wui-wallet-image")],ht);const $o=O`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Qi=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};const Re=4;let Qt=class extends z{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<Re;return l`${this.walletImages.slice(0,Re).map(({src:i,walletName:o})=>l`
            <wui-wallet-image
              size="inherit"
              imageSrc=${i}
              name=${$(o)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(Re-this.walletImages.length)].map(()=>l` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Qt.styles=[q,$o];Qi([c({type:Array})],Qt.prototype,"walletImages",void 0);Qt=Qi([I("wui-all-wallets-image")],Qt);const Co=O`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var J=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let K=class extends z{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${$(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?l` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?l` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?l`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?l`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?l`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?l`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?l`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};K.styles=[q,Y,Co];J([c({type:Array})],K.prototype,"walletImages",void 0);J([c()],K.prototype,"imageSrc",void 0);J([c()],K.prototype,"name",void 0);J([c()],K.prototype,"tagLabel",void 0);J([c()],K.prototype,"tagVariant",void 0);J([c()],K.prototype,"icon",void 0);J([c()],K.prototype,"walletIcon",void 0);J([c()],K.prototype,"tabIdx",void 0);J([c({type:Boolean})],K.prototype,"installed",void 0);J([c({type:Boolean})],K.prototype,"disabled",void 0);J([c({type:Boolean})],K.prototype,"showAllWallets",void 0);J([c({type:Boolean})],K.prototype,"loading",void 0);J([c({type:String})],K.prototype,"loadingSpinnerColor",void 0);K=J([I("wui-list-wallet")],K);var qt=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let St=class extends z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=W.state.connectors,this.count=U.state.count,this.isFetchingRecommendedWallets=U.state.isFetchingRecommendedWallets,this.unsubscribe.push(W.subscribeKey("connectors",e=>this.connectors=e),U.subscribeKey("count",e=>this.count=e),U.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(n=>n.id==="walletConnect"),{allWallets:i}=mt.state;if(!e||i==="HIDE"||i==="ONLY_MOBILE"&&!P.isMobile())return null;const o=U.state.featured.length,a=this.count+o,r=a<10?a:Math.floor(a/10)*10,t=r<a?`${r}+`:`${r}`;return l`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${t}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${$(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){tt.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),_.push("AllWallets")}};qt([c()],St.prototype,"tabIdx",void 0);qt([B()],St.prototype,"connectors",void 0);qt([B()],St.prototype,"count",void 0);qt([B()],St.prototype,"isFetchingRecommendedWallets",void 0);St=qt([I("w3m-all-wallets-widget")],St);var Fe=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let Zt=class extends z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=W.state.connectors,this.unsubscribe.push(W.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(i=>i.type==="ANNOUNCED");return e?.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(Gt.showConnector).map(i=>l`
              <wui-list-wallet
                imageSrc=${$(H.getConnectorImage(i))}
                name=${i.name??"Unknown"}
                @click=${()=>this.onConnector(i)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${i.id}`}
                .installed=${!0}
                tabIdx=${$(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.id==="walletConnect"?P.isMobile()?_.push("AllWallets"):_.push("ConnectingWalletConnect"):_.push("ConnectingExternal",{connector:e})}};Fe([c()],Zt.prototype,"tabIdx",void 0);Fe([B()],Zt.prototype,"connectors",void 0);Zt=Fe([I("w3m-connect-announced-widget")],Zt);var he=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let Ot=class extends z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=W.state.connectors,this.loading=!1,this.unsubscribe.push(W.subscribeKey("connectors",e=>this.connectors=e)),P.isTelegram()&&P.isIos()&&(this.loading=!N.state.wcUri,this.unsubscribe.push(N.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=mt.state;if(!e?.length)return this.style.cssText="display: none",null;const i=this.filterOutDuplicateWallets(e);return l`<wui-flex flexDirection="column" gap="xs">
      ${i.map(o=>l`
          <wui-list-wallet
            imageSrc=${$(H.getWalletImage(o))}
            name=${o.name??"Unknown"}
            @click=${()=>this.onConnectWallet(o)}
            data-testid=${`wallet-selector-${o.id}`}
            tabIdx=${$(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const i=de.getRecentWallets(),o=this.connectors.map(t=>t.info?.rdns).filter(Boolean),a=i.map(t=>t.rdns).filter(Boolean),r=o.concat(a);if(r.includes("io.metamask.mobile")&&P.isMobile()){const t=r.indexOf("io.metamask.mobile");r[t]="io.metamask"}return e.filter(t=>!r.includes(String(t?.rdns)))}onConnectWallet(e){this.loading||_.push("ConnectingWalletConnect",{wallet:e})}};he([c()],Ot.prototype,"tabIdx",void 0);he([B()],Ot.prototype,"connectors",void 0);he([B()],Ot.prototype,"loading",void 0);Ot=he([I("w3m-connect-custom-widget")],Ot);var Ye=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let te=class extends z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=W.state.connectors,this.unsubscribe.push(W.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(i=>i.type==="EXTERNAL").filter(i=>i.id!==bo.CONNECTOR_ID.COINBASE_SDK);return e?.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(i=>l`
            <wui-list-wallet
              imageSrc=${$(H.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              data-testid=${`wallet-selector-external-${i.id}`}
              @click=${()=>this.onConnector(i)}
              tabIdx=${$(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){_.push("ConnectingExternal",{connector:e})}};Ye([c()],te.prototype,"tabIdx",void 0);Ye([B()],te.prototype,"connectors",void 0);te=Ye([I("w3m-connect-external-widget")],te);var Je=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let ee=class extends z{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(e=>l`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${e.id}`}
              imageSrc=${$(H.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${$(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){W.selectWalletConnector(e)}};Je([c()],ee.prototype,"tabIdx",void 0);Je([c()],ee.prototype,"wallets",void 0);ee=Je([I("w3m-connect-featured-widget")],ee);var Xe=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let ie=class extends z{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){const e=this.connectors;return!e?.length||e.length===1&&e[0]?.name==="Browser Wallet"&&!P.isMobile()?(this.style.cssText="display: none",null):l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(i=>{const o=i.info?.rdns;return!P.isMobile()&&i.name==="Browser Wallet"?null:!o&&!N.checkInstalled()?(this.style.cssText="display: none",null):Gt.showConnector(i)?l`
            <wui-list-wallet
              imageSrc=${$(H.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${i.id}`}
              @click=${()=>this.onConnector(i)}
              tabIdx=${$(this.tabIdx)}
            >
            </wui-list-wallet>
          `:null})}
      </wui-flex>
    `}onConnector(e){W.setActiveConnector(e),_.push("ConnectingExternal",{connector:e})}};Xe([c()],ie.prototype,"tabIdx",void 0);Xe([c()],ie.prototype,"connectors",void 0);ie=Xe([I("w3m-connect-injected-widget")],ie);var Ge=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let oe=class extends z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=W.state.connectors,this.unsubscribe.push(W.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(i=>i.type==="MULTI_CHAIN"&&i.name!=="WalletConnect");return e?.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(i=>l`
            <wui-list-wallet
              imageSrc=${$(H.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${i.id}`}
              @click=${()=>this.onConnector(i)}
              tabIdx=${$(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){W.setActiveConnector(e),_.push("ConnectingMultiChain")}};Ge([c()],oe.prototype,"tabIdx",void 0);Ge([B()],oe.prototype,"connectors",void 0);oe=Ge([I("w3m-connect-multi-chain-widget")],oe);var pe=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let Mt=class extends z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=W.state.connectors,this.loading=!1,this.unsubscribe.push(W.subscribeKey("connectors",e=>this.connectors=e)),P.isTelegram()&&P.isIos()&&(this.loading=!N.state.wcUri,this.unsubscribe.push(N.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const e=de.getRecentWallets().filter(i=>!this.connectors.some(o=>o.id===i.id||o.name===i.name));return e.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(i=>l`
            <wui-list-wallet
              imageSrc=${$(H.getWalletImage(i))}
              name=${i.name??"Unknown"}
              @click=${()=>this.onConnectWallet(i)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${$(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){this.loading||W.selectWalletConnector(e)}};pe([c()],Mt.prototype,"tabIdx",void 0);pe([B()],Mt.prototype,"connectors",void 0);pe([B()],Mt.prototype,"loading",void 0);Mt=pe([I("w3m-connect-recent-widget")],Mt);var ge=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let Wt=class extends z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,P.isTelegram()&&P.isIos()&&(this.loading=!N.state.wcUri,this.unsubscribe.push(N.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const{connectors:e}=W.state,{customWallets:i,featuredWalletIds:o}=mt.state,a=de.getRecentWallets(),r=e.find(u=>u.id==="walletConnect"),t=e.filter(u=>u.type==="INJECTED"||u.type==="ANNOUNCED"||u.type==="MULTI_CHAIN").filter(u=>u.name!=="Browser Wallet");if(!r)return null;if(o||i||!this.wallets.length)return this.style.cssText="display: none",null;const n=t.length+a.length,s=Math.max(0,2-n),d=Ve.filterOutDuplicateWallets(this.wallets).slice(0,s);return d.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${d.map(u=>l`
            <wui-list-wallet
              imageSrc=${$(H.getWalletImage(u))}
              name=${u?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(u)}
              tabIdx=${$(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){if(this.loading)return;const i=W.getConnector(e.id,e.rdns);i?_.push("ConnectingExternal",{connector:i}):_.push("ConnectingWalletConnect",{wallet:e})}};ge([c()],Wt.prototype,"tabIdx",void 0);ge([c()],Wt.prototype,"wallets",void 0);ge([B()],Wt.prototype,"loading",void 0);Wt=ge([I("w3m-connect-recommended-widget")],Wt);var we=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let Ut=class extends z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=W.state.connectors,this.connectorImages=oi.state.connectorImages,this.unsubscribe.push(W.subscribeKey("connectors",e=>this.connectors=e),oi.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(P.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(o=>o.id==="walletConnect");if(!e)return this.style.cssText="display: none",null;const i=e.imageUrl||this.connectorImages[e?.imageId??""];return l`
      <wui-list-wallet
        imageSrc=${$(i)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${$(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(e){W.setActiveConnector(e),_.push("ConnectingWalletConnect")}};we([c()],Ut.prototype,"tabIdx",void 0);we([B()],Ut.prototype,"connectors",void 0);we([B()],Ut.prototype,"connectorImages",void 0);Ut=we([I("w3m-connect-walletconnect-widget")],Ut);const ko=O`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Vt=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let vt=class extends z{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=W.state.connectors,this.recommended=U.state.recommended,this.featured=U.state.featured,this.unsubscribe.push(W.subscribeKey("connectors",e=>this.connectors=e),U.subscribeKey("recommended",e=>this.recommended=e),U.subscribeKey("featured",e=>this.featured=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:e,recent:i,announced:o,injected:a,multiChain:r,recommended:t,featured:n,external:s}=Gt.getConnectorsByType(this.connectors,this.recommended,this.featured);return Gt.getConnectorTypeOrder({custom:e,recent:i,announced:o,injected:a,multiChain:r,recommended:t,featured:n,external:s}).map(d=>{switch(d){case"injected":return l`
            ${r.length?l`<w3m-connect-multi-chain-widget
                  tabIdx=${$(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${o.length?l`<w3m-connect-announced-widget
                  tabIdx=${$(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${a.length?l`<w3m-connect-injected-widget
                  .connectors=${a}
                  tabIdx=${$(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return l`<w3m-connect-walletconnect-widget
            tabIdx=${$(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return l`<w3m-connect-recent-widget
            tabIdx=${$(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return l`<w3m-connect-featured-widget
            .wallets=${n}
            tabIdx=${$(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return l`<w3m-connect-custom-widget
            tabIdx=${$(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return l`<w3m-connect-external-widget
            tabIdx=${$(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return l`<w3m-connect-recommended-widget
            .wallets=${t}
            tabIdx=${$(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${d}`),null}})}};vt.styles=ko;Vt([c()],vt.prototype,"tabIdx",void 0);Vt([B()],vt.prototype,"connectors",void 0);Vt([B()],vt.prototype,"recommended",void 0);Vt([B()],vt.prototype,"featured",void 0);vt=Vt([I("w3m-connector-list")],vt);const Ro=O`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var bt=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let nt=class extends z{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,i)=>{const o=i===this.activeTab;return l`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(i)}
          data-active=${o}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?l`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,i){const o=this.buttons[this.activeTab],a=this.buttons[e],r=o?.querySelector("wui-text"),t=a?.querySelector("wui-text"),n=a?.getBoundingClientRect(),s=t?.getBoundingClientRect();o&&r&&!i&&e!==this.activeTab&&(r.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),o.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),a&&n&&s&&t&&(e!==this.activeTab||i)&&(this.localTabWidth=`${Math.round(n.width+s.width)+6}px`,a.animate([{width:`${n.width+s.width}px`}],{duration:i?0:500,fill:"forwards",easing:"ease"}),t.animate([{opacity:1}],{duration:i?0:125,delay:i?0:200,fill:"forwards",easing:"ease"}))}};nt.styles=[q,Y,Ro];bt([c({type:Array})],nt.prototype,"tabs",void 0);bt([c()],nt.prototype,"onTabChange",void 0);bt([c({type:Array})],nt.prototype,"buttons",void 0);bt([c({type:Boolean})],nt.prototype,"disabled",void 0);bt([c()],nt.prototype,"localTabWidth",void 0);bt([B()],nt.prototype,"activeTab",void 0);bt([B()],nt.prototype,"isDense",void 0);nt=bt([I("wui-tabs")],nt);var fe=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let Dt=class extends z{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(N.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return l`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(i=>i==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:i==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:i==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:i==="web"?{label:"Webapp",icon:"browser",platform:"web"}:i==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:i})=>i),e}onTabChange(e){const i=this.platformTabs[e];i&&this.onSelectPlatfrom?.(i)}};fe([c({type:Array})],Dt.prototype,"platforms",void 0);fe([c()],Dt.prototype,"onSelectPlatfrom",void 0);fe([B()],Dt.prototype,"buffering",void 0);Dt=fe([I("w3m-connecting-header")],Dt);const Eo=O`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var at=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};const ni={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},Io={lg:"paragraph-600",md:"small-600"},To={lg:"md",md:"md"};let G=class extends z{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const e=this.textVariant??Io[this.size];return l`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=To[this.size],i=this.disabled?ni.disabled:ni[this.variant];return l`<wui-loading-spinner color=${i} size=${e}></wui-loading-spinner>`}return l``}};G.styles=[q,Y,Eo];at([c()],G.prototype,"size",void 0);at([c({type:Boolean})],G.prototype,"disabled",void 0);at([c({type:Boolean})],G.prototype,"fullWidth",void 0);at([c({type:Boolean})],G.prototype,"loading",void 0);at([c()],G.prototype,"variant",void 0);at([c({type:Boolean})],G.prototype,"hasIconLeft",void 0);at([c({type:Boolean})],G.prototype,"hasIconRight",void 0);at([c()],G.prototype,"borderRadius",void 0);at([c()],G.prototype,"textVariant",void 0);G=at([I("wui-button")],G);const So=O`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var be=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let Lt=class extends z{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${$(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Lt.styles=[q,Y,So];be([c()],Lt.prototype,"tabIdx",void 0);be([c({type:Boolean})],Lt.prototype,"disabled",void 0);be([c()],Lt.prototype,"color",void 0);Lt=be([I("wui-link")],Lt);const Lo=O`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Zi=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let re=class extends z{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,i=36-e,o=116+i,a=245+i,r=360+i*1.75;return l`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${a}"
          stroke-dashoffset=${r}
        />
      </svg>
    `}};re.styles=[q,Lo];Zi([c({type:Number})],re.prototype,"radius",void 0);re=Zi([I("wui-loading-thumbnail")],re);const Bo=O`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var kt=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let pt=class extends z{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const e=this.size==="sm"?"small-600":"paragraph-600";return l`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};pt.styles=[q,Y,Bo];kt([c()],pt.prototype,"variant",void 0);kt([c()],pt.prototype,"imageSrc",void 0);kt([c({type:Boolean})],pt.prototype,"disabled",void 0);kt([c()],pt.prototype,"icon",void 0);kt([c()],pt.prototype,"size",void 0);kt([c()],pt.prototype,"text",void 0);pt=kt([I("wui-chip-button")],pt);const zo=O`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var me=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let Bt=class extends z{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return l`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Bt.styles=[q,Y,zo];me([c({type:Boolean})],Bt.prototype,"disabled",void 0);me([c()],Bt.prototype,"label",void 0);me([c()],Bt.prototype,"buttonLabel",void 0);Bt=me([I("wui-cta-button")],Bt);const Po=O`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var to=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let ne=class extends z{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:i,play_store:o,chrome_store:a,homepage:r}=this.wallet,t=P.isMobile(),n=P.isIos(),s=P.isAndroid(),d=[i,o,r,a].filter(Boolean).length>1,u=dt.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return d&&!t?l`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>_.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&r?l`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&n?l`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&s?l`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&P.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&P.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&P.openHref(this.wallet.homepage,"_blank")}};ne.styles=[Po];to([c({type:Object})],ne.prototype,"wallet",void 0);ne=to([I("w3m-mobile-download-links")],ne);const Ao=O`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var it=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};class V extends z{constructor(){super(),this.wallet=_.state.data?.wallet,this.connector=_.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=H.getWalletImage(this.wallet)??H.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=N.state.wcUri,this.error=N.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(N.subscribeKey("wcUri",i=>{this.uri=i,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),N.subscribeKey("wcError",i=>this.error=i),N.subscribeKey("buffering",i=>this.buffering=i)),(P.isTelegram()||P.isSafari())&&P.isIos()&&N.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(i=>i()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const i=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let o=`Continue in ${this.name}`;return this.buffering&&(o="Connecting..."),this.error&&(o="Connection declined"),l`
      <wui-flex
        data-error=${$(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${$(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${o}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${i}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?l`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||!this.error&&this.buffering||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?l`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){this.buffering||(N.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const i=Me.state.themeVariables["--w3m-border-radius-master"],o=i?parseInt(i.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${o*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(P.copyToClopboard(this.uri),Xt.showSuccess("Link copied"))}catch{Xt.showError("Failed to copy")}}}V.styles=Ao;it([B()],V.prototype,"isRetrying",void 0);it([B()],V.prototype,"uri",void 0);it([B()],V.prototype,"error",void 0);it([B()],V.prototype,"ready",void 0);it([B()],V.prototype,"showRetry",void 0);it([B()],V.prototype,"secondaryBtnLabel",void 0);it([B()],V.prototype,"secondaryLabel",void 0);it([B()],V.prototype,"buffering",void 0);it([B()],V.prototype,"isLoading",void 0);it([c({type:Boolean})],V.prototype,"isMobile",void 0);it([c()],V.prototype,"onRetry",void 0);var jo=function(e,i,o,a){var r=arguments.length,t=r<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let ai=class extends V{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),tt.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=W.state,i=e.find(o=>o.type==="ANNOUNCED"&&o.info?.rdns===this.wallet?.rdns||o.type==="INJECTED"||o.name===this.wallet?.name);if(i)await N.connectExternal(i,i.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");Gi.close(),tt.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){tt.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};ai=jo([I("w3m-connecting-wc-browser")],ai);var No=function(e,i,o,a){var r=arguments.length,t=r<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let si=class extends V{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),tt.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:i}=this.wallet,{redirect:o,href:a}=P.formatNativeUrl(e,this.uri);N.setWcLinking({name:i,href:a}),N.setRecentWallet(this.wallet),P.openHref(o,"_blank")}catch{this.error=!0}}};si=No([I("w3m-connecting-wc-desktop")],si);var Oo=function(e,i,o,a){var r=arguments.length,t=r<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let li=class extends V{constructor(){if(super(),this.btnLabelTimeout=void 0,this.labelTimeout=void 0,this.onRender=()=>{!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())},this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:i}=this.wallet,{redirect:o,href:a}=P.formatNativeUrl(e,this.uri);N.setWcLinking({name:i,href:a}),N.setRecentWallet(this.wallet);const r=P.isIframe()?"_top":"_self";P.openHref(o,r),clearTimeout(this.labelTimeout),this.secondaryLabel=At.CONNECT_LABELS.MOBILE}catch(e){tt.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel=void 0,this.secondaryLabel=At.CONNECT_LABELS.MOBILE,document.addEventListener("visibilitychange",this.onBuffering.bind(this)),tt.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}}),this.btnLabelTimeout=setTimeout(()=>{this.secondaryBtnLabel="Try again",this.secondaryLabel=At.CONNECT_LABELS.MOBILE},At.FIVE_SEC_MS),this.labelTimeout=setTimeout(()=>{this.secondaryLabel="Hold tight... it's taking longer than expected"},At.THREE_SEC_MS)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this)),clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout)}onBuffering(){const e=P.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(N.setBuffering(!0),setTimeout(()=>{N.setBuffering(!1)},5e3))}onTryAgain(){this.buffering||(N.setWcError(!1),this.onConnect())}};li=Oo([I("w3m-connecting-wc-mobile")],li);var Tt={},ci,ui;function Mo(){return ui||(ui=1,ci=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),ci}var Ee={},ft={},di;function Rt(){if(di)return ft;di=1;let e;const i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return ft.getSymbolSize=function(o){if(!o)throw new Error('"version" cannot be null or undefined');if(o<1||o>40)throw new Error('"version" should be in range from 1 to 40');return o*4+17},ft.getSymbolTotalCodewords=function(o){return i[o]},ft.getBCHDigit=function(o){let a=0;for(;o!==0;)a++,o>>>=1;return a},ft.setToSJISFunction=function(o){if(typeof o!="function")throw new Error('"toSJISFunc" is not a valid function.');e=o},ft.isKanjiModeEnabled=function(){return typeof e<"u"},ft.toSJIS=function(o){return e(o)},ft}var hi={},pi;function Qe(){return pi||(pi=1,(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function i(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+o)}}e.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},e.from=function(o,a){if(e.isValid(o))return o;try{return i(o)}catch{return a}}})(hi)),hi}var Ie,gi;function Wo(){if(gi)return Ie;gi=1;function e(){this.buffer=[],this.length=0}return e.prototype={get:function(i){const o=Math.floor(i/8);return(this.buffer[o]>>>7-i%8&1)===1},put:function(i,o){for(let a=0;a<o;a++)this.putBit((i>>>o-a-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(i){const o=Math.floor(this.length/8);this.buffer.length<=o&&this.buffer.push(0),i&&(this.buffer[o]|=128>>>this.length%8),this.length++}},Ie=e,Ie}var Te,wi;function Uo(){if(wi)return Te;wi=1;function e(i){if(!i||i<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=i,this.data=new Uint8Array(i*i),this.reservedBit=new Uint8Array(i*i)}return e.prototype.set=function(i,o,a,r){const t=i*this.size+o;this.data[t]=a,r&&(this.reservedBit[t]=!0)},e.prototype.get=function(i,o){return this.data[i*this.size+o]},e.prototype.xor=function(i,o,a){this.data[i*this.size+o]^=a},e.prototype.isReserved=function(i,o){return this.reservedBit[i*this.size+o]},Te=e,Te}var fi={},bi;function Do(){return bi||(bi=1,(function(e){const i=Rt().getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];const a=Math.floor(o/7)+2,r=i(o),t=r===145?26:Math.ceil((r-13)/(2*a-2))*2,n=[r-7];for(let s=1;s<a-1;s++)n[s]=n[s-1]-t;return n.push(6),n.reverse()},e.getPositions=function(o){const a=[],r=e.getRowColCoords(o),t=r.length;for(let n=0;n<t;n++)for(let s=0;s<t;s++)n===0&&s===0||n===0&&s===t-1||n===t-1&&s===0||a.push([r[n],r[s]]);return a}})(fi)),fi}var Se={},mi;function _o(){if(mi)return Se;mi=1;const e=Rt().getSymbolSize,i=7;return Se.getPositions=function(o){const a=e(o);return[[0,0],[a-i,0],[0,a-i]]},Se}var vi={},yi;function qo(){return yi||(yi=1,(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const i={N1:3,N2:3,N3:40,N4:10};e.isValid=function(a){return a!=null&&a!==""&&!isNaN(a)&&a>=0&&a<=7},e.from=function(a){return e.isValid(a)?parseInt(a,10):void 0},e.getPenaltyN1=function(a){const r=a.size;let t=0,n=0,s=0,d=null,u=null;for(let j=0;j<r;j++){n=s=0,d=u=null;for(let k=0;k<r;k++){let p=a.get(j,k);p===d?n++:(n>=5&&(t+=i.N1+(n-5)),d=p,n=1),p=a.get(k,j),p===u?s++:(s>=5&&(t+=i.N1+(s-5)),u=p,s=1)}n>=5&&(t+=i.N1+(n-5)),s>=5&&(t+=i.N1+(s-5))}return t},e.getPenaltyN2=function(a){const r=a.size;let t=0;for(let n=0;n<r-1;n++)for(let s=0;s<r-1;s++){const d=a.get(n,s)+a.get(n,s+1)+a.get(n+1,s)+a.get(n+1,s+1);(d===4||d===0)&&t++}return t*i.N2},e.getPenaltyN3=function(a){const r=a.size;let t=0,n=0,s=0;for(let d=0;d<r;d++){n=s=0;for(let u=0;u<r;u++)n=n<<1&2047|a.get(d,u),u>=10&&(n===1488||n===93)&&t++,s=s<<1&2047|a.get(u,d),u>=10&&(s===1488||s===93)&&t++}return t*i.N3},e.getPenaltyN4=function(a){let r=0;const t=a.data.length;for(let n=0;n<t;n++)r+=a.data[n];return Math.abs(Math.ceil(r*100/t/5)-10)*i.N4};function o(a,r,t){switch(a){case e.Patterns.PATTERN000:return(r+t)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return t%3===0;case e.Patterns.PATTERN011:return(r+t)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(t/3))%2===0;case e.Patterns.PATTERN101:return r*t%2+r*t%3===0;case e.Patterns.PATTERN110:return(r*t%2+r*t%3)%2===0;case e.Patterns.PATTERN111:return(r*t%3+(r+t)%2)%2===0;default:throw new Error("bad maskPattern:"+a)}}e.applyMask=function(a,r){const t=r.size;for(let n=0;n<t;n++)for(let s=0;s<t;s++)r.isReserved(s,n)||r.xor(s,n,o(a,s,n))},e.getBestMask=function(a,r){const t=Object.keys(e.Patterns).length;let n=0,s=1/0;for(let d=0;d<t;d++){r(d),e.applyMask(d,a);const u=e.getPenaltyN1(a)+e.getPenaltyN2(a)+e.getPenaltyN3(a)+e.getPenaltyN4(a);e.applyMask(d,a),u<s&&(s=u,n=d)}return n}})(vi)),vi}var Jt={},xi;function eo(){if(xi)return Jt;xi=1;const e=Qe(),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Jt.getBlocksCount=function(a,r){switch(r){case e.L:return i[(a-1)*4+0];case e.M:return i[(a-1)*4+1];case e.Q:return i[(a-1)*4+2];case e.H:return i[(a-1)*4+3];default:return}},Jt.getTotalCodewordsCount=function(a,r){switch(r){case e.L:return o[(a-1)*4+0];case e.M:return o[(a-1)*4+1];case e.Q:return o[(a-1)*4+2];case e.H:return o[(a-1)*4+3];default:return}},Jt}var $i={},jt={},Ci;function Vo(){if(Ci)return jt;Ci=1;const e=new Uint8Array(512),i=new Uint8Array(256);return(function(){let o=1;for(let a=0;a<255;a++)e[a]=o,i[o]=a,o<<=1,o&256&&(o^=285);for(let a=255;a<512;a++)e[a]=e[a-255]})(),jt.log=function(o){if(o<1)throw new Error("log("+o+")");return i[o]},jt.exp=function(o){return e[o]},jt.mul=function(o,a){return o===0||a===0?0:e[i[o]+i[a]]},jt}var ki;function Ko(){return ki||(ki=1,(function(e){const i=Vo();e.mul=function(o,a){const r=new Uint8Array(o.length+a.length-1);for(let t=0;t<o.length;t++)for(let n=0;n<a.length;n++)r[t+n]^=i.mul(o[t],a[n]);return r},e.mod=function(o,a){let r=new Uint8Array(o);for(;r.length-a.length>=0;){const t=r[0];for(let s=0;s<a.length;s++)r[s]^=i.mul(a[s],t);let n=0;for(;n<r.length&&r[n]===0;)n++;r=r.slice(n)}return r},e.generateECPolynomial=function(o){let a=new Uint8Array([1]);for(let r=0;r<o;r++)a=e.mul(a,new Uint8Array([1,i.exp(r)]));return a}})($i)),$i}var Le,Ri;function Ho(){if(Ri)return Le;Ri=1;const e=Ko();function i(o){this.genPoly=void 0,this.degree=o,this.degree&&this.initialize(this.degree)}return i.prototype.initialize=function(o){this.degree=o,this.genPoly=e.generateECPolynomial(this.degree)},i.prototype.encode=function(o){if(!this.genPoly)throw new Error("Encoder not initialized");const a=new Uint8Array(o.length+this.degree);a.set(o);const r=e.mod(a,this.genPoly),t=this.degree-r.length;if(t>0){const n=new Uint8Array(this.degree);return n.set(r,t),n}return r},Le=i,Le}var Ei={},Ii={},Ti={},Si;function io(){return Si||(Si=1,Ti.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Ti}var rt={},Li;function oo(){if(Li)return rt;Li=1;const e="[0-9]+",i="[A-Z $%*+\\-./:]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const a="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+`)(?:.|[\r
]))+`;rt.KANJI=new RegExp(o,"g"),rt.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),rt.BYTE=new RegExp(a,"g"),rt.NUMERIC=new RegExp(e,"g"),rt.ALPHANUMERIC=new RegExp(i,"g");const r=new RegExp("^"+o+"$"),t=new RegExp("^"+e+"$"),n=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return rt.testKanji=function(s){return r.test(s)},rt.testNumeric=function(s){return t.test(s)},rt.testAlphanumeric=function(s){return n.test(s)},rt}var Bi;function Et(){return Bi||(Bi=1,(function(e){const i=io(),o=oo();e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(r,t){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!i.isValid(t))throw new Error("Invalid version: "+t);return t>=1&&t<10?r.ccBits[0]:t<27?r.ccBits[1]:r.ccBits[2]},e.getBestModeForData=function(r){return o.testNumeric(r)?e.NUMERIC:o.testAlphanumeric(r)?e.ALPHANUMERIC:o.testKanji(r)?e.KANJI:e.BYTE},e.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},e.isValid=function(r){return r&&r.bit&&r.ccBits};function a(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(r,t){if(e.isValid(r))return r;try{return a(r)}catch{return t}}})(Ii)),Ii}var zi;function Fo(){return zi||(zi=1,(function(e){const i=Rt(),o=eo(),a=Qe(),r=Et(),t=io(),n=7973,s=i.getBCHDigit(n);function d(p,T,f){for(let v=1;v<=40;v++)if(T<=e.getCapacity(v,f,p))return v}function u(p,T){return r.getCharCountIndicator(p,T)+4}function j(p,T){let f=0;return p.forEach(function(v){const M=u(v.mode,T);f+=M+v.getBitsLength()}),f}function k(p,T){for(let f=1;f<=40;f++)if(j(p,f)<=e.getCapacity(f,T,r.MIXED))return f}e.from=function(p,T){return t.isValid(p)?parseInt(p,10):T},e.getCapacity=function(p,T,f){if(!t.isValid(p))throw new Error("Invalid QR Code version");typeof f>"u"&&(f=r.BYTE);const v=i.getSymbolTotalCodewords(p),M=o.getTotalCodewordsCount(p,T),h=(v-M)*8;if(f===r.MIXED)return h;const b=h-u(f,p);switch(f){case r.NUMERIC:return Math.floor(b/10*3);case r.ALPHANUMERIC:return Math.floor(b/11*2);case r.KANJI:return Math.floor(b/13);case r.BYTE:default:return Math.floor(b/8)}},e.getBestVersionForData=function(p,T){let f;const v=a.from(T,a.M);if(Array.isArray(p)){if(p.length>1)return k(p,v);if(p.length===0)return 1;f=p[0]}else f=p;return d(f.mode,f.getLength(),v)},e.getEncodedBits=function(p){if(!t.isValid(p)||p<7)throw new Error("Invalid QR Code version");let T=p<<12;for(;i.getBCHDigit(T)-s>=0;)T^=n<<i.getBCHDigit(T)-s;return p<<12|T}})(Ei)),Ei}var Be={},Pi;function Yo(){if(Pi)return Be;Pi=1;const e=Rt(),i=1335,o=21522,a=e.getBCHDigit(i);return Be.getEncodedBits=function(r,t){const n=r.bit<<3|t;let s=n<<10;for(;e.getBCHDigit(s)-a>=0;)s^=i<<e.getBCHDigit(s)-a;return(n<<10|s)^o},Be}var Ai={},ze,ji;function Jo(){if(ji)return ze;ji=1;const e=Et();function i(o){this.mode=e.NUMERIC,this.data=o.toString()}return i.getBitsLength=function(o){return 10*Math.floor(o/3)+(o%3?o%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(o){let a,r,t;for(a=0;a+3<=this.data.length;a+=3)r=this.data.substr(a,3),t=parseInt(r,10),o.put(t,10);const n=this.data.length-a;n>0&&(r=this.data.substr(a),t=parseInt(r,10),o.put(t,n*3+1))},ze=i,ze}var Pe,Ni;function Xo(){if(Ni)return Pe;Ni=1;const e=Et(),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(a){this.mode=e.ALPHANUMERIC,this.data=a}return o.getBitsLength=function(a){return 11*Math.floor(a/2)+6*(a%2)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(a){let r;for(r=0;r+2<=this.data.length;r+=2){let t=i.indexOf(this.data[r])*45;t+=i.indexOf(this.data[r+1]),a.put(t,11)}this.data.length%2&&a.put(i.indexOf(this.data[r]),6)},Pe=o,Pe}var Ae,Oi;function Go(){if(Oi)return Ae;Oi=1;const e=yo(),i=Et();function o(a){this.mode=i.BYTE,typeof a=="string"&&(a=e(a)),this.data=new Uint8Array(a)}return o.getBitsLength=function(a){return a*8},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(a){for(let r=0,t=this.data.length;r<t;r++)a.put(this.data[r],8)},Ae=o,Ae}var je,Mi;function Qo(){if(Mi)return je;Mi=1;const e=Et(),i=Rt();function o(a){this.mode=e.KANJI,this.data=a}return o.getBitsLength=function(a){return a*13},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(a){let r;for(r=0;r<this.data.length;r++){let t=i.toSJIS(this.data[r]);if(t>=33088&&t<=40956)t-=33088;else if(t>=57408&&t<=60351)t-=49472;else throw new Error("Invalid SJIS character: "+this.data[r]+`
Make sure your charset is UTF-8`);t=(t>>>8&255)*192+(t&255),a.put(t,13)}},je=o,je}var Wi;function Zo(){return Wi||(Wi=1,(function(e){const i=Et(),o=Jo(),a=Xo(),r=Go(),t=Qo(),n=oo(),s=Rt(),d=mo();function u(h){return unescape(encodeURIComponent(h)).length}function j(h,b,w){const y=[];let D;for(;(D=h.exec(w))!==null;)y.push({data:D[0],index:D.index,mode:b,length:D[0].length});return y}function k(h){const b=j(n.NUMERIC,i.NUMERIC,h),w=j(n.ALPHANUMERIC,i.ALPHANUMERIC,h);let y,D;return s.isKanjiModeEnabled()?(y=j(n.BYTE,i.BYTE,h),D=j(n.KANJI,i.KANJI,h)):(y=j(n.BYTE_KANJI,i.BYTE,h),D=[]),b.concat(w,y,D).sort(function(g,R){return g.index-R.index}).map(function(g){return{data:g.data,mode:g.mode,length:g.length}})}function p(h,b){switch(b){case i.NUMERIC:return o.getBitsLength(h);case i.ALPHANUMERIC:return a.getBitsLength(h);case i.KANJI:return t.getBitsLength(h);case i.BYTE:return r.getBitsLength(h)}}function T(h){return h.reduce(function(b,w){const y=b.length-1>=0?b[b.length-1]:null;return y&&y.mode===w.mode?(b[b.length-1].data+=w.data,b):(b.push(w),b)},[])}function f(h){const b=[];for(let w=0;w<h.length;w++){const y=h[w];switch(y.mode){case i.NUMERIC:b.push([y,{data:y.data,mode:i.ALPHANUMERIC,length:y.length},{data:y.data,mode:i.BYTE,length:y.length}]);break;case i.ALPHANUMERIC:b.push([y,{data:y.data,mode:i.BYTE,length:y.length}]);break;case i.KANJI:b.push([y,{data:y.data,mode:i.BYTE,length:u(y.data)}]);break;case i.BYTE:b.push([{data:y.data,mode:i.BYTE,length:u(y.data)}])}}return b}function v(h,b){const w={},y={start:{}};let D=["start"];for(let g=0;g<h.length;g++){const R=h[g],L=[];for(let m=0;m<R.length;m++){const S=R[m],E=""+g+m;L.push(E),w[E]={node:S,lastCount:0},y[E]={};for(let C=0;C<D.length;C++){const x=D[C];w[x]&&w[x].node.mode===S.mode?(y[x][E]=p(w[x].lastCount+S.length,S.mode)-p(w[x].lastCount,S.mode),w[x].lastCount+=S.length):(w[x]&&(w[x].lastCount=S.length),y[x][E]=p(S.length,S.mode)+4+i.getCharCountIndicator(S.mode,b))}}D=L}for(let g=0;g<D.length;g++)y[D[g]].end=0;return{map:y,table:w}}function M(h,b){let w;const y=i.getBestModeForData(h);if(w=i.from(b,y),w!==i.BYTE&&w.bit<y.bit)throw new Error('"'+h+'" cannot be encoded with mode '+i.toString(w)+`.
 Suggested mode is: `+i.toString(y));switch(w===i.KANJI&&!s.isKanjiModeEnabled()&&(w=i.BYTE),w){case i.NUMERIC:return new o(h);case i.ALPHANUMERIC:return new a(h);case i.KANJI:return new t(h);case i.BYTE:return new r(h)}}e.fromArray=function(h){return h.reduce(function(b,w){return typeof w=="string"?b.push(M(w,null)):w.data&&b.push(M(w.data,w.mode)),b},[])},e.fromString=function(h,b){const w=k(h,s.isKanjiModeEnabled()),y=f(w),D=v(y,b),g=d.find_path(D.map,"start","end"),R=[];for(let L=1;L<g.length-1;L++)R.push(D.table[g[L]].node);return e.fromArray(T(R))},e.rawSplit=function(h){return e.fromArray(k(h,s.isKanjiModeEnabled()))}})(Ai)),Ai}var Ui;function tr(){if(Ui)return Ee;Ui=1;const e=Rt(),i=Qe(),o=Wo(),a=Uo(),r=Do(),t=_o(),n=qo(),s=eo(),d=Ho(),u=Fo(),j=Yo(),k=Et(),p=Zo();function T(g,R){const L=g.size,m=t.getPositions(R);for(let S=0;S<m.length;S++){const E=m[S][0],C=m[S][1];for(let x=-1;x<=7;x++)if(!(E+x<=-1||L<=E+x))for(let A=-1;A<=7;A++)C+A<=-1||L<=C+A||(x>=0&&x<=6&&(A===0||A===6)||A>=0&&A<=6&&(x===0||x===6)||x>=2&&x<=4&&A>=2&&A<=4?g.set(E+x,C+A,!0,!0):g.set(E+x,C+A,!1,!0))}}function f(g){const R=g.size;for(let L=8;L<R-8;L++){const m=L%2===0;g.set(L,6,m,!0),g.set(6,L,m,!0)}}function v(g,R){const L=r.getPositions(R);for(let m=0;m<L.length;m++){const S=L[m][0],E=L[m][1];for(let C=-2;C<=2;C++)for(let x=-2;x<=2;x++)C===-2||C===2||x===-2||x===2||C===0&&x===0?g.set(S+C,E+x,!0,!0):g.set(S+C,E+x,!1,!0)}}function M(g,R){const L=g.size,m=u.getEncodedBits(R);let S,E,C;for(let x=0;x<18;x++)S=Math.floor(x/3),E=x%3+L-8-3,C=(m>>x&1)===1,g.set(S,E,C,!0),g.set(E,S,C,!0)}function h(g,R,L){const m=g.size,S=j.getEncodedBits(R,L);let E,C;for(E=0;E<15;E++)C=(S>>E&1)===1,E<6?g.set(E,8,C,!0):E<8?g.set(E+1,8,C,!0):g.set(m-15+E,8,C,!0),E<8?g.set(8,m-E-1,C,!0):E<9?g.set(8,15-E-1+1,C,!0):g.set(8,15-E-1,C,!0);g.set(m-8,8,1,!0)}function b(g,R){const L=g.size;let m=-1,S=L-1,E=7,C=0;for(let x=L-1;x>0;x-=2)for(x===6&&x--;;){for(let A=0;A<2;A++)if(!g.isReserved(S,x-A)){let wt=!1;C<R.length&&(wt=(R[C]>>>E&1)===1),g.set(S,x-A,wt),E--,E===-1&&(C++,E=7)}if(S+=m,S<0||L<=S){S-=m,m=-m;break}}}function w(g,R,L){const m=new o;L.forEach(function(A){m.put(A.mode.bit,4),m.put(A.getLength(),k.getCharCountIndicator(A.mode,g)),A.write(m)});const S=e.getSymbolTotalCodewords(g),E=s.getTotalCodewordsCount(g,R),C=(S-E)*8;for(m.getLengthInBits()+4<=C&&m.put(0,4);m.getLengthInBits()%8!==0;)m.putBit(0);const x=(C-m.getLengthInBits())/8;for(let A=0;A<x;A++)m.put(A%2?17:236,8);return y(m,g,R)}function y(g,R,L){const m=e.getSymbolTotalCodewords(R),S=s.getTotalCodewordsCount(R,L),E=m-S,C=s.getBlocksCount(R,L),x=m%C,A=C-x,wt=Math.floor(m/C),Pt=Math.floor(E/C),ho=Pt+1,ti=wt-Pt,po=new d(ti);let xe=0;const Yt=new Array(C),ei=new Array(C);let $e=0;const go=new Uint8Array(g.buffer);for(let It=0;It<C;It++){const ke=It<A?Pt:ho;Yt[It]=go.slice(xe,xe+ke),ei[It]=po.encode(Yt[It]),xe+=ke,$e=Math.max($e,ke)}const Ce=new Uint8Array(m);let ii=0,lt,ct;for(lt=0;lt<$e;lt++)for(ct=0;ct<C;ct++)lt<Yt[ct].length&&(Ce[ii++]=Yt[ct][lt]);for(lt=0;lt<ti;lt++)for(ct=0;ct<C;ct++)Ce[ii++]=ei[ct][lt];return Ce}function D(g,R,L,m){let S;if(Array.isArray(g))S=p.fromArray(g);else if(typeof g=="string"){let wt=R;if(!wt){const Pt=p.rawSplit(g);wt=u.getBestVersionForData(Pt,L)}S=p.fromString(g,wt||40)}else throw new Error("Invalid data");const E=u.getBestVersionForData(S,L);if(!E)throw new Error("The amount of data is too big to be stored in a QR Code");if(!R)R=E;else if(R<E)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+E+`.
`);const C=w(R,L,S),x=e.getSymbolSize(R),A=new a(x);return T(A,R),f(A),v(A,R),h(A,L,0),R>=7&&M(A,R),b(A,C),isNaN(m)&&(m=n.getBestMask(A,h.bind(null,A,L))),n.applyMask(m,A),h(A,L,m),{modules:A,version:R,errorCorrectionLevel:L,maskPattern:m,segments:S}}return Ee.create=function(g,R){if(typeof g>"u"||g==="")throw new Error("No input text");let L=i.M,m,S;return typeof R<"u"&&(L=i.from(R.errorCorrectionLevel,i.M),m=u.from(R.version),S=n.from(R.maskPattern),R.toSJISFunc&&e.setToSJISFunction(R.toSJISFunc)),D(g,m,L,S)},Ee}var Di={},_i={},qi;function ro(){return qi||(qi=1,(function(e){function i(o){if(typeof o=="number"&&(o=o.toString()),typeof o!="string")throw new Error("Color should be defined as hex string");let a=o.slice().replace("#","").split("");if(a.length<3||a.length===5||a.length>8)throw new Error("Invalid hex color: "+o);(a.length===3||a.length===4)&&(a=Array.prototype.concat.apply([],a.map(function(t){return[t,t]}))),a.length===6&&a.push("F","F");const r=parseInt(a.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+a.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});const a=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,r=o.width&&o.width>=21?o.width:void 0,t=o.scale||4;return{width:r,scale:r?4:t,margin:a,color:{dark:i(o.color.dark||"#000000ff"),light:i(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,a){return a.width&&a.width>=o+a.margin*2?a.width/(o+a.margin*2):a.scale},e.getImageWidth=function(o,a){const r=e.getScale(o,a);return Math.floor((o+a.margin*2)*r)},e.qrToImageData=function(o,a,r){const t=a.modules.size,n=a.modules.data,s=e.getScale(t,r),d=Math.floor((t+r.margin*2)*s),u=r.margin*s,j=[r.color.light,r.color.dark];for(let k=0;k<d;k++)for(let p=0;p<d;p++){let T=(k*d+p)*4,f=r.color.light;if(k>=u&&p>=u&&k<d-u&&p<d-u){const v=Math.floor((k-u)/s),M=Math.floor((p-u)/s);f=j[n[v*t+M]?1:0]}o[T++]=f.r,o[T++]=f.g,o[T++]=f.b,o[T]=f.a}}})(_i)),_i}var Vi;function er(){return Vi||(Vi=1,(function(e){const i=ro();function o(r,t,n){r.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=n,t.width=n,t.style.height=n+"px",t.style.width=n+"px"}function a(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(r,t,n){let s=n,d=t;typeof s>"u"&&(!t||!t.getContext)&&(s=t,t=void 0),t||(d=a()),s=i.getOptions(s);const u=i.getImageWidth(r.modules.size,s),j=d.getContext("2d"),k=j.createImageData(u,u);return i.qrToImageData(k.data,r,s),o(j,d,u),j.putImageData(k,0,0),d},e.renderToDataURL=function(r,t,n){let s=n;typeof s>"u"&&(!t||!t.getContext)&&(s=t,t=void 0),s||(s={});const d=e.render(r,t,s),u=s.type||"image/png",j=s.rendererOpts||{};return d.toDataURL(u,j.quality)}})(Di)),Di}var Ne={},Ki;function ir(){if(Ki)return Ne;Ki=1;const e=ro();function i(r,t){const n=r.a/255,s=t+'="'+r.hex+'"';return n<1?s+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':s}function o(r,t,n){let s=r+t;return typeof n<"u"&&(s+=" "+n),s}function a(r,t,n){let s="",d=0,u=!1,j=0;for(let k=0;k<r.length;k++){const p=Math.floor(k%t),T=Math.floor(k/t);!p&&!u&&(u=!0),r[k]?(j++,k>0&&p>0&&r[k-1]||(s+=u?o("M",p+n,.5+T+n):o("m",d,0),d=0,u=!1),p+1<t&&r[k+1]||(s+=o("h",j),j=0)):d++}return s}return Ne.render=function(r,t,n){const s=e.getOptions(t),d=r.modules.size,u=r.modules.data,j=d+s.margin*2,k=s.color.light.a?"<path "+i(s.color.light,"fill")+' d="M0 0h'+j+"v"+j+'H0z"/>':"",p="<path "+i(s.color.dark,"stroke")+' d="'+a(u,d,s.margin)+'"/>',T='viewBox="0 0 '+j+" "+j+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(s.width?'width="'+s.width+'" height="'+s.width+'" ':"")+T+' shape-rendering="crispEdges">'+k+p+`</svg>
`;return typeof n=="function"&&n(null,f),f},Ne}var Hi;function or(){if(Hi)return Tt;Hi=1;const e=Mo(),i=tr(),o=er(),a=ir();function r(t,n,s,d,u){const j=[].slice.call(arguments,1),k=j.length,p=typeof j[k-1]=="function";if(!p&&!e())throw new Error("Callback required as last argument");if(p){if(k<2)throw new Error("Too few arguments provided");k===2?(u=s,s=n,n=d=void 0):k===3&&(n.getContext&&typeof u>"u"?(u=d,d=void 0):(u=d,d=s,s=n,n=void 0))}else{if(k<1)throw new Error("Too few arguments provided");return k===1?(s=n,n=d=void 0):k===2&&!n.getContext&&(d=s,s=n,n=void 0),new Promise(function(T,f){try{const v=i.create(s,d);T(t(v,n,d))}catch(v){f(v)}})}try{const T=i.create(s,d);u(null,t(T,n,d))}catch(T){u(T)}}return Tt.create=i.create,Tt.toCanvas=r.bind(null,o.render),Tt.toDataURL=r.bind(null,o.renderToDataURL),Tt.toString=r.bind(null,function(t,n,s){return a.render(t,s)}),Tt}var rr=or();const nr=vo(rr),ar=.1,Fi=2.5,ut=7;function Oe(e,i,o){return e===i?!1:(e-i<0?i-e:e-i)<=o+ar}function sr(e,i){const o=Array.prototype.slice.call(nr.create(e,{errorCorrectionLevel:i}).modules.data,0),a=Math.sqrt(o.length);return o.reduce((r,t,n)=>(n%a===0?r.push([t]):r[r.length-1].push(t))&&r,[])}const lr={generate({uri:e,size:i,logoSize:o,dotColor:a="#141414"}){const r="transparent",t=[],n=sr(e,"Q"),s=i/n.length,d=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];d.forEach(({x:f,y:v})=>{const M=(n.length-ut)*s*f,h=(n.length-ut)*s*v,b=.45;for(let w=0;w<d.length;w+=1){const y=s*(ut-w*2);t.push(Nt`
            <rect
              fill=${w===2?a:r}
              width=${w===0?y-5:y}
              rx= ${w===0?(y-5)*b:y*b}
              ry= ${w===0?(y-5)*b:y*b}
              stroke=${a}
              stroke-width=${w===0?5:0}
              height=${w===0?y-5:y}
              x= ${w===0?h+s*w+5/2:h+s*w}
              y= ${w===0?M+s*w+5/2:M+s*w}
            />
          `)}});const u=Math.floor((o+25)/s),j=n.length/2-u/2,k=n.length/2+u/2-1,p=[];n.forEach((f,v)=>{f.forEach((M,h)=>{if(n[v][h]&&!(v<ut&&h<ut||v>n.length-(ut+1)&&h<ut||v<ut&&h>n.length-(ut+1))&&!(v>j&&v<k&&h>j&&h<k)){const b=v*s+s/2,w=h*s+s/2;p.push([b,w])}})});const T={};return p.forEach(([f,v])=>{T[f]?T[f]?.push(v):T[f]=[v]}),Object.entries(T).map(([f,v])=>{const M=v.filter(h=>v.every(b=>!Oe(h,b,s)));return[Number(f),M]}).forEach(([f,v])=>{v.forEach(M=>{t.push(Nt`<circle cx=${f} cy=${M} fill=${a} r=${s/Fi} />`)})}),Object.entries(T).filter(([f,v])=>v.length>1).map(([f,v])=>{const M=v.filter(h=>v.some(b=>Oe(h,b,s)));return[Number(f),M]}).map(([f,v])=>{v.sort((h,b)=>h<b?-1:1);const M=[];for(const h of v){const b=M.find(w=>w.some(y=>Oe(h,y,s)));b?b.push(h):M.push([h])}return[f,M.map(h=>[h[0],h[h.length-1]])]}).forEach(([f,v])=>{v.forEach(([M,h])=>{t.push(Nt`
              <line
                x1=${f}
                x2=${f}
                y1=${M}
                y2=${h}
                stroke=${a}
                stroke-width=${s/(Fi/2)}
                stroke-linecap="round"
              />
            `)})}),t}},cr=O`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var gt=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};const ur="#3396ff";let et=class extends z{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??ur}
    `,l`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return Nt`
      <svg height=${e} width=${e}>
        ${lr.generate({uri:this.uri,size:e,logoSize:this.arenaClear?0:e/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?l`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:l`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};et.styles=[q,cr];gt([c()],et.prototype,"uri",void 0);gt([c({type:Number})],et.prototype,"size",void 0);gt([c()],et.prototype,"theme",void 0);gt([c()],et.prototype,"imageSrc",void 0);gt([c()],et.prototype,"alt",void 0);gt([c()],et.prototype,"color",void 0);gt([c({type:Boolean})],et.prototype,"arenaClear",void 0);gt([c({type:Boolean})],et.prototype,"farcaster",void 0);et=gt([I("wui-qr-code")],et);const dr=O`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Kt=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let yt=class extends z{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,l`<slot></slot>`}};yt.styles=[dr];Kt([c()],yt.prototype,"width",void 0);Kt([c()],yt.prototype,"height",void 0);Kt([c()],yt.prototype,"borderRadius",void 0);Kt([c()],yt.prototype,"variant",void 0);yt=Kt([I("wui-shimmer")],yt);const hr=O`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`;var pr=function(e,i,o,a){var r=arguments.length,t=r<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let We=class extends z{render(){return l`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0","0","l","0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `}};We.styles=[q,Y,hr];We=pr([I("wui-ux-by-reown")],We);const gr=O`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var wr=function(e,i,o,a){var r=arguments.length,t=r<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let Ue=class extends V{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),tt.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,i=this.wallet?this.wallet.name:void 0;return N.setWcLinking(void 0),N.setRecentWallet(this.wallet),l` <wui-qr-code
      size=${e}
      theme=${Me.state.themeMode}
      uri=${this.uri}
      imageSrc=${$(H.getWalletImage(this.wallet))}
      color=${$(Me.state.themeVariables["--w3m-qr-color"])}
      alt=${$(i)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return l`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Ue.styles=gr;Ue=wr([I("w3m-connecting-wc-qrcode")],Ue);var fr=function(e,i,o,a){var r=arguments.length,t=r<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let Yi=class extends z{constructor(){if(super(),this.wallet=_.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");tt.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${$(H.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Yi=fr([I("w3m-connecting-wc-unsupported")],Yi);var no=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let De=class extends V{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(N.subscribeKey("wcUri",()=>{this.updateLoadingState()})),tt.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:i}=this.wallet,{redirect:o,href:a}=P.formatUniversalUrl(e,this.uri);N.setWcLinking({name:i,href:a}),N.setRecentWallet(this.wallet),P.openHref(o,"_blank")}catch{this.error=!0}}};no([B()],De.prototype,"isLoading",void 0);De=no([I("w3m-connecting-wc-web")],De);var ve=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let _t=class extends z{constructor(){super(),this.wallet=_.state.data?.wallet,this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!mt.state.siwx,this.determinePlatforms(),this.initializeConnection()}render(){return l`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `}async initializeConnection(e=!1){if(!(this.platform==="browser"||mt.state.manualWCControl&&!e))try{const{wcPairingExpiry:i,status:o}=N.state;(e||P.isPairingExpired(i)||o==="connecting")&&(await N.connectWalletConnect(),this.isSiwxEnabled||Gi.close())}catch(i){tt.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:i?.message??"Unknown"}}),N.setWcError(!0),Xt.showError(i.message??"Connection error"),N.resetWcConnection(),_.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:e,desktop_link:i,webapp_link:o,injected:a,rdns:r}=this.wallet,t=a?.map(({injected_id:T})=>T).filter(Boolean),n=[...r?[r]:t??[]],s=mt.state.isUniversalProvider?!1:n.length,d=e,u=o,j=N.checkInstalled(n),k=s&&j,p=i&&!P.isMobile();k&&!ri.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(P.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),p&&this.platforms.push("desktop"),!k&&s&&!ri.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return l`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return l`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return l`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return l`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return l`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return l`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?l`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const i=this.shadowRoot?.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ve([B()],_t.prototype,"platform",void 0);ve([B()],_t.prototype,"platforms",void 0);ve([B()],_t.prototype,"isSiwxEnabled",void 0);_t=ve([I("w3m-connecting-wc-view")],_t);var ao=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let _e=class extends z{constructor(){super(...arguments),this.isMobile=P.isMobile()}render(){if(this.isMobile){const{featured:e,recommended:i}=U.state,{customWallets:o}=mt.state,a=de.getRecentWallets(),r=e.length||i.length||o?.length||a.length;return l`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${r?l`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return l`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};ao([B()],_e.prototype,"isMobile",void 0);_e=ao([I("w3m-connecting-wc-basic-view")],_e);const br=O`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var so=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let ae=class extends z{constructor(){super(...arguments),this.inputElementRef=Ke(),this.checked=void 0}render(){return l`
      <label>
        <input
          ${He(this.inputElementRef)}
          type="checkbox"
          ?checked=${$(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};ae.styles=[q,Y,fo,br];so([c({type:Boolean})],ae.prototype,"checked",void 0);ae=so([I("wui-switch")],ae);const mr=O`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var lo=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let se=class extends z{constructor(){super(...arguments),this.checked=void 0}render(){return l`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${$(this.checked)}></wui-switch>
      </button>
    `}};se.styles=[q,Y,mr];lo([c({type:Boolean})],se.prototype,"checked",void 0);se=lo([I("wui-certified-switch")],se);const vr=O`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var co=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let le=class extends z{constructor(){super(...arguments),this.icon="copy"}render(){return l`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};le.styles=[q,Y,vr];co([c()],le.prototype,"icon",void 0);le=co([I("wui-input-element")],le);const yr=O`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var st=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let Q=class extends z{constructor(){super(...arguments),this.inputElementRef=Ke(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-padding-right-${this.inputRightPadding}`,i={[`wui-size-${this.size}`]:!0,[e]:!!this.inputRightPadding};return l`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${He(this.inputElementRef)}
        class=${wo(i)}
        type=${this.type}
        enterkeyhint=${$(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${$(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?l`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};Q.styles=[q,Y,yr];st([c()],Q.prototype,"size",void 0);st([c()],Q.prototype,"icon",void 0);st([c({type:Boolean})],Q.prototype,"disabled",void 0);st([c()],Q.prototype,"placeholder",void 0);st([c()],Q.prototype,"type",void 0);st([c()],Q.prototype,"keyHint",void 0);st([c()],Q.prototype,"value",void 0);st([c()],Q.prototype,"inputRightPadding",void 0);st([c()],Q.prototype,"tabIdx",void 0);Q=st([I("wui-input-text")],Q);const xr=O`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var $r=function(e,i,o,a){var r=arguments.length,t=r<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let qe=class extends z{constructor(){super(...arguments),this.inputComponentRef=Ke()}render(){return l`
      <wui-input-text
        ${He(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value?.inputElementRef.value;e&&(e.value="",e.focus(),e.dispatchEvent(new Event("input")))}};qe.styles=[q,xr];qe=$r([I("wui-search-bar")],qe);const Cr=Nt`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,kr=O`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var uo=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let ce=class extends z{constructor(){super(...arguments),this.type="wallet"}render(){return l`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?l` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Cr}`:l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};ce.styles=[q,Y,kr];uo([c()],ce.prototype,"type",void 0);ce=uo([I("wui-card-select-loader")],ce);const Rr=O`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Z=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let F=class extends z{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&dt.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&dt.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&dt.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&dt.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&dt.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&dt.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&dt.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&dt.getSpacingStyles(this.margin,3)};
    `,l`<slot></slot>`}};F.styles=[q,Rr];Z([c()],F.prototype,"gridTemplateRows",void 0);Z([c()],F.prototype,"gridTemplateColumns",void 0);Z([c()],F.prototype,"justifyItems",void 0);Z([c()],F.prototype,"alignItems",void 0);Z([c()],F.prototype,"justifyContent",void 0);Z([c()],F.prototype,"alignContent",void 0);Z([c()],F.prototype,"columnGap",void 0);Z([c()],F.prototype,"rowGap",void 0);Z([c()],F.prototype,"gap",void 0);Z([c()],F.prototype,"padding",void 0);Z([c()],F.prototype,"margin",void 0);F=Z([I("wui-grid")],F);const Er=O`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Ht=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let xt=class extends z{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const e=this.wallet?.badge_type==="certified";return l`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${$(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?l`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():l`
      <wui-wallet-image
        size="md"
        imageSrc=${$(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=H.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await H.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};xt.styles=Er;Ht([B()],xt.prototype,"visible",void 0);Ht([B()],xt.prototype,"imageSrc",void 0);Ht([B()],xt.prototype,"imageLoading",void 0);Ht([c()],xt.prototype,"wallet",void 0);xt=Ht([I("w3m-all-wallets-list-item")],xt);const Ir=O`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Ft=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};const Ji="local-paginator";let $t=class extends z{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!U.state.wallets.length,this.wallets=U.state.wallets,this.recommended=U.state.recommended,this.featured=U.state.featured,this.unsubscribe.push(U.subscribeKey("wallets",e=>this.wallets=e),U.subscribeKey("recommended",e=>this.recommended=e),U.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return l`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const e=this.shadowRoot?.querySelector("wui-grid");e&&(await U.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,i){return[...Array(e)].map(()=>l`
        <wui-card-select-loader type="wallet" id=${$(i)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=P.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return Ve.markWalletsAsInstalled(e).map(i=>l`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(i)}
          .wallet=${i}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:i,featured:o,count:a}=U.state,r=window.innerWidth<352?3:4,t=e.length+i.length;let n=Math.ceil(t/r)*r-t+r;return n-=e.length?o.length%r:0,a===0&&o.length>0?null:a===0||[...o,...e,...i].length<a?this.shimmerTemplate(n,Ji):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${Ji}`);e&&(this.paginationObserver=new IntersectionObserver(([i])=>{if(i?.isIntersecting&&!this.loading){const{page:o,count:a,wallets:r}=U.state;r.length<a&&U.fetchWallets({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){W.selectWalletConnector(e)}};$t.styles=Ir;Ft([B()],$t.prototype,"loading",void 0);Ft([B()],$t.prototype,"wallets",void 0);Ft([B()],$t.prototype,"recommended",void 0);Ft([B()],$t.prototype,"featured",void 0);$t=Ft([I("w3m-all-wallets-list")],$t);const Tr=O`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var ye=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let zt=class extends z{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?l`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await U.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=U.state,i=Ve.markWalletsAsInstalled(e);return e.length?l`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${i.map(o=>l`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(o)}
              .wallet=${o}
              data-testid="wallet-search-item-${o.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:l`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){W.selectWalletConnector(e)}};zt.styles=Tr;ye([B()],zt.prototype,"loading",void 0);ye([c()],zt.prototype,"query",void 0);ye([c()],zt.prototype,"badge",void 0);zt=ye([I("w3m-all-wallets-search")],zt);var Ze=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let ue=class extends z{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=P.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return l`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?l`<w3m-all-wallets-search
            query=${this.search}
            badge=${$(this.badge)}
          ></w3m-all-wallets-search>`:l`<w3m-all-wallets-list badge=${$(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",Xt.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return P.isMobile()?l`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){_.push("ConnectingWalletConnect")}};Ze([B()],ue.prototype,"search",void 0);Ze([B()],ue.prototype,"badge",void 0);ue=Ze([I("w3m-all-wallets-view")],ue);const Sr=O`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var ot=function(e,i,o,a){var r=arguments.length,t=r<3?i:a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let X=class extends z{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return l`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${$(this.iconVariant)}
        tabindex=${$(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return l`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return l`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",i=this.iconVariant==="square-blue"?"mdl":"md",o=this.iconSize?this.iconSize:i;return l`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${o}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${i}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?l`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:l``}chevronTemplate(){return this.chevron?l`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};X.styles=[q,Y,Sr];ot([c()],X.prototype,"icon",void 0);ot([c()],X.prototype,"iconSize",void 0);ot([c()],X.prototype,"tabIdx",void 0);ot([c()],X.prototype,"variant",void 0);ot([c()],X.prototype,"iconVariant",void 0);ot([c({type:Boolean})],X.prototype,"disabled",void 0);ot([c()],X.prototype,"imageSrc",void 0);ot([c()],X.prototype,"alt",void 0);ot([c({type:Boolean})],X.prototype,"chevron",void 0);ot([c({type:Boolean})],X.prototype,"loading",void 0);X=ot([I("wui-list-item")],X);var Lr=function(e,i,o,a){var r=arguments.length,t=r<3?i:a===null?a=Object.getOwnPropertyDescriptor(i,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,i,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(t=(r<3?n(t):r>3?n(i,o,t):n(i,o))||t);return r>3&&t&&Object.defineProperty(i,o,t),t};let Xi=class extends z{constructor(){super(...arguments),this.wallet=_.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return l`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?l`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?l`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?l`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?l`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&P.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&P.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&P.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&P.openHref(this.wallet.homepage,"_blank")}};Xi=Lr([I("w3m-downloads-view")],Xi);export{ue as W3mAllWalletsView,_e as W3mConnectingWcBasicView,Xi as W3mDownloadsView};
