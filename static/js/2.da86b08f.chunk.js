(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{52:function(e,t,a){"use strict";var n=a(5),r=a(10),s=a(13),c=a(12),i=a(14),l=a(1),o=a.n(l),u=a(4),h=a(15),d=function(e){var t=e.onLogin;return o.a.createElement(u.a,{className:"my-3",color:"danger"},o.a.createElement("div",null,"\u042d\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c."),o.a.createElement("div",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435"," ",o.a.createElement(u.c,{onClick:t,size:"sm",color:"primary"},"\u0412\u0445\u043e\u0434")))};t.a=function(e){var t,a;return a=t=function(t){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return this.context.auth.isAuthenticated?o.a.createElement(e,Object.assign({},this.props,{onClick:this.handleClick})):o.a.createElement(d,{onLogin:this.context.auth.toggleAuth})}}]),a}(o.a.Component),t.contextType=h.a,a}},53:function(e,t,a){"use strict";var n=a(1),r=a.n(n);t.a=function(e){var t=e.className;return r.a.createElement("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))}},54:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,s=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(l){r=!0,s=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw s}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",function(){return n})},60:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),s=a(54),c=a(11),i=a(5),l=a(10),o=a(13),u=a(12),h=a(14),d=a(1),m=a.n(d),p=a(4),v=a(15),f=a(52),y=(a(21),a(2)),b=a.n(y),_=function(e){var t=e.className;return m.a.createElement("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},m.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),m.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}))},g=function(e){var t=e.className;return m.a.createElement("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},m.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),m.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},E=(a(60),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._handleClick=function(){var e=a.props,t=e.isSelected,n=e.dish,r=e.onSelect,s=e.onUnselect;t?s(n):r(n)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=void 0===t?"":t,n=e.dish,r=e.isSelected,s=e.disabled;return m.a.createElement("div",{className:b()("dish-selector",{"dish-selector--disabled":s},a)},m.a.createElement("span",{className:"dish-selector__name"},n.name),n.price>0&&m.a.createElement("span",{className:"dish-selector__price"},n.price,m.a.createElement("span",{className:"dish-selector__money-unit"},"\u0433\u0440\u043d")),m.a.createElement("button",{className:"dish-selector__button",onClick:this._handleClick},r?m.a.createElement(g,{className:"dish-selector__icon dish-selector__icon--cancel"}):m.a.createElement(_,{className:"dish-selector__icon dish-selector__icon--add"})))}}]),t}(m.a.Component));E.defaultProps={isSelected:!1,disabled:!1,onSelect:function(){},onUnselect:function(){}};var O=E,w=function(e){var t=e.className;return m.a.createElement("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},m.a.createElement("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),m.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},k=(a(62),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.dishes,a=e.onUnselectDish,n=e.onMakeOrder;return m.a.createElement("div",{className:"shopping-basket border"},m.a.createElement("h3",{className:"shopping-basket__title text-center"},"\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430"),m.a.createElement("div",{className:"shopping-basket__payment text-center"},m.a.createElement("div",{className:"shopping-basket__payment-value"},m.a.createElement("span",null,this._payment),m.a.createElement("span",{className:"shopping-basket__payment-money-unit"},"\u0433\u0440\u043d")),this._overpayment>0&&m.a.createElement("div",{className:"overpayment text-danger"},m.a.createElement("span",{className:"overpayment__title"},"\u041f\u0435\u0440\u0435\u043f\u043b\u0430\u0442\u0430"),this._overpayment,m.a.createElement("span",{className:"overpayment__money-unit"},"\u0433\u0440\u043d"))),m.a.createElement("div",{className:"shopping-basket__dishes"},t.map(function(e){return m.a.createElement(O,{key:e.id,isSelected:!0,dish:e,onUnselect:a})})),t.length>0&&m.a.createElement("div",{className:"text-right"},m.a.createElement(p.c,{className:"shopping-basket__order-button",color:"primary",onClick:n},"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c",m.a.createElement(w,{className:"shopping-basket__order-button-icon"}))))}},{key:"_payment",get:function(){return this.props.dishes.reduce(function(e,t){return e+t.price},0)}},{key:"_overpayment",get:function(){var e=this._payment-this.props.availableMoneyToOrder;return e>0?e:0}}]),t}(m.a.Component));k.defaultProps={availableMoneyToOrder:51};var N=k,j=(a(25),a(53)),S=function(e){var t=e.className;return m.a.createElement("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},m.a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),m.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:a.props.defaultOpen},a._toggleOpen=function(){a.setState(function(e){return{isOpen:!e.isOpen}})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.isOpen,t=this.props,a=t.className,n=t.headerClassName,r=t.caption,s=t.children;return m.a.createElement("div",{className:a},m.a.createElement("div",{className:"expander ".concat(n),onClick:this._toggleOpen,style:{cursor:"pointer"}},r," ",e?m.a.createElement(S,null):m.a.createElement(j.a,null)),m.a.createElement(p.e,{isOpen:e},m.a.createElement("div",{className:"expander__content"},s)))}}]),t}(m.a.Component);D.defaultProps={defaultOpen:!1};var x=D,C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._handleSelectDish=function(e){a._onlySingleSelect&&a._isSomeDishSelected?alert("\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440 \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d!!!"):a.props.onSelect(e)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.dishes,n=t.selectedDishes,r=t.onUnselect;return a.map(function(t){var a=n.some(function(e){return e.id===t.id});return m.a.createElement(O,{key:t.id,dish:t,isSelected:a,disabled:e._onlySingleSelect&&e._isSomeDishSelected&&!a,onSelect:e._handleSelectDish,onUnselect:r})})}},{key:"_onlySingleSelect",get:function(){return!this.props.canMultiSelect}},{key:"_isSomeDishSelected",get:function(){var e=this;return this.props.dishes.some(function(t){return e.props.selectedDishes.includes(t)})}}]),t}(m.a.Component);C.defaultProps={canMultiSelect:!0};var M=C,z=(a(64),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={selectedDishes:[],isOrdered:!1},a._handleOrder=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.context.longOperation(function(){return a.context.webApi.orderLunch(a.state.selectedDishes||[])});case 3:a.setState({selectedDishes:[],isOrdered:!0}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}},e,this,[[0,6]])})),a._handleSelectDish=function(e){var t=a.state.selectedDishes;t.some(function(t){var a=t.id;return e.id===a})||(t.push(e),a.setState({selectedDishes:t}))},a._handleUnselectDish=function(e){a.state.selectedDishes.some(function(t){var a=t.id;return e.id===a})&&a.setState(function(t){return{selectedDishes:t.selectedDishes.filter(function(t){return t.id!==e.id})}})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"_getSelectedSupplier",value:function(){var e=this;return this.props.menu.suppliers.find(function(t){return t.allDishes.some(function(t){return e.state.selectedDishes.includes(t)})})}},{key:"_renderCategory",value:function(e){return m.a.createElement(x,{key:e.id,className:"meal-category border-bottom",headerClassName:"meal-category__title",caption:e.name},m.a.createElement("div",{className:"meal-category__dishes today-order-menu__dishes"},m.a.createElement(M,{canMultiSelect:e.canMultiSelect,dishes:e.dishes,selectedDishes:this.state.selectedDishes,onSelect:this._handleSelectDish,onUnselect:this._handleUnselectDish})))}},{key:"_renderSupplier",value:function(e){var t=this,a=this._getSelectedSupplier(),n=!a||a.id===e.id;return m.a.createElement("div",{key:e.id,className:"supplier border"},m.a.createElement("div",{className:"supplier__title"},e.name),n&&e.categories.map(function(e){return t._renderCategory(e)}))}},{key:"render",value:function(){var e=this,t=this.props.menu.suppliers,a=this.state.isOrdered;return console.log(this._getSelectedSupplier()),t.length>0?m.a.createElement(p.l,null,a?m.a.createElement(p.d,null,m.a.createElement(p.a,{color:"success"},"\u041e\u0431\u0435\u0434 \u0437\u0430\u043a\u0430\u0437\u0430\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e!")):m.a.createElement(m.a.Fragment,null,m.a.createElement(p.d,{className:"today-order-menu",xs:{size:12,order:2},sm:{size:12,order:2},md:{size:8,order:1}},t.map(function(t){return e._renderSupplier(t)})),m.a.createElement(p.d,{xs:{size:12,order:1},sm:{size:12,order:1},md:{size:4,order:2}},m.a.createElement(N,{dishes:this.state.selectedDishes,onMakeOrder:this._handleOrder,availableMoneyToOrder:51,onUnselectDish:this._handleUnselectDish})))):null}}]),t}(m.a.Component));z.contextType=v.a;a(22),a(66);var A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._handleClick=function(){a.props.isActive||a.props.onClick(a.props.day.shortName)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props.day,a=t.isHoliday,n=t.shortName,r=b()("day-tab",{"day-tab--holiday":a,"day-tab--active":this.props.isActive});return m.a.createElement(p.h,{className:r},m.a.createElement(p.i,{onClick:this._handleClick},m.a.createElement("div",{className:b()("day-tab__day-name",{"day-tab__day-name--holiday":a})},"Mon"===(e=n)?"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a":"Tue"===e?"\u0412\u0442\u043e\u0440\u043d\u0438\u043a":"Wed"===e?"\u0421\u0440\u0435\u0434\u0430":"Thu"===e?"\u0427\u0435\u0442\u0432\u0435\u0440\u0433":"Fri"===e?"\u041f\u044f\u0442\u043d\u0438\u0446\u0430":"\u0412\u044b\u0445\u043e\u0434\u043d\u043e\u0439")))}}]),t}(m.a.Component),H=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.days,a=e.activeDay,n=e.onSwitch;return m.a.createElement(p.g,{className:"my-4",tabs:!0},t.map(function(e){var t=e.shortName;return m.a.createElement(A,{key:t,day:e,isActive:t===a,onClick:n})}))}}]),t}(d.Component),U=(a(68),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={weekMenu:[],selectedDay:""},a._switchDay=function(e){a.state.selectedDay!==e&&a.setState({selectedDay:e})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark(function e(){var t,a,n,c,i,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.context,a=t.longOperation,n=t.webApi,e.prev=1,e.next=4,a(function(){return n.getWeekMenu()});case 4:c=e.sent,i=Object(s.a)(c,1),l=i[0],this.setState({weekMenu:c}),this._switchDay(l.day.shortName),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message);case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.weekMenu.length>0?m.a.createElement(p.l,null,m.a.createElement(p.d,null,m.a.createElement(H,{days:this.state.weekMenu.map(function(e){return e.day}),activeDay:this.state.selectedDay,onSwitch:this._switchDay}),m.a.createElement(p.m,{activeTab:this.state.selectedDay},this.state.weekMenu.map(function(e){var t=e.day,a=t.shortName,n=t.isHoliday;return m.a.createElement(p.n,{className:"py-2",key:a,tabId:a},!n&&e&&m.a.createElement(z,{menu:e}),n&&m.a.createElement(p.a,{color:"info"},"\u0417\u0430\u043a\u0430\u0437 \u043e\u0431\u0435\u0434\u043e\u0432 \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0439 \u0434\u0435\u043d\u044c \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d"))})))):m.a.createElement(p.l,{className:"my-4"},m.a.createElement(p.d,null,m.a.createElement(p.a,{color:"warning"},"\u0417\u0430\u043a\u0430\u0437 \u043e\u0431\u0435\u0434\u0430 \u043f\u043e\u043a\u0430 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d! \u041e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u0435\u043d\u044e \u043e\u0442 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430...")))}}]),t}(m.a.Component));U.contextType=v.a;t.default=Object(f.a)(U)}}]);
//# sourceMappingURL=2.da86b08f.chunk.js.map