angular.module('starter.services', [])

.factory('FurnitureItems', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var furnitureItems = [{
    id: 0,
    name: 'Coco Isle Cushion Dining',
    lastText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    face: 'coco_isle_cushion_dining.png'
  }, {
    id: 1,
    name: 'English Garden Cushion Dining',
    lastText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    face: 'english_garden_cushion_dining.png'
  },{
    id: 2,
    name: 'Jakarta Deep Seating',
    lastText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    face: 'jakarta_deep_seating.png'
  }];

  return {
    all: function() {
      return furnitureItems;
    },
    remove: function(furnitureItem) {
      furnitureItems.splice(furnitureItems.indexOf(furnitureItem), 1);
    },
    get: function(furnitureItemId) {
      for (var i = 0; i < furnitureItems.length; i++) {
        if (furnitureItems[i].id === parseInt(furnitureItemId)) {
          return furnitureItems[i];
        }
      }
      return null;
    }
  };
});
