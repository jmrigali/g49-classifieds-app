(function () {
  'use strict'
  angular.module('app', [])
  .component('classifieds', {
    controller: Controller,
    templateUrl: 'main/main.html'
  });

  Controller.$inject= ['$http'];
  function Controller ($http) {
    const vm = this;
    vm.$onInit = function () {
      vm.posts = [];
      $http.get('https://classifieds-server.herokuapp.com/classifieds')
      .then((response) => {
        vm.posts= response.data;
      })
      vm.tab = false;

    };
    vm.post = {
      title: '',
      description: '',
      price: '',
      item_image: ''
    };

    vm.createPost = function (){
      event.preventDefault()
      $http.post('https://classifieds-server.herokuapp.com/classifieds', vm.post)
      .then((response) => {
        $http.get('https://classifieds-server.herokuapp.com/classifieds')
        .then((response) => {
          vm.posts= response.data;
        })
        .catch((err) => {
          console.error(err)
        })
        vm.tab = false;
      })
      .catch((err) => {
        console.error(err)
      })
      vm.posts.push(vm.post);
      delete vm.post;
    };
    vm.setTab = function (){

      if (vm.tab === false) {
        vm.tab = true
      } else {
        vm.tab = false
      }
    }

    vm.edit = function (obj) {
      if(obj.show) {
        obj.show = false;
      } else {
        obj.show = true;
      }
    }

    vm.getPost = function (obj) {
      let id = obj.id;
      $http.get('https://classifieds-server.herokuapp.com/classifieds/' + id)
      .then((response)=> {
        vm.post= response.data;
        return vm.edit(obj)
      })
    }
    vm.editClassified = function (obj) {
      let editObj = {
        id: obj.id,
        title: obj.title,
        description: obj.description,
        price: obj.price,
        item_image: obj.item_image
      };
      $http.patch('https://classifieds-server.herokuapp.com/classifieds/' + obj.id, editObj)
      .then((response)=> {
        console.log(response.data);
        vm.edit(obj);
      })
    }
   vm.deleteClassified = function (obj) {
     $http.delete('https://classifieds-server.herokuapp.com/classifieds/' + obj.id)
     .then(response=> {
       $http.get('https://classifieds-server.herokuapp.com/classifieds')
       .then((response) => {
         vm.posts= response.data;
       })
       .catch((err) => {
         console.error(err)
       })
     })
   }
  }
}());
