import{_ as n,c as s}from"./app.d9745752.js";const a={},t=s(`<blockquote><p>wxj \u7684 <code>Vue Challenges</code>\u9898\u89E3</p></blockquote><h2 id="easy" tabindex="-1"><a class="header-anchor" href="#easy" aria-hidden="true">#</a> Easy</h2><h3 id="lifecycle-hooks" tabindex="-1"><a class="header-anchor" href="#lifecycle-hooks" aria-hidden="true">#</a> Lifecycle Hooks</h3><p>For this challenge, you&#39;ll use the Composition API: Lifecycle Hooks to complete the challenge. Here&#39;s what you need to implement \u{1F447}:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// Child.vue</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;timer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">)</span>


<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// The timer will work abnormally when the child component is toggled. Lets fix it.</span>
  timer<span class="token punctuation">.</span>value <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">.</span>value<span class="token operator">++</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>
      Child Component<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre></div><p>\u95EE\u9898: \u591A\u6B21\u70B9\u51FB toggle \u6309\u94AE\u540E, \u8BA1\u65F6\u663E\u793A\u9519\u8BEF(\u6BCF\u79D2\u591A\u6B21\u589E\u52A0) \u539F\u56E0: \u4F7F\u7528<code>v-if</code>\u6BCF\u6B21\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u5B9E\u4F8B\u65B0\u7684 interval \u4F1A\u589E\u52A0\u81F3\u4E4B\u524D\u5B58\u5728\u7684\u5B9E\u4F8B\u4E0A, \u9020\u6210\u5F02\u5E38\u5FEB\u901F\u589E\u52A0\u8BA1\u6570</p><p>\u9898\u89E3: 1): \u5728\u7EC4\u4EF6\u53D6\u6D88\u6302\u8F7D\u65F6\u6E05\u9664\u8BA1\u6570</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> inject<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&quot;timer&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&quot;count&quot;</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  timer<span class="token punctuation">.</span>value <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">.</span>value<span class="token operator">++</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>
      Child Component<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre></div><p>2): \u5C06<code>v-if</code>\u6539\u6210<code>v-show</code> (v-show \u4F7F\u7528 css \u5B9E\u73B0\u7EC4\u4EF6\u7684\u663E\u793A, \u4E0D\u4F1A\u521B\u5EFA\u65B0\u5B9E\u4F8B)</p><h3 id="next-dom-update-flush" tabindex="-1"><a class="header-anchor" href="#next-dom-update-flush" aria-hidden="true">#</a> Next DOM update flush</h3><p>When you mutate a reactive state in Vue.js, the resulting DOM updates are not applied synchronously.</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count<span class="token punctuation">.</span>value<span class="token operator">++</span>

  <span class="token doc-comment comment">/**
   * DOM is not yet updated, how can we make sure that the DOM gets updated
   * Make the output be true
  */</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">+</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;counter&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">&quot;counter&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;increment&quot;</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre></div><p>\u9898\u89E3: \u8C03\u7528<code>nextTick()</code>, \u6709\u4E24\u79CD\u5199\u6CD5</p><ol><li>async/await</li><li>\u5C06\u9700\u8981\u8FDB\u884C\u7684\u64CD\u4F5C\u4F5C\u51FD\u6570\u4F20\u5165<code>nextTick()</code></li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> nextTick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count<span class="token punctuation">.</span>value<span class="token operator">++</span>
  <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">+</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;counter&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">&quot;counter&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;increment&quot;</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre></div>`,15);function p(o,e){return t}var l=n(a,[["render",p],["__file","index.html.vue"]]);export{l as default};
