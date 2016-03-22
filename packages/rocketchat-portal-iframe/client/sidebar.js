RocketChat.roomTypes.add('t', 5, {
    template: 'portalSidebar',
    icon: 'icon-chat-empty',
    route: {
        name: 'portal',
        path: '/portal/:id',
        action: (params, queryParams) => {
            Session.set('openedRoom', null);
	    Meteor.defer(function() { BlazeLayout.render('main', {center: 'portal'}) });
        },
        link: (sub) => {
            return { id: sub.id }
        }
    },
    condition: () => {
        return true;
    }
});

