Meteor.publish 'portals', ->
    unless @userId
        return @ready()

    return RocketChat.models.Portals.find()

