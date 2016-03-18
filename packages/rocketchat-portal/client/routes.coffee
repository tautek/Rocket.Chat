FlowRouter.route '/portal/:id',
    name: 'portal'

    action: (params) ->
        BlazeLayout.render 'main', {center: 'portal'}

