(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{365:function(e,t,s){"use strict";s.r(t);var a=s(25),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"contribution-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contribution-guide"}},[e._v("#")]),e._v(" Contribution guide")]),e._v(" "),s("p",[e._v("We are pleased to know that you want to contribute to Kiwi. This guide will\nwalk you through making your first contribution and general guidelines to\nmake changes and committing to the codebase.")]),e._v(" "),s("h2",{attrs:{id:"report-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#report-issues"}},[e._v("#")]),e._v(" Report issues")]),e._v(" "),s("p",[e._v("To report an issue, open one on the "),s("a",{attrs:{href:"https://github.com/sdslabs/kiwi/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub issue tracker"),s("OutboundLink")],1),e._v(".\nAn issue should include the following information:")]),e._v(" "),s("ol",[s("li",[e._v("Platform (Operating System used)")]),e._v(" "),s("li",[e._v("Package in which you're facing the issue")]),e._v(" "),s("li",[e._v("Go version (or Node in case of docs)")]),e._v(" "),s("li",[e._v("What is the issue?")]),e._v(" "),s("li",[e._v("How to reproduce it?")])]),e._v(" "),s("p",[e._v("Once an issue is opened, someone will get back to you to either help you\nresolve it or start working on solving it themselves.")]),e._v(" "),s("h2",{attrs:{id:"make-changes-in-codebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#make-changes-in-codebase"}},[e._v("#")]),e._v(" Make changes in codebase")]),e._v(" "),s("p",[e._v("There are a few important things to take care of when making changes in the\ncodebase.")]),e._v(" "),s("h3",{attrs:{id:"tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[e._v("#")]),e._v(" Tests")]),e._v(" "),s("p",[e._v("Make sure all your test cases pass. Modify tests if required.\nAdd new test cases when adding new features.")]),e._v(" "),s("h3",{attrs:{id:"lint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lint"}},[e._v("#")]),e._v(" Lint")]),e._v(" "),s("p",[e._v("We use "),s("a",{attrs:{href:"https://golangci-lint.run/",target:"_blank",rel:"noopener noreferrer"}},[e._v("golangci-lint"),s("OutboundLink")],1),e._v(". Make sure your changes\npass the lint tests. You can test your changes by running:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ golangci-lint run\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Some errors can be resolved automatically. Use:")]),e._v("\n$ golangci-lint run --fix\n")])])]),s("h3",{attrs:{id:"commits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commits"}},[e._v("#")]),e._v(" Commits")]),e._v(" "),s("ol",[s("li",[s("p",[e._v('Break only logical changes into multiple commits. Commits such as "fix\ntypo" or "address review commits" should be squashed into the one logical\ncommit.')])]),e._v(" "),s("li",[s("p",[e._v("Each commit should individually pass tests and lint check. No separate\ncommit should be made to fix these.")])]),e._v(" "),s("li",[s("p",[e._v("We don't have a defined commit message style for our codebase but the\ngeneral idea is that the commit should include a heading, a body (if it's\nrequired) and reference to any issue that it might resolve. A good commit\nmessage looks something like this:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Short commit heading with gist of changes.\n\nBody of commit trying to explain the old behaviour and how this commit\nchanges it for the better.\n\nResolves: #123\n\nSigned-off-by: Contributer <example@contributor.com>\n")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);