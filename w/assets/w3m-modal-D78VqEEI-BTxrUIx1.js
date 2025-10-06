import{r as v,L as o,o as pe,k as g,T as ue,c as me}from"./lit-element-DrneaN_7-paRhwip2.js";import{G as M,M as d,D as w}from"./class-map-BbR7GrmK-BwHltl4q.js";import{O as W,M as f,g as m,C as V,A as L,T as he,p as ve,i as T,a as ge,R as l,l as Z,f as fe,w as be,r as I,e as ee,k as te,m as z,c as H,h as ye,n as C,E as G,o as q}from"./core-BZzw8R4f-Drrs_3_m.js";import{h as xe,x as p}from"./index-UOvy4usi-Beh15gbK.js";import"./http-B0uLitqs-lhEcdrKl.js";import"./index-DBl1uTky.js";import"./index.es-Vlpe_OYB-44qiv78Y.js";import"./index.es-B5hLka3L-Da4zkDzT.js";const u=pe({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),ke={state:u,subscribe(t){return me(u,()=>t(u))},subscribeKey(t,e){return ue(u,t,e)},showTooltip({message:t,triggerRect:e,variant:a}){u.open=!0,u.message=t,u.triggerRect=e,u.variant=a},hide(){u.open=!1,u.message="",u.triggerRect={width:0,height:0,top:0,left:0}}},A=be(ke),ie={isUnsupportedChainView(){return l.state.view==="UnsupportedChain"||l.state.view==="SwitchNetwork"&&l.state.history.includes("UnsupportedChain")},async safeClose(){if(this.isUnsupportedChainView()){f.shake();return}if(await Z.isSIWXCloseDisabled()){f.shake();return}f.close()}},Ce=g`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;var Se=function(t,e,a,n){var r=arguments.length,i=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,a):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(r<3?s(i):r>3?s(e,a,i):s(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};let Y=class extends v{render(){return o`<slot></slot>`}};Y.styles=[I,Ce];Y=Se([p("wui-card")],Y);const Re=g`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var O=function(t,e,a,n){var r=arguments.length,i=r<3?e:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(r<3?s(i):r>3?s(e,a,i):s(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};let S=class extends v{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,o`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){z.close()}};S.styles=[I,Re];O([d()],S.prototype,"message",void 0);O([d()],S.prototype,"backgroundColor",void 0);O([d()],S.prototype,"iconColor",void 0);O([d()],S.prototype,"icon",void 0);S=O([p("wui-alertbar")],S);const Ne=g`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var ae=function(t,e,a,n){var r=arguments.length,i=r<3?e:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(r<3?s(i):r>3?s(e,a,i):s(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};const $e={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let D=class extends v{constructor(){super(),this.unsubscribe=[],this.open=z.state.open,this.onOpen(!0),this.unsubscribe.push(z.subscribeKey("open",t=>{this.open=t,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:e}=z.state,a=$e[e];return o`
      <wui-alertbar
        message=${t}
        backgroundColor=${a?.backgroundColor}
        iconColor=${a?.iconColor}
        icon=${a?.icon}
      ></wui-alertbar>
    `}onOpen(t){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):t||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};D.styles=Ne;ae([w()],D.prototype,"open",void 0);D=ae([p("w3m-alertbar")],D);const Te=g`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var P=function(t,e,a,n){var r=arguments.length,i=r<3?e:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(r<3?s(i):r>3?s(e,a,i):s(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};let R=class extends v{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const t=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",e=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${t});
    --local-padding: var(${e});
`,o`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};R.styles=[I,ee,te,Te];P([d()],R.prototype,"size",void 0);P([d({type:Boolean})],R.prototype,"disabled",void 0);P([d()],R.prototype,"icon",void 0);P([d()],R.prototype,"iconColor",void 0);R=P([p("wui-icon-link")],R);const Ae=g`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var oe=function(t,e,a,n){var r=arguments.length,i=r<3?e:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(r<3?s(i):r>3?s(e,a,i):s(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};let j=class extends v{constructor(){super(...arguments),this.imageSrc=""}render(){return o`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?o`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:o`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};j.styles=[I,ee,te,Ae];oe([d()],j.prototype,"imageSrc",void 0);j=oe([p("wui-select")],j);const We=g`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var y=function(t,e,a,n){var r=arguments.length,i=r<3?e:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(r<3?s(i):r>3?s(e,a,i):s(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};const Ee=["SmartSessionList"];function X(){const t=l.state.data?.connector?.name,e=l.state.data?.wallet?.name,a=l.state.data?.network?.name,n=e??t,r=V.getConnectors();return{Connect:`Connect ${r.length===1&&r[0]?.id==="w3m-email"?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:n?`Get ${n}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",Profile:void 0,SwitchNetwork:a??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:q.state.socialProvider?q.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in progress"}}let h=class extends v{constructor(){super(),this.unsubscribe=[],this.heading=X()[l.state.view],this.network=m.state.activeCaipNetwork,this.networkImage=H.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=l.state.view,this.viewDirection="",this.headerText=X()[l.state.view],this.unsubscribe.push(ye.subscribeNetworkImages(()=>{this.networkImage=H.getNetworkImage(this.network)}),l.subscribeKey("view",t=>{setTimeout(()=>{this.view=t,this.headerText=X()[t]},C.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),m.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=H.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){return o`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){G.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),l.push("WhatIsAWallet")}async onClose(){await ie.safeClose()}rightHeaderTemplate(){const t=W?.state?.features?.smartSessions;return l.state.view!=="Account"||!t?this.closeButtonTemplate():o`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>l.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return o`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const t=Ee.includes(this.view);return o`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${t?o`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:t}=l.state,e=t==="Connect",a=W.state.enableEmbedded,n=t==="ApproveTransaction",r=t==="ConnectingSiwe",i=t==="Account",s=W.state.enableNetworkSwitch,c=n||r||e&&a;return i&&s?o`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${M(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${M(this.networkImage)}
      ></wui-select>`:this.showBack&&!c?o`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:o`<wui-icon-link
      data-hidden=${!e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(G.sendEvent({type:"track",event:"CLICK_NETWORKS"}),l.push("Networks"))}isAllowedNetworkSwitch(){const t=m.getAllRequestedCaipNetworks(),e=t?t.length>1:!1,a=t?.find(({id:n})=>n===this.network?.id);return e||!a}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:t}=l.state;let e=C.VIEW_DIRECTION.Next;t.length<this.prevHistoryLength&&(e=C.VIEW_DIRECTION.Prev),this.prevHistoryLength=t.length,this.viewDirection=e}async onHistoryChange(){const{history:t}=l.state,e=this.shadowRoot?.querySelector("#dynamic");t.length>1&&!this.showBack&&e?(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){l.goBack()}};h.styles=We;y([w()],h.prototype,"heading",void 0);y([w()],h.prototype,"network",void 0);y([w()],h.prototype,"networkImage",void 0);y([w()],h.prototype,"showBack",void 0);y([w()],h.prototype,"prevHistoryLength",void 0);y([w()],h.prototype,"view",void 0);y([w()],h.prototype,"viewDirection",void 0);y([w()],h.prototype,"headerText",void 0);h=y([p("w3m-header")],h);const Ie=g`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var $=function(t,e,a,n){var r=arguments.length,i=r<3?e:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(r<3?s(i):r>3?s(e,a,i):s(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};let b=class extends v{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return o`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?o`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:this.iconType==="default"?o`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:o`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};b.styles=[I,Ie];$([d()],b.prototype,"backgroundColor",void 0);$([d()],b.prototype,"iconColor",void 0);$([d()],b.prototype,"icon",void 0);$([d()],b.prototype,"message",void 0);$([d()],b.prototype,"loading",void 0);$([d()],b.prototype,"iconType",void 0);b=$([p("wui-snackbar")],b);const Oe=g`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var re=function(t,e,a,n){var r=arguments.length,i=r<3?e:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(r<3?s(i):r>3?s(e,a,i):s(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};const Pe={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let U=class extends v{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=T.state.open,this.unsubscribe.push(T.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:e,svg:a}=T.state,n=Pe[e],{icon:r,iconColor:i}=a??n??{};return o`
      <wui-snackbar
        message=${t}
        backgroundColor=${n?.backgroundColor}
        iconColor=${i}
        icon=${r}
        .loading=${e==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),T.state.autoClose&&(this.timeout=setTimeout(()=>T.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};U.styles=Oe;re([w()],U.prototype,"open",void 0);U=re([p("w3m-snackbar")],U);const Be=g`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var B=function(t,e,a,n){var r=arguments.length,i=r<3?e:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(r<3?s(i):r>3?s(e,a,i):s(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};let N=class extends v{constructor(){super(),this.unsubscribe=[],this.open=A.state.open,this.message=A.state.message,this.triggerRect=A.state.triggerRect,this.variant=A.state.variant,this.unsubscribe.push(A.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,e=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${e}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,o`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};N.styles=[Be];B([w()],N.prototype,"open",void 0);B([w()],N.prototype,"message",void 0);B([w()],N.prototype,"triggerRect",void 0);B([w()],N.prototype,"variant",void 0);N=B([p("w3m-tooltip"),p("w3m-tooltip")],N);const Le=g`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var _=function(t,e,a,n){var r=arguments.length,i=r<3?e:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(r<3?s(i):r>3?s(e,a,i):s(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};let E=class extends v{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=l.state.view,this.viewDirection="",this.unsubscribe.push(l.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){this.resizeObserver=new ResizeObserver(([t])=>{const e=`${t?.contentRect.height}px`;this.prevHeight!=="0px"&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",e),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=e,this.style.animation="unset"},C.ANIMATION_DURATIONS.ModalHeight)}),this.resizeObserver?.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return o`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return o`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return o`<w3m-account-view></w3m-account-view>`;case"AllWallets":return o`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return o`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return o`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return o`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return o`<w3m-connect-view></w3m-connect-view>`;case"Create":return o`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return o`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return o`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return o`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return o`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return o`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return o`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return o`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return o`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return o`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return o`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return o`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return o`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return o`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return o`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return o`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return o`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return o`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return o`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return o`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return o`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return o`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return o`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return o`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return o`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return o`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return o`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return o`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return o`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return o`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return o`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return o`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return o`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return o`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return o`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return o`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return o`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return o`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return o`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return o`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return o`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return o`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return o`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return o`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return o`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return o`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return o`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return o`<w3m-pay-loading-view></w3m-pay-loading-view>`;default:return o`<w3m-connect-view></w3m-connect-view>`}}onViewChange(t){A.hide();let e=C.VIEW_DIRECTION.Next;const{history:a}=l.state;a.length<this.prevHistoryLength&&(e=C.VIEW_DIRECTION.Prev),this.prevHistoryLength=a.length,this.viewDirection=e,setTimeout(()=>{this.view=t},C.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector("div")}};E.styles=Le;_([w()],E.prototype,"view",void 0);_([w()],E.prototype,"viewDirection",void 0);E=_([p("w3m-router")],E);const ze=g`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var k=function(t,e,a,n){var r=arguments.length,i=r<3?e:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,a,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(r<3?s(i):r>3?s(e,a,i):s(e,a))||i);return r>3&&i&&Object.defineProperty(e,a,i),i};const F="scroll-lock";class x extends v{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=W.state.enableEmbedded,this.open=f.state.open,this.caipAddress=m.state.activeCaipAddress,this.caipNetwork=m.state.activeCaipNetwork,this.shake=f.state.shake,this.filterByNamespace=V.state.filterByNamespace,this.initializeTheming(),L.prefetchAnalyticsConfig(),this.unsubscribe.push(f.subscribeKey("open",e=>e?this.onOpen():this.onClose()),f.subscribeKey("shake",e=>this.shake=e),m.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),m.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),W.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),V.subscribeKey("filterByNamespace",e=>{this.filterByNamespace!==e&&!m.getAccountData(e)?.caipAddress&&(L.fetchRecommendedWallets(),this.filterByNamespace=e)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){f.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?o`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?o`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return o` <wui-card
      shake="${this.shake}"
      data-embedded="${M(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){await ie.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:a}=he.state,n=xe.getColorTheme(a);ve(e,n)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),T.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=F,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${F}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",a=>{if(a.key==="Escape")this.handleClose();else if(a.key==="Tab"){const{tagName:n}=a.target;n&&!n.includes("W3M-")&&!n.includes("WUI-")&&e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){const a=m.state.isSwitchingNamespace,n=ge.getPlainAddress(e);!n&&!a?f.close():a&&n&&l.goBack(),await Z.initializeIfEnabled(),this.caipAddress=e,m.setIsSwitchingNamespace(!1)}onNewNetwork(e){const a=this.caipNetwork,n=a?.caipNetworkId?.toString(),r=a?.chainNamespace,i=e?.caipNetworkId?.toString(),s=e?.chainNamespace,c=n!==i,se=c&&r===s,ne=a?.name===fe.UNSUPPORTED_NETWORK_NAME,ce=l.state.view==="ConnectingExternal",le=!m.getAccountData(e?.chainNamespace)?.caipAddress,we=l.state.view==="UnsupportedChain",de=f.state.open;let K=!1;de&&!ce&&(le?c&&(K=!0):(we||se&&!ne)&&(K=!0)),K&&l.state.view!=="SIWXSignMessage"&&l.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(L.prefetch(),L.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}x.styles=ze;k([d({type:Boolean})],x.prototype,"enableEmbedded",void 0);k([w()],x.prototype,"open",void 0);k([w()],x.prototype,"caipAddress",void 0);k([w()],x.prototype,"caipNetwork",void 0);k([w()],x.prototype,"shake",void 0);k([w()],x.prototype,"filterByNamespace",void 0);let J=class extends x{};J=k([p("w3m-modal")],J);let Q=class extends x{};Q=k([p("appkit-modal")],Q);export{Q as AppKitModal,J as W3mModal,x as W3mModalBase};
