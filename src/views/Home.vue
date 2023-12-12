<template>
   
  <div class="row">
    <div class="leftcolumn">
      <div class="card hover:shadow-lg hover:shadow-black transition-all rounded-lg">
        <h2 style="color: black;">
         Latest in Presto World</h2>
        <h5 style="color: black;">One of my artist of the year...</h5>
        <!-- <div class="fakeimg" style="height:200px; color: black;">Image</div> -->
        <div class ="grid grid-cols-2 gap-4">
          <RouterLink to ="/Music"><div><img src = "./pics/Mitski.jpg"></div></RouterLink>
        <div class = "text-left" style ="color: black;"> Mitski Miyawaki is an American singer-songwriter who has garnered widespread acclaim for her confessional lyrics, captivating stage presence, and genre-bending music. Born in Mie Prefecture, Japan, to an American father and a Japanese mother, Mitski spent her early life in both Japan and the United States, which has greatly influenced her musical identity.</div></div>
      </div>
      <div class="card hover:shadow-lg hover:shadow-black transition-all rounded-lg">
        <!-- <h2 style="color: black;">TITLE HEADING</h2> -->
        <h5 style="color: black;">One of my games of the year...</h5>
        <!-- <div class="fakeimg" style="height:200px;">Image</div> -->
        <div class ="grid grid-cols-2 gap-4">
          <RouterLink to ="/Games"><div><img src = "./pics/LC.jpg"></div></RouterLink>
        <div class = "text-left" style ="color: black;">Lethal Company takes place in a retrofuturistic post-apocalyptic setting where players assume the role of contracted employees working for a corporation named The Company. The game's story revolves around players scavenging and collecting scrap from various abandoned, industrialized moons while facing numerous dangers.</div></div>
        <!-- <p style="color: black;">Some text..</p> -->
      </div>
    </div>
    <div class="rightcolumn">
      <RouterLink to ="About"><div class="card hover:shadow-lg hover:shadow-black transition-all rounded-lg">
        <h2 style="color: black;">About Me</h2>
        <!-- <div class="fakeimg" style="height:100px;">Image</div> -->
        <div class ="flex items-center justify-center"><img src = "./pics/Cass.png"></div>
        <p style="color: black;">Some text about me in culpa qui officia deserunt mollit anim..</p>
      </div></RouterLink>
      <div class="card rounded-lg">
        <h3 style="color: black;">Popular Posts</h3>
        <RouterLink to ="/Travel"><div class ="hover:shadow-lg hover:shadow-black transition-all"><img src ="./pics/Forks.jpg">My Dream Trip...</div></RouterLink><br>
        <RouterLink to ="/Movie"><div class = "hover:shadow-lg hover:shadow-black transition-all"><img src ="./pics/Napoleon.jpg">My Review on Napoleon...</div></RouterLink><br>
        <RouterLink to ="/Movie"><div class = "flex items-center justify-center hover:shadow-lg hover:shadow-black transition-all"><img src ="./pics/Dino.jpg" width="100" height="100"></div>My Review on Jurrasic World:Dominion...</RouterLink>
      </div>
    </div>
  </div>
  </template>
  
  