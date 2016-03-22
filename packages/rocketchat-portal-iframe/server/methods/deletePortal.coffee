Meteor.methods
    deletePortal: (portalId) ->
        portal = RocketChat.models.Portals.findOne(portalId)
        if not portal?
            throw new Meteor.Error 'invalid_portal', '[methods] deletePortal -> portal not found'

        RocketChat.models.Integrations.remove _id: portalId
        return true

