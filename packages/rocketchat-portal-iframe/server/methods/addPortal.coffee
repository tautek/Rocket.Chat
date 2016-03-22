Meteor.methods
    addPortal: (portal) ->
        if not _.isString(portal.group)
            throw new Meteor.Error 'invalid_portal', '[methods] addPortal -> group must be string'

        if not _.isString(portal.name)
            throw new Meteor.Error 'invalid_portal', '[methods] addPortal -> name must be string'

        if not _.isString(portal.url)
            throw new Meteor.Error 'invalid_portal', '[methods] addPortal -> url must be string'

        portal._createdAt = new Date
        portal._createdBy = RocketChat.models.Users.findOne @userId, {fields: {username: 1}}
        portal._id = RocketChat.models.Portals.insert portal
        return portal

