import{r as g,L as o,o as oe,k as f,T as re,c as se}from"./lit-element-DrneaN_7-paRhwip2.js";import{G as X,M as d,D as w}from"./class-map-BbR7GrmK-BwHltl4q.js";import{O as W,M as h,j as v,C as V,A as B,R as l,n as Y,T as ne,p as ce,h as $,a as le,f as we,r as I,e as J,k as Q,l as L,c as K,g as de,m as k,d as ue,E as G,o as F}from"./solana-Bh5bkUXQ-D6p0QEYy.js";import{h as pe,x as u}from"./index-N8cPdMnf-CUpB-OuT.js";import"./http-B0uLitqs-lhEcdrKl.js";import"./index-DBl1uTky.js";import"./util--bw7gFPs-BWz0kH9e.js";import"./wallets-DeIxpXbE-CSSF6IQ2.js";import"./signer-BH3gAHuj-Luy8n-FY.js";import"./index.es-Vlpe_OYB-44qiv78Y.js";const m=oe({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),A={state:m,subscribe(e){return se(m,()=>e(m))},subscribeKey(e,t){return re(m,e,t)},showTooltip({message:e,triggerRect:t,variant:a}){m.open=!0,m.message=e,m.triggerRect=t,m.variant=a},hide(){m.open=!1,m.message="",m.triggerRect={width:0,height:0,top:0,left:0}}},me=f`
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
`;var he=function(e,t,a,n){var r=arguments.length,i=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,a):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(r<3?s(i):r>3?s(t,a,i):s(t,a))||i);return r>3&&i&&Object.defineProperty(t,a,i),i};let M=class extends g{render(){return o`<slot></slot>`}};M.styles=[I,me];M=he([u("wui-card")],M);const ve=f`
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
`;var O=function(e,t,a,n){var r=arguments.length,i=r<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(r<3?s(i):r>3?s(t,a,i):s(t,a))||i);return r>3&&i&&Object.defineProperty(t,a,i),i};let C=class extends g{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
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
    `}onClose(){L.close()}};C.styles=[I,ve];O([d()],C.prototype,"message",void 0);O([d()],C.prototype,"backgroundColor",void 0);O([d()],C.prototype,"iconColor",void 0);O([d()],C.prototype,"icon",void 0);C=O([u("wui-alertbar")],C);const ge=f`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var Z=function(e,t,a,n){var r=arguments.length,i=r<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(r<3?s(i):r>3?s(t,a,i):s(t,a))||i);return r>3&&i&&Object.defineProperty(t,a,i),i};const fe={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let j=class extends g{constructor(){super(),this.unsubscribe=[],this.open=L.state.open,this.onOpen(!0),this.unsubscribe.push(L.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=L.state,a=fe[t];return o`
      <wui-alertbar
        message=${e}
        backgroundColor=${a?.backgroundColor}
        iconColor=${a?.iconColor}
        icon=${a?.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};j.styles=ge;Z([w()],j.prototype,"open",void 0);j=Z([u("w3m-alertbar")],j);const be=f`
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
`;var P=function(e,t,a,n){var r=arguments.length,i=r<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(r<3?s(i):r>3?s(t,a,i):s(t,a))||i);return r>3&&i&&Object.defineProperty(t,a,i),i};let S=class extends g{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",t=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,o`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};S.styles=[I,J,Q,be];P([d()],S.prototype,"size",void 0);P([d({type:Boolean})],S.prototype,"disabled",void 0);P([d()],S.prototype,"icon",void 0);P([d()],S.prototype,"iconColor",void 0);S=P([u("wui-icon-link")],S);const ye=f`
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
`;var ee=function(e,t,a,n){var r=arguments.length,i=r<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(r<3?s(i):r>3?s(t,a,i):s(t,a))||i);return r>3&&i&&Object.defineProperty(t,a,i),i};let D=class extends g{constructor(){super(...arguments),this.imageSrc=""}render(){return o`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?o`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:o`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};D.styles=[I,J,Q,ye];ee([d()],D.prototype,"imageSrc",void 0);D=ee([u("wui-select")],D);const xe=f`
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
`;var b=function(e,t,a,n){var r=arguments.length,i=r<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(r<3?s(i):r>3?s(t,a,i):s(t,a))||i);return r>3&&i&&Object.defineProperty(t,a,i),i};const ke=["SmartSessionList"];function H(){const e=l.state.data?.connector?.name,t=l.state.data?.wallet?.name,a=l.state.data?.network?.name,n=t??e,r=V.getConnectors();return{Connect:`Connect ${r.length===1&&r[0]?.id==="w3m-email"?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:n?`Get ${n}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Profile:void 0,SwitchNetwork:a??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:F.state.socialProvider?F.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In"}}let p=class extends g{constructor(){super(),this.unsubscribe=[],this.heading=H()[l.state.view],this.network=v.state.activeCaipNetwork,this.networkImage=K.getNetworkImage(this.network),this.buffering=!1,this.showBack=!1,this.prevHistoryLength=1,this.view=l.state.view,this.viewDirection="",this.headerText=H()[l.state.view],this.unsubscribe.push(de.subscribeNetworkImages(()=>{this.networkImage=K.getNetworkImage(this.network)}),l.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.headerText=H()[e]},k.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),ue.subscribeKey("buffering",e=>this.buffering=e),v.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=K.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return o`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){G.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),l.push("WhatIsAWallet")}async onClose(){l.state.view==="UnsupportedChain"||await Y.isSIWXCloseDisabled()?h.shake():h.close()}rightHeaderTemplate(){const e=W?.state?.features?.smartSessions;return l.state.view!=="Account"||!e?this.closeButtonTemplate():o`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>l.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return o`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=ke.includes(this.view);return o`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e?o`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=l.state,t=e==="Connect",a=W.state.enableEmbedded,n=e==="ApproveTransaction",r=e==="ConnectingSiwe",i=e==="Account",s=W.state.enableNetworkSwitch,c=n||r||t&&a;return i&&s?o`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${X(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${X(this.networkImage)}
      ></wui-select>`:this.showBack&&!c?o`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:o`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(G.sendEvent({type:"track",event:"CLICK_NETWORKS"}),l.push("Networks"))}isAllowedNetworkSwitch(){const e=v.getAllRequestedCaipNetworks(),t=e?e.length>1:!1,a=e?.find(({id:n})=>n===this.network?.id);return t||!a}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=l.state;let t=k.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=k.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){const{history:e}=l.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){l.goBack()}};p.styles=xe;b([w()],p.prototype,"heading",void 0);b([w()],p.prototype,"network",void 0);b([w()],p.prototype,"networkImage",void 0);b([w()],p.prototype,"buffering",void 0);b([w()],p.prototype,"showBack",void 0);b([w()],p.prototype,"prevHistoryLength",void 0);b([w()],p.prototype,"view",void 0);b([w()],p.prototype,"viewDirection",void 0);b([w()],p.prototype,"headerText",void 0);p=b([u("w3m-header")],p);const Ce=f`
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
`;var N=function(e,t,a,n){var r=arguments.length,i=r<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(r<3?s(i):r>3?s(t,a,i):s(t,a))||i);return r>3&&i&&Object.defineProperty(t,a,i),i};let y=class extends g{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return o`
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
    ></wui-icon-box>`}};y.styles=[I,Ce];N([d()],y.prototype,"backgroundColor",void 0);N([d()],y.prototype,"iconColor",void 0);N([d()],y.prototype,"icon",void 0);N([d()],y.prototype,"message",void 0);N([d()],y.prototype,"loading",void 0);N([d()],y.prototype,"iconType",void 0);y=N([u("wui-snackbar")],y);const Se=f`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var te=function(e,t,a,n){var r=arguments.length,i=r<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(r<3?s(i):r>3?s(t,a,i):s(t,a))||i);return r>3&&i&&Object.defineProperty(t,a,i),i};const Re={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let U=class extends g{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=$.state.open,this.unsubscribe.push($.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t,svg:a}=$.state,n=Re[t],{icon:r,iconColor:i}=a??n??{};return o`
      <wui-snackbar
        message=${e}
        backgroundColor=${n?.backgroundColor}
        iconColor=${i}
        icon=${r}
        .loading=${t==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),$.state.autoClose&&(this.timeout=setTimeout(()=>$.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};U.styles=Se;te([w()],U.prototype,"open",void 0);U=te([u("w3m-snackbar")],U);const Ne=f`
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
`;var z=function(e,t,a,n){var r=arguments.length,i=r<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(r<3?s(i):r>3?s(t,a,i):s(t,a))||i);return r>3&&i&&Object.defineProperty(t,a,i),i};let R=class extends g{constructor(){super(),this.unsubscribe=[],this.open=A.state.open,this.message=A.state.message,this.triggerRect=A.state.triggerRect,this.variant=A.state.variant,this.unsubscribe.push(A.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,o`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};R.styles=[Ne];z([w()],R.prototype,"open",void 0);z([w()],R.prototype,"message",void 0);z([w()],R.prototype,"triggerRect",void 0);z([w()],R.prototype,"variant",void 0);R=z([u("w3m-tooltip"),u("w3m-tooltip")],R);const Te=f`
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
`;var _=function(e,t,a,n){var r=arguments.length,i=r<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(r<3?s(i):r>3?s(t,a,i):s(t,a))||i);return r>3&&i&&Object.defineProperty(t,a,i),i};let E=class extends g{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=l.state.view,this.viewDirection="",this.unsubscribe.push(l.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(([e])=>{const t=`${e?.contentRect.height}px`;this.prevHeight!=="0px"&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",t),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=t,this.style.animation="unset"},k.ANIMATION_DURATIONS.ModalHeight)}),this.resizeObserver?.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return o`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return o`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return o`<w3m-account-view></w3m-account-view>`;case"AllWallets":return o`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return o`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return o`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return o`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return o`<w3m-connect-view></w3m-connect-view>`;case"Create":return o`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return o`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return o`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return o`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return o`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return o`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return o`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return o`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return o`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return o`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return o`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return o`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return o`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return o`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return o`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return o`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return o`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return o`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return o`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return o`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return o`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return o`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return o`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return o`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return o`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return o`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return o`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return o`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return o`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return o`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return o`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return o`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return o`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return o`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return o`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return o`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return o`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return o`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return o`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return o`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return o`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return o`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return o`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return o`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return o`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return o`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;default:return o`<w3m-connect-view></w3m-connect-view>`}}onViewChange(e){A.hide();let t=k.VIEW_DIRECTION.Next;const{history:a}=l.state;a.length<this.prevHistoryLength&&(t=k.VIEW_DIRECTION.Prev),this.prevHistoryLength=a.length,this.viewDirection=t,setTimeout(()=>{this.view=e},k.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector("div")}};E.styles=Te;_([w()],E.prototype,"view",void 0);_([w()],E.prototype,"viewDirection",void 0);E=_([u("w3m-router")],E);const $e=f`
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

  :host(.embedded) {
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

  :host(.embedded) wui-card {
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
`;var T=function(e,t,a,n){var r=arguments.length,i=r<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,a,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(r<3?s(i):r>3?s(t,a,i):s(t,a))||i);return r>3&&i&&Object.defineProperty(t,a,i),i};const q="scroll-lock";let x=class extends g{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=W.state.enableEmbedded,this.open=h.state.open,this.caipAddress=v.state.activeCaipAddress,this.caipNetwork=v.state.activeCaipNetwork,this.shake=h.state.shake,this.filterByNamespace=V.state.filterByNamespace,this.initializeTheming(),B.prefetchAnalyticsConfig(),this.unsubscribe.push(h.subscribeKey("open",e=>e?this.onOpen():this.onClose()),h.subscribeKey("shake",e=>this.shake=e),v.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),v.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),W.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),V.subscribeKey("filterByNamespace",e=>{this.filterByNamespace!==e&&!v.getAccountData(e)?.caipAddress&&(B.fetchRecommendedWallets(),this.filterByNamespace=e)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){h.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?o`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?o`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return o` <wui-card
      shake="${this.shake}"
      data-embedded="${X(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){l.state.view==="UnsupportedChain"||await Y.isSIWXCloseDisabled()?h.shake():h.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=ne.state,a=pe.getColorTheme(t);ce(e,a)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),$.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=q,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${q}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if(t.key==="Escape")this.handleClose();else if(t.key==="Tab"){const{tagName:a}=t.target;a&&!a.includes("W3M-")&&!a.includes("WUI-")&&e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){const t=v.state.isSwitchingNamespace,a=le.getPlainAddress(e);!a&&!t?h.close():t&&a&&l.goBack(),await Y.initializeIfEnabled(),this.caipAddress=e,v.setIsSwitchingNamespace(!1)}onNewNetwork(e){const t=this.caipNetwork?.caipNetworkId?.toString(),a=e?.caipNetworkId?.toString(),n=t&&a&&t!==a,r=v.state.isSwitchingNamespace,i=this.caipNetwork?.name===we.UNSUPPORTED_NETWORK_NAME,s=l.state.view==="ConnectingExternal",c=!this.caipAddress,ie=n&&!i&&!r,ae=l.state.view==="UnsupportedChain";h.state.open&&!s&&(c||ae||ie)&&l.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(B.prefetch(),B.fetchWallets({page:1}),this.hasPrefetched=!0)}};x.styles=$e;T([d({type:Boolean})],x.prototype,"enableEmbedded",void 0);T([w()],x.prototype,"open",void 0);T([w()],x.prototype,"caipAddress",void 0);T([w()],x.prototype,"caipNetwork",void 0);T([w()],x.prototype,"shake",void 0);T([w()],x.prototype,"filterByNamespace",void 0);x=T([u("w3m-modal")],x);export{x as W3mModal};
