chrome.runtime.onMessage.addListener(function (command) {
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
		var current_url = tabs[0].url;
		var account_num = command.substring(command.length - 1);
		var update_url_regex = null;
		var update_acc = null;

		console.log(`START`);

		const google_meet_regex = '.*meet.google.com/([a-z0-9-]+).*';
		if (current_url.match(google_meet_regex)) {
			var meeting_id = current_url.match(google_meet_regex)[1];
			update_url_regex = RegExp(meeting_id);
			update_acc = meeting_id + '?pli=1&authuser=' + account_num;
		}

		const google_regex_type1 = '.*.google.*/u/[0-9].*';
		if (current_url.match(google_regex_type1)) {
			console.log(`OTHER`);
			update_url_regex = RegExp('u/[0-9]');
			update_acc = 'u/' + account_num;
		}

		const google_regex_type2 = '.*.google.*?authuser=[0-9].*';
		if (current_url.match(google_regex_type2)) {
			console.log(`OTHER`);
			update_url_regex = RegExp('authuser=[0-9]');
			update_acc = 'authuser=' + account_num;
		}

		if (update_acc && update_url_regex) {
			current_url = current_url.replace(update_url_regex, update_acc);
			console.log(current_url);
			if (command.substring(0, command.length - 1) == 'alt') {
				chrome.tabs.update({ url: current_url });
			} else {
				chrome.tabs.create({ url: current_url });
			}
		} else {
			console.log('Account switching is not supported on this page.');
		}
	});
});
