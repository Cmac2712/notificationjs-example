require(['notify'], function (Notify) {
    var
    
    // Build our notifications    
    helloWorld = new Notify({
	title: 'Hello World!',
	description: 'This is a notify.js message'
    }),
    
    anotherMessage = new Notify({
       title: 'Another Message',
       description: 'Here is another message'
    }),
    
    oneLastMessage = new Notify({
       title: 'One Last Message',
       description: 'This is one last message'
    }),
    
    // Get buttons
    notifyOne   = document.getElementById('notify-one'), 
    notifyTwo   = document.getElementById('notify-two'),
    notifyThree = document.getElementById('notify-three');

    // Event Listeners
    notifyOne.addEventListener('click', function (e) {
	e.preventDefault();
	helloWorld.go();
    });

    notifyTwo.addEventListener('click', function (e) {
	e.preventDefault();
	anotherMessage.go();
    });
    
    notifyThree.addEventListener('click', function (e) {
	e.preventDefault();
	oneLastMessage.go();
    });
});
