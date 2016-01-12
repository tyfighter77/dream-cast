angular.module('dreamCastApp')
.directive('trashDir', function(){
  return {
    template: '<div class="trashWrap" data-drop="true" data-jqyoui-options ng-model="removedId" jqyoui-droppable="{onDrop: \'delete\'}"><i class="fa fa-trash fa-3x"></i></div>'
  };
});
