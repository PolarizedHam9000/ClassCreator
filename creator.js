// Ham's gei js file


window.onload = iteminfo;
function iteminfo(){
  window.amounttoadd = 1;
  var itemarea = document.getElementById("itemarea");
  var itemlist = ["a/a6/Grid_Stone","0/08/Grid_Grass_Block","b/bd/Grid_Dirt","6/6d/Grid_Podzol","0/03/Grid_Cobblestone","d/d3/Grid_Oak_Wood_Planks","f/f9/Grid_Spruce_Wood_Planks","a/a3/Grid_Birch_Wood_Planks","d/d3/Grid_Jungle_Wood_Planks","f/f1/Grid_Acacia_Wood_Planks","b/b5/Grid_Dark_Oak_Wood_Planks","4/4b/Grid_Oak_Sapling","0/08/Grid_Spruce_Sapling","b/b3/Grid_Birch_Sapling","b/b3/Grid_Jungle_Sapling","5/5b/Grid_Acacia_Sapling","c/c5/Grid_Dark_Oak_Sapling","e/e0/Grid_Bedrock","d/d7/Grid_Flowing_Water","1/13/Grid_Water","a/af/Grid_Flowing_Lava","6/61/Grid_Lava","b/bb/Grid_Sand","8/85/Grid_Red_Sand","0/03/Grid_Gravel","c/ce/Grid_Gold_Ore","9/9a/Grid_Iron_Ore","2/2b/Grid_Coal_Ore","5/52/Grid_Oak_Wood","c/ca/Grid_Spruce_Wood","5/56/Grid_Birch_Wood","d/d3/Grid_Jungle_Wood","d/d6/Grid_Acacia_Wood","e/ec/Grid_Dark_Oak_Wood","e/e5/Grid_Oak_Leaves","e/ed/Grid_Spruce_Leaves","3/39/Grid_Birch_Leaves","7/76/Grid_Jungle_Leaves","5/56/Grid_Sponge","0/00/Grid_Glass","9/96/Grid_Lapis_Lazuli_Ore","2/27/Grid_Lapis_Lazuli_Block","c/cc/Grid_Dispenser","1/12/Grid_Sandstone","5/52/Grid_Chiseled_Sandstone","2/22/Grid_Smooth_Sandstone","1/1d/Grid_Note_Block","9/9d/Grid_Powered_Rail","a/a2/Grid_Detector_Rail","3/32/Grid_Sticky_Piston","3/36/Grid_Cobweb","6/67/Grid_Shrub","6/6f/Grid_Grass","4/43/Grid_Fern","f/f6/Grid_Dead_Bush","3/3c/Grid_Piston","f/fa/Grid_White_Wool","0/07/Grid_Orange_Wool","f/fd/Grid_Magenta_Wool","f/fb/Grid_Light_Blue_Wool","e/ed/Grid_Yellow_Wool","a/a2/Grid_Lime_Wool","b/b3/Grid_Pink_Wool","d/d3/Grid_Gray_Wool","e/e5/Grid_Light_Gray_Wool","c/cd/Grid_Cyan_Wool","5/51/Grid_Purple_Wool","4/40/Grid_Blue_Wool","2/2a/Grid_Brown_Wool","f/fa/Grid_Green_Wool","2/2a/Grid_Red_Wool","4/45/Grid_Black_Wool","4/49/Grid_Dandelion","c/c7/Grid_Poppy","5/56/Grid_Blue_Orchid","3/33/Grid_Allium","7/79/Grid_Azure_Bluet","6/6f/Grid_Red_Tulip","e/ec/Grid_Orange_Tulip","4/4f/Grid_White_Tulip","6/61/Grid_Pink_Tulip","f/f6/Grid_Oxeye_Daisy","d/d8/Grid_Brown_Mushroom","0/01/Grid_Red_Mushroom","9/96/Grid_Block_of_Gold","3/34/Grid_Block_of_Iron","2/29/Grid_Stone_Slab","2/2a/Grid_Sandstone_Slab","f/f7/Grid_Cobblestone_Slab","b/b3/Grid_Bricks_Slab","4/46/Grid_Stone_Bricks_Slab","0/09/Grid_Quartz_Slab","4/43/Grid_Bricks","2/2b/Grid_TNT","b/bc/Grid_Bookshelf","7/7d/Grid_Moss_Stone","5/5d/Grid_Obsidian","3/32/Grid_Torch","2/21/Grid_Fire","3/3b/Grid_Monster_Spawner","6/6b/Grid_Oak_Wood_Stairs","c/c1/Grid_Chest","7/71/Grid_Diamond_Ore","f/f2/Grid_Block_of_Diamond","7/79/Grid_Crafting_Table","6/6a/Grid_Farmland","2/2e/Grid_Furnace","f/fb/Grid_Ladder","b/b6/Grid_Rail","7/7f/Grid_Cobblestone_Stairs","3/33/Grid_Lever","4/46/Grid_Stone_Pressure_Plate","d/d4/Grid_Wooden_Pressure_Plate","a/a9/Grid_Redstone_Ore","d/d9/Grid_Redstone_Torch","8/81/Grid_Stone_Button","9/9f/Grid_Snow_%28layer%29","2/2e/Grid_Ice","6/6c/Grid_Snow","f/fb/Grid_Cactus","0/06/Grid_Clay_%28block%29","1/10/Grid_Jukebox","c/c8/Grid_Fence","b/be/Grid_Pumpkin","8/86/Grid_Netherrack","e/e4/Grid_Soul_Sand","f/f8/Grid_Glowstone","8/8f/Grid_Portal","9/95/Grid_Jack_o%27Lantern","9/92/Grid_White_Stained_Glass","b/bd/Grid_Orange_Stained_Glass","4/4d/Grid_Magenta_Stained_Glass","2/25/Grid_Light_Blue_Stained_Glass","5/55/Grid_Yellow_Stained_Glass","a/a5/Grid_Lime_Stained_Glass","7/71/Grid_Pink_Stained_Glass","b/bb/Grid_Gray_Stained_Glass","2/26/Grid_Light_Gray_Stained_Glass","f/f3/Grid_Cyan_Stained_Glass","b/b8/Grid_Purple_Stained_Glass","3/35/Grid_Blue_Stained_Glass","2/29/Grid_Brown_Stained_Glass","5/5f/Grid_Green_Stained_Glass","d/d8/Grid_Red_Stained_Glass","9/9f/Grid_Black_Stained_Glass","b/b2/Grid_Trapdoor","8/84/Grid_Stone_Bricks","9/99/Grid_Mossy_Stone_Bricks","d/da/Grid_Cracked_Stone_Bricks","4/4b/Grid_Chiseled_Stone_Bricks","0/07/Grid_Huge_Brown_Mushroom","3/33/Grid_Huge_Red_Mushroom","0/00/Grid_Iron_Bars","3/30/Grid_Glass_Pane","e/ee/Grid_Melon_%28block%29","2/29/Grid_Vines","c/c2/Grid_Fence_Gate","3/3c/Grid_Brick_Stairs","a/af/Grid_Stone_Brick_Stairs","a/aa/Grid_Mycelium","4/49/Grid_Lily_Pad","6/62/Grid_Nether_Brick","5/59/Grid_Nether_Brick_Fence","6/68/Grid_Nether_Brick_Stairs","0/00/Grid_Enchantment_Table","f/f5/Grid_End_Portal_%28block%29","5/50/Grid_End_Stone","b/b1/Grid_Dragon_Egg","f/fa/Grid_Redstone_Lamp","5/5c/Grid_Oak_Wood_Slab","6/60/Grid_Spruce_Wood_Slab","b/bc/Grid_Birch_Wood_Slab","3/3f/Grid_Jungle_Wood_Slab","b/b3/Grid_Acacia_Wood_Slab","8/86/Grid_Dark_Oak_Wood_Slab","0/0d/Grid_Sandstone_Stairs","e/e7/Grid_Emerald_Ore","5/56/Grid_Ender_Chest","9/90/Grid_Tripwire_Hook","2/27/Grid_Block_of_Emerald","2/24/Grid_Spruce_Wood_Stairs","d/de/Grid_Birch_Wood_Stairs","b/b9/Grid_Jungle_Wood_Stairs","0/07/Grid_Command_Block","c/cb/Grid_Beacon","a/a9/Grid_Cobblestone_Wall","6/63/Grid_Mossy_Cobblestone_Wall","c/c6/Grid_Wooden_Button","1/13/Grid_Anvil","b/bb/Grid_Trapped_Chest","b/b9/Grid_Weighted_Pressure_Plate_%28Light%29","6/65/Grid_Weighted_Pressure_Plate_%28Heavy%29","1/18/Grid_Daylight_Sensor","2/2e/Grid_Block_of_Redstone","8/82/Grid_Nether_Quartz_Ore","c/cb/Grid_Hopper","0/04/Grid_Block_of_Quartz","8/8d/Grid_Chiseled_Quartz_Block","5/59/Grid_Pillar_Quartz_Block","c/c5/Grid_Quartz_Stairs","5/50/Grid_Activator_Rail","7/7f/Grid_Dropper","6/6b/Grid_White_Stained_Clay","3/3c/Grid_Orange_Stained_Clay","c/ce/Grid_Magenta_Stained_Clay","a/a0/Grid_Light_Blue_Stained_Clay","e/ef/Grid_Yellow_Stained_Clay","a/aa/Grid_Lime_Stained_Clay","6/68/Grid_Pink_Stained_Clay","1/18/Grid_Gray_Stained_Clay","4/47/Grid_Light_Gray_Stained_Clay","7/78/Grid_Cyan_Stained_Clay","6/6a/Grid_Purple_Stained_Clay","9/91/Grid_Blue_Stained_Clay","2/20/Grid_Brown_Stained_Clay","1/19/Grid_Green_Stained_Clay","c/cd/Grid_Red_Stained_Clay","9/91/Grid_Black_Stained_Clay","5/55/Grid_White_Stained_Glass_Pane","f/f1/Grid_Orange_Stained_Glass_Pane","9/91/Grid_Magenta_Stained_Glass_Pane","2/2a/Grid_Light_Blue_Stained_Glass_Pane","6/6e/Grid_Yellow_Stained_Glass_Pane","a/ae/Grid_Lime_Stained_Glass_Pane","8/86/Grid_Pink_Stained_Glass_Pane","f/f0/Grid_Gray_Stained_Glass_Pane","7/79/Grid_Light_Gray_Stained_Glass_Pane","9/97/Grid_Cyan_Stained_Glass_Pane","4/41/Grid_Purple_Stained_Glass_Pane","f/fe/Grid_Blue_Stained_Glass_Pane","c/ce/Grid_Brown_Stained_Glass_Pane","9/9c/Grid_Green_Stained_Glass_Pane","7/71/Grid_Red_Stained_Glass_Pane","7/7b/Grid_Black_Stained_Glass_Pane","7/76/Grid_Acacia_Leaves","5/57/Grid_Dark_Oak_Leaves","d/d6/Grid_Acacia_Wood","e/ec/Grid_Dark_Oak_Wood","8/85/Grid_Acacia_Wood_Stairs","5/5c/Grid_Dark_Oak_Wood_Stairs","1/1f/Grid_Hay_Bale","7/72/Grid_White_Carpet","3/3c/Grid_Orange_Carpet","0/01/Grid_Magenta_Carpet","4/4b/Grid_Light_Blue_Carpet","6/63/Grid_Yellow_Carpet","3/34/Grid_Lime_Carpet","b/be/Grid_Pink_Carpet","2/2b/Grid_Gray_Carpet","3/3a/Grid_Light_Gray_Carpet","d/d4/Grid_Cyan_Carpet","5/55/Grid_Purple_Carpet","5/5a/Grid_Blue_Carpet","a/ad/Grid_Brown_Carpet","4/41/Grid_Green_Carpet","d/dc/Grid_Red_Carpet","e/e6/Grid_Black_Carpet","6/6d/Grid_Hardened_Clay","b/b2/Grid_Block_of_Coal","b/b2/Grid_Packed_Ice","b/bc/Grid_Sunflower","0/0a/Grid_Lilac","c/c4/Grid_Double_Tallgrass","d/d9/Grid_Large_Fern","c/c3/Grid_Rose_Bush","e/eb/Grid_Peony","f/fb/Grid_Flint_and_Steel","8/83/Grid_Apple","4/49/Grid_Bow","c/cc/Grid_Arrow","a/ad/Grid_Coal","5/58/Grid_Charcoal","7/72/Grid_Diamond","6/6b/Grid_Iron_Ingot","4/40/Grid_Gold_Ingot","d/d5/Grid_Iron_Sword","0/01/Grid_Iron_Shovel","1/1d/Grid_Iron_Pickaxe","1/1d/Grid_Iron_Axe","c/cf/Grid_Wooden_Sword","2/21/Grid_Wooden_Shovel","3/3d/Grid_Wooden_Pickaxe","2/2a/Grid_Wooden_Axe","e/e1/Grid_Stone_Sword","f/ff/Grid_Stone_Shovel","d/d2/Grid_Stone_Pickaxe","5/55/Grid_Stone_Axe","8/81/Grid_Diamond_Sword","8/8e/Grid_Diamond_Shovel","c/ce/Grid_Diamond_Pickaxe","8/8d/Grid_Diamond_Axe","6/65/Grid_Golden_Sword","9/9d/Grid_Golden_Shovel","3/3f/Grid_Golden_Pickaxe","9/93/Grid_Golden_Axe","e/e9/Grid_Stick","f/f1/Grid_Bowl","f/fd/Grid_Mushroom_Stew","f/fa/Grid_String","a/a7/Grid_Feather","7/7a/Grid_Gunpowder","e/ea/Grid_Wooden_Hoe","b/ba/Grid_Stone_Hoe","f/f8/Grid_Iron_Hoe","c/c9/Grid_Diamond_Hoe","7/77/Grid_Golden_Hoe","6/68/Grid_Seeds","c/c4/Grid_Wheat","d/d4/Grid_Bread","2/24/Grid_Leather_Cap","e/ed/Grid_Leather_Tunic","c/ce/Grid_Leather_Pants","0/06/Grid_Leather_Boots","c/c3/Grid_Chain_Helmet","7/77/Grid_Chain_Chestplate","2/26/Grid_Chain_Leggings","9/93/Grid_Chain_Boots","e/ec/Grid_Iron_Helmet","8/8d/Grid_Iron_Chestplate","9/99/Grid_Iron_Leggings","f/f5/Grid_Iron_Boots","b/bd/Grid_Diamond_Helmet","e/e7/Grid_Diamond_Chestplate","e/e3/Grid_Diamond_Leggings","d/d1/Grid_Diamond_Boots","4/45/Grid_Golden_Helmet","6/67/Grid_Golden_Chestplate","f/f8/Grid_Golden_Leggings","f/fb/Grid_Golden_Boots","8/82/Grid_Flint","e/ec/Grid_Raw_Porkchop","b/bd/Grid_Cooked_Porkchop","c/cc/Grid_Painting","4/4e/Grid_Golden_Apple","0/06/Grid_Sign","7/70/Door_wood_old","2/2a/Grid_Bucket","b/bf/Grid_Water_Bucket","c/cf/Grid_Lava_Bucket","5/58/Grid_Minecart","0/09/Grid_Saddle","2/23/Door_iron_old","f/fd/Grid_Redstone","6/67/Grid_Snowball","5/59/Grid_Boat","6/66/Grid_Leather","d/db/Grid_Milk","7/75/Grid_Brick","2/2c/Grid_Clay","7/79/Grid_Sugar_Canes","6/6c/Grid_Paper","e/ec/Grid_Book","c/c9/Grid_Slimeball","f/f0/Grid_Minecart_with_Chest","3/36/Grid_Minecart_with_Furnace","2/27/Grid_Egg","f/f2/Grid_Compass","c/c7/Grid_Fishing_Rod","3/32/Grid_Clock","8/85/Grid_Glowstone_Dust","6/6a/Grid_Raw_Fish","c/c0/Grid_Raw_Salmon","8/81/Grid_Clownfish","d/df/Grid_Pufferfish","2/29/Grid_Cooked_Fish","a/a5/Grid_Cooked_Salmon","d/d6/Grid_Ink_Sac","0/0d/Grid_Rose_Red","f/fd/Grid_Cactus_Green","7/7d/Grid_Cocoa_Beans","7/76/Grid_Lapis_Lazuli","a/a0/Grid_Purple_Dye","c/ca/Grid_Cyan_Dye","1/16/Grid_Light_Gray_Dye","5/54/Grid_Gray_Dye","b/bb/Grid_Pink_Dye","a/a6/Grid_Lime_Dye","d/df/Grid_Dandelion_Yellow","a/ae/Grid_Light_Blue_Dye","8/8f/Grid_Magenta_Dye","b/b2/Grid_Orange_Dye","c/c0/Grid_Bone_Meal","e/e8/Grid_Bone","9/96/Grid_Sugar","2/28/Grid_Cake","a/a3/Grid_Bed","e/e6/Grid_Redstone_Repeater","9/95/Grid_Cookie","a/aa/Grid_Map","1/13/Grid_Shears","e/ec/Grid_Melon","7/72/Grid_Pumpkin_Seeds","7/75/Grid_Melon_Seeds","6/61/Grid_Raw_Beef","d/da/Grid_Steak","e/e5/Grid_Raw_Chicken","2/2e/Grid_Cooked_Chicken","3/33/Grid_Rotten_Flesh","1/13/Grid_Ender_Pearl","1/18/Grid_Blaze_Rod","6/66/Grid_Ghast_Tear","1/1d/Grid_Gold_Nugget","d/d2/Grid_Nether_Wart","9/97/Grid_Water_Bottle","2/22/Grid_Glass_Bottle","0/03/Grid_Spider_Eye","2/29/Grid_Fermented_Spider_Eye","0/09/Grid_Blaze_Powder","e/e8/Grid_Magma_Cream","7/70/Grid_Brewing_Stand","c/ca/Grid_Cauldron","0/0e/Grid_Eye_of_Ender","1/11/Grid_Glistering_Melon","f/fc/Grid_Spawn_Creeper","3/35/Grid_Spawn_Skeleton","5/50/Grid_Spawn_Spider","3/30/Grid_Spawn_Zombie","1/11/Grid_Spawn_Slime","3/3f/Grid_Spawn_Ghast","7/7b/Grid_Spawn_Pig_Zombie","6/62/Grid_Spawn_Enderman","e/ee/Grid_Spawn_Cave_Spider","1/11/Grid_Spawn_Silverfish","f/ff/Grid_Spawn_Blaze","2/25/Grid_Spawn_Magma_Cube","f/f3/Grid_Spawn_Bat","7/7c/Grid_Spawn_Witch","0/09/Grid_Spawn_Pig","f/f8/Grid_Spawn_Sheep","8/80/Grid_Spawn_Cow","b/b0/Grid_Spawn_Chicken","5/58/Grid_Spawn_Squid","4/4b/Grid_Spawn_Wolf","9/91/Grid_Spawn_Mooshroom","e/e8/Grid_Spawn_Ocelot","e/e0/Grid_Spawn_Horse","0/02/Grid_Spawn_Villager"];
  var nostacklist = ["MAP","IRON SWORD","IRON SHOVEL","IRON PICKAXE","IRON AXE","IRON HOE","WOODEN SWORD","WOODEN SHOVEL","WOODEN PICKAXE","WOODEN AXE","WOODEN HOE","STONE SWORD","STONE SHOVEL","STONE PICKAXE","STONE AXE","STONE HOE","DIAMOND SWORD","DIAMOND SHOVEL","DIAMOND PICKAXE","DIAMOND AXE","DIAMOND HOE","GOLDEN SWORD","GOLDEN SHOVEL","GOLDEN PICKAXE","GOLDEN AXE","GOLDEN HOE","BOW","FLINT AND STEEL","MUSHROOM STEW","LEATHER CAP","LEATHER TUNIC","LEATHER PANTS","LEATHER BOOTS","CHAIN HELMET","CHAIN CHESTPLATE","CHAIN LEGGINGS","CHAIN BOOTS","IRON HELMET","IRON CHESTPLATE","IRON LEGGINGS","IRON BOOTS","DIAMOND HELMET","DIAMOND CHESTPLATE","DIAMOND LEGGINGS","DIAMOND BOOTS","GOLDEN HELMET","GOLDEN CHESTPLATE","GOLDEN LEGGINGS","GOLDEN BOOTS","LAVA BUCKET","WATER BUCKET","SADDLE","MINECART","IRON DOOR","WOODEN DOOR","BOAT","MILK","MINECART WITH CHEST","MINECART WITH FURNACE","FISHING ROD","COMPASS","CLOCK","BED","SHEARS","CAKE","WATER BOTTLE"];
  var helmets = ["LEATHER CAP","CHAIN HELMET","IRON HELMET","DIAMOND HELMET","GOLDEN HELMET"];
  var chestplates = ["LEATHER TUNIC","CHAIN CHESTPLATE","IRON CHESTPLATE","DIAMOND CHESTPLATE","GOLDEN CHESTPLATE"];
  var leggings = ["LEATHER PANTS","CHAIN LEGGINGS","IRON LEGGINGS","DIAMOND LEGGINGS","GOLDEN LEGGINGS"];
  var boots = ["LEATHER BOOTS","CHAIN BOOTS","IRON BOOTS","DIAMOND BOOTS","GOLDEN BOOTS"];
  var armorimages = ["http://i.imgur.com/M4UTa0x.png","http://i.imgur.com/F0MGF5h.png","http://i.imgur.com/QcsOvla.png","http://i.imgur.com/aVtKERb.png","http://i.imgur.com/WyWVsbu.png","http://i.imgur.com/2zkO3Qi.png","http://i.imgur.com/aEJAvx6.png","http://i.imgur.com/5Z2Hix8.png","http://i.imgur.com/Z78JHQD.png","http://i.imgur.com/O0SG8vx.png","http://i.imgur.com/UlRFhpd.png","http://i.imgur.com/qpx7p7R.png","http://i.imgur.com/gb6qk1F.png","http://i.imgur.com/IvhCQE0.png","http://i.imgur.com/Up45HKW.png","http://i.imgur.com/5siWMCq.png","http://i.imgur.com/oDQ1TdR.png","http://i.imgur.com/CmE0kyV.png","http://i.imgur.com/CIUphY3.png","http://i.imgur.com/v0jzULy.png"];
  for(i=0;i < itemlist.length;i++){
    var item = document.createElement("img");
    if (itemlist[i].match("2/21/Grid_Fire")){
      item.setAttribute("src","http://hydra-media.cursecdn.com/minecraft.gamepedia.com/" + itemlist[i] + ".gif");
      item.setAttribute("id",item.src.substring(66,item.src.search(".gif")).replace(/_/g," ").toUpperCase());
    }
    else if (itemlist[i].match("Door_wood_old")){
      item.setAttribute("src","http://hydra-media.cursecdn.com/minecraft.gamepedia.com/" + itemlist[i] + ".png");
      item.setAttribute("id","WOODEN DOOR");
    }
    else if (itemlist[i].match("Door_iron_old")){
      item.setAttribute("src","http://hydra-media.cursecdn.com/minecraft.gamepedia.com/" + itemlist[i] + ".png");
      item.setAttribute("id","IRON DOOR");
    }
    else{
      item.setAttribute("src","http://hydra-media.cursecdn.com/minecraft.gamepedia.com/" + itemlist[i] + ".png");
      item.setAttribute("id",item.src.substring(66,item.src.search(".png")).replace(/_/g," ").replace(/%/g,"").replace(/27/g,"'").replace(/28/g,"(").replace(/29/g,")").toUpperCase());
    }
    item.setAttribute("class","items");
    item.setAttribute("data-name",item.id);
    item.setAttribute("ondragstart","drag(event)");
    item.setAttribute("ondrop","drop(event)");
    item.setAttribute("ondragover","allowDrop(event)");
    item.setAttribute("onmouseenter","createDescription(event)");
    item.setAttribute("onmouseleave","removeDescription(event)");
    itemarea.appendChild(item);
  }
  for (i=0;i < nostacklist.length;i++){
    document.getElementById(nostacklist[i]).setAttribute("data-stackable","false");
  }
  for (i=0;i < helmets.length;i++){
    document.getElementById(helmets[i]).setAttribute("data-armor-type","helmet");
    var newhelmet = document.createElement("img");
    newhelmet.setAttribute("style","position:absolute;z-index:3;top:36px;left:95px;opacity:0.0");
    newhelmet.setAttribute("id",helmets[i]);
    newhelmet.setAttribute("draggable","false");
    newhelmet.setAttribute("src",armorimages[i]);
	newhelmet.setAttribute("class","armor");
    var node = document.getElementById("test")
    node.insertBefore(newhelmet,node.childNodes[4]);
  }
  for (i=0;i < chestplates.length;i++){
    document.getElementById(chestplates[i]).setAttribute("data-armor-type","chestplate");
    var newchestplate = document.createElement("img");
    newchestplate.setAttribute("style","position:absolute;z-index:3;top:65px;left:82px;opacity:0.0");
    newchestplate.setAttribute("id",chestplates[i]);
    newchestplate.setAttribute("draggable","false");
    newchestplate.setAttribute("src",armorimages[i+5]);
	newchestplate.setAttribute("class","armor");
    var node = document.getElementById("test")
    node.insertBefore(newchestplate ,node.childNodes[4]);
  }
  for (i=0;i < leggings.length;i++){
    document.getElementById(leggings[i]).setAttribute("data-armor-type","leggings");
    var newleggings = document.createElement("img");
    newleggings.setAttribute("style","position:absolute;z-index:2;top:100px;left:98px;opacity:0.0");
    newleggings.setAttribute("id",leggings[i]);
    newleggings.setAttribute("draggable","false");
    newleggings.setAttribute("src",armorimages[i+10]);
	newleggings.setAttribute("class","armor");
    var node = document.getElementById("test")
    node.insertBefore(newleggings,node.childNodes[4]);
  }
  for(i=0;i < boots.length;i++){
    document.getElementById(boots[i]).setAttribute("data-armor-type","boots");
    var newboots = document.createElement("img");
    newboots.setAttribute("style","position:absolute;z-index:3;top:135px;left:97px;opacity:0.0");
    newboots.setAttribute("id",boots[i]);
    newboots.setAttribute("draggable","false");
    newboots.setAttribute("src",armorimages[i+15]);
	newboots.setAttribute("class","armor");
    var node = document.getElementById("test")
    node.insertBefore(newboots,node.childNodes[4]);
  }
}
function allowDrop(ev){
  var target = ev.target;
  var item = window.movingItem;
  var nickname = window.renamed;
  var lore = window.itemlore;
  if (target.getAttribute("data-stackable") != "false" && target.parentNode.childNodes[0].innerHTML != "64" && target.parentNode.id != "itemarea" && !(target.isSameNode(item))){
    if (target.parentNode.className == "hotbararea" && item.parentNode.id == "itemarea" && nickname && lore && (target.getAttribute("data-name") != nickname || target.getAttribute("data-lore") != lore)){
      return;
    }
    else if (target.parentNode.className == "hotbararea" && item.parentNode.className == "hotbararea" && !(target.isEqualNode(item))){
      return;
    }
	else if (target.parentNode.className == "hotbararea" && ((target.getAttribute("data-name") == nickname && target.getAttribute("data-lore") == lore) || target.isEqualNode(item))){
		ev.preventDefault();
	}
  }
  if (target.tagName == "DIV" && target.childNodes.length < 2){
    if (target.className == "hotbararea armorslot" && item.getAttribute("data-armor-type") == target.id){
      ev.preventDefault();
    }
    else if (target.className == "hotbararea"){
      ev.preventDefault();
    }
  }
  if ((target.parentNode.id == "itemarea" || target.id == "body") && item.parentNode.id != "itemarea"){
    ev.preventDefault();
  }
}
function drag(ev){
  window.movingItem = ev.target;
  window.movingItemAmount = window.movingItem.parentNode.childNodes[0];
  window.hasbeendonealready = "false";
  window.movingItemclone = window.movingItem;
  if (ev.target.nextSibling && ev.target.nextSibling.tagName == "P"){
    ev.target.parentNode.removeChild(ev.target.nextSibling);
  }
}
function drop(ev){
  ev.preventDefault();
  if (ev.target.className == "hotbararea" || ev.target.className == "hotbararea armorslot"){
    if (window.movingItem.parentNode.id == "itemarea"){
      window.movingItem = window.movingItem.cloneNode(false);
      if (window.renamed){
        window.movingItem.setAttribute("data-name",window.renamed);
      }
      else if (!(window.renamed)){
        window.movingItem.setAttribute("data-name",window.movingItem.id);
      }
		if (window.itemlore){
			window.movingItem.setAttribute("data-lore",window.itemlore);
		}
		else if (!(window.itemlore)){
			window.movingItem.setAttribute("data-lore","");
		}
      var amount = window.amounttoadd;
      if (window.movingItem.getAttribute("data-stackable") == "false"){
        amount = 1;
      }
    }
    else {
      amount = window.movingItemAmount.innerHTML;
      window.movingItemAmount.innerHTML = "";
    }
    if (window.movingItemclone.parentNode.className == "hotbararea armorslot" && window.hasbeendonealready == "false"){
      document.getElementById(window.movingItem.id).style.opacity = "0.0";
    }
    else if (ev.target.className == "hotbararea armorslot"){
      document.getElementById(window.movingItemclone.id).style.opacity = "1.0";
	  window.hasbeendonealready = "true";
    }
    ev.target.appendChild(window.movingItem);
    if (amount){
      ev.target.childNodes[0].innerHTML = amount;
    }
    if (ev.target.firstChild.innerHTML == "1"){
      ev.target.firstChild.style.opacity = "0.0";
    }
    else {
      ev.target.firstChild.style.opacity = "1.0";
    }
    window.movingItem.removeAttribute("style");
  }
  else if (ev.target.className == "items"){
    if (ev.target.parentNode.className == "hotbararea"){
      if (window.movingItem.parentNode.className == "hotbararea"){
        var num = (Number(window.movingItemAmount.innerHTML) + Number(ev.target.previousSibling.innerHTML)).toString();
        amountcheck(num);
        ev.target.previousSibling.innerHTML = window.newnum;
        deleteprevious();
      }
      else if (window.movingItem.parentNode.id == "itemarea" && window.hasbeendonealready == "false"){
        var num = (Number(window.amounttoadd) + Number(ev.target.previousSibling.innerHTML));
        amountcheck(num);
        ev.target.previousSibling.innerHTML = window.newnum;
        window.hasbeendonealready = "true";
      }
    }
    else if (ev.target.parentNode.id == "itemarea"){
      deleteprevious();
    }
    if (ev.target.previousSibling.innerHTML == "1"){
      ev.target.previousSibling.style.opacity = "0.0";
    }
    else {
      ev.target.previousSibling.style.opacity = "1.0";
    }
  }
  else if (ev.target.id == "body"){
    deleteprevious();
  }
  setTimeout(function testing(){if (window.movingItem.nextSibling && window.movingItem.nextSibling.className == "tooltip"){window.movingItem.parentNode.removeChild(window.movingItem.nextSibling);}},100);
}
function newamount(ev){
  if (ev.target.value <= 64 && ev.target.value >= 1){
    window.amounttoadd = Math.floor(ev.target.value);
    ev.target.value = window.amounttoadd;
  }else if (ev.target.value != ""){
    alert("Value must be a number between 1 and 64.");
    ev.target.value = "";
  }else if (ev.target.value == ""){
    window.amounttoadd = "1";
  }
}
function amountcheck(num){
  if (num > 64){
    window.newnum = (num - (num - 64)).toString();
  }
  else {
    window.newnum = num.toString();
  }
}
function find(ev){
  var itemtofind = ev.target.value;
  window.itemarea = document.getElementById("itemarea");
  for (i=0;i < itemarea.childNodes.length;i++){
    if (itemtofind.toUpperCase() != itemarea.childNodes[i].id.match(itemtofind.toUpperCase())){
      itemarea.childNodes[i].setAttribute("style","display:none");
    }
    else {
      itemarea.childNodes[i].removeAttribute("style");
    }
  }
}
function skin(ev){
  document.getElementById("test").childNodes[3].src = "http://achievecraft.com/tools/skin/120/" + ev.target.value + ".png";
  if (!(ev.target.value)){
    document.getElementById("test").childNodes[3].src = "http://achievecraft.com/tools/skin/120/PolarizedHam9000.png";
  }
}
function renameItem(ev){
  if (ev.target.value == ""){
    ev.target.removeAttribute("value");
    window.renamed = undefined;
  }
  else {
    window.renamed = ev.target.value;
  }
}
function ItemLore(ev){
	if (ev.target.value == ""){
		ev.target.removeAttribute("value");
		window.itemlore = undefined;
	}
	else {
		window.itemlore = ev.target.value;
	}
}
function deleteprevious(ev){
  if (window.movingItemclone.parentNode.className == "hotbararea armorslot"){
    document.getElementById(window.movingItemclone.id).style.opacity = "0.0";
  }
  window.movingItemAmount.innerHTML = "";
  window.movingItem.style.opacity = "0.0";
  window.movingItem.parentNode.removeChild(window.movingItem.parentNode.childNodes[1]);         
}
function createDescription(ev){
  var newParagraph = document.createElement("p");
  var namespan = document.createElement("span");
  var contentname = document.createTextNode(ev.target.getAttribute("data-name"));
  namespan.appendChild(contentname);
  newParagraph.appendChild(namespan);
  if (ev.target.getAttribute("data-lore")){
	var contentlore = document.createTextNode("\n" + ev.target.getAttribute("data-lore"));
	var lorespan = document.createElement("span");
	lorespan.setAttribute("style","color: blue");
	lorespan.appendChild(contentlore);
	newParagraph.appendChild(lorespan);
  }
  newParagraph.setAttribute("class","tooltip");
  newParagraph.setAttribute("style","width:" + ev.target.getAttribute("data-name").length * 12 + "px");
  newParagraph.setAttribute("ondrop","drop(event)");
  newParagraph.setAttribute("ondragover","allowDrop(event)");
  ev.target.parentNode.insertBefore(newParagraph,ev.target.nextSibling);
}
function removeDescription(ev){
  if (ev.target.nextSibling && ev.target.nextSibling.tagName == "P"){
    ev.target.parentNode.removeChild(ev.target.nextSibling);
  }
}
function clearInv(ev){
	var slotlist = document.getElementsByClassName("hotbararea");
	var armorlist = document.getElementsByClassName("armor");
	for (i=0;i < slotlist.length;i++){
		if (slotlist[i].childNodes[1]){
			slotlist[i].removeChild(slotlist[i].childNodes[1]);
			slotlist[i].firstChild.innerHTML = "";
		}
	}
	for (i=0;i < armorlist.length;i++){
		armorlist[i].style.opacity = "0.0";
	}
}
function saveInv(ev){
	localStorage.clear();
	var slotlist = document.getElementsByClassName("hotbararea");
	for (i=0;i < slotlist.length;i++){
		if (slotlist[i].childNodes[1]){
			for (h=0;h < slotlist[i].childNodes[1].attributes.length;h++){
				localStorage.setItem(slotlist[i].id+slotlist[i].childNodes[1].attributes[h].name,slotlist[i].childNodes[1].attributes[h].value);
			}
			localStorage.setItem(slotlist[i].id+"amount",slotlist[i].firstChild.innerHTML);
		}
	}
}
function loadInv(ev){
	clearInv();
	var slotlist = document.getElementsByClassName("hotbararea");
	var attrlist = ["src","id","data-name","data-armor-type","data-stackable","class","ondragstart","ondrop","onmouseenter","onmouseleave","ondragover"];
	for (i=0;i < slotlist.length;i++){
		var testStorage = slotlist[i].id + "amount";
		if (localStorage[testStorage]){
			var loadingitem = document.createElement("img");
			for (h=0;h < attrlist.length;h++){
				var testStorage2 = slotlist[i].id + attrlist[h];
				if (localStorage[testStorage2]){
					loadingitem.setAttribute(attrlist[h],localStorage.getItem(slotlist[i].id + attrlist[h]));
				}
			}
			slotlist[i].appendChild(loadingitem);
			slotlist[i].firstChild.innerHTML = localStorage.getItem(slotlist[i].id + "amount");
			if (slotlist[i].firstChild.innerHTML == "1"){
				slotlist[i].firstChild.style.opacity = "0.0";
			}
			if (slotlist[i].childNodes[1] && slotlist[i].className == "hotbararea armorslot"){
				document.getElementById(slotlist[i].childNodes[1].id).style.opacity = "1.0";
			}
		}
	}
}





// I could really go for some tasty ham right now...