<template>
    <div class="nav items-center justify-center">
    <container class = "grid grid-cols-8 gap-4 max-w-screen">
        <RouterLink to ="/Casa" ><div style="color: black; height: 38px;" class = "gap-6 hover:shadow-lg hover:shadow-black transition-all"><i class ="i-mdi:house text-2xl"></i></div> </RouterLink>
        <RouterLink to ="/Food" ><div style="color: black; height: 38px;" class = "gap-6 hover:shadow-lg hover:shadow-black transition-all">Food</div> </RouterLink>
        <RouterLink to ="/Workout"><div style="color: black; height: 38px;" class = "hover:shadow-lg hover:shadow-black transition-all">Workout</div></RouterLink>
        <RouterLink to ="/Store"><div style="color: black; height: 38px;" class = "hover:shadow-lg hover:shadow-black transition-all">Store</div></RouterLink>
        <RouterLink to ="/Travel"><div style="color: black; height: 38px;" class = "hover:shadow-lg hover:shadow-black transition-all">Travel</div></RouterLink>
        <RouterLink to ="/Music"><div style="color: black; height: 38px;" class = "hover:shadow-lg hover:shadow-black transition-all">Music</div></RouterLink>
        <RouterLink to ="/Games" ><div style ="color:black; height: 38px;" class = "hover:shadow-lg hover:shadow-black transition-all">Games</div></RouterLink>
        <RouterLink to ="/Movie"><div style ="color:black; height: 38px;" class = "hover:shadow-lg hover:shadow-black transition-all">Movies</div></RouterLink>
      </container>
  </div>
      <div>
          <RouterView />
      </div>
  <footer>
    <div class="footer">
  <h2 style="background-color: black;"><a class ="i-mdi:twitter" href="https://twitter.com"></a><a class ="i-mdi:facebook" href="https://facebook.com"></a></h2>
</div>
  </footer>
</template>