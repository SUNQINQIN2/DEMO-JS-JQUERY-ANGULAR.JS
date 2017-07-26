angular.module("carApp",[])
       .controller("carCtrl",["$http",function($http){
                 
                 var cc = this;

                 cc.showRegBtn = true;
                 cc.showUpdateBtn = false;
                 cc.updatedCarIdx = -1;

       	   cc.newCar = {
                     carNo:"闽C-888888",
                     realName:"王美丽",
                     sex:"女"
                 };

       	   cc.carInfos = [
                     {carNo:'闽A-DFJK9',realName:'王有财',sex:'男'},
                     {carNo:'闽A-DFJK8',realName:'刘涛',sex:'女'}
       	   ];

       	   cc.removeCar = function(idx){
       	   	cc.carInfos.splice(idx,1);
       	   }
        
       	   cc.addCar = function(){
                     cc.carInfos.push(cc.newCar);
                     $('#demoModal').modal('hide');
                     cc.newCar = {sex:"男"}
       	   }

                 cc.preUpdateCar = function(idx){
                     // cc.newCar = cc.carInfos[idx];
                     cc.newCar.carNo = cc.carInfos[idx].carNo;
                     cc.newCar.realName = cc.carInfos[idx].realName;
                     cc.newCar.sex = cc.carInfos[idx].sex;
                     
                     cc.updatedCarIdx = idx;

                     cc.showRegBtn = false;
                     cc.showUpdateBtn = true;
                     
                     $('#demoModal').modal({});

                 }

                 cc.updateCar = function(){
                     console.log(cc.updatedCarIdx);
                     cc.carInfos.splice(cc.updatedCarIdx,1,cc.newCar);

                     $('#demoModal').modal('hide');

                     cc.showRegBtn = true;
                     cc.showUpdateBtn = false;
                     cc.newCar = {sex:"男"};
                 }

       }]);