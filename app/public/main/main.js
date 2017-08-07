(function () {
  'use strict'
  angular.module('app', [])
  .component('classifieds', {
    // controller: Controller,
    templateUrl: 'main/main.html'
  });

  // Controller.$inject= ['$http'];
  // function Controller ($http) {
  //   const vm = this;
  //   vm.$onInit = function () {
  //     vm.posts = [];
  //     // $http.get('/api/posts')
  //     postStuff.getPosts()
  //     .then((response) => {
  //       vm.posts= response.data;
  //     })
  //     vm.tab = false;
  //   };
  //   vm.createPost = function (){
  //     event.preventDefault()
  //     console.log(postStuff.data);
  //
  //     vm.tab = false;
  //     postStuff.newPost(vm.post)
  //     .then((response)=>{
  //       postStuff.getPosts()
  //       .then((response) => {
  //         vm.posts=response.data;
  //       });
  //     });
  //     vm.posts.push(vm.post);
  //     delete vm.post;
  //   };
  //   vm.setTab = function (){
  //
  //     if (vm.tab === false) {
  //       vm.tab = true
  //     } else {
  //       vm.tab = false
  //     }
  //   }
  //
  //   vm.showComment = function (obj) {
  //       if(obj.show === true){
  //       obj.show = false;
  //     } else {
  //       obj.show = true;
  //     }
  //   }
  //   vm.createMessage = function (obj, comment) {
  //     let object= {};
  //     object.content= comment;
  //     $http.post('https://classifieds-server.herokuapp.com/'+ obj.id + '/comments', object )
  //     .then((response) => {
  //       obj.comments.push(response.data);
  //     })
  //     delete obj.comment;
  //   }
  //   vm.updatePosts = function (){
  //     postStuff.getPosts()
  //     .then((promise)=>{
  //       console.log("success", promise);
  //       vm.posts=promise.data;
  //       vm.tab = false;
  //     })
  //     .catch((promise)=>{
  //       console.log("error", promise);
  //
  //     })
  //   }
  // }
}());
