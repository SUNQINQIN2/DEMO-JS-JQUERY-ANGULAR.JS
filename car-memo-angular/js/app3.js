angular.module("carApp",[])
       .controller("carCtrl",["$http",function($http){
                 
           var cc = this;
           cc.updatedCarIdx = -1;
           cc.sortedColumn = "realName";
           cc.isReversed = false;
           cc.qryRealName = "";

           // console.log($http);

       	   cc.newCar = {
                     carNo:"闽C-888888",
                     realName:"王美丽",
                     sex:"f"
                 };


       	   // cc.carInfos = [
           //           {carNo:'闽A-DFJK9',realName:'王有财',sex:'m'},
           //           {carNo:'闽A-DFJK8',realName:'刘涛',sex:'f'}
       	   // ];

           $http({
              method:"GET",
              url:"http://localhost:8080/CarWork/carMgr?task=loadall"
           }).then(
                 function(resp){
                   cc.carInfos = resp.data;
                 },
                 function(resp){
                   console.log("fail");
                 }
              );

       	   cc.removeCar = function(idx){
       	   	cc.carInfos.splice(idx,1);
       	   }

           cc.testAjax = function(){

            var a = $http({
                    method:"POST",
                    url:"http://localhost:8080/CarWork/carMgr",
                    params:{
                      age:10,
                      username:"王海涛"
                    }
                  });

            console.log(a);

            a.then(
                 function(resp){
                   console.log(resp);
                 },
                 function(resp){
                   console.log("fail");
                 }
              );

           };
        
       	   cc.addCar = function(){
                    
                    $http({
                         method:"POST",
                         url:"http://localhost:8080/CarWork/carMgr?task=regCar",
                         params:cc.newCar
                      })
                      .then(function(resp){
                         cc.carInfos.push(cc.newCar);
                         $('#regCarModal').modal('hide');
                         cc.newCar = {sex:"m"}         
                      },function(resp){
                         console.log("err reg car!");
                      });
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