Meteor.methods
    updatePortal: (portalId, portal) ->
        if not _.isString(portal.group)
            throw new Meteor.Error 'invalid_portal', '[methods] updatePortal -> group must be string'

        if not _.isString(portal.name)
            throw new Meteor.Error 'invalid_portal', '[methods] updatePortal -> name must be string'

        if not _.isString(portal.url)
            throw new Meteor.Error 'invalid_portal', '[methods] updatePortal -> url must be string'

        RocketChat.models.Portals.update portalId,
            $set:
                group: portal.group
                name: portal.name
                url: portal.url
                _updatedAt: new Date
                _updatedBy: RocketChat.models.Users.findOne @userId, {fields: {username: 1}}

        return RocketChat.models.Portals.findOne(portalId)

