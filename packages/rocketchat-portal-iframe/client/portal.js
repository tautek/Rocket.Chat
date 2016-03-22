Template.portal.helpers({
    url: function() {
        var id = FlowRouter.getParam("id");
        var portal = PortalsCollection.findOne({_id: new Meteor.Collection.ObjectID(id)});
        return portal.url;
    }
});

