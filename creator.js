// Ham's gei js file


window.onload = iteminfo;
function iteminfo(){
  window.amounttoadd = 1;
  var itemarea = document.getElementById("itemarea");
  var itemlist = ["a/a6/Grid_Stone","0/08/Grid_Grass_Block","b/bd/Grid_Dirt","6/6d/Grid_Podzol","0/03/Grid_Cobblestone","d/d3/Grid_Oak_Wood_Planks","f/f9/Grid_Spruce_Wood_Planks","a/a3/Grid_Birch_Wood_Planks","d/d3/Grid_Jungle_Wood_Planks","f/f1/Grid_Acacia_Wood_Planks","b/b5/Grid_Dark_Oak_Wood_Planks","4/4b/Grid_Oak_Sapling","0/08/Grid_Spruce_Sapling","b/b3/Grid_Birch_Sapling","b/b3/Grid_Jungle_Sapling","5/5b/Grid_Acacia_Sapling","c/c5/Grid_Dark_Oak_Sapling","e/e0/Grid_Bedrock","d/d7/Grid_Flowing_Water","1/13/Grid_Water","a/af/Grid_Flowing_Lava","6/61/Grid_Lava","b/bb/Grid_Sand","8/85/Grid_Red_Sand","0/03/Grid_Gravel","c/ce/Grid_Gold_Ore","9/9a/Grid_Iron_Ore","2/2b/Grid_Coal_Ore","5/52/Grid_Oak_Wood","c/ca/Grid_Spruce_Wood","5/56/Grid_Birch_Wood","d/d3/Grid_Jungle_Wood","d/d6/Grid_Acacia_Wood","e/ec/Grid_Dark_Oak_Wood","e/e5/Grid_Oak_Leaves","e/ed/Grid_Spruce_Leaves","3/39/Grid_Birch_Leaves","7/76/Grid_Jungle_Leaves","5/56/Grid_Sponge","0/00/Grid_Glass","9/96/Grid_Lapis_Lazuli_Ore","2/27/Grid_Lapis_Lazuli_Block","c/cc/Grid_Dispenser","1/12/Grid_Sandstone","5/52/Grid_Chiseled_Sandstone","2/22/Grid_Smooth_Sandstone","1/1d/Grid_Note_Block","9/9d/Grid_Powered_Rail","a/a2/Grid_Detector_Rail","3/32/Grid_Sticky_Piston","3/36/Grid_Cobweb","6/67/Grid_Shrub","6/6f/Grid_Grass","4/43/Grid_Fern","f/f6/Grid_Dead_Bush","3/3c/Grid_Piston","f/fa/Grid_White_Wool","0/07/Grid_Orange_Wool","f/fd/Grid_Magenta_Wool","f/fb/Grid_Light_Blue_Wool","e/ed/Grid_Yellow_Wool","a/a2/Grid_Lime_Wool","b/b3/Grid_Pink_Wool","d/d3/Grid_Gray_Wool","e/e5/Grid_Light_Gray_Wool","c/cd/Grid_Cyan_Wool","5/51/Grid_Purple_Wool","4/40/Grid_Blue_Wool","2/2a/Grid_Brown_Wool","f/fa/Grid_Green_Wool","2/2a/Grid_Red_Wool","4/45/Grid_Black_Wool","4/49/Grid_Dandelion","c/c7/Grid_Poppy","5/56/Grid_Blue_Orchid","3/33/Grid_Allium","7/79/Grid_Azure_Bluet","6/6f/Grid_Red_Tulip","e/ec/Grid_Orange_Tulip","4/4f/Grid_White_Tulip","6/61/Grid_Pink_Tulip","f/f6/Grid_Oxeye_Daisy","d/d8/Grid_Brown_Mushroom","0/01/Grid_Red_Mushroom","9/96/Grid_Block_of_Gold","3/34/Grid_Block_of_Iron","2/29/Grid_Stone_Slab","2/2a/Grid_Sandstone_Slab","f/f7/Grid_Cobblestone_Slab","b/b3/Grid_Bricks_Slab","4/46/Grid_Stone_Bricks_Slab","0/09/Grid_Quartz_Slab","4/43/Grid_Bricks","2/2b/Grid_TNT","b/bc/Grid_Bookshelf","7/7d/Grid_Moss_Stone","5/5d/Grid_Obsidian","3/32/Grid_Torch","2/21/Grid_Fire","3/3b/Grid_Monster_Spawner","6/6b/Grid_Oak_Wood_Stairs","c/c1/Grid_Chest","7/71/Grid_Diamond_Ore","f/f2/Grid_Block_of_Diamond","7/79/Grid_Crafting_Table","6/6a/Grid_Farmland","2/2e/Grid_Furnace","f/fb/Grid_Ladder","b/b6/Grid_Rail","7/7f/Grid_Cobblestone_Stairs","3/33/Grid_Lever","4/46/Grid_Stone_Pressure_Plate","d/d4/Grid_Wooden_Pressure_Plate","a/a9/Grid_Redstone_Ore","d/d9/Grid_Redstone_Torch","8/81/Grid_Stone_Button","9/9f/Grid_Snow_%28layer%29","2/2e/Grid_Ice","6/6c/Grid_Snow","f/fb/Grid_Cactus","0/06/Grid_Clay_%28block%29","1/10/Grid_Jukebox","c/c8/Grid_Fence","b/be/Grid_Pumpkin","8/86/Grid_Netherrack","e/e4/Grid_Soul_Sand","f/f8/Grid_Glowstone","8/8f/Grid_Portal","9/95/Grid_Jack_o%27Lantern","9/92/Grid_White_Stained_Glass","b/bd/Grid_Orange_Stained_Glass","4/4d/Grid_Magenta_Stained_Glass","2/25/Grid_Light_Blue_Stained_Glass","5/55/Grid_Yellow_Stained_Glass","a/a5/Grid_Lime_Stained_Glass","7/71/Grid_Pink_Stained_Glass","b/bb/Grid_Gray_Stained_Glass","2/26/Grid_Light_Gray_Stained_Glass","f/f3/Grid_Cyan_Stained_Glass","b/b8/Grid_Purple_Stained_Glass","3/35/Grid_Blue_Stained_Glass","2/29/Grid_Brown_Stained_Glass","5/5f/Grid_Green_Stained_Glass","d/d8/Grid_Red_Stained_Glass","9/9f/Grid_Black_Stained_Glass","b/b2/Grid_Trapdoor","8/84/Grid_Stone_Bricks","9/99/Grid_Mossy_Stone_Bricks","d/da/Grid_Cracked_Stone_Bricks","4/4b/Grid_Chiseled_Stone_Bricks","0/07/Grid_Huge_Brown_Mushroom","3/33/Grid_Huge_Red_Mushroom","0/00/Grid_Iron_Bars","3/30/Grid_Glass_Pane","e/ee/Grid_Melon_%28block%29","2/29/Grid_Vines","c/c2/Grid_Fence_Gate","3/3c/Grid_Brick_Stairs","a/af/Grid_Stone_Brick_Stairs","a/aa/Grid_Mycelium","4/49/Grid_Lily_Pad","6/62/Grid_Nether_Brick","5/59/Grid_Nether_Brick_Fence","6/68/Grid_Nether_Brick_Stairs","0/00/Grid_Enchantment_Table","f/f5/Grid_End_Portal_%28block%29","5/50/Grid_End_Stone","b/b1/Grid_Dragon_Egg","f/fa/Grid_Redstone_Lamp","5/5c/Grid_Oak_Wood_Slab","6/60/Grid_Spruce_Wood_Slab","b/bc/Grid_Birch_Wood_Slab","3/3f/Grid_Jungle_Wood_Slab","b/b3/Grid_Acacia_Wood_Slab","8/86/Grid_Dark_Oak_Wood_Slab","0/0d/Grid_Sandstone_Stairs","e/e7/Grid_Emerald_Ore","5/56/Grid_Ender_Chest","9/90/Grid_Tripwire_Hook","2/27/Grid_Block_of_Emerald","2/24/Grid_Spruce_Wood_Stairs","d/de/Grid_Birch_Wood_Stairs","b/b9/Grid_Jungle_Wood_Stairs","0/07/Grid_Command_Block","c/cb/Grid_Beacon","a/a9/Grid_Cobblestone_Wall","6/63/Grid_Mossy_Cobblestone_Wall","c/c6/Grid_Wooden_Button","1/13/Grid_Anvil","b/bb/Grid_Trapped_Chest","b/b9/Grid_Weighted_Pressure_Plate_%28Light%29","6/65/Grid_Weighted_Pressure_Plate_%28Heavy%29","1/18/Grid_Daylight_Sensor","2/2e/Grid_Block_of_Redstone","8/82/Grid_Nether_Quartz_Ore","c/cb/Grid_Hopper","0/04/Grid_Block_of_Quartz","8/8d/Grid_Chiseled_Quartz_Block","5/59/Grid_Pillar_Quartz_Block","c/c5/Grid_Quartz_Stairs","5/50/Grid_Activator_Rail","7/7f/Grid_Dropper","6/6b/Grid_White_Stained_Clay","3/3c/Grid_Orange_Stained_Clay","c/ce/Grid_Magenta_Stained_Clay","a/a0/Grid_Light_Blue_Stained_Clay","e/ef/Grid_Yellow_Stained_Clay","a/aa/Grid_Lime_Stained_Clay","6/68/Grid_Pink_Stained_Clay","1/18/Grid_Gray_Stained_Clay","4/47/Grid_Light_Gray_Stained_Clay","7/78/Grid_Cyan_Stained_Clay","6/6a/Grid_Purple_Stained_Clay","9/91/Grid_Blue_Stained_Clay","2/20/Grid_Brown_Stained_Clay","1/19/Grid_Green_Stained_Clay","c/cd/Grid_Red_Stained_Clay","9/91/Grid_Black_Stained_Clay","5/55/Grid_White_Stained_Glass_Pane","f/f1/Grid_Orange_Stained_Glass_Pane","9/91/Grid_Magenta_Stained_Glass_Pane","2/2a/Grid_Light_Blue_Stained_Glass_Pane","6/6e/Grid_Yellow_Stained_Glass_Pane","a/ae/Grid_Lime_Stained_Glass_Pane","8/86/Grid_Pink_Stained_Glass_Pane","f/f0/Grid_Gray_Stained_Glass_Pane","7/79/Grid_Light_Gray_Stained_Glass_Pane","9/97/Grid_Cyan_Stained_Glass_Pane","4/41/Grid_Purple_Stained_Glass_Pane","f/fe/Grid_Blue_Stained_Glass_Pane","c/ce/Grid_Brown_Stained_Glass_Pane","9/9c/Grid_Green_Stained_Glass_Pane","7/71/Grid_Red_Stained_Glass_Pane","7/7b/Grid_Black_Stained_Glass_Pane","7/76/Grid_Acacia_Leaves","5/57/Grid_Dark_Oak_Leaves","d/d6/Grid_Acacia_Wood","e/ec/Grid_Dark_Oak_Wood","8/85/Grid_Acacia_Wood_Stairs","5/5c/Grid_Dark_Oak_Wood_Stairs","1/1f/Grid_Hay_Bale","7/72/Grid_White_Carpet","3/3c/Grid_Orange_Carpet","0/01/Grid_Magenta_Carpet","4/4b/Grid_Light_Blue_Carpet","6/63/Grid_Yellow_Carpet","3/34/Grid_Lime_Carpet","b/be/Grid_Pink_Carpet","2/2b/Grid_Gray_Carpet","3/3a/Grid_Light_Gray_Carpet","d/d4/Grid_Cyan_Carpet","5/55/Grid_Purple_Carpet","5/5a/Grid_Blue_Carpet","a/ad/Grid_Brown_Carpet","4/41/Grid_Green_Carpet","d/dc/Grid_Red_Carpet","e/e6/Grid_Black_Carpet","6/6d/Grid_Hardened_Clay","b/b2/Grid_Block_of_Coal","b/b2/Grid_Packed_Ice","b/bc/Grid_Sunflower","0/0a/Grid_Lilac","c/c4/Grid_Double_Tallgrass","d/d9/Grid_Large_Fern","c/c3/Grid_Rose_Bush","e/eb/Grid_Peony","f/fb/Grid_Flint_and_Steel","8/83/Grid_Apple","4/49/Grid_Bow","c/cc/Grid_Arrow","a/ad/Grid_Coal","5/58/Grid_Charcoal","7/72/Grid_Diamond","6/6b/Grid_Iron_Ingot","4/40/Grid_Gold_Ingot","d/d5/Grid_Iron_Sword","0/01/Grid_Iron_Shovel","1/1d/Grid_Iron_Pickaxe","1/1d/Grid_Iron_Axe","c/cf/Grid_Wooden_Sword","2/21/Grid_Wooden_Shovel","3/3d/Grid_Wooden_Pickaxe","2/2a/Grid_Wooden_Axe","e/e1/Grid_Stone_Sword","f/ff/Grid_Stone_Shovel","d/d2/Grid_Stone_Pickaxe","5/55/Grid_Stone_Axe","8/81/Grid_Diamond_Sword","8/8e/Grid_Diamond_Shovel","c/ce/Grid_Diamond_Pickaxe","8/8d/Grid_Diamond_Axe","6/65/Grid_Golden_Sword","9/9d/Grid_Golden_Shovel","3/3f/Grid_Golden_Pickaxe","9/93/Grid_Golden_Axe","e/e9/Grid_Stick","f/f1/Grid_Bowl","f/fd/Grid_Mushroom_Stew","f/fa/Grid_String","a/a7/Grid_Feather","7/7a/Grid_Gunpowder","e/ea/Grid_Wooden_Hoe","b/ba/Grid_Stone_Hoe","f/f8/Grid_Iron_Hoe","c/c9/Grid_Diamond_Hoe","7/77/Grid_Golden_Hoe","6/68/Grid_Seeds","c/c4/Grid_Wheat","d/d4/Grid_Bread","2/24/Grid_Leather_Cap","e/ed/Grid_Leather_Tunic","c/ce/Grid_Leather_Pants","0/06/Grid_Leather_Boots","c/c3/Grid_Chain_Helmet","7/77/Grid_Chain_Chestplate","2/26/Grid_Chain_Leggings","9/93/Grid_Chain_Boots","e/ec/Grid_Iron_Helmet","8/8d/Grid_Iron_Chestplate","9/99/Grid_Iron_Leggings","f/f5/Grid_Iron_Boots","b/bd/Grid_Diamond_Helmet","e/e7/Grid_Diamond_Chestplate","e/e3/Grid_Diamond_Leggings","d/d1/Grid_Diamond_Boots","4/45/Grid_Golden_Helmet","6/67/Grid_Golden_Chestplate","f/f8/Grid_Golden_Leggings","f/fb/Grid_Golden_Boots","8/82/Grid_Flint","e/ec/Grid_Raw_Porkchop","b/bd/Grid_Cooked_Porkchop","c/cc/Grid_Painting","4/4e/Grid_Golden_Apple","0/06/Grid_Sign","7/70/Door_wood_old","2/2a/Grid_Bucket","b/bf/Grid_Water_Bucket","c/cf/Grid_Lava_Bucket","5/58/Grid_Minecart","0/09/Grid_Saddle","2/23/Door_iron_old","f/fd/Grid_Redstone","6/67/Grid_Snowball","5/59/Grid_Boat","6/66/Grid_Leather","d/db/Grid_Milk","7/75/Grid_Brick","2/2c/Grid_Clay","7/79/Grid_Sugar_Canes","6/6c/Grid_Paper","e/ec/Grid_Book","c/c9/Grid_Slimeball","f/f0/Grid_Minecart_with_Chest","3/36/Grid_Minecart_with_Furnace","2/27/Grid_Egg","f/f2/Grid_Compass","c/c7/Grid_Fishing_Rod","3/32/Grid_Clock","8/85/Grid_Glowstone_Dust","6/6a/Grid_Raw_Fish","c/c0/Grid_Raw_Salmon","8/81/Grid_Clownfish","d/df/Grid_Pufferfish","2/29/Grid_Cooked_Fish","a/a5/Grid_Cooked_Salmon","d/d6/Grid_Ink_Sac","0/0d/Grid_Rose_Red","f/fd/Grid_Cactus_Green","7/7d/Grid_Cocoa_Beans","7/76/Grid_Lapis_Lazuli","a/a0/Grid_Purple_Dye","c/ca/Grid_Cyan_Dye","1/16/Grid_Light_Gray_Dye","5/54/Grid_Gray_Dye","b/bb/Grid_Pink_Dye","a/a6/Grid_Lime_Dye","d/df/Grid_Dandelion_Yellow","a/ae/Grid_Light_Blue_Dye","8/8f/Grid_Magenta_Dye","b/b2/Grid_Orange_Dye","c/c0/Grid_Bone_Meal","e/e8/Grid_Bone","9/96/Grid_Sugar","2/28/Grid_Cake","a/a3/Grid_Bed","e/e6/Grid_Redstone_Repeater","9/95/Grid_Cookie","a/aa/Grid_Map","1/13/Grid_Shears","e/ec/Grid_Melon","7/72/Grid_Pumpkin_Seeds","7/75/Grid_Melon_Seeds","6/61/Grid_Raw_Beef","d/da/Grid_Steak","e/e5/Grid_Raw_Chicken","2/2e/Grid_Cooked_Chicken","3/33/Grid_Rotten_Flesh","1/13/Grid_Ender_Pearl","1/18/Grid_Blaze_Rod","6/66/Grid_Ghast_Tear","1/1d/Grid_Gold_Nugget","d/d2/Grid_Nether_Wart","9/97/Grid_Water_Bottle","2/22/Grid_Glass_Bottle","0/03/Grid_Spider_Eye","2/29/Grid_Fermented_Spider_Eye","0/09/Grid_Blaze_Powder","e/e8/Grid_Magma_Cream","7/70/Grid_Brewing_Stand","c/ca/Grid_Cauldron","0/0e/Grid_Eye_of_Ender","1/11/Grid_Glistering_Melon","f/fc/Grid_Spawn_Creeper","3/35/Grid_Spawn_Skeleton","5/50/Grid_Spawn_Spider","3/30/Grid_Spawn_Zombie","1/11/Grid_Spawn_Slime","3/3f/Grid_Spawn_Ghast","7/7b/Grid_Spawn_Pig_Zombie","6/62/Grid_Spawn_Enderman","e/ee/Grid_Spawn_Cave_Spider","1/11/Grid_Spawn_Silverfish","f/ff/Grid_Spawn_Blaze","2/25/Grid_Spawn_Magma_Cube","f/f3/Grid_Spawn_Bat","7/7c/Grid_Spawn_Witch","0/09/Grid_Spawn_Pig","f/f8/Grid_Spawn_Sheep","8/80/Grid_Spawn_Cow","b/b0/Grid_Spawn_Chicken","5/58/Grid_Spawn_Squid","4/4b/Grid_Spawn_Wolf","9/91/Grid_Spawn_Mooshroom","e/e8/Grid_Spawn_Ocelot","e/e0/Grid_Spawn_Horse","0/02/Grid_Spawn_Villager","b/bf/Grid_Bottle_o%27_Enchanting","e/e1/Grid_Fire_Charge","e/eb/Grid_Book_and_Quill","c/c5/Grid_Written_Book","8/87/Grid_Emerald","c/c5/Grid_Item_Frame","8/89/Grid_Flower_Pot","8/8b/Grid_Carrot","2/2b/Grid_Potato","6/6c/Grid_Baked_Potato","f/fd/Grid_Poisonous_Potato","c/c7/Grid_Empty_Map","a/a7/Grid_Golden_Carrot","c/c9/Grid_Skeleton_Skull","d/d4/Grid_Wither_Skeleton_Skull","6/6f/Grid_Zombie_Head","5/55/Grid_Head","c/c7/Grid_Creeper_Head","e/e4/Grid_Carrot_on_a_Stick","a/ae/Grid_Nether_Star","9/9f/Grid_Pumpkin_Pie","3/31/Grid_Firework_Rocket","d/db/Grid_Firework_Star","f/f7/Grid_Enchanted_Book","e/ea/Grid_Redstone_Comparator","8/8b/Grid_Nether_Brick_%28item%29","2/2b/Grid_Nether_Quartz","9/93/Grid_Minecart_with_TNT","7/78/Grid_Minecart_with_Hopper","a/af/Grid_Iron_Horse_Armor","0/09/Grid_Golden_Horse_Armor","a/af/Grid_Diamond_Horse_Armor","9/96/Grid_Lead","9/97/Grid_Name_Tag","e/e9/Grid_13_Disc","1/10/Grid_cat_Disc","a/ad/Grid_blocks_Disc","8/8b/Grid_chirp_Disc","2/22/Grid_far_Disc","0/0a/Grid_mall_Disc","f/f4/Grid_mellohi_Disc","6/68/Grid_stal_Disc","a/a3/Grid_strad_Disc","1/18/Grid_ward_Disc","e/e4/Grid_11_Disc","6/67/Grid_wait_Disc","c/c3/Grid_Awkward_Potion","e/e6/Grid_Thick_Potion","6/6c/Grid_Mundane_Potion","0/00/Grid_Potion_of_Regeneration","1/1c/Grid_Potion_of_Swiftness","4/43/Grid_Potion_of_Fire_Resistance","a/a1/Grid_Potion_of_Poison","a/a3/Grid_Potion_of_Healing","b/ba/Grid_Potion_of_Night_Vision","2/2c/Grid_Potion_of_Weakness","8/8c/Grid_Potion_of_Strength","c/ca/Grid_Potion_of_Slowness","b/b2/Grid_Potion_of_Harming","c/c2/Grid_Potion_of_Water_Breathing","d/d8/Grid_Potion_of_Invisibility","0/0b/Grid_Splash_Mundane_Potion","0/0f/Grid_Splash_Potion_of_Regeneration","7/7a/Grid_Splash_Potion_of_Swiftness","c/cb/Grid_Splash_Potion_of_Fire_Resistance","1/11/Grid_Splash_Potion_of_Poison","3/33/Grid_Splash_Potion_of_Healing","c/c3/Grid_Splash_Potion_of_Night_Vision","9/94/Grid_Splash_Potion_of_Weakness","3/38/Grid_Splash_Potion_of_Strength","2/22/Grid_Splash_Potion_of_Slowness","5/52/Grid_Splash_Potion_of_Harming","6/63/Grid_Splash_Potion_of_Water_Breathing","8/89/Grid_Splash_Potion_of_Invisibility"];
  var nostacklist = ["MAP","IRON SWORD","IRON SHOVEL","IRON PICKAXE","IRON AXE","IRON HOE","WOODEN SWORD","WOODEN SHOVEL","WOODEN PICKAXE","WOODEN AXE","WOODEN HOE","STONE SWORD","STONE SHOVEL","STONE PICKAXE","STONE AXE","STONE HOE","DIAMOND SWORD","DIAMOND SHOVEL","DIAMOND PICKAXE","DIAMOND AXE","DIAMOND HOE","GOLDEN SWORD","GOLDEN SHOVEL","GOLDEN PICKAXE","GOLDEN AXE","GOLDEN HOE","BOW","FLINT AND STEEL","MUSHROOM STEW","LEATHER CAP","LEATHER TUNIC","LEATHER PANTS","LEATHER BOOTS","CHAIN HELMET","CHAIN CHESTPLATE","CHAIN LEGGINGS","CHAIN BOOTS","IRON HELMET","IRON CHESTPLATE","IRON LEGGINGS","IRON BOOTS","DIAMOND HELMET","DIAMOND CHESTPLATE","DIAMOND LEGGINGS","DIAMOND BOOTS","GOLDEN HELMET","GOLDEN CHESTPLATE","GOLDEN LEGGINGS","GOLDEN BOOTS","LAVA BUCKET","WATER BUCKET","SADDLE","MINECART","IRON DOOR","WOODEN DOOR","BOAT","MILK","MINECART WITH CHEST","MINECART WITH FURNACE","FISHING ROD","COMPASS","CLOCK","BED","SHEARS","CAKE","WATER BOTTLE","BOOK AND QUILL","CARROT ON A STICK","ENCHANTED BOOK","MINECART WITH TNT","MINECART WITH HOPPER","13 DISC","CAT DISC","BLOCKS DISC","CHIRP DISC","FAR DISC","MALL DISC","MELLOHI DISC","STAL DISC","STRAD DISC","WARD DISC","11 DISC","WAIT DISC","IRON HORSE ARMOR","GOLDEN HORSE ARMOR","DIAMOND HORSE ARMOR","MUNDANE POTION","THICK POTION","AWKWARD POTION","POTION OF REGENERATION","POTION OF SWIFTNESS","POTION OF FIRE RESISTANCE","POTION OF POISON","POTION OF HEALING","POTION OF NIGHT VISION","POTION OF WEAKNESS","POTION OF STRENGTH","POTION OF SLOWNESS","POTION OF HARMING","POTION OF WATER BREATHING","POTION OF INVISIBILITY","SPLASH MUNDANE POTION","SPLASH POTION OF REGENERATION","SPLASH POTION OF SWIFTNESS","SPLASH POTION OF FIRE RESISTANCE","SPLASH POTION OF POISON","SPLASH POTION OF HEALING","SPLASH POTION OF NIGHT VISION","SPLASH POTION OF WEAKNESS","SPLASH POTION OF STRENGTH","SPLASH POTION OF SLOWNESS","SPLASH POTION OF HARMING","SPLASH POTION OF WATER BREATHING","SPLASH POTION OF INVISIBILITY"];
  var helmets = ["LEATHER CAP","CHAIN HELMET","IRON HELMET","DIAMOND HELMET","GOLDEN HELMET"];
  var chestplates = ["LEATHER TUNIC","CHAIN CHESTPLATE","IRON CHESTPLATE","DIAMOND CHESTPLATE","GOLDEN CHESTPLATE"];
  var leggings = ["LEATHER PANTS","CHAIN LEGGINGS","IRON LEGGINGS","DIAMOND LEGGINGS","GOLDEN LEGGINGS"];
  var boots = ["LEATHER BOOTS","CHAIN BOOTS","IRON BOOTS","DIAMOND BOOTS","GOLDEN BOOTS"];
  var armorimages = ["http://i.imgur.com/M4UTa0x.png","http://i.imgur.com/F0MGF5h.png","http://i.imgur.com/QcsOvla.png","http://i.imgur.com/aVtKERb.png","http://i.imgur.com/WyWVsbu.png","http://i.imgur.com/2zkO3Qi.png","http://i.imgur.com/aEJAvx6.png","http://i.imgur.com/5Z2Hix8.png","http://i.imgur.com/Z78JHQD.png","http://i.imgur.com/O0SG8vx.png","http://i.imgur.com/AMlbU5C.png","http://i.imgur.com/qpx7p7R.png","http://i.imgur.com/gb6qk1F.png","http://i.imgur.com/IvhCQE0.png","http://i.imgur.com/Up45HKW.png","http://i.imgur.com/5siWMCq.png","http://i.imgur.com/oDQ1TdR.png","http://i.imgur.com/CmE0kyV.png","http://i.imgur.com/CIUphY3.png","http://i.imgur.com/v0jzULy.png"];
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
	if (newhelmet.id.match("LEATHER")){
		newhelmet.setAttribute("src","http://i.imgur.com/6ql7hZL.png");
		newhelmet.style.backgroundImage = "url('" + armorimages[i] + "')"
	}
	else {
		newhelmet.setAttribute("src",armorimages[i]);
	}
	newhelmet.setAttribute("class","armor");
    var node = document.getElementById("test")
    node.insertBefore(newhelmet,node.childNodes[4]);
  }
  for (i=0;i < chestplates.length;i++){
    document.getElementById(chestplates[i]).setAttribute("data-armor-type","chestplate");
    var newchestplate = document.createElement("img");
    newchestplate.setAttribute("style","position:absolute;z-index:3;top:65px;left:82px;opacity:0.0;");
    newchestplate.setAttribute("id",chestplates[i]);
    newchestplate.setAttribute("draggable","false");
	if (newchestplate.id.match("LEATHER")){
		newchestplate.setAttribute("src","http://i.imgur.com/uMukx2Y.png");
		newchestplate.style.backgroundImage = "url('" + armorimages[i+5] + "')"
	}
	else {
		newchestplate.setAttribute("src",armorimages[i+5]);
	}	
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
	if (newleggings.id.match("LEATHER")){
		newleggings.setAttribute("src","http://i.imgur.com/p7ZsGp5.png");
		newleggings.style.backgroundImage = "url('" + armorimages[i+10] + "')"
	}
	else {
		newleggings.setAttribute("src",armorimages[i+10]);
	}
	newleggings.setAttribute("class","armor");
    var node = document.getElementById("test")
    node.insertBefore(newleggings,node.childNodes[4]);
  }
  for(i=0;i < boots.length;i++){
    document.getElementById(boots[i]).setAttribute("data-armor-type","boots");
    var newboots = document.createElement("img");
    newboots.setAttribute("style","position:absolute;z-index:3;top:138px;left:97px;opacity:0.0");
    newboots.setAttribute("id",boots[i]);
    newboots.setAttribute("draggable","false");
	if (newboots.id.match("LEATHER")){
		newboots.setAttribute("src","http://i.imgur.com/SHIY3TG.png");
		newboots.style.backgroundImage = "url('" + armorimages[i+15] + "')"
	}
	else {
		newboots.setAttribute("src",armorimages[i+15]);
	}
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
  var testItem = document.createElement("img")
  for (i=0;i<window.movingItem.attributes.length;i++){
	testItem.setAttribute(window.movingItem.attributes[i].name,window.movingItem.attributes[i].value)
  }
  if (nickname){
	testItem.setAttribute("data-name",nickname);
  }
	testItem.setAttribute("data-namebold",window.namebold);
	testItem.setAttribute("data-nameitalics",window.nameitalics);
	testItem.setAttribute("data-nameunderline",window.nameunderline);
	testItem.setAttribute("data-namecolor",window.namecolor);
  if (lore){
	testItem.setAttribute("data-lore",lore);
	testItem.setAttribute("data-lorebold",window.lorebold);
	testItem.setAttribute("data-loreitalics",window.loreitalics);
	testItem.setAttribute("data-loreunderline",window.loreunderline);
	testItem.setAttribute("data-lorecolor",window.lorecolor);
  }
  if (window.enchantlist){
	testItem.setAttribute("data-enchants",window.enchantlist);
  }
  if (window.potioneffectlist && window.movingItem.id.match("POTION")){
	testItem.setAttribute("data-potioneffects",window.potioneffectslist);
  }
  if (target.getAttribute("data-stackable") != "false" && target.parentNode.childNodes[0].innerHTML != "64" && target.parentNode.id != "itemarea" && !(target.isSameNode(item))){
    if (item.parentNode.id == "itemarea" && ev.target.isEqualNode(testItem)){
	  ev.preventDefault();
    }
    else if (item.parentNode.className == "hotbararea" && ev.target.isEqualNode(window.movingItem)){
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
		if (window.armorcolor){
			var red = parseInt(window.armorcolor.substring(0,2),16);
			var green = parseInt(window.armorcolor.substring(2,4),16);
			var blue = parseInt(window.armorcolor.substring(4,6),16);		
		}
		if (window.renamed){
			window.movingItem.setAttribute("data-name",window.renamed);
		}
		window.movingItem.setAttribute("data-namebold",window.namebold);
		window.movingItem.setAttribute("data-nameitalics",window.nameitalics);
		window.movingItem.setAttribute("data-nameunderline",window.nameunderline);
		window.movingItem.setAttribute("data-namecolor",window.namecolor);
		if (window.itemlore){
			window.movingItem.setAttribute("data-lore",window.itemlore);
			window.movingItem.setAttribute("data-lorebold",window.lorebold);
			window.movingItem.setAttribute("data-loreitalics",window.loreitalics);
			window.movingItem.setAttribute("data-loreunderline",window.loreunderline);
			window.movingItem.setAttribute("data-lorecolor",window.lorecolor);
		}
		if (window.enchantlist){
			window.movingItem.setAttribute("data-enchants",window.enchantlist);
		}
		if (window.potioneffectlist && window.movingItem.id.match("POTION")){
			window.movingItem.setAttribute("data-potioneffects",window.potioneffectlist);
		}
		var amount = window.amounttoadd;
		if (window.movingItem.getAttribute("data-stackable") == "false"){
			amount = 1;
		}
		if (window.movingItem.id == "LEATHER BOOTS"){
			window.movingItem.style.backgroundImage = "url('" + window.movingItem.src + "')";
			window.movingItem.src = "http://i.imgur.com/E987k06.png";	
			window.movingItem.style.boxShadow = "inset 0 0 0 1000px rgba(" + red + "," + green + "," + blue + ",0.7)";
			window.movingItem.setAttribute("data-color",window.armorcolor);
		}
		else if (window.movingItem.id == "LEATHER PANTS"){
			window.movingItem.style.backgroundImage = "url('" + window.movingItem.src + "')";
			window.movingItem.src = "http://i.imgur.com/fOWNZ7B.png?5999";
			window.movingItem.style.boxShadow = "inset 0 0 0 1000px rgba(" + red + "," + green + "," + blue + ",0.7)";
			window.movingItem.setAttribute("data-color",window.armorcolor);
		}
		else if (window.movingItem.id == "LEATHER TUNIC"){
			window.movingItem.style.backgroundImage = "url('" + window.movingItem.src + "')";
			window.movingItem.src = "http://i.imgur.com/pBb06a3.png";
			window.movingItem.style.boxShadow = "inset 0 0 0 1000px rgba(" + red + "," + green + "," + blue + ",0.7)";
			window.movingItem.setAttribute("data-color",window.armorcolor);
		}
		else if (window.movingItem.id == "LEATHER CAP"){
			window.movingItem.style.backgroundImage = "url('" + window.movingItem.src + "')";
			window.movingItem.src = "http://i.imgur.com/mLYMgb0.png";
			window.movingItem.style.boxShadow = "inset 0 0 0 1000px rgba(" + red + "," + green + "," + blue + ",0.7)";
			window.movingItem.setAttribute("data-color",window.armorcolor);
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
	  document.getElementById(window.movingItemclone.id).style.boxShadow = "inset 0 0 0 1000px rgba(" + red + "," + green + "," + blue + ",0.2)";
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
    window.movingItem.style.opacity = "";
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
  setTimeout(function testing(){if (window.movingItem.nextSibling && window.movingItem.nextSibling.className == "tooltip"){window.movingItem.parentNode.removeChild(window.movingItem.nextSibling);}},200);
	deletetooltips();
}
function newamount(ev){
	if ((isNaN(String.fromCharCode(ev.which)) && ev.which != 8) || ev.shiftKey){
		ev.preventDefault();
	}
	else {
		if (ev.target.value == ""){
			window.amounttoadd = "1";
		}
		else {
			if (ev.target.value > 64){
				ev.target.value = "64";
			}
			else if (ev.target.value < 1){
				ev.target.value = "1";
			}
			window.amounttoadd = Math.floor(ev.target.value);
			ev.target.value = window.amounttoadd.toString();
		}
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
	if (ev.target.nextSibling && ev.target.nextSibling.tagName == "P"){
		ev.target.parentNode.removeChild(ev.target.nextSibling);
	}
	var newParagraph = document.createElement("p");
	if (ev.target.getAttribute("data-name")){
		var contentname = document.createTextNode(ev.target.getAttribute("data-name"));
		var namespan = document.createElement("span");
		namespan.setAttribute("style","");
		if (ev.target.getAttribute("data-namebold") == "true"){
			namespan.setAttribute("style",namespan.getAttribute("style") + "font-weight:bold;");
		}
		if (ev.target.getAttribute("data-nameitalics") == "true"){
			namespan.setAttribute("style",namespan.getAttribute("style") + "font-style:italic;");
		}
		if (ev.target.getAttribute("data-nameunderline") == "true"){
			namespan.setAttribute("style",namespan.getAttribute("style") + "text-decoration: underline;");
		}
		namespan.setAttribute("style",namespan.getAttribute("style") + "color:" + ev.target.getAttribute("data-namecolor") + ";white-space:nowrap;");		
		namespan.appendChild(contentname);
		newParagraph.appendChild(namespan);
	}
	if (ev.target.getAttribute("data-enchants") || ev.target.getAttribute("data-potioneffects") || ev.target.getAttribute("data-lore") || ev.target.getAttribute("data-color")){
		var textbreak = document.createElement("br");
		textbreak.setAttribute("style","display:block;line-height:50%;");
		newParagraph.appendChild(textbreak);
		var fillerspan = document.createElement("span");
		fillerspan.setAttribute("style","display:block;height:7px;");
		newParagraph.appendChild(fillerspan);
	}
	if (ev.target.getAttribute("data-enchants")){
		var parts = ev.target.getAttribute("data-enchants").split("|");
		for (i=0;i < parts.length;i++){
			var newbreak = document.createElement("br");
			var newspan = document.createElement("span");
			var newcontent = document.createTextNode(parts[i]);
			newspan.appendChild(newcontent);
			newspan.setAttribute("style","color:#A7A7A5;white-space:nowrap;");
			newParagraph.appendChild(newspan);
			newParagraph.appendChild(newbreak);
		}
	}
	if (ev.target.getAttribute("data-potioneffects")){
		var parts = ev.target.getAttribute("data-potioneffects").split("|");
		for (i=0;i < parts.length;i++){
			var newbreak = document.createElement("br");
			var newspan = document.createElement("span");
			var newcontent = document.createTextNode(parts[i]);
			newspan.appendChild(newcontent);
			newspan.setAttribute("style","color: #A7A7A5;white-space: nowrap;");
			newParagraph.appendChild(newspan);
			newParagraph.appendChild(newbreak);
		}
	}
	if (ev.target.getAttribute("data-color")){
		var colorspan = document.createElement("span");
		var colorcontent = document.createTextNode("Color: #" + ev.target.getAttribute("data-color"));
		colorspan.appendChild(colorcontent);
		colorspan.setAttribute("style","color: #A7A7A5;white-space:nowrap;");
		newParagraph.appendChild(colorspan);
	}
	if (ev.target.getAttribute("data-lore")){
		var contentlore = document.createTextNode("\n" + ev.target.getAttribute("data-lore"));
		var lorespan = document.createElement("span");
		lorespan.setAttribute("style","");
		if (ev.target.getAttribute("data-lorebold") == "true"){
			lorespan.setAttribute("style",lorespan.getAttribute("style") + "font-weight:bold;");
		}
		if (ev.target.getAttribute("data-loreitalics") == "true"){
			lorespan.setAttribute("style",lorespan.getAttribute("style") + "font-style:italic;");
		}
		if (ev.target.getAttribute("data-loreunderline") == "true"){
			lorespan.setAttribute("style",lorespan.getAttribute("style") + "text-decoration: underline;");
		}
		lorespan.setAttribute("style",lorespan.getAttribute("style") + "color:" + ev.target.getAttribute("data-lorecolor") + ";");
		lorespan.setAttribute("style",lorespan.getAttribute("style") + "display:block;position:relative;top:-10px;white-space: pre;");
		lorespan.appendChild(contentlore);
		newParagraph.appendChild(lorespan);
	}
	newParagraph.setAttribute("class","tooltip");
	newParagraph.setAttribute("ondrop","drop(event)");
	newParagraph.setAttribute("ondragover","allowDrop(event)");
	if (ev.target.parentNode.id != "itemarea"){
		var invslots = document.getElementsByClassName("hotbararea");
		for (i=0;i < invslots.length;i++){
			invslots[i].style.zIndex = "1";
		}
		ev.target.parentNode.style.zIndex = "10";
	}
	deletetooltips(ev.target);
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
	var classcode = document.getElementById("classcode");
	var datalist = [];
	for (i=0;i < slotlist.length;i++){
		if (slotlist[i].childNodes[1]){
			var info = {};
			info["slot"] = slotlist[i].id;
			info["amount"] = slotlist[i].firstChild.innerHTML;
			for (h=0;h < slotlist[i].childNodes[1].attributes.length;h++){
				info[slotlist[i].childNodes[1].attributes[h].name] = slotlist[i].childNodes[1].attributes[h].value;
			}
			datalist.push(info);
		}
	}
	var data = JSON.stringify(datalist);
	classcode.value = data;
}
function loadInv(ev){
	clearInv();
	var slotlist = document.getElementsByClassName("hotbararea");
	var attrlist = ["src","id","data-name","data-lore","data-armor-type","data-stackable","class","ondragstart","ondrop","onmouseenter","onmouseleave","ondragover","data-namebold","data-nameitalics","data-nameunderline","data-namecolor","data-lorebold","data-loreitalics","data-loreunderline","data-lorecolor","data-enchants"];
	var classcode = document.getElementById("classcode");
	var datalist = JSON.parse(classcode.value);
	for (a=0;a < datalist.length;a++){
		var keys = Object.keys(datalist[a])
		var currentobject = datalist[a];
		var loadingitem = document.createElement("img");
		var slottofill = document.getElementById(currentobject[keys[0]]);
		slottofill.firstChild.innerHTML = currentobject[keys[1]];
		for (i=2;i < keys.length;i++){
			loadingitem.setAttribute(keys[i],currentobject[keys[i]]);
		}
		slottofill.appendChild(loadingitem);
		if (slottofill.firstChild.innerHTML == "1"){
			slottofill.firstChild.style.opacity = "0.0";
		}
		if (slottofill.childNodes[1] && slottofill.className == "hotbararea armorslot"){
			document.getElementById(slottofill.childNodes[1].id).style.opacity = "1.0";
		}
	}
}
function format(ev){
	var previousstyle = ev.target.style.left;
	if (ev.target.style.backgroundColor == "gray"){
		ev.target.setAttribute("style","left:" + previousstyle + ";");
		if (ev.target.title == "Bold"){
			if (ev.target.parentNode.childNodes[0].innerHTML == "Lore:"){
				window.lorebold = "false";
			}
			else if (ev.target.parentNode.childNodes[0].innerHTML == "Name:"){
				window.namebold = "false"
			}
		}
		if (ev.target.title == "Italics"){
			if (ev.target.parentNode.childNodes[0].innerHTML == "Lore:"){
				window.loreitalics = "false";
			}
			else if (ev.target.parentNode.childNodes[0].innerHTML == "Name:"){
				window.nameitalics = "false";
			}
		}
		if (ev.target.title == "Underline"){
			if (ev.target.parentNode.childNodes[0].innerHTML == "Lore:"){
				window.loreunderline = "false";
			}
			else if (ev.target.parentNode.childNodes[0].innerHTML == "Name:"){
				window.nameunderline = "false";
			}
		}
		if (ev.target.title == "Text Color"){
			if (ev.target.parentNode.childNodes[0].innerHTML == "Lore:"){
				window.lorecolor = "#FFFFFF";
			}
			else if (ev.target.parentNode.childNodes[0].innerHTML == "Name:"){
				window.namecolor = "#FFFFFF";
			}
		}
	}
	else {
		var previousstyle = ev.target.getAttribute("style");
		ev.target.setAttribute("style",previousstyle + "background-color:gray;");
		if (ev.target.title == "Bold"){
			if (ev.target.parentNode.childNodes[0].innerHTML == "Lore:"){
				window.lorebold = "true";
			}
			else if (ev.target.parentNode.childNodes[0].innerHTML == "Name:"){
				window.namebold = "true";
			}
		}
		if (ev.target.title == "Italics"){
			if (ev.target.parentNode.childNodes[0].innerHTML == "Lore:"){
				window.loreitalics = "true";
			}
			else if (ev.target.parentNode.childNodes[0].innerHTML == "Name:"){
				window.nameitalics = "true";
			}
		}
		if (ev.target.title == "Underline"){
			if (ev.target.parentNode.childNodes[0].innerHTML == "Lore:"){
				window.loreunderline = "true";
			}
			else if (ev.target.parentNode.childNodes[0].innerHTML == "Name:"){
				window.nameunderline = "true";
			}
		}
		if (ev.target.title == "Text Color"){
			if (ev.target.parentNode.childNodes[0].innerHTML == "Lore:"){
				window.lorecolor = "#" + ev.target.title;
			}
			else if (ev.target.parentNode.childNodes[0].innerHTML == "Name:"){
				window.namecolor = "#" + ev.target.title;
			}			
		}
	}
}
function changetext(ev){
	if (ev.target.value == "Hexa Color"){
		ev.target.removeAttribute("value");
	}
	else if (ev.target.value == ""){
		ev.target.setAttribute("value","Hexa Color");
		ev.target.style.color = "lightgray";
	}
}
function colortext(ev){
	if (ev.target.value.length == "6"){
		ev.target.style.color = "#" + ev.target.value;
		if (ev.target.parentNode.childNodes[0].innerHTML == "Lore:"){
			window.lorecolor = "#" + ev.target.value;
		}
		else if (ev.target.parentNode.childNodes[0].innerHTML == "Name:"){
			window.namecolor = "#" + ev.target.value;
		}	
	}
}
function checknum(ev){
	if ((isNaN(String.fromCharCode(ev.which)) && ev.which != 8) || ev.shiftKey || (ev.target.value.length == 0 && ev.which == 48)){
		ev.preventDefault();
	}
	if (ev.target.parentNode.id == "enchantments"){
		enchantment(ev);
	}
	else if (ev.target.parentNode.id == "potioneffects"){
		potioneffects(ev);
	}
}
function enchantment(ev){
	var enchantments = document.getElementById("enchantments").getElementsByTagName("input");
	window.enchantlist = "";
	for (i=0;i<enchantments.length;i++){
		if (enchantments[i].value != "" && enchantments[i].value != 0){
			window.enchantlist = window.enchantlist + enchantments[i].previousSibling.previousSibling.innerHTML + " " + enchantments[i].value + "|";
		}
	}
	window.enchantlist = window.enchantlist.substr(0,window.enchantlist.length - 1);
}
function potioneffects(ev){
	var potioneffects = document.getElementById("potioneffects").getElementsByTagName("input");
	window.potioneffectlist = ""
	for (i=0;i<potioneffects.length;i++){
		if (potioneffects[i].value != "" && potioneffects[i] != 0){
			window.potioneffectlist = window.potioneffectlist + potioneffects[i].previousSibling.previousSibling.innerHTML + " " + potioneffects[i].value + "|";
		}
	}
	window.potioneffectlist = window.potioneffectlist.substr(0,window.potioneffectlist.length - 1);
}
function switchdivs(ev){
	var tabs = document.getElementsByClassName("tab");
	for (i=0;i<tabs.length;i++){
		if (tabs[i] != ev.target){
			tabs[i].nextSibling.style.display = "none";
		}
		else {
			tabs[i].nextSibling.style.display = "inline-block";
		}
	}
}
function dyeArmor(ev){
	if (ev.target.value.length == 6){
		window.armorcolor = ev.target.value;
	}
}
function deletetooltips(target){
	var tooltips = document.getElementsByClassName("tooltip");
	for (i=0;i < tooltips.length;i++){
		if (tooltips[i] != target.nextSibling){
			tooltips[i].parentNode.removeChild(tooltips[i]);
		}
	}
}
// I could really go for some tasty ham right now...