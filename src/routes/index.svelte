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
	<section class="h-52 flex justify-center items-center bg-white">
		<p>
			ナチュラルできゅんと可愛い<br />
			商用利用OKの手書きイラストアイコン素材サイト
		</p>
	</section>

	<div class="inline-block text-center">
		<!--四角-->
		<div class="w-36 h-36 bg-black" />

		<!--丸-->
		<div class="w-36 h-36 bg-black rounded-full" />

		<!--三角1-->
		<div class="w-16 overflow-hidden inline-block">
			<div class=" h-11 w-11 bg-black rotate-45 transform origin-bottom-left" />
		</div>

		<!--三角2-->
		<div class="w-16 overflow-hidden inline-block">
			<div class=" h-11 w-11 bg-black -rotate-45 transform origin-top-left" />
		</div>

		<!--三角3-->
		<div class="w-11  overflow-hidden inline-block">
			<div class=" h-16  bg-black -rotate-45 transform origin-top-right" />
		</div>

		<!--三角4-->
		<div class="w-11  overflow-hidden inline-block">
			<div class=" h-16  bg-black rotate-45 transform origin-top-left" />
		</div>



    
		<!--ハート-->
		<div class="relative ml-4">
			<div class="transform rotate-45 w-20 h-32 absolute left-9 top-0 rounded-t-full bg-black" />
			<div class="transform -rotate-45 w-20 h-32 absolute  bg-black rounded-t-full rounded-b-sm" />
		</div>

	</div>

	<section class="text-gray-600 body-font">
		<div class="container px-5 py-24 mx-auto" />
	</section>

	<section class="bg-white py-8">
		<h2 class="text-xl title">新着から探す</h2>
		<div>
			<div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
				{#each items as item}
					<div class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-6 flex flex-row">
						<a href="item/{item.id}">
							<img
								class="hover:grow hover:shadow-lg"
								src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
							/>
							<div class="pt-3 text-left">
								<p class="">{item.name}</p>
								<p class="pt-1 text-xs text-gray-900">カテゴリー</p>
							</div>
						</a>
					</div>
				{/each}
			</div>
			<btn class="bg-salmon px-24 py-6 rounded-full text-lg text-white">新着一覧を見る</btn>
		</div>
	</section>
</main>

<style style lang="postcss">
	main {
		@apply text-center;
		@apply mx-auto;
	}

	.title {
		position: relative;
		display: inline-block;
		padding: 0 200px 30px;
		letter-spacing: 0.6rem;
	}

	.title:before,
	.title:after {
		content: '';
		position: absolute;
		top: 25%;
		display: inline-block;
		width: 150px;
		height: 1px;
		background-color: #666;
	}

	.title:before {
		left: 0;
	}

	.title:after {
		right: 0;
	}
</style>
