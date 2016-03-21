Template.portalSidebar.helpers({
});

Template.portalSidebar.events({
    'click .open-portal': function (e, instance) {
        SideNav.setFlex("portalSidebarFlex");
        SideNav.openFlex();
    }
});

