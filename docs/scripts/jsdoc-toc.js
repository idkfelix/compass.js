(function($) {
    // TODO: make the node ID configurable
    var treeNode = $('#jsdoc-toc-nav');

    // initialize the tree
    treeNode.tree({
        autoEscape: false,
        closedIcon: '&#x21e2;',
        data: [{"label":"<a href=\"global.html\">Globals</a>","id":"global","children":[]},{"label":"<a href=\"module-CompassClient.html\">CompassClient</a>","id":"module:CompassClient","children":[{"label":"<a href=\"module-CompassClient.Accounts.html\">Accounts</a>","id":"module:CompassClient.Accounts","children":[]},{"label":"<a href=\"module-CompassClient.Activity.html\">Activity</a>","id":"module:CompassClient.Activity","children":[]},{"label":"<a href=\"module-CompassClient.Calendar.html\">Calendar</a>","id":"module:CompassClient.Calendar","children":[]},{"label":"<a href=\"module-CompassClient.LearningTasks.html\">LearningTasks</a>","id":"module:CompassClient.LearningTasks","children":[]},{"label":"<a href=\"module-CompassClient.TaskService.html\">TaskService</a>","id":"module:CompassClient.TaskService","children":[]},{"label":"<a href=\"module-CompassClient.Users.html\">Users</a>","id":"module:CompassClient.Users","children":[]}]}],
        openedIcon: ' &#x21e3;',
        saveState: false,
        useContextMenu: false
    });

    // add event handlers
    // TODO
})(jQuery);
