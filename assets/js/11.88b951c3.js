(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{364:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"stdkiwi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stdkiwi"}},[t._v("#")]),t._v(" Stdkiwi")]),t._v(" "),a("p",[t._v("Store's "),a("code",[t._v("Do")]),t._v(" method takes parameters (other than the first two) as\n"),a("code",[t._v("interface{}")]),t._v(" which means you can pass anything into it. This isn't very\nsafe as this can cause many unwanted errors by either passing wrong number\nof params or the wrong type. Package\n"),a("a",{attrs:{href:"https://pkg.go.dev/github.com/sdslabs/kiwi/stdkiwi",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/sdslabs/kiwi/stdkiwi"),a("OutboundLink")],1),t._v("\nexists to solve the same issue.")]),t._v(" "),a("h2",{attrs:{id:"port-from-kiwi-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port-from-kiwi-store"}},[t._v("#")]),t._v(" Port from "),a("code",[t._v("kiwi.Store")])]),t._v(" "),a("p",[a("code",[t._v("stdkiwi.Store")]),t._v(" is fully compatible with "),a("code",[t._v("kiwi.Store")]),t._v(". The latter can be\nreplaced by the former without breaking anything. Even for creating new store\nboth the packages have same functions:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/sdslabs/kiwi"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/sdslabs/kiwi/stdkiwi"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\nschema "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" kiwi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key_one"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"str"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key_two"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hash"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nstore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" stdkiwi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handle error")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key_three"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"set"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handle error")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\njsondata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Export")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handle error")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"type-safe-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-safe-methods"}},[t._v("#")]),t._v(" Type safe methods")]),t._v(" "),a("p",[t._v("Package "),a("code",[t._v("stdkiwi")]),t._v(" registers all the standard value types and defines various\ntypes which can be used to invoke or "),a("code",[t._v("Do")]),t._v(" actions with type safe methods.")]),t._v(" "),a("p",[t._v("Each of the value type has a different Go type defined in the "),a("code",[t._v("stdkiwi")]),t._v("\npackage and a new value of that type can be created with the corresponding\nmethod. For example:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/sdslabs/kiwi/stdkiwi"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\nkeyTwo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key_two"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// assumes "key_two" is a "hash"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// All actions for a set are defined as functions")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Let's say we want to insert into the set")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" keyTwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"val"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handle error")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Or checking if a key exists in the hash,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return value is not an interface{} now either")]),t._v("\nexists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" keyTwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handle error")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[t._v("The value types registered with stdkiwi are:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Package")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Method")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("str")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://pkg.go.dev/github.com/sdslabs/kiwi/values/str",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/sdslabs/kiwi/values/str"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("td",[a("code",[t._v("Str")])]),t._v(" "),a("td",[a("code",[t._v("Str")])])]),t._v(" "),a("tr",[a("td",[t._v("list")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://pkg.go.dev/github.com/sdslabs/kiwi/values/list",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/sdslabs/kiwi/values/list"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("td",[a("code",[t._v("List")])]),t._v(" "),a("td",[a("code",[t._v("List")])])]),t._v(" "),a("tr",[a("td",[t._v("set")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://pkg.go.dev/github.com/sdslabs/kiwi/values/set",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/sdslabs/kiwi/values/set"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("td",[a("code",[t._v("Set")])]),t._v(" "),a("td",[a("code",[t._v("Set")])])]),t._v(" "),a("tr",[a("td",[t._v("hash")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://pkg.go.dev/github.com/sdslabs/kiwi/values/hash",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/sdslabs/kiwi/values/hash"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("td",[a("code",[t._v("Hash")])]),t._v(" "),a("td",[a("code",[t._v("Hash")])])]),t._v(" "),a("tr",[a("td",[t._v("zset")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://pkg.go.dev/github.com/sdslabs/kiwi/values/zset",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/sdslabs/kiwi/values/zset"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("td",[a("code",[t._v("Zset")])]),t._v(" "),a("td",[a("code",[t._v("Str")])])])])]),t._v(" "),a("h2",{attrs:{id:"guards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guards"}},[t._v("#")]),t._v(" Guards")]),t._v(" "),a("p",[t._v("Calling methods to create the special type basically assumes that type of\nvalue. Like calling "),a("code",[t._v('store.List("key_one")')]),t._v(" assumes that "),a("code",[t._v('"key_one"')]),t._v(" is a\nlist where infact it can be any other type. As an additional layer of safety\nthese types implement "),a("code",[t._v("stdkiwi.Value")]),t._v(" interface which implements  the "),a("code",[t._v("Guard")]),t._v("\nmethod.")]),t._v(" "),a("p",[t._v("Let's say "),a("code",[t._v('"key_one"')]),t._v(" is of "),a("code",[t._v('"str"')]),t._v(" type and "),a("code",[t._v('store.List("key_one")')]),t._v(" would\nresult in error when any action is invoked. To protect from this, you can\ncall the "),a("code",[t._v("Guard")]),t._v(" method which will panic in case of such event.")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/sdslabs/kiwi/stdkiwi"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\nkeyOne "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key_one"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nkeyOne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Guard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Panics!")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Tip")]),t._v(" "),a("p",[t._v("It is a good practice to call guard after creating the store when new\ninstance of the application is created. If a store is created dynamically,\nuse "),a("code",[t._v("GuardE")]),t._v(" which is another version of "),a("code",[t._v("Guard")]),t._v(" which returns the error\ninstead of "),a("code",[t._v("panic")]),t._v("ing.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);