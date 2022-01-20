require(["scriptRoot", "module"], function(root, module) {
    var message = root.message + "\n" + module.message + "\n";
    alert(message);
});
