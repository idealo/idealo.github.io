(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[291],{3585:function(t,e,o){var i={"./logo_idealo.png":9700,"./logo_java.png":3317,"./logo_php.png":4636,"./logo_python.png":770,"./logo_tensorflow.png":6795,"./logo_terraform.png":389};function a(t){var e=c(t);return o(e)}function c(t){if(!o.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=c,t.exports=a,a.id=3585},3291:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return T}});var i=o(5893),a=o(7294),c=o(3436),n=o.n(c),r=o(924),s=o.n(r),u=o(2814),A=o(1436),l=function(t){var e=t.html_url,o=t.language,a=t.forks,c=t.stars,n=t.watches;return(0,i.jsxs)("div",{className:s().gitHubStats__container,onClick:function(){window.open(e,"_blank")}.bind(undefined),children:[(0,i.jsxs)("div",{className:s().gitHubStats__stat,children:[(0,i.jsx)("p",{className:s().gitHubStats__icon,children:(0,i.jsx)(u.G,{style:{width:"20px"},icon:A.dT$})}),(0,i.jsx)("p",{className:s().gitHubStats__description,children:o})]}),(0,i.jsxs)("div",{className:s().gitHubStats__stat,children:[(0,i.jsx)("p",{className:s().gitHubStats__icon,children:(0,i.jsx)(u.G,{style:{width:"20px"},icon:A.dT$})}),(0,i.jsx)("p",{className:s().gitHubStats__description,children:a})]}),(0,i.jsxs)("div",{className:s().gitHubStats__stat,children:[(0,i.jsx)("p",{className:s().gitHubStats__icon,children:(0,i.jsx)(u.G,{style:{width:"20px"},icon:A.Tab})}),(0,i.jsx)("p",{className:s().gitHubStats__description,children:c})]}),(0,i.jsxs)("div",{className:s().gitHubStats__stat,children:[(0,i.jsx)("p",{className:s().gitHubStats__icon,children:(0,i.jsx)(u.G,{style:{width:"20px"},icon:A.FVb})}),(0,i.jsx)("p",{className:s().gitHubStats__description,children:n})]})]})},p=o(3773),g=o.n(p);function d(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return!e||"object"!==m(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,i=f(t);if(e){var a=f(this).constructor;o=Reflect.construct(i,arguments,a)}else o=i.apply(this,arguments);return h(this,o)}}var j=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(r,t);var e,a,c,n=w(r);function r(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),n.call(this,t)}return e=r,(a=[{key:"openVideo",value:function(){window.open(this.props.projectData.videoUrl,"_blank")}},{key:"render",value:function(){var t=o(3585)("./logo_".concat(this.props.projectData.config.ownerLogo,".png"));return(0,i.jsxs)("div",{className:g().projectTile__container,children:[(0,i.jsxs)("h3",{className:g().projectTile__heading,children:[(0,i.jsx)("a",{className:g().projectTile__title,href:this.props.projectData.github.html_url,target:"_blank",rel:"noreferrer",children:this.props.projectData.config.title}),(0,i.jsx)("img",{height:"35px",width:"35px",className:g().projectTile__logo,alt:"Programming Logo",src:t.src,srcSet:t.srcSet})]}),(0,i.jsx)("p",{className:g().projectTile__description,children:this.props.projectData.config.description}),(0,i.jsxs)("button",{className:g().projectTile__videoButton,style:{display:this.props.projectData.config.videoUrl?"block":"none"},onClick:this.openVideo.bind(this),children:[(0,i.jsx)(u.G,{icon:A.aQp,style:{width:"20px"}})," ","Video Presentation"]}),(0,i.jsx)("div",{className:g().projectTile__content,children:(0,i.jsx)(l,{stars:this.props.projectData.github.stargazers_count,html_url:this.props.projectData.github.html_url,forks:this.props.projectData.github.forks_count,watches:this.props.projectData.github.watchers_count,language:this.props.projectData.config.language})})]})}}])&&d(e.prototype,a),c&&d(e,c),r}(a.Component),T=function(t){var e=t.projectDatas;return(0,i.jsxs)("section",{className:n().projects__container,id:"projects",children:[(0,i.jsx)("h2",{className:"sectionHeading ".concat(n().projects__heading),children:"Projects"}),(0,i.jsx)("div",{className:n().projects__tiles,children:function(){var t=[];return null===e||void 0===e||e.forEach((function(e,o){t.push((0,i.jsx)(j,{projectData:e},"projectTile"+o))})),t}()})]})}},924:function(t){t.exports={centeredContainer:"GitHubStats_centeredContainer__o0Q0Q",gitHubStats__container:"GitHubStats_gitHubStats__container__sWxGW",gitHubStats__stat:"GitHubStats_gitHubStats__stat__U4Cr3",gitHubStats__icon:"GitHubStats_gitHubStats__icon__mkEIa",gitHubStats__description:"GitHubStats_gitHubStats__description__x0EML"}},3773:function(t){t.exports={centeredContainer:"ProjectTile_centeredContainer__H_bRX",projectTile__container:"ProjectTile_projectTile__container__OX3Hi",gitHubStats__container:"ProjectTile_gitHubStats__container__IXGa0",projectTile__heading:"ProjectTile_projectTile__heading__evwrw",projectTile__title:"ProjectTile_projectTile__title___J629",projectTile__logo:"ProjectTile_projectTile__logo__JAD8q",projectTile__description:"ProjectTile_projectTile__description__5UOID",projectTile__videoButton:"ProjectTile_projectTile__videoButton___NCH_",projectTile__github:"ProjectTile_projectTile__github__6_qJW",projectTile__content:"ProjectTile_projectTile__content__Wd0vc"}},3436:function(t){t.exports={centeredContainer:"Projects_centeredContainer__FFZsm",projects__container:"Projects_projects__container__3pDuw",projects__heading:"Projects_projects__heading__uBK8h",projects__tiles:"Projects_projects__tiles__A1Ol7"}},9700:function(t){t.exports={srcSet:"/_next/static/images/logo_idealo-300-f1c80a0e5b52dec587ab3fe01a17f24b.png 300w,/_next/static/images/logo_idealo-320-9876fd3f795b9ab3328fce22697a0c45.png 320w,/_next/static/images/logo_idealo-400-267e48d7af9f03002af6ee2b488eaafd.png 400w",images:[{path:"/_next/static/images/logo_idealo-300-f1c80a0e5b52dec587ab3fe01a17f24b.png",width:300,height:300},{path:"/_next/static/images/logo_idealo-320-9876fd3f795b9ab3328fce22697a0c45.png",width:320,height:320},{path:"/_next/static/images/logo_idealo-400-267e48d7af9f03002af6ee2b488eaafd.png",width:400,height:400}],src:"/_next/static/images/logo_idealo-300-f1c80a0e5b52dec587ab3fe01a17f24b.png",toString:function(){return"/_next/static/images/logo_idealo-300-f1c80a0e5b52dec587ab3fe01a17f24b.png"},placeholder:"data:image/png;base64,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",width:300,height:300}},3317:function(t){t.exports={srcSet:"/_next/static/images/logo_java-256-c8adf219c606ccfaa1041130ab9f7bb6.png 256w",images:[{path:"/_next/static/images/logo_java-256-c8adf219c606ccfaa1041130ab9f7bb6.png",width:256,height:256}],src:"/_next/static/images/logo_java-256-c8adf219c606ccfaa1041130ab9f7bb6.png",toString:function(){return"/_next/static/images/logo_java-256-c8adf219c606ccfaa1041130ab9f7bb6.png"},placeholder:"data:image/png;base64,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",width:256,height:256}},4636:function(t){t.exports={srcSet:"/_next/static/images/logo_php-200-bc19f497604dcce959132e2c7230e8cc.png 200w",images:[{path:"/_next/static/images/logo_php-200-bc19f497604dcce959132e2c7230e8cc.png",width:200,height:108}],src:"/_next/static/images/logo_php-200-bc19f497604dcce959132e2c7230e8cc.png",toString:function(){return"/_next/static/images/logo_php-200-bc19f497604dcce959132e2c7230e8cc.png"},placeholder:"data:image/png;base64,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",width:200,height:108}},770:function(t){t.exports={srcSet:"/_next/static/images/logo_python-200-c9960d10576ce7b0d35f6a00a69e33ef.png 200w",images:[{path:"/_next/static/images/logo_python-200-c9960d10576ce7b0d35f6a00a69e33ef.png",width:200,height:200}],src:"/_next/static/images/logo_python-200-c9960d10576ce7b0d35f6a00a69e33ef.png",toString:function(){return"/_next/static/images/logo_python-200-c9960d10576ce7b0d35f6a00a69e33ef.png"},placeholder:"data:image/png;base64,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",width:200,height:200}},6795:function(t){t.exports={srcSet:"/_next/static/images/logo_tensorflow-200-c59b7fe8981e0f5064a211c303ae8ec2.png 200w",images:[{path:"/_next/static/images/logo_tensorflow-200-c59b7fe8981e0f5064a211c303ae8ec2.png",width:200,height:214}],src:"/_next/static/images/logo_tensorflow-200-c59b7fe8981e0f5064a211c303ae8ec2.png",toString:function(){return"/_next/static/images/logo_tensorflow-200-c59b7fe8981e0f5064a211c303ae8ec2.png"},placeholder:"data:image/png;base64,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",width:200,height:214}},389:function(t){t.exports={srcSet:"/_next/static/images/logo_terraform-284-b2e5ca997b7c318e7b34dc3862a70d7f.png 284w",images:[{path:"/_next/static/images/logo_terraform-284-b2e5ca997b7c318e7b34dc3862a70d7f.png",width:284,height:322}],src:"/_next/static/images/logo_terraform-284-b2e5ca997b7c318e7b34dc3862a70d7f.png",toString:function(){return"/_next/static/images/logo_terraform-284-b2e5ca997b7c318e7b34dc3862a70d7f.png"},placeholder:"data:image/png;base64,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",width:284,height:322}}}]);