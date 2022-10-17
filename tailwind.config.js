module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Titillium Web', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/bg-kc.png')"
      }
    },
  },
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}


