<script>
	let items = [
		{ id: '1', name: 'test1' },
		{ id: '2', name: 'test2' },
		{ id: '3', name: 'test3' },
		{ id: '4', name: 'test4' },
		{ id: '5', name: 'test5' },
		{ id: '6', name: 'test6' },
		{ id: '7', name: 'test7' }
	];
</script>




<main>

	<section>
		<p>ナチュラルできゅんと可愛い<br>
			商用利用OKの手書きイラストアイコン素材サイト</p>
	</section>

	<section class="text-gray-600 body-font">
		<div class="container px-5 py-24 mx-auto">
			<h2>新着から探す</h2>
			<ul class="flex flex-wrap -m-4">
				{#each items as item}
				<li class="lg:w-1/4 sm:w-1/2 p-4">
					<a href="item/{item.id}" class="flex relative bg-while rounded-2xl">
						<img alt="gallery" class="p-4 absolute inset-0 w-full h-full object-cover object-center" src="/images/test.svg" />
						<div class="px-8 py-10 text-brown relative z-10 w-full border-2 border-gray-200 bg-white opacity-0 hover:opacity-100">
							<p class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</p>
							<h3 class="title-font text-lg font-medium text-gray-900 mb-3">{item.name}</h3>
							<p class="leading-relaxed ">Photo booth fam kinfolk</p>
						</div>
					</a>
				</li>
				{/each}
			</ul>
		</div>
	</section>

</main>

<style style lang="postcss">
	main {
		@apply text-center;
		@apply mx-auto;
	}


	@screen sm {
		h1 {
			@apply max-w-none;
		}

		p {
			@apply max-w-none;
		}
	}
</style>
