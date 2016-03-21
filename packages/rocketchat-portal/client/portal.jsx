var UnknownPortal = React.createClass({
    render() {
        return (
            <h1>Unknown Portal</h1>
        );
    }
});

Template.portal.helpers({
    Portal() {
        var id = FlowRouter.getParam("id");
        var portal_class = "Portal" + id;
        if (window.hasOwnProperty(portal_class))
        {
            return window[portal_class];
        } else { 
            return UnknownPortal;
        }
    }
});

