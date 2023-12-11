<template>
    <div class="nav items-center justify-center">
    <container class = "grid grid-cols-8 max-w-screen">
        <RouterLink to ="/Casa" ><div style="color: black; height: 38px; font-size: x-large;" class = "shrink hover:shadow-lg hover:shadow-black transition-all"><i class ="i-mdi:house text-3xl"></i></div></RouterLink>
        <RouterLink to ="/Food" ><div style="color: black; height: 38px; font-size: x-large; font-family: 'Times New Roman', Times, serif;" class = "rest hover:shadow-lg hover:shadow-black transition-all"><b>Food</b></div></RouterLink>
        <RouterLink to ="/Workout"><div style="color: black; height: 38px; font-size: x-large; font-family: 'Times New Roman', Times, serif;" class = "rest hover:shadow-lg hover:shadow-black transition-all"><b>Workout</b></div></RouterLink>
        <RouterLink to ="/Store"><div style="color: black; height: 38px; font-size: x-large; font-family: 'Times New Roman', Times, serif;" class = "rest hover:shadow-lg hover:shadow-black transition-all"><b>Store</b></div></RouterLink>
        <RouterLink to ="/Travel"><div style="color: black; height: 38px; font-size: x-large; font-family: 'Times New Roman', Times, serif;" class = "rest hover:shadow-lg hover:shadow-black transition-all"><b>Travel</b></div></RouterLink>
        <RouterLink to ="/Music"><div style="color: black; height: 38px; font-size: x-large; font-family: 'Times New Roman', Times, serif;" class = "rest hover:shadow-lg hover:shadow-black transition-all"><b>Music</b></div></RouterLink>
        <RouterLink to ="/Games" ><div style ="color:black; height: 38px; font-size: x-large; font-family: 'Times New Roman', Times, serif;" class = "rest hover:shadow-lg hover:shadow-black transition-all"><b>Games</b></div></RouterLink>
        <RouterLink to ="/Movie"><div style ="color:black; height: 38px; font-size: x-large; font-family: 'Times New Roman', Times, serif;" class = "rest hover:shadow-lg hover:shadow-black transition-all"><b>Movies</b></div></RouterLink>
      </container>
  </div>
      <div>
          <RouterView />
      </div>
    <div class="footer items-center justify-center rounded-lg">
      <container class = "grid grid-cols-3 max-w-screen">
        <div>Phone
          <div>678-629-9237</div>
        </div>
        <div>Email
          <div>nick13campos02@gmail.com</div>
        </div>
        <div>Find us on:
          <div> 
          <a class ="i-mdi:twitter text-3xl" href="https://twitter.com"></a>
          <a class ="i-mdi:facebook text-3xl" href="https://facebook.com"></a>
          <a class ="i-mdi:youtube text-3xl" href="https://youtube.com"></a>
          </div>
          </div>

</container>
</div>
</template>