$(function() {

	// submit form via POST, return data to modal
	$("#a_submit").click(function(event) {
		event.preventDefault();

		// fill modal with ajax from POST call
		$.post("/api/match", $("#a_form").serialize())
		.done(function(data) {
			console.log(`Matched with ${data.name}`);
			$("#friend_name").text(data.name);
			$("#friend_photo").attr("src", data.photo);
		})
		.fail(function() {
			console.log("failed POST call.")
		});

		// open modal
		$("#a_modal").modal();
		$("#a_modal").modal("open");

	});
})