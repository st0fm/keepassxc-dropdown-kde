
function isKeepassxc(client) {
	return client && !client.deleted && client.normalWindow && client.resourceName.toString() === "keepassxc";
}

function findKeepassxc() {
	let clients = workspace.windowList();
	return clients.find(client => isKeepassxc(client)) || null;
}

function isVisible(client) {
	return !client.minimized;
}

function isActive(client) {
	return client === workspace.activeWindow;
}

function activate(client) {
	workspace.activeWindow = client;
}

function setupClient(client) {
	print("setupClient");
	client.onAllDesktops = true;
	client.skipTaskbar = true;
	client.skipSwitcher = true;
	client.skipPager = true;
	client.keepAbove = true;
	// client.setMaximize(true, true);
	client.fullScreen = false;
	printClient(client);
}

function printClient(client) {
	print("resourceName=" + client.resourceName.toString() +
		";normalWindow=" + client.normalWindow +
		";onAllDesktops=" + client.onAllDesktops +
		";skipTaskbar=" + client.skipTaskbar +
		";skipSwitcher=" + client.skipSwitcher +
		";skipPager=" + client.skipPager +
		";keepAbove=" + client.keepAbove +
		";fullScreen=" + client.fullScreen +
		"");
}

function show(client) {
	client.minimized = false;
}

function hide(client) {
	client.minimized = true;
}

function toggleKeepassxc() {
	let keepassxc = findKeepassxc();
	if ( keepassxc ) {
		if ( isVisible(keepassxc) ) {
			if ( isActive(keepassxc) ) {
				hide(keepassxc);
			} else {
				activate(keepassxc);
			}
		} else {
			show(keepassxc);
			activate(keepassxc);
		}
	}
}

function setupKeepassxc(client) {
	if ( isKeepassxc(client) ) {
		setupClient(client);
		printClient(client);
	}
}

function init() {
	let keepassxc = findKeepassxc();
	if ( keepassxc ) {
		setupClient(keepassxc);
	}

	workspace.windowAdded.connect(setupKeepassxc);
	registerShortcut("Keepassxc Toggle", "Toggle Keepassxc open/closed.", "Meta+x", toggleKeepassxc);
}

init();

