(function(e){function t(t){for(var n,i,s=t[0],u=t[1],l=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var u=a[s];0!==o[u]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),o=a.n(n);o.a},"2dc7":function(e,t,a){"use strict";var n=a("763f"),o=a.n(n);o.a},"309a":function(e,t,a){"use strict";var n=a("46a3"),o=a.n(n);o.a},"46a3":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("app-header"),a("router-view")],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{attrs:{id:"header"}},[a("div",{staticClass:"logo"},[e.auth?e._e():a("router-link",{attrs:{to:"/"}},[e._v("Vue Auth")]),e.auth?a("router-link",{attrs:{to:"/dashboard"}},[e._v("Dashboard")]):e._e()],1),a("nav",[a("ul",[a("li",[e.auth?e._e():a("router-link",{attrs:{to:"/signup"}},[e._v("Sign Up")])],1),a("li",[e.auth?e._e():a("router-link",{attrs:{to:"/signin"}},[e._v("Sign In")])],1),a("li",[e.auth?a("router-link",{attrs:{to:"/profile"}},[e._v("Profile")]):e._e()],1),a("li",[e.auth?a("button",{staticClass:"logout",attrs:{to:"/logout"},on:{click:e.onLogout}},[e._v("Logout")]):e._e()])])])])},s=[],u={computed:{auth:function(){return this.$store.getters.isAuthenticated}},methods:{onLogout:function(){this.$store.dispatch("logout")}}},l=u,c=(a("afce"),a("2877")),d=Object(c["a"])(l,i,s,!1,null,"0e6c8362",null),p=d.exports,m={name:"app",components:{"app-header":p},created:function(){this.$store.dispatch("tryAutoLogin"),console.log("AIzaSyAeRgqtgPEkMAi9FsgpnyZ4OzTXYss-iKw")}},v=m,f=(a("034f"),Object(c["a"])(v,o,r,!1,null,null,null)),g=f.exports,h=a("bc3a"),b=a.n(h),_=a("1dce"),y=a.n(_),w=(a("caad"),a("8c4f")),I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"welcome"}},[a("h1",[e._v("Welcome Page!")]),a("div",{staticClass:"cta"},[a("router-link",{attrs:{to:"/signup"}},[e._v("Sign Up")]),a("router-link",{attrs:{to:"/signin"}},[e._v("Sign In")])],1)])},k=[],S=(a("af85"),{}),A=Object(c["a"])(S,I,k,!1,null,"74999be4",null),T=A.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("h1",[e._v("That's the dashboard!")]),a("p",[e._v("You should only get here if you're authenticated!")]),e.email?a("p",[e._v("Your email address is -- "+e._s(e.email)+" --")]):e._e()])},P=[],x={computed:{email:function(){return!!this.$store.getters.user&&this.$store.getters.user.email}},created:function(){this.$store.dispatch("fetchUser")}},C=x,E=(a("309a"),Object(c["a"])(C,$,P,!1,null,"f02f7b20",null)),U=E.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"signup"}},[a("div",{attrs:{id:"signin"}},[a("div",{staticClass:"form"},[a("form",{staticClass:"login-form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("div",{staticClass:"input",class:{invalid:e.$v.email.$error}},[e.$v.email.email?e._e():a("h6",[e._v("Please provide a valid email address.")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Email",id:"email"},domProps:{value:e.email},on:{blur:function(t){return e.$v.email.$touch()},input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"input",class:{invalid:e.$v.age.$error}},[e.$v.age.minVal?e._e():a("h6",[e._v("You have to be at least "+e._s(e.$v.age.$params.minVal.min)+" years old.")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy.number",value:e.age,expression:"age",modifiers:{lazy:!0,number:!0}}],attrs:{type:"number",placeholder:"Age",id:"age"},domProps:{value:e.age},on:{blur:[function(t){return e.$v.age.$touch()},function(t){return e.$forceUpdate()}],change:function(t){e.age=e._n(t.target.value)}}})]),a("div",{staticClass:"input",class:{invalid:e.$v.password.$error}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password",id:"password"},domProps:{value:e.password},on:{blur:function(t){return e.$v.password.$touch()},input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"input",class:{invalid:e.$v.confirmPassword.$error}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],attrs:{type:"password",placeholder:"Confirm Password",id:"confirm-password"},domProps:{value:e.confirmPassword},on:{blur:function(t){return e.$v.confirmPassword.$touch()},input:function(t){t.target.composing||(e.confirmPassword=t.target.value)}}})]),a("div",{staticClass:"input"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.country,expression:"country"}],attrs:{id:"country"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.country=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"usa"}},[e._v("USA")]),a("option",{attrs:{value:"india"}},[e._v("India")]),a("option",{attrs:{value:"uk"}},[e._v("UK")]),a("option",{attrs:{value:"germany"}},[e._v("Germany")])])]),a("div",{staticClass:"hobbies"},[a("button",{attrs:{type:"button"},on:{click:e.onAddHobby}},[e._v("Add Hobby")]),a("div",{staticClass:"hobby-list"},e._l(e.hobbyInputs,(function(t,n){return a("div",{key:t.id,staticClass:"input input-hobby"},[a("label",{attrs:{for:t.id}},[e._v("Hobby #"+e._s(n))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"hobbyInput.value"}],attrs:{type:"text",id:t.id},domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}}),a("button",{staticClass:"delete-hobby",attrs:{type:"button"},on:{click:function(a){return e.onDeleteHobby(t.id)}}},[e._v("X")])])})),0)]),a("div",{staticClass:"input inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.terms,expression:"terms"}],attrs:{type:"checkbox",id:"terms"},domProps:{checked:Array.isArray(e.terms)?e._i(e.terms,null)>-1:e.terms},on:{change:function(t){var a=e.terms,n=t.target,o=!!n.checked;if(Array.isArray(a)){var r=null,i=e._i(a,r);n.checked?i<0&&(e.terms=a.concat([r])):i>-1&&(e.terms=a.slice(0,i).concat(a.slice(i+1)))}else e.terms=o}}}),a("label",{attrs:{for:"terms"}},[e._v("Accept Terms of Use")])]),a("button",{attrs:{type:"submit",disabled:e.$v.$invalid}},[e._v("Create")]),a("p",{staticClass:"message"},[e._v("Already registered? "),a("router-link",{attrs:{to:"/signin"}},[e._v("Sign In")])],1)])])])])},j=[],D=(a("4de4"),a("d81d"),a("b5ae")),L={data:function(){return{email:"",age:null,password:"",confirmPassword:"",country:"usa",hobbyInputs:[],terms:!1}},methods:{onAddHobby:function(){var e={id:Math.random()*Math.random()*1e3,value:""};this.hobbyInputs.push(e)},onDeleteHobby:function(e){this.hobbyInputs=this.hobbyInputs.filter((function(t){return t.id!==e}))},onSubmit:function(){var e={email:this.email,age:this.age,password:this.password,confirmPassword:this.confirmPassword,country:this.country,hobbies:this.hobbyInputs.map((function(e){return e.value})),terms:this.terms};this.$store.dispatch("signup",e)}},validations:{email:{required:D["required"],email:D["email"]},age:{required:D["required"],numeric:D["numeric"],minVal:Object(D["minValue"])(18)},password:{required:D["required"],minLen:Object(D["minLength"])(6)},confirmPassword:{sameAs:Object(D["sameAs"])((function(e){return e.password}))}}},R=L,H=(a("acd9"),Object(c["a"])(R,O,j,!1,null,"04e8433c",null)),N=H.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"signin"}},[a("div",{staticClass:"form"},[a("form",{staticClass:"login-form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"submit"},[a("button",{attrs:{type:"submit"}},[e._v("Login")]),a("p",{staticClass:"message"},[e._v("Not registered? "),a("router-link",{attrs:{to:"/signup"}},[e._v("Sign Up")])],1)])])])])},M=[],z={data:function(){return{email:"",password:""}},methods:{onSubmit:function(){var e={email:this.email,password:this.password};this.$store.dispatch("login",{email:e.email,password:e.password})}}},Y=z,V=(a("6f95"),Object(c["a"])(Y,q,M,!1,null,"a4708a18",null)),K=V.exports,X=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},F=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"profile"}},[a("h1",[e._v("Profile Page!")])])}],Z=(a("2dc7"),{}),J=Object(c["a"])(Z,X,F,!1,null,"795e0cbc",null),W=J.exports;n["a"].use(w["a"]);var G=function(e,t,a){var n=["/signin","/signup"],o=!n.includes(e.path),r=localStorage.getItem("token");if(console.log(r),o&&!r)return a("/signin");o||!r?a():a("/dashboard")},B=[{path:"/",component:T},{path:"/signup",component:N,beforeEnter:G},{path:"/signin",component:K,beforeEnter:G},{path:"/dashboard",component:U,beforeEnter:G},{path:"/profile",component:W,beforeEnter:G},{path:"*",redirect:"/"}],Q=new w["a"]({mode:"history",routes:B}),ee=(a("ac1f"),a("5319"),a("2f62")),te=b.a.create({baseURL:"https://identitytoolkit.googleapis.com/v1"}),ae=te;n["a"].use(ee["a"]);var ne=new ee["a"].Store({state:{idToken:null,userId:null,user:null},mutations:{AUTH_USER:function(e,t){e.idToken=t.token,e.userId=t.userId},STORE_USER:function(e,t){e.user=t},CLEAR_AUTH_DATA:function(e){e.idToken=null,e.userId=null,e.user=null}},actions:{setLogoutTimer:function(e,t){var a=e.commit;setTimeout((function(){a("CLEAR_AUTH_DATA"),Q.replace("/")}),1e3*t)},signup:function(e,t){var a=e.commit,n=e.dispatch;ae.post("/accounts:signUp?key=AIzaSyAeRgqtgPEkMAi9FsgpnyZ4OzTXYss-iKw",{email:t.email,password:t.password,returnSecureToken:!0},{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e);var o=new Date,r=new Date(o.getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",r),localStorage.setItem("userId",e.data.localId),localStorage.setItem("email",e.data.email),a("AUTH_USER",{token:e.data.idToken,userId:e.data.localId}),n("storeUser",t),n("setLogoutTimer",e.data.expiresIn),Q.push("/dashboard")})).catch((function(e){return console.log(e)}))},login:function(e,t){var a=e.commit,n=e.dispatch;ae.post("accounts:signInWithPassword?key=AIzaSyAeRgqtgPEkMAi9FsgpnyZ4OzTXYss-iKw",{email:t.email,password:t.password,returnSecureToken:!0},{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e);var t=new Date,o=new Date(t.getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",o),localStorage.setItem("userId",e.data.localId),localStorage.setItem("email",e.data.email),a("AUTH_USER",{token:e.data.idToken,userId:e.data.localId}),n("setLogoutTimer",e.data.expiresIn),Q.replace("/dashboard")})).catch((function(e){return console.log(e)}))},tryAutoLogin:function(e){var t=e.commit,a=localStorage.getItem("token");if(a){var n=localStorage.getItem("expirationDate"),o=new Date;if(!(o>=n)){var r=localStorage.getItem("userId");t("AUTH_USER",{token:a,userId:r})}}},logout:function(e){var t=e.commit;t("CLEAR_AUTH_DATA"),localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),localStorage.removeItem("email"),Q.replace("/")},storeUser:function(e,t){var a=e.commit,n=e.state;n.idToken&&b.a.post("/users.json?auth="+n.idToken,t).then((function(e){console.log(e),console.log(a)})).catch((function(e){return console.log(e)}))},fetchUser:function(e){var t=e.commit,a=e.state;if(a.idToken){var n=localStorage.getItem("email");b.a.get("/users.json?auth="+a.idToken).then((function(e){console.log(e),console.log(t);var a=e.data,o=[];for(var r in a){var i=a[r];i.id=r,i.email=n,o.push(i)}t("STORE_USER",o[0])})).catch((function(e){return console.log(e)}))}}},getters:{user:function(e){return e.user},isAuthenticated:function(e){return null!==e.idToken}}}),oe=a("ed18"),re=a.n(oe);re.a.config(),b.a.defaults.baseURL="https://vue-auth-app-9f10d.firebaseio.com/",b.a.defaults.headers.get["Accepts"]="application/json",n["a"].use(y.a),new n["a"]({el:"#app",router:Q,store:ne,render:function(e){return e(g)}})},"6f95":function(e,t,a){"use strict";var n=a("735e"),o=a.n(n);o.a},"735e":function(e,t,a){},"763f":function(e,t,a){},"81e2":function(e,t,a){},"85ec":function(e,t,a){},9508:function(e,t,a){},acd9:function(e,t,a){"use strict";var n=a("9508"),o=a.n(n);o.a},af85:function(e,t,a){"use strict";var n=a("f99d"),o=a.n(n);o.a},afce:function(e,t,a){"use strict";var n=a("81e2"),o=a.n(n);o.a},f99d:function(e,t,a){}});
//# sourceMappingURL=app.2a4f67f1.js.map