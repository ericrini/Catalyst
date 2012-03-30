define(["jquery.mockjson"], function () {
	$.mockJSON.data.GROUP_NAMES = ["Weekend Warriors", "Beer Belly Brawlers"];
	$.mockJSON(/api.user/, {
		"userId": 1001,
		"email": "jason@gmail.com",
		"groups": [
			{
				"groupId": 1001,
				"groupName": "Weekend Warriors",
				"admin|0-1": false
			},
			{
				"groupId": 1002,
				"groupName": "Beer Belly Brawlers",
				"admin|0-1": true
			}
		]
	})
});