
app=angular.module('myApp',['ngGrid']);


app.controller('myAppController',['$scope',function($scope)
{
	console.log("entered ");
	$scope.modalShown=false;
	$scope.cardShown=false;
	 $scope.start=0;
     $scope.end=10;
     $scope.json=[{"name":"Ward Bell","address":"Dallas,Texas","orders":1},
                  {"name":"Robin Cleark","address":"Dallas,Texas","orders":2},
                  {"name":"Albert Einstein","address":"Dallas,Texas","orders":3},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":4},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":5},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":6},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":7},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":8},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":9},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":10},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":11},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":12},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":13},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":14},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":15},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":16},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":17},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":18},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":19},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":20},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":21},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":22},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":23},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":24},
                  {"name":"Ward Bell","address":"Dallas,Texas","orders":25}];
     $scope.gridOptions={data:'json'};
     $scope.listShown=false;
     $scope.toggleList=function()
     {
     	$scope.cardShown=false;
     	$scope.listShown=!$scope.listShown;
     	
     }
	$scope.toggleModal=function()
	{
		$scope.modalShown=!$scope.modalShown;
	}
	$scope.toggleCard=function()
	{
		
		$scope.listShown=false;
		$scope.cardShown=!$scope.cardShown;

     }
	$scope.listDisplay=function()
	{
		console.log("entered listDisplay");
		console.log("start: "+$scope.start);
		console.log("end: "+$scope.end);
		// $scope.json.splice($scope.start, $scope.end);
	
		$scope.start=$scope.end;
		$scope.end=$scope.end+10;
		console.log("start: "+$scope.start);
		console.log("end: "+$scope.end);
	}
	$scope.toggleInput=function()
	{
		$scope.listShown=false;
		$scope.cardShown=false;
    }
    $scope.click=function()
    {
    	$scope.listShown=false;
		$scope.cardShown=false;
		var name1=$("#name").val();
		var address1=$("#address").val();
		var orders1=$("#no").val();
		alert("entered Details");
		$scope.json.push({name:name1,address:address1,orders:orders1});
    }

}]);
app.directive('cardView',function()
{
	return{
	restrict:'CE',
    
    templateUrl:'sample1.html'
         }

});
app.filter('slice',function()
{
	return function(arr,start,end){
		   
			arr1=arr.slice(start,end);
			console.log("arr1 length:"+arr1.length);
		return arr;

	}
});
app.directive('toggleDirective',function()
{
	return{
		restrict:'E',
		scope:{
			show:'='
		},
		replace:true,
		transclude:true,
		link:function(scope,element,attrs)
		{
			 console.log("entered directive ");
			scope.dialogStyle={};
			if(attrs.width)
			{
				scope.dialogStyle.width=attrs.width;
			}
			if(attrs.height)
			{
				scope.dialogStyle.height=attrs.height;
			}
			scope.hideModel=function()
			{
				scope.show=false;
			};

		},
		template:"<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModel()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModel()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
	     };
});
app.filter('highlight', function() {
    return function(item, phrase) {
      var arr1=[];
      
       angular.forEach(item,function(text)
      {
         // console.log("name:"+text.name);  
            var str=text.name;
              var pattern=new RegExp('^'+phrase);
            // pattern=new RegExp('('+phrase+')', 'gi');
            if(pattern.test(str))
            {
              // console.log(pattern.test(str));
              arr1.push({name:str,address:text.name,orders:text.orders});
            }
           
       });
      
       var textlength= $("#text").val().length;
       // console.log("lenght:"+textlength);
       // console.log(arr1);
       if(!textlength)
       {
          arr1=[];
       }
       
      return arr1;
    }
  });

