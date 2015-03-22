require(['notify'], function(Notify) {
    var

    // Build our notifications    
        helloWorld = new Notify({
            title: 'Hello World!',
            description: 'This is a notify.js message',
	    image: 'images/doggy.jpg',
	    imageAlt: 'doggy',
            enterClass: 'animated fadeInDown',
            exitClass: 'animated fadeOutUp',
            duration: 3000
        }),

        anotherMessage = new Notify({
            title: 'Another Message',
            description: 'Here is another message',
	    image: 'images/eagle.jpg',
	    imageAlt: 'eagle',
            enterClass: 'animated fadeInLeft',
            exitClass: 'animated fadeOutLeft',
            duration: 3000
        }),

        oneLastMessage = new Notify({
            title: 'One Last Message',
            description: 'This is one last message',
	    image: 'images/van.jpg',
	    imageAlt: 'van',
            enterClass: 'animated fadeInUp',
            exitClass: 'animated fadeOutDown'
        }),

        // Get buttons
        notifyOne = document.getElementById('notify-one'),
        notifyTwo = document.getElementById('notify-two'),
        notifyThree = document.getElementById('notify-three');

    // Event Listeners
    notifyOne.addEventListener('click', function(e) {
        e.preventDefault();
        helloWorld.go();
    });

    notifyTwo.addEventListener('click', function(e) {
        e.preventDefault();
        anotherMessage.go();
    });

    notifyThree.addEventListener('click', function(e) {
        e.preventDefault();
        oneLastMessage.go();
    });

});
