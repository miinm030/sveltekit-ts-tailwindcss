module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
	theme: {
    extend: {
      colors: {
				white: '#ffffff', //白
				beige: '#FFFBF4', //ベージュ
				salmon: '#F7A49E', //サーモンピンク
				lightBlue: '#D0E6FC', //水色
				lightGreen: '#D5EFDA', //黄緑色
				yellow: '#FDEAC9', //やまぶき色
				brown: '#452200' //茶色
      },
			fontFamily: {
        'body': ['fot-tsukuardgothic-std, sans-serif']
      },
    }
  },

};
