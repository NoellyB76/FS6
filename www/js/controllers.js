angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('FurnitureItemsCtrl', function($scope, FurnitureItems) {
  $scope.furnitureItems = FurnitureItems.all();
  $scope.remove = function(furnitureItem) {
    FurnitureItems.remove(furnitureItem);
  }
})

.controller('FurnitureItemDetailCtrl', function($scope, $stateParams, FurnitureItems) {
  $scope.furnitureItem = FurnitureItems.get($stateParams.furnitureItemId);
})


.controller('ImgAccordion', function($scope) {
  $scope.strGroupNames = [];
  $scope.strItems = [];
  $scope.strMessage = String.empty;
  $scope.objMessageDiv = document.getElementById('divChosenPalletteItems');
  $scope.cmdMessage = document.getElementById('cmdSendEmail');
  $scope.strEmailMessage = "";

  $scope.groups = [];
  $scope.groups[0] = {
    name: 'Frame Finish',
    items:  ["antique black walnut", "antique black", "antique dark rum"]
  };

    $scope.groups[1] = {
      name: 'Main Fabric',
      items: ["belle sapphire", "canvas cork", "canyon bamboo"]
    };

    $scope.groups[2] = {
      name: "Kidney Fabric",
      items: ["belle sapphire", "canvas cork", "canyon bamboo"]
    };


  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

  $scope.SendMessage = function()
  {
      //alert($scope.strEmailMessage);
      cordova.plugin.email.open({
          to:      ['gsheridan@gso360.com'],
          cc:      ['codernoel@gmail.com'],
          subject: 'Message from GSO360.com: Your Furniture Customizations Have Arrived!',
          body:    $scope.strEmailMessage


      });
  };

  $scope.addPalletteItem = function(strGroupName, objItemName, strFurnName)
  {

      var objP = window.document.getElementById('divChosenPalletteItems');
      //Check to see if the group has already been mentioned, if so add the item to the group...
      var bolGFound = false;
      for (var i = 0; i < $scope.strGroupNames.length; i++)
      {
        if($scope.strGroupNames[i] == strGroupName)
        {
          //Group found, add the item to it
            $scope.strItems[i] = objItemName;
            bolGFound = true;
        }
      }
      if(!bolGFound)
      {
        //The group is new... add a new group and item to the array
          $scope.strGroupNames.push(strGroupName);
          $scope.strItems.push(objItemName);
      }
      //Throw into div...
      $scope.strMessage = "";
      $scope.objMessageDiv.innerHTML = "";
      var strEmail = "";
      for(var n=0; n<$scope.strGroupNames.length; n++)
      {
        if(n != 0) { $scope.strMessage+= '<br>'; strEmail +="\n";}
        $scope.strMessage += '<b>' + $scope.strGroupNames[n] + '</b>' + ': &nbsp;&nbsp;' + $scope.strItems[n];
        strEmail += $scope.strGroupNames[n] + "  -  " + $scope.strItems[n];
      }
      var strNL = "\n";
      var strURI = "mailto:gsheridan@gs0360.com?subject=Selected Materials&body=" + strFurnName + "\n\n";
      strURI += strEmail;
      $scope.cmdMessage.style = 'visibility: none;';
      $scope.strEmailMessage = strURI;
      // + "<br>" + "<input type=\"button\" class=\"button\" value=\"Create Email\" onclick=\"";
     $scope.objMessageDiv.innerHTML = $scope.strMessage;
  }
})


.controller('ChosenPalletteItemsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
