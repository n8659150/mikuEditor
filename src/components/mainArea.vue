<template>
<div class="main"> 
  <!-- menu -->
  <div class="menu">
    <at-menu mode="vertical" active-name="1">
    <at-menu-item name="1">HTML</at-menu-item>
    <at-menu-item name="4">CSS</at-menu-item>
    <at-menu-item name="5">JavaScript</at-menu-item>
    </at-menu>
  </div>

    <!-- <div id="html">
      <h3>HTML</h3>
      <textarea name="html"></textarea>
    </div> -->
    <!-- <div id="css">
      <h3>CSS</h3>
      <textarea name="css"></textarea>
    </div> -->
    <!-- <div id="js">
      <h3>JavaScript</h3>
      <textarea name="js"></textarea>
    </div> -->

    <!-- <div class="codingArea">
      <h3>HTML</h3>
      <codemirror :options='settings.HTML.cmOptions' v-model="settings.HTML.htmlInput"></codemirror>
    </div> -->
    <!-- <div>
      <h3>CSS</h3>
      <codemirror :options='settings.CSS.cmOptions' v-model="settings.CSS.cssInput"></codemirror>
    </div>
     -->
    <div class="codingArea">
      <codemirror :options='settings.JS.cmOptions' v-model="settings.JS.jsInput"></codemirror>
    </div>
  
  <!-- Sandboxing -->
  <div id="output">
    <iframe class="outputArea" allowTransparency="true"></iframe>
  </div>
  <button @click="renderIt()">Run</button>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/mode/css/css.js";
import "codemirror/mode/javascript/javascript.js";
import "../styles/miku_theme.css";
//  require('codemirror/addon/fold/foldcode.js')
//  require('codemirror/addon/fold/foldgutter.js')
//  require('codemirror/addon/fold/brace-fold.js')
//  require('codemirror/addon/fold/xml-fold.js')
//  require('codemirror/addon/fold/indent-fold.js')
//  require('codemirror/addon/fold/markdown-fold.js')
//  require('codemirror/addon/fold/comment-fold.js')
export default {
  name: 'mainArea',
  data () {
    return {
      settings:{
        HTML:{
          htmlInput:'<a>JS Online</a>',
          cmOptions: {
            tabSize: 4,
            styleActiveLine: true,
            lineNumbers: true,
            line: true,
            mode: 'htmlmixed',
            lineWrapping: true,
            theme: 'miku'
          }
        },
        CSS:{
          cssInput: 'css input',
          cmOptions: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'css',
          lineWrapping: true,
          theme: 'miku'
          }
        },
        JS:{
          jsInput: 'const a = 10;',
          cmOptions: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'javascript',
          lineWrapping: true,
          theme: 'miku'
          }
        }
      },
      
    }
  },
  components:{codemirror},
  methods: {
   renderIt:function(that){
      (function(that) {
        
        // Base template
        var base_tpl =
            "<!doctype html>\n" +
            "<html>\n\t" +
            "<head>\n\t\t" +
            "<meta charset=\"utf-8\">\n\t\t" +
            "<title>Test</title>\n\n\t\t\n\t" +
            "</head>\n\t" +
            "<body>\n\t\n\t" +
            "</body>\n" +
            "</html>";
        
        var sourceCode = function() {
          // var html = document.querySelector('#html textarea').value,
          //     css = document.querySelector('#css textarea').value,
          //     js = document.querySelector('#js textarea').value,
          //     src = '';
          var html = that.settings.HTML.htmlInput,
              css = that.settings.CSS.cssInput,
              js = that.settings.JS.jsInput,
              src = '';
          console.log(html);
          console.log(css);
          console.log(js);
          // HTML
          src = base_tpl.replace('</body>', html + '</body>');
          
          // CSS
          css = '<style>' + css + '</style>';
          src = src.replace('</head>', css + '</head>');
          
          // Javascript
          js = '<script>' + js + '<\/script>';
          src = src.replace('</body>', js + '</body>');
          console.log(src);
          return src;
        };
        
        var render = function() {
          var source = sourceCode();
          
          var iframe = document.querySelector('#output iframe'),
              iframe_doc = iframe.contentDocument;
          
          iframe_doc.open();
          iframe_doc.write(source);
          iframe_doc.close();
        };
        render();
      }(this));
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  flex-direction: row;
}
.menu {
  width: 240px;
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
/* .cm-s-miku {
  background:url('../assets/miku.jpg') !important;
} */
iframe {
  border: 0;
  border-left: 1px solid #e2ecf4 !important;

  /* background:rgba(236, 242, 252, 0.2) */
}
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
