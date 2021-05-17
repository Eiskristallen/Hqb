(this["webpackJsonp@devias/material-kit-pro-react"]=this["webpackJsonp@devias/material-kit-pro-react"]||[]).push([[60],{1897:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),c=a(19),i=a(12),l=a(0),o=a(20),s=a(134),d=a(1850),u=a(1497),j=a(1550),b=a(1551),h=a(1553),x=a(1844),p=a(99),v=a(373),f=a(239),O=a(132),m=a(803),g=a(133),y=a(678),w=a(679),D=a(949),k=a(5),C=a(22),S=a(586),M=a(18),E=a(316),z=a(303),A=a.n(z),V=a(63),W=a(100),T=a(140),B=a(1483),P=a(656),R=a(675),F=a(676),G=a(600),I=a(374),H=a(677),N=a(728),q=a(268),J=a(113),K=a(1),L=function(e,t){return e?A()({},{allDay:!1,color:"",description:"",end:Object(E.a)(new Date,30),start:new Date,title:"",submit:null},e):t?A()({},{allDay:!1,color:"",description:"",end:new Date(t.end),start:new Date(t.start),title:"",submit:null},e):{allDay:!1,color:"",description:"",end:Object(E.a)(new Date,30),start:new Date,title:"",submit:null}},_=function(e){var t=e.event,a=e.onAddComplete,n=e.onCancel,i=e.onDeleteComplete,l=e.onEditComplete,o=e.range,s=Object(J.b)(),d=Object(T.b)().enqueueSnackbar,u=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(Object(q.c)(t.id));case 3:i&&i(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),j=!t;return Object(K.jsx)(W.a,{initialValues:L(t,o),validationSchema:V.f().shape({allDay:V.b(),description:V.h().max(5e3),end:V.d().when("start",(function(e,t){return e&&t.min(e,"End date must be later than start date")})),start:V.d(),title:V.h().max(255).required("Title is required")}),onSubmit:function(){var e=Object(c.a)(r.a.mark((function e(n,c){var i,o,u,b,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=c.resetForm,o=c.setErrors,u=c.setStatus,b=c.setSubmitting,e.prev=1,h={allDay:n.allDay,description:n.description,end:n.end,start:n.start,title:n.title},!t){e.next=8;break}return e.next=6,s(Object(q.i)(t.id,h));case 6:e.next=10;break;case 8:return e.next=10,s(Object(q.b)(h));case 10:i(),u({success:!0}),b(!1),d("Calendar updated",{anchorOrigin:{horizontal:"right",vertical:"top"},variant:"success"}),j&&a&&a(),!j&&l&&l(),e.next=24;break;case 18:e.prev=18,e.t0=e.catch(1),console.error(e.t0),u({success:!1}),o({submit:e.t0.message}),b(!1);case 24:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,a=e.handleBlur,r=e.handleChange,c=e.handleSubmit,i=e.isSubmitting,l=e.setFieldValue,o=e.touched,s=e.values;return Object(K.jsxs)("form",{onSubmit:c,children:[Object(K.jsx)(p.a,{sx:{p:3},children:Object(K.jsx)(O.a,{align:"center",color:"textPrimary",gutterBottom:!0,variant:"h5",children:j?"Add Event":"Edit Event"})}),Object(K.jsxs)(p.a,{sx:{p:3},children:[Object(K.jsx)(P.a,{error:Boolean(o.title&&t.title),fullWidth:!0,helperText:o.title&&t.title,label:"Title",name:"title",onBlur:a,onChange:r,value:s.title,variant:"outlined"}),Object(K.jsx)(p.a,{sx:{mt:2},children:Object(K.jsx)(P.a,{error:Boolean(o.description&&t.description),fullWidth:!0,helperText:o.description&&t.description,label:"Description",name:"description",onBlur:a,onChange:r,value:s.description,variant:"outlined"})}),Object(K.jsx)(p.a,{sx:{mt:2},children:Object(K.jsx)(R.a,{control:Object(K.jsx)(F.a,{checked:s.allDay,color:"primary",name:"allDay",onChange:r}),label:"All day"})}),Object(K.jsx)(p.a,{sx:{mt:2},children:Object(K.jsx)(B.a,{label:"Start date",onChange:function(e){return l("start",e)},renderInput:function(e){return Object(K.jsx)(P.a,Object(M.a)({fullWidth:!0,variant:"outlined"},e))},value:s.start})}),Object(K.jsx)(p.a,{sx:{mt:2},children:Object(K.jsx)(B.a,{label:"End date",onChange:function(e){return l("end",e)},renderInput:function(e){return Object(K.jsx)(P.a,Object(M.a)({fullWidth:!0,variant:"outlined"},e))},value:s.end})}),Boolean(o.end&&t.end)&&Object(K.jsx)(p.a,{sx:{mt:2},children:Object(K.jsx)(G.a,{error:!0,children:t.end})})]}),Object(K.jsx)(I.a,{}),Object(K.jsxs)(p.a,{sx:{alignItems:"center",display:"flex",p:2},children:[!j&&Object(K.jsx)(H.a,{onClick:function(){return u()},children:Object(K.jsx)(N.a,{fontSize:"small"})}),Object(K.jsx)(p.a,{sx:{flexGrow:1}}),Object(K.jsx)(y.a,{color:"primary",onClick:n,variant:"text",children:"Cancel"}),Object(K.jsx)(y.a,{color:"primary",disabled:i,sx:{ml:1},type:"submit",variant:"contained",children:"Confirm"})]})]})}})},Q=a(71),U=a(1876),X=a(1845),Y=a(589),Z=a(192),$=a(1556),ee=a.n($),te=a(1557),ae=a.n(te),ne=a(1558),re=a.n(ne),ce=a(1559),ie=a.n(ce),le=[{icon:ee.a,label:"Month",value:"dayGridMonth"},{icon:ae.a,label:"Week",value:"timeGridWeek"},{icon:re.a,label:"Day",value:"timeGridDay"},{icon:ie.a,label:"Agenda",value:"listWeek"}],oe=function(e){var t=e.date,a=e.onDateNext,n=e.onDatePrev,r=e.onDateToday,c=e.onViewChange,i=e.view,l=Object(Q.a)(e,["date","onDateNext","onDatePrev","onDateToday","onViewChange","view"]);return Object(K.jsxs)(f.a,Object(M.a)(Object(M.a)({alignItems:"center",container:!0,justifyContent:"space-between",spacing:3},l),{},{children:[Object(K.jsx)(f.a,{item:!0,children:Object(K.jsxs)(X.a,{size:"small",children:[Object(K.jsx)(y.a,{onClick:n,children:"Prev"}),Object(K.jsx)(y.a,{onClick:r,children:"Today"}),Object(K.jsx)(y.a,{onClick:a,children:"Next"})]})}),Object(K.jsxs)(Y.a,{smDown:!0,children:[Object(K.jsx)(f.a,{item:!0,children:Object(K.jsx)(O.a,{color:"textPrimary",variant:"h3",children:Object(U.a)(t,"MMMM y")})}),Object(K.jsx)(f.a,{item:!0,children:Object(K.jsx)(p.a,{sx:{color:"text.primary"},children:le.map((function(e){var t=e.icon;return Object(K.jsx)(Z.a,{title:e.label,children:Object(K.jsx)(H.a,{color:e.value===i?"primary":"inherit",onClick:function(){return t=e.value,void(c&&c(t));var t},children:Object(K.jsx)(t,{fontSize:"small"})})},e.value)}))})})]})]}))},se=a(240),de=a(754),ue=a(135),je=function(e){var t=e.calendar,a=t.events,n=t.selectedEventId;return n?a.find((function(e){return e.id===n})):null},be=Object(k.a)("div")((function(e){var t=e.theme;return{"& .fc-license-message":{display:"none"},"& .fc":{"--fc-bg-event-opacity":1,"--fc-border-color":t.palette.divider,"--fc-daygrid-event-dot-width":"10px","--fc-event-text-color":t.palette.text.primary,"--fc-list-event-hover-bg-color":t.palette.background.default,"--fc-neutral-bg-color":t.palette.background.default,"--fc-page-bg-color":t.palette.background.default,"--fc-today-bg-color":Object(C.a)(t.palette.primary.main,.25),color:t.palette.text.primary,fontFamily:t.typography.fontFamily},"& .fc .fc-col-header-cell-cushion":{paddingBottom:"10px",paddingTop:"10px"},"& .fc .fc-day-other .fc-daygrid-day-top":{color:t.palette.text.secondary},"& .fc-daygrid-event":{padding:"10px"}}}));t.default=function(){var e=Object(J.b)(),t=Object(l.useRef)(null),a=Object(S.a)((function(e){return e.breakpoints.down("sm")})),n=Object(J.c)((function(e){return e.calendar})),k=n.events,C=n.isModalOpen,M=n.selectedRange,E=Object(J.c)(je),z=Object(l.useState)(new Date),A=Object(i.a)(z,2),V=A[0],W=A[1],T=Object(l.useState)(a?"listWeek":"dayGridMonth"),B=Object(i.a)(T,2),P=B[0],R=B[1];Object(l.useEffect)((function(){ue.a.push({event:"page_view"})}),[]),Object(l.useEffect)((function(){e(Object(q.d)())}),[]),Object(l.useEffect)((function(){var e=t.current;if(e){var n=e.getApi(),r=a?"listWeek":"dayGridMonth";n.changeView(r),R(r)}}),[a]);var F=function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.event,t.prev=1,t.next=4,e(Object(q.i)(n.id,{allDay:n.allDay,start:n.start,end:n.end}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}(),G=function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.event,t.prev=1,t.next=4,e(Object(q.i)(n.id,{allDay:n.allDay,start:n.start,end:n.end}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}(),I=function(){e(Object(q.a)())};return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(s.a,{children:Object(K.jsx)("title",{children:"Dashboard: Calendar | Material Kit Pro"})}),Object(K.jsx)(p.a,{sx:{backgroundColor:"background.default",minHeight:"100%",py:8},children:Object(K.jsxs)(v.a,{maxWidth:!1,children:[Object(K.jsxs)(f.a,{container:!0,justifyContent:"space-between",spacing:3,children:[Object(K.jsxs)(f.a,{item:!0,children:[Object(K.jsx)(O.a,{color:"textPrimary",variant:"h5",children:"Here's what you planned"}),Object(K.jsxs)(m.a,{"aria-label":"breadcrumb",separator:Object(K.jsx)(se.a,{fontSize:"small"}),sx:{mt:1},children:[Object(K.jsx)(g.a,{color:"textPrimary",component:o.b,to:"/dashboard",variant:"subtitle2",children:"Dashboard"}),Object(K.jsx)(O.a,{color:"textSecondary",variant:"subtitle2",children:"Calendar"})]})]}),Object(K.jsx)(f.a,{item:!0,children:Object(K.jsx)(p.a,{sx:{m:-1},children:Object(K.jsx)(y.a,{color:"primary",onClick:function(){e(Object(q.e)())},startIcon:Object(K.jsx)(de.a,{fontSize:"small"}),sx:{m:1},variant:"contained",children:"New Event"})})})]}),Object(K.jsx)(p.a,{sx:{mt:3},children:Object(K.jsx)(oe,{date:V,onDateNext:function(){var e=t.current;if(e){var a=e.getApi();a.next(),W(a.getDate())}},onDatePrev:function(){var e=t.current;if(e){var a=e.getApi();a.prev(),W(a.getDate())}},onDateToday:function(){var e=t.current;if(e){var a=e.getApi();a.today(),W(a.getDate())}},onViewChange:function(e){var a=t.current;a&&(a.getApi().changeView(e),R(e))},view:P})}),Object(K.jsx)(w.a,{sx:{mt:3,p:2},children:Object(K.jsx)(be,{children:Object(K.jsx)(d.a,{allDayMaintainDuration:!0,dayMaxEventRows:3,droppable:!0,editable:!0,eventClick:function(t){e(Object(q.g)(t.event.id))},eventDisplay:"block",eventDrop:G,eventResizableFromStart:!0,eventResize:F,events:k,headerToolbar:!1,height:800,initialDate:V,initialView:P,plugins:[u.b,j.a,b.a,h.a,x.a],ref:t,rerenderDelay:10,select:function(a){var n=t.current;n&&n.getApi().unselect();e(Object(q.h)(a.start,a.end))},selectable:!0,weekends:!0})})}),Object(K.jsx)(D.a,{fullWidth:!0,maxWidth:"sm",onClose:I,open:C,children:C&&Object(K.jsx)(_,{event:E,onAddComplete:I,onCancel:I,onDeleteComplete:I,onEditComplete:I,range:M})})]})})]})}},728:function(e,t,a){"use strict";var n=a(17),r=a(1),c=Object(n.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})}),"Trash");t.a=c},754:function(e,t,a){"use strict";var n=a(17),r=a(1),c=Object(n.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus");t.a=c}}]);
//# sourceMappingURL=60.3dac495d.chunk.js.map