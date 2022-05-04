<script>
	import '../app.postcss';
</script>

<header class="text-gray-600 body-font pb-10">
  <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <a href="/" class="flex title-font font-medium items-center hover:opacity-50 text-gray-900 mb-4 md:mb-0">
      <h1><img src="/images/logo.svg" /></h1>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center text-brown">
      <a href="category" class="mr-5 hover:opacity-60">カテゴリー</a>
      <a href="how" class="mr-5 hover:opacity-60">利用規約</a>
      <a href="info" class="mr-5 hover:opacity-60">お問い合わせ</a>
    </nav>
  </div>
</header>

<slot />

<style>
.nav_item {
  position: relative;
  display: inline-block;
  text-decoration: none;
}
.nav_item::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  content: '';
  width: 100%;
  height: 1px;
  background: #333;
  transform: scale(0, 1);
  transform-origin: left top;
  transition: transform .3s;
}
.nav_item:hover::after {
  transform: scale(1, 1);
}

</style>