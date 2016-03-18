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
        return UnknownPortal;
    }
});
