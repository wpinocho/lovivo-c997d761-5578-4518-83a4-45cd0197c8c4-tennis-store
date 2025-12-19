export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center">
      <img 
        src="/logo.svg" 
        alt="SneakPeak"
        className="h-10 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-bold font-display bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">SneakPeak</span>';
        }}
      />
    </a>
  )
}