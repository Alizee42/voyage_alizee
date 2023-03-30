(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[6],{30:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var o=s(0),n=s(13),c=s.n(n);function a(e){const t=Object(o.useRef)(e);return c()(e,t.current)||(t.current=e),t.current}},304:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var o=s(1),n=s(7),c=s(3),a=s(31),r=s(11),i=s(42);const l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const{cartCoupons:t,cartIsLoading:s}=Object(i.a)(),{createErrorNotice:l}=Object(n.useDispatch)("core/notices"),{createNotice:p}=Object(n.useDispatch)("core/notices"),{setValidationErrors:m}=Object(n.useDispatch)(c.VALIDATION_STORE_KEY),{isApplyingCoupon:u,isRemovingCoupon:d}=Object(n.useSelect)(e=>{const t=e(c.CART_STORE_KEY);return{isApplyingCoupon:t.isApplyingCoupon(),isRemovingCoupon:t.isRemovingCoupon()}},[l,p]),{applyCoupon:h,removeCoupon:b}=Object(n.useDispatch)(c.CART_STORE_KEY),g=t=>h(t).then(()=>(Object(r.applyCheckoutFilter)({filterName:"showApplyCouponNotice",defaultValue:!0,arg:{couponCode:t,context:e}})&&p("info",Object(o.sprintf)(
/* translators: %s coupon code. */
Object(o.__)('Coupon code "%s" has been applied to your cart.',"woocommerce"),t),{id:"coupon-form",type:"snackbar",context:e}),Promise.resolve(!0))).catch(e=>(m({coupon:{message:Object(a.decodeEntities)(e.message),hidden:!1}}),Promise.resolve(!1))),y=t=>b(t).then(()=>(Object(r.applyCheckoutFilter)({filterName:"showRemoveCouponNotice",defaultValue:!0,arg:{couponCode:t,context:e}})&&p("info",Object(o.sprintf)(
/* translators: %s coupon code. */
Object(o.__)('Coupon code "%s" has been removed from your cart.',"woocommerce"),t),{id:"coupon-form",type:"snackbar",context:e}),Promise.resolve(!0))).catch(t=>(l(t.message,{id:"coupon-form",context:e}),Promise.resolve(!1)));return{appliedCoupons:t,isLoading:s,applyCoupon:g,removeCoupon:y,isApplyingCoupon:u,isRemovingCoupon:d}}},305:function(e,t){},310:function(e,t,s){"use strict";s.d(t,"b",(function(){return i})),s.d(t,"a",(function(){return l}));var o=s(30),n=s(18),c=s(7),a=s(3);const r=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{paymentMethodsInitialized:t,expressPaymentMethodsInitialized:s,availablePaymentMethods:r,availableExpressPaymentMethods:i}=Object(c.useSelect)(e=>{const t=e(a.PAYMENT_STORE_KEY);return{paymentMethodsInitialized:t.paymentMethodsInitialized(),expressPaymentMethodsInitialized:t.expressPaymentMethodsInitialized(),availableExpressPaymentMethods:t.getAvailableExpressPaymentMethods(),availablePaymentMethods:t.getAvailablePaymentMethods()}}),l=Object.values(r).map(e=>{let{name:t}=e;return t}),p=Object.values(i).map(e=>{let{name:t}=e;return t}),m=Object(n.getPaymentMethods)(),u=Object(n.getExpressPaymentMethods)(),d=Object.keys(m).reduce((e,t)=>(l.includes(t)&&(e[t]=m[t]),e),{}),h=Object.keys(u).reduce((e,t)=>(p.includes(t)&&(e[t]=u[t]),e),{}),b=Object(o.a)(d),g=Object(o.a)(h);return{paymentMethods:e?g:b,isInitialized:e?s:t}},i=()=>r(!1),l=()=>r(!0)},324:function(e,t,s){"use strict";var o=s(15),n=s.n(o),c=s(0),a=s(6),r=s.n(a);const i=e=>"wc-block-components-payment-method-icon wc-block-components-payment-method-icon--"+e;var l=e=>{let{id:t,src:s=null,alt:o=""}=e;return s?Object(c.createElement)("img",{className:i(t),src:s,alt:o}):null},p=s(37);const m=[{id:"alipay",alt:"Alipay",src:p.m+"payment-methods/alipay.svg"},{id:"amex",alt:"American Express",src:p.m+"payment-methods/amex.svg"},{id:"bancontact",alt:"Bancontact",src:p.m+"payment-methods/bancontact.svg"},{id:"diners",alt:"Diners Club",src:p.m+"payment-methods/diners.svg"},{id:"discover",alt:"Discover",src:p.m+"payment-methods/discover.svg"},{id:"eps",alt:"EPS",src:p.m+"payment-methods/eps.svg"},{id:"giropay",alt:"Giropay",src:p.m+"payment-methods/giropay.svg"},{id:"ideal",alt:"iDeal",src:p.m+"payment-methods/ideal.svg"},{id:"jcb",alt:"JCB",src:p.m+"payment-methods/jcb.svg"},{id:"laser",alt:"Laser",src:p.m+"payment-methods/laser.svg"},{id:"maestro",alt:"Maestro",src:p.m+"payment-methods/maestro.svg"},{id:"mastercard",alt:"Mastercard",src:p.m+"payment-methods/mastercard.svg"},{id:"multibanco",alt:"Multibanco",src:p.m+"payment-methods/multibanco.svg"},{id:"p24",alt:"Przelewy24",src:p.m+"payment-methods/p24.svg"},{id:"sepa",alt:"Sepa",src:p.m+"payment-methods/sepa.svg"},{id:"sofort",alt:"Sofort",src:p.m+"payment-methods/sofort.svg"},{id:"unionpay",alt:"Union Pay",src:p.m+"payment-methods/unionpay.svg"},{id:"visa",alt:"Visa",src:p.m+"payment-methods/visa.svg"},{id:"wechat",alt:"WeChat",src:p.m+"payment-methods/wechat.svg"}];var u=s(23);s(305),t.a=e=>{let{icons:t=[],align:s="center",className:o}=e;const a=(e=>{const t={};return e.forEach(e=>{let s={};"string"==typeof e&&(s={id:e,alt:e,src:null}),"object"==typeof e&&(s={id:e.id||"",alt:e.alt||"",src:e.src||null}),s.id&&Object(u.a)(s.id)&&!t[s.id]&&(t[s.id]=s)}),Object.values(t)})(t);if(0===a.length)return null;const i=r()("wc-block-components-payment-method-icons",{"wc-block-components-payment-method-icons--align-left":"left"===s,"wc-block-components-payment-method-icons--align-right":"right"===s},o);return Object(c.createElement)("div",{className:i},a.map(e=>{const t={...e,...(s=e.id,m.find(e=>e.id===s)||{})};var s;return Object(c.createElement)(l,n()({key:"payment-method-icon-"+e.id},t))}))}},367:function(e,t){},368:function(e,t,s){"use strict";var o=s(17),n=s.n(o),c=s(0),a=s(1),r=s(8),i=s(2),l=s(11),p=s(47);class m extends r.Component{constructor(){super(...arguments),n()(this,"state",{errorMessage:"",hasError:!1})}static getDerivedStateFromError(e){return{errorMessage:e.message,hasError:!0}}render(){const{hasError:e,errorMessage:t}=this.state,{isEditor:s}=this.props;if(e){let e=Object(a.__)("We are experiencing difficulties with this payment method. Please contact us for assistance.","woocommerce");(s||i.CURRENT_USER_IS_ADMIN)&&(e=t||Object(a.__)("There was an error with this payment method. Please verify it's configured correctly.","woocommerce"));const o=[{id:"0",content:e,isDismissible:!1,status:"error"}];return Object(c.createElement)(l.StoreNoticesContainer,{additionalNotices:o,context:p.d.PAYMENTS})}return this.props.children}}m.defaultProps={isEditor:!1},t.a=m},399:function(e,t){},400:function(e,t,s){"use strict";var o=s(0),n=s(1),c=s(310),a=s(458),r=s(45),i=s(22),l=s.n(i),p=s(7),m=s(368),u=s(108);t.a=()=>{const{isEditor:e}=Object(r.a)(),{activePaymentMethod:t,paymentMethodData:s}=Object(p.useSelect)(e=>{const t=e(u.a);return{activePaymentMethod:t.getActivePaymentMethod(),paymentMethodData:t.getPaymentMethodData()}}),{__internalSetActivePaymentMethod:i,__internalSetExpressPaymentStarted:d,__internalSetPaymentIdle:h,__internalSetPaymentError:b,__internalSetPaymentMethodData:g,__internalSetExpressPaymentError:y}=Object(p.useDispatch)(u.a),{paymentMethods:v}=Object(c.a)(),O=Object(a.a)(),E=Object(o.useRef)(t),j=Object(o.useRef)(s),P=Object(o.useCallback)(e=>()=>{E.current=t,j.current=s,d(),i(e)},[t,s,i,d]),S=Object(o.useCallback)(()=>{h(),i(E.current,j.current)},[i,h]),f=Object(o.useCallback)(e=>{b(),g(e),y(e),i(E.current,j.current)},[i,b,g,y]),k=Object(o.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";l()("Express Payment Methods should use the provided onError handler instead.",{alternative:"onError",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228"}),e?f(e):y("")}),[y,f]),_=Object.entries(v),w=_.length>0?_.map(t=>{let[s,n]=t;const c=e?n.edit:n.content;return Object(o.isValidElement)(c)?Object(o.createElement)("li",{key:s,id:"express-payment-method-"+s},Object(o.cloneElement)(c,{...O,onClick:P(s),onClose:S,onError:f,setExpressPaymentError:k})):null}):Object(o.createElement)("li",{key:"noneRegistered"},Object(n.__)("No registered Payment Methods","woocommerce"));return Object(o.createElement)(m.a,{isEditor:e},Object(o.createElement)("ul",{className:"wc-block-components-express-payment__event-buttons"},w))}},434:function(e,t,s){"use strict";var o=s(0),n=s(12);const c=Object(o.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(n.Path,{fillRule:"evenodd",d:"M5.5 9.5v-2h13v2h-13zm0 3v4h13v-4h-13zM4 7a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z",clipRule:"evenodd"}));t.a=c},458:function(e,t,s){"use strict";s.d(t,"a",(function(){return T}));var o=s(1),n=s(43),c=s(0),a=s(6),r=s.n(a),i=s(12),l=Object(c.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)("g",{fill:"none",fillRule:"evenodd"},Object(c.createElement)("path",{d:"M0 0h24v24H0z"}),Object(c.createElement)("path",{fill:"#000",fillRule:"nonzero",d:"M17.3 8v1c1 .2 1.4.9 1.4 1.7h-1c0-.6-.3-1-1-1-.8 0-1.3.4-1.3.9 0 .4.3.6 1.4 1 1 .2 2 .6 2 1.9 0 .9-.6 1.4-1.5 1.5v1H16v-1c-.9-.1-1.6-.7-1.7-1.7h1c0 .6.4 1 1.3 1 1 0 1.2-.5 1.2-.8 0-.4-.2-.8-1.3-1.1-1.3-.3-2.1-.8-2.1-1.8 0-.9.7-1.5 1.6-1.6V8h1.3zM12 10v1H6v-1h6zm2-2v1H6V8h8zM2 4v16h20V4H2zm2 14V6h16v12H4z"}),Object(c.createElement)("path",{stroke:"#000",strokeLinecap:"round",d:"M6 16c2.6 0 3.9-3 1.7-3-2 0-1 3 1.5 3 1 0 1-.8 2.8-.8"}))),p=Object(c.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(i.Path,{fillRule:"evenodd",d:"M18.646 9H20V8l-1-.5L12 4 5 7.5 4 8v1h14.646zm-3-1.5L12 5.677 8.354 7.5h7.292zm-7.897 9.44v-6.5h-1.5v6.5h1.5zm5-6.5v6.5h-1.5v-6.5h1.5zm5 0v6.5h-1.5v-6.5h1.5zm2.252 8.81c0 .414-.334.75-.748.75H4.752a.75.75 0 010-1.5h14.5a.75.75 0 01.749.75z",clipRule:"evenodd"})),m=Object(c.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(i.Path,{d:"M3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zm-1.338 4.877c-.314.22-.412.452-.412.623 0 .171.098.403.412.623.312.218.783.377 1.338.377.825 0 1.605.233 2.198.648.59.414 1.052 1.057 1.052 1.852 0 .795-.461 1.438-1.052 1.852-.41.286-.907.486-1.448.582v.316a.75.75 0 01-1.5 0v-.316a3.64 3.64 0 01-1.448-.582c-.59-.414-1.052-1.057-1.052-1.852a.75.75 0 011.5 0c0 .171.098.403.412.623.312.218.783.377 1.338.377s1.026-.159 1.338-.377c.314-.22.412-.452.412-.623 0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377-.825 0-1.605-.233-2.198-.648-.59-.414-1.052-1.057-1.052-1.852 0-.795.461-1.438 1.052-1.852a3.64 3.64 0 011.448-.582V7.5a.75.75 0 011.5 0v.316c.54.096 1.039.296 1.448.582.59.414 1.052 1.057 1.052 1.852a.75.75 0 01-1.5 0c0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377s-1.026.159-1.338.377z"})),u=s(434),d=s(76),h=s(23),b=s(20);s(367);const g={bank:p,bill:m,card:u.a,checkPayment:l};var y=e=>{let{icon:t="",text:s=""}=e;const o=!!t,n=Object(c.useCallback)(e=>o&&Object(h.a)(e)&&Object(b.b)(g,e),[o]),a=r()("wc-block-components-payment-method-label",{"wc-block-components-payment-method-label--with-icon":o});return Object(c.createElement)("span",{className:a},n(t)?Object(c.createElement)(d.a,{icon:g[t]}):t,s)},v=s(324),O=s(2),E=s(22),j=s.n(E),P=s(149),S=s(7),f=s(3),k=s(11),_=s(42),w=s(304),C=s(47),R=s(88),M=s(123),x=s(89);const I=(e,t)=>{const s=[],n=(t,s)=>{const o=s+"_tax",n=Object(b.b)(e,s)&&Object(h.a)(e[s])?parseInt(e[s],10):0;return{key:s,label:t,value:n,valueWithTax:n+(Object(b.b)(e,o)&&Object(h.a)(e[o])?parseInt(e[o],10):0)}};return s.push(n(Object(o.__)("Subtotal:","woocommerce"),"total_items")),s.push(n(Object(o.__)("Fees:","woocommerce"),"total_fees")),s.push(n(Object(o.__)("Discount:","woocommerce"),"total_discount")),s.push({key:"total_tax",label:Object(o.__)("Taxes:","woocommerce"),value:parseInt(e.total_tax,10),valueWithTax:parseInt(e.total_tax,10)}),t&&s.push(n(Object(o.__)("Shipping:","woocommerce"),"total_shipping")),s};var A=s(121);const T=()=>{const{onCheckoutBeforeProcessing:e,onCheckoutValidationBeforeProcessing:t,onCheckoutAfterProcessingWithSuccess:s,onCheckoutAfterProcessingWithError:a,onSubmit:r}=Object(R.b)(),{isCalculating:i,isComplete:l,isIdle:p,isProcessing:m,customerId:u}=Object(S.useSelect)(e=>{const t=e(f.CHECKOUT_STORE_KEY);return{isComplete:t.isComplete(),isIdle:t.isIdle(),isProcessing:t.isProcessing(),customerId:t.getCustomerId(),isCalculating:t.isCalculating()}}),{paymentStatus:d,activePaymentMethod:h,shouldSavePayment:b}=Object(S.useSelect)(e=>{const t=e(f.PAYMENT_STORE_KEY);return{paymentStatus:{get isPristine(){return j()("isPristine",{since:"9.6.0",alternative:"isIdle",plugin:"WooCommerce Blocks",link:"https://github.com/woocommerce/woocommerce-blocks/pull/8110"}),t.isPaymentIdle()},isIdle:t.isPaymentIdle(),isStarted:t.isExpressPaymentStarted(),isProcessing:t.isPaymentProcessing(),get isFinished(){return j()("isFinished",{since:"9.6.0",plugin:"WooCommerce Blocks",link:"https://github.com/woocommerce/woocommerce-blocks/pull/8110"}),t.hasPaymentError()||t.isPaymentReady()},hasError:t.hasPaymentError(),get hasFailed(){return j()("hasFailed",{since:"9.6.0",plugin:"WooCommerce Blocks",link:"https://github.com/woocommerce/woocommerce-blocks/pull/8110"}),t.hasPaymentError()},get isSuccessful(){return j()("isSuccessful",{since:"9.6.0",plugin:"WooCommerce Blocks",link:"https://github.com/woocommerce/woocommerce-blocks/pull/8110"}),t.isPaymentReady()},isReady:t.isPaymentReady(),isDoingExpressPayment:t.isExpressPaymentMethodActive()},activePaymentMethod:t.getActivePaymentMethod(),shouldSavePayment:t.getShouldSavePaymentMethod()}}),{__internalSetExpressPaymentError:g}=Object(S.useDispatch)(f.PAYMENT_STORE_KEY),{onPaymentProcessing:E}=Object(M.b)(),{shippingErrorStatus:T,shippingErrorTypes:z,onShippingRateSuccess:D,onShippingRateFail:N,onShippingRateSelectSuccess:V,onShippingRateSelectFail:B}=Object(x.b)(),{shippingRates:F,isLoadingRates:W,selectedRates:Y,isSelectingRate:L,selectShippingRate:H,needsShipping:K}=Object(A.a)(),{billingAddress:G,shippingAddress:U}=Object(S.useSelect)(e=>e(f.CART_STORE_KEY).getCustomerData()),{setShippingAddress:J}=Object(S.useDispatch)(f.CART_STORE_KEY),{cartItems:q,cartFees:Q,cartTotals:X,extensions:Z}=Object(_.a)(),{appliedCoupons:$}=Object(w.a)(),ee=Object(c.useRef)(I(X,K)),te=Object(c.useRef)({label:Object(o.__)("Total","woocommerce"),value:parseInt(X.total_price,10)});Object(c.useEffect)(()=>{ee.current=I(X,K),te.current={label:Object(o.__)("Total","woocommerce"),value:parseInt(X.total_price,10)}},[X,K]);const se=Object(c.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";j()("setExpressPaymentError should only be used by Express Payment Methods (using the provided onError handler).",{alternative:"",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228"}),g(e)}),[g]);return{activePaymentMethod:h,billing:{appliedCoupons:$,billingAddress:G,billingData:G,cartTotal:te.current,cartTotalItems:ee.current,currency:Object(n.getCurrencyFromPriceResponse)(X),customerId:u,displayPricesIncludingTax:Object(O.getSetting)("displayCartPricesIncludingTax",!1)},cartData:{cartItems:q,cartFees:Q,extensions:Z},checkoutStatus:{isCalculating:i,isComplete:l,isIdle:p,isProcessing:m},components:{LoadingMask:P.a,PaymentMethodIcons:v.a,PaymentMethodLabel:y,ValidationInputError:k.ValidationInputError},emitResponse:{noticeContexts:C.d,responseTypes:C.e},eventRegistration:{onCheckoutAfterProcessingWithError:a,onCheckoutAfterProcessingWithSuccess:s,onCheckoutBeforeProcessing:e,onCheckoutValidationBeforeProcessing:t,onPaymentProcessing:E,onShippingRateFail:N,onShippingRateSelectFail:B,onShippingRateSelectSuccess:V,onShippingRateSuccess:D},onSubmit:r,paymentStatus:d,setExpressPaymentError:se,shippingData:{isSelectingRate:L,needsShipping:K,selectedRates:Y,setSelectedRates:H,setShippingAddress:J,shippingAddress:U,shippingRates:F,shippingRatesLoading:W},shippingStatus:{shippingErrorStatus:T,shippingErrorTypes:z},shouldSavePayment:b}}}}]);