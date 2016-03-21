RocketChat.roomTypes.add('t', 5, {
    template: 'portalSidebar',
    icon: 'icon-chat-empty',
    route: {
        name: 'portal',
        path: '/portal/:id',
        action: (params, queryParams) => {
            openRoom('t', params.id);
        },
        link: (sub) => {
            return { id: sub.id }
        }
    },
    condition: () => {
        return true;
    }
});

