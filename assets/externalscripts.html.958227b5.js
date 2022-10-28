import{_ as a,r as t,o as p,c as o,a as n,b as e,w as c,e as l,d as u}from"./app.40083dda.js";const i={},r=l(`<h1 id="\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430-\u0432\u043D\u0435\u0448\u043D\u0438\u0445-\u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432" tabindex="-1"><a class="header-anchor" href="#\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430-\u0432\u043D\u0435\u0448\u043D\u0438\u0445-\u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432" aria-hidden="true">#</a> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432</h1><p><strong>\u041C\u043E\u0434\u0443\u043B\u044C</strong> \u043D\u0430\u0445\u043E\u0434\u0442\u0441\u044F \u0432 <code>src\\utils\\ExternalScript.ts</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">scriptExists</span> <span class="token operator">=</span> <span class="token punctuation">(</span>src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">script[src=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">loadScript</span> <span class="token operator">=</span> <span class="token punctuation">(</span>src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> async <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> defer <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">script[src=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> screl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      screl<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&quot;text/javascript&quot;</span><span class="token punctuation">;</span>
      screl<span class="token punctuation">.</span>async <span class="token operator">=</span> async<span class="token punctuation">;</span>
      screl<span class="token punctuation">.</span>defer <span class="token operator">=</span> defer<span class="token punctuation">;</span>
      screl<span class="token punctuation">.</span>src <span class="token operator">=</span> src<span class="token punctuation">;</span>

      document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>screl<span class="token punctuation">)</span><span class="token punctuation">;</span>

      screl<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
      screl<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;abort&quot;</span><span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
      screl<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;load&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        screl<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;data-loaded&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>screl<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>el <span class="token operator">&amp;&amp;</span> el<span class="token punctuation">.</span><span class="token function">hasAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;data-loaded&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> loadScriptOnScroll <span class="token operator">=</span> <span class="token punctuation">(</span>src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> async <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> defer <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> _reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">scriptExists</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
        <span class="token string">&quot;scroll&quot;</span><span class="token punctuation">,</span>
        <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> scroll <span class="token operator">=</span> window<span class="token punctuation">.</span>scrollY<span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>scroll <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
              <span class="token keyword">await</span> <span class="token function">loadScript</span><span class="token punctuation">(</span>src<span class="token punctuation">,</span> async<span class="token punctuation">,</span> defer<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
              <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token boolean">true</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">unloadScript</span> <span class="token operator">=</span> <span class="token punctuation">(</span>src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">script[src=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),k=n("strong",null,"\u041F\u0440\u0438\u043C\u0435\u0440",-1),d=u(),v=n("br",null,null,-1),m=n("strong",null,"\u041C\u043E\u0434\u0443\u043B\u044C - Google ReCaptcha v3",-1);function b(f,g){const s=t("RouterLink");return p(),o("div",null,[r,n("p",null,[k,d,v,e(s,{to:"/nuxt2/other/recaptchautil.html"},{default:c(()=>[m]),_:1})])])}var w=a(i,[["render",b],["__file","externalscripts.html.vue"]]);export{w as default};
