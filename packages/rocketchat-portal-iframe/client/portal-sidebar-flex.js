Template.portalSidebarFlex.helpers({

    active (...routes) {
    },

    portalGroups: function () {
        var portals = PortalsCollection.find().fetch();
        var grouped = _.chain(portals).groupBy("group")
                      .map(function(key, value) { return {group: value, portals: key}; } ); 
        return grouped.value();
    }
});

Template.portalSidebarFlex.events({
});

