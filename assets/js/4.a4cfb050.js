(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{168:function(t,a,s){t.exports=s.p+"assets/img/ng02.c2f9aef6.png"},260:function(t,a,s){"use strict";s.r(a);var r=[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"angular8-教程02-组件及组件内基础概念使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#angular8-教程02-组件及组件内基础概念使用","aria-hidden":"true"}},[this._v("#")]),this._v(" Angular8+教程02-组件及组件内基础概念使用")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#介绍ng-generate的概念与使用"}},[t._v("介绍ng generate的概念与使用")])]),s("li",[s("a",{attrs:{href:"#生成angular组件"}},[t._v("生成Angular组件")])]),s("li",[s("a",{attrs:{href:"#绑定数据"}},[t._v("绑定数据")])]),s("li",[s("a",{attrs:{href:"#绑定标签属性"}},[t._v("绑定标签属性")])]),s("li",[s("a",{attrs:{href:"#数据循环"}},[t._v("数据循环")]),s("ul",[s("li",[s("a",{attrs:{href:"#ngfor-https-angular-cn-api-common-ngforof-description"}},[t._v("*ngFor")])])])]),s("li",[s("a",{attrs:{href:"#条件判断-ngif"}},[t._v("条件判断 *ngIf")])]),s("li",[s("a",{attrs:{href:"#switch结构-ngswitch"}},[t._v("switch结构*ngSwitch")])]),s("li",[s("a",{attrs:{href:"#事件处理"}},[t._v("事件处理")])]),s("li",[s("a",{attrs:{href:"#表单事件"}},[t._v("表单事件")])]),s("li",[s("a",{attrs:{href:"#双向数据绑定"}},[t._v("双向数据绑定")])]),s("li",[s("a",{attrs:{href:"#ngclass-、-ngstyle"}},[t._v("[ngClass]、[ngStyle]")])]),s("li",[s("a",{attrs:{href:"#管道"}},[t._v("管道")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"介绍ng-generate的概念与使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍ng-generate的概念与使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 介绍ng generate的概念与使用")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"生成angular组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成angular组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 生成Angular组件")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("ng g component app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("header\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该命令会在src/app下生成组件相关的ts、html和css文件")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("header"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\n    app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ts\n    app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css\n    app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ts\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:s(168),alt:"app-header"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"绑定数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定数据","aria-hidden":"true"}},[this._v("#")]),this._v(" 绑定数据")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-angular2 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("\n  // 绑定属性\n  public name: string = '小泽小姐';\n  private age: number = 18;\n  protected sex: string = '女';\n  bindHtml: string = '<h1>这是H1标签内容</h1>';\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"绑定标签属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定标签属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 绑定标签属性")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("绑定元素属性"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"数据循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据循环","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据循环")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("简单的循环")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ul"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ngFor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"let item of list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ul"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("带索引和局部变量的")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如下 i就是每次循环的索引")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// first 就是第一个的局部引用,此外还有奇even,偶数odd，last等")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ul"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ngFor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"let item of list;index as i;first as isFirst; "')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ul"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("trackBy支持带自定义函数处理")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"条件判断-ngif"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件判断-ngif","aria-hidden":"true"}},[this._v("#")]),this._v(" 条件判断 *ngIf")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ngIf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list.length > 3"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("这是 ngIF 判断是否显示"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ngIf flag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("这是 ngIF 判断是否显示"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"switch结构-ngswitch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switch结构-ngswitch","aria-hidden":"true"}},[this._v("#")]),this._v(" switch结构*ngSwitch")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ul "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ngSwitch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"score"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ngSwitchCase"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("安装"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ngSwitchCase"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("安装中"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ngSwitchCase"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("已安装"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ngSwitchDefault"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("未安装"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ul"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"事件处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件处理","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件处理")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("click"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"handle1()"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 点击按钮触发事件"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("click"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"handle2()"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 点击按钮触发事件"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"表单事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 表单事件")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keyFn($event)"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keyFn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"双向数据绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双向数据绑定","aria-hidden":"true"}},[this._v("#")]),this._v(" 双向数据绑定")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" FormsModule "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/forms'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ngModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inputValue"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n\n跟踪显示："),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("inputValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"ngclass-、-ngstyle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ngclass-、-ngstyle","aria-hidden":"true"}},[this._v("#")]),this._v(" [ngClass]、[ngStyle]")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ngClass")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ngClass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{'class1': true, 'class2': false}\"")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 这是一个 div "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ngStyle")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ngStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{'background-color':'yellow'}\"")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("ngStyle 背景颜色"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"管道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管道","aria-hidden":"true"}},[this._v("#")]),this._v(" 管道")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("p",[this._v("自带的管道")])]),this._v(" "),a("li",[a("p",[this._v("另外一种自定义的管道，需要先声明引入。")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yyyy-MM-dd HH:mm:ss'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])}],e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p"),t._m(1),s("p"),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("ng generate是Angular-cli提供的生成器命令，用来生成Angular组件、类、服务、管道和路由等Angular套件模板。")]),t._v(" "),s("p",[t._v("详细内容可以参考"),s("a",{attrs:{href:"https://angular.cn/cli/generate",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文官方文档"),s("OutboundLink")],1)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("直接在app-header.component.ts中添加属性")]),t._v(" "),t._m(7),t._m(8),t._v(" "),s("p",[t._v('在HTML中添加[属性]="属性值";')]),t._v(" "),t._m(9),t._m(10),t._v(" "),s("h3",{attrs:{id:"ngfor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ngfor","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://angular.cn/api/common/NgForOf#description",target:"_blank",rel:"noopener noreferrer"}},[t._v("*ngFor"),s("OutboundLink")],1)]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._m(24),t._m(25),t._v(" "),s("p",[t._v('<input [(ngModel)]="inputValue">')]),t._v(" "),t._m(26),t._m(27),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),s("p",[t._v("angular中的管道类似Vue中的过滤器，首先必须声明一个管道方法，然后在模板中使用")]),t._v(" "),t._m(31),t._v(" "),t._m(32)])},r,!1,null,null,null);a.default=n.exports}}]);