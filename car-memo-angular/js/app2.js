angular.module("carApp",[])
       .controller("carCtrl",["$http",function($http){
                 
           var cc = this;
           cc.updatedCarIdx = -1;
           cc.sortedColumn = "realName";
           cc.isReversed = false;
           cc.qryRealName = "";

       	   cc.newCar = {
                     carNo:"闽C-888888",
                     realName:"王美丽",
                     sex:"f"
                 };

       	   cc.carInfos = [
                     {carNo:'闽A-DFJK9',realName:'王有财',sex:'m'},
                     {carNo:'闽A-DFJK8',realName:'刘涛',sex:'f'}
       	   ];

       	   cc.removeCar = function(idx){
       	   	cc.carInfos.splice(idx,1);
       	   }
        
       	   cc.addCar = function(){
                     cc.carInfos.push(cc.newCar);
                     $('#regCarModal').modal('hide');
                     cc.newCar = {sex:"m"}
       	   }

                 cc.preUpdateCar = function(idx){
                     // cc.newCar = cc.carInfos[idx];
                     cc.newCar.carNo = cc.carInfos[idx].carNo;
                     cc.newCar.realName = cc.carInfos[idx].realName;
                     cc.newCar.sex = cc.carInfos[idx].sex;
                     
                     console.log(cc.newCar);

                     cc.updatedCarIdx = idx;
                     
                     $('#updateCarModal').modal({});

                 }

                 cc.updateCar = function(){
                     console.log(cc.updatedCarIdx);
                     cc.carInfos.splice(cc.updatedCarIdx,1,cc.newCar);

                     $('#updateCarModal').modal('hide');
                     cc.newCar = {sex:"m"};
                 }

       }]);