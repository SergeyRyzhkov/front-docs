import{_ as i,r as p,o as l,c,a as n,b as a,w as e,d as s,e as u}from"./app.40083dda.js";const r={},d=n("h1",{id:"eslint-prettier-stylelint-ts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#eslint-prettier-stylelint-ts","aria-hidden":"true"},"#"),s(" ESlint, Prettier, StyleLint (TS)")],-1),k={class:"table-of-contents"},v=s("\u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u043F\u0430\u043A\u0435\u0442\u044B"),q=s("\u0412 \u043A\u043E\u0440\u043D\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u0444\u0430\u0439\u043B\u044B"),m=s("Package.json"),b=s("VS Code Extension"),g=u(`<h2 id="\u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C-\u043F\u0430\u043A\u0435\u0442\u044B" tabindex="-1"><a class="header-anchor" href="#\u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C-\u043F\u0430\u043A\u0435\u0442\u044B" aria-hidden="true">#</a> \u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u043F\u0430\u043A\u0435\u0442\u044B</h2><div class="custom-container tip"><p class="custom-container-title">\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435 !</p><p>\u0412\u0435\u0440\u0441\u0438\u0438 \u043F\u0430\u043A\u0435\u0442\u043E\u0432 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0443\u0442\u043E\u0447\u043D\u044F\u0442\u044C !!!</p></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
    <span class="token property">&quot;prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.4.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.2.0&quot;</span><span class="token punctuation">,</span>

    <span class="token property">&quot;eslint-config-prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.3.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint-plugin-nuxt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint-plugin-prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint-plugin-tailwindcss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.1&quot;</span><span class="token punctuation">,</span>
    
    <span class="token property">&quot;prettier-plugin-tailwindcss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.1.4&quot;</span><span class="token punctuation">,</span>

    <span class="token property">&quot;@nuxtjs/eslint-config-typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.0.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@nuxtjs/eslint-module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.2&quot;</span><span class="token punctuation">,</span>

    <span class="token property">&quot;@typescript-eslint/eslint-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.3.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@typescript-eslint/parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.3.1&quot;</span><span class="token punctuation">,</span>

    <span class="token property">&quot;stylelint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^14.3.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;postcss-html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.3.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stylelint-config-recommended&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^6.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stylelint-config-recommended-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stylelint-config-standard&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^24.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stylelint-config-standard-scss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.0&quot;</span><span class="token punctuation">,</span>
    ...
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u0432-\u043A\u043E\u0440\u043D\u0435-\u043F\u0440\u043E\u0435\u043A\u0442\u0430-\u0441\u043E\u0437\u0434\u0430\u0435\u043C-\u0444\u0430\u0438\u043B\u044B" tabindex="-1"><a class="header-anchor" href="#\u0432-\u043A\u043E\u0440\u043D\u0435-\u043F\u0440\u043E\u0435\u043A\u0442\u0430-\u0441\u043E\u0437\u0434\u0430\u0435\u043C-\u0444\u0430\u0438\u043B\u044B" aria-hidden="true">#</a> \u0412 \u043A\u043E\u0440\u043D\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u0444\u0430\u0439\u043B\u044B</h2><p><em><code>.eslintrc.json</code></em></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;@nuxtjs&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;@nuxtjs/eslint-config-typescript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:prettier/recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:nuxt/recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:tailwindcss/recommended&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tailwindcss&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@typescript-eslint/explicit-module-boundary-types&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@typescript-eslint/no-explicit-any&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@typescript-eslint/no-var-requires&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@typescript-eslint/ban-ts-ignore&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@typescript-eslint/ban-ts-comment&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-extra-boolean-cast&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prettier/prettier&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;endOfLine&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tailwindcss/classnames-order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tailwindcss/enforces-shorthand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tailwindcss/migration-from-tailwind-2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tailwindcss/no-arbitrary-value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tailwindcss/no-custom-classname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tailwindcss/no-contradicting-classname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><code>.eslintignore</code></em></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em><code>.stylelintrc</code></em></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;stylelint-config-recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;stylelint-config-standard-scss&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;stylelint-config-recommended-vue&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;at-rule-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;ignoreAtRules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;tailwind&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;apply&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;variants&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;responsive&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;screen&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;declaration-block-trailing-semicolon&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-descending-specificity&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;block-no-empty&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;unit-allowed-list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;em&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rem&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><code>.editorconfig</code></em></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[*]
charset = utf-8
end_of_line = lf
indent_size = 4
indent_style = space
insert_final_newline = true
max_line_length = 130
tab_width = 2
trim_trailing_whitespace = true
ij_continuation_indent_size = 8
ij_formatter_off_tag = @formatter:off
ij_formatter_on_tag = @formatter:on
ij_formatter_tags_enabled = false
ij_smart_tabs = false
ij_visual_guides = none
ij_wrap_on_typing = false

[*.css]
indent_size = 2

\u0438 \u0442\u0430\u043A \u0434\u0430\u043B\u0435\u0435

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> Package.json</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxt&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxt build&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxt start&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint:script&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --ext .ts,vue --ignore-path .gitignore --fix src&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint:style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint \\&quot;**/*.{css,scss,sass,html,vue}\\&quot; --ignore-path .gitignore&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint:prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier --check .&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn lint:script &amp;&amp; yarn lint:style &amp;&amp; yarn lint:prettier&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier .  --write&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test:unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_OPTIONS=--experimental-vm-modules jest --no-cache --runInBand&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test:unit:watch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jest --watch&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test:unit:coverage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jest --coverage&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn test:unit&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u0412\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C, \u0441\u043E\u043E\u0442\u0432\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run lint:script
<span class="token function">npm</span> run lint:style
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vs-code-extension" tabindex="-1"><a class="header-anchor" href="#vs-code-extension" aria-hidden="true">#</a> VS Code Extension</h2><p>\u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u044F:</p>`,18),y={href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"},_=s("ESLint"),h=n("br",null,null,-1),f={href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",target:"_blank",rel:"noopener noreferrer"},x=s("Prettier - Code formatter");function j(w,E){const t=p("RouterLink"),o=p("ExternalLinkIcon");return l(),c("div",null,[d,n("nav",k,[n("ul",null,[n("li",null,[a(t,{to:"#\u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C-\u043F\u0430\u043A\u0435\u0442\u044B"},{default:e(()=>[v]),_:1})]),n("li",null,[a(t,{to:"#\u0432-\u043A\u043E\u0440\u043D\u0435-\u043F\u0440\u043E\u0435\u043A\u0442\u0430-\u0441\u043E\u0437\u0434\u0430\u0435\u043C-\u0444\u0430\u0438\u043B\u044B"},{default:e(()=>[q]),_:1})]),n("li",null,[a(t,{to:"#package-json"},{default:e(()=>[m]),_:1})]),n("li",null,[a(t,{to:"#vs-code-extension"},{default:e(()=>[b]),_:1})])])]),g,n("p",null,[n("a",y,[_,a(o)]),h,n("a",f,[x,a(o)])])])}var S=i(r,[["render",j],["__file","settings.html.vue"]]);export{S as default};
