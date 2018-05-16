<template>
<div class="main"> 
  <transition appear appear-active-class="animated bounceInDown animation-delay-700">
  <!-- menu -->
  <div class="menu">
    <at-menu mode="vertical"  :active-name="activeName" width="150">
      
      <at-menu-item v-for="(menuItem,index) in menuItems" :key="index" :name="menuItem" @click.native="activeMenu(index)">{{menuItem}}</at-menu-item>
    </at-menu>
  </div>
  </transition>
    
    <transition appear appear-active-class="animated bounceInDown animation-delay-1600">
      <div class="codingArea" style="position:relative;">
        <codemirror v-if="activeName == 'HTML'" :options='settings.HTML.cmOptions' v-model="settings.HTML.htmlInput"></codemirror>
        <codemirror v-if="activeName == 'CSS'" :options='settings.CSS.cmOptions' v-model="settings.CSS.cssInput"></codemirror>
        <codemirror v-if="activeName == 'JavaScript'" :options='settings.JS.cmOptions' v-model="settings.JS.jsInput"></codemirror>
        <button style="position:absolute; bottom:20px;right:20px;" @click="renderIt()">Run</button>
      </div>
    </transition>
  <!-- Sandboxing -->
    <div id="output">
        <iframe class="outputArea" allowTransparency="true"></iframe>
    </div>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/mode/css/css.js";
import "codemirror/mode/javascript/javascript.js";
// addons

// hint
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/html-hint.js";
import "codemirror/addon/hint/css-hint.js";
import "codemirror/addon/hint/javascript-hint.js";
// auto-close
import "codemirror/addon/edit/closetag.js";
import "codemirror/addon/edit/closebrackets.js";
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/edit/matchtags.js";
// display
import "codemirror/addon/display/rulers.js";
// search
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/search.js";
import "codemirror/addon/search/jump-to-line.js";
import "codemirror/addon/search/match-highlighter.js";

// keyMap
import "codemirror/mode/clike/clike.js";
import "codemirror/addon/comment/comment.js";
import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/dialog/dialog.css";
import "codemirror/keymap/sublime.js";
// gutters
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/xml-fold.js";
// END addons
import "../styles/miku_theme.css";
import { Menu as AtMenu } from "at-ui";
import { MenuItem as AtMenuItem } from "at-ui";

export default {
  name: "mainArea",
  data() {
    return {
      activeName: "HTML",
      menuItems: ["HTML", "CSS", "JavaScript"],
      settings: {
        HTML: {
          htmlInput:
            "<!doctype html>\n" +
            "<html>\n\t" +
            "<head>\n\t\t" +
            '<meta charset="utf-8">\n\t\t' +
            '<link rel="stylesheet"\n\t\t' +
            'href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">\n\t' +
            "<title>JS_Online</title>\n\t" +
            "</head>\n\t" +
            '<body class="animated bounceInDown">\n\t' +
            "\t<div>miku</div>\n\t" +
            "</body>\n" +
            "</html>",
          cmOptions: {
            tabSize: 4,
            styleActiveLine: true,
            lineNumbers: true,
            line: true,
            mode: "htmlmixed",
            lineWrapping: true,
            theme: "miku",
            hintOptions: {
              completeSingle: true
            },
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            keyMap: "sublime",
            matchBrackets: true,
            showCursorWhenSelecting: true,
            extraKeys: { Ctrl: "autocomplete" }
          }
        },
        CSS: {
          cssInput:
            'div { width:300px; height:316px; background:url("./static/miku_100.jpg")}',
          cmOptions: {
            tabSize: 4,
            styleActiveLine: true,
            lineNumbers: true,
            line: true,
            mode: "css",
            lineWrapping: true,
            theme: "miku",
            hintOptions: {
              completeSingle: true
            },
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            keyMap: "sublime",
            matchBrackets: true,
            showCursorWhenSelecting: true,
            extraKeys: { Ctrl: "autocomplete" }
          }
        },
        JS: {
          jsInput: "let a = 10;",
          cmOptions: {
            tabSize: 4,
            styleActiveLine: true,
            lineNumbers: true,
            line: true,
            mode: "javascript",
            lineWrapping: true,
            theme: "miku",
            hintOptions: {
              completeSingle: true
            },
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            keyMap: "sublime",
            matchBrackets: true,
            showCursorWhenSelecting: true,
            extraKeys: { Ctrl: "autocomplete" }
          }
        }
      }
    };
  },
  components: { codemirror, AtMenu, AtMenuItem },
  methods: {
    activeMenu: function(index) {
      this.activeName = this.menuItems[index];
    },
    sourceCode: function() {
      let html = this.settings.HTML.htmlInput,
          css = this.settings.CSS.cssInput,
          js = this.settings.JS.jsInput,
          src = "";
      // HTML
      src = html;

      // CSS
      css = "<style>" + css + "</style> \n";
      src = src.replace("</head>", css + "</head>");

      // Javascript
      js = "<script>" + js + "<\/script>";
      src = src.replace("</body>", "</body> \n\t" + js);
      console.log(src);
      return src;
    },
    renderIt: function() {
      let source = this.sourceCode();
      let iframe = document.querySelector("#output iframe"),
        iframe_doc = iframe.contentDocument;
      iframe_doc.open();
      iframe_doc.write(source);
      iframe_doc.close();
    }
  }
};
</script>

<style scoped>
.main {
  flex: 1;
  display: flex;
  flex-direction: row;
  margin: 14px 0 0 0;
}
.menu {
  border-right: 1px solid #e2ecf4;
}

.at-menu--vertical .at-menu__item-link::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  background-color: #39c5bb !important;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  -webkit-box-shadow: 1px 0 12px 0 #39c5bb !important;
  box-shadow: 1px 0 12px 0 #39c5bb !important;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
  opacity: 0;
}

.at-menu--vertical .at-menu__item-link:hover {
  color: #6190e8;
}

.at-menu--vertical .at-menu__item-link.router-link-active {
  color: #6190e8;
  background-color: rgba(236, 242, 252, 0.2);
}

.codingArea {
  width: 0;
  flex: 1;
}
#output {
  flex: 1;
  display: flex;
}
.outputArea {
  flex: 1;
}

iframe {
  border: 0;
  border-left: 2px solid #e2ecf4 !important;
}

.animation-delay-700 {
  -webkit-animation-delay: 0.7s;
  animation-delay: 0.7s;
}

.animation-delay-1600 {
  -webkit-animation-delay: 1.6s;
  animation-delay: 1.6s;
}

.animation-delay-1700 {
  -webkit-animation-delay: 1.7s;
  animation-delay: 1.7s;
}
</style>
