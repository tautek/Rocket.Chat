Meteor.startup ->
	Tracker.autorun ->
		RocketChat.TabBar.removeButton 'portal-button'

